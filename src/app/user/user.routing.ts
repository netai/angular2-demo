import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './components/user-list/user-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';

const appRoutes: Routes = [
    { path: '', component: UserListComponent },
    { path: 'add-user', component: AddUserComponent}
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
