import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {UserModule} from '../models/user.module';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'users-list',
	templateUrl : './users-list.html',
	providers: [UserService]
})

export class UserListComponent implements OnInit  {
	 public loading:boolean;
   public errorMessage : any;
   public confirmado:any;
   public users:  UserModule[];

	 constructor(
          private _userService: UserService
          
	 	){
        this.loading =true;
	 }

	 ngOnInit(){      
   this.getUsers();
	 }

   getUsers(){
     this._userService.getUsers().subscribe(     
             result =>{
                  console.log(this.users);
                  this.users = result.obj;
                   console.log(this.users);
                  if (!this.users) {
                    alert('error en el servidor');
                  }else{
                     this.loading =false;
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

   }

   onBorrarConfirmar(id:string){
   this.confirmado = id;
   }
   onCanchearConfirmar(){
     this.confirmado = null;
   }

   onBorrarUser(id:string){
     this._userService.deleteUser(id).subscribe(
       result => {
         console.log();
            if (result.error !='' ) {
               alert('error en el servidor');
             }else{
               this.getUsers();
             }

       },error =>{
       console.log('error ...');
               this.errorMessage = <any>error;
 
              if (this.errorMessage != null) {
                console.log(this.errorMessage);
                alert('Error en la aplicación');
              }
       }
      
       );
   }


	}