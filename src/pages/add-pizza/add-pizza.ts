import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Pizzaservice } from '../../providers/pizza-service/pizza-service';
import { Pizza } from '../../models/pizza';
import { HomePage } from '../home/home';

//ajout de la caméra
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the AddPizzaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-pizza',
  templateUrl: 'add-pizza.html',
})
export class AddPizzaPage {
  public base64Image: string;
  pizza: Pizza = new Pizza();

  constructor(public navCtrl: NavController, public navParams: NavParams, private pizzaservice: Pizzaservice, private camera: Camera) {

  }

  private options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    saveToPhotoAlbum: true,
    correctOrientation: true,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  addPizza = [];

  addPiz() {
    if (this.addPizza['price'] == null) {
      this.pizza.price =+ 0;
    }
    else {
      this.pizza.price =+ this.addPizza['price'];
    }
    this.pizza.name = this.addPizza['name'];
    this.pizza.desc = this.addPizza['desc'];

    console.log(this.pizza);
    this.pizzaservice.add(this.pizza).then((item) => {
      this.navCtrl.push(HomePage);
    });
  }

  addPicture() {
    this.camera.getPicture(this.options).then((imagedata) => {
      this.base64Image = imagedata;
      this.pizza.picture = 'data:image/jpeg;base64,' + this.base64Image;
      console.log(this.pizza);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPizzaPage');
  }

}
