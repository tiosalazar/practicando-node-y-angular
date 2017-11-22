import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class UserModule {
 
   constructor(
     public nombre:string,
     public _id:string,
     public apellido:string,
     private password:string
   	){}

 }
