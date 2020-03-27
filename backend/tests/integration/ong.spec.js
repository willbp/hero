const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async() => {
        await connection.migrate.latest();
    });

    afterAll(async() => {
        await connection.destroy();
    });

    it('should be abe to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Willz",
                email: "contato@kkk.com",
                whatsapp: "1234567891",
                city: "Santa Maria",
                uf: "RS"
            });
        console.log(response.body);
        //npm test
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});