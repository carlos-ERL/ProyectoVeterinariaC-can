import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public isVeterinarian:boolean;
  constructor( private router:Router) {}
  
  toDateRegister(): void {
    this.router.navigate(['/date-register']);
  }

  toMyQuotes(): void {
    this.router.navigate(['/my-user-quotes']);
  }

}
