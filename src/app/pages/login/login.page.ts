import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuController, NavController, ToastController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  Sesion: FormGroup;

  constructor(private fb: FormBuilder,private navController: NavController,private router: Router) { }

  ngOnInit() {
    this.Sesion = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  toRegister(){
    //this.router.navigate(['/home']);
  }
  toUserProfile(){
    this.router.navigate(['/user-profile']);
  }

}
