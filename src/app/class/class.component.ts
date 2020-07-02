import { Component, OnInit } from '@angular/core';
import {Student} from "../student/student";
import {Teacher} from "../teacher/teacher";

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  students: Array<Student>
  teachers: Array<Teacher>
  constructor() { }

  ngOnInit(): void {
    this.teachers = [
      { id:1, name: 'Teacher 1', age: 30 },
      { id:2, name: 'Teacher 2', age: 31 },
      { id:3, name: 'Teacher 3', age: 32 },
      { id:4, name: 'Teacher 4', age: 33 }
    ]

    this.students = [
      { id:1, name: 'Student 1', age: 10, class: '' },
      { id:2, name: 'Student 2', age: 10, class: '' },
      { id:3, name: 'Student 3', age: 10, class: '' },
      { id:4, name: 'Student 4', age: 10, class: '' }
    ]
  }
}
