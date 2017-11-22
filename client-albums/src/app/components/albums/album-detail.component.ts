import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {AlbumService} from '../../services/album.service';
import {ImageService} from '../../services/image.service';
import {Album} from '../../models/album';
import {Image} from '../../models/image';

@Component({
  selector: 'album-detail',
  templateUrl : '../../views/albums/albums-detail.html',
  providers: [AlbumService,ImageService]

})
export class AlbumDetailComponent implements OnInit {
   public errorMessage : any;
   public loading:boolean;
   public album: Album;
   public api_url:string;
   public images:Image[];
    constructor(
        private _albumService: AlbumService,
        private _imageservice: ImageService,
        private _route: ActivatedRoute,
        private _router: Router
    	){
        
    }
    ngOnInit(){
      this.api_url= this._imageservice.getApiUrl('image/file/');
      this.getAlbum();
    }

    getAlbum(){
    	this.loading=true;
    	this._route.params.forEach((params:Params) =>{
             let id = params["id"];
             this._albumService.getAlbum(id).subscribe(     
             result =>{
                  this.album = result.obj;
                  if (!this.album){
                    this._router.navigate(['/']);
                  }
                 else{
                   this._imageservice.getImages(result.obj._id)
                   .subscribe(
                      response =>{
                         this.images = response.obj;
                         if (!this.images) {
                           alert('Sim imagenes');
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

                  this.loading=false;
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
