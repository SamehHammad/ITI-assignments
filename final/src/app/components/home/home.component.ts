import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from '../Serveces/demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  users: any;
  constructor(myRoute: ActivatedRoute, public myService: DemoService) {}
  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers() {
    this.myService.GetAllUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {},
    });
  }

  delete(id: any) {
    this.myService.deleteUser(id).subscribe();
    this.users = this.users.filter((u: any) => u.id !== id);
  }
}
