import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  userInput = '';
  input(ev: any) {
    this.userInput = ev.target.value;
  }
  reset() {
    this.userInput = '';
  }
}
