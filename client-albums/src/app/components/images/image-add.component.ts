import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';

import {ImageService} from '../../services/image.service';
import {Image} from '../../models/image';


@Component({
   selector:'image-add',
   templateUrl : '../../views/images/images-add.html',
   providers:[ImageService]
})

export class ImageAddComponent implements OnInit {
   public titulo: string;
   public loading:boolean;
   public errorMessage : any;
   public confirmado:any;
   public image:  Image;
	constructor(
        private _imageService: ImageService,
        private _route: ActivatedRoute,
        private _router: Router
		) {
    this.titulo="Cargar nueva imagen";
  }
	 ngOnInit(){      
      this.image= new Image("","","");
	 }
    OnSubmit(){
    	this._route.params.forEach((params:Params) =>{
    		let album_id = params['album'];
    		this.image.album=album_id;
          this._imageService.addImage(this.image).subscribe(
         response =>{
             if (!response.obj ) {
               alert('error en el servidor');
             }else{
               this.image = response.obj;
               //  this._router.navigate(['/']);
               this._router.navigate(['editar/image/',response.obj._id]);
             }
         },
         error => {
               this.errorMessage = <any>error;
              if (this.errorMessage != null) {
                console.log(this.errorMessage);
                alert('Error en la aplicación');
              }
         });
    	});
    
   }




}