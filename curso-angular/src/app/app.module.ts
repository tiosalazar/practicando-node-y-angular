import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import { routing, appRoutingProviders} from "./app.routing";

//Custom Dependency
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//Custom Components
import { AppComponent } from './app.component';
import { UserListComponent } from './users/users-list.component';
import { UserDetailComponent } from './users/user.detail.component';
import { UserAddComponent } from './users/user.add.component';
import { UserEditComponent } from './users/user.edit.component';
//import { AlertDirective } from './_directives/alert.directive';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserAddComponent,
    UserEditComponent
  //  AlertDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
