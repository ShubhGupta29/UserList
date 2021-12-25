(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/EcS":
/*!*****************************************************************************!*\
  !*** ./src/app/Shared/authorisation-error/authorisation-error.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AuthorisationErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorisationErrorComponent", function() { return AuthorisationErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthorisationErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthorisationErrorComponent.ɵfac = function AuthorisationErrorComponent_Factory(t) { return new (t || AuthorisationErrorComponent)(); };
AuthorisationErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthorisationErrorComponent, selectors: [["app-authorisation-error"]], decls: 2, vars: 0, template: function AuthorisationErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "authorisation-error works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1NoYXJlZC9hdXRob3Jpc2F0aW9uLWVycm9yL2F1dGhvcmlzYXRpb24tZXJyb3IuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorisationErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-authorisation-error',
                templateUrl: './authorisation-error.component.html',
                styleUrls: ['./authorisation-error.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! A:\Shubh_17-12-2021_9566197822\WebApp\src\main.ts */"zUnb");


/***/ }),

/***/ "8AA/":
/*!***************************************************************************************************!*\
  !*** ./src/app/UserLandingPage/user-landing-component/login-page-component/login-page.service.ts ***!
  \***************************************************************************************************/
/*! exports provided: LoginPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageService", function() { return LoginPageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







class LoginPageService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
    }
    login(loginRegisterRequest) {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].postLogin;
        return this.http.post(url, loginRegisterRequest, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            return res;
        }));
    }
}
LoginPageService.ɵfac = function LoginPageService_Factory(t) { return new (t || LoginPageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginPageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginPageService, factory: LoginPageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const HOSTNAME = "reqres.in";
const PORT_NUMBER = 0;
const API = "/api/";
const environment = {
    production: true,
    getListUsers: "https://" + HOSTNAME + API + "users?page=",
    getSingleUser: "https://" + HOSTNAME + API + "users/",
    postLogin: "https://" + HOSTNAME + API + "login",
    postRegister: "https://" + HOSTNAME + API + "register",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Hz6O":
/*!**********************************************************!*\
  !*** ./src/app/UserLandingPage/webapp-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: WebappRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebappRoutingModule", function() { return WebappRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.guard */ "tIkO");
/* harmony import */ var _user_home_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-home/list-view/list-view.component */ "cG6o");
/* harmony import */ var _user_home_single_view_single_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-home/single-view/single-view.component */ "izeK");
/* harmony import */ var _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-home/user-home.component */ "Yq+j");
/* harmony import */ var _user_landing_component_login_page_component_login_page_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-landing-component/login-page-component/login-page-component.component */ "kSxp");
/* harmony import */ var _user_landing_component_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-landing-component/register/register.component */ "pSOI");
/* harmony import */ var _user_landing_component_user_landing_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-landing-component/user-landing-component.component */ "iY4u");











