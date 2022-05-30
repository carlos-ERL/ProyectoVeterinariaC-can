import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
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
  veterinarianID;
  constructor(private dateServices:DateService,private activatedRoute: ActivatedRoute,private router:Router) { 

    this.dateServices.getQuotesInWaitList().subscribe( data=>{
       data.map(quote=>{
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

     })
         
   });
  }


  ngOnInit() {

    this.activatedRoute.queryParams.subscribe((params) => {
      this.veterinarianID = JSON.parse(params.special);
      console.log(this.veterinarianID);
    });

  }

  toDateSchedule(quoteId): void {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify({veterianrianId:this.veterinarianID,quoteId:quoteId}),
      },
    };
    this.router.navigate(['/date-schedule'], extras);
  }

}
