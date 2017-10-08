import { Injectable } from '@angular/core';

import { UserModel } from '../models';
import { ServerService } from './server.service';

@Injectable()
export class UserService {

    public users: UserModel[] = [];

    constructor(private serverService: ServerService){
        this.serverService.getAllUsers()
        .subscribe(
            users => {
                for(let idx in users){
                    this.users.push(new UserModel(users[idx]));
                }
            },
            error => {
                console.log('Error fetching users data', error);
            }
        );
    }
}
