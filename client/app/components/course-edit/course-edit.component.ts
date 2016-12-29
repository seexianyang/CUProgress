import {Component} from '@angular/core';
import {Course} from '../../models/Course'
import {GeneralService} from '../../services/generalService';

@Component({
    moduleId: module.id,
    selector: 'course-edit',
    templateUrl: 'course-edit.component.html',
    styleUrls: ['course-edit.component.css']
})
export class CourseEditComponent {
    newCourse: Course = new Course();
    courseList: Course[];
    dataName: string = 'course';
    optionalAttributes:  string[] = [];
    constructor(private GeneralService:GeneralService){
         this.refreshList();
    }

    validate(){
        for(var key in this.newCourse){
            console.log(this.newCourse[key]);
            if(key in this.optionalAttributes == false && this.newCourse[key] == undefined){
                alert(key + " is not optional.");
                return false;
            }
        }
        return true;
    }
    refreshList(){
        this.GeneralService.getObjectList(this.dataName)
        .subscribe(courses => {
            this.courseList = courses;
        })
    }

    addCourse(event: any){
        console.log('inside add course.');
        if(this.validate()){
            console.log('valid');
            event.preventDefault();
            this.GeneralService.addObject(this.dataName, this.newCourse)
            .subscribe(s => {
              this.courseList.push(s);
            })
            for (var key in this.newCourse){
                this.newCourse[key] = undefined;
            }
        } 
    }

    removeCourse(id: string){
        this.GeneralService.deleteObject(this.dataName,id)
        .subscribe(data =>{
            this.refreshList();
        })
    }

}
