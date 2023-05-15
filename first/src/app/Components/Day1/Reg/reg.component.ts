import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css'],
})
export class RegComponent {
  name = '';
  age = '';

  students: { name: string; age: string }[] = [];

  @Output('studentsData') studentsData = new EventEmitter();
  get NameLength() {
    return this.name.length <= 40 && this.name.length > 3;
  }
  get AgeValid() {
    return +this.age >= 20 && +this.age <= 40;
  }

  AddStudent() {
    if (this.name.length <= 40 && this.name.length > 3) {
      if (+this.age >= 20 && +this.age <= 40) {
        let newStudent = { name: this.name, age: this.age };
        this.students.push(newStudent);
        this.studentsData.emit(this.students);
      }
    }
  }
}
