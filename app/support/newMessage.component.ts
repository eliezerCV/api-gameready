import {Component} from '@angular/core';
//servicio

@Component({
    selector: 'new-support',
    templateUrl: 'app/support/newMessage.component.html'
})

export class NewMessageSupport{

    private emptyData: boolean = false;
    private sendMessage: boolean = false;
    private message: any = {};

    constructor(){}

    private sendMessageSupport(){
        if(this.message.content == null) this.emptyData = true;
        else{
            this.sendMessage = true; 
            this.message == null;
        }
    }
    private alertQuit(){
        this.emptyData = !this.emptyData;
    }

    private succesQuit(){
        this.sendMessage = !this.sendMessage;
    }
}