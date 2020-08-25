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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Config.ts":
/*!***************************!*\
  !*** ./src/app/Config.ts ***!
  \***************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.url = 'https://admin.epismart-arab.com';
    // public static url = 'http://localhost:52265';
    Config.api = Config.url + "/api";
    Config.websites = Config.api + "/Offers/GetWebsiteProduct";
    Config.requestsAddEdit = Config.api + "/Requests";
    Config.GetGovernmentsOfCountry = Config.api + "/Requests/GetGovernmentsOfCountry/";
    return Config;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n    background-color: #f1c20e !important;\n    width: 100%;\n}\n\n.container {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    text-align: center;\n}\n\n#timer {\n    color: white;\n    font-weight: bold;\n    background-color: #2cbd4f;\n    width: 45%;\n    text-align: center;\n    border-radius: 5px;\n    margin: auto;\n    font-size: 2.4vw;\n    padding: 1% 0;\n}\n\n.custom-control-inline {\n    padding-left: 9%;\n}\n\n.choosedRadio {\n    direction: rtl;\n    margin-right: 17%;\n    margin-top: 3%;\n}\n\n.choosedRadio label {\n    color: white;\n}\n\n#logo {\n    width: 70%;\n    height: 95%;\n}\n\n#btn {\n    width: 100%;\n}\n\n#timer_text {\n    font-size: 2.4vw;\n}\n\n.col {\n    -ms-grid-row-align: center;\n        align-self: center;\n}\n\n#cards {\n    height: 25vw;\n}\n\n/* price div */\n\n.prices {\n    height: 600px;\n    margin: 25px;\n}\n\n/* footer */\n\n::-webkit-input-placeholder {\n    color: #f0f0f0;\n    opacity: 0.5;\n    direction: rtl;\n    font-size: 1rem;\n}\n\n::-moz-placeholder {\n    color: #f0f0f0;\n    opacity: 0.5;\n    direction: rtl;\n    font-size: 1rem;\n}\n\n::-ms-input-placeholder {\n    color: #f0f0f0;\n    opacity: 0.5;\n    direction: rtl;\n    font-size: 1rem;\n}\n\n::placeholder {\n    color: #f0f0f0;\n    opacity: 0.5;\n    direction: rtl;\n    font-size: 1rem;\n}\n\n.conflex {\n    width: 100%;\n    display: inline-flex;\n    flex-wrap: wrap;\n    border: 1px solid black;\n}\n\n.flex-direction {\n    flex-direction: row;\n}\n\n/* UI Responsive # Dev Elsadat */\n\n.RegistrationFrom {\n    margin-top: 8%;\n}\n\n.RegistrationFrom .img {\n    width: 100%;\n}\n\n.newRequest {\n    border-radius: 8px;\n    padding: 25px;\n    background-color: #73395f;\n    width: 440px;\n    margin: 0 auto;\n}\n\n.form-group {\n    text-align: right;\n    color: white;\n}\n\n.form-group input {\n    background: #fff;\n    color: #73395f;\n    direction: rtl;\n    height: 55px;\n}\n\n.form-group input::-webkit-input-placeholder {\n    color: #73395f;\n    font-size: 20px;\n}\n\n.form-group input::-moz-placeholder {\n    color: #73395f;\n    font-size: 20px;\n}\n\n.form-group input::-ms-input-placeholder {\n    color: #73395f;\n    font-size: 20px;\n}\n\n.form-group input::placeholder {\n    color: #73395f;\n    font-size: 20px;\n}\n\nselect {\n    direction: rtl;\n    height: 55px;\n    padding: 0 10px;\n}\n\n.submitForm {\n    width: 75%;\n    margin: 0 auto;\n    color: #fff;\n    background: #2cbd4f;\n    display: block;\n    height: 55px;\n    font-size: 25px;\n}\n\n.flexcon {\n    width: 80%;\n    margin: 0 auto;\n}\n\n.card {\n    width: 80%;\n    margin: 0 auto;\n    border-radius: 10%;\n    display: block;\n    text-align: center;\n    align-content: center;\n    height: 500px;\n    position: relative;\n}\n\n.circle {\n    width: 55px;\n    height: 55px;\n    line-height: 55px;\n    margin: 0 auto;\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n    position: absolute;\n    top: 50%;\n    background: #fff;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    border-radius: 50%;\n}\n\n.circles img {\n    width: 80%;\n}\n\n.imgItem {\n    height: 50%;\n}\n\n.imgItem img {\n    height: 100%;\n}\n\n.card-body {\n    margin-top: 50px;\n}\n\n.title-Price{\nfont-size: 22px;\n}\n\n/***************************************\\\n     Main Queries // phone\n  \\***************************************/\n\n@media (min-width: 300px) and (max-width: 930px) {\n    .form-group input,\n    select {\n        height: 40px;\n    }\n    .newRequest {\n        width: 100%;\n        margin: 39px auto;\n    }\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<!-- Header -->\n<nav class=\"navbar fixed-top\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\" style=\"width:100%;\">\n      <div class=\"col-3\" style=\"align-self:center;\">\n        <img src=\"../assets/btn1.png\" id=\"btn\" class=\"d-inline-block\" (click)=\"scrollToElement(request)\" alt=\"\">\n\n      </div>\n\n      <div class=\"col-6\">\n        <h5 id=\"timer_text\">الوقت المتبقي على 60% تخفيض</h5>\n        <div id=\"timer\">\n          <span *ngIf=\"clocks < 10\">0</span>{{clocks}} : <span *ngIf=\"timeLeft < 10\">0</span>{{timeLeft}} : <span\n            *ngIf=\"timeSeconds < 10\">0</span>{{timeSeconds}}\n        </div>\n      </div>\n\n\n      <div class=\"col-3\">\n        <img src=\"../assets/logo.png\" id=\"logo\" class=\"d-inline-block align-top\" alt=\"\">\n      </div>\n\n    </div>\n  </div>\n</nav>\n\n<!-- (click)=\"scrollToElement(request)\" -->\n<!-- Imgs-->\n<section class=\"RegistrationFrom\">\n\n  <div class=\"row align-items-center p-md-1\">\n    <div class=\"col-lg-4 col-md-6\">\n      <div class=\"newRequest\">\n        <form name=\"ff\" (ngSubmit)=\"ff.form.valid && submit()\" #ff=\"ngForm\" novalidate>\n          <div class=\"form-group\">\n            <label for=\"fullName\">الإسم بالكامل</label>\n            <input type=\"text\" placeholder=\"الإسم بالكامل\" name=\"name\" class=\"form-control\" required\n              [(ngModel)]=\"model.fullName\" #name=\"ngModel\" minlength=\"3\" maxlength=\"100\" />\n            <div *ngIf=\"!name.valid && (ff.submitted || name.dirty || name.touched)\" class=\"text-danger\">\n              <div [hidden]=\"!name.errors.required\">هذا الحقل مطلوب . </div>\n\n              <div [hidden]=\"!name.errors.maxlength\">هذا الحقل لا يزيد عن 100 حرف . </div>\n\n              <div [hidden]=\"!name.errors.minlength\">هذا الحقل لا يقل عن 3 حرف . </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"phone\">الهاتف</label>\n            <input type=\"tel\" placeholder=\"رقم الهاتف\" name=\"phone\" class=\"form-control\" required\n              [(ngModel)]=\"model.phone\" #phone=\"ngModel\" />\n\n            <div *ngIf=\"!phone.valid && (ff.submitted || phone.dirty || phone.touched)\" class=\"text-danger\">\n              <div [hidden]=\"!phone.errors.required\">هذا الحقل مطلوب . </div>\n\n\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"country\">الدولة</label>\n            <select class=\"form-control\" [(ngModel)]=\"country\" name=\"myCountry\" (change)=\"selectChanged()\">\n              <option value=\"0\">أختر الدولة</option>\n              <option value=\"1\">السعودية</option>\n              <option value=\"2\">الأمارات العربية المتحدة</option>\n              <option value=\"3\">عمان</option>\n              <option value=\"4\">قطر</option>\n              <option value=\"5\">البحرين</option>\n              <option value=\"6\">الكويت</option>\n              <option value=\"7\">العراق</option>\n              <option value=\"8\">الأردن</option>\n              <option value=\"9\">مصر</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"phone\">المدينه</label>\n\n            <select class=\"form-control\" #city=\"ngModel\" required [(ngModel)]=\"model.governmentId\" name=\"city\">\n              <option value=\"\">أختر المدينه</option>\n\n              <option *ngFor=\"let city of cities\" [value]=\"city.id\">{{city.nameAr}}</option>\n            </select>\n            <div *ngIf=\"!city.valid && (ff.submitted || city.dirty || city.touched)\" class=\"text-danger\">\n              <div [hidden]=\"!city.errors.required\">هذا الحقل مطلوب . </div>\n            </div>\n          </div>\n            <button type=\"submit\" class=\"btn submitForm \" [disabled]=\"!ff.valid\"\n            >تأكيد الطلب</button>\n        </form>\n      </div>\n    </div>\n\n\n\n\n    <div class=\"col-lg-8 col-md-6\">\n      <img class=\"img\" src=\"../assets/content1.png\">\n\n    </div>\n\n\n  </div>\n  <img src=\"../assets/content2.jpg\" width=\"100%\" (click)=\"scrollToElement(request)\">\n  <img src=\"../assets/content3.jpg\" width=\"100%\">\n</section>\n\n\n<div class=\"prices\" #price>\n\n\n  <div id=\"cards\">\n\n\n    <div class=\"d-flex mb-4 mt-4 align-items-center\" >\n      <div class=\"col-8 offset-1 \">\n        <select class=\"custom-select\" [(ngModel)]=\"country\" (change)=\"selectChanged()\">\n          <option value=\"0\">الدولة</option>\n          <option value=\"1\">السعودية</option>\n          <option value=\"2\">الأمارات العربية المتحدة</option>\n          <option value=\"3\">عمان</option>\n          <option value=\"4\">قطر</option>\n          <option value=\"5\">البحرين</option>\n          <option value=\"6\">الكويت</option>\n          <option value=\"7\">العراق</option>\n          <option value=\"8\">الأردن</option>\n          <option value=\"9\">مصر</option>\n        </select>\n\n      </div>\n      <p class=\"title-Price mb-0\"> عروض الأسعار\n      </p>\n\n    </div>\n\n    <div class=\"flexcon\">\n      <div class=\"row\">\n        <div class=\"col-lg-3 col-sm-6\" *ngFor=\"let item of offers;let i=index\">\n          <div  class=\"shadow card\">\n            <div class=\"imgItem\">\n              <img [src]=\"item.image\" class=\"card-img-top\" alt=\"...\">\n            </div>\n            <div class=\"circle\">\n              <span class=\"price\">\n                {{item.currentPrice}}{{item.currencyLetter}}\n              </span>\n            </div>\n    \n            <div class=\"card-body\">\n    \n              <p class=\"p-sm\">\n                <span class=\"price\" *ngIf=\"i==0\">\n                  عبوة واحدة بعد الخصم\n                </span>\n                <span class=\"price\" *ngIf=\"i==1\">\n                  عبوتين بعد الخصم\n                </span>\n                <span class=\"price\" *ngIf=\"i==2\">\n                  ثلاث عبوات + عبوة هدية\n                </span>\n                <span class=\"price\" *ngIf=\"i==3\">\n                  خمس عبوات + عبوة هدية\n                </span>\n                {{item.currentPrice}} {{item.currency}}\n                <br>\n                <del>\n                  بدلا من {{item.oldPrice}} {{item.currency}}\n                </del>\n                <br>\n                <span *ngIf=\"item.charge != 0\">\n                  <!-- +{{}} {{}} شحن -->\n                  شحن {{item.charge}} {{item.currency}} +\n                </span>\n                <span *ngIf=\"item.charge == 0\">\n                  شحن مجاني\n                </span>\n              </p>\n    \n              <button (click)=\"orderOffer(i);scrollToElement(request)\" class=\"btn\"\n                style=\"background-color: #2cbd4f; color:white; border-radius:30px; padding:4% 10%;\">اطلب\n                الآن</button>\n            </div>\n    \n    \n          </div>\n        </div>\n        \n      </div>\n  \n    </div>\n\n  </div>\n</div>\n\n\n\n<div style=\"background-color: #803C64;padding:5%;font-size: 1rem\">\n\n  <div class=\"content\" #request>\n    <form name=\"f\" (ngSubmit)=\"f.form.valid && submit()\" #f=\"ngForm\" novalidate>\n      <div class=\"row align-items-center\">\n\n        <div class=\"col-6\">\n          <button type=\"submit\" class=\"btn  large\" [disabled]=\"!f.valid\"\n            style=\"padding: 2% 20%; font-weight:bold; background-color: #2cbd4f; color:white;\">تأكيد\n            الطلب</button>\n        </div>\n\n        <div class=\"col-6\">\n\n\n          <div class=\"form-group\">\n            <label for=\"fullName\">الإسم بالكامل</label>\n\n            <input type=\"text\" placeholder=\"الإسم بالكامل\" name=\"name\" class=\"form-control\" required\n              [(ngModel)]=\"model.fullName\" #name=\"ngModel\" minlength=\"3\" maxlength=\"100\" />\n\n\n\n            <div *ngIf=\"!name.valid && (f.submitted || name.dirty || name.touched)\" class=\"text-danger\">\n              <div [hidden]=\"!name.errors.required\">هذا الحقل مطلوب . </div>\n\n              <div [hidden]=\"!name.errors.maxlength\">هذا الحقل لا يزيد عن 100 حرف . </div>\n\n              <div [hidden]=\"!name.errors.minlength\">هذا الحقل لا يقل عن 3 حرف . </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"address\">العنوان</label>\n            <input type=\"text\" placeholder=\"العنوان بالتفصيل\" name=\"address\" class=\"form-control\" required\n              [(ngModel)]=\"model.address\" #address=\"ngModel\" minlength=\"3\" maxlength=\"500\" />\n\n\n\n            <div *ngIf=\"!address.valid && (f.submitted || address.dirty || address.touched)\" class=\"text-danger\">\n              <div [hidden]=\"!address.errors.required\">هذا الحقل مطلوب . </div>\n\n              <div [hidden]=\"!address.errors.maxlength\">هذا الحقل لا يزيد عن 500 حرف . </div>\n\n              <div [hidden]=\"!address.errors.minlength\">هذا الحقل لا يقل عن 3 حرف . </div>\n            </div>\n\n          </div>\n          <div class=\"form-group\">\n            <label for=\"phone\">الهاتف</label>\n            <input type=\"tel\" placeholder=\"رقم الهاتف\" name=\"phone\" class=\"form-control\" required\n              [(ngModel)]=\"model.phone\" #phone=\"ngModel\" />\n\n            <div *ngIf=\"!phone.valid && (f.submitted || phone.dirty || phone.touched)\" class=\"text-danger\">\n              <div [hidden]=\"!phone.errors.required\">هذا الحقل مطلوب . </div>\n\n\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"phone\">المدينه</label>\n\n            <select class=\"form-control\" #city=\"ngModel\" required [(ngModel)]=\"model.governmentId\" name=\"city\">\n              <option value=\"\">أختر المدينه</option>\n\n              <option *ngFor=\"let city of cities\" [value]=\"city.id\">{{city.nameAr}}</option>\n            </select>\n            <div *ngIf=\"!city.valid && (f.submitted || city.dirty || city.touched)\" class=\"text-danger\">\n              <div [hidden]=\"!city.errors.required\">هذا الحقل مطلوب . </div>\n\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n      <div class=\"row choosedRadio\">\n        <!-- Default inline 1-->\n\n        <div class=\"custom-control custom-radio custom-control-inline\">\n          <input type=\"radio\" class=\"custom-control-input\" id=\"defaultInline1\" name=\"inlineDefaultRadiosExample\"\n            [value]=\"radioValues[0]\" [(ngModel)]=\"template\" mdbInput>\n          <label class=\"custom-control-label\" for=\"defaultInline1\">1 عبوة</label>\n\n        </div>\n\n        <!-- Default inline 2-->\n        <div class=\"custom-control custom-radio custom-control-inline\">\n          <input type=\"radio\" class=\"custom-control-input\" id=\"defaultInline2\" name=\"inlineDefaultRadiosExample\"\n            [(ngModel)]=\"template\" [value]=\"radioValues[1]\" mdbInput>\n          <label class=\"custom-control-label\" for=\"defaultInline2\">2 عبوة</label>\n        </div>\n\n        <!-- Default inline 3-->\n        <div class=\"custom-control custom-radio custom-control-inline\">\n          <input type=\"radio\" class=\"custom-control-input\" id=\"defaultInline3\" name=\"inlineDefaultRadiosExample\"\n            [value]=\"radioValues[2]\" [(ngModel)]=\"template\" mdbInput>\n          <label class=\"custom-control-label\" for=\"defaultInline3\">3 عبوة</label>\n        </div>\n\n        <!-- Default inline 4-->\n        <div class=\"custom-control custom-radio custom-control-inline\">\n          <input type=\"radio\" class=\"custom-control-input\" id=\"defaultInline4\" name=\"inlineDefaultRadiosExample\"\n            [value]=\"radioValues[3]\" [(ngModel)]=\"template\" mdbInput>\n          <label class=\"custom-control-label\" for=\"defaultInline4\">5 عبوة</label>\n        </div>\n\n      </div>\n\n    </form>\n  </div>\n</div>\n\n\n<!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template1)\">Create template modal</button>\n \n<ng-template #template1>\n\n  <div class=\"modal-body\">\n    <img src=\"assets/success.jpg\" style=\"width: 103%;\">\n  </div>\n</ng-template> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, ModalContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContentComponent", function() { return ModalContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _offers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offers.service */ "./src/app/offers.service.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Config */ "./src/app/Config.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
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
    function AppComponent(modalService, spinner, dataService, offersService) {
        var _this = this;
        this.modalService = modalService;
        this.spinner = spinner;
        this.dataService = dataService;
        this.offersService = offersService;
        this.title = 'seram';
        this.scroll = false;
        this.offers = [];
        this.cities = [];
        this.country = 1;
        this.clocks = 19;
        this.timeLeft = 59;
        this.timeSeconds = 59;
        this.radioValues = [0, 1, 2, 3];
        this.templateUnchecked = false;
        this.templateChecked = true;
        this.template = 1;
        this.model = {
            //id: 0,
            fullName: '',
            phone: '',
            email: '',
            governmentId: '',
            address: '',
            websiteId: "edd43af7-4862-4c0e-92bd-08d727e611d4",
            age: 0,
            gender: 1,
            notes: '',
            total: 0,
            discountPercentage: 0,
            totalAfterDiscount: 0,
            paymentMethod: 20,
            // shippingCompanyId: 0,
            // shippingCompanyCode: '',
            requestDetails: [
                {
                    productId: 1,
                    count: 0,
                    price: 0,
                    total: 0
                }
            ]
        };
        this.startTimer();
        this.offers = this.offersService.getoffers(1).slice();
        this.getCities();
        this.dataService
            .getAll(_Config__WEBPACK_IMPORTED_MODULE_3__["Config"].websites)
            .subscribe(function (data) {
            _this.model.websiteId = data.websiteId;
            _this.model.requestDetails[0].productId = data.productId;
            // this.orderOffer(1);//choose order 2 by default
        }, function (error) {
            console.log(error);
        });
    }
    AppComponent.prototype.orderOffer = function (index) {
        this.template = this.radioValues[index];
        var price = this.offersService.getoffers(0)[index].currentPrice;
        this.model.total = price;
        this.model.totalAfterDiscount = price;
        this.model.requestDetails[0].price = price;
        this.model.requestDetails[0].total = price;
        this.model.requestDetails[0].count = (index == 0) ? index + 20 : index * 2;
    };
    AppComponent.prototype.scrollToElement = function ($element) {
        $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    };
    AppComponent.prototype.selectChanged = function () {
        //this.spinner.show();
        this.getCities();
        if (this.country == 7 || this.country == 8 || this.country == 9 || this.country == 0)
            this.offers = this.offersService.getoffers(0).slice();
        else
            this.offers = this.offersService.getoffers(this.country).slice();
    };
    AppComponent.prototype.getCities = function () {
        var _this = this;
        this.dataService.getAll(_Config__WEBPACK_IMPORTED_MODULE_3__["Config"].GetGovernmentsOfCountry + this.offersService.countryId[Number(this.country)]).subscribe(function (data) {
            console.log(data);
            _this.cities = data;
        }, function (error) {
            alert('عفوا يرجى المحاوله لاحقا.');
        });
    };
    AppComponent.prototype.submit = function () {
        var _this = this;
        this.orderOffer(this.template);
        console.log(this.model);
        if (this.model.total != 0)
            this.dataService.add(this.model, _Config__WEBPACK_IMPORTED_MODULE_3__["Config"].requestsAddEdit).subscribe(function (data) {
                console.log(data);
                //this.submitted = false;
                _this.openModalWithComponent();
            }, function (error) {
                alert('عفوا يرجى المحاوله لاحقا.');
            });
        else
            alert('من فضلك اختر احد العروض اولا');
    };
    AppComponent.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            if (_this.timeSeconds > 0) {
                _this.timeSeconds--;
            }
            else if (_this.timeSeconds == 0) {
                if (_this.timeLeft > 0) {
                    _this.timeLeft--;
                    _this.timeSeconds = 59;
                }
                else {
                    if (_this.clocks > 0) {
                        _this.clocks--;
                        _this.timeLeft = 59;
                        _this.timeSeconds = 59;
                    }
                    else {
                        _this.timeLeft = 59;
                        _this.timeSeconds = 59;
                        _this.clocks = 20;
                        _this.startTimer();
                    }
                }
            }
        }, 1000);
    };
    AppComponent.prototype.openModalWithComponent = function () {
        this.bsModalRef = this.modalService.show(ModalContentComponent);
        this.bsModalRef.content.closeBtnName = 'Close';
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _offers_service__WEBPACK_IMPORTED_MODULE_2__["OffersService"]])
    ], AppComponent);
    return AppComponent;
}());

