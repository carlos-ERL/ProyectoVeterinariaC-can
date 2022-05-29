import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore:AngularFirestore) { } 

  createUser(user:User){
    return this.firestore.collection('user-pet').add(user);
    
  }
}
