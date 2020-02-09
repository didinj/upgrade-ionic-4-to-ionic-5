import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../player';

declare var google;
let map: any;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  @ViewChild('map', {static: false}) mapElement: ElementRef;
  details = { id: null, name: '', team: '', photo: '', lat: null, lng: null };
  persons = Player;

  constructor(public route: ActivatedRoute, public platform: Platform) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id') === null) {
      this.platform.ready().then(() => {
        map = new google.maps.Map(this.mapElement.nativeElement, {
          center: { lat: -6.930560, lng: 107.558439 },
          zoom: 15
        });
      });
    } else {
      const id = parseInt(this.route.snapshot.paramMap.get('id'), 0);
      this.details = this.persons.find(x => x.id === id);
      this.platform.ready().then(() => {
        map = new google.maps.Map(this.mapElement.nativeElement, {
          center: { lat: this.details.lat, lng: this.details.lng },
          zoom: 15
        });
      });
    }
  }

}
