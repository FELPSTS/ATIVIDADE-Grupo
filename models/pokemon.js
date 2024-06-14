const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({

nome: {
type: String,
required: true,
},

sexo: {
type: String,
required: true,
},

raca: {
type: String,
required: true,
},

elemento: {
type: String,
required: true,
},

foto: {
type: String,
required: true,
},

});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;