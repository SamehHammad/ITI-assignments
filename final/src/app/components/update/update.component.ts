import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoService } from 'src/app/components/Serveces/demo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent {
  ID: any;
  Student: any;
  constructor(
    private myRoute: ActivatedRoute,
    public myService: DemoService,
    private router: Router
  ) {
    this.ID = myRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.myService.GetUserByID(this.ID).subscribe({
      next: (data) => {
        console.log(data);
        this.Student = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  updateStudent(name: any, age: any, email: any, details: any) {
    const updatedStudent = { name, age, email, details };
    this.myService.updateUser(this.ID, updatedStudent).subscribe();
    this.router.navigate(['/']);
  }
}
