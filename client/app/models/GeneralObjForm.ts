import {GeneralService} from '../services/generalService';
export class GeneralObjForm {
    list: any[] = undefined;
    newObj: Object = undefined;
    dataName: string = undefined;
    optionalAttributes: string[] = undefined;
    constructor(private GeneralService: GeneralService, olist: any, obj: Object, dataName: string, optionalAttributes: string[]) {
        this.list = olist;
        this.newObj = obj;
        this.dataName = dataName;
        this.optionalAttributes = optionalAttributes;
        this.refreshList();
    };

    validate() {
        for (var key in this.newObj) {
            if (key in this.optionalAttributes == false && this.newObj[key] == undefined) {
                alert(key + " is not optional.");
                return false;
            }
        }
        return true;
    }
    refreshList() {
        this.GeneralService.getObjectList(this.dataName)
            .subscribe(l => {
                this.list.length = 0;
                var ll: any[];
                ll = l;
                this.list.push.apply(this.list, ll)
            })
    }

    add(event: any) {
        if (this.validate()) {
            event.preventDefault();
            this.GeneralService.addObject(this.dataName, this.newObj)
                .subscribe(s => {
                    this.list.push(s);
                })
            for (var key in this.newObj) {
                this.newObj[key] = undefined;
            }
        }
    }

    remove(id: string) {
        this.GeneralService.deleteObject(this.dataName, id)
            .subscribe(data => {
                this.refreshList();
            })
    }
}
