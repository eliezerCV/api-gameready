import {Component, OnInit} from '@angular/core';
import {DiscutionService} from '../services';

@Component({
    selector: 'discutions',
    templateUrl: 'app/discuttion/discutionContainer.component.html',
    providers: [DiscutionService]
})

 export class DiscutionContainerComponent{

     private discutions: Array<any>;
     
     constructor(private _discutionService: DiscutionService){
     }
     
     ngOnInit(){
         this.getDiscutions();
     }

     private getDiscutions(){
         this._discutionService.getDiscutions().subscribe(data => {
             this.discutions = data;
         },error => {

         });
     }
 }