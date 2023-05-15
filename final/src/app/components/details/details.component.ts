import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from '../Serveces/demo.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  ID: any;
  Student: any;
  constructor(myRoute: ActivatedRoute, public myService: DemoService) {
    this.ID = myRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.myService.GetUserByID(this.ID).subscribe({
      next: (data) => {
        //console.log(data)
        this.Student = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
