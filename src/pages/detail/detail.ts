import { Product } from './../../models/Product';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  
  prod: Product;
    
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    let name = navParams.get('name');  
    let price = navParams.get('price');  
    let image = navParams.get('image');  
    let review = navParams.get('review');  
    this.prod = new Product(name,price,image,review);

  }

  




  
}
