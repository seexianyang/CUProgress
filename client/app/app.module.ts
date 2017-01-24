import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {StudentEditComponent} from './components/student-edit/student-edit.component';
import {CourseEditComponent} from './components/course-edit/course-edit.component';
import {ModuleEditComponent} from './components/module-edit/module-edit.component';
@NgModule({
  imports:      [ BrowserModule , HttpModule, FormsModule],
  declarations: [AppComponent,StudentEditComponent, CourseEditComponent, ModuleEditComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { } 