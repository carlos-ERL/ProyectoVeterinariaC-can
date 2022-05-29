import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { MenuController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html', 
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public myForm:FormGroup;
  public user:User;
  constructor(
    private userService:UserService, 
    private fb:FormBuilder,
    private navController: NavController

  ) { }

  ngOnInit() {
    this.myForm= this.fb.group({
      lastname:[""],
      name:[""],
      email:[""],
      Password:[""]
    });
  }

  createUser(){
    this.user={
      lastname:this.myForm.controls.lastname.value,
      name:this.myForm.controls.name.value,
      email:this.myForm.controls.email.value,
      Password:this.myForm.controls.Password.value
    }
    this.userService.createUser(this.user);
  }

}
