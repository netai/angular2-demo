import { UserService } from './user.service';

export class ModelService {
    public us: UserService = new UserService();

    constructor(){}
}
