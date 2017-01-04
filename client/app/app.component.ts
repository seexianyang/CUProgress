import { Component } from '@angular/core';
import {GeneralService} from './services/generalService'
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  //styleUrls: ['menu-style.css'],
  providers: [GeneralService]
})
export class AppComponent {
    pages = {
        student: true
    };
    show(page:string){
        for(var key in this.pages){
            this.pages[key] = false;
        }
        this.pages[page] = true;
    }
}