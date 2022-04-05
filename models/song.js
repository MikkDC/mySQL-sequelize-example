const db =  require("../connection");
const { DataTypes } = require("sequelize");
const Album = require("./album");

const Song =  db.define("Song", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    indexed: [{unique: true, fields: ["name"]}]
});

Song.belongsTo(Album);

module.exports =  Song