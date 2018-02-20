import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PizzaService } from '../../providers/pizza-service/pizza-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
mypizza: any;
  constructor(public navCtrl: NavController, private pizzaService: PizzaService) {
    console.log("HomePage Controller done");
    this.pizzaService.get().then((data: Array<any>) => {
     this.mypizza = data;
     console.log(this.mypizza);
   });

  }

}
