import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  template: `
    <p>
      class works!
    </p>
  `,
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
