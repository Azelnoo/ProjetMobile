import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PizzaService } from '../../providers/pizza-service/pizza-service';
import { Pizza } from '../../models/pizza';
//pour les popups
import { ToastController } from 'ionic-angular';

//les différentes autres pages
import { PanierPage } from '../panier/panier';
import { AddPizzaPage } from '../add-pizza/add-pizza';
import { UpdatePage } from '../update/update';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mypizza: any;
  panier = new Array<Pizza>();

  constructor(public navCtrl: NavController, public navParams: NavParams,
      private pizzaService: PizzaService, private toastCrtl: ToastController) {
         this.getHome();
         this.pizza.getById(3).then((item: any) => {
         });
       }

   getHome() {
    this.pizza.get().then((items: Array<any>) => {
      this.mypizza = items;
    });
  }

  update(thispizza) {
    this.navCtrl.push(ModificationPage, {
      var1: thispizza
    });
  }

  delete(thispizza) {
    this.pizza.delete(thispizza.id).then((item) => {
      this.getHome();
    });
    this.popupConfirm("You've deleted " + thispizza.name + " from the menu");
  }

  popupConfirm(message) {
    let toast = this.toastCrtl.create({
      message: message,
      duration: 3000,
      position: 'middle'
    });

    toast.present();
  }

  panier(thispizza) {
    this.cartsection.push(thispizza);
    this.popupConfirm("La pizza : " + thispizza.name + " est maintenant dans votre panier");
  }

  add() {
    this.navCtrl.push(AddPage);
    this.popupConfirm("You just added to the menu");
  }

  cartCheck() {
    this.navCtrl.push(CartPage, {
      var1: this.cartsection
    });
  }

  }
