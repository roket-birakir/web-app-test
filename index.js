import express from "express";
import "dotenv/config";

import authRouter from './routers/authRouter.js';

const server = express();
const port = process.env.PORT;
server.set("view engine", "ejs");
server.use(express.static('public'));
server.use(express.urlencoded({extended: true}));

server.get('/', (req, res) => {
    res.render("index");
});

server.use('/auth', authRouter);
server.listen(port, () => console.log(`Server Start: ${new Date().toLocaleString()}`));
