import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { MenuController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit { 
  public myForm : FormGroup;
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
      password:[""],
      photo:[""]
    });
  }

  updateUser(){

  }

}
