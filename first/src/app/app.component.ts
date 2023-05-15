import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // studentDataReg: { name: string; age: string }[] = [];
  studentDataReg: any = '';
  GetData(event: any) {
    console.log(event);
    this.studentDataReg = event;
    // this.studentDataReg.push = event;
  }
}
