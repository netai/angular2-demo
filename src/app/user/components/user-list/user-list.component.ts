import { Component, OnInit} from '@angular/core';

import { UserModel } from '../../models/user.model';
import { ModelService } from '../../services/model.service';

@Component({
	moduleId: module.id,
	selector: 'user-list',
	templateUrl: 'user-list.component.html'
})

export class UserListComponent implements OnInit{

	public users: UserModel[] = [];

    constructor(private ms: ModelService){
    	this.users = ms.us.users;
    }

		ngOnInit(){}

}
