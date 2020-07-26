import express from "express";
import cors from "cors";
import exphbs from 'express-handlebars';
import { Routes } from "./app/routes";

/**
 * Core
 */
const app = express();
app.use(cors());
const port = 3000;

/**
 * Template engine
 */
const hbs = exphbs.create({ extname: 'html' });
app.engine('html', hbs.engine);
app.set('view engine', 'html');
app.set('views', __dirname + '/public/views');

/**
 * Routing
 */
app.use('/', Routes);

/**
 * Server
 */
app.listen(port, () => console.log(`App listening at port: ${port}`));
