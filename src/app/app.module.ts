import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent as TeacherList } from './teacher/list/list.component';
import { ListComponent as StudentList } from './student/list/list.component';
import { ClassComponent } from './class/class.component';
import { DetailComponent } from './student/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherList,
    StudentList,
    ClassComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
