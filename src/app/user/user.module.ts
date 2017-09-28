import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModelService } from './services/model.service';
import { ServerService } from './services/server.service';

import { routing } from './user.routing';
import { UserComponent } from './user.component';

import { UserListComponent } from './components/user-list/user-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';

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
        ServerService
    ],
    exports: [UserComponent]
})
export class UserModule {
    constructor() {}
}
