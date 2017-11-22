import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import { routing, appRoutingProviders} from "./app.routing";

//Custom Dependency
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//Custom Components
import { AppComponent } from './app.component';
import { AlbumsListComponent } from './components/albums/album-list-component';
import { AlbumAddComponent } from './components/albums/album-add.component';
import { AlbumDetailComponent } from './components/albums/album-detail.component';
import { AlbumEditComponent } from './components/albums/album-edit.component';

//Componente Imagen
import { ImageAddComponent } from './components/images/image-add.component';
import { ImageEditComponent } from './components/images/image-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    AlbumsListComponent,
    AlbumAddComponent,
    AlbumDetailComponent,
    AlbumEditComponent,
    ImageAddComponent,
    ImageEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
