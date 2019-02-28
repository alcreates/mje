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

/***/ "../../../../../src/app/aboutus/aboutus.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content_title{\n   \n    font-family: Avenir;\n    color: #336699;\n}\n.content_subTitle{\n    font-family: Avenir;\n    margin-top:30px;\n    margin-bottom:30px;\n}\n.section_container {\n    margin-top:30px;\n}\n.list_container {\n    max-width:800px; \n    border-style: 0.5px solid; \n    border-color: gray; \n    background: rgba(30,100,181,.21);\n    margin-top:30px;\n    margin-bottom:30px;\n    padding:20px;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/aboutus/aboutus.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"container\" >\n      <div class=\"section_container\">\n        <h2 class=\"content_title\">About Us</h2>\n        <h4 class=\"content_subTitle\">MJE Advisors is a premier executive search firm that strives to consistently deliver our clients exceptional professionals to meet the ever-changing hiring trends that shape our landscape.</h4>\n        <p>We are a specialized firm of 5 professionals with affiliate offices nationwide focusing on the investment management industry.  Our search engagements expand throughout the alternative and traditional space with a core expertise among the following practice areas:\n        </p>\n        <div class=\"container list_container\" >\n              <div class=\"row no-gutters\">\n                  <div class=\"col-6\">\n                      <ul>\n                        <li>Sales & Marketing</li>\n                        <li>Client Service & Relationship Management</li>\n                        <li>COO, CFO, Controller</li>\n                        <li>Fund Accounting & Middle Office</li>\n                      </ul>\n\n                  </div>\n                  <div class=\"col-6\">\n                      <ul>\n                          <li>Risk Management & Compliance</li>\n                          <li>Portfolio Managers & Analyst</li>\n                          <li>Investment Audit, Tax & Advisory</li>\n                          \n                        </ul>\n                  </div>\n              </div>\n        </div>\n        <p>MJE Advisors was founded in 1993 by Barry Emen, an executive search veteran with over 25 years experience in the industry. His vision of creating a world class executive search business through entrepreneurial ideas and an uncompromising commitment to our clients has been fully realized.  Our team has successfully placed more than 1,000 executives within the investment management industry and has developed an extensive network of more than 12,000 relationships worldwide.</p>\n      \n        <p style=\"margin-top:30px; margin-bottom: 30px;\">MJE’s senior members have more than 40 years of combined industry and search related experience.  We successfully manage a wide variety of searches by leveraging our intellectual knowledge base, proprietary database, deep industry contacts and firm-wide collaboration.</p>\n      </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/aboutus/aboutus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-aboutus',
            template: __webpack_require__("../../../../../src/app/aboutus/aboutus.component.html"),
            styles: [__webpack_require__("../../../../../src/app/aboutus/aboutus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<app-body></app-body>\n<app-footer></app-footer>"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__our_reach_our_reach_component__ = __webpack_require__("../../../../../src/app/our-reach/our-reach.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__body_body_component__ = __webpack_require__("../../../../../src/app/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__aboutus_aboutus_component__ = __webpack_require__("../../../../../src/app/aboutus/aboutus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__why_mje_why_mje_component__ = __webpack_require__("../../../../../src/app/why-mje/why-mje.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__our_business_our_business_component__ = __webpack_require__("../../../../../src/app/our-business/our-business.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__trackscroll_directive__ = __webpack_require__("../../../../../src/app/trackscroll.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__team_team_component__ = __webpack_require__("../../../../../src/app/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__bio_bio_component__ = __webpack_require__("../../../../../src/app/bio/bio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__contactus_contactus_component__ = __webpack_require__("../../../../../src/app/contactus/contactus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__direct_contact_direct_contact_component__ = __webpack_require__("../../../../../src/app/direct-contact/direct-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__what_we_do_what_we_do_component__ = __webpack_require__("../../../../../src/app/what-we-do/what-we-do.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__our_capabilities_our_capabilities_component__ = __webpack_require__("../../../../../src/app/our-capabilities/our-capabilities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__core_expertise_core_expertise_component__ = __webpack_require__("../../../../../src/app/core-expertise/core-expertise.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__our_approach_our_approach_component__ = __webpack_require__("../../../../../src/app/our-approach/our-approach.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__body_body_component__["a" /* BodyComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__aboutus_aboutus_component__["a" /* AboutusComponent */],
                __WEBPACK_IMPORTED_MODULE_9__why_mje_why_mje_component__["a" /* WhyMjeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__our_business_our_business_component__["a" /* OurBusinessComponent */],
                __WEBPACK_IMPORTED_MODULE_11__trackscroll_directive__["a" /* TrackscrollDirective */],
                __WEBPACK_IMPORTED_MODULE_1__our_reach_our_reach_component__["a" /* OurReachComponent */],
                __WEBPACK_IMPORTED_MODULE_15__team_team_component__["a" /* TeamComponent */],
                __WEBPACK_IMPORTED_MODULE_17__bio_bio_component__["a" /* BioComponent */],
                __WEBPACK_IMPORTED_MODULE_18__contactus_contactus_component__["a" /* ContactusComponent */],
                __WEBPACK_IMPORTED_MODULE_19__direct_contact_direct_contact_component__["a" /* DirectContactComponent */],
                __WEBPACK_IMPORTED_MODULE_21__what_we_do_what_we_do_component__["a" /* WhatWeDoComponent */],
                __WEBPACK_IMPORTED_MODULE_22__our_capabilities_our_capabilities_component__["a" /* OurCapabilitiesComponent */],
                __WEBPACK_IMPORTED_MODULE_23__core_expertise_core_expertise_component__["a" /* CoreExpertiseComponent */],
                __WEBPACK_IMPORTED_MODULE_24__our_approach_our_approach_component__["a" /* OurApproachComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_17__bio_bio_component__["a" /* BioComponent */],
                __WEBPACK_IMPORTED_MODULE_19__direct_contact_direct_contact_component__["a" /* DirectContactComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_20__amcharts_amcharts3_angular__["a" /* AmChartsModule */],
                __WEBPACK_IMPORTED_MODULE_14__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyBiQOkNFVlI6IqR5vU5bXvFQWbdwosz75U'
                })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/bio/bio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-image {\n    height: 100px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 50% 10%;\n    width:100px;\n    border-radius: 50%;\n   \n    border: 1px solid #fff;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    margin-top:30px;\n}\np {\n    margin-bottom: 0px;\n}\nh2 {\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    font-family: Avenir;\n    margin-top:20px;\n}\n*:focus {\n    outline: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bio/bio.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"scrollId\" class=\"container\">\n    <a href=\"\"></a>\n<div class=\"row\">\n    <div class=\"col\" style=\"display:flex; flex-direction:column; justify-content:center;\">\n        <div class=\"profile-image\"\n        [style.background-image]=\"'url(' + data.image + ')'\">\n        </div>\n    \n        <h2>\n            {{data.name}}\n        </h2>\n        <p style=\"text-align:center;\">{{data.position}}</p>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col\">\n            <p style=\"text-align: justify; margin-top:30px;\">\n                    {{data.bio}}\n                  </p>\n                  \n                  <p style=\"margin-top: 40px;\">{{ data.phone}}</p>\n                  <p>Ext. - {{ data.ext }}</p>\n                  <p>{{ data.email }}</p>\n                  <a href=\"{{data.linkedIn}}\"> <img src=\"assets/linkedIn.png\" alt=\"\"></a>\n\n    </div>\n</div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/bio/bio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var BioComponent = /** @class */ (function () {
    function BioComponent(data) {
        this.data = data;
    }
    BioComponent.prototype.ngOnInit = function () {
        var element = document.getElementById('scrollId');
        console.log(element);
        element.scrollIntoView();
    };
    BioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-bio',
            template: __webpack_require__("../../../../../src/app/bio/bio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bio/bio.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], BioComponent);
    return BioComponent;
}());



/***/ }),

/***/ "../../../../../src/app/body/body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".parallax { \n    /* The image used */\n    background-image: url(\"/assets/mjeimage16.jpg\");\n\n    /* Set a specific height */\n    height: 100%; \n\n    /* Create the parallax scrolling effect */\n    background-attachment: fixed;\n    background-position: 50% 100%;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.parallax_two { \n    /* The image used */\n    background-image: url(\"/assets/mjeimage8.jpg\");\n\n    /* Set a specific height */\n    height: 200px; \n\n    /* Create the parallax scrolling effect */\n    background-attachment: fixed;\n    background-position: 50% 100%;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.parallax_three { \n    /* The image used */\n    background-image: url(\"/assets/mjeimage5.jpg\");\n\n    /* Set a specific height */\n    height: 200px; \n\n    /* Create the parallax scrolling effect */\n    background-attachment: fixed;\n    background-position: 50% 100%;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.home_header {\n    padding: 11.3875rem calc(50vw - 473px) 11.3875rem;\n    text-align: center;\n    position: relative;\n    top: 150px;\n    /* background: rgba(0,0,0,.3); */\n}\n\n.home_header_title {\n    color: #fff;\n    text-shadow: 0.1875rem 0.1875rem 0.1875rem rgba(0,0,0,.5);\n    font-size: 3.25rem;\n    line-height: 4.4375rem;\n    margin-bottom: .375rem;\n    font-weight: 700;\n    font-family: Avenir;\n}\n\n.home_header_subtitle {\n    color: #fff;\n    text-shadow: 0.1875rem 0.1875rem 0.1875rem rgba(0,0,0,.5);\n    font-size: 1.25rem;\n    line-height: 0.4375rem;\n    margin-bottom: .375rem;\n    font-weight: 700;\n    font-family: Avenir;\n}\n.downArrow {\n    position:relative; \n    top:275px; color:white; \n    font-size:100px;\n}\n\n@media screen and (max-width: 600px) {\n    .home_header_subtitle {\n        font-size: 15px;\n        line-height: 2.4375rem;\n    }\n    .home_header {\n        top: 0px;\n    }\n    .home_header_title {\n        color: #fff;\n        text-shadow: 0.1875rem 0.1875rem 0.1875rem rgba(0,0,0,.5);\n        font-size: 3rem;\n        line-height: 3.4375rem;\n        margin-bottom: .375rem;\n        font-weight: 700;\n        font-family: Avenir;\n    }\n    .downArrow {\n        position:relative; \n        top:248px; \n        color:white; \n        font-size:100px;\n    }\n    .parallax { \n        /* The image used */\n        background-image: url(\"/assets/mjeimage16.jpg\");\n\n    \n        /* Set a specific height */\n        height: 100%;  \n    \n        /* Create the parallax scrolling effect */\n        background-attachment:scroll;\n        /* background-attachment: fixed; */\n        background-position: center bottom;\n        background-repeat: no-repeat;\n        background-size: cover;\n       \n    }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/body.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters\" style=\"height:100vh\">\n    <div class=\"col-12\">\n        <div class=\"parallax\" >\n            <div class=\"home_header\">\n                <!-- <h1 class=\"home_header_title\">Unrivaled Industry Insight.</h1> -->\n                <h1 class=\"home_header_title\">Your Dedicated Search Partner.</h1>\n                <!-- <h2 class=\"home_header_subtitle\">Investment Industry Executive Search</h2> -->\n                <h2 class=\"home_header_subtitle\">Asset Management Executive Search Solutions.</h2>\n\n                <div> <i  class=\"fa fa-angle-down downArrow\" aria-hidden=\"true\"></i>\n                </div> \n               \n            </div>\n        </div>\n    </div>\n    \n</div>\n<a name=\"whatWeDo\"></a>\n<div style=\"height:800px;\" class=\"row no-gutters\">\n       \n        <div class=\"col-12\">\n            <app-what-we-do></app-what-we-do>\n        </div>\n</div>\n\n<div class=\"row no-gutters\">\n        <a name=\"ourCapabilities\"></a>  \n        <div class=\"col-12\">\n            <app-our-capabilities></app-our-capabilities>\n        </div>\n</div>\n\n\n    \n\n<div class=\"row no-gutters\"  style=\"margin-top: 40px;\">\n        <a name=\"coreExpertise\"></a>\n    <div class=\"col-12\">\n        <app-core-expertise></app-core-expertise>\n    </div>\n</div>\n\n<div class=\"row no-gutters\" style=\"margin-top: 60px;\">\n        <div class=\"col-12\">\n                <a name=\"placements\"></a>\n            <app-our-reach></app-our-reach>\n        </div>\n</div>\n<div class=\"row no-gutters\" style=\"background-color: #808080;\" >\n        <div class=\"col-12\">\n           <a name=\"approach\"></a>    \n            <app-our-approach></app-our-approach>\n            \n        </div>\n</div>\n\n\n<div  class=\"row no-gutters\" >\n        <div class=\"col-12\">\n           <a name=\"Team\"></a>    \n            <app-team></app-team>\n            \n        </div>\n</div>\n\n\n\n\n<div class=\"row no-gutters\" >\n        \n        <div class=\"col-12\">\n                <a name=\"contact\"></a>\n            <app-contactus></app-contactus>\n          \n        </div>\n</div>\n   \n"

/***/ }),

/***/ "../../../../../src/app/body/body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BodyComponent = /** @class */ (function () {
    function BodyComponent() {
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-body',
            template: __webpack_require__("../../../../../src/app/body/body.component.html"),
            styles: [__webpack_require__("../../../../../src/app/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contactus/contactus.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n    height: 400px;\n   \n}\n.form-control {\n    margin-bottom: 20px;\n}\n.contact_me{\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n}\n.contact_me button{\n    cursor: pointer;\n}\n.contact_me input{\n    border-color: black;\n}\n.contact_me textarea{\n    border-color: black;\n}\n#message {\n    height: 200px;\n}\n#send_email {\n    margin-top: 30px;\n    border-color:black;\n    color:black;\n    background-color:white;\n}\n#send_email:hover {\n    background-color: gray;\n    color:white;\n}\n.contact_us{\n    height: 490px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    color:white;\n    font-family: Avenir;\n   \n    background-image: url('/assets/mjeimage19.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 50% 26%;\n}\n.contact_us div {\n    margin-top: 35px;\n    \n}\n.contact_us div h2 {\n   font-size: 4rem;\n    \n}\n.contact_button {\n    border: solid 1px;\n    border-color:black;\n    width:200px;\n    text-align: center;\n    padding: 20px;\n    cursor: pointer;\n    margin-top:40px;\n\n}\n\n@media only screen and (max-width: 500px) {\n    #send_email {\n       margin-bottom: 20px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contactus/contactus.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row no-gutters\">\n   \n  <div class=\"col\" >\n      <div class=\"contact_us\">\n\n          <div><h2 style=\"padding-top: 50px;\">CONTACT</h2></div>\n         \n      </div>\n  </div>\n</div>\n\n\n\n<div class=\"container\" style=\"margin-top: 100px; margin-bottom: 50px; \">\n    <a name=\"linkToEmail\"> <h2 style=\"font-family:Avenir;\"></h2> </a> \n     <div class=\"row no-gutters\" style=\"margin-top:30px;\">\n       <div class=\"col-sm-12 col-md-4 col-lg-4\">\n            <h2>New Jersey</h2>\n            <p>17 Hanover Rd. Suite 240<br>\n              Florham Park, NJ 07932<br>\n              973-765-9400<br>\n              Fax: 973-765-0881\n            </p>\n\n                 <!-- <div (click)=\"openDialog()\" class=\"contact_button\">CONTACT US</div> -->\n       </div>\n       <div class=\"col-sm-12 col-md-8 col-lg-8\">\n           <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" (mapClick)=\"onChoseLocation($event)\">\n               <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n             </agm-map>\n   \n       </div>\n     </div>\n   </div>"

/***/ }),

/***/ "../../../../../src/app/contactus/contactus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__direct_contact_direct_contact_component__ = __webpack_require__("../../../../../src/app/direct-contact/direct-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(http, dialog) {
        this.http = http;
        this.dialog = dialog;
        this.latitude = 40.787878;
        this.longitude = -74.3882072;
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent.prototype.openDialog = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__direct_contact_direct_contact_component__["a" /* DirectContactComponent */], { height: "400px", width: "600px" });
    };
    ContactusComponent.prototype.onChoseLocation = function (e) {
        console.log(e);
        this.latitude = e.coords.lat;
        this.longitude = e.coords.lng;
    };
    ContactusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-contactus',
            template: __webpack_require__("../../../../../src/app/contactus/contactus.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contactus/contactus.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */]])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core-expertise/core-expertise.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".coreTop{\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    background-color: #578bb5;\n    color:white;\n    height: 200px;\n    margin:5px;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-direction: column;\n        flex-direction: column;\n}\n.coreMiddle {\n\n    display: -ms-flexbox;\n\n    display: flex;\n    width: 100%;\n    background-color: #3e617d;\n    color:white;\n    height: 200px;\n    margin:5px;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-direction: column;\n        flex-direction: column;\n\n}\n\n.coreLast {\n\n    display: -ms-flexbox;\n\n    display: flex;\n    width: 100%;\n    background-color: #2b4357;\n    color:white;\n    height: 200px;\n    margin:5px;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-direction: column;\n        flex-direction: column;\n\n}\n.coreBox {\n    display:-ms-flexbox;\n    display:flex;\n}\n.core_title {\n\n    font-size: 20px;\n\n}\n\n@media screen and (max-width: 600px) { \n    .coreBox {\n        -ms-flex-direction: column;\n            flex-direction: column;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core-expertise/core-expertise.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 style=\"font-family:Avenir; margin-bottom: 40px; padding-top:100px;\">Expertise</h1>\n    <div class=\"coreBox\">\n        <div class=\"coreTop\" (click)=\"core(0)\">\n           <p class=\"core_title\">CFO</p>\n           <p style=\"margin-bottom:0px;\" >Fund Treasurer</p>\n           <p style=\"margin-bottom:0px;\">Senior Controller</p>\n           <p style=\"margin-bottom:0px;\" >Finacial Reporting</p>\n          \n        </div>\n        <div class=\"coreTop\" (click)=\"core(2)\">\n                <p class=\"core_title\">CCO</p>\n                <p style=\"margin-bottom:0px;\">General Counsel </p>\n                <p style=\"margin-bottom:0px;\">Compliance</p>\n                <p style=\"margin-bottom:0px;\">Legal</p>\n        </div>\n        <div class=\"coreTop\" (click)=\"core(1)\">\n            <p class=\"core_title\">COO</p>\n            <p style=\"margin-bottom:0px;\">Head of Operations</p>\n            <p style=\"margin-bottom:0px;\">Middle Office Operations</p>\n            <p style=\"margin-bottom:0px;\">Back Office Operations</p>\n         </div>\n        \n    </div>\n\n    <div class=\"coreBox\">\n        <div class=\"coreMiddle\" (click)=\"core(3)\">\n           <p class=\"core_title\">HEAD OF TAX</p>\n           <p style=\"margin-bottom:0px;\">Tax Attorney</p>\n           <p style=\"margin-bottom:0px;\">Tax Compliance</p>\n           <p style=\"margin-bottom:0px;\">Tax Strategy</p>\n\n           <!-- <p>Tax Compliance</p> -->\n        </div>\n        <div class=\"coreMiddle\" (click)=\"core(5)\">\n                <p class=\"core_title\">AUDIT PARTNER</p>\n                <p style=\"margin-bottom:0px;\">Tax Partner</p>\n                <p style=\"margin-bottom:0px;\">Director</p>\n                <p style=\"margin-bottom:0px;\">Senior Manager</p>\n             </div>\n        <div class=\"coreMiddle\" (click)=\"core(4)\">\n            <p class=\"core_title\">HEAD OF FUND ADMINISTRATION</p>\n            <p style=\"margin-bottom:0px;\">Fund Accounting</p>\n            <p style=\"margin-bottom:0px;\">Financial Reporting</p>\n            <p style=\"margin-bottom:0px;\">Investor Services</p>\n         </div>\n         \n    </div>\n\n    <div class=\"coreBox\">\n            <div class=\"coreLast\" (click)=\"core(7)\">\n                    <p class=\"core_title\">HEAD OF SALES</p>\n                    <p style=\"margin-bottom:0px;\">Fund Administration</p>\n                    <p style=\"margin-bottom:0px;\">Institutional </p>\n                    <p >Technology</p>\n                 </div>\n        \n       \n         <div class=\"coreLast\" (click)=\"core(8)\">\n            <p class=\"core_title\">HEAD OF PERFORMANCE</p>\n            <p style=\"margin-bottom:0px;\">Performance Attribution</p>\n            <p style=\"margin-bottom:0px;\">Performance Measurement</p>\n            <p>GIPS</p>\n         </div>\n\n         <div class=\"coreLast\" (click)=\"core(6)\">\n                <p class=\"core_title\">HEAD OF PRODUCT MANAGEMENT</p>\n                <p style=\"margin-bottom:0px;\">Product Developement</p>\n                <p style=\"margin-bottom:0px;\">Product Management</p>\n                <p>Product Specialist</p>\n               \n             </div>\n    </div>\n      \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core-expertise/core-expertise.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreExpertiseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoreExpertiseComponent = /** @class */ (function () {
    function CoreExpertiseComponent() {
    }
    CoreExpertiseComponent.prototype.ngOnInit = function () {
    };
    CoreExpertiseComponent.prototype.core = function (e) {
        console.log(e);
    };
    CoreExpertiseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-core-expertise',
            template: __webpack_require__("../../../../../src/app/core-expertise/core-expertise.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core-expertise/core-expertise.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CoreExpertiseComponent);
    return CoreExpertiseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/direct-contact/direct-contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contact_me input {\n    margin-top: 20px;\n    margin-bottom:20px;\n}\n.contact_me button {\n    margin-top: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/direct-contact/direct-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contact_me\">\n    <input [(ngModel)]=\"contactInfo.email\" #email=\"ngModel\" class=\"form-control\" name=\"email\" id=\"email\" type=\"text\" placeholder=\"E-mail\" />\n    <input id=\"subject\" class=\"form-control\"   \n    [(ngModel)]=\"contactInfo.subject\"  #subject=\"ngModel\" name=\"subject\" type=\"text\" placeholder=\" Subject\" />\n    <textarea class=\"form-control\"  id=\"message\" #message=\"ngModel\" name=\"message\" [(ngModel)]=\"contactInfo.message\" cols=\"40\" rows=\"5\" placeholder=\"Message... \"></textarea>\n    <button (click)=\"submit()\"  type=\"button\" class=\"btn btn-secondary\" id=\"send_email\">Send</button>\n    \n</div>  "

/***/ }),

/***/ "../../../../../src/app/direct-contact/direct-contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DirectContactComponent = /** @class */ (function () {
    function DirectContactComponent(http) {
        this.http = http;
        this.contactInfo = {
            email: '',
            subject: '',
            message: ''
        };
    }
    DirectContactComponent.prototype.ngOnInit = function () {
    };
    DirectContactComponent.prototype.submit = function () {
        var _this = this;
        this.http.post('/contactus', this.contactInfo).subscribe(function (response) {
            _this.contactInfo = {
                email: '',
                subject: '',
                message: ''
            };
        });
    };
    DirectContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-direct-contact',
            template: __webpack_require__("../../../../../src/app/direct-contact/direct-contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/direct-contact/direct-contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DirectContactComponent);
    return DirectContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer_container {\n    background: #222;\n    color: #fff;\n    \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Footer-->\n<footer class=\"page-footer footer_container center-on-small-only\">\n    \n    <!--Footer Links-->\n    <div class=\"container\">\n        <div class=\"row no-gutters\">\n\n            <!-- First column-->\n            <!-- <div class=\"col-md-6\">\n                <h5 class=\"title\">Footer Content</h5>\n                <p>Here you can use rows and columns here to organize your footer content.</p>\n            </div> -->\n            <!--/.First column-->\n\n            <!--Second column-->\n            <!-- <div class=\"col-md-6\">\n                <h5 class=\"title\">Links</h5>\n                <ul>\n                    <li><a href=\"#\">Link 1</a></li>\n                    <li><a href=\"#\">Link 2</a></li>\n                    <li><a href=\"#\">Link 3</a></li>\n                    <li><a href=\"#\">Link 4</a></li>\n                </ul>\n            </div> -->\n            <!--/.Second column -->\n        </div>\n    </div>\n    <!--/.Footer Links-->\n\n    <!--Copyright-->\n    <div class=\"footer-copyright\">\n        <div style=\"height:100px\" class=\"container-fluid\">\n            <!-- © 2017 Copyright: <a href=\"https://www.MDBootstrap.com\"> MDBootstrap.com </a> -->\n        </div>\n    </div>\n    <!--/.Copyright-->\n</footer>\n<!--/.Footer-->"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navItemLogo {\n    color: #463e3b;\n    font-size: .95rem;\n    line-height: 1rem;\n    font-weight: 700;\n    text-transform: uppercase;\n    text-decoration: none;\n    letter-spacing: 5px;\n}\n\n.navBar {\n    background-color: #fff;\n    height: 70px;\n    border-top: 3px solid #464342;\n    border-bottom: 1px solid #464342;\n    \n}\n.hideNav{\n    display: none;\n    \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light fixed-top navBar\" [class.hideNav]=\"hideNav\" appTrackscroll (pageYPositionChange)=\"onPageYChange($event)\" @fade >\n  <div class=\"container\">\n  <a class=\"navbar-brand navItemLogo\" href=\"#\">\n      <img src=\"/assets/mjeLogo.png\" class=\"img-fluid\" alt=\"Responsive image\">\n  </a>\n  <!-- <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button> -->\n  \n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n      </li>\n    </ul>\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n          <a class=\"nav-link navItem\" href=\"#whatWeDo\">What We Do</a>\n      </li>\n      <li class=\"nav-item\">\n            <a class=\"nav-link navItem\" href=\"#ourCapabilities\">Our Capabilities</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link navItem\" href=\"#coreExpertise\">Expertise</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link navItem\" href=\"#placements\">Placements</a>\n  </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link navItem\" href=\"#approach\">Approach</a>\n  </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link navItem\" href=\"#Team\">Team</a>\n      </li>\n      <li class=\"nav-item\">\n          \n        <a class=\"nav-link navItem\" href=\"#contact\">Contact Us</a>\n      </li>\n    </ul>\n   \n  </div>\n</div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
        this.hideNav = true;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.onPageYChange = function (pageY) {
        this.pageY = pageY;
        if (pageY > 100) {
            this.hideNav = false;
        }
        else {
            this.hideNav = true;
        }
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-nav-bar',
            template: __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* trigger */])('fade', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(2000)
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(2000, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/our-approach/our-approach.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n    margin: .1em 0 .25em;\n    border-top: 1px solid  whitesmoke;\n    border-bottom: 1px solid  whitesmoke;\n    padding: .5em 0;\n    font-size: 6.25em;\n    font-family: Avenir;\n    color: whitesmoke;\n}\nh2 {\n    font-size: 2.813em;\n    text-align: center;\n    font-family: 'Fjalla One',Gotham,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n    letter-spacing: 1px;\n    line-height: 1.1em;\n    color: whitesmoke;\n}\n\np {\n    font-family: Avenir;\n    color: whitesmoke;\n    font-size: 1.1em;\n    margin-bottom: 1.563em;\n    /* line-height: 1.563em; */\n   \n    \n}\n.approachBig {\n    text-align: right;\n}\n\n@media screen and (max-width: 600px) { \n    .approachBig {\n        font-size: 40px;\n        text-align: center;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/our-approach/our-approach.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 10px; margin-bottom: 70px;\">\n    <h2 style=\"text-align: center; margin-bottom: 50px; margin-top: 50px; padding-top:100px;\">Approach</h2>\n  <div class=\"row no-gutters\">\n    <div class=\"col-sm-12 col-md-6 col-lg-6\">\n      <h1 class=\"approachBig\">Smart,<br>\n        Organized<br>\n        &amp; Strategic</h1>\n    </div>\n    <div class=\"col-sm-12 col-md-6 col-lg-6\">\n      <div style=\"margin-left: 40px;\">\n        <p>\n          MJE Advisors has established longstanding relationships with many of the leading asset managers representing the investment management industry.  We work closely with our clients to develop a tailored search solution to best determine market dynamics and establish the best path forward.  Our approach is detailed, insightful and effective giving our clients a unique view across a diverse candidate pool from a variety of asset managers and locations.\n\n        </p>\n\n  \n        <p>\n            Our collaborative approach utilizes every available resource throughout our organization.  We have a deep bench of professionals focused on delivering a best in class search experience for our clients and candidates.  Our team works closely together to establish strategy, research, pipeline and execution to uncover every path forward to a successful hire. \n        </p>  \n            \n        <p>  \n            Our ability to build these long-term relationships is rooted in our consistency and longevity. The senior members of the MJE team have over 50 years of combined experience servicing the mutual fund, institutional asset management and alternative fund industries, allowing us to understand the complexities of the competitive hiring landscape. MJE offers detailed, collaborative, and definitive solutions to complicated and competitive searches, with a focus on making productive and enduring connections between the right people.\n        </p>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/our-approach/our-approach.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurApproachComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OurApproachComponent = /** @class */ (function () {
    function OurApproachComponent() {
    }
    OurApproachComponent.prototype.ngOnInit = function () {
    };
    OurApproachComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-our-approach',
            template: __webpack_require__("../../../../../src/app/our-approach/our-approach.component.html"),
            styles: [__webpack_require__("../../../../../src/app/our-approach/our-approach.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OurApproachComponent);
    return OurApproachComponent;
}());



/***/ }),

/***/ "../../../../../src/app/our-business/our-business.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content_title{\n    font-family: Avenir;\n    color: #336699;\n}\n.content_subTitle{\n    font-family: Avenir;\n    margin-top:30px;\n    margin-bottom:30px;\n}\n.section_container {\n    margin-top:30px;\n}\n.list_container {\n    max-width:800px; \n    border-style: 0.5px solid; \n    border-color: gray; \n    background: rgba(30,100,181,.21);\n    margin-top:30px;\n    margin-bottom:30px;\n    padding:20px;\n}\nli {\n    margin-bottom: 10px;\n}\nspan {\n    font-weight: bold;\n    font-style:italic;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/our-business/our-business.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"container\" >\n      <div class=\"section_container\">\n        <h2 class=\"content_title\">Our Business</h2>\n        <h4 class=\"content_subTitle\">MJE Advisors is a leading provider of executive search for the investment management industry with over 40 years of combined experience among our professional team.  We work closely with our clients to develop customized recruiting solutions and help them acquire the key human capital needed to grow their business.</h4>\n        <p>We are a privately owned firm with relationships throughout North America and the United Kingdom covering all major sub sectors of the investment management industry.  We leverage our collective expertise to identify and deliver only the highest quality professionals who help support the growth and success of our clients.\n\n        </p>\n        <p>Our Clients Include:</p>\n        <div class=\"container list_container\" >\n        \n              <div class=\"row no-gutters\">\n                  <div class=\"col-6\">\n                  <p><span>Investment Management Firms</span></p>\n                      <ul>\n                        <li>Mutual Funds</li>\n                        <li>Hedge Funds</li>\n                        <li>Funds of Funds</li>\n                        <li>Institutional Investment Managers</li>\n                      </ul>\n\n                  </div>\n                  <div class=\"col-6\">\n                    <p><span>Investment Industry Service Providers</span></p>\n                      <ul>\n                          <li>Fund Administrators</li>\n                          <li>Banks & Prime Brokers</li>\n                          <li>Accounting & Law Firms</li>\n                          <li>Technology and Other Service Providers</li>\n                          \n                        </ul>\n                  </div>\n              </div>\n        </div>\n         <p>Our Specific Areas of Expertise Include:</p>\n         <div class=\"container list_container\" >\n              <div class=\"row no-gutters\">\n                  <div class=\"col-12\">\n                    \n                      <ul>\n                        <li>Senior Operations & Administrative Executives</li>\n                        <li>Sales, Marketing and Relationship Management Executives</li>\n                        <li>Portfolio Managers</li>\n                        <li>Investment Analysts</li>\n                        <li>Risk Managers</li>\n                        <li>Legal & Compliance Professionals</li>\n                      </ul>\n                  </div>   \n              </div>\n        </div>\n        <p>Our success over the past 20 years is attributable to the high quality of our people and a unique combination of specialization and team integration. This allows us to most efficiently identify candidates who possess the right skills, experience and cultural fit to provide a positive and lasting impact on our clients’ business structure.</p>\n        <ul>\n          <li><span>Industry Relationships:</span> Through our efforts, we have established deep relationships with executive level professionals across mutual funds, hedge funds, hedge funds of funds, industry service providers, banks and other financial firms.</li>\n          <li><span>Integrated Team Approach:</span> MJE fully leverages our intellectual knowledge base through our proprietary database, deep industry contacts and firm-wide collaboration to identify and develop high quality professionals.</li>\n          <li><span>Candidate In-flows:</span> On behalf of our clients, we continually refresh our candidate pool with high quality professionals who are open to new challenges and responsibilities.</li>\n          <li><span>Evaluation:</span> Our senior recruiters have interviewed and partnered with thousands of investment industry executives and provide an informed and detailed description of their professional attributes when advising clients on selecting the right talent.</li>\n        </ul>\n\n        <p>We consider candidate growth and retention to be a key measure of our long-term success as the majority of our placed professionals assume leadership positions within the first few years of a completed assignment.  As a firm we strive to provide the highest quality of client service and through our efforts have built a favorable reputation throughout the investment management industry.</p>\n      </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/our-business/our-business.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurBusinessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OurBusinessComponent = /** @class */ (function () {
    function OurBusinessComponent() {
    }
    OurBusinessComponent.prototype.ngOnInit = function () {
    };
    OurBusinessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-our-business',
            template: __webpack_require__("../../../../../src/app/our-business/our-business.component.html"),
            styles: [__webpack_require__("../../../../../src/app/our-business/our-business.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OurBusinessComponent);
    return OurBusinessComponent;
}());



/***/ }),

/***/ "../../../../../src/app/our-capabilities/our-capabilities.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".capHeader {\n\n        font-family: Avenir;\n        color: black;\n       padding-top: 100px;\n    \n}\n\n.flip {\n        perspective: 800;\n         width: 100%;\n         height: 300px;\n          position: relative;\n          /* margin: 15px auto; */\n      }\n      .flip .card.flipped {\n        transform: rotatex(-180deg);\n        background: transparent;\n      }\n      .flip .card {\n        width: 100%;\n        height: 100%;\n        transform-style: preserve-3d;\n        transition: 0.5s;\n      }\n      .flip .card .face {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        -webkit-backface-visibility: hidden ;\n                backface-visibility: hidden ;\n        z-index: 2;\n          font-family: Georgia;\n          font-size: 3em;\n          text-align: center;\n          display:-ms-flexbox;\n          display:flex;\n          -ms-flex-pack: center;\n              justify-content: center;\n          -ms-flex-align: center;\n              align-items: center;\n          /* line-height: 200px; */\n      }\n      .flip .card .front {\n        position: absolute;\n        z-index: 1;\n          background-color:#808080;\n          font-family: Avenir;\n          cursor: pointer;\n          color: white;\n          font-size: 1.5em;\n      }\n      .flip .card .back {\n        transform: rotatex(-180deg);\n         background-color: #F5F7F9;\n         font-family: Avenir;\n          color: black;\n          cursor: pointer;\n          display:-ms-flexbox;\n          display:flex;\n          -ms-flex-pack: right;\n              justify-content: right;\n          -ms-flex-align: center;\n              align-items: center;\n          font-size: 25px;\n      }\n      \n      ul li {\n        line-height:36px;\n        text-align:left;\n\n      }\n\n      @media screen and (max-width: 600px) { \n\n        .capHeader {\n\n          font-family: Avenir;\n          color: black;\n         padding-top: 150px;\n        }\n\n      }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/our-capabilities/our-capabilities.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n \n  <h2 class=\"capHeader\" >\n    Our Capabilities\n  </h2>\n\n  <p style=\"font-family:Avenir; font-size: 1.5em; margin-top:20px; margin-bottom:3em;\">\n    MJE Advisors is a leading sourcing provider of experienced professionals for the asset management industry. Specializing in searches for Institutional Asset Managers, Mutual Funds and Alternative Asset Managers, MJE implements a customized search process to execute successful placements for its client firms nationally. Our highly experienced team has an extensive understanding of senior level positions across the industry, including Finance, Accounting & Operations, Compliance, Tax, plus Sales, Distribution & Marketing. MJE's integrated team approach provides a superior level of service to our clients and allows us to execute assignments with speed and precision. \n  </p>\n\n\n\n  <div class=\"row no-gutters\">\n    <div class=\"col-md-6 col-lg-6 col-sm-12\">\n      <div class=\"flip\"> \n            <!-- (click)=\"isFlipped=!isFlipped\" -->\n        <div class=\"card\" [ngClass]=\"{'flipped':isFlipped}\"  \n       > \n            <div class=\"face front\"> \n                Executive Retained Search\n            </div> \n            <div class=\"face back\"> \n\n                <ul style=\"margin-top: 20px;\">\n                    <li>Executive Retained Search</li>\n                    <li>Customized Search Solutions</li>\n                    <li>Exclusive Contingence Solutions</li>\n                </ul>\n               \n                    <!-- <p>Executive Retained Search</p>\n                    <p>Customized Search Solutions</p>\n                    <p>Exclusive Contingence Solutions</p> -->\n               \n            </div> \n        </div> \n    </div> \n    </div>\n    <div class=\"col-md-6 col-lg-6 col-sm-12\">\n        <div class=\"flip\"> \n                <!-- (click)=\"isFlippedTwo=!isFlippedTwo\" -->\n            <div class=\"card\" [ngClass]=\"{'flipped':isFlippedTwo}\"  \n            > \n                <div style=\"background-color: #487296;\" class=\"face front\"> \n                   Executive Succession Planning \n                </div> \n                <div class=\"face back\"> \n                     <div style=\"display:flex; justify-content: center; width:100%;\"> Customized Succession Solutions </div>\n                       \n                  \n                </div> \n            </div> \n        </div> \n         \n    </div>\n  </div>\n\n  <div class=\"row no-gutters\">\n        <div class=\"col-md-6 col-lg-6 col-sm-12\">\n          <div class=\"flip\"> \n                <!-- (click)=\"isFlipped=!isFlipped\" -->\n            <div class=\"card\" [ngClass]=\"{'flipped':isFlipped}\"  \n           > \n                <div style=\"background-color: #487296;\" class=\"face front\"> \n                    Experienced Container Search\n                </div> \n                <div class=\"face back\"> \n    \n                    <ul style=\"margin-top: 20px;\">\n                        <li>Executive Retained Search</li>\n                        <li>Customized Search Solutions</li>\n                        <li>Exclusive Contingence Solutions</li>\n                    </ul>\n                   \n                        <!-- <p>Executive Retained Search</p>\n                        <p>Customized Search Solutions</p>\n                        <p>Exclusive Contingence Solutions</p> -->\n                   \n                </div> \n            </div> \n        </div> \n        </div>\n        <div class=\"col-md-6 col-lg-6 col-sm-12\">\n            <div class=\"flip\"> \n                    <!-- (click)=\"isFlippedTwo=!isFlippedTwo\" -->\n                <div class=\"card\" [ngClass]=\"{'flipped':isFlippedTwo}\"  \n                > \n                    <div  class=\"face front\"> \n                            Compensation Analysis\n                    </div> \n                    <div class=\"face back\"> \n                         <div style=\"display:flex; justify-content: center; width:100%;\">  </div>\n                           \n                      \n                    </div> \n                </div> \n            </div> \n             \n        </div>\n      </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/our-capabilities/our-capabilities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurCapabilitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OurCapabilitiesComponent = /** @class */ (function () {
    function OurCapabilitiesComponent() {
        this.isFlipped = false;
        this.isFlippedTwo = false;
    }
    OurCapabilitiesComponent.prototype.ngOnInit = function () {
    };
    OurCapabilitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-our-capabilities',
            template: __webpack_require__("../../../../../src/app/our-capabilities/our-capabilities.component.html"),
            styles: [__webpack_require__("../../../../../src/app/our-capabilities/our-capabilities.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OurCapabilitiesComponent);
    return OurCapabilitiesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/our-reach/our-reach.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n    height: 800px;\n   \n}\nagm-marker{\n    color:white;\n    background-color: white;\n}\n\n.section_container {\n    margin-left: 217px;\n    margin-top: 30px;\n    background-color: #242F3D;\n    color: rgb(250, 248, 246);\n    position: relative;\n    width: 200px;\n    top: 8px;\n    padding-bottom: 7px;\n    padding-top: 10px;\n    font-family: Avenir;\n    text-align: center;\n}\n.content_title{\n    font-size: 1.5rem;\n   \n}\n\n.content_sub_subTitle {\n    font-family: Avenir;\n    color: #336699;\n    font-size: 15px;\n}\n\n/* amcharts-description-div */\n/* .amcharts-description-text-div {\n    background-color: white;\n    border: solid;\n} */\n\n.ammapDescriptionWindow {\n    border: 5px solid rgba(0, 0, 0, 1) !important;\n    border-radius: 4px !important;\n    max-width: 190px !important;\n    background: rgba(255, 255, 255, 0.8) !important;\n    padding: 10px !important;\n  }\n.mapDisplay {\n    padding-top: 50px;\n}\n  \n\n@media screen and (max-width: 600px) { \n   .mapDisplay {\n       display: none;\n   }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/our-reach/our-reach.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters \">\n  <div   class=\"col-sm-12 col-md-12 col-lg-12 mapDisplay\">\n    \n      <div class=\"container section_container\" style=\"margin-bottom: 8px;\">\n          <h2 class=\"content_title\">National Placements</h2>\n      </div>\n\n      <!-- #467298; -->\n\n      <div id=\"mapDiv\" \n     \n      \n      style=\"background-color:#467298; \" [style.width.%]=\"100\" [style.height.px]=\"800\"></div>\n     \n    \n  \n  </div>\n  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/our-reach/our-reach.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurReachComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OurReachComponent = /** @class */ (function () {
    function OurReachComponent(AmCharts) {
        this.AmCharts = AmCharts;
        this.icon = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
    }
    OurReachComponent.prototype.ngAfterViewInit = function () {
        this.chart = this.AmCharts.makeChart("mapDiv", {
            /**
         * this tells amCharts it's a map
         */
            type: "map",
            theme: "dark",
            /**
             * create data provider object
             * map property is usually the same as the name of the map file.
             * getAreasFromMap indicates that amMap should read all the areas available
             * in the map data and treat them as they are included in your data provider.
             * in case you don't set it to true, all the areas except listed in data
             * provider will be treated as unlisted.
             */
            dataProvider: {
                "map": "usa2High",
                "zoomLevel": 1,
                "zoomLongitude": -96,
                "zoomLatitude": 38,
                "getAreasFromMap": true,
                "images": [{
                        "latitude": 40.3951,
                        "longitude": -73.5619,
                        // "type": "circle",
                        "svgPath": this.icon,
                        "color": "white",
                        "labelColor": "white",
                        "labelRollOverColor": "white",
                        "scale": 0.5,
                        // "title": "Representative Searches:  this is the list information, this is the information",
                        "label": "New York",
                        "labelShiftY": 2,
                    },
                    {
                        "latitude": 34.052235,
                        "longitude": -118.243683,
                        // "type": "circle",
                        "svgPath": this.icon,
                        "color": "white",
                        "labelColor": "white",
                        "labelRollOverColor": "white",
                        "scale": 0.5,
                        // "title": "New York this is a test --- You can put any content in here ---------",
                        "label": "Los Angeles",
                        "labelShiftY": 2,
                    },
                    {
                        "latitude": 41.881832,
                        "longitude": -87.623177,
                        // "type": "circle",
                        "svgPath": this.icon,
                        "color": "white",
                        "labelColor": "white",
                        "labelRollOverColor": "white",
                        "scale": 0.5,
                        // "title": "New York this is a test --- You can put any content in here ---------",
                        "label": "Chicago",
                        "labelShiftY": 2,
                    },
                    {
                        "latitude": 42.361145,
                        "longitude": -71.057083,
                        // "type": "circle",
                        "svgPath": this.icon,
                        "color": "white",
                        "labelColor": "white",
                        "labelRollOverColor": "white",
                        "scale": 0.5,
                        // "title": "New York this is a test --- You can put any content in here ---------",
                        "label": "Boston",
                        "labelShiftY": 2,
                    },
                    {
                        "latitude": 35.691544,
                        "longitude": -105.944183,
                        // "type": "circle",
                        "svgPath": this.icon,
                        "color": "white",
                        "labelColor": "white",
                        "labelRollOverColor": "white",
                        "scale": 0.5,
                        // "title": "New York this is a test --- You can put any content in here ---------",
                        "label": "Santa Fe",
                        "labelShiftY": 2,
                    },
                    {
                        "latitude": 43.661471,
                        "longitude": -70.2553259,
                        // "type": "circle",
                        "svgPath": this.icon,
                        "color": "white",
                        "labelColor": "white",
                        "labelRollOverColor": "white",
                        "scale": 0.5,
                        // "title": "New York this is a test --- You can put any content in here ---------",
                        "label": "Portland",
                        "labelShiftY": 2,
                    },
                    {
                        "latitude": 41.203323,
                        "longitude": -77.194527,
                        // "type": "circle",
                        "svgPath": this.icon,
                        "color": "white",
                        "labelColor": "white",
                        "labelRollOverColor": "white",
                        "scale": 0.5,
                        // "title": "New York this is a test --- You can put any content in here ---------",
                        "label": "Pennsylvania",
                        "labelShiftY": 2,
                    },
                    {
                        "latitude": 39.299236,
                        "longitude": -76.609383,
                        // "type": "circle",
                        "svgPath": this.icon,
                        "color": "white",
                        "labelColor": "white",
                        "labelRollOverColor": "white",
                        "scale": 0.5,
                        // "title": "New York this is a test --- You can put any content in here ---------",
                        "label": "Baltimore",
                        "labelShiftY": 2,
                    },
                    {
                        "latitude": 37.926868,
                        "longitude": -78.024902,
                        // "type": "circle",
                        "svgPath": this.icon,
                        "color": "white",
                        "labelColor": "white",
                        "labelRollOverColor": "white",
                        "scale": 0.5,
                        // "title": "New York this is a test --- You can put any content in here ---------",
                        "label": "Virginia",
                        "labelShiftY": 2,
                    },
                    {
                        "latitude": 43.038902,
                        "longitude": -87.906471,
                        // "type": "circle",
                        "svgPath": this.icon,
                        "color": "white",
                        "labelColor": "white",
                        "labelRollOverColor": "white",
                        "scale": 0.5,
                        // "title": "New York this is a test --- You can put any content in here ---------",
                        "label": "Milwaukee",
                        "labelShiftY": 2,
                    },
                    {
                        "latitude": 40.367474,
                        "longitude": -82.996216,
                        // "type": "circle",
                        "svgPath": this.icon,
                        "color": "white",
                        "labelColor": "white",
                        "labelRollOverColor": "white",
                        "scale": 0.5,
                        // "title": "New York this is a test --- You can put any content in here ---------",
                        "label": "Ohio",
                        "labelShiftY": 2,
                    },
                    {
                        "latitude": 47.608013,
                        "longitude": -122.335167,
                        // "type": "circle",
                        "svgPath": this.icon,
                        "color": "white",
                        "labelColor": "white",
                        "labelRollOverColor": "white",
                        "scale": 0.5,
                        // "title": "New York this is a test --- You can put any content in here ---------",
                        "label": "Seattle",
                        "labelShiftY": 2,
                    },
                    {
                        "latitude": 37.773972,
                        "longitude": -122.431297,
                        // "type": "circle",
                        "svgPath": this.icon,
                        "color": "white",
                        "labelColor": "white",
                        "labelRollOverColor": "white",
                        "scale": 0.5,
                        // "title": "New York this is a test --- You can put any content in here ---------",
                        "label": "San Francisco",
                        "labelShiftY": 2,
                    },
                    {
                        "latitude": 30.267153,
                        "longitude": -97.7430608,
                        // "type": "circle",
                        "svgPath": this.icon,
                        "color": "white",
                        "labelColor": "white",
                        "labelRollOverColor": "white",
                        "scale": 0.5,
                        // "title": "New York this is a test --- You can put any content in here ---------",
                        "label": "Austin",
                        "labelShiftY": 2,
                    },
                    {
                        "latitude": 40.758701,
                        "longitude": -111.876183,
                        // "type": "circle",
                        "svgPath": this.icon,
                        "color": "white",
                        "labelColor": "white",
                        "labelRollOverColor": "white",
                        "scale": 0.5,
                        // "title": "New York this is a test --- You can put any content in here ---------",
                        "label": "Salt Lake City",
                        "labelShiftY": 2,
                    },
                    {
                        "latitude": 32.897480,
                        "longitude": -97.040443,
                        // "type": "circle",
                        "svgPath": this.icon,
                        "color": "white",
                        "labelColor": "white",
                        "labelRollOverColor": "white",
                        "scale": 0.5,
                        // "title": "New York this is a test --- You can put any content in here ---------",
                        "label": "Dallas",
                        "labelShiftY": 2,
                    },
                    {
                        "latitude": 29.780472,
                        "longitude": -95.386342,
                        // "type": "circle",
                        "svgPath": this.icon,
                        "color": "white",
                        "labelColor": "white",
                        "labelRollOverColor": "white",
                        "scale": 0.5,
                        // "title": "New York this is a test --- You can put any content in here ---------",
                        "label": "Houston",
                        "labelShiftY": 2,
                    },
                    {
                        "latitude": 35.040031,
                        "longitude": -89.981873,
                        // "type": "circle",
                        "svgPath": this.icon,
                        "color": "white",
                        "labelColor": "white",
                        "labelRollOverColor": "white",
                        "scale": 0.5,
                        // "title": "New York this is a test --- You can put any content in here ---------",
                        "label": "Memphis",
                        "labelShiftY": 2,
                    },
                    {
                        "latitude": 39.742043,
                        "longitude": -104.991531,
                        // "type": "circle",
                        "svgPath": this.icon,
                        "color": "white",
                        "labelColor": "white",
                        "labelRollOverColor": "white",
                        "scale": 0.5,
                        // "title": "New York this is a test --- You can put any content in here ---------",
                        "label": "Denver",
                        "labelShiftY": 2,
                    },
                    {
                        "latitude": 33.753746,
                        "longitude": -84.386330,
                        // "type": "circle",
                        "svgPath": this.icon,
                        "color": "white",
                        "labelColor": "white",
                        "labelRollOverColor": "white",
                        "scale": 0.5,
                        // "title": "New York this is a test --- You can put any content in here ---------",
                        "label": "Atlanta",
                        "labelShiftY": 2,
                    },
                    {
                        "latitude": 25.761681,
                        "longitude": -80.191788,
                        // "type": "circle",
                        "svgPath": this.icon,
                        "color": "white",
                        "labelColor": "white",
                        "labelRollOverColor": "white",
                        "scale": 0.5,
                        // "title": "New York this is a test --- You can put any content in here ---------",
                        "label": "Miami",
                        "labelShiftY": 2,
                    },
                    {
                        "latitude": 35.227085,
                        "longitude": -80.843124,
                        // "type": "circle",
                        "svgPath": this.icon,
                        "color": "white",
                        "labelColor": "white",
                        "labelRollOverColor": "white",
                        "scale": 0.5,
                        // "title": "New York this is a test --- You can put any content in here ---------",
                        "label": "Charlotte",
                        "labelShiftY": 2,
                    },
                    {
                        "latitude": 36.174465,
                        "longitude": -86.767960,
                        // "type": "circle",
                        "svgPath": this.icon,
                        "color": "white",
                        "labelColor": "white",
                        "labelRollOverColor": "white",
                        "scale": 0.5,
                        // "title": "New York this is a test --- You can put any content in here ---------",
                        "label": "Nashville",
                        "labelShiftY": 2,
                    },
                    {
                        "latitude": 33.501324,
                        "longitude": -111.925278,
                        // "type": "circle",
                        "svgPath": this.icon,
                        "color": "white",
                        "labelColor": "white",
                        "labelRollOverColor": "white",
                        "scale": 0.5,
                        // "title": "New York this is a test --- You can put any content in here ---------",
                        "label": "Scottsdale",
                        "labelShiftY": 2,
                    }
                ],
                "areas": [
                    {
                        "id": "US-AK",
                        "alpha": 0,
                        "balloonText": "",
                        "autoZoom": false,
                        "outlineColor": "#467298",
                        "rollOverOutlineColor": "#467298"
                    },
                    {
                        "id": "US-HI",
                        "alpha": 0,
                        "balloonText": "",
                        "autoZoom": false,
                        "outlineColor": "#467298",
                        "rollOverOutlineColor": "#467298"
                    }
                ]
            },
            "areasSettings": {
                "color": "#385C7B",
                "balloonText": "",
                // "selectedColor": "white",
                // "rollOverOutlineColor": "white",
                "rollOverColor": "#385C7B"
            },
        });
    };
    OurReachComponent.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.AmCharts.destroyChart(this.chart);
        }
    };
    OurReachComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-our-reach',
            template: __webpack_require__("../../../../../src/app/our-reach/our-reach.component.html"),
            styles: [__webpack_require__("../../../../../src/app/our-reach/our-reach.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__amcharts_amcharts3_angular__["b" /* AmChartsService */]])
    ], OurReachComponent);
    return OurReachComponent;
}());



/***/ }),

/***/ "../../../../../src/app/team/team.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".team_container {\n    height: 100vh;\n    background-color: #F5F7F9;\n    font-family: Avenir;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n}\n\n.team_title{\n    font-size: 2.813em;\n    text-align: center;\n    font-family: 'Fjalla One',Gotham,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n    color: black;\n    letter-spacing: 1px;\n    line-height: 1.1em;\n    padding-top: 80px;\n   \n   \n}\n\n#barry {\n   \n    background-image: url(\"/assets/bari.JPG\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 50% 100%;\n    width:175px;\n    height: 200px;\n    border: 1px solid #fff;\n    \n   \n   \n}\n#sean {\n\n    background-image: url(\"/assets/sean.jpg\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 50% 30%;\n    width:175px;\n    height: 200px;\n    border: 1px solid #fff;\n   \n\n}\n#meg {\n  \n    background-image: url(\"/assets/meg.jpg\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 50% 10%;\n    width:175px;\n    height: 200px;\n    border: 1px solid #fff;\n   \n   \n}\n#sarah {\n  \n    background-image: url(\"/assets/sarah.jpg\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 50% 10%;\n    width:175px;\n    height: 200px;\n    border: 1px solid #fff;\n   \n   \n}\n#frank {\n  \n    background-image: url(\"/assets/frank.jpg\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 50% 10%;\n    width:175px;\n    height: 200px;\n    border: 1px solid #fff;\n   \n   \n}\n#mike {\n  \n    background-image: url(\"/assets/mike.jpg\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 50% 10%;\n    width:175px;\n    height: 200px;\n    border: 1px solid #fff;\n   \n   \n}\n#allison {\n  \n    background-image: url(\"/assets/allison.jpg\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 50% 10%;\n    width:175px;\n    height: 200px;\n    border: 1px solid #fff;\n   \n   \n}\n.image_wrapper {\n    display: -ms-flexbox;\n    display: flex;\n    margin: 20px;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-pack: center;\n        justify-content: center;\n    cursor: pointer;\n}\n.office_name {\n    position: absolute;\n    top: 23px;\n    left: 1.682em;\n    padding: 0 .5em;\n    background: #002551;\n    color: #fff;\n    font-size: 1.375rem;\n    line-height: 1.682em;\n    font-family: 'Fjalla One',Gotham,'Helvetica Neue',Helvetica,Arial,sans-serif;\n    text-transform: uppercase;\n    transform: rotateZ(90deg);\n    transform-origin: left top;\n}\n\n.name_label {\n    text-align: center;\n}\n.topStaff {\n    display:-ms-flexbox;\n    display:flex; \n    \n}\n.bariWrapper {\n    margin-left: 50px;\n}\n\n@media screen and (max-width: 600px) { \n    .topStaff {\n        display:-ms-flexbox;\n        display:flex; \n        \n        -ms-flex-direction: column; \n        \n            flex-direction: column;\n    }\n    .bariWrapper {\n        margin: 20px;\n    }\n    .image_wrapper {\n        -ms-flex-align: center;\n            align-items: center;\n    }\n    .team_container {\n        height: 100%;\n        margin-top: 100px;\n        background-color: #F5F7F9;\n        font-family: Avenir;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-pack: center;\n            justify-content: center;\n        padding-bottom: 50px;\n    }\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"team_container\">\n \n  <div style=\"align-self: center;\" class=\"container\">\n      <h1 class=\"team_title\">TEAM</h1>\n    <div class=\"row no-gutters\" style=\"display:flex; margin-top:20px;\">\n      <div class=\"col\" style=\"display:flex; align-self:center;\">\n          <!-- <div class=\"office_name\">New York</div> -->\n            <div class=\"container topStaff\" >\n                <div class=\"image_wrapper bariWrapper\" >\n                    <div id=\"barry\" (click)=\"openDialog(0)\"></div>\n                    <div class=\"name_label\">Barry Emen</div>\n                    <div class=\"name_label\">President and CEO</div>\n                </div>\n                <div class=\"image_wrapper\" >\n                        <div id=\"sean\" (click)=\"openDialog(1)\"></div>\n                        <div class=\"name_label\">Sean Myers</div>\n                        <div class=\"name_label\"> Managing Partner</div>\n                       \n                    </div>\n                \n            </div>\n      </div>\n    </div>\n    <div class=\"row no-gutters\">\n        <div class=\"col\"  style=\"display:flex; align-self:center;\">\n               \n            <div class=\"container topStaff\" >\n                <div class=\"image_wrapper bariWrapper\">\n                    <div id=\"mike\" (click)=\"openDialog(6)\"></div>\n                    <div class=\"name_label\">Michael Emen</div>\n                    <div class=\"name_label\">Managing Director</div>\n\n                </div>\n                \n                    \n               \n                <div  class=\"image_wrapper\">\n                    <div id=\"meg\" (click)=\"openDialog(5)\" ></div>\n                    <div class=\"name_label\">Meaghan Weyer</div>\n                    <div class=\"name_label\"> Vice President</div>\n\n                   \n                </div>\n\n               \n                \n               \n                <div class=\"image_wrapper\">\n                    <div id=\"frank\" (click)=\"openDialog(3)\"></div>\n                    <div class=\"name_label\">Frank Carr</div>\n                    <div class=\"name_label\"> Managing Director</div>\n\n                   \n                   \n                </div>\n               \n            </div>\n            \n        </div>\n    </div>\n   \n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bio_bio_component__ = __webpack_require__("../../../../../src/app/bio/bio.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamComponent = /** @class */ (function () {
    function TeamComponent(dialog) {
        this.dialog = dialog;
        this.team = [
            {
                name: 'Barry Emen',
                position: 'President',
                image: '/assets/bari.JPG',
                // tslint:disable-next-line:max-line-length
                bio: 'Barry is an executive search industry veteran with over 25 years of experience in placing senior executives throughout the investment management industry. He has been frequently quoted in various publications such as Fund Action, Fund Fire and Hedge Fund Alert and he regularly attends the leading industry events such as the ICI General Membership and Tax & Accounting conferences, NICSA, MFA and GAIM hedge fund conferences. Barry began his career in internal audit and accounting, rising to Controller of an International Distribution firm after only 7 years. In 1986, he entered the Executive Search industry with ROMAC & Associates, a national recruiting firm. Within two years he rose to the number two sales position out of 180 professionals nationwide. He led his region in sales for five years and in 1992, he founded MJE as one of the first recruiting firms to focus on accounting, tax, and operations positions within the Mutual Fund industry. Barry expanded the firm into the hedge fund administration and operations segments and today, MJE is a leading search firm in the functional areas of Sales, Accounting, Middle Office and Back Office positions at Mutual Funds, Hedge Funds, Private Equity firms and investment industry service providers. Barry was selected to be a Committee of Hearts member of leading industry charity, Hedge Funds Care. MJE is a corporate Bronze Sponsor of Hedge Funds Care. Barry has a BS in Accounting from Brooklyn College and an MBA in Finance from Pace University.',
                phone: '973-765-9400 ',
                ext: '104',
                email: 'barry@mjeadvisors.com',
                linkedIn: 'https://www.linkedin.com/in/barryemenmjeadvisors/'
            },
            {
                name: 'Sean Myers',
                position: 'Managing Partner',
                image: '/assets/sean.jpg',
                // tslint:disable-next-line:max-line-length
                bio: 'Sean joined MJE Advisors in 2008 from Barclays Capital after spending three years supporting the U.S. Mortgage Backed Securities business as a Fixed Income Trading Associate. While at Barclays, he supported the global trading efforts of the residential mortgage-backed pass-through (RMBS) and collateralized mortgage obligation (CMO) business units. Sean rotated through various positions including front office trading operations, collateralized mortgage deal structuring, allocations and middle office settlement support. Sean is a graduate of Cornell University, where he received a Bachelors degree in Applied Economics and Management within the Agricultural and Life Sciences College. Sean is currently a Managing Partner at MJE Advisors and helps lead the firm’s search efforts across all areas of the Investment Management and Service Provider landscape. His strong ability to execute a search has led to significant placements for the firm greatly benefiting our clients and candidates.',
                phone: '973-765-9400',
                ext: ' 103 ',
                email: 'sean@mjeadvisors.com',
                linkedIn: 'https://www.linkedin.com/in/sean-myers-0659a88'
            },
            {
                name: 'Sarah Carney',
                position: 'Managing Director',
                image: '/assets/sarah.jpg',
                // tslint:disable-next-line:max-line-length
                bio: "Sarah joined MJE in 2011 and was quickly promoted to Managing Director of MJE Advisors Executive Search Practice. Sarah works on national searches helping firms hire top talent in Accounting, Tax, Legal, Sales and Operations. As an industry leader, Sarah regularly attends industry conferences and is involved with many charities. She prides herself on being a career counselor, advising both candidates and clients on the latest market trends. Prior to entering the executive search field, Sarah honed her sales and marketing skills in the real estate industry. Her real estate career had a strong emphasis on client relations, and customer satisfaction, Sarah was ranked top five amongst her peers. She earned her bachelor\u2019s degree in Business Administration, Marketing from The College of Saint Elizabeth and graduated with high honors. In addition to her recruiting activities, Sarah manages associate level recruiters and oversees the firm\u2019s proprietary candidate database.\n     ",
                phone: '973-765-9400 ',
                ext: '102',
                email: 'sarah@mjeadvisors.com',
                linkedIn: 'https://www.linkedin.com/in/sarahecarney/'
            },
            {
                name: 'Frank Carr',
                position: 'Managing Director',
                image: '/assets/frank.jpg',
                // tslint:disable-next-line:max-line-length
                bio: 'Prior to joining MJE Advisors, Frank was Managing Partner and Founder of Centennial Advisory Group LLC and a specialist in recruiting for the investment management industry with particular expertise in the hedge fund industry. He had also been a Partner in the New York office of global search firm Amrop Battalia Winston. Centennial was named “Recruitment Firm of the Year” for 2009 by Hedge Fund Manager Week magazine. Prior to forming Centennial, Frank had been a Managing Director in the Global Asset Management practice at A.T. Kearney Executive Search, a top 10 U.S. search firm. He began his search career at LAI Ward Howell which was later acquired by TMP Worldwide (owners of Monster.com). Prior to entering executive search, Frank was Chief Financial Officer of a Connecticut-based equity long short hedge fund and Commodity Trading Advisor. Frank had spent eight years in commercial bank lending, initially with Citibank in their Wall Street Commodities division and later as a banker to the feature film and TV industries. He had previously held FINRA licenses, Series 3, 6 and 63. He is a graduate of Williams College where he received a Bachelor of Arts degree in Political Economy. Frank is a former national class marathon runner and an avid bass guitarist. He also serves as an event committee member and Master of Ceremonies of the annual “Hedge Fund Rocktoberfest” in New York City to benefit A Leg to Stand On. ',
                phone: '203-344-9531',
                ext: '',
                email: 'frank@mjeadvisors.com',
                linkedIn: 'https://www.linkedin.com/in/barryemenmjeadvisors/'
            },
            {
                name: 'Alison Grzes',
                position: 'Managing Director',
                image: '/assets/allison.jpg',
                // tslint:disable-next-line:max-line-length
                bio: 'Prior to joining MJE Advisors Alison was a Senior Executive Recruiter for Parker & Lynch a national recruiting firm owned by Adecco a Fortune 500 recruiting firm.  Alison\'s expertise was with in Accounting & Finance where she was consistently ranked one of the top recruiters for NYC & NJ for over 10 years. She earned her bachelor’s degree in Business Administration from the University of Vermont. At MJE Advisors Alison works on national searches helping firms hire top talent in Accounting, Tax and Operations.',
                phone: '973-765-9400 ',
                ext: '105',
                email: 'allison@mjeadvisors.com',
                linkedIn: 'https://www.linkedin.com/in/alison-baiter-grzes-729801/'
            },
            {
                name: 'Meaghan Weyer',
                position: 'Vice President',
                image: '/assets/meg.jpg',
                // tslint:disable-next-line:max-line-length
                bio: "Meaghan joined MJE in 2016 from Wealth Management Consultants, where she was involved with serving ultra high net worth clients. Prior to that, she held positions in various financial institutions including UBS, Stifel Nicolaus, and Northwestern Mutual. Meaghan is originally from Arizona and received her Bachelors degree from Northwestern University, in Evanston, Illinois.\n    She currently serves as the Director of Marketing and Research at MJE where she involved in the day to day client and candidate sourcing and outreach.",
                phone: '973-765-9400 ',
                ext: '101',
                email: 'meaghan@mjeadvisors.com',
                linkedIn: 'https://www.linkedin.com/in/meaghan-weyer-19a48498/'
            },
            {
                name: 'Michael Emen',
                position: 'Director',
                image: '/assets/mike.jpg',
                // tslint:disable-next-line:max-line-length
                bio: " Michael Emen joined MJE Advisors in June 2018 bringing broad asset management industry experience to our specialized recruiting platform.  Michael joins MJE from Prudential Global Investment Management where he spent the last 3 years as a Performance Analyst for the Prudential Fixed Income business. Prior to that, Michael spent 4 and a half years working in Private Trade Operations within prudential, and overall has a decade of industry experience in Investment Management Operations, Performance Attribution,  Fund Accounting, and Investor Services.  Michael graduated Fairleigh Dickinson University in 2008 with a BS in Finance, and also holds an MBA in Business Management and Economics from Fairleigh Dickinson.\n    ",
                phone: '973-765-9400 ',
                ext: '101',
                email: ' Michael@mjeadvisors.com',
                linkedIn: 'https://www.linkedin.com/in/michael-emen-9300a823/'
            }
        ];
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent.prototype.openDialog = function (member) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__bio_bio_component__["a" /* BioComponent */], { data: this.team[member], height: '400px', width: '600px' });
    };
    TeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-team',
            template: __webpack_require__("../../../../../src/app/team/team.component.html"),
            styles: [__webpack_require__("../../../../../src/app/team/team.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDialog */]])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "../../../../../src/app/trackscroll.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackscrollDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrackscrollDirective = /** @class */ (function () {
    function TrackscrollDirective() {
        this.pageYPositionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    TrackscrollDirective.prototype.track = function (event) {
        this.pageYPositionChange.emit(document.documentElement.scrollTop);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], TrackscrollDirective.prototype, "pageYPositionChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TrackscrollDirective.prototype, "track", null);
    TrackscrollDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appTrackscroll]'
        }),
        __metadata("design:paramtypes", [])
    ], TrackscrollDirective);
    return TrackscrollDirective;
}());



/***/ }),

