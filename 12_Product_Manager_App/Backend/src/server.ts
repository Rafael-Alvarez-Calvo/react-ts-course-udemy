import express from 'express';
import router from './router';
import db from './config/db';
import colors from 'colors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger';

// Conectar con base de datos
export const connectDB = async () => {
    try {
        await db.authenticate();
        db.sync();
        console.log(
            colors.bgBlue.bold('La base de datos está conectada correctamente')
        );
    } catch (error) {
        console.log(
            colors.bgRed.bold(
                'Ha ocurrido un problema al conectarse a la base de datos.'
            )
        );
    }
};

connectDB();

const server = express();

server.use(express.json());
server.use('/api/products', router);

//Docs
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default server;
