import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MenuController, NavController, ToastController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { AlertsServiceService } from 'src/app/services/alerts-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  Sesion: FormGroup;
  public validateMessages :object;
  public email:string
  public password:string

  constructor(
    private fb: FormBuilder,
    private navController: NavController,
    private router: Router,
    private auth: LoginService, 
    private alertas:AlertsServiceService) { }

  ngOnInit() {
    this.Sesion = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
    });
    this.validateMessages = {
      'email':[
        {type : 'required', message:'Debe capturar el correo del usuario'}
      ],
      'password':[
        {type : 'required', message:'Debe capturar la contraseña del usuario'}
      ]

    }
  }
  async login (){
    let correo = this.Sesion.controls.email.value + '';
    let password= this.Sesion.controls.password.value + '';
    const res = await this.auth.login(correo,password).catch(error => {
      this.alertas.presentToast("Usuario o contraseñas incorrectos")
    })
    if(res){
        this.alertas.presentToast("Bienvenido")
    }else{
      
    }
  }

  toRegister(){
    this.router.navigate(['/register']);
  }
  toUserProfile(){
    this.router.navigate(['/home']);
  }


}
