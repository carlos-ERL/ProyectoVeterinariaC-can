import { Component, OnInit } from '@angular/core';
import { DateService } from '../../../services/date.service'
import { FormBuilder, FormGroup } from '@angular/forms';
import { Quote } from '../../../models/quote';
import { MenuController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-date-register',
  templateUrl: './date-register.page.html',
  styleUrls: ['./date-register.page.scss'],
})
export class DateRegisterPage implements OnInit {
  public myForm:FormGroup;
  public quote:Quote;

  constructor(
    private dateService:DateService, 
    private fb:FormBuilder,
    private navController: NavController
  ) { }

  ngOnInit() {
    this.myForm= this.fb.group({

            idDoctor:[""],
            idUser:[""],
            description:[""],
            creationDateQuote:[new Date()],
            status:[""],
            petName:[""],
            color:[""],
            weight:[0],
            race:[""],
            particularSign:[""],
            size:[""]
    });
  }

  createDate(){
    this.quote={
      idDoctor:'',
      idUser:'',
      description:this.myForm.controls.description.value,
      creationDateQuote:this.myForm.controls.creationDateQuote.value,
      dateQuote:this.myForm.controls.dateQuote.value,
      status:'En espera',
      petName:this.myForm.controls.petName.value,
      color:this.myForm.controls.color.value,
      weight:this.myForm.controls.weight.value,
      race:this.myForm.controls.race.value,
      particularSign:this.myForm.controls.particularSign.value,
      size:this.myForm.controls.size.value
    }
    this.dateService.createDate(this.quote);
  }

}
