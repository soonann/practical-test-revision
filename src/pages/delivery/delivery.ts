import { Delivery } from './../../models/Delivery';
import { Component , OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'page-delivery',
  templateUrl: 'delivery.html'
})
export class DeliveryPage implements OnInit{

  delivery: Delivery;
  deliveryTiming: string[];
  submitted = false;


  constructor(public navCtrl: NavController) {
  
  }

  ngOnInit(){
    
    this.deliveryTiming = [ '12am - 9am', '9am - 12am'];
    this.delivery = new Delivery('','','',true);

  }

  submitForm(form:NgForm){
    
    this.submitted = true;
    
    if (form.valid){
      alert( 
        'Your delivery has been scheduled on '+ 
        this.delivery.date +
        ' at ' +  
        this.delivery.time
      );

    }
    

  }



  

  
}