const routes = [
    { path: 'webapp', component: _user_landing_component_user_landing_component_component__WEBPACK_IMPORTED_MODULE_8__["UserLandingComponentComponent"], children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: _user_landing_component_login_page_component_login_page_component_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponentComponent"] },
            { path: 'register', component: _user_landing_component_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] }
        ] },
    { path: 'home', component: _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_5__["UserHomeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], children: [
            { path: '', redirectTo: 'listview', pathMatch: 'full' },
            { path: 'listview', component: _user_home_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_3__["ListViewComponent"] },
            { path: 'singleview', component: _user_home_single_view_single_view_component__WEBPACK_IMPORTED_MODULE_4__["SingleViewComponent"] }
        ]
    },
    { path: '', redirectTo: 'webapp', pathMatch: 'full' }
];
class WebappRoutingModule {
}
WebappRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WebappRoutingModule });
WebappRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WebappRoutingModule_Factory(t) { return new (t || WebappRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WebappRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebappRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "KhAs":
/*!************************************************!*\
  !*** ./src/app/user-home/user-home.service.ts ***!
  \************************************************/
/*! exports provided: UserHomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomeService", function() { return UserHomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







class UserHomeService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
    }
    getListUsers(num) {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].getListUsers + num;
        return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            return res;
        }));
    }
    getSingleUser(num) {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].getSingleUser + num;
        return this.http.get(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            return res;
        }));
    }
}
UserHomeService.ɵfac = function UserHomeService_Factory(t) { return new (t || UserHomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UserHomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserHomeService, factory: UserHomeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserHomeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "O0+z":
/*!********************************************************************!*\
  !*** ./src/app/Shared/Modules/app-material/app-material.module.ts ***!
  \********************************************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");









class AppMaterialModule {
}
AppMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppMaterialModule });
AppMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppMaterialModule_Factory(t) { return new (t || AppMaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
        ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppMaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'WebApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "container-fluid"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Yq+j":
/*!**************************************************!*\
  !*** ./src/app/user-home/user-home.component.ts ***!
  \**************************************************/
/*! exports provided: UserHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomeComponent", function() { return UserHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");




class UserHomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserHomeComponent.ɵfac = function UserHomeComponent_Factory(t) { return new (t || UserHomeComponent)(); };
UserHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserHomeComponent, selectors: [["app-user-home"]], decls: 13, vars: 0, consts: [[1, "navbar", "navbar-expand-md", "bg-dark", "navbar-dark", "nav-fill", "w-100"], ["routerLink", "../", "routerLinkActive", "active", 1, "navbar-brand"], [2, "padding-top", "46px"], [1, "col-6", 2, "position", "relative", "display", "inline", "padding", "24px"], ["routerLink", "../home/listview", 2, "position", "relative", "display", "inline"], ["routerLink", "../home/singleview", 2, "position", "relative", "display", "inline"]], template: function UserHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Webapp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-chip-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "List View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Single View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChip"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: sans-serif;\r\n    background: #3B3B98;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]{\r\n    width: 300px; \r\n    padding: 40px;\r\n    position: absolute;\r\n    top: 50%; \r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n    background: #191919;\r\n    text-align: center;\r\n    \r\n}\r\n\r\n\r\n\r\n.box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    color: white;\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   input[type= \"text\"][_ngcontent-%COMP%], .box[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%]{\r\n    border: 0;\r\n    background: none;\r\n    display: block;\r\n    margin: 20px auto;\r\n    text-align: center;\r\n    border: 2px solid #3498db;\r\n    padding: 14px 10px;\r\n    width: 200px;\r\n    outline: none;\r\n    color: white;\r\n    border-radius: 24px;\r\n    transition: 0.25s;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   input[type= \"text\"][_ngcontent-%COMP%]:focus, .box[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%]:focus{\r\n    width: 280px;\r\n    border-color: #2ecc71;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   input[type =\"submit\"][_ngcontent-%COMP%]{\r\n    border: 0;\r\n    background: none;\r\n    display: block;\r\n    margin: 20px auto;\r\n    text-align: center;\r\n    border: 2px solid #2ecc71;\r\n    padding: 14px 40px;\r\n    width: 200px;\r\n    outline: none;\r\n    color: white;\r\n    border-radius: 24px;\r\n    transition: 0.25s;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   input[type =\"submit\"][_ngcontent-%COMP%]:hover{\r\nbackground: #2ecc71;\r\n}\r\n\r\n.vertical-menu[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    height: 100%;\r\n    background-color:rgba(88, 88, 88); \r\n  }\r\n\r\n.vertical-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  background: rgb(139, 215, 245);\r\n    color: black;\r\n    display: block;\r\n    padding: 12px;\r\n    text-decoration: none;\r\n  }\r\n\r\n.vertical-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(91, 187, 204);\r\n  }\r\n\r\n.vertical-menu[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    background-color: rgb(13, 14, 77);\r\n    color: white;\r\n  }\r\n\r\n\r\n\r\n.navbar-inverse[_ngcontent-%COMP%]{\r\n    background-color: #282828;\r\n    border: #282828;\r\n  }\r\n\r\n.nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]{\r\n    color: #bfbfbf;\r\n  }\r\n\r\n.nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n    background-color: transparent;\r\n    color: #6aeeb9;\r\n  }\r\n\r\n.nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus{\r\n    background-color: transparent;\r\n    color:orange;\r\n  }\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n    font-size: 22px;\r\n    background-color: transparent;\r\n   \r\n  }\r\n\r\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover, .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:focus {\r\n      \r\n      color: orange !important;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1ob21lL3VzZXItaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLGtCQUFrQjs7QUFFdEI7O0FBRUEsZ0JBQWdCOztBQUNoQjtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksU0FBUztJQUNULGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUdBO0lBQ0ksU0FBUztJQUNULGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlDQUFpQztFQUNuQzs7QUFFQTtFQUNBLDhCQUE4QjtJQUM1QixZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxtQ0FBbUM7RUFDckM7O0FBRUE7SUFDRSxpQ0FBaUM7SUFDakMsWUFBWTtFQUNkOztBQUlBLG9CQUFvQjs7QUFDcEI7SUFDRSx5QkFBeUI7SUFDekIsZUFBZTtFQUNqQjs7QUFDQTtJQUNFLGNBQWM7RUFDaEI7O0FBQ0U7SUFDQSw2QkFBNkI7SUFDN0IsY0FBYztFQUNoQjs7QUFFQTtJQUNFLDZCQUE2QjtJQUM3QixZQUFZO0VBQ2Q7O0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDZCQUE2Qjs7RUFFL0I7O0FBQ0E7OztNQUdJLHdCQUF3QjtJQUMxQiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaG9tZS91c2VyLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM0IzQjk4O1xyXG59XHJcblxyXG4uYm94e1xyXG4gICAgd2lkdGg6IDMwMHB4OyBcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTsgXHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgYmFja2dyb3VuZDogIzE5MTkxOTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG4vKmxvZ2luIGhlYWRpbmcqL1xyXG4uYm94IGgxe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5ib3ggaW5wdXRbdHlwZT0gXCJ0ZXh0XCJdLCAuYm94IGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXXtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzM0OThkYjtcclxuICAgIHBhZGRpbmc6IDE0cHggMTBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XHJcbn1cclxuXHJcbi5ib3ggaW5wdXRbdHlwZT0gXCJ0ZXh0XCJdOmZvY3VzLCAuYm94IGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1c3tcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGJvcmRlci1jb2xvcjogIzJlY2M3MTtcclxufVxyXG5cclxuXHJcbi5ib3ggaW5wdXRbdHlwZSA9XCJzdWJtaXRcIl17XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyZWNjNzE7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDQwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xyXG59XHJcblxyXG4uYm94IGlucHV0W3R5cGUgPVwic3VibWl0XCJdOmhvdmVye1xyXG5iYWNrZ3JvdW5kOiAjMmVjYzcxO1xyXG59XHJcblxyXG4udmVydGljYWwtbWVudSB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoODgsIDg4LCA4OCk7IFxyXG4gIH1cclxuICBcclxuICAudmVydGljYWwtbWVudSBhIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTM5LCAyMTUsIDI0NSk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC52ZXJ0aWNhbC1tZW51IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkxLCAxODcsIDIwNCk7XHJcbiAgfVxyXG4gIFxyXG4gIC52ZXJ0aWNhbC1tZW51IGEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMywgMTQsIDc3KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogbmF2YmFyIHNldHRpbmdzICovXHJcbiAgLm5hdmJhci1pbnZlcnNle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcclxuICAgIGJvcmRlcjogIzI4MjgyODtcclxuICB9XHJcbiAgLm5hdiA+IGxpID4gYXtcclxuICAgIGNvbG9yOiAjYmZiZmJmO1xyXG4gIH1cclxuICAgIC5uYXYgPiBsaSA+IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzZhZWViOTtcclxuICB9XHJcbiAgXHJcbiAgLm5hdiA+IGxpID4gYTpmb2N1c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6b3JhbmdlO1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItYnJhbmQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICBcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWJyYW5kOmhvdmVyLFxyXG4gIC5uYXZiYXIgLm5hdmJhci1icmFuZDpmb2N1cyB7XHJcbiAgICAgIFxyXG4gICAgICBjb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-home',
                templateUrl: './user-home.component.html',
                styleUrls: ['./user-home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _Shared_authorisation_error_authorisation_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Shared/authorisation-error/authorisation-error.component */ "/EcS");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _UserLandingPage_webapp_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserLandingPage/webapp.module */ "cCL5");










