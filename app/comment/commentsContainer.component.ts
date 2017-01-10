import {Component, Input} from '@angular/core';
import {CommentService} from '../services';
import {NewComment} from './newComment.component';

@Component({
    selector: 'comment-container',
    templateUrl: 'app/comment/commentsContainer.component.html',
    providers: [CommentService]
})

export class CommentContainerComponent{

    @Input() idPublication:any;

    titulo: string = "Contenedor de comentarios";
    private comments: Array<any>;

    constructor(private _commentService: CommentService){}
    
    ngOnInit(){
        this.getComments();
    }

    getComments(){
        this._commentService.getCommentsById(this.idPublication).subscribe(data => {
            this.comments = data;
        },
        err => {})
    }
}