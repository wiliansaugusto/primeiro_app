import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FeedPage } from '../feed/feed';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

 constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

criarFormulario(){
  this.navCtrl.push(FeedPage);
  alert("Efetuado")
}

}