import { Component } from '@angular/core';
import {Student} from '../../models/Student'
import {GeneralService} from '../../services/generalService'
import {GeneralObjForm} from '../../models/GeneralObjForm'
@Component({
    moduleId: module.id,
    selector: 'student-edit',
    templateUrl: 'student-edit.component.html',
})
export class StudentEditComponent {
    studentList: Student[] = [];
    newStudent: Student = new Student();
    dataName: string = 'student';
    optionalAttributes: string[] = [];
    form: GeneralObjForm;
    constructor(private GeneralService: GeneralService) {
        this.form = new GeneralObjForm(GeneralService, this.studentList, this.newStudent, this.dataName, this.optionalAttributes);
    }
    
    
}
