import { Request, Response } from "express";
import { ControllerInterface } from "../interfaces/Controller.interface";
import { Controller } from "./Controller";

class HomeController extends Controller implements ControllerInterface {
  index(request: Request, response: Response): void {
    response.render('home', {
      title: 'Hey',
      message: 'Hello there!'
    });
  }
}

export default new HomeController();
