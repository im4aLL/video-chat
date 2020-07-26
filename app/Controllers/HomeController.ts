import { Request, Response, NextFunction } from "express";

export class HomeController {
  static index(request: Request, response: Response, next: NextFunction) {
    response.render('home', {
      title: 'Hey',
      message: 'Hello there!'
    });
  }
}
