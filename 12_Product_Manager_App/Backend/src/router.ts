import { Router } from 'express';
import { body, param } from 'express-validator';
import { handleInputErrors } from './middleware';
import {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    updateAvailabilityProduct,
    deleteProduct,
} from './handlers/handlerProduct';

const router = Router();
/**
 * @swagger
 * components:
 *      schemas:
 *       Product:
 *           type: object
 *           properties:
 *               id:
 *                  type: integer
 *                  desciption: The product ID
 *                  example: 1
 *
 *               name:
 *                  type: string
 *                  desciption: The product Name
 *                  example: Monitor curvo 32 pulgadas
 *
 *               price:
 *                  type: number
 *                  desciption: The product Price
 *                  example: 500
 *
 *               availability:
 *                  type: boolean
 *                  desciption: The product Availability
 *                  example: true
 */

/**
 * @swagger
 * /api/products:
 *      get:
 *          summary: Get a list of products
 *          tags:
 *              - Products
 *          description: This endpoint return a list of products
 *          responses:
 *                  200:
 *                      description: Succesful response
 *                      content:
 *                        application/json:
 *                                     schema:
 *                                          type: array
 *                                          items:
 *                                              $ref: '#/components/schemas/Product'
 *
 */

router.get('/', getProducts);

router.get(
    '/:id',
    param('id').isInt().withMessage('ID no válido, debe ser un número'),
    handleInputErrors, // Middleware which check for errors
    getProductById
);

router.post(
    '/',
    //Validacion
    body('name').notEmpty().withMessage('Este campo no puede ir vacio'),
    body('price')
        .isNumeric()
        .withMessage('El valor introducido debe ser un número')
        .notEmpty()
        .withMessage('Este campo no puede ir vacio')
        .custom((value) => value > 0)
        .withMessage('El precio debe ser mayor a 0'),
    handleInputErrors, // Middleware which check for errors
    createProduct
);

router.put(
    '/:id',
    param('id').isInt().withMessage('ID no válido, debe ser un número'),
    body('name').notEmpty().withMessage('Este campo no puede ir vacio'),
    body('price')
        .isNumeric()
        .withMessage('El valor introducido debe ser un número')
        .notEmpty()
        .withMessage('Este campo no puede ir vacio')
        .custom((value) => value > 0)
        .withMessage('El precio debe ser mayor a 0'),
    body('availability')
        .isBoolean()
        .withMessage('El valor introducido debe ser un booleano'),
    handleInputErrors, // Middleware which check for errors
    updateProduct
);

router.patch(
    '/:id',
    param('id').isInt().withMessage('ID no válido, debe ser un número'),
    handleInputErrors, // Middleware which check for errors
    updateAvailabilityProduct
);

router.delete(
    '/:id',
    param('id').isInt().withMessage('ID no válido, debe ser un número'),
    handleInputErrors, // Middleware which check for errors
    deleteProduct
);

export default router;
