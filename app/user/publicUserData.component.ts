import {Component} from '@angular/core';
import {UserService, GameService, CommentService} from '../services';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'public-user',
    templateUrl: 'app/user/publicUserData.component.html',
    providers: [UserService, GameService, CommentService]
})

export class PublicUserData{

    private user:any = {};
    private userGames: Array<any>;
    private userComments: Array<any>;
    private userName:any;

    constructor(private _userService:UserService, private _router:ActivatedRoute,
            private _gameService:GameService, private _commentService:CommentService){}


    ngOnInit(){
        this._router.params.subscribe(params =>{
            this.userName = params['name'];
        });
        this.getUser();
        this.getUserGames();
        this.getUserComments();
    }
    onChange(event) {
    var files = event.srcElement.files;
    
    console.log(files);
    }

    private getUser(){
        this._userService.getUserByName(this.userName).subscribe(data => {
            this.user = data;
        });
    }

    private getUserGames(){
        this._gameService.getGameByUserName(this.userName).subscribe(data =>{
            this.userGames = data;
        });
    }

    private getUserComments(){
        this._commentService.getCommentsByName(this.userName).subscribe(data => {
            this.userComments = data;
        });
    }
}