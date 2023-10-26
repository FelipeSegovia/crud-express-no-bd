import {UserRepository} from "../../../domain/user/user.repository";
import {UserEntity} from "../../../domain/user/user.entity";

/*
* Para otros casos debe estar conectada a la BD y no
* a un MOCK_DATA y debe tener una carpeta
* config para la conexion y otra de Models
* */

const MOCK_DATA: UserEntity[] = [
  {
    name: "John Doe",
    address: "Manhattan",
  }
]
export class UserRepositoryImpl implements UserRepository{
  async getAll(): Promise<UserEntity[] | null> {
    return Promise.resolve(MOCK_DATA);
  }
}