/* This is a component which we pass in modal*/
var ModalContentComponent = /** @class */ (function () {
    function ModalContentComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.list = [];
    }
    ModalContentComponent.prototype.ngOnInit = function () {
        this.list.push('PROFIT!!!');
    };
    ModalContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modal-content',
            template: "\n\n  <div class=\"modal-body\">\n    <img src=\"assets/success.jpg\" style=\"width: 103%;\">\n  </div>\n\n  "
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"]])
    ], ModalContentComponent);
    return ModalContentComponent;
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _offers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./offers.service */ "./src/app/offers.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _app_component__WEBPACK_IMPORTED_MODULE_2__["ModalContentComponent"]
            ],
            entryComponents: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["ModalContentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _offers_service__WEBPACK_IMPORTED_MODULE_7__["OffersService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8', "Access-Control-Allow-Origin": "*", 'accept': 'application/json' });
    }
    DataService.prototype.getAll = function (url) {
        return this.http.get(url); //;//.map(res =>res);
    };
    DataService.prototype.All = function (obj, url) {
        var search = JSON.stringify(obj);
        return this.http.post(url, search, { headers: this.headers });
        //;//.map(res => {
        //  console.log("res", res);
        //  return res;
        //});
    };
    DataService.prototype.getSingle = function (id, url) {
        return this.http.get(url + id, { headers: this.headers }); //.map(res =>res);
    };
    DataService.prototype.add = function (item, url) {
        var toAdd = JSON.stringify(item);
        return this.http.post(url, toAdd, { headers: this.headers }); //.map(res =>res);
    };
    DataService.prototype.handleError = function (error) {
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
            // Server or connection error happened
            if (!navigator.onLine) {
                // Handle offline error
                alert("No Internet Connection");
            }
            else {
                // Handle Http Error (error.status === 403, 404...)
                if (error.status === 400) {
                    /// check if the error is an Object or a Single String
                    if (typeof error.error === "object") {
                        var validationErrorDictionary = error.error;
                        /// define empty array for  error msgs
                        var allErrorsMsg = [];
                        for (var fieldName in validationErrorDictionary) {
                            if (validationErrorDictionary.hasOwnProperty(fieldName)) {
                                // push each error msg to the array
                                allErrorsMsg.push(validationErrorDictionary[fieldName]);
                                console.log(validationErrorDictionary[fieldName]);
                            }
                        }
                        // show toast for saved msgs
                        alert(allErrorsMsg.toString());
                    }
                    else {
                        console.log(error.error);
                        alert(error.error);
                    }
                }
                if (error.status === 500) {
                    alert("عفوًا حدث خطأ أثناء الإتصال بالخادم.");
                }
                if (error.status === 404) {
                    alert("عفوًا حدث خطأ أثناء الإتصال بالخادم.");
                }
                if (error.status === 204) {
                    alert("عفوًا حدث خطأ أثناء الإتصال بالخادم.");
                }
            }
        }
        else {
            // Handle Client Error (Angular Error, ReferenceError...)
        }
        // Log the error anyway
        console.error("It happens: ", error);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/offers.service.ts":
