import { Component, OnInit} from '@angular/core';

import { UserModel } from '../../models/user.model';
import { ModelService } from '../../services/model.service';

@Component({
  moduleId: module.id,
  selector: 'add-user',
  templateUrl: 'add-user.component.html'
})

export class AddUserComponent implements OnInit{

  public user: UserModel = new UserModel();

  constructor(private ms: ModelService){}

  ngOnInit(){}

  public addUser(): void {
    this.ms.us.users.push(new UserModel(this.user));
    console.log(this.ms.us.users);
    window.location.href = '#/';
  }

}
