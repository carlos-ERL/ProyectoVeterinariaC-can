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
  public currentDate=new Date();
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
            creationDateQuote:[ this.currentDate.getDate()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getFullYear()],
            status:[""],
            petName:[""],
            photo:[""],
            color:[""],
            weight:[0],
            race:[""],
            particularSign:[""],
            size:[""]
    });
  }

  createDate(){
    this.currentDate=new Date();
    this.quote={
      idDoctor:'1',  //AQUI SE DEBE PONER EL DOCTOR QUE ESTE AGENDANDO LA CITA
      idUser:'1',    //AQUI EL USUARIO QUE GENERÓ LA CITA
      description:this.myForm.controls.description.value,
      creationDateQuote:this.currentDate.getDate()+'-'+(this.currentDate.getMonth()+1)+'-'+this.currentDate.getFullYear(),
      status:'En espera',
      photo:this.myForm.controls.photo.value,
      petName:this.myForm.controls.petName.value,
      color:this.myForm.controls.color.value,
      weight:this.myForm.controls.weight.value,
      race:this.myForm.controls.race.value,
      particularSign:this.myForm.controls.particularSign.value,
      size:this.myForm.controls.size.value
    }
    this.dateService.createQuote(this.quote);
    console.log(this.quote);
  }

}
