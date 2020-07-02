import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private _delete = new Subject();
  delete$ = this._delete.asObservable();

  constructor() { }

  delete(student_id) {
    this._delete.next(student_id);
  }
}
