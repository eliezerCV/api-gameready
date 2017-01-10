import {Component} from '@angular/core';
import {DiscutionService} from '../services';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentContainerComponent} from '../comment/commentsContainer.component';

@Component({
    selector: 'show-discution',
    templateUrl: 'app/discuttion/showDiscution.component.html',
    providers: [DiscutionService]
})

export class ShowDiscutionComponent{

    private discution:any = {};
    private id:any;

    constructor(private _discutionService: DiscutionService,private _router: ActivatedRoute){}

    ngOnInit(){
        this._router.params.subscribe(params =>{
            this.id = params['id'];
        });
        if(this.id != null) {this.getDiscution();}
    }

    private getDiscution(){
        this._discutionService.getDiscutionById(this.id).subscribe(data => {
            this.discution = data;
        });
    }
}