import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from '../models/sesion.model';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private localStorageService: any;
  private currentSession : Session = {};

  constructor(  private router : Router) {
                this.localStorageService = localStorage;
                this.currentSession = this.loadSessionData();
   }

   setCurrentSession( session : Session ) : void {
     this.currentSession = session;
     this.localStorageService.setItem('currentUser', JSON.stringify(session));
   }

   loadSessionData() : Session {
     let sessionvalue = this.localStorageService.getItem('currentUser');
     return (sessionvalue) ? <Session> JSON.parse(sessionvalue) : {};
   }

   getCurrentSession() : Session {
     return this.currentSession;
   }

   removeCurrentSession() : void {
      this.localStorageService.removeItem('currentUser');
      this.currentSession = {};
   }

   getCurrentUser() : UserModel {
     let session : Session = this.getCurrentSession();
     return ( session && session.user ) ? session.user : {};
   }

   isAuthenticated() : boolean {
     return ( this.getCurrentToken() !== null ) ? true : false;
   }

   getCurrentToken() : string {
      let session = this.getCurrentSession();
      return (session && session.token ) ? session.token : '';
    }

    logout() : void {
      this.removeCurrentSession();
      this.router.navigate(['/login']);
    }
}
