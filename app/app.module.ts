import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {UserLoginComponent} from './user/userLogin.component';
import {NavComponent} from './home/nav.component';
import {UserRegisterComponent} from './user/userRegister.component';
import {Routing} from './app.routing';
import { FormsModule } from '@angular/forms';
import {SUDComponent} from './home/sud.component';
import {FilterCategoryComponent} from './game/filter-category.component';
import {UserProfileComponent} from './user/userProfile.component';
import {UserAccountComponent} from './user/userAccount.component';
import {UserGameComponent} from './user/userGames.component';
import {GameContainerComponent} from './game/gameContainer.component';
import {GamePostComponent} from './game/gamePost.component';
import {ShowGamePosted} from './game/showGamePosted.component';
import {CommentContainerComponent} from './comment/commentsContainer.component';
import {NewComment} from './comment/newComment.component';
import {UserMenuComponent} from './user/userMenu.component';
import {SearchGameComponent} from './game/searchGame.component';
import {PublicUserData} from './user/publicUserData.component';
import {NewMessageSupport} from './support/newMessage.component';
import {DiscutionContainerComponent} from './discuttion/discutionContainer.component';
import {ShowDiscutionComponent} from './discuttion/showDiscution.component';
import {NewDiscutionComponent} from './discuttion/newDiscution.component';
 

@NgModule({
    imports: [BrowserModule, HttpModule, Routing, FormsModule],
    declarations: [AppComponent,HomeComponent, NavComponent,UserLoginComponent,UserRegisterComponent,
                SUDComponent, FilterCategoryComponent, UserProfileComponent, UserAccountComponent,
                UserGameComponent, GameContainerComponent, GamePostComponent, ShowGamePosted, 
                CommentContainerComponent, NewComment, UserMenuComponent, SearchGameComponent, PublicUserData,
                NewMessageSupport, DiscutionContainerComponent, ShowDiscutionComponent, NewDiscutionComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
