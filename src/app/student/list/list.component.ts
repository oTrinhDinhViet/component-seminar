import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../student";
import {StudentService} from "../../student.service";

@Component({
  selector: 'app-student-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() students: Array<Student>

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.studentService.delete$.subscribe((id: number) => {
      this.onRemoveStudent(id)
    })
  }

  onRemoveStudent(id: number) {
    for (var i = 0; i < this.students.length; i++) {
      if(this.students[i].id == id){
        this.students.splice(i, 1)
      }
    }
  }
}
