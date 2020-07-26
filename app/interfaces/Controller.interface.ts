import { Request, Response } from "express";

export interface ControllerInterface {
  index?(request?: Request, response?: Response): void;
}
