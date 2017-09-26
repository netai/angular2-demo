import { Component, OnInit} from '@angular/core';

import { UserModel } from '../../models';
import { ModelService } from '../../services';

@Component({
	moduleId: module.id,
	selector: 'user-list',
	templateUrl: 'user-list.component.html'
})

export class UserListComponent implements OnInit{

	public users: UserModel[] = [];

    constructor(private ms: ModelService){
    	this.users = ms.userService.users;
    }
    
    ngOnInit(){}

}
