import {UserEntity} from "./user.entity";

export interface UserRepository{
  getAll(): Promise<UserEntity[] | null>;
}