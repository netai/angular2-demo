import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './components/user-list/user-list.component';

const appRoutes: Routes = [
    {
        path: '',
        component: UserListComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
