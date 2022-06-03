import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private firestore:AngularFirestore, private authFire: AngularFireAuth) { }

  login(mail: string, pass:string){
      return this.authFire.signInWithEmailAndPassword(mail, pass)
  }
  
}
