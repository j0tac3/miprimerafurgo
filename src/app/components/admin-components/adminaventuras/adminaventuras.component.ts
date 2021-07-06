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
  public currentAventura! : AventuraModel;
  public message! : string;
  public aventurasCargadas = false;
  public showAddAventura = false;
  public ocultarVentanaTabla = false;

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
    let aventurasBeforeDel = this.aventuras.filter(aventura => this.checkAventura(aventura, aventuraToDel));
    this.aventuras = aventurasBeforeDel;
    /* this.aventuraService.deleteAventura(aventuraToDel)
    .subscribe( resp => {
      let aventurasBeforeDel = this.aventuras.filter(aventura => this.checkAventura(aventura, aventuraToDel));
      this.aventuras = aventurasBeforeDel;
      this.message = `La aventura "${aventuraToDel.titulo}" ha sido eliminada.`;
    }) */
  }

  checkAventura(aventura : AventuraModel, aventuraToDel : AventuraModel){
    return aventura.id !== aventuraToDel.id;
  }

  editarAventura( aventura : AventuraModel){
    console.log("Editando");
    this.currentAventura = aventura;
    this.showAddAventura = true;
  }

/*   publicarAventura( event : any, aventura : AventuraModel){
    console.log(event.target.checked);
    let publicado = event.target.checked;
    let newAventura = new AventuraModel();
    newAventura.publicado = publicado;
    newAventura.id = aventura.id;
    this.aventuraService.publicarAventura(newAventura)
    .subscribe( resp => {
      console.log(resp);
      aventura.publicado = publicado;
    })
  }
 */
  addAventura( aventura : AventuraModel){
    this.aventuras.unshift(aventura);
    this.showAddAventura = false;
  }

  showCreateAventura(){
    this.currentAventura = new AventuraModel();
    this.showAddAventura = true;
  }

  cerrarVista(){
    this.showAddAventura = false;
  }

  closeModel(){
    this.message = '';  
  }

  ocultarVentana(){
    console.log('ocultando ventana');
    this.ocultarVentanaTabla = true;
  }

  ocultarVentanaActivo(){
    return this.ocultarVentanaTabla;
  }
}
