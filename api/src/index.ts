import dotenv from 'dotenv';
import App from "./config/app";

dotenv.config();

const server = new App();


server.listen();