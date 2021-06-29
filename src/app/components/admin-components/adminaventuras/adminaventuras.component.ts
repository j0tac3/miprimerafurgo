import { Component, OnInit } from '@angular/core';
import { AventuraModel } from 'src/app/models/aventura.model';
import { AventuraService } from 'src/app/Services/aventura.service';

@Component({
  selector: 'app-adminaventuras',
  templateUrl: './adminaventuras.component.html',
  styleUrls: ['./adminaventuras.component.css']
})
export class AdminaventurasComponent implements OnInit {
  public aventuras : AventuraModel[] = [];
  public message! : string;

  constructor( private aventuraService : AventuraService ) { }

  ngOnInit(): void {
    this.getAventuras();
  }

  getAventuras() {
    this.aventuraService.getAventura()
    .subscribe( resp => {
     this.aventuras = resp['data'];
     console.log(this.aventuras);
    })
  }

  delAventura( aventuraToDel : AventuraModel ){
    this.aventuraService.deleteAventura(aventuraToDel)
    .subscribe( resp => {
      console.log(resp);
      this.aventuras = this.aventuras.filter(aventura => {
        aventura.id !== aventuraToDel.id;
        this.message = `La aventura "${aventuraToDel.titulo}" ha sido eliminada.`;
      })
    })
  }

  closeModel(){
    this.message = '';  
  }
}
