import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv';

dotenv.config();

const db = new Sequelize(process.env.DATABASE_URL, {
    models: [`${__dirname}/../models/**/*.ts`],
    logging: false // Despues de realizar los test no se pueden enviar mensajes de log con esta linea evitamos el error con eso en los test
});

export default db;