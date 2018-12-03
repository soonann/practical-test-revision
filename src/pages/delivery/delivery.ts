import { DatePipe } from '@angular/common';
import { Delivery } from './../../models/Delivery';
import { Component , OnInit} from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'page-delivery',
  templateUrl: 'delivery.html'
})

export class DeliveryPage implements OnInit{

  delivery: Delivery;
  deliveryTiming: string[];
  submitted = false;


  constructor(public navCtrl: NavController, private datepipe: DatePipe, private alertCtrl: AlertController) {
  
  }

  ngOnInit(){

    this.deliveryTiming = [ '12 - 3pm' , '6 - 9pm'];
    this.delivery = new Delivery( new Date().toISOString(), this.deliveryTiming[0] , '', true);

  }

  submitForm(form:NgForm){
    
    this.submitted = true;
    
    if (form.valid){
      const alert = this.alertCtrl.create({
        title: 'Success',
        subTitle:   'Your delivery has been scheduled on '+ 
        this.datepipe.transform(this.delivery.date, 'dd MMM yyyy')+
        ' at ' +  
        this.delivery.time,
        buttons: ['OK']
      });
      alert.present();
      }
     

  }
    

}


  

