import express, { Router } from 'express';
import { HomeController } from "../app/Controllers/HomeController";

const register = (): Router => {
  const router = express.Router();
  router.get('/', HomeController.index);

  return router;
};

export const IndexRoute: Router = register();
