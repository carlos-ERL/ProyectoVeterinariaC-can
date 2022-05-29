import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-date-schedule',
  templateUrl: './date-schedule.page.html',
  styleUrls: ['./date-schedule.page.scss'],
})
export class DateSchedulePage implements OnInit {
  public myForm:FormGroup;
  constructor(private quoteService:DateService,  private fb:FormBuilder) { }

  ngOnInit() {
    this.myForm= this.fb.group({
      dateQuote:[""]
  });
  }
  updateQuote(){
    const date = new Date (this.myForm.controls.dateQuote.value)
    this.quoteService.updateQuote('ju3Bfkz8oJK3DRSDTEs1', date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear(),"Doctor Jona");
  }


}
