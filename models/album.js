const db =  require("../connection");
const { DataTypes } = require("sequelize");
const Artist = require("./artist");

const Album = db.define("Album", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    indexed: [{unique: true, fields: ["name"]}]
});

Album.belongsTo(Artist);

module.exports = Album;