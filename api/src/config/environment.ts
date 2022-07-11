require('dotenv').config();

export = {
    port: process.env.PORT,
    mongoUrl: process.env.MONGODB_URL as string,
    nodeEnv: process.env.NODE_ENV
}

