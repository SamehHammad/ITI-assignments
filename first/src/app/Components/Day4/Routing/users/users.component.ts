import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  myValidator = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(40),
    ]),
    age: new FormControl(null, [
      Validators.required,
      Validators.min(20),
      Validators.max(50),
    ]),
  });
  get validName() {
    return this.myValidator.controls['name'].valid;
  }
  get validAge() {
    return this.myValidator.controls['age'].valid;
  }
  addStd() {
    if (this.validName && this.validAge) {
    }
  }
}
