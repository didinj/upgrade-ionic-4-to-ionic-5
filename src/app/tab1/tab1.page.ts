import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../player';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  persons = Player;
  viewType = 'list';

  constructor(public router: Router) {}

  changeToGrid() {
    this.viewType = 'grid';
  }

  changeToList() {
    this.viewType = 'list';
  }

}
