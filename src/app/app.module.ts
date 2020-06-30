import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent as TeacherList } from './teacher/list/list.component';
import { ListComponent as StudentList } from './student/list/list.component';
import { ClassComponent } from './class/class.component';
import { DetailComponent as StudentDetailComponent } from './student/detail/detail.component';
import { DetailComponent as TeacherDetailComponent } from './teacher/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherList,
    StudentList,
    ClassComponent,
    StudentDetailComponent,
    TeacherDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
