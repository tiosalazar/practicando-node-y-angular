import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';

import {AlbumService} from '../../services/album.service';
import {Album} from '../../models/album';


@Component({
   selector:'album-add',
   templateUrl : '../../views/albums/albums-add.html',
   providers:[AlbumService]
})

export class AlbumAddComponent implements OnInit {
   public titulo: string;
   public loading:boolean;
   public errorMessage : any;
   public confirmado:any;
   public album:  Album;
	constructor(
        private _albumService: AlbumService,
        private _route: ActivatedRoute,
        private _router: Router
		) {
    this.titulo="Crear Album nuevo";
  }
	 ngOnInit(){      
      this.album= new Album("","");
	 }
    OnSubmit(){
      this._albumService.addAlbum(this.album).subscribe(
         response =>{
             if (!response.obj ) {
               alert('error en el servidor');
             }else{
               this.album = response.obj;
                this._router.navigate(['/']);
              // this._router.navigate(['/album',this.album._id]);
             }
         },
         error => {
               this.errorMessage = <any>error;
              if (this.errorMessage != null) {
                console.log(this.errorMessage);
                alert('Error en la aplicación');
              }
         }

        );
   }




}