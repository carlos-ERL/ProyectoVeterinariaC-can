import { Component } from '@angular/core';
import { AlertsServiceService } from 'src/app/services/alerts-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private alertas:AlertsServiceService) {}
  openText(){
    this.alertas.presentToast("Prueba 1 de Botones")
  }

}
