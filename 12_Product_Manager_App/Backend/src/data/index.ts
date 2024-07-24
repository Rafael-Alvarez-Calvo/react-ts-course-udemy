import { exit } from 'node:process';
import db from '../config/db';
import colors from 'colors';

const clearDB = async () => {
    try {
        await db.sync({ force: true });
        console.log(
            colors.bgYellow.bold(
                'La base de datos se ha restablecido correctamente'
            )
        );
        exit();
    } catch (error) {
        console.log(colors.bgRed.bold(error));
        exit(1);
    }
};

if (process.argv[2] === '--clear') {
    clearDB();
}
