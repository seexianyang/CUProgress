import {Component} from '@angular/core';
import {Course} from '../../models/Course';
import {GeneralObjForm} from '../../models/GeneralObjForm'
import {GeneralService} from '../../services/generalService';
import {NittyGritty} from '../../models/NittyGritty';
@Component({
    moduleId: module.id,
    selector: 'course-edit',
    templateUrl: 'course-edit.component.html',
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
}