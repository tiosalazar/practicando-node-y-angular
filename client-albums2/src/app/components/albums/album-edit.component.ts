import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {AlbumService} from '../../services/album.service';
import {Album} from '../../models/album';

@Component({
  selector: 'album-edit',
  templateUrl : '../../views/albums/albums-add.html',
  providers: [AlbumService]
})
export class AlbumEditComponent  implements OnInit{
   public title: string;
   public errorMessage : any;
   public loading:boolean;
   public album: Album;

   constructor(
       private _albumService: AlbumService,
       private _route: ActivatedRoute,
        private _router: Router
   	 ){
      this.title ="Editar Usuario"
   }
   ngOnInit(){
     this.album = new Album("","");
     this.getAlbum();

   }

   getAlbum(){
      this._route.params.forEach((params:Params) =>{
             let id = params["id"];
             this._albumService.getAlbum(id).subscribe(     
             result =>{
                  this.album = result.obj;
                  if (!this.album) {
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
   	 console.log(this.album);
    this._route.params.forEach((params:Params) =>{
      let id = params['id'];

   	 this._albumService.editAlbum(id,this.album).subscribe(
         response =>{
             if (!response.obj ) {
             	alert('error en el servidor');
             }else{
             	this.album = response.obj;
             	this._router.navigate(['/album',id]);
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
