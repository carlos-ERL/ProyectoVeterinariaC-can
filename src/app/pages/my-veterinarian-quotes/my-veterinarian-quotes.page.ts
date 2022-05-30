import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quote } from 'src/app/models/quote';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-my-veterinarian-quotes',
  templateUrl: './my-veterinarian-quotes.page.html',
  styleUrls: ['./my-veterinarian-quotes.page.scss'],
})
export class MyVeterinarianQuotesPage implements OnInit {
  myQuotes=[];
  veterinarianId;
  constructor(private quoteService:DateService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.veterinarianId = JSON.parse(params.special);
      console.log(this.veterinarianId);
    });

    this.quoteService
    .getQuotesByVeterinarianId(this.veterinarianId+"")
    .subscribe(async (data) => {
      data.map((quote) => {
        this.myQuotes.push( {
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
      });

     
    });
  }


}
