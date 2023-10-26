import {UserRepository} from "../domain/user/user.repository";
import {UserEntity} from "../domain/user/user.entity";

export class UserUseCase{
  constructor(private readonly userRepository: UserRepository){}

  public getAllUsers = async (): Promise<UserEntity[] | null> => {
    return await this.userRepository.getAll();
  }

}