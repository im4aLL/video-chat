import express, { Request, Response } from "express";
import cors from "cors";
import exphbs from 'express-handlebars';
import { IndexRoute } from "./routes/index.route";

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
app.get('/', IndexRoute);

/**
 * Server
 */
app.listen(port, () => console.log(`App listening at port: ${port}`));
