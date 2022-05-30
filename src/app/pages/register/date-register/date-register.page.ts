import { Component, OnInit } from '@angular/core';
import { DateService } from '../../../services/date.service'
import { FormBuilder, FormGroup } from '@angular/forms';
import { Quote } from '../../../models/quote';
import { MenuController, NavController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-date-register',
  templateUrl: './date-register.page.html',
  styleUrls: ['./date-register.page.scss'],
})
export class DateRegisterPage implements OnInit {
  public myForm:FormGroup;
  public quote:Quote;
  public currentDate=new Date();
  public user:User;
  constructor(
    private dateService:DateService, 
    private fb:FormBuilder,
    private navController: NavController,
    private activatedRoute: ActivatedRoute 
  ) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe((params) => {
      this.user = JSON.parse(params.special);
      console.log(this.user);
    });

    this.myForm= this.fb.group({

            idDoctor:[""],  
            idUser:[this.user.id],    
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
      //idDoctor:'1',  //AQUI SE DEBE PONER EL DOCTOR QUE ESTE AGENDANDO LA CITA
      idUser:this.user.id,    //AQUI EL USUARIO QUE GENERÓ LA CITA
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
