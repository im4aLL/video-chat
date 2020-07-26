import express from 'express';
import HomeController from "./controllers/HomeController";

const router = express.Router();
router.get('/', HomeController.index);

export { router as Routes };
