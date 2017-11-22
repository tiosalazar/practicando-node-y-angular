import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './users/users-list.component';
import { UserDetailComponent } from './users/user.detail.component';
import { UserAddComponent } from './users/user.add.component';
import { UserEditComponent } from './users/user.edit.component';

const appRoutes: Routes =[
   {path: '', component: UserListComponent },
   {path: 'usuario/:id', component: UserDetailComponent },
   {path: 'usuario-crear', component: UserAddComponent },
   {path: 'usuario-editar/:id', component: UserEditComponent },
   {path: '**', component: UserListComponent },
];

export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);