import express from "express";
import "dotenv/config";
import session from "express-session";

import authRouter from './routers/authRouter.js';

const server = express();
const port = process.env.PORT;
server.set("view engine", "ejs");
server.use(
    session({
        secret: process.env.SESSION_KEY,
        saveUninitialized: true,
        resave: false
    })
);
server.use((req, res, next) => {
    res.locals.session = req.session;
    next();
})


server.get('/', (req, res) => {
    res.render("index");
});

server.use('/auth', authRouter);
server.listen(port, () => console.log(`Server Start: ${new Date().toLocaleString("tr-TR")}`));