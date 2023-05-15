import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetials',
  templateUrl: './userdetials.component.html',
  styleUrls: ['./userdetials.component.css'],
})
export class UserdetialsComponent {
  ID: any;
  constructor(myRoute: ActivatedRoute) {
    this.ID = myRoute.snapshot.params['id'];
  }
}
