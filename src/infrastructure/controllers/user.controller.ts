import { NextFunction, Response, Request } from "express";
import {UserUseCase} from "../../application/userUseCase";

export class UserController {
  constructor(private readonly userUseCase: UserUseCase) {}

  public showAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      res.send(await this.userUseCase.getAllUsers());
    }
    catch (err) {
      next(err)
    }
  }


}