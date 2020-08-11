const mongoose = require('mongoose');
// require('dotenv').config();

const dbConection = async() => {

    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('DB online');

    } catch (error) {

        console.log(error);
        throw new Error('Error al iniciar base de datos');

    }
};

SEED = '@este-es@-un-sedd-dificil';

module.exports = {
    dbConection,
    SEED
};

// module.exports.SEED = '@este-es@-un-sedd-dificil';