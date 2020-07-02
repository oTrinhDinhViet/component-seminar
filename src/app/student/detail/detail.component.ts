import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Student } from "../student";
import {StudentService} from "../../student.service";

@Component({
  selector: 'app-student-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() user: Student;
  // @Output() deleteRequest = new EventEmitter<number>();

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
  }

  onDelete() {
    // this.deleteRequest.emit(this.user.id)
    this.studentService.delete(this.user.id)
  }
}
