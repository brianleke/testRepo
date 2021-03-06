import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  locationNow : String;

  constructor(public navCtrl: NavController, public geolocation: Geolocation) {

    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
      }).catch((error) => {
        console.log('There was no location information', error);
      });
  }

  getLocationNow(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.locationNow = 'lat: ' + resp.coords.latitude + ', lon: ' + resp.coords.longitude;
      console.log(this.locationNow);
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }


}
