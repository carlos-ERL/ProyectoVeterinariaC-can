import { Injectable } from '@angular/core';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  createUser(user:User){
    //return this.firestore.collection('user-pet').add(user);
    console.log(user);
  }
}
