import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { Session } from 'src/app/models/sesion.model';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { StorageService } from 'src/app/Services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login! : FormGroup;
  public error! : {code: number, message: string};

  constructor( private fb : FormBuilder,
              private authenticationService: AuthenticationService,
              private storageService: StorageService,
              private router: Router) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.login = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  submitLogin() {
    if ( this.login.valid ){
    console.log(this.login);
    let newLogin = new Login(this.login.value);
    console.log(newLogin);
    this.authenticationService.login( newLogin )
      .subscribe(
        //data => this.correctLogin(data),
        data => {
          console.log(data)
        },
        error => this.error = JSON.parse(error._body)
      )
    }
  }

  private correctLogin( session : Session) {
    console.log('Sesion : ' + session);
    this.storageService.setCurrentSession( session );
    this.router.navigate(['/home']);
  }

}
