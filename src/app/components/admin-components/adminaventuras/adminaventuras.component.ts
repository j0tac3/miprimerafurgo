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
  public aventurasCargadas = false;

  constructor( private aventuraService : AventuraService ) { }

  ngOnInit(): void {
    this.getAventuras();
  }

  getAventuras() {
    this.aventuraService.getAventura()
    .subscribe( resp => {
      this.aventuras = resp['data'];
      console.log(this.aventuras);
      this.aventurasCargadas = true;
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

  publicarAventura( event : any, aventura : AventuraModel){
    console.log(event.target.checked);
    let publicado = event.target.checked;
    let newAventura = new AventuraModel();
    newAventura.publicado = publicado;
    newAventura.id = aventura.id;
    this.aventuraService.publicarAventura(newAventura)
    .subscribe( resp => {
      console.log(resp);
    })
  }

  closeModel(){
    this.message = '';  
  }
}
