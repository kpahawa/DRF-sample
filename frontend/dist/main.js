(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader{\r\n    display: none\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\" ui container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<div id=\"last_item\"></div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/loader.service */ "./src/app/services/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.loaderService = _services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"].getInstance();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loaderService.removeSpinner();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config/config */ "./src/app/config/config.ts");
/* harmony import */ var _services_api_url_factory_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/api-url-factory.service */ "./src/app/services/api-url-factory.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _chat_chat_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chat/chat.module */ "./src/app/chat/chat.module.ts");
/* harmony import */ var _chat_chat_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chat/chat.routing */ "./src/app/chat/chat.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                // AppRoutingModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _chat_chat_routing__WEBPACK_IMPORTED_MODULE_12__["ChatRouting"],
                _chat_chat_module__WEBPACK_IMPORTED_MODULE_11__["ChatModule"].loadModule(),
            ],
            providers: [_services_api_url_factory_service__WEBPACK_IMPORTED_MODULE_8__["ApiUrlFactory"],
                _config_config__WEBPACK_IMPORTED_MODULE_7__["Config"],
                _services_http_service__WEBPACK_IMPORTED_MODULE_9__["HTTPService"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
                {
                    provide: _angular_http__WEBPACK_IMPORTED_MODULE_4__["XSRFStrategy"],
                    useValue: new _angular_http__WEBPACK_IMPORTED_MODULE_4__["CookieXSRFStrategy"]('csrftoken', 'X-CSRFToken')
                },
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/chat/components/home/home.component.ts");
/* harmony import */ var _components_room_room_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/room/room.component */ "./src/app/chat/components/room/room.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule_1 = ChatModule;
    ChatModule.loadModule = function () {
        return {
            ngModule: ChatModule_1,
            providers: []
        };
    };
    ChatModule = ChatModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _components_room_room_component__WEBPACK_IMPORTED_MODULE_4__["RoomComponent"]],
            exports: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
        })
    ], ChatModule);
    return ChatModule;
    var ChatModule_1;
}());



/***/ }),

/***/ "./src/app/chat/chat.routing.ts":
/*!**************************************!*\
  !*** ./src/app/chat/chat.routing.ts ***!
  \**************************************/
/*! exports provided: ChatRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRouting", function() { return ChatRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/chat/components/home/home.component.ts");
/* harmony import */ var _components_room_room_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/room/room.component */ "./src/app/chat/components/room/room.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChatRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], pathMatch: 'full' },
    { path: 'room/:roomName', component: _components_room_room_component__WEBPACK_IMPORTED_MODULE_3__["RoomComponent"] },
];
var ChatRouting = /** @class */ (function () {
    function ChatRouting() {
    }
    ChatRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(ChatRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], ChatRouting);
    return ChatRouting;
}());



/***/ }),

/***/ "./src/app/chat/components/home/home.component.css":
/*!*********************************************************!*\
  !*** ./src/app/chat/components/home/home.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chat/components/home/home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/chat/components/home/home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Enter a chat room:</h4>\r\n<div class=\"ui input\">\r\n    <input type=\"text\" \r\n      placeholder=\"Your name?\"\r\n      name=\"userName\"\r\n      [(ngModel)]=\"userName\" \r\n      [ngModelOptions]=\"{standalone: true}\"/>\r\n  </div>\r\n<div class=\"ui input\">\r\n  <input type=\"text\" \r\n    placeholder=\"Room name\"\r\n    name=\"roomName\"\r\n    [(ngModel)]=\"roomName\" \r\n    [ngModelOptions]=\"{standalone: true}\"/>\r\n</div>\r\n<button class=\"ui red button\"\r\n        (click)=\"createChatRoom()\"\r\n        [disabled]=\"roomName.length === 0 || userName.length === 0\"> Enter room</button>\r\n\r\n<div class=\"ui container\">\r\n    <h3 class=\"ui header\">Msg from backend: {{ randMessage }} </h3>\r\n</div>"

/***/ }),

/***/ "./src/app/chat/components/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/chat/components/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_api_url_factory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api-url-factory.service */ "./src/app/services/api-url-factory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, http, factory) {
        this.router = router;
        this.http = http;
        this.factory = factory;
        this.roomName = '';
        this.userName = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var baseURL = this.factory.getBaseUrl() + 'chat/';
        var backendURL = baseURL + 'home';
        this.http.getObject(backendURL).subscribe(function (data) {
            console.log("data", data);
            _this.randInt = data.int;
            _this.randMessage = data.message;
        });
    };
    HomeComponent.prototype.createChatRoom = function () {
        alert("Functionality not developed");
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/chat/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/chat/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HTTPService"], _services_api_url_factory_service__WEBPACK_IMPORTED_MODULE_3__["ApiUrlFactory"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/chat/components/room/room.component.css":
/*!*********************************************************!*\
  !*** ./src/app/chat/components/room/room.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textRight {\r\n    text-align: right;\r\n}"

/***/ }),

