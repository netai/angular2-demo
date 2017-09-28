import { Component, OnInit} from '@angular/core';

import { UserModel } from '../../models';
import { ModelService } from '../../services';

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
    this.ms.userService.users.push(new UserModel(this.user));
    console.log(this.ms.userService.users);
    window.location.href = '#/';
  }

}