// import { MatInputModule } from '@angular/material';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _UserLandingPage_webapp_module__WEBPACK_IMPORTED_MODULE_8__["WebappModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _Shared_authorisation_error_authorisation_error_component__WEBPACK_IMPORTED_MODULE_4__["AuthorisationErrorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _UserLandingPage_webapp_module__WEBPACK_IMPORTED_MODULE_8__["WebappModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _Shared_authorisation_error_authorisation_error_component__WEBPACK_IMPORTED_MODULE_4__["AuthorisationErrorComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _UserLandingPage_webapp_module__WEBPACK_IMPORTED_MODULE_8__["WebappModule"]
                ],
                providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cCL5":
/*!**************************************************!*\
  !*** ./src/app/UserLandingPage/webapp.module.ts ***!
  \**************************************************/
/*! exports provided: WebappModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebappModule", function() { return WebappModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _Shared_Modules_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/Modules/app-material/app-material.module */ "O0+z");
/* harmony import */ var _webapp_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webapp-routing.module */ "Hz6O");
/* harmony import */ var _user_landing_component_user_landing_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-landing-component/user-landing-component.component */ "iY4u");
/* harmony import */ var _user_landing_component_login_page_component_login_page_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-landing-component/login-page-component/login-page-component.component */ "kSxp");
/* harmony import */ var _user_landing_component_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-landing-component/register/register.component */ "pSOI");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _user_landing_component_login_page_component_login_page_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-landing-component/login-page-component/login-page.service */ "8AA/");
/* harmony import */ var _user_landing_component_register_register_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-landing-component/register/register.service */ "w4Wi");
/* harmony import */ var _user_home_user_home_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../user-home/user-home.service */ "KhAs");
/* harmony import */ var _user_home_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../user-home/list-view/list-view.component */ "cG6o");
/* harmony import */ var _user_home_single_view_single_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../user-home/single-view/single-view.component */ "izeK");
/* harmony import */ var _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../user-home/user-home.component */ "Yq+j");




// import { NgbModule } from '@ng';













// import { MatInputModule } from '@angular/material';
class WebappModule {
}
WebappModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WebappModule });
WebappModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WebappModule_Factory(t) { return new (t || WebappModule)(); }, providers: [
        _user_landing_component_login_page_component_login_page_service__WEBPACK_IMPORTED_MODULE_10__["LoginPageService"],
        _user_landing_component_register_register_service__WEBPACK_IMPORTED_MODULE_11__["RegisterService"],
        _user_home_user_home_service__WEBPACK_IMPORTED_MODULE_12__["UserHomeService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _webapp_routing_module__WEBPACK_IMPORTED_MODULE_4__["WebappRoutingModule"],
            _Shared_Modules_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_3__["AppMaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WebappModule, { declarations: [_user_landing_component_user_landing_component_component__WEBPACK_IMPORTED_MODULE_5__["UserLandingComponentComponent"], _user_landing_component_login_page_component_login_page_component_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponentComponent"], _user_landing_component_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _user_home_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_13__["ListViewComponent"],
        _user_home_single_view_single_view_component__WEBPACK_IMPORTED_MODULE_14__["SingleViewComponent"], _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_15__["UserHomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _webapp_routing_module__WEBPACK_IMPORTED_MODULE_4__["WebappRoutingModule"],
        _Shared_Modules_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_3__["AppMaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebappModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_user_landing_component_user_landing_component_component__WEBPACK_IMPORTED_MODULE_5__["UserLandingComponentComponent"], _user_landing_component_login_page_component_login_page_component_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponentComponent"], _user_landing_component_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _user_home_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_13__["ListViewComponent"],
                    _user_home_single_view_single_view_component__WEBPACK_IMPORTED_MODULE_14__["SingleViewComponent"], _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_15__["UserHomeComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _webapp_routing_module__WEBPACK_IMPORTED_MODULE_4__["WebappRoutingModule"],
                    _Shared_Modules_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_3__["AppMaterialModule"]
                ],
                providers: [
                    _user_landing_component_login_page_component_login_page_service__WEBPACK_IMPORTED_MODULE_10__["LoginPageService"],
                    _user_landing_component_register_register_service__WEBPACK_IMPORTED_MODULE_11__["RegisterService"],
                    _user_home_user_home_service__WEBPACK_IMPORTED_MODULE_12__["UserHomeService"]
                ],
                bootstrap: []
            }]
    }], null, null); })();


