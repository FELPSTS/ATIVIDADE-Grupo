const request = require('supertest');
const app = require('../app'); // Certifique-se de que o caminho esteja correto

describe('Testes de Rotas de Pokémon', () => {

    it('Deve listar todos os pokemon (GET /pokemon)', async () => {
        const response = await request(app).get('/pokemon');
        expect(response.statusCode).toEqual(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    it('Deve criar um novo Pokémon com campos válidos (POST /pokemon)', async () => {
        const newPoke = {
            nome: 'pikachu',
            sexo: 'M',
            raca: 'Ili Pika',
            elemento: 'eletrico',
            foto: 'pikachu.jpg',
        };

        const response = await request(app)
            .post('/pokemon')
            .send(newPoke);
        expect(response.statusCode).toEqual(201);
        expect(response.body).toHaveProperty('_id');
    });

    it('Deve retornar erro ao criar um novo Pokémon com campos inválidos (POST /pokemon)', async () => {
        const invalidPoke = {
            elemento: 'raio',
            raca: 'raio',
            foto: 'pokemon.jpg',
        };

        const response = await request(app)
            .post('/pokemon')
            .send(invalidPoke);
        expect(response.statusCode).toEqual(400);
        expect(response.body).toHaveProperty('message');
    });

    it('Deve retornar erro ao acessar uma rota inexistente (GET /rota-inexistente)', async () => {
        const response = await request(app).get('/rota-inexistente');
        expect(response.statusCode).toEqual(404);
        expect(response.body).toHaveProperty('message');
    });

});
