import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//import { Injectable } from '@angular/core';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';          //ajout

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PizzaService } from '../providers/pizza-service/pizza-service';
import { HttpClient } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AddPizzaPage } from '../pages/add-pizza/add-pizza';

@NgModule({
  declarations: [
    MyApp,
    HomePage
    //HttpClient
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AddPizzaPage,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PizzaService,
    HttpClient,
    Camera
  ]
})
export class AppModule {}