/***/ }),

/***/ "cG6o":
/*!************************************************************!*\
  !*** ./src/app/user-home/list-view/list-view.component.ts ***!
  \************************************************************/
/*! exports provided: ListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewComponent", function() { return ListViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-home.service */ "KhAs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function ListViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Enter a number to view list of Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListViewComponent_div_0_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.num = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListViewComponent_div_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.value(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.num);
} }
function ListViewComponent_div_4_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-divider", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r6.first_name, "\u00A0", i_r6.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r6.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", i_r6.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ID : ", i_r6.id, " ");
} }
function ListViewComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListViewComponent_div_4_li_3_Template, 11, 5, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.list.data);
} }
class ListViewComponent {
    constructor(userHome) {
        this.userHome = userHome;
        this.cardShow = true;
        this.list = null;
    }
    ngOnInit() {
    }
    value() {
        if (this.num != 0) {
            this.cardShow = false;
        }
        this.userHome.getListUsers(this.num).subscribe(res => {
            this.list = res;
        }, error => {
            alert(error.error.error);
        });
    }
    reset() {
        this.cardShow = true;
        this.num = 0;
    }
}
ListViewComponent.ɵfac = function ListViewComponent_Factory(t) { return new (t || ListViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_home_service__WEBPACK_IMPORTED_MODULE_1__["UserHomeService"])); };
ListViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListViewComponent, selectors: [["app-list-view"]], decls: 5, vars: 2, consts: [["style", "padding: 16px 0 0 0;", 4, "ngIf"], [2, "padding", "16px 0 0 0"], ["mat-raised-button", "", "color", "primary", 3, "click"], [4, "ngIf"], [1, "example-card"], ["type", "number", "placeholder", "Enter a number", "min", "0", "name", "num", 3, "ngModel", "ngModelChange"], [1, "row"], [2, "list-style-type", "none"], ["class", "col-4", "style", "padding: 26px;", 4, "ngFor", "ngForOf"], [1, "col-4", 2, "padding", "26px"], ["alt", "", "srcset", "", 3, "src"], ["inset", ""]], template: function ListViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListViewComponent_div_0_Template, 9, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListViewComponent_Template_button_click_2_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListViewComponent_div_4_Template, 4, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list != null && !ctx.cardShow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardFooter"]], styles: [".example-card[_ngcontent-%COMP%] {\r\n    max-width: 200px;\r\n    padding: 24px;\r\n    justify-content: center;\r\n  }\r\n  \r\n\r\n  .cardNumber[_ngcontent-%COMP%] {\r\n    width: 300px; \r\n    padding: 40px;\r\n    position: relative;\r\n    transform: translate(-50%,-50%);\r\n    background: #191919;\r\n    text-align: center;\r\n    color: white;\r\n  }\r\n  \r\n\r\n  body[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: sans-serif;\r\n    background: #3B3B98;\r\n}\r\n  \r\n\r\n  .box[_ngcontent-%COMP%]{\r\n    width: 300px; \r\n    padding: 40px;\r\n    position: absolute;\r\n    top: 50%; \r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n    background: #191919;\r\n    text-align: center;\r\n    \r\n}\r\n  \r\n\r\n  \r\n  \r\n\r\n  .box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    color: white;\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n}\r\n  \r\n\r\n  .box[_ngcontent-%COMP%]   input[type= \"text\"][_ngcontent-%COMP%], .box[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%]{\r\n    border: 0;\r\n    background: none;\r\n    display: block;\r\n    margin: 20px auto;\r\n    text-align: center;\r\n    border: 2px solid #3498db;\r\n    padding: 14px 10px;\r\n    width: 200px;\r\n    outline: none;\r\n    color: white;\r\n    border-radius: 24px;\r\n    transition: 0.25s;\r\n}\r\n  \r\n\r\n  .box[_ngcontent-%COMP%]   input[type= \"text\"][_ngcontent-%COMP%]:focus, .box[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%]:focus{\r\n    width: 280px;\r\n    border-color: #2ecc71;\r\n}\r\n  \r\n\r\n  .box[_ngcontent-%COMP%]   input[type =\"submit\"][_ngcontent-%COMP%]{\r\n    border: 0;\r\n    background: none;\r\n    display: block;\r\n    margin: 20px auto;\r\n    text-align: center;\r\n    border: 2px solid #2ecc71;\r\n    padding: 14px 40px;\r\n    width: 200px;\r\n    outline: none;\r\n    color: white;\r\n    border-radius: 24px;\r\n    transition: 0.25s;\r\n}\r\n  \r\n\r\n  .box[_ngcontent-%COMP%]   input[type =\"submit\"][_ngcontent-%COMP%]:hover{\r\nbackground: #2ecc71;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1ob21lL2xpc3Qtdmlldy9saXN0LXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCOzs7RUFHQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDs7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7OztFQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLGtCQUFrQjs7QUFFdEI7OztFQUVBLGdCQUFnQjs7O0VBQ2hCO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7OztFQUVBO0lBQ0ksU0FBUztJQUNULGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7OztFQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7O0VBR0E7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7O0VBRUE7QUFDQSxtQkFBbUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC91c2VyLWhvbWUvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuXHJcbiAgLmNhcmROdW1iZXIge1xyXG4gICAgd2lkdGg6IDMwMHB4OyBcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgYmFja2dyb3VuZDogIzE5MTkxOTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIGJvZHl7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM0IzQjk4O1xyXG59XHJcblxyXG4uYm94e1xyXG4gICAgd2lkdGg6IDMwMHB4OyBcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTsgXHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgYmFja2dyb3VuZDogIzE5MTkxOTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG4vKmxvZ2luIGhlYWRpbmcqL1xyXG4uYm94IGgxe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5ib3ggaW5wdXRbdHlwZT0gXCJ0ZXh0XCJdLCAuYm94IGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXXtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzM0OThkYjtcclxuICAgIHBhZGRpbmc6IDE0cHggMTBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XHJcbn1cclxuXHJcbi5ib3ggaW5wdXRbdHlwZT0gXCJ0ZXh0XCJdOmZvY3VzLCAuYm94IGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1c3tcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGJvcmRlci1jb2xvcjogIzJlY2M3MTtcclxufVxyXG5cclxuXHJcbi5ib3ggaW5wdXRbdHlwZSA9XCJzdWJtaXRcIl17XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyZWNjNzE7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDQwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xyXG59XHJcblxyXG4uYm94IGlucHV0W3R5cGUgPVwic3VibWl0XCJdOmhvdmVye1xyXG5iYWNrZ3JvdW5kOiAjMmVjYzcxO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-view',
                templateUrl: './list-view.component.html',
                styleUrls: ['./list-view.component.css']
            }]
    }], function () { return [{ type: _user_home_service__WEBPACK_IMPORTED_MODULE_1__["UserHomeService"] }]; }, null); })();


