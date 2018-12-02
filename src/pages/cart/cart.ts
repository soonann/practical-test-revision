import { Product } from './../../models/Product';
import { Component , OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeliveryPage } from '../delivery/delivery';
import { DetailPage } from '../detail/detail';



@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage implements OnInit{

  products:Product[]

  constructor(public navCtrl: NavController) {

  }

  ngOnInit(){
    this.products = [
      new Product('Samsung',949,'assets/img/samsung.jpg',2),
      new Product('LG',649,'assets/img/lg.jpg',3),
      new Product('Midea',399,'assets/img/midea.jpg',1),
      new Product('Fisher & Parkel',1049,'assets/img/fisher.jpg',3),
      new Product('Whirlpool',999,'assets/img/whirlpool.jpg',2)
  ]

  }


  filterItem(ev: any){

    this.ngOnInit();
    let val = ev.target.value;
   
    if(val && val.trim() != ''){
      this.products = this.products.filter( 
        (x) => {
          return x.name.toLowerCase().includes(val.toLowerCase()) 
        }
      )
    }

    
  }

  deleteItem(prod: Product){
    this.products.splice(this.products.indexOf(prod),1);
  }

  goToDelivery(params){
    if (!params) params = {};
    this.navCtrl.push(DeliveryPage);
  }

  goToDetail(params){
    if (!params) params = {};
    this.navCtrl.push(DetailPage, params);
  }
}
