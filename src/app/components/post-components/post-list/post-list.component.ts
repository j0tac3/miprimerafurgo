import { Component, OnInit } from '@angular/core';
import { AventuraModel } from 'src/app/models/aventura.model';
import { UserModel } from 'src/app/models/user.model';
import { AventuraService } from 'src/app/Services/aventura.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  public aventuras : AventuraModel[] = [];
  public aventurasSeleccionadas : AventuraModel[] = [];
  public aventurasCargadas = false;
  public numAventuras : number = 1;

  constructor( private aventuraService : AventuraService) { }

  ngOnInit(): void {
    this.getAventuras();
  }

  getAventuras() {
    this.aventuraService.getAventurasPublicadas()
    .subscribe( resp => {
     this.aventuras = resp['data'];
     this.aventurasSeleccionadas = resp['data'];
     console.log(this.aventuras);
     this.aventurasCargadas = true;
     this.numAventuras = this.aventuras.length;
    })
  }

  changeSearchingText( text : string){
    if (text.length > 0) {
      this.aventurasSeleccionadas = this.aventuras.filter( aventura => aventura.titulo?.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
    } else {
      this.aventurasSeleccionadas = this.aventuras;
    }
  }

}