/***/ }),

/***/ "iY4u":
/*!********************************************************************************************!*\
  !*** ./src/app/UserLandingPage/user-landing-component/user-landing-component.component.ts ***!
  \********************************************************************************************/
/*! exports provided: UserLandingComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLandingComponentComponent", function() { return UserLandingComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class UserLandingComponentComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserLandingComponentComponent.ɵfac = function UserLandingComponentComponent_Factory(t) { return new (t || UserLandingComponentComponent)(); };
UserLandingComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserLandingComponentComponent, selectors: [["app-user-landing-component"]], decls: 6, vars: 0, consts: [[1, "row"], [1, "navbar", "navbar-expand-md", "bg-dark", "navbar-dark", "nav-fill", "w-100"], ["routerLink", "../", "routerLinkActive", "active", 1, "navbar-brand"]], template: function UserLandingComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Webapp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".vertical-menu[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    height: 100%;\r\n    background-color:rgba(88, 88, 88); \r\n  }\r\n  \r\n  .vertical-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  background: rgb(139, 215, 245);\r\n    color: black;\r\n    display: block;\r\n    padding: 12px;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .vertical-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(91, 187, 204);\r\n  }\r\n  \r\n  .vertical-menu[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    background-color: rgb(13, 14, 77);\r\n    color: white;\r\n  }\r\n  \r\n  \r\n  \r\n  .navbar-inverse[_ngcontent-%COMP%]{\r\n    background-color: #282828;\r\n    border: #282828;\r\n  }\r\n  \r\n  .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]{\r\n    color: #bfbfbf;\r\n  }\r\n  \r\n  .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n    background-color: transparent;\r\n    color: #6aeeb9;\r\n  }\r\n  \r\n  .nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus{\r\n    background-color: transparent;\r\n    color:orange;\r\n  }\r\n  \r\n  .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n    font-size: 22px;\r\n    background-color: transparent;\r\n   \r\n  }\r\n  \r\n  .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover, .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:focus {\r\n      \r\n      color: orange !important;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVXNlckxhbmRpbmdQYWdlL3VzZXItbGFuZGluZy1jb21wb25lbnQvdXNlci1sYW5kaW5nLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixpQ0FBaUM7RUFDbkM7O0VBRUE7RUFDQSw4QkFBOEI7SUFDNUIsWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhO0lBQ2IscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDLFlBQVk7RUFDZDs7RUFJQSxvQkFBb0I7O0VBQ3BCO0lBQ0UseUJBQXlCO0lBQ3pCLGVBQWU7RUFDakI7O0VBQ0E7SUFDRSxjQUFjO0VBQ2hCOztFQUNFO0lBQ0EsNkJBQTZCO0lBQzdCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSw2QkFBNkI7SUFDN0IsWUFBWTtFQUNkOztFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiw2QkFBNkI7O0VBRS9COztFQUNBOzs7TUFHSSx3QkFBd0I7SUFDMUIiLCJmaWxlIjoic3JjL2FwcC9Vc2VyTGFuZGluZ1BhZ2UvdXNlci1sYW5kaW5nLWNvbXBvbmVudC91c2VyLWxhbmRpbmctY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVydGljYWwtbWVudSB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoODgsIDg4LCA4OCk7IFxyXG4gIH1cclxuICBcclxuICAudmVydGljYWwtbWVudSBhIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTM5LCAyMTUsIDI0NSk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC52ZXJ0aWNhbC1tZW51IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkxLCAxODcsIDIwNCk7XHJcbiAgfVxyXG4gIFxyXG4gIC52ZXJ0aWNhbC1tZW51IGEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMywgMTQsIDc3KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogbmF2YmFyIHNldHRpbmdzICovXHJcbiAgLm5hdmJhci1pbnZlcnNle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcclxuICAgIGJvcmRlcjogIzI4MjgyODtcclxuICB9XHJcbiAgLm5hdiA+IGxpID4gYXtcclxuICAgIGNvbG9yOiAjYmZiZmJmO1xyXG4gIH1cclxuICAgIC5uYXYgPiBsaSA+IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzZhZWViOTtcclxuICB9XHJcbiAgXHJcbiAgLm5hdiA+IGxpID4gYTpmb2N1c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6b3JhbmdlO1xyXG4gIH1cclxuICAubmF2YmFyIC5uYXZiYXItYnJhbmQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICBcclxuICB9XHJcbiAgLm5hdmJhciAubmF2YmFyLWJyYW5kOmhvdmVyLFxyXG4gIC5uYXZiYXIgLm5hdmJhci1icmFuZDpmb2N1cyB7XHJcbiAgICAgIFxyXG4gICAgICBjb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserLandingComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-landing-component',
                templateUrl: './user-landing-component.component.html',
                styleUrls: ['./user-landing-component.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "izeK":
/*!****************************************************************!*\
  !*** ./src/app/user-home/single-view/single-view.component.ts ***!
  \****************************************************************/
