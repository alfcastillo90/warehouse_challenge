require('dotenv').config();

export = {
    port: process.env.PORT,
    databaseName: process.env.DATABASE_NAME,
    nodeEnv: process.env.NODE_ENV
}

