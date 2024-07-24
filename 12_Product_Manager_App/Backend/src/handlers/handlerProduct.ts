import { Request, Response } from 'express';
import Product from '../models/Products.model';

export const getProducts = async (req: Request, res: Response) => {
    const products = await Product.findAll({
        order: [['id', 'DESC']],
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    res.json({ data: products });
};

export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Product.findByPk(id, {
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (!product)
        return res.status(404).json({
            error: 'Producto no encontrado',
        });

    res.json({ data: product });
};

export const createProduct = async (req: Request, res: Response) => {
    const product = await Product.create(req.body);
    res.status(201).json({ data: product });
};

//PUT -> Hacer cambios en general, sin el req.body no vienen alguno de los parámetros que hay en la tabla PUT se carga los valores que ya tenia ese producto en esas columnas
export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Product.findByPk(id, {
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    // De esta manera en vez de usar update() de sequelize, el put lo que hace es que si alguno viene vacio ese valor lo deja en blanco para ese producto
    // product.name = req.body.name;
    // product.price = req.body.price;
    // product.availability = req.body.availability;

    await product.update(req.body); // Con esto evitamos que PUT sobreescriba todo sino vienen algun key en el req.body
    await product.save();

    res.json({ data: product });
};

//PATCH -> Sólo se limita a hacer cambios específicos sin cargarse lo demás sino vienen esos parametros
export const updateAvailabilityProduct = async (
    req: Request,
    res: Response
) => {
    const { id } = req.params;
    const product = await Product.findByPk(id, {
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (!product)
        return res.status(404).json({
            error: 'Producto No Encontrado',
        });

    product.availability = !product.dataValues.availability;
    await product.save();

    res.json({ data: product });
};

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Product.findByPk(id, {
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (!product)
        return res.status(404).json({
            error: 'Producto no encontrado',
        });

    await product.destroy();
    res.json({
        data: `El producto con id:${id} se ha eliminado correctamente`,
    });
};
