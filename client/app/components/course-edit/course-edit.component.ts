import {Component} from '@angular/core';
import {Course} from '../../models/Course';
import {GeneralObjForm} from '../../models/GeneralObjForm'
import {GeneralService} from '../../services/generalService';
@Component({
    moduleId: module.id,
    selector: 'course-edit',
    templateUrl: 'course-edit.component.html',
    styleUrls: ['course-edit.component.css']
})
export class CourseEditComponent {
    newCourse: Course = new Course();
    courseList: Course[] = [];
    dataName: string = 'course';
    optionalAttributes: string[] = [];
    form: GeneralObjForm;
    constructor(private GeneralService: GeneralService) {
        this.form = new GeneralObjForm(GeneralService, this.courseList, this.newCourse, this.dataName, this.optionalAttributes);
    }
    colors : string[] =['#d5dbdb', '#edbb99', '#fad7a0' ,'#a2d9ce', '#aed6f1', '#d2b4de'];
    getColor(i: number): string{
        return this.colors[i% 6];
    }
}
