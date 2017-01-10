import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CommentService, ProtectService} from '../services';

@Component({
    selector: 'new-comment',
    templateUrl: 'app/comment/newComment.component.html',
    providers:[CommentService, ProtectService]
})

export class NewComment{

    @Input() idPublication:any;
    @Output() getComments = new EventEmitter<any>();
    
    private comment: any;
    private isLogged: boolean;
    private user: any = {};
    private name: any;
    private alert: boolean = false;

    constructor(private _commentService: CommentService,private _protectService:ProtectService) {}

    ngOnInit(){
        this.isLogged = this._protectService.currentUserLogged();
        if(this.isLogged){
            this.user = JSON.parse(localStorage.getItem('currentUser'));
            this.name = this.user.name;
        }
        else {this.name = "admin";}
    }

    addNewComment(){
        if(this.comment != null){
            this._commentService.addNewComment(this.idPublication, this.name, this.comment).subscribe();
            this.getComments.emit();
            this.comment = null;
        }else {this.alert = true;}
    }

    private alertQuit(){
        this.alert = !this.alert;
    }
}