import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './Components/first/first.component';
import { SecondComponent } from './Components/second/second.component';
import { AllInOneComponent } from './Components/Day1/all-in-one/all-in-one.component';
import { RegComponent } from './Components/Day1/Reg/reg.component';
import { StudentsComponent } from './Components/Day1/students/students.component';
import { UsersComponent } from './Components/Day4/Routing/users/users.component';
import { UserdetialsComponent } from './Components/Day4/Routing/userdetials/userdetials.component';
import { ProfileComponent } from './Components/Day4/Routing/profile/profile.component';
import { ErrorComponent } from './Components/Day4/Routing/error/error.component';
import { HeaderComponent } from './Components/Day4/Routing/header/header.component';

let appRoutes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'home', component: UsersComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'details/:id', component: UserdetialsComponent },
  { path: '**', component: ErrorComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    AllInOneComponent,
    RegComponent,
    StudentsComponent,
    UsersComponent,
    UserdetialsComponent,
    ProfileComponent,
    ErrorComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
