import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {UserService} from '../_services/user.service';
import {UserModule} from '../models/user.module';


@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.html' ,
  providers: [UserService]

})
export class UserDetailComponent implements OnInit {
   public errorMessage : any;
   public user: any;
    constructor(
        private _userService: UserService,
        private _route: ActivatedRoute,
        private _router: Router
    	){
        
    }
    ngOnInit(){
      this.getUser();
    }

    getUser(){
    	this._route.params.forEach((params:Params) =>{
             let id = params["id"];
             this._userService.getUser(id).subscribe(     
             result =>{
                  this.user = result.obj;
                  if (!this.user) {
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
}
