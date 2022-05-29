import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-waitlist',
  templateUrl: './waitlist.page.html',
  styleUrls: ['./waitlist.page.scss'],
})
export class WaitlistPage implements OnInit {
  quotes=[];
  dateFormated
  constructor(private dateServices:DateService) { 

    this.dateServices.getQuotes().subscribe( data=>{
       data.map(quote=>{

        if(quote.payload.doc.get("status")=="En espera"){
          this.quotes.push( {
            id:quote.payload.doc.id,
            idDoctor:quote.payload.doc.get('idDoctor'),
            idUser:quote.payload.doc.get('idUser'),
            description:quote.payload.doc.get('description'),
            creationDateQuote: quote.payload.doc.get('creationDateQuote'),
            dateQuote:quote.payload.doc.get('dateQuote'),
            status:quote.payload.doc.get('status'),
            petName:quote.payload.doc.get('petName'),
            photo:quote.payload.doc.get('photo'),
            color:quote.payload.doc.get('color'),
            weight:quote.payload.doc.get('weight'),
            race:quote.payload.doc.get('race'),
            particularSign:quote.payload.doc.get('particularSign'),
            size:quote.payload.doc.get('size')
          }as Quote);
        }

       
     })
         
   });
  }


  ngOnInit() {

  }

}
