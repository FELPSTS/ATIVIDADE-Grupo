const express=require('require');
const router = express.Router();

const pokemon =require('/models/pokemon');
const Pokemon = require('../models/pokemon');

router.get ('/',async(req,res)=>{
    try{
        const pokemon=await Pokemon.find();
        res.json(pokemon);
    }
    catch(err ){
        res.status(500).json({mensage:err,menssage});
    }
});
router.get('/:id', getContato, (req, res) => {
    res.json(res.contato);

});

router.post('/', async (req, res) => {

const pokemon = new Pokemon({
nome: req.body.nome,
sexo: req.body.sexo,
raca: req.body.raca,
elemento: req.body.elemneto,
foto: req.body.foto,
});

try{
    const newPokemon = await pokemon.save();

    res.status(201).json(newPokemon);
    }  
 catch (err) {
    res.status(400).json({ message: err.message });
    }
    });
    router.put('/:id', getPokemon, async (req, res) => {
        if (req.body.nome != null) {
    res.pokemon.nome = req.body.nome
    } //aqui
    if (req.body.sexo != null) {

        res.pokemon.sexo = req.body.sexo;
        
        }
        
        if (req.body.raça != null) {
        
        res.pokemon.raça = req.body.raça;
        
        }
        
        if (req.body.elemento != null) {
        
        res.pokemon.elemento = req.body.elemento;
        
        }
        
        if (req.body.foto != null) {
        
        res.pokemon.foto = req.body.foto;
        
        }
        
        try {
        
        const updatedPokemon = await res.pokemon.save();
        
        res.json(updatedpokemon);
        
        } catch (err) {
        
        res.status(400).json({ message: err.message });
        
        }
        
        });
        
        router.delete('/:id', getPokemon, async (req, res) => {
        
        try {
        
        await res.pokemon.deleteOne();
        
        res.json({ message: 'Pokemon excluído com sucesso!' });
        
        } catch (err) {
        
        res.status(500).json({ message: err.message });
        
        }
        
        });
        
        async function getPokemon(req, res, next) {
        
        try {
        
        const pokemon = await Pokemon.findById(req.params.id);
        
        if (pokemon == null) {
        
        return res.status(404).json({ message: 'Pokemon não encontrado' });
        
        }
        
        res.pokemon = pokemon;
        
        next();
        
        } catch (err) {
        
        return res.status(500).json({ message: err.message });
        
        }
        
        }
        
        module.exports = router;
        
        5. Configure o arquivo principal app.js: