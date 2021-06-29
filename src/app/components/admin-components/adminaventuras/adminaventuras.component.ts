import { Component, OnInit } from '@angular/core';
import { AventuraService } from 'src/app/Services/aventura.service';

@Component({
  selector: 'app-adminaventuras',
  templateUrl: './adminaventuras.component.html',
  styleUrls: ['./adminaventuras.component.css']
})
export class AdminaventurasComponent implements OnInit {

  constructor( private aventuraService : AventuraService ) { }

  ngOnInit(): void {
    this.getAventuras();
  }

  getAventuras() {
    let aventuras = this.aventuraService.getAventura()
    .subscribe( resp => {
      console.log(resp);
    })
  }

}