/*! exports provided: SingleViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleViewComponent", function() { return SingleViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-home.service */ "KhAs");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function SingleViewComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-divider", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.single.data.first_name, "\u00A0", ctx_r0.single.data.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.single.data.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.single.data.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ID : ", ctx_r0.single.data.id, " ");
} }
class SingleViewComponent {
    constructor(userHome) {
        this.userHome = userHome;
        this.num = 0;
        this.single = null;
        this.showCard = true;
    }
    ngOnInit() {
    }
    value() {
        this.userHome.getSingleUser(this.num).subscribe(res => {
            this.single = res;
            this.showCard = false;
        }, error => {
            alert(error.error.error);
        });
    }
    reset() {
        this.showCard = true;
        this.single = null;
        this.num = 0;
    }
}
SingleViewComponent.ɵfac = function SingleViewComponent_Factory(t) { return new (t || SingleViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_home_service__WEBPACK_IMPORTED_MODULE_1__["UserHomeService"])); };
SingleViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleViewComponent, selectors: [["app-single-view"]], decls: 13, vars: 2, consts: [[2, "padding", "16px 0 0 0"], [1, "example-card"], ["type", "number", "placeholder", "Enter a number", "min", "0", "name", "num", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "click"], [4, "ngIf"], [2, "color", "#2ecc71"], ["alt", "", "srcset", "", 3, "src"], ["inset", ""]], template: function SingleViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Enter a number to view Single User with respect to ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SingleViewComponent_Template_input_ngModelChange_5_listener($event) { return ctx.num = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleViewComponent_Template_button_click_7_listener() { return ctx.value(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SingleViewComponent_div_9_Template, 11, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleViewComponent_Template_button_click_11_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.num);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.single != null && !ctx.showCard);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardFooter"]], styles: [".example-card[_ngcontent-%COMP%] {\r\n    max-width: 200px;\r\n    padding: 24px;\r\n  }\r\n  \r\n  .mat-card[_ngcontent-%COMP%] {\r\n    width: 300px; \r\n    padding: 40px;\r\n    position: absolute;\r\n    top: 50%; \r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n    background: #191919;\r\n    text-align: center;\r\n    color: white;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1ob21lL3NpbmdsZS12aWV3L3NpbmdsZS12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC91c2VyLWhvbWUvc2luZ2xlLXZpZXcvc2luZ2xlLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogMzAwcHg7IFxyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlOyBcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTkxOTE5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-single-view',
                templateUrl: './single-view.component.html',
                styleUrls: ['./single-view.component.css']
            }]
    }], function () { return [{ type: _user_home_service__WEBPACK_IMPORTED_MODULE_1__["UserHomeService"] }]; }, null); })();


/***/ }),

/***/ "kSxp":
/*!***************************************************************************************************************!*\
  !*** ./src/app/UserLandingPage/user-landing-component/login-page-component/login-page-component.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: LoginPageComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponentComponent", function() { return LoginPageComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-page.service */ "8AA/");