/***/ "./src/app/chat/components/room/room.component.html":
/*!**********************************************************!*\
  !*** ./src/app/chat/components/room/room.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container\" style=\"width: 50%;\">\r\n  <div class=\"ui large label\">Messages for room - {{roomName}}</div>\r\n  <br>\r\n\r\n  <ng-container *ngFor=\"let message of messages\">\r\n    <div class=\"event\">\r\n      <div class=\"ui raised segment\">\r\n        <div class=\"ui right red label ribbon\" *ngIf=\"message.sender === currentUser; else someoneElse\">You</div>\r\n        <ng-template #someoneElse>\r\n          <div class=\"ui blue label ribbon\">{{message.sender}}</div>\r\n        </ng-template>\r\n        <div class=\"content\">\r\n          <div class=\"extra-text\" [ngClass]=\"{'textRight': message.sender === currentUser}\">{{ message.message }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <br>\r\n  <div class=\"ui input focus\">\r\n    <input type=\"text\" \r\n      placeholder=\"message\"\r\n      name=\"curMessage\"\r\n      [(ngModel)]=\"curMessage\" \r\n      [ngModelOptions]=\"{standalone: true}\"/>\r\n  </div>\r\n  <button class=\"ui green button\" (click)=\"sendMessage()\" [disabled]=\"curMessage.length === 0\">Submit Message</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/chat/components/room/room.component.ts":
/*!********************************************************!*\
  !*** ./src/app/chat/components/room/room.component.ts ***!
  \********************************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_observable_dom_WebSocketSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/observable/dom/WebSocketSubject */ "./node_modules/rxjs/_esm5/observable/dom/WebSocketSubject.js");
/* harmony import */ var _models_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/message */ "./src/app/chat/models/message.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_api_url_factory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api-url-factory.service */ "./src/app/services/api-url-factory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoomComponent = /** @class */ (function () {
    function RoomComponent(route, urlFactory) {
        var _this = this;
        this.route = route;
        this.urlFactory = urlFactory;
        this.messages = [];
        this.curMessage = '';
        this.socketURLandPort = '';
        this.socketURLandPort = this.urlFactory.getBaseUrl();
        this.route.paramMap.subscribe(function (params) {
            _this.roomName = params.get('roomName');
        }).unsubscribe();
    }
    RoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = sessionStorage.getItem('user');
        if (this.currentUser === null) {
            throw Error("No user name picked out. Please go back home and pick out a username");
        }
        var url = '';
        var origin = window.location.origin;
        if (origin.includes('127.0.0.1') || origin.includes('localhost')) {
            url = 'ws://127.0.0.1:8205/ws/chat/' + this.roomName;
        }
        else {
            url = 'ws://' + this.socketURLandPort + 'ws/chat/' + this.roomName;
        }
        console.log("url: ", url);
        this.wsSubject$ = rxjs_observable_dom_WebSocketSubject__WEBPACK_IMPORTED_MODULE_1__["WebSocketSubject"].create(url);
        this.wsSubject$
            .subscribe(function (message) {
            console.log("server message ", message);
            var m = message;
            if (m.sender !== _this.currentUser)
                _this.messages.push(m);
        }, function (err) { return console.error(err); }, function () { return console.warn('Completed!'); });
    };
    RoomComponent.prototype.sendMessage = function () {
        var m = new _models_message__WEBPACK_IMPORTED_MODULE_2__["Message"]();
        m.message = this.curMessage;
        m.sender = this.currentUser;
        this.messages.push(m);
        this.wsSubject$.next(JSON.stringify(m));
        this.curMessage = '';
    };
    RoomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-room',
            template: __webpack_require__(/*! ./room.component.html */ "./src/app/chat/components/room/room.component.html"),
            styles: [__webpack_require__(/*! ./room.component.css */ "./src/app/chat/components/room/room.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_api_url_factory_service__WEBPACK_IMPORTED_MODULE_4__["ApiUrlFactory"]])
    ], RoomComponent);
    return RoomComponent;
}());



/***/ }),

/***/ "./src/app/chat/models/message.ts":
/*!****************************************!*\
  !*** ./src/app/chat/models/message.ts ***!
  \****************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/config/config.ts":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Config = /** @class */ (function () {
    function Config() {
        this.dev = {
            serverAndProtocol: null,
            port: null,
            // set dev parent URL here
            parentURL: "http://127.0.0.1:8201",
            urlPrefix: null
        };
        this.prod = {
            serverAndProtocol: '92f16d81.ngrok.io/',
            port: null,
            // set dev parent URL here
            parentURL: 'http://localhost:4200',
            urlPrefix: null
        };
        this.ActiveEnvironment = this.dev;
    }
    Config = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Config);
    return Config;
}());



/***/ }),

