import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  constructor(private myClient: HttpClient) {}
  private Base_URL = 'http://localhost:3000/students';
  GetAllUsers() {
    return this.myClient.get(this.Base_URL);
  }
  GetUserByID(id: any) {
    // return this.myClient.get(this.Base_URL+"/"+id);
    return this.myClient.get(`${this.Base_URL}/${id}`);
  }
  AddUser(newUser: any) {
    return this.myClient.post(this.Base_URL, newUser);
  }
  deleteUser(id: any) {
    return this.myClient.delete(`${this.Base_URL}/${id}`);
  }
  updateUser(id: any, updatedStudent: any) {
    return this.myClient.put(`${this.Base_URL}/${id}`, updatedStudent);
  }
}
