import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent {
  src = 'assets/images/1.jpg';
  counter = 1;
  intervalId: any;

  next() {
    this.counter++;
    this.src = `assets/images/${this.counter}.jpg`;
    if (this.counter >= 5) {
      this.counter = 5;
    }
  }

  prev() {
    this.counter--;
    this.src = `assets/images/${this.counter}.jpg`;
    if (this.counter <= 1) {
      this.counter = 1;
    }
  }

  slide() {
    this.intervalId = setInterval(() => {
      this.counter++;
      this.src = `assets/images/${this.counter}.jpg`;
      if (this.counter >= 5) {
        this.counter = 1;
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }
}