/***/ "../../../../../src/app/what-we-do/what-we-do.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".whatWeDoContainer {\n    background-color: #808080;\n    height: 550px;\n    \n}\n.whatWeDoTitle {\n    font-family:Avenir;\n    font-style: normal;\n   \n    color: #ffffff;\n    line-height: 1.4;\n    margin: 0;\n    text-align: center;\n    padding: 32px 0;\n    padding-top: 100px;\n   \n}\n\n\n.hero-banner__separator {\n    background-color: #fbcc11;\n    width: 42px;\n    height: 5px;\n    margin: 0 auto;\n    border: 0;\n}\n.whatWeDoStat {\n    display:-ms-flexbox;\n    display:flex;\n    -ms-flex-direction:column;\n        flex-direction:column;\n    width:100%;\n    -ms-flex-pack: center;\n        justify-content: center;\n    \n   \n}\n.whatWeDoText {\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    \n    text-align: center;\n    font-family:Avenir;\n    font-style: normal;\n    font-weight: normal;\n    margin-top:  27px;\n    font-size: 20px;\n}\n.whatWeDoCol {\n    text-align: center;\n    margin-top:20px;\n    font-family: Avenir;\n}\n.number {\n    font-size: 96px;\n    font-size: 6rem;\n    line-height: 104px;\n    line-height: 6.5rem;\n    font-variant-numeric: oldstyle-nums;\n    -webkit-font-feature-settings: \"onum\"; \n    font-feature-settings: \"onum\";\n     letter-spacing: -8px;\n     font-family: FFScalaWeb, Georgia, Utopia, Charter, serif;\n    font-style: normal;\n    font-weight: normal;\n    text-align: center;\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n}\n.stats {\n    display:-ms-flexbox;\n    display:flex; \n    -ms-flex-pack:center; \n        justify-content:center; \n}\n.statsRow {\n    height: 150px;\n}\n.statsContainer {\n    background-color:#F5F7F9; \n    height:300px; \n    position:relative; \n    bottom: 140px;\n}\n\n@media screen and (max-width: 600px) {\n    .whatWeDoContainer {\n       \n        height: 800px;\n        \n    }\n    .stats {\n        -ms-flex-direction: column;\n            flex-direction: column;\n    }\n    .number {\n        font-size: 96px;\n        font-size: 3.5rem;\n        line-height: 104px;\n        line-height: 6.5rem;\n        font-variant-numeric: oldstyle-nums;\n        -webkit-font-feature-settings: \"onum\"; \n        font-feature-settings: \"onum\";\n         letter-spacing: -8px;\n         font-family: FFScalaWeb, Georgia, Utopia, Charter, serif;\n        font-style: normal;\n        font-weight: normal;\n        text-align: center;\n        -ms-flex-item-align: center;\n            -ms-grid-row-align: center;\n            align-self: center;\n    }\n    .whatWeDoText {\n        -ms-flex-item-align: center;\n            -ms-grid-row-align: center;\n            align-self: center;\n        \n        text-align: center;\n        font-family:Avenir;\n        font-style: normal;\n        font-weight: normal;\n        margin-top:  27px;\n        font-size: 15px;\n    }\n\n    .statsRow {\n        height: 75px;\n    }\n    .whatWeDoCol {\n        text-align: center;\n        margin-top:0px;\n        font-family: Avenir;\n    }\n\n    .statsContainer {\n        background-color:#F5F7F9; \n        height:175px; \n        position:relative; \n        bottom: 50px;\n    }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/what-we-do/what-we-do.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"whatWeDoContainer\">\n  \n      <h1 class=\"whatWeDoTitle\">What We Do </h1>\n      <hr class=\"hero-banner__separator\">\n      <div class=\"container\">\n\n          <p  style=\" font-family:Avenir; color:white;  font-size:1.5em; margin-top: 50px;\">With over 50 years of search experience, MJE Advisors has successfully partnered with the Mutual Fund and Alternative Investment industry placing over 3000 professionals nationally.  We work closely with our clients to implement customized search solutions to identify, develop and deliver the industry’s top experienced professionals.\n\n            </p>\n\n      </div>\n     \n</div>\n<!-- <div class=\"container\" style=\"display:flex;background-color:#F5F7F9; height:300px; position:relative; bottom: 140px;\">\n   -->\n <div class=\"container statsContainer\" >\n    <div class=\"row no-gutters statsRow\">\n      <div class=\"col-4 stats\">\n\n        <span class=\"number\"> 1993 </span>\n\n      </div>\n      <div  class=\"col-4 stats\">\n        <span class=\"number\"> 50 </span>   \n      </div>\n      <div  class=\"col-4 stats\">\n          <span class=\"number\"> 3000+ </span>\n      </div>\n    </div>\n\n    <div class=\"row no-gutters\">\n        <div  class=\"col-4 whatWeDoCol\">\n          <span class=\"whatWeDoText\">FOUNDED IN</span>\n        </div>\n        <div class=\"col-4 whatWeDoCol\">\n\n            <span class=\"whatWeDoText\">\n              YEARS OF EXECUTIVE SEARCH EXPERIENCE \n            </span>\n\n        </div>\n        <div class=\"col-4 whatWeDoCol\">\n            <span class=\"whatWeDoText\">\n              COMPLETED SEARCHES\n            </span>\n        </div>\n    </div>\n  </div>\n    \n  \n\n   \n\n<!-- </div> -->"

/***/ }),

