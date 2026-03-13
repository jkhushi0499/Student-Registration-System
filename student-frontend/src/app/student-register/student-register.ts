import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-register.html',
  styleUrl: './student-register.css'
})
export class StudentRegister {

  student = {
    name: '',
    email: '',
    course: '',
    password: ''
  };

  constructor(private http: HttpClient) {}

  registerStudent() {

  this.http.post("http://localhost:5044/api/student", this.student)
    .subscribe(() => {
      alert("Student Registered Successfully");

      // Reset form fields
      this.student = {
        name: '',
        email: '',
        course: '',
        password: ''
      };

    });

  }
}