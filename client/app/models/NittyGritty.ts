import {Component} from '@angular/core';
@Component({
})
export class NittyGritty{

    colors : string[] =['#FFECB3','#FFA000', '#FFC107'];
    
    getColor(i: number): string{
        return this.colors[i% 3];
    }
}