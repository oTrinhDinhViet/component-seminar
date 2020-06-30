import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Teacher } from "../teacher";

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DetailComponent implements OnInit {
  user: Teacher;

  constructor() {
    this.user = { id:1, name: 'Ngan', age: 30 }
  }

  ngOnInit(): void {
  }

}
