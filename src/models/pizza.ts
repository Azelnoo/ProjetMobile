import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@injectable()

export class PizzaProvider {
  private readonly url = "http://localhost:3000/pizza"
  IDPizza: string;
  name:string;
  desc:string;
  imgPizza64:string;
  price:number;


  constructor(private http: HttpClient) {
    this.IDPizza='';
    this.name='';
    this.desc='Une Pizza';
    this.imgPizza64='';
    price:number=0;
    console.log("Constructeur from PizzaProvider !")
    }

    get() {
      console.log("Hello from PizzaProvider.Get")
    }

    getById()



}
