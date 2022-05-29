import { Injectable } from '@angular/core';
import { Quote } from '../models/quote';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor(private firestore:AngularFirestore) { }

  createDate(quote:Quote){
    return this.firestore.collection('quotes').add(quote);
  }
}
