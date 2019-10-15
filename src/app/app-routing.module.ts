import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent, PathNotFoundComponent } from './core';
import { DepartmentComponent, UsersComponent, AuthGuard } from '.';

const routes: Routes = [
    {
        path: 'home',
        component: DepartmentComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'user',
        component: UsersComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        // The router will match this route if the URL requested
        // doesn't match any paths for routes defined in our configuration
        path: '**',
        component: PathNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
