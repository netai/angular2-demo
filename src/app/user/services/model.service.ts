import { Injectable } from '@angular/core';

import { UserService } from './user.service';

@Injectable()
export class ModelService {

    constructor(public userService: UserService){
        
    }
}
