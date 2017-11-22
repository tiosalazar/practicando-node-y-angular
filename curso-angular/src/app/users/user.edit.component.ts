import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {UserService} from '../_services/user.service';
import {UserModule} from '../models/user.module';

@Component({
  selector: 'user-edit',
  templateUrl: './user-add.html',
  providers: [UserService]
})
export class UserEditComponent  implements OnInit{
   public title: string;
   public errorMessage : any;
   public user: UserModule;

   constructor(
       private _userService: UserService,
       private _route: ActivatedRoute,
        private _router: Router
   	 ){
      this.title ="Editar Usuario"
   }
   ngOnInit(){
     this.user = new UserModule("","","","");
     this.getUser();

   }

   getUser(){
      this._route.params.forEach((params:Params) =>{
             let id = params["id"];
             this._userService.getUser(id).subscribe(     
             result =>{
                  this.user = result.obj;
                  if (!this.user) {
                    this._router.navigate(['/']);
                    alert('error en el servidor');
                  }
             },
             error =>{
                     console.log('error ...');
               this.errorMessage = <any>error;
 
              if (this.errorMessage != null) {
                console.log(this.errorMessage);
                alert('Error en la aplicación');
              }

             }
             
            
           );
      });
    }

   OnSubmit(){
   	 console.log(this.user);
    this._route.params.forEach((params:Params) =>{
      let id = params['id'];

   	 this._userService.editUser(id,this.user).subscribe(
         response =>{
             if (!response.obj ) {
             	alert('error en el servidor');
             }else{
             	this.user = response.obj;
             	this._router.navigate(['/user',this.user._id]);
             }
         },
         error => {
             console.log('error ...');
               this.errorMessage = <any>error;
 
              if (this.errorMessage != null) {
              	console.log(this.errorMessage);
              	alert('Error en la aplicación');
              }
         }

   	 	);
     });
   }

}