class LoginPageComponentComponent {
    constructor(fb, router, loginPageService) {
        this.fb = fb;
        this.router = router;
        this.loginPageService = loginPageService;
        this.loginRegisterRequest = {
            "email": "",
            "password": ""
        };
        this.tryLogin = false;
        this.errorMessage = { "error": "" };
        this.successMessage = "";
        this.email = "";
        this.password = "";
    }
    ngOnInit() {
    }
    login() {
        this.loginRegisterRequest = {
            "email": this.email,
            "password": this.password
        };
        this.loginPageService.login(this.loginRegisterRequest).subscribe(res => {
            if (res != null) {
                this.loginResponse = res;
                sessionStorage.setItem("user", JSON.stringify(this.loginRegisterRequest));
                this.tryLogin = false;
                alert("Logged in Successfully with token " + this.loginResponse.token);
                this.router.navigate[('../home/login')];
            }
        }, error => {
            this.errorMessage = error;
            alert(error.error.error);
        });
    }
}
LoginPageComponentComponent.ɵfac = function LoginPageComponentComponent_Factory(t) { return new (t || LoginPageComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_page_service__WEBPACK_IMPORTED_MODULE_3__["LoginPageService"])); };
LoginPageComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponentComponent, selectors: [["app-login-page-component"]], decls: 10, vars: 2, consts: [["action", "Prac.html", "method", "POST", 1, "box"], ["type", "text", "name", "Username", "placeholder", "Username", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "Password", "placeholder", "Password", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Login", "name", "", 3, "click"], [1, "text-info"], ["routerLink", "../register"]], template: function LoginPageComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponentComponent_Template_input_ngModelChange_3_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponentComponent_Template_input_ngModelChange_4_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponentComponent_Template_input_click_5_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Are you a new user? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: sans-serif;\r\n    background: #3B3B98;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]{\r\n    width: 300px; \r\n    padding: 40px;\r\n    position: absolute;\r\n    top: 50%; \r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n    background: #191919;\r\n    text-align: center;\r\n    \r\n}\r\n\r\n\r\n\r\n.box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    color: white;\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   input[type= \"text\"][_ngcontent-%COMP%], .box[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%]{\r\n    border: 0;\r\n    background: none;\r\n    display: block;\r\n    margin: 20px auto;\r\n    text-align: center;\r\n    border: 2px solid #3498db;\r\n    padding: 14px 10px;\r\n    width: 200px;\r\n    outline: none;\r\n    color: white;\r\n    border-radius: 24px;\r\n    transition: 0.25s;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   input[type= \"text\"][_ngcontent-%COMP%]:focus, .box[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%]:focus{\r\n    width: 280px;\r\n    border-color: #2ecc71;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   input[type =\"submit\"][_ngcontent-%COMP%]{\r\n    border: 0;\r\n    background: none;\r\n    display: block;\r\n    margin: 20px auto;\r\n    text-align: center;\r\n    border: 2px solid #2ecc71;\r\n    padding: 14px 40px;\r\n    width: 200px;\r\n    outline: none;\r\n    color: white;\r\n    border-radius: 24px;\r\n    transition: 0.25s;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   input[type =\"submit\"][_ngcontent-%COMP%]:hover{\r\nbackground: #2ecc71;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVXNlckxhbmRpbmdQYWdlL3VzZXItbGFuZGluZy1jb21wb25lbnQvbG9naW4tcGFnZS1jb21wb25lbnQvbG9naW4tcGFnZS1jb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixrQkFBa0I7O0FBRXRCOztBQUVBLGdCQUFnQjs7QUFDaEI7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFHQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvVXNlckxhbmRpbmdQYWdlL3VzZXItbGFuZGluZy1jb21wb25lbnQvbG9naW4tcGFnZS1jb21wb25lbnQvbG9naW4tcGFnZS1jb21wb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM0IzQjk4O1xyXG59XHJcblxyXG4uYm94e1xyXG4gICAgd2lkdGg6IDMwMHB4OyBcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTsgXHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgYmFja2dyb3VuZDogIzE5MTkxOTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG4vKmxvZ2luIGhlYWRpbmcqL1xyXG4uYm94IGgxe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5ib3ggaW5wdXRbdHlwZT0gXCJ0ZXh0XCJdLCAuYm94IGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXXtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzM0OThkYjtcclxuICAgIHBhZGRpbmc6IDE0cHggMTBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XHJcbn1cclxuXHJcbi5ib3ggaW5wdXRbdHlwZT0gXCJ0ZXh0XCJdOmZvY3VzLCAuYm94IGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1c3tcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGJvcmRlci1jb2xvcjogIzJlY2M3MTtcclxufVxyXG5cclxuXHJcbi5ib3ggaW5wdXRbdHlwZSA9XCJzdWJtaXRcIl17XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyZWNjNzE7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDQwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xyXG59XHJcblxyXG4uYm94IGlucHV0W3R5cGUgPVwic3VibWl0XCJdOmhvdmVye1xyXG5iYWNrZ3JvdW5kOiAjMmVjYzcxO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page-component',
                templateUrl: './login-page-component.component.html',
                styleUrls: ['./login-page-component.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _login_page_service__WEBPACK_IMPORTED_MODULE_3__["LoginPageService"] }]; }, null); })();


/***/ }),

/***/ "pSOI":
/*!***************************************************************************************!*\
  !*** ./src/app/UserLandingPage/user-landing-component/register/register.component.ts ***!
  \***************************************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.service */ "w4Wi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class RegisterComponent {
    constructor(registerService, router) {
        this.registerService = registerService;
        this.router = router;
        this.loginRegisterRequest = {
            "email": "",
            "password": ""
        };
        this.email = "";
        this.password = "";
    }
    ngOnInit() {
    }
    register() {
        this.loginRegisterRequest = {
            "email": this.email,
            "password": this.password
        };
        this.registerService.register(this.loginRegisterRequest).subscribe(res => {
            console.log("res", res);
            if (res != null) {
                this.registerRespone = res;
                alert("Logged in Successfully with token " + this.registerRespone.token + " with id " + this.registerRespone.id);
                this.router.navigate[('/webapp/login')];
            }
        }, error => {
            alert(error.error.error);
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 6, vars: 2, consts: [["action", "Prac.html", "method", "POST", 1, "box"], ["type", "text", "name", "Username", "placeholder", "Username", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "Password", "placeholder", "Password", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Register", "name", "", 3, "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please Enter new Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_3_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_4_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_input_click_5_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["body[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: sans-serif;\r\n    background: #3B3B98;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]{\r\n    width: 300px; \r\n    padding: 40px;\r\n    position: absolute;\r\n    top: 50%; \r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n    background: #191919;\r\n    text-align: center;\r\n    \r\n}\r\n\r\n\r\n\r\n.box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    color: white;\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   input[type= \"text\"][_ngcontent-%COMP%], .box[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%]{\r\n    border: 0;\r\n    background: none;\r\n    display: block;\r\n    margin: 20px auto;\r\n    text-align: center;\r\n    border: 2px solid #3498db;\r\n    padding: 14px 10px;\r\n    width: 200px;\r\n    outline: none;\r\n    color: white;\r\n    border-radius: 24px;\r\n    transition: 0.25s;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   input[type= \"text\"][_ngcontent-%COMP%]:focus, .box[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%]:focus{\r\n    width: 280px;\r\n    border-color: #2ecc71;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   input[type =\"submit\"][_ngcontent-%COMP%]{\r\n    border: 0;\r\n    background: none;\r\n    display: block;\r\n    margin: 20px auto;\r\n    text-align: center;\r\n    border: 2px solid #2ecc71;\r\n    padding: 14px 40px;\r\n    width: 200px;\r\n    outline: none;\r\n    color: white;\r\n    border-radius: 24px;\r\n    transition: 0.25s;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   input[type =\"submit\"][_ngcontent-%COMP%]:hover{\r\nbackground: #2ecc71;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVXNlckxhbmRpbmdQYWdlL3VzZXItbGFuZGluZy1jb21wb25lbnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixrQkFBa0I7O0FBRXRCOztBQUVBLGdCQUFnQjs7QUFDaEI7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFHQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvVXNlckxhbmRpbmdQYWdlL3VzZXItbGFuZGluZy1jb21wb25lbnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM0IzQjk4O1xyXG59XHJcblxyXG4uYm94e1xyXG4gICAgd2lkdGg6IDMwMHB4OyBcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTsgXHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgYmFja2dyb3VuZDogIzE5MTkxOTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG4vKmxvZ2luIGhlYWRpbmcqL1xyXG4uYm94IGgxe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5ib3ggaW5wdXRbdHlwZT0gXCJ0ZXh0XCJdLCAuYm94IGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXXtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzM0OThkYjtcclxuICAgIHBhZGRpbmc6IDE0cHggMTBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XHJcbn1cclxuXHJcbi5ib3ggaW5wdXRbdHlwZT0gXCJ0ZXh0XCJdOmZvY3VzLCAuYm94IGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmb2N1c3tcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGJvcmRlci1jb2xvcjogIzJlY2M3MTtcclxufVxyXG5cclxuXHJcbi5ib3ggaW5wdXRbdHlwZSA9XCJzdWJtaXRcIl17XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyZWNjNzE7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDQwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xyXG59XHJcblxyXG4uYm94IGlucHV0W3R5cGUgPVwic3VibWl0XCJdOmhvdmVye1xyXG5iYWNrZ3JvdW5kOiAjMmVjYzcxO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "tIkO":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        let userType = sessionStorage.getItem("user");
        let toRet = false;
        if (userType != null) {
            toRet = true;
        }
        if (toRet) {
            return toRet;
        }
        else {
            this.router.navigate(["error"]);
            return toRet;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Shared_authorisation_error_authorisation_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shared/authorisation-error/authorisation-error.component */ "/EcS");





const routes = [
    { path: 'error', component: _Shared_authorisation_error_authorisation_error_component__WEBPACK_IMPORTED_MODULE_2__["AuthorisationErrorComponent"] },
    { path: '', redirectTo: '/webapp/login', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "w4Wi":
/*!*************************************************************************************!*\
  !*** ./src/app/UserLandingPage/user-landing-component/register/register.service.ts ***!
  \*************************************************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







class RegisterService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
    }
    register(loginRegisterRequest) {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].postRegister;
        return this.http.post(url, loginRegisterRequest, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            return res;
        }));
    }
}
RegisterService.ɵfac = function RegisterService_Factory(t) { return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
RegisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RegisterService, factory: RegisterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map