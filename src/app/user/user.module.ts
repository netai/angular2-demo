import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routing } from './user.routing';
import { UserComponent } from './user.component';

import { ModelService, ServerService, UserService } from './services';
import { UserListComponent, AddUserComponent } from './components';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        UserComponent,
        UserListComponent,
        AddUserComponent
    ],
    providers: [
        ModelService,
        ServerService,
        UserService
    ],
    exports: [UserComponent]
})
export class UserModule {
    constructor() {}
}
