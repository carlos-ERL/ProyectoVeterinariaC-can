import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore:AngularFirestore) { } 

  createUser(user:User){
    return this.firestore.collection('users').add(user);
    
  }

  getUsers() {
    return this.firestore.collection('users').snapshotChanges(); 
  }

  getUserById(id: string) {
    return this.firestore.collection('users').doc(id).ref;
  }
}
