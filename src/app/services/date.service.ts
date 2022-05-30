import { Injectable } from '@angular/core';
import { Quote } from '../models/quote';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor(private firestore:AngularFirestore) { }

  createQuote(quote:Quote){
    return this.firestore.collection('quotes').add(quote);
  }

  getQuotes() {
    return this.firestore.collection('quotes').snapshotChanges(); 
  }
  getQuotesInWaitList() {
    return this.firestore
    .collection('quotes', (ref) => ref.where('status', '==', 'En espera'))
    .snapshotChanges();
  }

  updateQuote(id,date,idDoctor){
    return this.firestore
    .doc('/quotes/' + id)
    .update({ dateQuote: date,status:'Agendada',idDoctor:idDoctor});
  }

  getQuotesByUserId(userId: string) {
    return this.firestore
      .collection('quotes', (ref) => ref.where('idUser', '==', userId))
      .snapshotChanges();
  }
  getQuotesByVeterinarianId(veterinarianId: string) {
    return this.firestore
      .collection('quotes', (ref) => ref.where('idDoctor', '==', veterinarianId))
      .snapshotChanges();
  }
}
