require("dotenv").config();
require("./connection");

const Artist = require("./models/artist");
const Album = require("./models/album");
const Song = require("./models/song");

// Basically our main() function
(async () => {
    await Artist.sync({alter: true});
    await Album.sync({alter: true});
    await Song.sync({alter: true});

    const artist = await Artist.create({name: "Nirvana"});
    const album = await Album.create({name: "Nevermind", ArtistId: artist.id});
    const song = await Song.create({name: "Smells Like Teen Spirit", AlbumId: album.id});

    for (const song of await Song.findAll({include: Album})) {
	const al1 = await song.getAlbum();
	const al2 = await Album.findOne({include: Artist, where: {name: al1.name}});
	const artistName = await al2.getArtist();

	console.log(`${song.name} by ${artistName.name} on ${al2.name}`);
    }
})();