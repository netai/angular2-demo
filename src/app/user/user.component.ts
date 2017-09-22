import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
	<div class="user-module">
	    <router-outlet></router-outlet>
	</div>
  `
})

export class UserComponent {
    constructor(){}
}