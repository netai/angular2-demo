import { UserService } from './user.service';

export class ModelService {
    public UserService: UserService = new UserService();
    
    constructor(){}
}