/***/ "../../../../../src/app/what-we-do/what-we-do.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhatWeDoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhatWeDoComponent = /** @class */ (function () {
    function WhatWeDoComponent() {
    }
    WhatWeDoComponent.prototype.ngOnInit = function () {
    };
    WhatWeDoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-what-we-do',
            template: __webpack_require__("../../../../../src/app/what-we-do/what-we-do.component.html"),
            styles: [__webpack_require__("../../../../../src/app/what-we-do/what-we-do.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WhatWeDoComponent);
    return WhatWeDoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/why-mje/why-mje.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content_title{\n    font-family: Avenir;\n    color: #336699;\n}\n.content_subTitle{\n    font-family: Avenir;\n    margin-top:30px;\n    margin-bottom:30px;\n}\n.section_container {\n    margin-top:50px;\n}\n\n.content_sub_subTitle {\n    font-family: Avenir;\n    color: #336699;\n    font-size: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/why-mje/why-mje.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n      <div class=\"section_container\">\n        <h2 class=\"content_title\" style=\"text-align: center; font-weight:bold;\"> EXPERTISE </h2>\n        <div style=\"margin-top:50px;\" class=\"row\">\n          <div class=\"col\">\n            <div style=\"width:90%;\">\n\n                <p  style=\" font-family:Avenir;  font-size:1.5em; margin-top: 50px;\">With over 40 years of search experience, MJE Advisors has successfully partnered with the Mutual Fund and Alternative Investment industry placing over 2000 professionals nationally.  We work closely with our clients to implement customized search solutions to identify, develop and deliver the industry’s top experienced professionals.\n\n                  </p>\n        \n\n\n            </div>\n             \n          </div>\n          <div class=\"col\">\n            <div style=\"width:90%;\">\n                <p class=\"content_title\" style=\" font-weight:bold;\">PRACTICE AREAS</p>\n\n                <ul style=\"font-family:Avenir;  font-size:1.5em;\">\n                  <li>Accounting, Tax, Finance</li>\n                  <li> Compliance and Legal</li>\n                  <li> Business Development, Institutional, Retail</li>\n                  <li>Operations, Middle Office, Back Office</li>\n                  <li>Performance, GIPS, Reporting</li>\n                  <li>Product</li>\n                  <li>Risk and Quant</li>\n                </ul>\n            </div>\n           \n\n          </div>\n        </div>\n       \n         \n      </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/why-mje/why-mje.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhyMjeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhyMjeComponent = /** @class */ (function () {
    function WhyMjeComponent() {
    }
    WhyMjeComponent.prototype.ngOnInit = function () {
    };
    WhyMjeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-why-mje',
            template: __webpack_require__("../../../../../src/app/why-mje/why-mje.component.html"),
            styles: [__webpack_require__("../../../../../src/app/why-mje/why-mje.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WhyMjeComponent);
    return WhyMjeComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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