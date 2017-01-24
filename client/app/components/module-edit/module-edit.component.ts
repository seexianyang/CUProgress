import {Component} from '@angular/core';
import {Module} from '../../models/Module';
import {GeneralObjForm} from '../../models/GeneralObjForm'
import {GeneralService} from '../../services/generalService';
import {NittyGritty} from '../../models/NittyGritty';
@Component({
    moduleId: module.id,
    selector: 'module-edit',
    templateUrl: 'module-edit.component.html',
})
export class ModuleEditComponent {
    newModule: Module = new Module();
    moduleList: Module[] = [];
    dataName: string = 'module';
    optionalAttributes: string[] = [];
    form: GeneralObjForm;
    constructor(private GeneralService: GeneralService) {
        this.form = new GeneralObjForm(GeneralService, this.moduleList, this.newModule, this.dataName, this.optionalAttributes);
    }
}
