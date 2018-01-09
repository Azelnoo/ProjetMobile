import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../../models/pizza.ts';
/*
  Generated class for the PizzaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PizzaService {

private readonly url = "http://10.13.0.248:3000/pizza";

  constructor(private http: HttpClient) {
    console.log('Hello PizzaServiceProvider Provider');
  }
  sayHello(id: string){

    console.log("say Hello('" + id + "')");
  }
  get() {
  // Make the HTTP request:
    let rt:Array<Pizza> = new Array<Pizza>();
    this.http.get(this.url).subscribe((data:Array<any>) => {
      //console.log(data)
      for (let i = 0; i<data.length; i++) {
      rt.push(new Pizza(data[i]['id']), (data[i]['name']), (data[i]['desc']),
      (data[i]['picture']), (data[i]['price']))
     }
     resolve(rt);
  });
  }

  get2(){
    let rt: Array<Pizza> = new Array<Pizza>();
    return new Promise<Array<Pizza>>(resolve=> {
      this.http.get(this.url)
      .subscribe((data:Array<any>)=>{
        for(let i = 0; i<data.length;i++) {
          rt.push(new Pizza(data[i]['id']), (data[i]['name']), (data[i]['desc']),
          (data[i]['picture']), (data[i]['price']))
        }
        resolve(rt);
      });
    })
  }


}
