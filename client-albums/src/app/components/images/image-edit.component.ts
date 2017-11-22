import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {ImageService} from '../../services/image.service';
import {Image} from '../../models/image';
import {GLOBAL} from '../../services/globals';

@Component({
  selector: 'image-edit',
  templateUrl : '../../views/images/images-add.html',
  providers: [ImageService]
})
export class ImageEditComponent  implements OnInit{
   public titulo: string;
   public errorMessage : any;
   public loading:boolean;
   public image: Image;
   public is_edit:boolean;

   constructor(
       private _imageService: ImageService,
       private _route: ActivatedRoute,
        private _router: Router
   	 ){
       this.titulo="Editar imagen";
       this.is_edit=true;
   }
   ngOnInit(){
     this.image = new Image("","","");
     this.getImage();

   }


   getImage(){
      this._route.params.forEach((params:Params) =>{
             let id = params["id"];
             this._imageService.getImage(id).subscribe(     
             result =>{
                  this.image = result.obj;
                  if (!this.image) {
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
    this._route.params.forEach((params:Params) =>{
      let id = params['id'];

   	 this._imageService.editImage(id,this.image).subscribe(
         response =>{
             if (!response.obj ) {
             	alert('error en el servidor');
             }else{
             	this.image = response.obj;
             	this.makeFileRequest(GLOBAL.url+'image/upload/'+id,[],this.filesToUpload).then(
                      (result) =>{
                         this.resultUpload=result;
                         this.image.picture = this.resultUpload.filename;
                         this._router.navigate(['/ver/album',this.image.album]);
                      }, 
                      (error)=>{
                     console.log(error);
                      }

             		);
             	
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

   public filesToUpload: Array<File>;
   public resultUpload;

   fileChangeEvent(fileInput:any){
   	this.filesToUpload = <Array<File>>fileInput.target.files;
   }

   makeFileRequest(url:string, params:Array<string>,files:Array<File>){
     return new Promise((resolve,reject)=>{
     	var formData:any = new FormData();
     	var xhr = new XMLHttpRequest();

     	for(var i=0; i< files.length; i++){
     		 formData.append('image',files[i],files[i].name);
     	}

     	xhr.onreadystatechange = function (argument) {
     	  if ((xhr.readyState == 4) && (xhr.status==200)) {
     	  	 resolve(JSON.parse(xhr.response));
     	  }else{
     	  	 reject(xhr.response);
     	  }
     	}
     	xhr.open('POST',url,true);
     	xhr.send(formData);
 
     });
   }

}