/***/ "./src/app/services/api-url-factory.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/api-url-factory.service.ts ***!
  \*****************************************************/
/*! exports provided: ApiUrlFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUrlFactory", function() { return ApiUrlFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiUrlFactory = /** @class */ (function () {
    function ApiUrlFactory(config) {
        this.config = config;
        this.baseUrl = '';
        this.parentURL = '';
        if (config.ActiveEnvironment.serverAndProtocol) {
            this.baseUrl = config.ActiveEnvironment.serverAndProtocol;
            this.parentURL = config.ActiveEnvironment.parentURL;
            if (config.ActiveEnvironment.port) {
                this.baseUrl += ":" + config.ActiveEnvironment.port + "/";
            }
        }
        else {
            if (config.ActiveEnvironment.port) {
                console.error("Port value supplied, but ignored because server not specified");
            }
        }
        //        if (config.urlPrefix) {
        //            this.baseUrl += config.urlPrefix;
        //        }
    }
    ApiUrlFactory.prototype.getBaseUrl = function () {
        return this.baseUrl;
    };
    ApiUrlFactory.prototype.getParentURL = function () {
        return this.parentURL;
    };
    ApiUrlFactory = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_config_config__WEBPACK_IMPORTED_MODULE_1__["Config"]])
    ], ApiUrlFactory);
    return ApiUrlFactory;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HTTPService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPService", function() { return HTTPService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { CookieService } from "./cookie.service";
var HTTPService = /** @class */ (function () {
    function HTTPService(_http) {
        this._http = _http;
    }
    /**
     * Sends and parses a post request as a JSON response. The with credentials
     * token ensures that any request sent uses the CSRF Token
     *
     * @param obj the parameters to send via post request. The parameters are sent
     * within the request but are not appended to the URL like in the case of a GET request
     * @param URLpath the endpoint that the request needs to hit
     *
     * @returns an observable object with the response that needs to be subscribed to
     */
    HTTPService.prototype.postObject = function (obj, URLpath) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        // const token = this.cs.readCookie('csrftoken');
        //        headers.append('X-CSRFToken', token);
        return this._http.post(URLpath, obj, {
            withCredentials: true
        }).map(function (res) { return res.json(); });
    };
    /**
     * Sends and parses a GET request as a JSON response. The with credentials
     * ensures that any request sent uses the CSRF Token returned by Django. the default
     * content type for all requests is JSON.
     *
     * @param URLpath the endpoint that the request needs to hit
     * @param params the params for the request as URLSearchParam objects - for a get
     * request they are depicted on the URL as query param strings. Ex: http://.../?param1=abc
     *
     * @returns an Observable object that needs to be subscribed to
     */
    HTTPService.prototype.getObject = function (URLpath, params) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.get(URLpath, {
            headers: headers,
            withCredentials: true,
            search: params
        }).map(function (res) { return res.json(); });
    };
    /**
     * send a PUT request to an endpoint in a JSON format
     *
     * @param obj the parameters to send via post request. The parameters are sent
     * within the request but are not appended to the URL like in the case of a GET request
     * @param URLpath the endpoint that the request needs to hit
     *
     * @returns an observable object with the response that needs to be subscribed to
     */
    HTTPService.prototype.putObject = function (obj, URLpath) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.put(URLpath, obj, {
            headers: headers,
            withCredentials: true
        }).map(function (res) { return res.json(); });
    };
    HTTPService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], HTTPService);
    return HTTPService;
}());



/***/ }),

/***/ "./src/app/services/loader.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/loader.service.ts ***!
  \********************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderService = /** @class */ (function () {
    // protected to make sure no one calls it.
    function LoaderService() {
        this.isLoading = false;
        this.spinner = document.getElementById("propLoader");
        this.HIDE = "hide";
        this.SHOW = "show";
    }
    LoaderService_1 = LoaderService;
    /**
    * Publicly callable method to display the spinner.
    */
    LoaderService.prototype.showSpinner = function () {
        this.isLoading = true;
        this.setSpinner();
    };
    /**
    * Sets the spinner's visibility based on the method chosen.
    */
    LoaderService.prototype.setSpinner = function () {
        if (this.isLoading) {
            this.spinner.style.display = "block";
        }
        else {
            this.spinner.style.display = "none";
        }
    };
    /**
    * Publicly callable method to remove the spinner from the UI
    */
    LoaderService.prototype.removeSpinner = function () {
        this.isLoading = false;
        this.setSpinner();
    };
    /**
    * Class which ensures that only one instance of this loader service is used across all components
    * in the application. Note that the constructor is protected which means that no other class can
    * call it.
    */
    LoaderService.getInstance = function () {
        if (this.loaderService == null || this.loaderService == undefined) {
            this.loaderService = new LoaderService_1();
        }
        return this.loaderService;
    };
    LoaderService = LoaderService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
    var LoaderService_1;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kpahawa\USCC\USCC-Git\Jenkins-Sample\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map