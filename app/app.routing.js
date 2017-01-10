"use strict";
var router_1 = require('@angular/router');
var userLogin_component_1 = require('./user/userLogin.component');
var userRegister_component_1 = require('./user/userRegister.component');
var userProfile_component_1 = require('./user/userProfile.component');
var userAccount_component_1 = require('./user/userAccount.component');
var userGames_component_1 = require('./user/userGames.component');
var gameContainer_component_1 = require('./game/gameContainer.component');
var gamePost_component_1 = require('./game/gamePost.component');
var showGamePosted_component_1 = require('./game/showGamePosted.component');
var home_component_1 = require('./home/home.component');
var publicUserData_component_1 = require('./user/publicUserData.component');
var newMessage_component_1 = require('./support/newMessage.component');
var discutionContainer_component_1 = require('./discuttion/discutionContainer.component');
var showDiscution_component_1 = require('./discuttion/showDiscution.component');
var newDiscution_component_1 = require('./discuttion/newDiscution.component');
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'userLogin', component: userLogin_component_1.UserLoginComponent },
    { path: 'userRegister', component: userRegister_component_1.UserRegisterComponent },
    { path: 'userProfile', component: userProfile_component_1.UserProfileComponent },
    { path: 'userAccount', component: userAccount_component_1.UserAccountComponent },
    { path: 'userGames', component: userGames_component_1.UserGameComponent },
    { path: 'gameContainer', component: gameContainer_component_1.GameContainerComponent },
    { path: 'gamePost', component: gamePost_component_1.GamePostComponent },
    { path: 'gamePosted/:id', component: showGamePosted_component_1.ShowGamePosted },
    { path: 'publicUser/:name', component: publicUserData_component_1.PublicUserData },
    { path: 'support', component: newMessage_component_1.NewMessageSupport },
    { path: 'discutions', component: discutionContainer_component_1.DiscutionContainerComponent },
    { path: 'showDiscution/:id', component: showDiscution_component_1.ShowDiscutionComponent },
    { path: 'newDiscution', component: newDiscution_component_1.NewDiscutionComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
exports.Routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map