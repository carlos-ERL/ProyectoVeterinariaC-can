import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  user:User={
    id:'',
    lastname:'',
    name:'',
    email:'',
    password:'',
    photo:''
  };
  constructor(private userService:UserService,private router:Router) {
  

   }

  ngOnInit() {

    this.userService.getUserById('sHbID1bK1wj8xF5YZUQh').get().then((user) => {
      this.user = {
        id:user.id,
        lastname:user.get('lastname'),
        name:user.get('name'),
        email:user.get('email'),
        password:user.get('password'),
        photo:user.get('photo')
      } as User;
    })
  }


  toDateRegister(): void {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.user),
      },
    };
    this.router.navigate(['/date-register'], extras);
  }

  toMyQuotes(): void {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.user),
      },
    };
    this.router.navigate(['/my-user-quotes'], extras);
  }

}
