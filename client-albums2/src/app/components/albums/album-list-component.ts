import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';

import {AlbumService} from '../../services/album.service';
import {Album} from '../../models/album';


@Component({
   selector:'albums-list',
   templateUrl : '../../views/albums/albums-list.html',
   providers:[AlbumService]
})

export class AlbumsListComponent implements OnInit {
   public titulo: string;
   public loading:boolean;
   public errorMessage : any;
   public confirmado:any;
   public albums:  Album[];
	constructor(
        private _albumService: AlbumService,
        private _route: ActivatedRoute,
        private _router: Router
		) {
		this.titulo="Listado de Albumes";
	}
	 ngOnInit(){      
      this.getAlbums();
	 }

   getAlbums(){
   	 this.loading=true;
     this._albumService.getAlbums().subscribe(     
             result =>{
                  console.log(this.albums);
                  this.albums = result.obj;
                   console.log(this.albums);
                  if (!this.albums) {
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

   onBorrarAlbum(id:string){
     this._albumService.deleteAlbum(id).subscribe(
       result => {
         console.log();
            if (result.error !='' ) {
               alert('error en el servidor');
             }else{
               this.getAlbums();
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