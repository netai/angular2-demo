import { UserModel } from '../models/user.model';

export class UserService {

    public users: UserModel[];

    constructor(){
      this.users = [
        new UserModel(
          {
          firstname: 'Ram',
          lastname: 'Das',
          phone: '1234567890',
          city: 'kolkata',
          age: 20
          }
        ),
        new UserModel(
          {
              firstname: 'Ram',
              lastname: 'Das',
              phone: '1234567890',
              city: 'Kolkata',
              age: 20
          }
        )
      ];
    }
}
