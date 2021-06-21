import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camperizacion',
  templateUrl: './camperizacion.component.html',
  styleUrls: ['./camperizacion.component.css']
})
export class CamperizacionComponent implements OnInit {
  public subOptionsTextVisible : boolean = false;
  public subOptionsMediaVisible : boolean = false;

  constructor(  ) { }

  ngOnInit(): void {
  }

  showSuboption( suboptionName : string) : void {
    console.log(suboptionName);
    if (suboptionName === ' texto') {
      this.subOptionsTextVisible = !this.subOptionsTextVisible;
      console.log('Texto : ' + this.subOptionsTextVisible);
  } else if (suboptionName === ' media'){
      this.subOptionsMediaVisible = !this.subOptionsMediaVisible;
      console.log('Media : ' + this.subOptionsTextVisible);
    }
  }

}
