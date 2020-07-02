import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Student } from "../student";

@Component({
  selector: 'app-student-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() user: Student;
  @Output() deleteRequest = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onDelete() {
    this.deleteRequest.emit(this.user.id)
  }
}
