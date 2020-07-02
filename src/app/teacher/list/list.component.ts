import {Component, Input, OnInit} from '@angular/core';
import {Teacher} from "../teacher";

@Component({
  selector: 'app-teacher-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() teachers: Array<Teacher>

  constructor() {
  }

  ngOnInit(): void {
    console.log('dsfsdfdfd')
    console.log()
  }

}
