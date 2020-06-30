import { Component, OnInit } from '@angular/core';
import {Teacher} from "../../teacher/teacher";
import {Student} from "../student";

@Component({
  selector: 'app-student-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  user: Student;

  constructor() {
    this.user = { id:1, name: 'Ngan', age: 30, class: '5A' }
  }


  ngOnInit(): void {
  }

}
