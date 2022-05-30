import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-date-schedule',
  templateUrl: './date-schedule.page.html',
  styleUrls: ['./date-schedule.page.scss'],
})
export class DateSchedulePage implements OnInit {
  public myForm:FormGroup;
  constructor(private quoteService:DateService,  private fb:FormBuilder,private activatedRoute: ActivatedRoute,private router:Router) { }
  params;
  ngOnInit() {
    this.myForm= this.fb.group({
      dateQuote:[""]
  });

   this.activatedRoute.queryParams.subscribe((params) => {
    this.params= JSON.parse(params.special);
    console.log(this.params);
  });
  
  }
  updateQuote(){
    const date = new Date (this.myForm.controls.dateQuote.value)
    this.quoteService.updateQuote(this.params.quoteId+"", date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear(),this.params.veterianrianId+"");
    console.log(this.params)
  }


}
