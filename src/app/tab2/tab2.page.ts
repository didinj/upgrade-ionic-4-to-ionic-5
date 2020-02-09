import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../player';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild('avatar', { read: ElementRef, static: true }) avatar: ElementRef;
  details = { id: null, name: '', team: '', photo: '', lat: null, lng: null };
  persons = Player;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public animationCtrl: AnimationController) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id') !== 'null') {
      const id = parseInt(this.route.snapshot.paramMap.get('id'), 0);
      this.details = this.persons.find(x => x.id === id);
    }

    const animatedAvatar = this.animationCtrl
      .create()
      .addElement(this.avatar.nativeElement)
      .duration(3000)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('transform', 'rotate(0deg)', 'rotate(360deg)');

    animatedAvatar.play();

  }

  showMap(id: any) {
    this.router.navigate(['/tabs/tab3/', id]);
  }

}
