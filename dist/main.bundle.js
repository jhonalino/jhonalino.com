webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <section class=\"hero is-fullheight\">\n    <div class=\"hero-head\">\n      <nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\n        <div class=\"navbar-brand\">\n          <a class=\"navbar-item is-brand\" href=\"\">\n            <span id=\"j\">J</span>\n            <span id=\"a\">A</span>\n          </a>\n        </div>\n        <div class=\"navbar-menu\">\n          <!-- navbar start, navbar end -->\n          <div class=\"navbar-start\">\n            <!-- navbar items -->\n          </div>\n\n          <div class=\"navbar-end\">\n            <!-- navbar items -->\n            <a href=\"mailto:hello@jhonalino.com\" title=\"say hello\" class=\"navbar-item\">\n              hello@jhonalino.com\n            </a>\n          </div>\n        </div>\n      </nav>\n    </div>\n    <div class=\"hero-body\">\n      <div class=\"container\">\n        <div class=\"columns\">\n          <div class=\"column col1\">\n            <figure class=\"image\">\n              <img src=\"assets/jhon2.jpg\" (click)=\"triggered()\" (mouseleave)=\"untrigger()\">\n            </figure>\n          </div>\n          <div class=\"column\">\n            <p class=\"title\">\n              <span class=\"spring\">H</span>\n              <span class=\"spring\">i</span>\n              <span class=\"spring\">,</span>\n              <br>\n              <span class=\"spring\">I</span>\n              <span class=\"spring\">'</span>\n              <span class=\"spring\">m</span>\n              <span class=\"space\"></span>\n              <span class=\"spring\">J</span>\n              <span class=\"spring\">h</span>\n              <span class=\"spring\">o</span>\n              <span class=\"spring\">n</span>\n              <span class=\"spring\">,</span>\n              <br>\n              <span class=\"spring\">F</span>\n              <span class=\"spring\">r</span>\n              <span class=\"spring\">o</span>\n              <span class=\"spring\">n</span>\n              <span class=\"spring\">t</span>\n              <span class=\"spring\">e</span>\n              <span class=\"spring\">n</span>\n              <span class=\"spring\">d</span>\n              <span class=\"space\"></span>\n              <span class=\"spring\">g</span>\n              <span class=\"spring\">u</span>\n              <span class=\"spring\">y</span>\n              <span class=\"spring\">.</span>\n\n              <!-- <span class=\"spring\">g</span>\n              <span class=\"spring\">e/span>\n              <span class=\"spring\">v</span>\n              <span class=\"spring\">e</span>\n              <span class=\"spring\">l</span>\n              <span class=\"spring\">o</span>\n              <span class=\"spring\">p</span>\n              <span class=\"spring\">e</span>\n              <span class=\"spring\">r</span>\n              <span class=\"spring\">.</span> -->\n              <br>\n              <span id=\"awesome\" class=\"is-white\">You're awesome!</span>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section is-large\">\n    <div class=\"\">\n      <h1 class=\"title\">Featured work experience</h1>\n      <div class=\"columns is-multiline\">\n        <div class=\"column {{a.colSpan}}\" *ngFor=\"let a of arr\">\n          <a href=\"{{a.url}}\" target=\"_blank\">\n            <div class=\"card project-card\">\n              <div class=\"card-image\">\n                <figure class=\"image is-square\">\n                  <img src=\"{{a.imgUrl}}\" alt=\"Placeholder image\">\n                </figure>\n                <div class=\"overlay\"></div>\n              </div>\n              <div class=\"card-content\">\n                <div class=\"media\">\n                  <div class=\"media-content\">\n                    <p class=\"title is-4\">{{a.title}}</p>\n                    <p class=\"subtitle is-6\">{{a.subtitle}}</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </a>\n        </div>\n      </div>\n    </div>\n  </section>\n\n</div>\n<footer>\n  <div class=\"row1\">\n    <div class=\"social-media\">\n      <div class=\"link-list\">\n        <a target=\"_blank\" href=\"https://www.instagram.com/jhon.alino/\">\n          <i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\n        </a>\n        <a target=\"_blank\" href=\"https://www.linkedin.com/in/jhonalino/\">\n          <i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i>\n        </a>\n        <a target=\"_blank\" href=\"https://github.com/jhonalino\">\n          <i class=\"fa fa-github\" aria-hidden=\"true\"></i>\n        </a>\n        <a target=\"_blank\" href=\"mailto:hello@jhonalino.com\" title=\"say hello\">\n          hello@jhonalino.com\n        </a>\n      </div>\n    </div>\n    <div class=\"credits\">\n      <span>Brewed with ❤️ </span>\n      <span style=\"margin-left: 0.3em\"> and </span>\n      <a target=\"_blank\" href=\"https://bulma.io\">bulma</a>,\n      <a target=\"_blank\" href=\"https://marcbruederlin.github.io/particles.js/\">particle.js </a>,\n      <a target=\"_blank\" href=\"https://daneden.github.io/animate.css/\">animate.css</a>,\n      <a target=\"_blank\" href=\"https://angular.io\">angular</a>,\n      <a target=\"_blank\" href=\"http://fontawesome.io/\">fontawesome</a>\n      <!-- <a target=\"_blank\" href=\"http://fontawesome.io/\">fontawesome</a>, thumbs up icon\n      <br> made by\n      <a target=\"_blank\" href=\"https://www.flaticon.com/authors/gregor-cresnar\" title=\"Gregor Cresnar\">Gregor Cresnar</a> from\n      <a target=\"_blank\" href=\"https://www.flaticon.com/\" title=\"Flaticon\">www.flaticon.com</a> is licensed by\n      <a target=\"_blank\" href=\"http://creativecommons.org/licenses/by/3.0/\" title=\"Creative Commons BY 3.0\" target=\"_blank\">CC 3.0 BY</a> -->\n    </div>\n  </div>\n  <div class=\"row2\">\n    <p>© 2018 Jhon Alino </p>\n  </div>\n</footer>\n\n<app-background [color]=\"backgroundColor\"></app-background>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  margin-top: 2em; }\n  .navbar .navbar-item {\n    margin: auto;\n    font-weight: 300;\n    color: #FF6347;\n    transition: -webkit-transform .4s;\n    transition: transform .4s;\n    transition: transform .4s, -webkit-transform .4s; }\n    .navbar .navbar-item:hover {\n      transition: -webkit-transform .4s;\n      transition: transform .4s;\n      transition: transform .4s, -webkit-transform .4s;\n      -webkit-transform: scale(1.1);\n              transform: scale(1.1);\n      color: black;\n      background-color: transparent; }\n  .navbar .is-brand {\n    font-size: 4em; }\n  .navbar #j {\n    color: #FF6347;\n    margin-right: -.2em; }\n  .navbar #a {\n    color: #BCF248;\n    margin-top: .5em; }\n\n.hero-body .image img {\n  background: transparent;\n  border-radius: 100%;\n  width: 256px;\n  height: 256px;\n  border: 5px solid #FF6347;\n  transition: border-color .3s, -webkit-transform .3s;\n  transition: border-color .3s, transform .3s;\n  transition: border-color .3s, transform .3s, -webkit-transform .3s;\n  outline: 1px solid transparent;\n  box-shadow: 0 0.2em 0.2em 0.1em rgba(0, 0, 0, 0.5); }\n  .hero-body .image img:hover {\n    transition: border-color .3s, -webkit-transform .3s;\n    transition: border-color .3s, transform .3s;\n    transition: border-color .3s, transform .3s, -webkit-transform .3s;\n    border-color: #BCF248;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n    cursor: pointer; }\n\n.hero-body .title {\n  margin-top: 0.5em;\n  font-size: 4em;\n  cursor: default; }\n  .hero-body .title span {\n    display: inline-block; }\n  .hero-body .title .space {\n    margin-left: 0.1em; }\n  .hero-body .title .spring {\n    margin: -7px;\n    transition: color .5s; }\n    .hero-body .title .spring:hover {\n      transition: color .1s;\n      color: #FF6347; }\n\n.hero-body .is-secondary {\n  transition: color 1s;\n  color: #BCF248; }\n\n.hero-body .is-white {\n  color: white; }\n\n.hero-body .col1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.card.project-card {\n  position: relative; }\n  .card.project-card .card-image {\n    position: relative; }\n    .card.project-card .card-image .overlay {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      background-color: rgba(0, 0, 0, 0.363); }\n  .card.project-card .card-content {\n    background-color: rgba(0, 0, 0, 0.719);\n    width: 100%;\n    position: absolute;\n    bottom: 0; }\n    .card.project-card .card-content .media-content .title, .card.project-card .card-content .subtitle {\n      color: white !important; }\n\nfooter .row1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n  footer .row1 .social-media .link-list a {\n    font-size: 2em;\n    color: #FF6347;\n    font-weight: 300;\n    margin: auto .3em auto .3em; }\n  footer .row1 .credits {\n    font-size: .8em;\n    color: black;\n    text-align: right; }\n    footer .row1 .credits a {\n      color: #FF6347; }\n\nfooter .row2 {\n  text-align: center;\n  font-weight: 300; }\n  footer .row2 p {\n    margin: 1em;\n    color: black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.arr = [
            {
                title: "Neoboardapp",
                subtitle: "Front end developer volunteer at neoboard.",
                imgUrl: "../assets/neoboard-screengrab.png",
                colSpan: 'is-one-third',
                url: 'https://neoboardapp.com'
            },
            {
                title: "Barcodexchange",
                subtitle: "Front end deveveloper at barcodexchange mobile solutions.",
                imgUrl: "../assets/barcodexchange-screengrab.png",
                colSpan: 'is-one-third',
                url: 'https://barcodexchange.com'
            },
            {
                title: "Yourqrcafe",
                subtitle: "Generate unlimited static QR code for FREE",
                imgUrl: "../assets/yourqrcafe.png",
                colSpan: 'is-one-third',
                url: 'https://yourqrcafe.com'
            }
        ];
        this.backgroundColor = '#fff'; //white
    }
    AppComponent.prototype.ngOnInit = function () {
        this.awesome = document.getElementById('awesome');
        console.log(this.awesome);
        this.springEls = document.querySelectorAll('.spring');
        this.springEls.forEach(function (springEl) {
            var animation = 'rubberBand';
            springEl.addEventListener('mouseover', function () {
                springEl.classList.add('animated', animation);
            });
            springEl.addEventListener('animationend', function () {
                springEl.classList.remove('animated', animation);
            });
        });
    };
    AppComponent.prototype.triggered = function () {
        this.backgroundColor = '#000';
        this.springEls.forEach(function (springEl) {
            springEl.classList.add('is-secondary');
        });
        this.awesome.classList.add('animated', 'tada');
    };
    AppComponent.prototype.untrigger = function () {
        this.backgroundColor = '#fff';
        this.awesome.classList.remove('animated', 'tada');
        this.springEls.forEach(function (springEl) {
            springEl.classList.remove('is-secondary');
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__background_background_component__ = __webpack_require__("../../../../../src/app/background/background.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__background_background_component__["a" /* BackgroundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/background/background.component.html":
/***/ (function(module, exports) {

module.exports = "<canvas class=\"background\" [style.background]=\"color\">\n</canvas> "

/***/ }),

/***/ "../../../../../src/app/background/background.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background {\n  position: absolute;\n  display: block;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: background-color 1s; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/background/background.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_particlesjs__ = __webpack_require__("../../../../particlesjs/dist/particles.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_particlesjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_particlesjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackgroundComponent = (function () {
    function BackgroundComponent() {
    }
    BackgroundComponent.prototype.ngAfterViewInit = function () {
        this.initParticles();
    };
    BackgroundComponent.prototype.initParticles = function (speed) {
        if (speed === void 0) { speed = 0.5; }
        console.log('speed', speed);
        __WEBPACK_IMPORTED_MODULE_1_particlesjs__["init"]({
            selector: '.background',
            color: '#ff6347',
            maxParticles: 200,
            sizeVariations: 3,
            connectParticles: false,
            speed: speed,
            responsive: [
                {
                    breakpoint: 768,
                    options: {
                        maxParticles: 40,
                    }
                }, {
                    breakpoint: 425,
                    options: {
                        maxParticles: 0,
                    }
                }, {
                    breakpoint: 320,
                    options: {
                        maxParticles: 0
                    }
                }
            ]
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], BackgroundComponent.prototype, "color", void 0);
    BackgroundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-background',
            template: __webpack_require__("../../../../../src/app/background/background.component.html"),
            styles: [__webpack_require__("../../../../../src/app/background/background.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BackgroundComponent);
    return BackgroundComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map