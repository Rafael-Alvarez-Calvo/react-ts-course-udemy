import request from 'supertest';
import server from '../../server';

describe('POST /api/products', () => {
    test('Should display validation errors', async () => {
        const response = await request(server).post('/api/products').send({});

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('errors');
        expect(response.body.errors).toHaveLength(4);

        expect(response.status).not.toBe(404);
        expect(response.body.errors).not.toHaveLength(2);
    });

    test('should create a new product', async () => {
        const response = await request(server).post('/api/products').send({
            name: 'Mouse Testing',
            price: 200,
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('data');

        expect(response.status).not.toBe(404);
        expect(response.body).not.toHaveProperty('errors');
    });

    test('Should validate that the price ir greater than 0', async () => {
        const response = await request(server).post('/api/products').send({
            name: 'Mouse Testing',
            price: 0,
        });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('errors');
        expect(response.body.errors).toHaveLength(1);

        expect(response.status).not.toBe(200);
        expect(response.body.errors).not.toHaveLength(4);
    });

    test('Should validate that the price is a number and greater than 0', async () => {
        const response = await request(server).post('/api/products').send({
            name: 'Mouse Testing',
            price: 'hola',
        });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('errors');
        expect(response.body.errors).toHaveLength(2);

        expect(response.status).not.toBe(200);
        expect(response.body.errors).not.toHaveLength(4);
    });
});

describe('GET /api/products', () => {
    test('Should check /api/products url exist', async () => {
        const response = await request(server).get('/api/products');
        expect(response.status).not.toBe(404);
    });

    test('Get a JSON response with product', async () => {
        const response = await request(server).get('/api/products');

        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body).toHaveProperty('data');
        expect(response.body.data).toHaveLength(1);

        expect(response.body).not.toHaveProperty('errors');
    });
});

describe('GET /api/products/:id', () => {
    test('Should return a 404 response for non-existed product', async () => {
        const productId = 2000;
        const response = await request(server).get(
            `/api/products/${productId}`
        );

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('error');
    });

    test('Should check a valid ID in the url', async () => {
        const response = await request(server).get(
            '/api/products/not-valid-url'
        );

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('errors');
        expect(response.body.errors).toHaveLength(1);
        expect(response.body.errors[0].msg).toBe(
            'ID no válido, debe ser un número'
        );
    });

    test('Get a JSON response for a single product', async () => {
        const response = await request(server).get('/api/products/1');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('data');

        expect(response.status).not.toBe(404);
        expect(response.body).not.toHaveProperty('erors');
    });
});

describe('PUT /api/products/:id', () => {
    test('Should check a valid ID in the url', async () => {
        const response = await request(server)
            .put('/api/products/not-valid-url')
            .send({
                name: 'Monitor nuevo - actualizado',
                price: 300,
                availability: false,
            });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('errors');
        expect(response.body.errors).toHaveLength(1);
        expect(response.body.errors[0].msg).toBe(
            'ID no válido, debe ser un número'
        );
    });

    test('Should display validation error messages when sending no data', async () => {
        const response = await request(server).put(`/api/products/1`).send({});

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('errors');
        expect(response.body.errors).toBeTruthy();
        expect(response.body.errors).toHaveLength(5);

        expect(response.status).not.toBe(200);
        expect(response.body).not.toHaveProperty('data');
    });

    test('Should validate price is greater than 0', async () => {
        const response = await request(server).put(`/api/products/1`).send({
            name: 'Monitor nuevo - actualizado',
            price: -300,
            availability: false,
        });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('errors');
        expect(response.body.errors).toBeTruthy();
        expect(response.body.errors).toHaveLength(1);

        expect(response.status).not.toBe(200);
        expect(response.body).not.toHaveProperty('data');
    });

    test('Should update the product with valid data', async () => {
        const response = await request(server).put('/api/products/1').send({
            name: 'Monitor nuevo - actualizado',
            price: 700,
            availability: false,
        });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('data');

        expect(response.status).not.toBe(400);
        expect(response.body).not.toHaveProperty('errors');
    });
});

describe('PATCH /api/products/:id', () => {
    it('should return a 404 response for a non-existing product', async () => {
        const productId = 2000;
        const response = await request(server).patch(
            `/api/products/${productId}`
        );
        expect(response.status).toBe(404);
        expect(response.body.error).toBe('Producto No Encontrado');
        expect(response.status).not.toBe(200);
        expect(response.body).not.toHaveProperty('data');
    });

    it('should update the product availability', async () => {
        const response = await request(server).patch('/api/products/1');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('data');
        expect(response.body.data.availability).toBe(true);

        expect(response.status).not.toBe(404);
        expect(response.status).not.toBe(400);
        expect(response.body).not.toHaveProperty('error');
    });
});

describe('DELETE /api/products/:id', () => {
    test('Should check a valid ID in the url', async () => {
        const response = await request(server).delete(
            '/api/products/not-valid-url'
        );

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('errors');
        expect(response.body.errors).toHaveLength(1);
        expect(response.body.errors[0].msg).toBe(
            'ID no válido, debe ser un número'
        );
    });

    test('Should display error when dont´t find a product', async () => {
        const response = await request(server).delete('/api/products/2000');

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('error');
        expect(response.body.error).toBe('Producto no encontrado');

        expect(response.status).not.toBe(200);
        expect(response.body).not.toHaveProperty('data');
    });

    test('Should delete product', async () => {
        const response = await request(server).delete('/api/products/1');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('data');
        expect(response.body.data).toBe(
            'El producto con id:1 se ha eliminado correctamente'
        );

        expect(response.status).not.toBe(400);
        expect(response.body).not.toHaveProperty('errors');
    });
});
