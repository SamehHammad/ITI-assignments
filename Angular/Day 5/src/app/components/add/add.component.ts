import { Component } from '@angular/core';
import { DemoService } from '../Serveces/demo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  constructor(public myService: DemoService, private router: Router) {}

  AddUser(name: any, age: any, email: any, details: any) {
    let newUser = { name, age, email, details };
    this.myService.AddUser(newUser).subscribe();
    this.router.navigate(['/']);
  }
}
