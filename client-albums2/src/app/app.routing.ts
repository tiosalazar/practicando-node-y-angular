import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsListComponent } from './components/albums/album-list-component';
import { AlbumAddComponent } from './components/albums/album-add.component';
import { AlbumDetailComponent } from './components/albums/album-detail.component';
import { AlbumEditComponent } from './components/albums/album-edit.component';

import { ImageAddComponent } from './components/images/image-add.component';
import { ImageEditComponent } from './components/images/image-edit.component';

const appRoutes: Routes =[
   {path: '', component: AlbumsListComponent },
   {path: 'ver/album/:id', component: AlbumDetailComponent },
   {path: 'editar/album/:id', component: AlbumEditComponent },
   {path: 'crear/album', component: AlbumAddComponent },
   {path: 'crear/image/:album', component: ImageAddComponent },
   {path: 'editar/image/:id', component: ImageEditComponent },
   {path: '**', component: AlbumsListComponent },
];

export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);