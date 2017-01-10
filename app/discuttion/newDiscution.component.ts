import {Component} from '@angular/core';
import {DiscutionService} from '../services';
import {Router} from '@angular/router';

@Component({
    selector: 'new-discution',
    templateUrl: 'app/discuttion/newDiscution.component.html',
    providers: [DiscutionService]
})

export class NewDiscutionComponent{

    private discution: any = {};
    private author: any = {};

    constructor(private _discutionService: DiscutionService, private _router:Router){}

    ngOnInit(){
        if(localStorage.getItem('currentUser')){this.author = localStorage.getItem('currentUser');}
        else this.author.name = "admin";
    }

    private sendDiscution(){
        console.log(this.discution)
        console.log(this.author.name)
        this._discutionService.addDiscution(this.discution.tittle,this.discution.decription, this.author.name).subscribe();
        this._router.navigateByUrl('/discutions');
}
}