/*!***********************************!*\
  !*** ./src/app/offers.service.ts ***!
  \***********************************/
/*! exports provided: OffersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersService", function() { return OffersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OffersService = /** @class */ (function () {
    function OffersService() {
        this.offers = {
            '1': [
                {
                    image: '../assets/mask1.png',
                    currentPrice: '146',
                    // currencyLetter: 'SR',
                    oldPrice: '292',
                    charge: '38',
                    currency: 'ريال',
                },
                {
                    image: '../assets/52156- 2.png',
                    currentPrice: '259',
                    // currencyLetter: 'SR',
                    oldPrice: '518',
                    charge: '38',
                    currency: 'ريال',
                },
                {
                    image: '../assets/52156- 4.png',
                    currentPrice: '409',
                    // currencyLetter: 'SR',
                    oldPrice: '742',
                    charge: '38',
                    currency: 'ريال',
                },
                {
                    image: '../assets/mask.png',
                    currentPrice: '559',
                    // currencyLetter: 'SR',
                    oldPrice: '1192',
                    charge: '0',
                    currency: 'ريال',
                }
            ],
            '2': [
                {
                    image: '../assets/mask1.png',
                    currentPrice: '144',
                    // currencyLetter: 'د.إ',
                    oldPrice: '286',
                    charge: '37',
                    currency: 'درهم',
                },
                {
                    image: '../assets/52156- 2.png',
                    currentPrice: '254',
                    // currencyLetter: 'د.إ',
                    oldPrice: '507',
                    charge: '37',
                    currency: 'درهم',
                },
                {
                    image: '../assets/52156- 4.png',
                    currentPrice: '400',
                    // currencyLetter: 'د.إ',
                    oldPrice: '727',
                    charge: '37',
                    currency: 'درهم',
                },
                {
                    image: '../assets/mask.png',
                    currentPrice: '547',
                    // currencyLetter: 'د.إ',
                    oldPrice: '1168',
                    charge: '0',
                    currency: 'درهم',
                }
            ],
            '3': [
                {
                    image: '../assets/mask1.png',
                    currentPrice: '15',
                    // // currencyLetter: 'OMR',
                    oldPrice: '30',
                    charge: '4',
                    currency: 'ريال',
                },
                {
                    image: '../assets/52156- 2.png',
                    currentPrice: '27',
                    // // currencyLetter: 'OMR',
                    oldPrice: '53',
                    charge: '4',
                    currency: 'ريال',
                },
                {
                    image: '../assets/52156- 4.png',
                    currentPrice: '42',
                    // // currencyLetter: 'OMR',
                    oldPrice: '76',
                    charge: '4',
                    currency: 'ريال',
                },
                {
                    image: '../assets/mask.png',
                    currentPrice: '57',
                    // currencyLetter: 'OMR',
                    oldPrice: '122',
                    charge: '0',
                    currency: 'ريال',
                }
            ],
            '4': [
                {
                    image: '../assets/mask1.png',
                    currentPrice: '142',
                    // currencyLetter: 'Q',
                    oldPrice: '284',
                    charge: '36',
                    currency: 'ريال',
                },
                {
                    image: '../assets/52156- 2.png',
                    currentPrice: '251',
                    // currencyLetter: 'Q',                  
                    oldPrice: '500',
                    charge: '36',
                    currency: 'ريال',
                },
                {
                    image: '../assets/52156- 4.png',
                    currentPrice: '397',
                    // currencyLetter: 'Q',
                    oldPrice: '720',
                    charge: '36',
                    currency: 'ريال',
                },
                {
                    image: '../assets/mask.png',
                    currentPrice: '542',
                    // currencyLetter: 'Q',                  
                    oldPrice: '1157',
                    charge: '0',
                    currency: 'ريال',
                }
            ],
            '5': [
                {
                    image: '../assets/mask1.png',
                    currentPrice: '15',
                    // currencyLetter: 'B',
                    oldPrice: '29',
                    charge: '4',
                    currency: 'دينار',
                },
                {
                    image: '../assets/52156- 2.png',
                    currentPrice: '27',
                    // currencyLetter: 'B',
                    oldPrice: '52',
                    charge: '4',
                    currency: 'دينار',
                },
                {
                    image: '../assets/52156- 4.png',
                    currentPrice: '42',
                    // currencyLetter: 'B',
                    oldPrice: '74',
                    charge: '4',
                    currency: 'دينار',
                },
                {
                    image: '../assets/mask.png',
                    currentPrice: '57',
                    // currencyLetter: 'B',
                    oldPrice: '120',
                    charge: '0',
                    currency: 'دينار',
                }
            ],
            '6': [
                {
                    image: '../assets/mask1.png',
                    currentPrice: '12',
                    // currencyLetter: 'K',
                    oldPrice: '24',
                    charge: '3',
                    currency: 'دينار',
                },
                {
                    image: '../assets/52156- 2.png',
                    currentPrice: '21',
                    // currencyLetter: 'K',
                    oldPrice: '42',
                    charge: '3',
                    currency: 'دينار',
                },
                {
                    image: '../assets/52156- 4.png',
                    currentPrice: '42',
                    // currencyLetter: 'K',
                    oldPrice: '60',
                    charge: '3',
                    currency: 'دينار',
                },
                {
                    image: '../assets/mask.png',
                    currentPrice: '57',
                    // currencyLetter: 'K',
                    oldPrice: '96',
                    charge: '0',
                    currency: 'دينار',
                }
            ],
            '0': [
                {
                    image: '../assets/mask1.png',
                    currentPrice: '39',
                    // currencyLetter: '$',
                    oldPrice: '78',
                    charge: '10',
                    currency: 'دولار',
                },
                {
                    image: '../assets/52156- 2.png',
                    currentPrice: '69',
                    // currencyLetter: '$',
                    oldPrice: '138',
                    charge: '10',
                    currency: 'دولار',
                },
                {
                    image: '../assets/52156- 4.png',
                    currentPrice: '109',
                    // currencyLetter: '$',
                    oldPrice: '198',
                    charge: '10',
                    currency: 'دولار',
                },
                {
                    image: '../assets/mask.png',
                    currentPrice: '149',
                    // currencyLetter: '$',
                    oldPrice: '318',
                    charge: '0',
                    currency: 'دولار',
                }
            ]
        };
        this.countryId = [0, 4, 8, 1, 5, 15, 9, 13, 12, 14];
    }
    OffersService.prototype.getoffers = function (index) {
        return this.offers[index];
    };
    OffersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], OffersService);
    return OffersService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Mac Data/projects/epi-smart 2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map