import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AventuraModel } from 'src/app/models/aventura.model';
import { AventuraService } from '../../../../Services/aventura.service';

@Component({
  selector: 'app-aventura-tarjet',
  templateUrl: './aventura-tarjet.component.html',
  styleUrls: ['./aventura-tarjet.component.css']
})
export class AventuraTarjetComponent implements OnInit {
  @Input() aventura! : AventuraModel;
  @Output() editAventura = new EventEmitter();
  @Output() delAventura = new EventEmitter();

  public loading : boolean = false;;

  constructor( private aventuraService : AventuraService ) { }

  ngOnInit(): void {
  }

  publicarAventura( event : any, aventura : AventuraModel){
    this.loading = true;
    console.log(event.target.checked);
    let publicado = event.target.checked;
    let newAventura = new AventuraModel();
    newAventura.publicado = publicado;
    newAventura.id = aventura.id;
    this.aventuraService.publicarAventura(newAventura)
    .subscribe( resp => {
      console.log(resp);
      aventura.publicado = publicado;
      this.loading = false;
  })
  }

  onEditAventura(){
    this.editAventura.emit();
  }

  onDeleteAventura(){
    this.delAventura.emit(true);
  }

  deleteAventura( aventura : AventuraModel ){
    this.loading = true;
    this.aventuraService.deleteAventura(aventura)
    .subscribe( resp => {
      this.onDeleteAventura();
      this.loading = false;
    });
  }

  checkAventura(aventura : AventuraModel, aventuraToDel : AventuraModel){
    return aventura.id !== aventuraToDel.id;
  }

}
