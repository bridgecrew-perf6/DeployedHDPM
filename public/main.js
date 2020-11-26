(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/GgB":
/*!**********************************************!*\
  !*** ./src/app/services/gentoken.service.ts ***!
  \**********************************************/
/*! exports provided: GentokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GentokenService", function() { return GentokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class GentokenService {
    constructor(http) {
        this.http = http;
    }
    addToken(tCurrent) {
        return this.http.post(`/tokens/generate`, tCurrent);
    }
    getToken(token) {
        console.log(token);
        return this.http.post('/tokens/get', { token: token });
    }
    deleteToken(token) {
        return this.http.post('/tokens/delete', { token: token });
    }
}
GentokenService.ɵfac = function GentokenService_Factory(t) { return new (t || GentokenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GentokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GentokenService, factory: GentokenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GentokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! A:\AppDeployV3\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "14Ff":
/*!*******************************************************************************!*\
  !*** ./src/app/components/viewpatientdetails/viewpatientdetails.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ViewpatientdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewpatientdetailsComponent", function() { return ViewpatientdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _patientClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../patientClass */ "h+Cs");
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navbar.service */ "n2q6");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/patient.service */ "7wfR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");












function ViewpatientdetailsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Personal Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hospital");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Nationality");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "National ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Contact Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Height");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Blood Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Known Allergies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.currPatient.Hospital);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.currPatient.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.currPatient.Age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.currPatient.Gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.currPatient.Nationality);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.currPatient.n_ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.currPatient.contactInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.currPatient.Height);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.currPatient.bldGrp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.currPatient.kAllergies);
} }
function ViewpatientdetailsComponent_div_3_mat_label_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.currPatient.oKidneyDisease, "");
} }
function ViewpatientdetailsComponent_div_3_mat_label_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hypertension");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewpatientdetailsComponent_div_3_mat_label_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Diabetes Mellitus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewpatientdetailsComponent_div_3_mat_label_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Epilepsy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewpatientdetailsComponent_div_3_mat_label_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.currPatient.coMorbOther, " ");
} }
function ViewpatientdetailsComponent_div_3_mat_label_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](", \u00A0 ", ctx_r11.currPatient.prevTrGS, " ");
} }
function ViewpatientdetailsComponent_div_3_mat_label_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](", \u00A0 ", ctx_r12.currPatient.fitForTrReason, " ");
} }
function ViewpatientdetailsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Medical History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Start of Dialysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Original Kidney Disease");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ViewpatientdetailsComponent_div_3_mat_label_12_Template, 2, 1, "mat-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Co-Moribidities");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ViewpatientdetailsComponent_div_3_mat_label_19_Template, 2, 0, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ViewpatientdetailsComponent_div_3_mat_label_20_Template, 4, 0, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ViewpatientdetailsComponent_div_3_mat_label_21_Template, 4, 0, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ViewpatientdetailsComponent_div_3_mat_label_22_Template, 4, 1, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Previous Transplantation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ViewpatientdetailsComponent_div_3_mat_label_29_Template, 2, 1, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Fit For Transplantation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ViewpatientdetailsComponent_div_3_mat_label_36_Template, 2, 1, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Potential Relative Donors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.dofDialysis);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currPatient.oKidneyDisease != "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.currPatient.otherKD);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currPatient.morbHype);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currPatient.morbDM);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currPatient.morbEpi);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currPatient.coMorbOther);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.currPatient.previousTr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currPatient.previousTr == "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.currPatient.fitForTr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currPatient.fitForTr == "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.currPatient.potentialRDonors);
} }
function ViewpatientdetailsComponent_div_4_mat_label_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.currPatient.currentAccess, "");
} }
function ViewpatientdetailsComponent_div_4_mat_label_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Insufficiency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewpatientdetailsComponent_div_4_mat_label_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Infection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewpatientdetailsComponent_div_4_mat_label_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Aneurysmal Dilatation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewpatientdetailsComponent_div_4_mat_label_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Difficult Cannulation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewpatientdetailsComponent_div_4_mat_label_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r18.currPatient.compOther, "");
} }
function ViewpatientdetailsComponent_div_4_mat_label_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 1 - ", ctx_r19.currPatient.previousAccess1, " ");
} }
function ViewpatientdetailsComponent_div_4_mat_label_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 2 - ", ctx_r20.currPatient.previousAccess2, " ");
} }
function ViewpatientdetailsComponent_div_4_mat_label_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 3 - ", ctx_r21.currPatient.previousAccess3, " ");
} }
function ViewpatientdetailsComponent_div_4_mat_label_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 4 - ", ctx_r22.currPatient.previousAccess4, " ");
} }
function ViewpatientdetailsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Vascular Access");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Current Access");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ViewpatientdetailsComponent_div_4_mat_label_7_Template, 2, 1, "mat-label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Date of Access Creation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Complications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ViewpatientdetailsComponent_div_4_mat_label_19_Template, 2, 0, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ViewpatientdetailsComponent_div_4_mat_label_20_Template, 4, 0, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ViewpatientdetailsComponent_div_4_mat_label_21_Template, 4, 0, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ViewpatientdetailsComponent_div_4_mat_label_22_Template, 4, 0, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ViewpatientdetailsComponent_div_4_mat_label_23_Template, 4, 1, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Previous Access(es)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ViewpatientdetailsComponent_div_4_mat_label_28_Template, 2, 1, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ViewpatientdetailsComponent_div_4_mat_label_29_Template, 4, 1, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ViewpatientdetailsComponent_div_4_mat_label_30_Template, 4, 1, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ViewpatientdetailsComponent_div_4_mat_label_31_Template, 4, 1, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.currPatient.currentAccess != "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.currPatient.cAOther);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.dofAC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.currPatient.compInsuf);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.currPatient.compInf);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.currPatient.compAD);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.currPatient.compDC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.currPatient.compDC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.currPatient.previousAccess1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.currPatient.previousAccess2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.currPatient.previousAccess3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.currPatient.previousAccess4);
} }
function ViewpatientdetailsComponent_div_5_mat_label_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Initial: ", ctx_r23.currPatient.hInit, "");
} }
function ViewpatientdetailsComponent_div_5_mat_label_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Maintenance: ", ctx_r24.currPatient.hMaint, "");
} }
function ViewpatientdetailsComponent_div_5_mat_label_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Dosage: ", ctx_r25.currPatient.LMWHval, "");
} }
function ViewpatientdetailsComponent_div_5_mat_label_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Reason: ", ctx_r26.currPatient.hInit, "");
} }
function ViewpatientdetailsComponent_div_5_mat_label_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " - Headache");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewpatientdetailsComponent_div_5_mat_label_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0\u00A0 - Hypoglycemia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewpatientdetailsComponent_div_5_mat_label_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0\u00A0 - Hypotension");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewpatientdetailsComponent_div_5_mat_label_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0\u00A0 - Hypertension");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewpatientdetailsComponent_div_5_mat_label_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0\u00A0 - Muscle Cramps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewpatientdetailsComponent_div_5_mat_label_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0\u00A0 - Abdominal Colic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewpatientdetailsComponent_div_5_mat_label_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " - Vomiting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewpatientdetailsComponent_div_5_mat_label_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0\u00A0 - Seizure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewpatientdetailsComponent_div_5_mat_label_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0\u00A0 - Hypersensitivity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewpatientdetailsComponent_div_5_mat_label_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0\u00A0 - Itching");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewpatientdetailsComponent_div_5_mat_label_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0\u00A0 - ", ctx_r37.currPatient.dCompOther, " ");
} }
function ViewpatientdetailsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dialysis Prescription");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Frequency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Dialyser");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Anticoagulation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ViewpatientdetailsComponent_div_5_mat_label_25_Template, 4, 1, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ViewpatientdetailsComponent_div_5_mat_label_26_Template, 4, 1, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ViewpatientdetailsComponent_div_5_mat_label_27_Template, 4, 1, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ViewpatientdetailsComponent_div_5_mat_label_28_Template, 4, 1, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Average Weight Gain");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Dry Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Dialysis Complications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ViewpatientdetailsComponent_div_5_mat_label_43_Template, 2, 0, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ViewpatientdetailsComponent_div_5_mat_label_44_Template, 2, 0, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ViewpatientdetailsComponent_div_5_mat_label_45_Template, 2, 0, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ViewpatientdetailsComponent_div_5_mat_label_46_Template, 2, 0, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ViewpatientdetailsComponent_div_5_mat_label_47_Template, 2, 0, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ViewpatientdetailsComponent_div_5_mat_label_48_Template, 2, 0, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ViewpatientdetailsComponent_div_5_mat_label_51_Template, 2, 0, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ViewpatientdetailsComponent_div_5_mat_label_52_Template, 2, 0, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ViewpatientdetailsComponent_div_5_mat_label_53_Template, 2, 0, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ViewpatientdetailsComponent_div_5_mat_label_54_Template, 2, 0, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ViewpatientdetailsComponent_div_5_mat_label_55_Template, 2, 1, "mat-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.currPatient.Frequency, " sessions/week");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.currPatient.Duration, " hr(s)/session");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.currPatient.Dialyser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.currPatient.antiCoagulation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currPatient.antiCoagulation == "Heparin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currPatient.antiCoagulation == "Heparin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currPatient.antiCoagulation == "LMWH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currPatient.antiCoagulation == "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.currPatient.avgWtGain, " (between sessions)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.currPatient.dryWt, " kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currPatient.dCompHead);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currPatient.dCompHG);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currPatient.dCompHOT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currPatient.dCompHET);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currPatient.dCompMC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currPatient.dCompAC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currPatient.dCompVom);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currPatient.dCompSZ);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currPatient.dCompHS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currPatient.dCompIt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currPatient.dCompOther);
} }
function ViewpatientdetailsComponent_div_6_h2_169_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "HCV RNA PCR:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewpatientdetailsComponent_div_6_div_170_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.currPatient.hcvPCR);
} }
function ViewpatientdetailsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "CBC:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "HB:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "WBC:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Platelets:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Coagulation:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "PT:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "PPT:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "INR:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Chemistry:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "S. Creatinine:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "S. Urea:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "S. Sodium:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "S. Potassium:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "S. Calcium:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "S. Phosphorus:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "S. Magnesium:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "S. Albumin:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "AST:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "ALT:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Alk. Phosphatase:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Other:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Iron Profile:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "S. Iron:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "S. Ferritin:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "TIBC:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "TSAT:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Hormones:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "PTH:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Vitamin D:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Serology:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "HBs Ag:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "HCV Ab:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](169, ViewpatientdetailsComponent_div_6_h2_169_Template, 2, 0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](170, ViewpatientdetailsComponent_div_6_div_170_Template, 3, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "HIV I & II:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Other:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Lab Results (Date: ", ctx_r4.dofLab, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.currPatient.cbcHB);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.currPatient.cbcWBC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.currPatient.cbcPlatelets);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.currPatient.coagPT, " sec");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.currPatient.coagPPT, " sec");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.currPatient.coagINR);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.currPatient.chemCre, " mg%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.currPatient.chemUrea, " mg%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.currPatient.chemSod, " mmoL/L");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.currPatient.chemPot, " mmoL/L");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.currPatient.chemCal, " mg%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.currPatient.chemPhos, " mg%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.currPatient.chemMag, " mg%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.currPatient.chemAlb, " mg%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.currPatient.chemAST, " U/L");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.currPatient.chemALT, " U/L");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.currPatient.chemPhos, " U/L");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.currPatient.chemOther);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.currPatient.Siron, " umol/L");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.currPatient.Sferitin, " ng/mL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.currPatient.TIBC, " umol/L");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.currPatient.TSAT, " %");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.currPatient.hormPTH, " Pmol/L");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.currPatient.hormVITD, " ng/L");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.currPatient.hbsAg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.currPatient.hcvAb);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.currPatient.hcvAb == "Positive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.currPatient.hcvAb == "Positive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.currPatient.hivI_II);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.currPatient.othrSer);
} }
function ViewpatientdetailsComponent_div_7_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Medication 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r40.currPatient.cMD1);
} }
function ViewpatientdetailsComponent_div_7_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Medication 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r41.currPatient.cMD2);
} }
function ViewpatientdetailsComponent_div_7_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Medication 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.currPatient.cMD3);
} }
function ViewpatientdetailsComponent_div_7_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Medication 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r43.currPatient.cMD4);
} }
function ViewpatientdetailsComponent_div_7_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Medication 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r44.currPatient.cMD5);
} }
function ViewpatientdetailsComponent_div_7_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Medication 6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r45.currPatient.cMD6);
} }
function ViewpatientdetailsComponent_div_7_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Medication 7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r46.currPatient.cMD7);
} }
function ViewpatientdetailsComponent_div_7_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Medication 8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r47.currPatient.cMD8);
} }
function ViewpatientdetailsComponent_div_7_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Medication 9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r48.currPatient.cMD9);
} }
function ViewpatientdetailsComponent_div_7_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Medication 10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r49.currPatient.cMD10);
} }
function ViewpatientdetailsComponent_div_7_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Medication 11");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r50.currPatient.cMD11);
} }
function ViewpatientdetailsComponent_div_7_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Medication 12");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r51.currPatient.cMD12);
} }
function ViewpatientdetailsComponent_div_7_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Medication 13");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r52.currPatient.cMD13);
} }
function ViewpatientdetailsComponent_div_7_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Medication 14");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r53.currPatient.cMD14);
} }
function ViewpatientdetailsComponent_div_7_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Medication 15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r54.currPatient.cMD15);
} }
function ViewpatientdetailsComponent_div_7_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Medication 16");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r55.currPatient.cMD16);
} }
function ViewpatientdetailsComponent_div_7_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Vaccination Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r56.dOfHepBV);
} }
function ViewpatientdetailsComponent_div_7_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Vaccination Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r57.dOfInfV);
} }
function ViewpatientdetailsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Current Medication");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ViewpatientdetailsComponent_div_7_div_6_Template, 6, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ViewpatientdetailsComponent_div_7_div_7_Template, 6, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ViewpatientdetailsComponent_div_7_div_9_Template, 6, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ViewpatientdetailsComponent_div_7_div_10_Template, 6, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ViewpatientdetailsComponent_div_7_div_12_Template, 6, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ViewpatientdetailsComponent_div_7_div_13_Template, 6, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ViewpatientdetailsComponent_div_7_div_15_Template, 6, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ViewpatientdetailsComponent_div_7_div_16_Template, 6, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ViewpatientdetailsComponent_div_7_div_18_Template, 6, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ViewpatientdetailsComponent_div_7_div_19_Template, 6, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ViewpatientdetailsComponent_div_7_div_21_Template, 6, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ViewpatientdetailsComponent_div_7_div_22_Template, 6, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ViewpatientdetailsComponent_div_7_div_24_Template, 6, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ViewpatientdetailsComponent_div_7_div_25_Template, 6, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ViewpatientdetailsComponent_div_7_div_27_Template, 6, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ViewpatientdetailsComponent_div_7_div_28_Template, 6, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Hepatitus B Vaccination:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Influenza Vaccination:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ViewpatientdetailsComponent_div_7_div_45_Template, 6, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ViewpatientdetailsComponent_div_7_div_46_Template, 6, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.currPatient.cMD1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.currPatient.cMD2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.currPatient.cMD3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.currPatient.cMD4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.currPatient.cMD5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.currPatient.cMD6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.currPatient.cMD7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.currPatient.cMD8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.currPatient.cMD9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.currPatient.cMD10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.currPatient.cMD11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.currPatient.cMD12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.currPatient.cMD13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.currPatient.cMD14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.currPatient.cMD15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.currPatient.cMD16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.currPatient.HepBV);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.currPatient.InfV);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.currPatient.HepBV == "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.currPatient.InfV == "Yes");
} }
class ViewpatientdetailsComponent {
    constructor(nav, patientSrvc, router, _activatedRoute) {
        this.nav = nav;
        this.patientSrvc = patientSrvc;
        this.router = router;
        this._activatedRoute = _activatedRoute;
        this.currPatient = new _patientClass__WEBPACK_IMPORTED_MODULE_1__["PatientObj"];
        this.page = 1;
    }
    ngOnInit() {
        this.nav.show();
        this._activatedRoute.params.subscribe(parameter => {
            this.id = parameter['id'];
        });
        this.getPDetails();
    }
    changePage(PageNum) {
        this.page = PageNum;
    }
    getPDetails() {
        this.patientSrvc.getPatientById(this.id).subscribe((data) => {
            this.currPatient = data;
            console.log(data);
            this.dofDialysis = this.reverseDate(this.currPatient.dosDialysis.substring(0, 10));
            this.dofAC = this.reverseDate(this.currPatient.dOfAccessCreation.substring(0, 10));
            this.dofLab = this.reverseDate(this.currPatient.labDate.substring(0, 10));
            if (this.currPatient.HepBVDate) {
                this.dOfHepBV = this.reverseDate(this.currPatient.HepBVDate.substring(0, 10));
            }
            if (this.currPatient.InfVDate) {
                this.dOfInfV = this.reverseDate(this.currPatient.InfVDate.substring(0, 10));
            }
        });
    }
    nextPage() {
        if (this.page == 5) {
            this.pageNextDisabled = true;
            this.page = this.page + 1;
        }
        else {
            this.page = this.page + 1;
            if (this.page == 2) {
                this.pagePreviousDisabled = false;
            }
        }
    }
    prevPage() {
        if (this.page == 2) {
            this.pagePreviousDisabled = true;
            this.page = this.page - 1;
        }
        else {
            this.page = this.page - 1;
            if (this.page == 5) {
                this.pageNextDisabled = false;
            }
        }
    }
    reverseDate(str) {
        return str.split("-").reverse().join("-");
    }
}
ViewpatientdetailsComponent.ɵfac = function ViewpatientdetailsComponent_Factory(t) { return new (t || ViewpatientdetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
ViewpatientdetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewpatientdetailsComponent, selectors: [["app-viewpatientdetails"]], decls: 18, vars: 9, consts: [["id", "con"], ["id", "content"], ["class", "d-flex justify-content-center", 4, "ngIf"], ["id", "footer"], [1, "d-flex", "flex-row", "justify-content-center"], ["mat-button", "", 1, "nav-btn", 3, "disabled", "click"], [1, "page-num"], [1, "d-flex", "justify-content-center"], ["id", "profileform-bg", 1, "info-box", "shadow"], [1, "p-6", "input-border"], ["class", " p-6 input-border", 4, "ngIf"], [4, "ngIf"], [1, "d-flex", "flex-row", "justify-content-between"], [1, "d-flex", "justify-content-between"], [1, "d-flex", "justify-content-around"], [1, "d-flex", "flex-row", "justify-content-around"]], template: function ViewpatientdetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ViewpatientdetailsComponent_div_2_Template, 54, 10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewpatientdetailsComponent_div_3_Template, 42, 12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewpatientdetailsComponent_div_4_Template, 32, 12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ViewpatientdetailsComponent_div_5_Template, 56, 21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ViewpatientdetailsComponent_div_6_Template, 181, 31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ViewpatientdetailsComponent_div_7_Template, 47, 20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewpatientdetailsComponent_Template_button_click_10_listener() { return ctx.prevPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewpatientdetailsComponent_Template_button_click_15_listener() { return ctx.nextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page == 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page == 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.pagePreviousDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.pageNextDisabled);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"]], styles: [".info-box[_ngcontent-%COMP%]{\r\n    width: 98%;\r\n\r\n}\r\n.input-border[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n}\r\n.h1[_ngcontent-%COMP%]{\r\n    font-size: 60px;\r\n}\r\n.h3[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\n.view-pagination[_ngcontent-%COMP%]{\r\n    margin-top: 220px;\r\n}\r\n.page-num[_ngcontent-%COMP%]{\r\n    margin-left: 30px;\r\n    margin-right: 30px;\r\n    font-size: 20px;\r\n}\r\n.nav-btn[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n.nav-btn[_ngcontent-%COMP%]:focus{\r\n    border: none;\r\n    outline: none;\r\n}\r\n.width-shrink[_ngcontent-%COMP%]{\r\n    width: 10%;\r\n\r\n}\r\n#footer[_ngcontent-%COMP%] {\r\n    position:absolute;\r\n    bottom:0;\r\n    width:100%;\r\n    height: 370px;\r\n }\r\n#con[_ngcontent-%COMP%] {\r\n    min-height:100%;\r\n    position:relative;\r\n }\r\n#content[_ngcontent-%COMP%] {\r\n    height: 1600px; \r\n    padding-bottom:50px;\r\n }\r\nbody[_ngcontent-%COMP%] {\r\n    margin:0;\r\n    padding:0;\r\n    height:100%;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3cGF0aWVudGRldGFpbHMvdmlld3BhdGllbnRkZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVOztBQUVkO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUVBO0lBQ0ksVUFBVTs7QUFFZDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixVQUFVO0lBQ1YsYUFBYTtDQUNoQjtBQUVBO0lBQ0csZUFBZTtJQUNmLGlCQUFpQjtDQUNwQjtBQUNBO0lBQ0csY0FBYyxFQUFFLHdCQUF3QjtJQUN4QyxtQkFBbUI7Q0FDdEI7QUFDQTtJQUNHLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztDQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92aWV3cGF0aWVudGRldGFpbHMvdmlld3BhdGllbnRkZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mby1ib3h7XHJcbiAgICB3aWR0aDogOTglO1xyXG5cclxufVxyXG4uaW5wdXQtYm9yZGVye1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5oMXtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxufVxyXG4uaDN7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLnZpZXctcGFnaW5hdGlvbntcclxuICAgIG1hcmdpbi10b3A6IDIyMHB4O1xyXG59XHJcbi5wYWdlLW51bXtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5uYXYtYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5uYXYtYnRuOmZvY3Vze1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLndpZHRoLXNocmlua3tcclxuICAgIHdpZHRoOiAxMCU7XHJcblxyXG59XHJcbiNmb290ZXIge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBib3R0b206MDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDM3MHB4O1xyXG4gfVxyXG5cclxuICNjb24ge1xyXG4gICAgbWluLWhlaWdodDoxMDAlO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiB9XHJcbiAjY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDE2MDBweDsgLyogQ2hhbmdlZCB0aGlzIGhlaWdodCAqL1xyXG4gICAgcGFkZGluZy1ib3R0b206NTBweDtcclxuIH1cclxuIGJvZHkge1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewpatientdetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-viewpatientdetails',
                templateUrl: './viewpatientdetails.component.html',
                styleUrls: ['./viewpatientdetails.component.css']
            }]
    }], function () { return [{ type: src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"] }, { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "7wfR":
/*!*********************************************!*\
  !*** ./src/app/services/patient.service.ts ***!
  \*********************************************/
/*! exports provided: PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return PatientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _patientClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../patientClass */ "h+Cs");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class PatientService {
    constructor(http) {
        this.http = http;
    }
    getPatientsbyHosp(Hospital) {
        return this.http.post(`/patients/Hospital`, { Hospital: Hospital });
    }
    getPatientById(id) {
        return this.http.get(`/patients/${id}`);
    }
    getPatientbyfullNameAr(fullNameAr) {
        return this.http.post('/patients/fullNameAr/', { fullNameAr: fullNameAr });
    }
    getPatientbynID(n_ID) {
        return this.http.post('/patients/n_ID/', { n_ID: n_ID });
    }
    getPatientbyContact(contactInfo) {
        return this.http.get(`/patients/${contactInfo}`);
    }
    addPatient(pCurrent = new _patientClass__WEBPACK_IMPORTED_MODULE_1__["PatientObj"]()) {
        return this.http.post(`/patients/add`, pCurrent);
    }
    updatePatient(id, pCurrent = new _patientClass__WEBPACK_IMPORTED_MODULE_1__["PatientObj"]()) {
        return this.http.post(`/patients/update/${id}`, pCurrent);
    }
    deletePatient(id) {
        return this.http.get(`/patients/delete/${id}`);
    }
}
PatientService.ɵfac = function PatientService_Factory(t) { return new (t || PatientService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PatientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PatientService, factory: PatientService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "A0J8":
/*!***************************************************************!*\
  !*** ./src/app/components/addpatient/addpatient.component.ts ***!
  \***************************************************************/
/*! exports provided: AddpatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpatientComponent", function() { return AddpatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _patientClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../patientClass */ "h+Cs");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/patient.service */ "7wfR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_hosplist_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/hosplist.service */ "iVMD");
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/navbar.service */ "n2q6");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");






















function AddpatientComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Patient Personal Details");
} }
function AddpatientComponent_mat_form_field_10_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hospital_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", hospital_r101.hospitalName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", hospital_r101.hospitalName, " ");
} }
function AddpatientComponent_mat_form_field_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 197, 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddpatientComponent_mat_form_field_10_mat_option_3_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.hospList);
} }
function AddpatientComponent_mat_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r102 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", country_r102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r102);
} }
function AddpatientComponent_ng_template_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Medical History");
} }
function AddpatientComponent_mat_form_field_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 200, 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddpatientComponent_mat_form_field_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 202, 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddpatientComponent_mat_form_field_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 204, 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddpatientComponent_mat_form_field_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 207, 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddpatientComponent_ng_template_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Vascular Access");
} }
function AddpatientComponent_mat_form_field_182_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 209, 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddpatientComponent_mat_form_field_210_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 211, 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddpatientComponent_ng_template_238_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Dialysis Prescription");
} }
function AddpatientComponent_mat_form_field_262_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 213, 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddpatientComponent_mat_form_field_263_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 215, 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddpatientComponent_mat_form_field_264_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 217, 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddpatientComponent_mat_form_field_265_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 219, 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddpatientComponent_mat_form_field_316_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 221, 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddpatientComponent_ng_template_324_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Lab Results:");
} }
function AddpatientComponent_mat_form_field_417_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 223, 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddpatientComponent_ng_template_482_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Current Medication");
} }
function AddpatientComponent_mat_form_field_553_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Vaccination Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-datepicker-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-datepicker", null, 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r115);
} }
function AddpatientComponent_mat_form_field_561_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Vaccination Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-datepicker-toggle", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-datepicker", null, 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r116);
} }
class AddpatientComponent {
    constructor(authService, patientService, fb, router, _snackBar, hosplistService, nav) {
        this.authService = authService;
        this.patientService = patientService;
        this.fb = fb;
        this.router = router;
        this._snackBar = _snackBar;
        this.hosplistService = hosplistService;
        this.nav = nav;
        this.currP = new _patientClass__WEBPACK_IMPORTED_MODULE_2__["PatientObj"]();
        this.countryList = [
            "Saudi",
            "Non-Saudi"
        ];
        this.currUser = this.authService.getLoggedUser();
        this.createForm = this.fb.group({
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fullNameAr: [''],
            Age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Height: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            bldGrp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            kAllergies: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Hospital: [''],
            contactInfo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            n_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Nationality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            submittedBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dosDialysis: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            oKidneyDisease: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            otherKD: [''],
            coMorbidityOther: [''],
            previousTr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            prevTrGS: [''],
            fitForTr: [''],
            fitForTrReason: [''],
            potentialRDonors: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            currentAccess: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cAOther: [''],
            dOfAccessCreation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ComplicationOther: [''],
            previousAccess1: [''],
            previousAccess2: [''],
            previousAccess3: [''],
            previousAccess4: [''],
            Frequency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Duration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Dialyser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            antiCoag: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            hInit: [''],
            hMaint: [''],
            LMWHval: [''],
            antiCoReason: [''],
            dryWt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            avgWtGain: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dialAdeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dCompOther: [''],
            labDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cbcHB: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cbcWBC: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cbcPlatelets: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chemCre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chemUrea: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chemSod: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chemPot: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chemCal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chemPhos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chemAST: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chemALT: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chemAlb: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chemMag: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chemAlph: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chemOther: [''],
            Siron: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            TIBC: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Sferitin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            TSAT: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            hormPTH: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            hormVITD: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            hormOther: [''],
            hbsAg: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            hcvAb: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            hcvPCR: [''],
            hivI_II: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            otherSer: [''],
            coagPT: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            coagPPT: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            coagINR: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cMD1: [''],
            cMD2: [''],
            cMD3: [''],
            cMD4: [''],
            cMD5: [''],
            cMD6: [''],
            cMD7: [''],
            cMD8: [''],
            cMD9: [''],
            cMD10: [''],
            cMD11: [''],
            cMD12: [''],
            cMD13: [''],
            cMD14: [''],
            cMD15: [''],
            cMD16: [''],
            HepBV: [''],
            HepBVDate: [''],
            InfV: [''],
            InfVDate: [''],
        });
    }
    getAllHospitals() {
        this.hosplistService.getHospitals().subscribe((data) => {
            this.hospList = data;
        });
    }
    addp() {
        this.patientService.getPatientbynID(this.createForm.controls.n_ID.value).subscribe((data) => {
            if (data) {
                this._snackBar.open("Error: Medical record with matching National ID already exists", "", {
                    duration: 4000, panelClass: ['red-snackbar']
                });
            }
            else {
                this.currP.fullName = this.createForm.controls.fullName.value;
                this.currP.fullNameAr = this.createForm.controls.fullNameAr.value;
                this.currP.Age = this.createForm.controls.Age.value;
                this.currP.Height = this.createForm.controls.Height.value;
                this.currP.bldGrp = this.createForm.controls.bldGrp.value;
                this.currP.kAllergies = this.createForm.controls.kAllergies.value;
                if (this.currUser.isAdmin) {
                    if (this.createForm.controls.Hospital.value) {
                        this.currP.Hospital = this.createForm.controls.Hospital.value;
                    }
                    else {
                        this.currP.Hospital = "Ranya";
                    }
                }
                else {
                    this.currP.Hospital = this.currUser.Hospital;
                }
                this.currP.contactInfo = this.createForm.controls.contactInfo.value;
                this.currP.Gender = this.createForm.controls.Gender.value;
                this.currP.n_ID = this.createForm.controls.n_ID.value;
                this.currP.Nationality = this.createForm.controls.Nationality.value;
                this.currP.submittedBy = this.createForm.controls.submittedBy.value;
                this.currP.dosDialysis = this.createForm.controls.dosDialysis.value;
                this.currP.oKidneyDisease = this.createForm.controls.oKidneyDisease.value;
                this.currP.otherKD = this.createForm.controls.otherKD.value;
                this.currP.morbHype = this.cMorbHyp;
                this.currP.morbDM = this.cMorbDM;
                this.currP.morbEpi = this.cMorbE;
                if (this.SelectedCMorbOther) {
                    this.currP.coMorbOther = this.createForm.controls.coMorbidityOther.value;
                }
                this.currP.previousTr = this.createForm.controls.previousTr.value;
                this.currP.prevTrGS = this.createForm.controls.prevTrGS.value;
                this.currP.fitForTr = this.createForm.controls.fitForTr.value;
                this.currP.fitForTrReason = this.createForm.controls.fitForTrReason.value;
                this.currP.potentialRDonors = this.createForm.controls.potentialRDonors.value;
                this.currP.currentAccess = this.createForm.controls.currentAccess.value;
                this.currP.cAOther = this.createForm.controls.cAOther.value;
                this.currP.dOfAccessCreation = this.createForm.controls.dOfAccessCreation.value;
                this.currP.compInsuf = this.CompIns;
                this.currP.compInf = this.CompInf;
                this.currP.compAD = this.CompAD;
                this.currP.compDC = this.CompDC;
                if (this.SelectedDCOther) {
                    this.currP.compOther = this.createForm.controls.ComplicationOther.value;
                }
                this.currP.previousAccess1 = this.createForm.controls.previousAccess1.value;
                this.currP.previousAccess2 = this.createForm.controls.previousAccess2.value;
                this.currP.previousAccess3 = this.createForm.controls.previousAccess3.value;
                this.currP.previousAccess4 = this.createForm.controls.previousAccess4.value;
                this.currP.Frequency = this.createForm.controls.Frequency.value;
                this.currP.Duration = this.createForm.controls.Duration.value;
                this.currP.Dialyser = this.createForm.controls.Dialyser.value;
                this.currP.antiCoagulation = this.createForm.controls.antiCoag.value;
                this.currP.hInit = this.createForm.controls.hInit.value;
                this.currP.hMaint = this.createForm.controls.hMaint.value;
                this.currP.LMWHval = this.createForm.controls.LMWHval.value;
                this.currP.antiCoReason = this.createForm.controls.antiCoReason.value;
                this.currP.dryWt = this.createForm.controls.dryWt.value;
                this.currP.avgWtGain = this.createForm.controls.avgWtGain.value;
                this.currP.dialAdeq = this.createForm.controls.dialAdeq.value;
                this.currP.dCompHead = this.DCHA;
                this.currP.dCompHOT = this.DCHypot;
                this.currP.dCompHG = this.DCHypog;
                this.currP.dCompHET = this.DCHyper;
                this.currP.dCompMC = this.DCMC;
                this.currP.dCompAC = this.DCAC;
                this.currP.dCompVom = this.DCV;
                this.currP.dCompSZ = this.DCSZ;
                this.currP.dCompHS = this.DCHS;
                this.currP.dCompIt = this.DCIH;
                if (this.SelectedCompOther) {
                    this.currP.dCompOther = this.createForm.controls.dCompOther.value;
                }
                this.currP.labDate = this.createForm.controls.labDate.value;
                this.currP.cbcHB = this.createForm.controls.cbcHB.value;
                this.currP.cbcWBC = this.createForm.controls.cbcWBC.value;
                this.currP.cbcPlatelets = this.createForm.controls.cbcPlatelets.value;
                this.currP.chemCre = this.createForm.controls.chemCre.value;
                this.currP.chemUrea = this.createForm.controls.chemUrea.value;
                this.currP.chemSod = this.createForm.controls.chemSod.value;
                this.currP.chemPot = this.createForm.controls.chemPot.value;
                this.currP.chemCal = this.createForm.controls.chemCal.value;
                this.currP.chemPhos = this.createForm.controls.chemPhos.value;
                this.currP.chemAST = this.createForm.controls.chemAST.value;
                this.currP.chemALT = this.createForm.controls.chemALT.value;
                this.currP.chemAlb = this.createForm.controls.chemAlb.value;
                this.currP.chemMag = this.createForm.controls.chemMag.value;
                this.currP.chemAlph = this.createForm.controls.chemAlph.value;
                this.currP.chemOther = this.createForm.controls.chemOther.value;
                this.currP.Siron = this.createForm.controls.Siron.value;
                this.currP.TIBC = this.createForm.controls.TIBC.value;
                this.currP.Sferitin = this.createForm.controls.Sferitin.value;
                this.currP.TSAT = this.createForm.controls.TSAT.value;
                this.currP.hormPTH = this.createForm.controls.hormPTH.value;
                this.currP.hormVITD = this.createForm.controls.hormVITD.value;
                this.currP.hormOther = this.createForm.controls.hormOther.value;
                this.currP.hbsAg = this.createForm.controls.hbsAg.value;
                this.currP.hcvAb = this.createForm.controls.hcvAb.value;
                if (this.currP.hcvAb == "Positive") {
                    this.currP.hcvPCR = this.createForm.controls.hcvPCR.value;
                }
                this.currP.hivI_II = this.createForm.controls.hivI_II.value;
                this.currP.othrSer = this.createForm.controls.otherSer.value;
                this.currP.coagPT = this.createForm.controls.coagPT.value;
                this.currP.coagPPT = this.createForm.controls.coagPPT.value;
                this.currP.coagINR = this.createForm.controls.coagINR.value;
                this.currP.cMD1 = this.createForm.controls.cMD1.value;
                this.currP.cMD2 = this.createForm.controls.cMD2.value;
                this.currP.cMD3 = this.createForm.controls.cMD3.value;
                this.currP.cMD4 = this.createForm.controls.cMD4.value;
                this.currP.cMD5 = this.createForm.controls.cMD5.value;
                this.currP.cMD6 = this.createForm.controls.cMD6.value;
                this.currP.cMD7 = this.createForm.controls.cMD7.value;
                this.currP.cMD8 = this.createForm.controls.cMD8.value;
                this.currP.cMD9 = this.createForm.controls.cMD9.value;
                this.currP.cMD10 = this.createForm.controls.cMD10.value;
                this.currP.cMD11 = this.createForm.controls.cMD11.value;
                this.currP.cMD12 = this.createForm.controls.cMD12.value;
                this.currP.cMD13 = this.createForm.controls.cMD13.value;
                this.currP.cMD14 = this.createForm.controls.cMD14.value;
                this.currP.cMD15 = this.createForm.controls.cMD15.value;
                this.currP.cMD16 = this.createForm.controls.cMD16.value;
                this.currP.HepBV = this.createForm.controls.HepBV.value;
                this.currP.HepBVDate = this.createForm.controls.HepBVDate.value;
                this.currP.InfV = this.createForm.controls.InfV.value;
                this.currP.InfVDate = this.createForm.controls.InfVDate.value;
                this._snackBar.open("Medical record added successfully", "", {
                    duration: 3000, panelClass: ['green-snackbar']
                });
                this.patientService.addPatient(this.currP).subscribe(() => {
                    this.router.navigate(['/list']);
                });
            }
        });
    }
    ngOnInit() {
        this.nav.show();
        this.createForm.controls.oKidneyDisease.setValue("Unknown");
        this.createForm.controls.previousTr.setValue("No");
        this.createForm.controls.fitForTr.setValue("Yes");
        this.createForm.controls.currentAccess.setValue("AVF/Side/Rt.");
        this.createForm.controls.antiCoag.setValue("No");
        this.SelectedCMorbOther = false;
        this.cMorbDM = false;
        this.cMorbE = false;
        this.cMorbHyp = false;
        this.cMorbIHD = false;
        this.CompIns = false;
        this.CompInf = false;
        this.CompAD = false;
        this.CompDC = false;
        this.SelectedCompOther = false;
        this.DCHA = false;
        this.DCHypot = false;
        this.DCHypog = false;
        this.DCHyper = false;
        this.DCMC = false;
        this.DCAC = false;
        this.DCV = false;
        this.DCSZ = false;
        this.DCHS = false;
        this.DCIH = false;
        this.SelectedDCOther = false;
        this.getAllHospitals();
    }
}
AddpatientComponent.ɵfac = function AddpatientComponent_Factory(t) { return new (t || AddpatientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_patient_service__WEBPACK_IMPORTED_MODULE_4__["PatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_hosplist_service__WEBPACK_IMPORTED_MODULE_7__["HosplistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_8__["NavbarService"])); };
AddpatientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddpatientComponent, selectors: [["app-addpatient"]], decls: 566, vars: 46, consts: [[1, "shadow"], [1, "create-form", 3, "formGroup"], ["id", "form-bg", 3, "linear"], ["stepper", ""], ["matStepLabel", ""], ["class", "inputfield", 4, "ngIf"], [1, "inputfield"], ["matInput", "", "placeholder", "Full Name", "formControlName", "fullName"], ["fullName", ""], ["matInput", "", "placeholder", "Full Name (Arabic)", "formControlName", "fullNameAr"], ["fullNameAr", ""], ["placeholder", "Gender", "formControlName", "Gender"], ["Gender", ""], ["value", "Male"], ["value", "Female"], ["matInput", "", "placeholder", "Age", "formControlName", "Age"], ["Age", ""], ["placeholder", "Nationality", "formControlName", "Nationality"], ["Nationality", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "National ID", "formControlName", "n_ID"], ["n_ID", ""], ["matInput", "", "placeholder", "Contact Number (+966)", "formControlName", "contactInfo"], ["contactInfo", ""], ["matInput", "", "placeholder", "Blood Group", "formControlName", "bldGrp"], ["bldGrp", ""], ["matInput", "", "placeholder", "Height (cm)", "formControlName", "Height"], ["Height", ""], ["matInput", "", "placeholder", "Known Allergies", "formControlName", "kAllergies"], ["kAllergies", ""], ["matInput", "", "placeholder", "Submitted By", "formControlName", "submittedBy"], ["submittedBy", ""], ["mat-button", "", "matStepperNext", "", 1, "main-btn", "next-btn"], ["appearance", "fill"], ["matInput", "", "formControlName", "dosDialysis", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["dosDialysis", ""], ["name", "oKidneyDisease", "placeholder", "Original Kidney Disease", "formControlName", "oKidneyDisease"], ["oKidneyDisease", ""], ["value", "Unknown"], ["value", "Hypertensive Nephrosclerosis"], ["value", "Diabetic Nephropathy"], ["value", "Obstructive Nephropathy"], ["value", "ADPKD"], ["value", "Other"], ["labelPosition", "before", 3, "checked", "change"], ["name", "previousTr", "placeholder", "Previous Transplantation", "formControlName", "previousTr"], ["previousTr", ""], ["value", "No"], ["value", "Yes"], [4, "ngIf"], ["name", "fitForTr", "placeholder", "Fit for Transplantation", "formControlName", "fitForTr"], ["fitForTr", ""], ["class", "hiddeninputfield", 4, "ngIf"], ["name", "potentialRDonors", "placeholder", "Potiential Relative Donors", "formControlName", "potentialRDonors"], ["potentialRDonors", ""], ["mat-button", "", "matStepperPrevious", "", 1, "main-btn", "next-btn"], ["name", "currentAccess", "placeholder", "Current Access", "formControlName", "currentAccess"], ["currentAccess", ""], ["value", "RT. AVF"], ["value", "LT. AVF"], ["value", "Radio-ulnar AVF"], ["value", "Brachio-cephalic AVF"], ["value", "RT. AVG"], ["value", "LT. AVG"], ["value", "Forearm AVG"], ["value", "Upperarm AVG"], ["value", "Lower-limb AVG"], ["value", "Chest AVG"], ["value", "RT. Permcath"], ["value", "LT. Permcath"], ["value", "Int.Jugul Permcath "], ["value", "Subclavia Permcath "], ["value", "Femoral Permcath "], ["value", "Transhepatic Permcath "], ["matInput", "", "formControlName", "dOfAccessCreation", 3, "matDatepicker"], ["dOfAccessCreation", ""], ["matInput", "", "formControlName", "previousAccess1"], ["previousAccess1", ""], ["matInput", "", "formControlName", "previousAccess2"], ["previousAccess2", ""], ["matInput", "", "formControlName", "previousAccess3"], ["previousAccess3", ""], ["matInput", "", "formControlName", "previousAccess4"], ["previousAccess4", ""], ["matInput", "", "placeholder", "Frequency (sessions/week)", "formControlName", "Frequency"], ["Frequency", ""], ["matInput", "", "placeholder", "Duration (hrs/session)", "formControlName", "Duration"], ["Duration", ""], ["matInput", "", "placeholder", "Dialyser", "formControlName", "Dialyser"], ["Dialyser", ""], ["name", "antiCoagulation", "placeholder", "Anticoagulation", "formControlName", "antiCoag"], ["antiCoag", ""], ["value", "Heparin"], ["value", "LMWH"], ["matInput", "", "placeholder", "Dry Weight (kg)", "formControlName", "dryWt"], ["dryWt", ""], ["matInput", "", "placeholder", "Average Weight Gain (between sessions)", "formControlName", "avgWtGain"], ["avgWtGain", ""], ["matInput", "", "placeholder", "Dialysis Adequacy (Kt/V)", "formControlName", "dialAdeq"], ["dialAdeq", ""], ["matInput", "", "formControlName", "labDate", 3, "matDatepicker"], ["labDate", ""], ["matInput", "", "placeholder", "HB (g/dl)", "formControlName", "cbcHB"], ["cbcHB", ""], ["matInput", "", "placeholder", "WBC", "formControlName", "cbcWBC"], ["cbcWBC", ""], ["matInput", "", "placeholder", "Platelets", "formControlName", "cbcPlatelets"], ["cbcPlatelets", ""], ["matInput", "", "placeholder", "S. Creatinine (mg%)", "formControlName", "chemCre"], ["chemCre", ""], ["matInput", "", "placeholder", "S. Urea (mg%)", "formControlName", "chemUrea"], ["chemUrea", ""], ["matInput", "", "placeholder", "S. Sodium (mmoL/L)", "formControlName", "chemSod"], ["chemSod", ""], ["matInput", "", "placeholder", "S. Potassium (mmoL/L)", "formControlName", "chemPot"], ["matInput", "", "placeholder", "S. Calcium (mg%)", "formControlName", "chemCal"], ["matInput", "", "placeholder", "S. Phosphorus (mg%)", "formControlName", "chemPhos"], ["chemPhos", ""], ["matInput", "", "placeholder", "S. Magnesium (mg%)", "formControlName", "chemMag"], ["chemMag", ""], ["matInput", "", "placeholder", "S. Albumin (mg%)", "formControlName", "chemAlb"], ["chemAlb", ""], ["matInput", "", "placeholder", "AST (U/L)", "formControlName", "chemAST"], ["chemAST", ""], ["matInput", "", "placeholder", "ALT (U/L)", "formControlName", "chemALT"], ["chemALT", ""], ["matInput", "", "placeholder", "Alk. Phosphatase (U/L)", "formControlName", "chemAlph"], ["chemAlph", ""], ["matInput", "", "placeholder", "Other", "formControlName", "chemOther"], ["chemOther", ""], ["name", "hbsAg", "placeholder", "HBs Ag", "formControlName", "hbsAg"], ["hbsAg", ""], ["value", "Positive"], ["value", "Negative"], ["name", "hcvAb", "placeholder", "HCV Ab", "formControlName", "hcvAb"], ["hcvAb", ""], ["name", "hivI_II", "placeholder", "HIV I & II", "formControlName", "hivI_II"], ["hivI_II", ""], ["matInput", "", "placeholder", "Other", "formControlName", "otherSer"], ["otherSer", ""], ["matInput", "", "placeholder", "S. Iron (umol/L)", "formControlName", "Siron"], ["Siron", ""], ["matInput", "", "placeholder", "S. Ferritin (ng/mL)", "formControlName", "Sferitin"], ["Sferitin", ""], ["matInput", "", "placeholder", "TIBC (umol/L)", "formControlName", "TIBC"], ["TIBC", ""], ["matInput", "", "placeholder", "TSAT (%)", "formControlName", "TSAT"], ["TSAT", ""], ["matInput", "", "placeholder", "PT (sec)", "formControlName", "coagPT"], ["coagPT", ""], ["matInput", "", "placeholder", "PPT (sec)", "formControlName", "coagPPT"], ["coagPPT", ""], ["matInput", "", "placeholder", "INR", "formControlName", "coagINR"], ["coagINR", ""], ["matInput", "", "placeholder", "PTH (Pmol/L)", "formControlName", "hormPTH"], ["hormPTH", ""], ["matInput", "", "placeholder", "Vitamin D (ng/L)", "formControlName", "hormVITD"], ["hormVITD", ""], ["matInput", "", "placeholder", "Medication 1", "formControlName", "cMD1"], ["cMD1", ""], ["matInput", "", "placeholder", "Medication 2", "formControlName", "cMD2"], ["cM2", ""], ["matInput", "", "placeholder", "Medication 3", "formControlName", "cMD3"], ["cMD3", ""], ["matInput", "", "placeholder", "Medication 4", "formControlName", "cMD4"], ["cMD4", ""], ["matInput", "", "placeholder", "Medication 5", "formControlName", "cMD5"], ["cMD5", ""], ["matInput", "", "placeholder", "Medication 6", "formControlName", "cMD6"], ["cMD6", ""], ["matInput", "", "placeholder", "Medication 7", "formControlName", "cMD7"], ["cMD7", ""], ["matInput", "", "placeholder", "Medication 8", "formControlName", "cMD8"], ["cMD8", ""], ["matInput", "", "placeholder", "Medication 9", "formControlName", "cMD9"], ["cMD9", ""], ["matInput", "", "placeholder", "Medication 10", "formControlName", "cMD10"], ["cMD10", ""], ["matInput", "", "placeholder", "Medication 11", "formControlName", "cMD11"], ["cMD11", ""], ["matInput", "", "placeholder", "Medication 12", "formControlName", "cMD12"], ["cMD12", ""], ["matInput", "", "placeholder", "Medication 13", "formControlName", "cMD13"], ["cMD13", ""], ["matInput", "", "placeholder", "Medication 14", "formControlName", "cMD14"], ["cMD14", ""], ["matInput", "", "placeholder", "Medication 15", "formControlName", "cMD15"], ["cMD15", ""], ["matInput", "", "placeholder", "Medication 16", "formControlName", "cMD16"], ["name", "HepBV", "placeholder", "Hep. B Vaccination", "formControlName", "HepBV"], ["HepBV", ""], ["appearance", "fill", 4, "ngIf"], ["name", "InfV", "placeholder", "Influenza Vaccination", "formControlName", "InfV"], ["InfV", ""], [1, "d-flex", "justify-content-center"], ["mat-button", "", "type", "submit", 1, "main-btn", "add-btn", 3, "disabled", "click"], ["placeholder", "Hospital", "formControlName", "Hospital"], ["Hospital", ""], [3, "value"], ["matInput", "", "placeholder", "Specified Disease", "formControlName", "otherKD"], ["otherKD", ""], ["matInput", "", "placeholder", "Other Co-Morbidities", "formControlName", "coMorbidityOther"], ["coMorbidityOther", ""], ["matInput", "", "placeholder", "Graft Survival", "formControlName", "prevTrGS"], ["prevTrGS", ""], [1, "hiddeninputfield"], ["matInput", "", "placeholder", "Reason", "formControlName", "fitForTrReason"], ["fitForReason", ""], ["matInput", "", "placeholder", "Specified Access", "formControlName", "cAOther"], ["cAOther", ""], ["matInput", "", "placeholder", "Other Complications", "formControlName", "ComplicationOther"], ["ComplicationOther", ""], ["matInput", "", "placeholder", "Initial", "formControlName", "hInit"], ["hInit", ""], ["matInput", "", "placeholder", "Maintenance", "formControlName", "hMaint"], ["hMaint", ""], ["matInput", "", "placeholder", "LMWH Dosage", "formControlName", "LMWHval"], ["LMWHval", ""], ["matInput", "", "placeholder", "Reason", "formControlName", "antiCoReason"], ["antiCoReason", ""], ["matInput", "", "placeholder", "Other Dialysis Complications", "formControlName", "dCompOther"], ["dCompOther", ""], ["matInput", "", "placeholder", "HCV RNA PCR", "formControlName", "hcvPCR"], ["hcvPCR", ""], ["matInput", "", "formControlName", "HepBVDate", 3, "matDatepicker"], ["HepBVDate", ""], ["matInput", "", "formControlName", "InfVDate", 3, "matDatepicker"], ["InfVDate", ""]], template: function AddpatientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-horizontal-stepper", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddpatientComponent_ng_template_7_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddpatientComponent_mat_form_field_10_Template, 4, 1, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-select", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-select", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AddpatientComponent_mat_option_35_Template, 2, 2, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, AddpatientComponent_ng_template_66_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-form-field", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Start of Dialysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "mat-datepicker-toggle", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "mat-datepicker", null, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-select", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Unknown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Hypertensive Nephrosclerosis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Diabetic Nephropathy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Obstructive Nephropathy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "ADPKD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, AddpatientComponent_mat_form_field_90_Template, 3, 0, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Co-Morbidities:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddpatientComponent_Template_mat_checkbox_change_95_listener() { return ctx.cMorbDM = !ctx.cMorbDM; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Diabetes Mellitus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddpatientComponent_Template_mat_checkbox_change_98_listener() { return ctx.cMorbHyp = !ctx.cMorbHyp; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Hypertension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddpatientComponent_Template_mat_checkbox_change_101_listener() { return ctx.cMorbIHD = !ctx.cMorbIHD; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "IHD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddpatientComponent_Template_mat_checkbox_change_104_listener() { return ctx.cMorbE = !ctx.cMorbE; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Epilepsy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddpatientComponent_Template_mat_checkbox_change_107_listener() { return ctx.SelectedCMorbOther = !ctx.SelectedCMorbOther; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Other ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, AddpatientComponent_mat_form_field_110_Template, 3, 0, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-select", 46, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "mat-option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "mat-option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Yes (Graft Survival)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, AddpatientComponent_mat_form_field_119_Template, 3, 0, "mat-form-field", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "mat-select", 51, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "mat-option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "mat-option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](128, AddpatientComponent_mat_form_field_128_Template, 3, 0, "mat-form-field", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "mat-select", 54, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "mat-option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "mat-option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](144, AddpatientComponent_ng_template_144_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "mat-select", 57, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "mat-option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "RT. AVF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "mat-option", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "LT. AVF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "mat-option", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Radio-ulnar AVF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "mat-option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Brachio-cephalic AVF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "mat-option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "RT. AVG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "mat-option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "LT. AVG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "mat-option", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Forearm AVG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "mat-option", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Upperarm AVG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "mat-option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Lower Limb AVG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "mat-option", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Chest AVG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "mat-option", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "RT. Permcath");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "mat-option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "LT. Permcath");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "mat-option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Int. Jugul Permcath");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "mat-option", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Subclavia Permcath");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "mat-option", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Femoral Permcath");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "mat-option", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Transhepatic Permcath");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "mat-option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](182, AddpatientComponent_mat_form_field_182_Template, 3, 0, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "mat-form-field", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Date of Access Creation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "mat-datepicker-toggle", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "mat-datepicker", null, 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Complications:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddpatientComponent_Template_mat_checkbox_change_195_listener() { return ctx.CompIns = !ctx.CompIns; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " Insufficiency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddpatientComponent_Template_mat_checkbox_change_198_listener() { return ctx.CompInf = !ctx.CompInf; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Infection ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddpatientComponent_Template_mat_checkbox_change_201_listener() { return ctx.CompAD = !ctx.CompAD; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Aneurysmal Dilatation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddpatientComponent_Template_mat_checkbox_change_204_listener() { return ctx.CompDC = !ctx.CompDC; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Difficult Cannulation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddpatientComponent_Template_mat_checkbox_change_207_listener() { return ctx.SelectedCompOther = !ctx.SelectedCompOther; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](210, AddpatientComponent_mat_form_field_210_Template, 3, 0, "mat-form-field", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Previous Access(es):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "input", 77, 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "input", 79, 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "input", 81, 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "input", 83, 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](238, AddpatientComponent_ng_template_238_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "input", 85, 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "input", 87, 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "input", 89, 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "mat-select", 91, 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "mat-option", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Yes (Heparin)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "mat-option", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Yes (LMWH)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "mat-option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](262, AddpatientComponent_mat_form_field_262_Template, 3, 0, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](263, AddpatientComponent_mat_form_field_263_Template, 3, 0, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](264, AddpatientComponent_mat_form_field_264_Template, 3, 0, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](265, AddpatientComponent_mat_form_field_265_Template, 3, 0, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "input", 95, 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "input", 97, 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "input", 99, 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Dialysis Complications:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddpatientComponent_Template_mat_checkbox_change_283_listener() { return ctx.DCHA = !ctx.DCHA; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Headache ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddpatientComponent_Template_mat_checkbox_change_286_listener() { return ctx.DCHypot = !ctx.DCHypot; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, " Hypotension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddpatientComponent_Template_mat_checkbox_change_289_listener() { return ctx.DCHypog = !ctx.DCHypog; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, " Hypoglycemia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddpatientComponent_Template_mat_checkbox_change_292_listener() { return ctx.DCHyper = !ctx.DCHyper; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, " Hypertension");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddpatientComponent_Template_mat_checkbox_change_295_listener() { return ctx.DCMC = !ctx.DCMC; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "Muscle Cramps ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddpatientComponent_Template_mat_checkbox_change_298_listener() { return ctx.DCAC = !ctx.DCAC; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Abdominal Colic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddpatientComponent_Template_mat_checkbox_change_301_listener() { return ctx.DCV = !ctx.DCV; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Vomiting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddpatientComponent_Template_mat_checkbox_change_304_listener() { return ctx.DCSZ = !ctx.DCSZ; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Seizure ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddpatientComponent_Template_mat_checkbox_change_307_listener() { return ctx.DCHS = !ctx.DCHS; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Hypersensitivity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](309, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddpatientComponent_Template_mat_checkbox_change_310_listener() { return ctx.DCIH = !ctx.DCIH; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Itching ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddpatientComponent_Template_mat_checkbox_change_313_listener() { return ctx.SelectedDCOther = !ctx.SelectedDCOther; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, " Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](315, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](316, AddpatientComponent_mat_form_field_316_Template, 3, 0, "mat-form-field", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](324, AddpatientComponent_ng_template_324_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "mat-form-field", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "Lab Results Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](329, "input", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "mat-datepicker-toggle", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](331, "mat-datepicker", null, 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "CBC:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "input", 103, 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "input", 105, 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "input", 107, 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "Chemistry:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](351, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "input", 109, 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](355, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](357, "input", 111, 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](359, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](361, "input", 113, 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](365, "input", 115, 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](367, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](369, "input", 116, 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](371, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](373, "input", 117, 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](375, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](377, "input", 119, 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](379, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](381, "input", 121, 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](383, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](385, "input", 123, 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](387, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](389, "input", 125, 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](391, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](393, "input", 127, 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](396, "input", 129, 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "Serology:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](401, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "mat-select", 131, 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "mat-option", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "Positive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "mat-option", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "Negative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](409, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "mat-select", 135, 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "mat-option", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "Positive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "mat-option", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "Negative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](417, AddpatientComponent_mat_form_field_417_Template, 3, 0, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](418, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "mat-select", 137, 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "mat-option", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "Positive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "mat-option", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "Negative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](426, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](428, "input", 139, 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "Iron Profile:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](433, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](435, "input", 141, 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](437, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](439, "input", 143, 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](441, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](443, "input", 145, 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](446, "input", 147, 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "Coagulation:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](451, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](453, "input", 149, 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](455, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](457, "input", 151, 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](459, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](461, "input", 153, 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](463, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, "Hormones:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](467, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](469, "input", 155, 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](471, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](473, "input", 157, 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](475, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](478, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](482, AddpatientComponent_ng_template_482_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](485, "input", 159, 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](487, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](489, "input", 161, 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](491, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](493, "input", 163, 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](495, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](497, "input", 165, 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](499, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](501, "input", 167, 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](503, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](505, "input", 169, 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](507, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](509, "input", 171, 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](511, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](513, "input", 173, 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](515, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](517, "input", 175, 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](519, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](521, "input", 177, 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](523, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](525, "input", 179, 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](527, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](529, "input", 181, 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](531, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](533, "input", 183, 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](535, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](537, "input", 185, 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](539, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](541, "input", 187, 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](544, "input", 189, 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "mat-select", 190, 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "mat-option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "mat-option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](552, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](553, AddpatientComponent_mat_form_field_553_Template, 7, 2, "mat-form-field", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "mat-select", 193, 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "mat-option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](558, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "mat-option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](560, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](561, AddpatientComponent_mat_form_field_561_Template, 7, 2, "mat-form-field", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](562, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "div", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "button", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddpatientComponent_Template_button_click_564_listener() { return ctx.addp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](565, "Add new medical profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](73);
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](190);
        const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](332);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.createForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currUser.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createForm.controls.oKidneyDisease.value == "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.cMorbDM);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.cMorbHyp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.cMorbIHD);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.cMorbE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.SelectedCMorbOther);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SelectedCMorbOther);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createForm.controls.previousTr.value == "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createForm.controls.fitForTr.value == "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createForm.controls.currentAccess.value == "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.CompIns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.CompInf);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.CompAD);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.CompDC);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.SelectedCompOther);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SelectedCompOther);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createForm.controls.antiCoag.value == "Heparin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createForm.controls.antiCoag.value == "Heparin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createForm.controls.antiCoag.value == "LMWH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createForm.controls.antiCoag.value == "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.DCHA);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.DCHypot);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.DCHypog);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.DCHyper);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.DCMC);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.DCAC);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.DCV);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.DCSZ);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.DCHS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.DCIH);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.SelectedDCOther);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SelectedDCOther);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createForm.controls.hcvAb.value == "Positive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createForm.controls.HepBV.value == "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createForm.controls.InfV.value == "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.createForm.pristine || ctx.createForm.invalid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepLabel"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperNext"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepicker"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckbox"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperPrevious"]], styles: [".create-form[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    \r\n}\r\n.inputfield[_ngcontent-%COMP%] {\r\n    width:100%;\r\n    font-size: large;\r\n}\r\n.add-btn[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    height: 70px;\r\n}\r\n.add-btn[_ngcontent-%COMP%]:disabled{\r\n    color: rgba(128, 128, 128, 0.555);\r\n    background: #044d3291;\r\n    color: #707070;\r\n}\r\n.next-btn[_ngcontent-%COMP%] { \r\n    width: 5%;\r\n    margin-top: 50px;\r\n    margin-right: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGRwYXRpZW50L2FkZHBhdGllbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7O0FBRWY7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQ0FBaUM7SUFDakMscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGRwYXRpZW50L2FkZHBhdGllbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGUtZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG59XHJcbi5pbnB1dGZpZWxkIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcbi5hZGQtYnRuIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbn1cclxuLmFkZC1idG46ZGlzYWJsZWR7XHJcbiAgICBjb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjU1NSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDQ0ZDMyOTE7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG4ubmV4dC1idG4geyBcclxuICAgIHdpZHRoOiA1JTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddpatientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-addpatient',
                templateUrl: './addpatient.component.html',
                styleUrls: ['./addpatient.component.css']
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_4__["PatientService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: _services_hosplist_service__WEBPACK_IMPORTED_MODULE_7__["HosplistService"] }, { type: src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_8__["NavbarService"] }]; }, null); })();


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
const environment = {
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

/***/ "JzmT":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 3, vars: 0, consts: [[1, "d-flex", "justify-content-center"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "401: Unauthorized");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Olwy":
/*!*********************************************************************!*\
  !*** ./src/app/components/generatetoken/generatetoken.component.ts ***!
  \*********************************************************************/
/*! exports provided: GeneratetokenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratetokenComponent", function() { return GeneratetokenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _inviteTokenClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inviteTokenClass */ "d+rp");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "4USb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _services_gentoken_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/gentoken.service */ "/GgB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_hosplist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/hosplist.service */ "iVMD");
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/navbar.service */ "n2q6");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
















function GeneratetokenComponent_div_0_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hospital_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", hospital_r6.hospitalName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hospital_r6.hospitalName);
} }
function GeneratetokenComponent_div_0_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneratetokenComponent_div_0_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.addinvT_Admin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Generate Administrator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneratetokenComponent_div_0_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneratetokenComponent_div_0_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.addinvT(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Generate User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneratetokenComponent_div_0_h1_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Registration link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GeneratetokenComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneratetokenComponent_div_0_div_13_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.copyMessage("murmuring-stream-74110.herokuapp.com/register/" + ctx_r11.currinvT.token); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Copy to Clipboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("murmuring-stream-74110.herokuapp.com/register/", ctx_r5.currinvT.token, "");
} }
function GeneratetokenComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function GeneratetokenComponent_div_0_Template_mat_select_valueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.selectedHosp = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GeneratetokenComponent_div_0_mat_option_5_Template, 2, 2, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GeneratetokenComponent_div_0_button_8_Template, 2, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GeneratetokenComponent_div_0_button_9_Template, 2, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GeneratetokenComponent_div_0_h1_12_Template, 2, 0, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, GeneratetokenComponent_div_0_div_13_Template, 5, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.selectedHosp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.hospList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedHosp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedHosp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currinvT.token);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currinvT.token);
} }
class GeneratetokenComponent {
    constructor(authService, genTokenService, router, hospListService, nav, _snackBar) {
        this.authService = authService;
        this.genTokenService = genTokenService;
        this.router = router;
        this.hospListService = hospListService;
        this.nav = nav;
        this._snackBar = _snackBar;
        this.currinvT = new _inviteTokenClass__WEBPACK_IMPORTED_MODULE_1__["invT"];
        this.currUser = this.authService.getLoggedUser();
    }
    getAllHospitals() {
        this.hospListService.getHospitals().subscribe((data) => {
            this.hospList = data;
        });
    }
    addinvT_Admin() {
        this.currinvT.token = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
        this.currinvT.isAdmin = true;
        this.currinvT.Hospital = this.selectedHosp;
        this.genTokenService.addToken(this.currinvT).subscribe(() => {
            this.router.navigate(['/gentoken']);
        });
    }
    addinvT() {
        this.currinvT.token = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
        this.currinvT.isAdmin = false;
        this.currinvT.Hospital = this.selectedHosp;
        console.log(this.selectedHosp);
        console.log(this.currinvT);
        this.genTokenService.addToken(this.currinvT).subscribe(() => {
        });
    }
    copyMessage(val) {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this._snackBar.open("Copied", "", { duration: 3000, panelClass: ['green-snackbar'] });
    }
    ngOnInit() {
        if (!this.currUser.isAdmin) {
            this.router.navigate(['/**']);
        }
        else {
            this.nav.show();
            this.getAllHospitals();
        }
    }
}
GeneratetokenComponent.ɵfac = function GeneratetokenComponent_Factory(t) { return new (t || GeneratetokenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_gentoken_service__WEBPACK_IMPORTED_MODULE_4__["GentokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_hosplist_service__WEBPACK_IMPORTED_MODULE_6__["HosplistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_7__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"])); };
GeneratetokenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneratetokenComponent, selectors: [["app-generatetoken"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "shadow"], [1, "d-flex", "justify-content-center"], [1, "p-1", "input-border", "form-field-width"], ["placeholder", "Select Hospital for user", "required", "", 3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-button", "", "class", "main-btn btn-margin btn-height", "type", "submit", 3, "click", 4, "ngIf"], ["mat-button", "", "class", "main-btn btn-height", "type", "submit", 3, "click", 4, "ngIf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [3, "value"], ["mat-button", "", "type", "submit", 1, "main-btn", "btn-margin", "btn-height", 3, "click"], ["mat-button", "", "type", "submit", 1, "main-btn", "btn-height", 3, "click"], [1, "label-width", "input-border"], ["mat-button", "", "value", "click to copy", 1, "main-btn", "btn-height", 3, "click"]], template: function GeneratetokenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GeneratetokenComponent_div_0_Template, 14, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currUser.isAdmin);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"]], styles: [".form-field-width[_ngcontent-%COMP%]{\r\n    width: 20%;\r\n}\r\n.btn-margin[_ngcontent-%COMP%]{\r\n    margin-right: 10%;\r\n}\r\n.label-width[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    height: 50px;\r\n    text-align: center;\r\n}\r\n.btn-height[_ngcontent-%COMP%]{\r\n    height: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZW5lcmF0ZXRva2VuL2dlbmVyYXRldG9rZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2VuZXJhdGV0b2tlbi9nZW5lcmF0ZXRva2VuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1maWVsZC13aWR0aHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuLmJ0bi1tYXJnaW57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG4ubGFiZWwtd2lkdGh7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuLWhlaWdodHtcclxuICAgIGhlaWdodDogNTBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneratetokenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-generatetoken',
                templateUrl: './generatetoken.component.html',
                styleUrls: ['./generatetoken.component.css']
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _services_gentoken_service__WEBPACK_IMPORTED_MODULE_4__["GentokenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_services_hosplist_service__WEBPACK_IMPORTED_MODULE_6__["HosplistService"] }, { type: src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_7__["NavbarService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }]; }, null); })();


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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/user.service */ "qfBg");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'DPDP';
        this.currUser = authService.getLoggedUser();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "T+hd":
/*!*******************************************************************!*\
  !*** ./src/app/components/patientslist/patientslist.component.ts ***!
  \*******************************************************************/
/*! exports provided: PatientslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientslistComponent", function() { return PatientslistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/patient.service */ "7wfR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/navbar.service */ "n2q6");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-pagination */ "oOf3");


















function PatientslistComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientslistComponent_tr_41_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.viewPatient(ctx_r4.currPatient._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientslistComponent_tr_41_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.updatePatient(ctx_r6.currPatient._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientslistComponent_tr_41_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.deletePatient(ctx_r7.currPatient._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.currPatient.Hospital);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.currPatient.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.currPatient.fullNameAr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.currPatient.Gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.currPatient.Age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.currPatient.submittedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.IsUserAuthorized());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.IsUserAuthorized());
} }
function PatientslistComponent_tbody_42_tr_1_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r9.Hospital);
} }
function PatientslistComponent_tbody_42_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r9.fullName);
} }
function PatientslistComponent_tbody_42_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r9.fullNameAr);
} }
function PatientslistComponent_tbody_42_tr_1_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r9.Gender);
} }
function PatientslistComponent_tbody_42_tr_1_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r9.Age);
} }
function PatientslistComponent_tbody_42_tr_1_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r9.submittedBy);
} }
function PatientslistComponent_tbody_42_tr_1_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientslistComponent_tbody_42_tr_1_td_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const s_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.viewPatient(s_r9._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientslistComponent_tbody_42_tr_1_td_7_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const s_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.updatePatient(s_r9._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientslistComponent_tbody_42_tr_1_td_7_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const s_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.deletePatient(s_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientslistComponent_tbody_42_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PatientslistComponent_tbody_42_tr_1_th_1_Template, 2, 1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PatientslistComponent_tbody_42_tr_1_td_2_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PatientslistComponent_tbody_42_tr_1_td_3_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PatientslistComponent_tbody_42_tr_1_td_4_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PatientslistComponent_tbody_42_tr_1_td_5_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PatientslistComponent_tbody_42_tr_1_td_6_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PatientslistComponent_tbody_42_tr_1_td_7_Template, 7, 0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", s_r9.Hospital);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", s_r9.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", s_r9.fullNameAr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", s_r9.Gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", s_r9.Age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", s_r9.submittedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", s_r9);
} }
const _c0 = function (a1) { return { itemsPerPage: 10, currentPage: a1 }; };
function PatientslistComponent_tbody_42_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PatientslistComponent_tbody_42_tr_1_Template, 8, 7, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pagination-controls", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PatientslistComponent_tbody_42_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.p = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r3.HospPatients, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r3.p)));
} }
class PatientslistComponent {
    constructor(authService, patientService, router, fb, dialog, nav) {
        this.authService = authService;
        this.patientService = patientService;
        this.router = router;
        this.fb = fb;
        this.dialog = dialog;
        this.nav = nav;
        this.p = 1;
        this.currUser = this.authService.getLoggedUser();
        this.searchForm = this.fb.group({
            searchInp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            searchCrit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ngOnInit() {
        this.nav.show();
        this.fetchAllPbyHospital();
    }
    fetchAllPbyHospital() {
        this.patientService.getPatientsbyHosp(this.currUser.Hospital).subscribe((data) => {
            this.HospPatients = data;
        });
    }
    clearSearch() {
        this.currPatient = null;
        this.fetchAllPbyHospital();
    }
    clearTable() {
        this.HospPatients = null;
    }
    fetchP() {
        this.clearTable();
        if (this.searchForm.controls.searchCrit.value == "n_ID") {
            this.patientService.getPatientbynID(this.searchForm.controls.searchInp.value).subscribe((data) => {
                this.currPatient = data;
            });
        }
        else {
            this.patientService.getPatientbyfullNameAr(this.searchForm.controls.searchInp.value).subscribe((data) => {
                this.currPatient = data;
            });
        }
    }
    IsUserAuthorized() {
        if ((this.authService.isUserAuthorized(this.currPatient.Hospital)) || this.currUser.isAdmin) {
            return false;
        }
        else {
            return true;
        }
    }
    viewPatient(id) {
        this.router.navigate([`/viewdetails/`, id]);
    }
    updatePatient(id) {
        this.router.navigate([`/update/`, id]);
    }
    deletePatient(delPatient) {
        {
            if (confirm("Are you sure to delete the record of " + delPatient.fullName)) {
                this.patientService.deletePatient(delPatient._id).subscribe(() => {
                });
                this.fetchP();
            }
        }
    }
}
PatientslistComponent.ɵfac = function PatientslistComponent_Factory(t) { return new (t || PatientslistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_6__["NavbarService"])); };
PatientslistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PatientslistComponent, selectors: [["app-patientslist"]], decls: 43, vars: 3, consts: [[1, "d-", "flex", "justify-content-center"], [1, "shadow"], ["d-flex", "", "justify-content-start", ""], ["id", "table-bg", 1, "search-form", "p-2", 3, "formGroup"], [1, "search-field"], ["matInput", "", "placeholder", "Search", "formControlName", "searchInp"], ["searchInp", ""], [1, "search-critera"], ["placeholder", "Criteria", "formControlName", "searchCrit"], ["searchCrit", ""], ["value", "n_ID"], ["value", "fullNameAr"], ["mat-button", "", "type", "submit", 1, "search-button", "p-0", 3, "click"], ["mat-button", "", 1, "search-button", "p-0", 3, "click"], [1, "table", "table-sm", "table-light"], [1, "table-primary"], ["scope", "col", 1, "th-primary"], [4, "ngIf"], ["scope", "row", 1, "table-element"], [1, "table-element"], [1, "table-element", "d-flex", "justify-content-around"], ["mat-button", "", 1, "option-button", "p-0", 3, "click"], ["mat-button", "", 1, "option-button", "p-0", 3, "disabled", "click"], [4, "ngFor", "ngForOf"], [1, "p-2", "patient-pagination", 3, "pageChange"], ["class", "table-element", "scope", "row", 4, "ngIf"], ["class", "table-element", 4, "ngIf"], ["class", "table-element d-flex justify-content-around", 4, "ngIf"], ["mat-button", "", 1, "option-button", "p-1", 3, "click"]], template: function PatientslistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "National ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0627\u0644\u0627\u0633\u0645");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientslistComponent_Template_button_click_15_listener() { return ctx.fetchP(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientslistComponent_Template_button_click_17_listener() { return ctx.clearSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Hospital");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Submitted By");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PatientslistComponent_tr_41_Template, 20, 8, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, PatientslistComponent_tbody_42_Template, 4, 6, "tbody", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currPatient);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.HospPatients);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["PaginatePipe"]], styles: [".search-card[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    inline-size: 50%;\r\n}\r\n\r\n.search-field[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    margin-right: 20px;\r\n}\r\n\r\n.search-criteria[_ngcontent-%COMP%]{\r\n    color: #088156;\r\n    width: 20%;\r\n}\r\n\r\n.table-primary[_ngcontent-%COMP%]{\r\n    color: #DAD2B9;\r\n    width: 75%;\r\n    font-size: small;\r\n}\r\n\r\n.th-primary[_ngcontent-%COMP%]{\r\n    background-color: #088156;\r\n}\r\n\r\n.table-element[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    color: black;\r\n    font-weight: lighter;\r\n}\r\n\r\n.option-button[_ngcontent-%COMP%] {\r\n    font-family: \"Roboto\", sans-serif;\r\n  text-transform: uppercase;\r\n  display: inline;\r\n  outline: 0;\r\n  background: #088156;\r\n  color: rgb(255, 255, 255);\r\n  width: 30%;\r\n  border: 0;\r\n  margin-right: 20px;\r\n  color: hsl(#ffffffad);\r\n  font-size: 10px;\r\n  transition: all 0.3 ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.option-button[_ngcontent-%COMP%]:enabled:hover {\r\n    background: #077750;\r\n}\r\n\r\n.search-button[_ngcontent-%COMP%] {\r\n    font-family: \"Roboto\", sans-serif;\r\n    text-transform: uppercase;\r\n    outline: 0;\r\n    background: #088156;\r\n    color: white;\r\n    width: 10%;\r\n    border: 0;\r\n    margin-left: 10px;\r\n    color: hsl(#ffffffad);\r\n    font-size: 10px;\r\n    transition: all 0.3 ease;\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n.option-button[_ngcontent-%COMP%]:disabled{\r\n    background: #044d3291;\r\n    color: #707070;\r\n}\r\n\r\n.patient-pagination[_ngcontent-%COMP%]     .ngx-pagination .current{\r\n    background-color: #088156;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXRpZW50c2xpc3QvcGF0aWVudHNsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUNBQWlDO0VBQ25DLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFFZix3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osVUFBVTtJQUNWLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGVBQWU7SUFFZix3QkFBd0I7SUFDeEIsZUFBZTs7QUFFbkI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF0aWVudHNsaXN0L3BhdGllbnRzbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1jYXJke1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGlubGluZS1zaXplOiA1MCU7XHJcbn1cclxuXHJcbi5zZWFyY2gtZmllbGR7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5zZWFyY2gtY3JpdGVyaWF7XHJcbiAgICBjb2xvcjogIzA4ODE1NjtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuLnRhYmxlLXByaW1hcnl7XHJcbiAgICBjb2xvcjogI0RBRDJCOTtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcbi50aC1wcmltYXJ5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4ODE1NjtcclxufVxyXG4udGFibGUtZWxlbWVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbi5vcHRpb24tYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYmFja2dyb3VuZDogIzA4ODE1NjtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBjb2xvcjogaHNsKCNmZmZmZmZhZCk7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm9wdGlvbi1idXR0b246ZW5hYmxlZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDc3NzUwO1xyXG59XHJcbi5zZWFyY2gtYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDg4MTU2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6IGhzbCgjZmZmZmZmYWQpO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG59XHJcbi5vcHRpb24tYnV0dG9uOmRpc2FibGVke1xyXG4gICAgYmFja2dyb3VuZDogIzA0NGQzMjkxO1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuLnBhdGllbnQtcGFnaW5hdGlvbiAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4ODE1NjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientslistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-patientslist',
                templateUrl: './patientslist.component.html',
                styleUrls: ['./patientslist.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_6__["NavbarService"] }]; }, null); })();


/***/ }),

/***/ "TNZB":
/*!***********************************************************!*\
  !*** ./src/app/components/userpage/userpage.component.ts ***!
  \***********************************************************/
/*! exports provided: UserpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserpageComponent", function() { return UserpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/navbar.service */ "n2q6");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");







class UserpageComponent {
    constructor(nav, userService, router) {
        this.nav = nav;
        this.userService = userService;
        this.router = router;
        this.currUser = userService.getLoggedUser();
    }
    ngOnInit() {
        this.nav.show();
    }
}
UserpageComponent.ɵfac = function UserpageComponent_Factory(t) { return new (t || UserpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
UserpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserpageComponent, selectors: [["app-userpage"]], decls: 29, vars: 5, consts: [[1, "d-flex", "justify-content-center"], ["id", "profileform-bg", 1, "info-box", "shadow"], [1, "p-6", "input-border"]], template: function UserpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Profile Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Hospital");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currUser.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currUser.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currUser.Hospital);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currUser.contactInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currUser.isAdmin ? "Administrator" : "User");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"]], styles: [".info-box[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    height: 700px;\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VycGFnZS91c2VycGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7OztBQUdqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnBhZ2UvdXNlcnBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvLWJveHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG5cclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-userpage',
                templateUrl: './userpage.component.html',
                styleUrls: ['./userpage.component.css']
            }]
    }], function () { return [{ type: src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard, RoleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuard", function() { return RoleGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();
class RoleGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.isAdminAuthorized) {
            return true;
        }
        else {
            return false;
        }
    }
}


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/navbar.service */ "n2q6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function LoginComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Wrong credentials or user does not exist ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.dismissAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(userService, router, fb, nav) {
        this.userService = userService;
        this.router = router;
        this.fb = fb;
        this.nav = nav;
        this.hide = true;
        this.alert = false;
        this.loginForm = this.fb.group({
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    ngOnInit() {
        this.nav.hide();
        this.userService.logOut();
    }
    dismissAlert() {
        this.alert = false;
    }
    loginUser() {
        this.loginEmail = this.loginForm.controls.Email.value;
        this.loginEmail = this.loginEmail.toLowerCase();
        this.loginPass = this.passwordInput.value;
        const userlogin = {
            email: this.loginEmail,
            password: this.loginPass
        };
        this.userService.authUser(userlogin).subscribe((data) => {
            if (data.success) {
                this.userService.storeUserData(data.token, data.user);
                this.router.navigate(['/list']);
            }
            else {
                console.log(data);
                this.alert = true;
            }
        });
    }
    get passwordInput() { return this.loginForm.get('Password'); }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_4__["NavbarService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 16, vars: 4, consts: [[1, "d-flex", "justify-content-center"], ["id", "loginform-bg", 1, "shadow", "rounded", "login-container"], [1, "form", 3, "formGroup"], ["class", "alert alert-danger alert-dismissible fade show alert-pop", "role", "alert", 4, "ngIf"], [1, "input-border", "login-input", "p-1"], ["matInput", "", "placeholder", "Email", "formControlName", "Email"], ["Email", ""], ["matInput", "", "placeholder", "Password", "formControlName", "Password", 3, "type"], ["Password", ""], ["matSuffix", "", 3, "click"], ["type", "button", "mat-button", "", 1, "main-btn", "login-btn", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show", "alert-pop"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_div_3_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_mat_icon_click_11_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_14_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alert);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: [".login-btn[_ngcontent-%COMP%]{\r\n    width: 175px;\r\n    height: 50px;\r\n    margin-left: 30%;\r\n    margin-top: 10%;\r\n    margin-bottom: 5%;\r\n\r\n}\r\n.alert-pop[_ngcontent-%COMP%]{\r\n    margin-bottom: 20px;\r\n    max-width: 100%;\r\n}\r\n.form[_ngcontent-%COMP%]{\r\n    width: 500px;\r\n    display: block;\r\n}\r\n.login-container[_ngcontent-%COMP%]{\r\n    width: 500px;\r\n    max-height: 400px;\r\n    margin-top: 10%;\r\n}\r\n.login-input[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin-top: 40px;\r\n    width: 400px;\r\n    margin-left: 10%;\r\n    text-align: center;\r\n    display: inline-block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1idG57XHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcblxyXG59XHJcbi5hbGVydC1wb3B7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5mb3Jte1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmxvZ2luLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbi5sb2dpbi1pbnB1dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_4__["NavbarService"] }]; }, null); })();


/***/ }),

/***/ "XC3f":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _inviteTokenClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../inviteTokenClass */ "d+rp");
/* harmony import */ var _userClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../userClass */ "x4nd");
/* harmony import */ var _services_hosplist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/hosplist.service */ "iVMD");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_gentoken_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/gentoken.service */ "/GgB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");


















function RegisterComponent_div_0_mat_hint_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter your password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_div_0_Template_mat_icon_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.hide = !ctx_r8.hide; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RegisterComponent_div_0_mat_hint_22_Template, 2, 0, "mat-hint", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_div_0_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.registerUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.registerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.tokenObj.isAdmin ? "User" : "Admin", " Registration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.hide ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.hide ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.passwordInput.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.registerForm.pristine || ctx_r0.registerForm.invalid);
} }
class RegisterComponent {
    constructor(hospListService, userService, tokenService, fb, router, _activatedRoute, _snackBar) {
        this.hospListService = hospListService;
        this.userService = userService;
        this.tokenService = tokenService;
        this.fb = fb;
        this.router = router;
        this._activatedRoute = _activatedRoute;
        this._snackBar = _snackBar;
        this.hide = true;
        this.tokenObj = new _inviteTokenClass__WEBPACK_IMPORTED_MODULE_2__["invT"];
        this.user = new _userClass__WEBPACK_IMPORTED_MODULE_3__["userObj"];
        this.registerForm = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            emailconfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(8)]],
            contactInfo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    getAllHospitals() {
        this.hospListService.getHospitals().subscribe((data) => {
            this.hospList = data;
        });
    }
    ngOnInit() {
        this.userService.logOut();
        this.getToken();
        this.getAllHospitals();
    }
    getToken() {
        this._activatedRoute.params.subscribe(parameter => {
            this.token = parameter['token'];
        });
        this.getTokenObj();
    }
    getTokenObj() {
        this.tokenService.getToken(this.token).subscribe((data) => {
            if (data == null) {
                this.router.navigate(['/**']);
            }
            else {
                this.isAuthorized = true;
                this.user.isAdmin = data.isAdmin;
                this.user.Hospital = data.Hospital;
            }
        });
    }
    registerUser() {
        this.temp = this.registerForm.controls.email.value;
        this.temp = this.temp.toLowerCase();
        this.userService.getUserId(this.temp).subscribe((data) => {
            if (data) {
                this._snackBar.open("Error: User with matching email already exists", "", { duration: 4000, panelClass: ['red-snackbar']
                });
            }
            else if (!data) {
                if (this.registerForm.controls.emailconfirm.value == this.registerForm.controls.email.value) {
                    this.user.firstName = this.registerForm.controls.firstName.value;
                    this.user.lastName = this.registerForm.controls.lastName.value;
                    this.user.email = this.registerForm.controls.email.value;
                    this.user.password = this.registerForm.controls.password.value;
                    this.user.contactInfo = this.registerForm.controls.contactInfo.value;
                    this.user.email = this.user.email.toLowerCase();
                    this.userService.regUser(this.user).subscribe(res => console.log(""));
                    this.tokenService.deleteToken(this.token).subscribe(res => console.log(""));
                    this.router.navigate(['/login']);
                    this._snackBar.open("Registration was successful, please login.", "", { duration: 4000, panelClass: ['green-snackbar'] });
                }
                else {
                    this._snackBar.open("Email confirmation mismatch", "", { duration: 4000, });
                }
            }
        });
    }
    get emailInput() { return this.registerForm.get('email'); }
    get passwordInput() { return this.registerForm.get('password'); }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_hosplist_service__WEBPACK_IMPORTED_MODULE_4__["HosplistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_gentoken_service__WEBPACK_IMPORTED_MODULE_6__["GentokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "shadow"], [3, "formGroup"], [2, "text-align", "center"], [1, "name-field"], ["matInput", "", "placeholder", "First Name", "formControlName", "firstName"], ["firstName", ""], ["matInput", "", "placeholder", "Last Name", "formControlName", "lastName"], ["lastName", ""], [1, "field-full-width"], ["matInput", "", "placeholder", "Email Address", "formControlName", "email"], ["email", ""], ["matInput", "", "placeholder", "Confirm Email Address", "formControlName", "emailconfirm"], ["emailconfirm", ""], ["matInput", "", "placeholder", "Password", "formControlName", "password", 3, "type"], ["password", ""], ["matSuffix", "", 3, "click"], ["matInput", "", "placeholder", "Contact Number (+966)", "formControlName", "contactInfo"], ["contactInfo", ""], [1, "d-flex", "justify-content-center"], ["type", "submit", "mat-button", "", 1, "mainbtn", 3, "disabled", "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RegisterComponent_div_0_Template, 30, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthorized);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatHint"]], styles: [".field-full-width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.name-field[_ngcontent-%COMP%] {\r\n    width: 49%;\r\n    margin-right: 1%;\r\n}\r\n.mainbtn[_ngcontent-%COMP%] {\r\nfont-family: \"Roboto\", sans-serif;\r\n  text-transform: uppercase;\r\n  display: block;\r\n  outline: 0;\r\n  background: #068355;\r\n  color: white;\r\n  width: 30%;\r\n  border: 0;\r\n  margin-right: 20px;\r\n  color: hsl(#ffffffad);\r\n  font-size: 10px;\r\n  transition: all 0.3 ease;\r\n  cursor: pointer;\r\n}\r\n.mainbtn[_ngcontent-%COMP%]:enabled:hover {\r\n    background: #078f5d;\r\n}\r\n.mainbtn[_ngcontent-%COMP%]:disabled {\r\n    background: #044d3291;\r\n    color: #707070;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxpQ0FBaUM7RUFDL0IseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztFQUNULGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUVmLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpZWxkLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm5hbWUtZmllbGQge1xyXG4gICAgd2lkdGg6IDQ5JTtcclxuICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbn1cclxuLm1haW5idG4ge1xyXG5mb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYmFja2dyb3VuZDogIzA2ODM1NTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBib3JkZXI6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiBoc2woI2ZmZmZmZmFkKTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubWFpbmJ0bjplbmFibGVkOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwNzhmNWQ7XHJcbn1cclxuLm1haW5idG46ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZDogIzA0NGQzMjkxO1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _services_hosplist_service__WEBPACK_IMPORTED_MODULE_4__["HosplistService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: _services_gentoken_service__WEBPACK_IMPORTED_MODULE_6__["GentokenService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }]; }, null); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_patientslist_patientslist_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/patientslist/patientslist.component */ "T+hd");
/* harmony import */ var _components_addpatient_addpatient_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/addpatient/addpatient.component */ "A0J8");
/* harmony import */ var _components_generatetoken_generatetoken_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/generatetoken/generatetoken.component */ "Olwy");
/* harmony import */ var _components_viewpatientdetails_viewpatientdetails_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/viewpatientdetails/viewpatientdetails.component */ "14Ff");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/patient.service */ "7wfR");
/* harmony import */ var _services_gentoken_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/gentoken.service */ "/GgB");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/user.service */ "qfBg");
/* harmony import */ var _components_updatepatient_updatepatient_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/updatepatient/updatepatient.component */ "amZW");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "JzmT");
/* harmony import */ var _components_userpage_userpage_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/userpage/userpage.component */ "TNZB");
/* harmony import */ var _components_userslist_userslist_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/userslist/userslist.component */ "fh5a");
/* harmony import */ var _components_user_update_user_update_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/user-update/user-update.component */ "bxAD");
/* harmony import */ var _services_hosplist_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./services/hosplist.service */ "iVMD");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _components_addhospital_addhospital_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/addhospital/addhospital.component */ "ZKea");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./services/navbar.service */ "n2q6");














































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_patient_service__WEBPACK_IMPORTED_MODULE_33__["PatientService"], _services_user_service__WEBPACK_IMPORTED_MODULE_35__["UserService"], _services_gentoken_service__WEBPACK_IMPORTED_MODULE_34__["GentokenService"], _services_hosplist_service__WEBPACK_IMPORTED_MODULE_41__["HosplistService"], _services_navbar_service__WEBPACK_IMPORTED_MODULE_44__["NavbarService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AuthGuard"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_21__["NgxPaginationModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_26__["RegisterComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_27__["LoginComponent"],
        _components_patientslist_patientslist_component__WEBPACK_IMPORTED_MODULE_28__["PatientslistComponent"],
        _components_addpatient_addpatient_component__WEBPACK_IMPORTED_MODULE_29__["AddpatientComponent"],
        _components_generatetoken_generatetoken_component__WEBPACK_IMPORTED_MODULE_30__["GeneratetokenComponent"],
        _components_viewpatientdetails_viewpatientdetails_component__WEBPACK_IMPORTED_MODULE_31__["ViewpatientdetailsComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_32__["NavbarComponent"],
        _components_updatepatient_updatepatient_component__WEBPACK_IMPORTED_MODULE_36__["UpdatepatientComponent"],
        _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_37__["PageNotFoundComponent"],
        _components_userpage_userpage_component__WEBPACK_IMPORTED_MODULE_38__["UserpageComponent"],
        _components_userslist_userslist_component__WEBPACK_IMPORTED_MODULE_39__["UserslistComponent"],
        _components_user_update_user_update_component__WEBPACK_IMPORTED_MODULE_40__["UserUpdateComponent"],
        _components_addhospital_addhospital_component__WEBPACK_IMPORTED_MODULE_43__["AddhospitalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_21__["NgxPaginationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"],
                    _components_register_register_component__WEBPACK_IMPORTED_MODULE_26__["RegisterComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_27__["LoginComponent"],
                    _components_patientslist_patientslist_component__WEBPACK_IMPORTED_MODULE_28__["PatientslistComponent"],
                    _components_addpatient_addpatient_component__WEBPACK_IMPORTED_MODULE_29__["AddpatientComponent"],
                    _components_generatetoken_generatetoken_component__WEBPACK_IMPORTED_MODULE_30__["GeneratetokenComponent"],
                    _components_viewpatientdetails_viewpatientdetails_component__WEBPACK_IMPORTED_MODULE_31__["ViewpatientdetailsComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_32__["NavbarComponent"],
                    _components_updatepatient_updatepatient_component__WEBPACK_IMPORTED_MODULE_36__["UpdatepatientComponent"],
                    _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_37__["PageNotFoundComponent"],
                    _components_userpage_userpage_component__WEBPACK_IMPORTED_MODULE_38__["UserpageComponent"],
                    _components_userslist_userslist_component__WEBPACK_IMPORTED_MODULE_39__["UserslistComponent"],
                    _components_user_update_user_update_component__WEBPACK_IMPORTED_MODULE_40__["UserUpdateComponent"],
                    _components_addhospital_addhospital_component__WEBPACK_IMPORTED_MODULE_43__["AddhospitalComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipsModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_21__["NgxPaginationModule"],
                ],
                providers: [_services_patient_service__WEBPACK_IMPORTED_MODULE_33__["PatientService"], _services_user_service__WEBPACK_IMPORTED_MODULE_35__["UserService"], _services_gentoken_service__WEBPACK_IMPORTED_MODULE_34__["GentokenService"], _services_hosplist_service__WEBPACK_IMPORTED_MODULE_41__["HosplistService"], _services_navbar_service__WEBPACK_IMPORTED_MODULE_44__["NavbarService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_42__["AuthGuard"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZKea":
/*!*****************************************************************!*\
  !*** ./src/app/components/addhospital/addhospital.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddhospitalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddhospitalComponent", function() { return AddhospitalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_hosplist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/hosplist.service */ "iVMD");
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/navbar.service */ "n2q6");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
















function AddhospitalComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hospital_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", hospital_r3.hospitalName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", hospital_r3.hospitalName, " ");
} }
class AddhospitalComponent {
    constructor(authService, router, hospService, nav, fb, _snackBar) {
        this.authService = authService;
        this.router = router;
        this.hospService = hospService;
        this.nav = nav;
        this.fb = fb;
        this._snackBar = _snackBar;
        this.currUser = authService.getLoggedUser();
        this.hospAddForm = this.fb.group({
            hospName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.hospRemoveForm = this.fb.group({
            hospName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ngOnInit() {
        if (!this.currUser.isAdmin) {
            this.router.navigate(['/**']);
        }
        else {
            this.nav.show();
            this.getAllHospitals();
        }
    }
    getAllHospitals() {
        this.hospService.getHospitals().subscribe((data) => {
            this.hospList = data;
        });
    }
    addHosp() {
        this.hospService.addHosp(this.hospAddForm.controls.hospName.value).subscribe(res => console.log(""));
        window.location.reload();
        this._snackBar.open("New hospital added successfully", "", {
            duration: 4000, panelClass: ['green-snackbar']
        });
    }
    removeHosp() {
        if (confirm("Are you sure you want to remove this hospital?")) {
            this.hospService.removeHosp(this.hospRemoveForm.controls.hospName.value).subscribe(res => console.log(""));
            window.location.reload();
            this._snackBar.open("Hospital removed successfully", "", {
                duration: 4000, panelClass: ['green-snackbar']
            });
        }
    }
}
AddhospitalComponent.ɵfac = function AddhospitalComponent_Factory(t) { return new (t || AddhospitalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_hosplist_service__WEBPACK_IMPORTED_MODULE_4__["HosplistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_5__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); };
AddhospitalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddhospitalComponent, selectors: [["app-addhospital"]], decls: 19, vars: 5, consts: [[1, "d-flex", "justify-content-center"], ["id", "table-bg", 1, "d-flex", "flex-row", "justify-content-between", "shadow", "card-width"], [1, "form-margins", 3, "formGroup"], ["matInput", "", "formControlName", "hospName", "placeholder", "Hospital Name"], ["hospName", ""], ["mat-button", "", "type", "submit", 1, "main-btn", 3, "disabled", "click"], [1, "justify-content-center", 3, "formGroup"], ["placeholder", "Hospital Name", "formControlName", "hospName"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AddhospitalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add hospital");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddhospitalComponent_Template_button_click_8_listener() { return ctx.addHosp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Remove hospital");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 7, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddhospitalComponent_mat_option_16_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddhospitalComponent_Template_button_click_17_listener() { return ctx.removeHosp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.hospAddForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.hospAddForm.pristine || ctx.hospAddForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.hospRemoveForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hospList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.hospRemoveForm.pristine || ctx.hospRemoveForm.invalid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]], styles: [".main-btn[_ngcontent-%COMP%]:disabled{\r\n    background: #044d3291;\r\n    color: #707070;\r\n}\r\n.main-btn[_ngcontent-%COMP%]{\r\n    margin-left: 20px;\r\n}\r\n.form-margins[_ngcontent-%COMP%]{\r\n    margin-right: 60%;\r\n}\r\n.card-width[_ngcontent-%COMP%]{\r\n    width: 1920px;\r\n}\r\n#table-bg[_ngcontent-%COMP%]{\r\n    background-position-x: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGRob3NwaXRhbC9hZGRob3NwaXRhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZGhvc3BpdGFsL2FkZGhvc3BpdGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1idG46ZGlzYWJsZWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDQ0ZDMyOTE7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG4ubWFpbi1idG57XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4uZm9ybS1tYXJnaW5ze1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2MCU7XHJcbn1cclxuLmNhcmQtd2lkdGh7XHJcbiAgICB3aWR0aDogMTkyMHB4O1xyXG59XHJcblxyXG4jdGFibGUtYmd7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddhospitalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-addhospital',
                templateUrl: './addhospital.component.html',
                styleUrls: ['./addhospital.component.css']
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_hosplist_service__WEBPACK_IMPORTED_MODULE_4__["HosplistService"] }, { type: src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_5__["NavbarService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "amZW":
/*!*********************************************************************!*\
  !*** ./src/app/components/updatepatient/updatepatient.component.ts ***!
  \*********************************************************************/
/*! exports provided: UpdatepatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatepatientComponent", function() { return UpdatepatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _patientClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../patientClass */ "h+Cs");
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/navbar.service */ "n2q6");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _services_hosplist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/hosplist.service */ "iVMD");
/* harmony import */ var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/patient.service */ "7wfR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");






















function UpdatepatientComponent_div_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Patient Personal Details");
} }
function UpdatepatientComponent_div_0_mat_form_field_10_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hospital_r102 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", hospital_r102.hospitalName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", hospital_r102.hospitalName, " ");
} }
function UpdatepatientComponent_div_0_mat_form_field_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 197, 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UpdatepatientComponent_div_0_mat_form_field_10_mat_option_3_Template, 2, 2, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.hospList);
} }
function UpdatepatientComponent_div_0_mat_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r103 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", country_r103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r103);
} }
function UpdatepatientComponent_div_0_ng_template_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Medical History");
} }
function UpdatepatientComponent_div_0_mat_form_field_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 200, 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UpdatepatientComponent_div_0_mat_form_field_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 202, 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UpdatepatientComponent_div_0_mat_form_field_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 204, 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UpdatepatientComponent_div_0_mat_form_field_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 207, 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UpdatepatientComponent_div_0_ng_template_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Vascular Access");
} }
function UpdatepatientComponent_div_0_mat_form_field_182_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 209, 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UpdatepatientComponent_div_0_mat_form_field_210_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 211, 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UpdatepatientComponent_div_0_ng_template_238_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Dialysis Prescription");
} }
function UpdatepatientComponent_div_0_mat_form_field_262_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 213, 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UpdatepatientComponent_div_0_mat_form_field_263_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 215, 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UpdatepatientComponent_div_0_mat_form_field_264_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 217, 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UpdatepatientComponent_div_0_mat_form_field_265_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 219, 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UpdatepatientComponent_div_0_mat_form_field_316_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 221, 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UpdatepatientComponent_div_0_ng_template_324_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Lab Results");
} }
function UpdatepatientComponent_div_0_mat_form_field_417_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 223, 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UpdatepatientComponent_div_0_ng_template_482_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Current Medication");
} }
function UpdatepatientComponent_div_0_mat_form_field_553_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Vaccination Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-datepicker-toggle", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-datepicker", null, 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r116);
} }
function UpdatepatientComponent_div_0_mat_form_field_561_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Vaccination Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-datepicker-toggle", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-datepicker", null, 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r117);
} }
function UpdatepatientComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-horizontal-stepper", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UpdatepatientComponent_div_0_ng_template_7_Template, 1, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UpdatepatientComponent_div_0_mat_form_field_10_Template, 4, 1, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-select", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-select", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, UpdatepatientComponent_div_0_mat_option_35_Template, 2, 2, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, UpdatepatientComponent_div_0_ng_template_66_Template, 1, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-form-field", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Start of Dialysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "mat-datepicker-toggle", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "mat-datepicker", null, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-select", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Unknown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Hypertensive Nephrosclerosis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Diabetic Nephropathy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Obstructive Nephropathy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "ADPKD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, UpdatepatientComponent_div_0_mat_form_field_90_Template, 3, 0, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Co-Morbidities:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdatepatientComponent_div_0_Template_mat_checkbox_change_95_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r118.cMorbDM = !ctx_r118.cMorbDM; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Diabetes Mellitus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdatepatientComponent_div_0_Template_mat_checkbox_change_98_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r120.cMorbHyp = !ctx_r120.cMorbHyp; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Hypertension");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdatepatientComponent_div_0_Template_mat_checkbox_change_101_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r121.cMorbIHD = !ctx_r121.cMorbIHD; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "IHD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdatepatientComponent_div_0_Template_mat_checkbox_change_104_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r122.cMorbE = !ctx_r122.cMorbE; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Epilepsy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdatepatientComponent_div_0_Template_mat_checkbox_change_107_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r123.SelectedCMorbOther = !ctx_r123.SelectedCMorbOther; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Other ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, UpdatepatientComponent_div_0_mat_form_field_110_Template, 3, 0, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-select", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Yes (Graft Survival)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, UpdatepatientComponent_div_0_mat_form_field_119_Template, 3, 0, "mat-form-field", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "mat-select", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](128, UpdatepatientComponent_div_0_mat_form_field_128_Template, 3, 0, "mat-form-field", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "mat-select", 54, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](144, UpdatepatientComponent_div_0_ng_template_144_Template, 1, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "mat-select", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "RT. AVF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "mat-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "LT. AVF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "mat-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Radio-ulnar AVF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "mat-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Brachio-cephalic AVF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "RT. AVG");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "mat-option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "LT. AVG");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "mat-option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Forearm AVG");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "mat-option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Upperarm AVG");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "mat-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Lower Limb AVG");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "mat-option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Chest AVG");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "RT. Permcath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "mat-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "LT. Permcath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "mat-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Int. Jugul Permcath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Subclavia Permcath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "mat-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Femoral Permcath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "mat-option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Transhepatic Permcath");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](182, UpdatepatientComponent_div_0_mat_form_field_182_Template, 3, 0, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "mat-form-field", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Date of Access Creation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "mat-datepicker-toggle", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "mat-datepicker", null, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Complications:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "mat-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdatepatientComponent_div_0_Template_mat_checkbox_change_195_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r124.CompIns = !ctx_r124.CompIns; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " Insufficiency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "mat-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdatepatientComponent_div_0_Template_mat_checkbox_change_198_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r125.CompInf = !ctx_r125.CompInf; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Infection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "mat-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdatepatientComponent_div_0_Template_mat_checkbox_change_201_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r126.CompAD = !ctx_r126.CompAD; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Aneurysmal Dilatation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "mat-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdatepatientComponent_div_0_Template_mat_checkbox_change_204_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r127.CompDC = !ctx_r127.CompDC; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Difficult Cannulation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "mat-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdatepatientComponent_div_0_Template_mat_checkbox_change_207_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r128.SelectedCompOther = !ctx_r128.SelectedCompOther; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](210, UpdatepatientComponent_div_0_mat_form_field_210_Template, 3, 0, "mat-form-field", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Previous Access(es):");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "input", 77, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "input", 79, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "input", 81, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "input", 83, 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](238, UpdatepatientComponent_div_0_ng_template_238_Template, 1, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "input", 85, 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "input", 87, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "input", 89, 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "mat-select", 91, 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "mat-option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Yes (Heparin)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "mat-option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Yes (LMWH)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](262, UpdatepatientComponent_div_0_mat_form_field_262_Template, 3, 0, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](263, UpdatepatientComponent_div_0_mat_form_field_263_Template, 3, 0, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](264, UpdatepatientComponent_div_0_mat_form_field_264_Template, 3, 0, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](265, UpdatepatientComponent_div_0_mat_form_field_265_Template, 3, 0, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "input", 95, 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "input", 97, 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "input", 99, 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Dialysis Complications:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "mat-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdatepatientComponent_div_0_Template_mat_checkbox_change_283_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r129.DCHA = !ctx_r129.DCHA; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Headache ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "mat-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdatepatientComponent_div_0_Template_mat_checkbox_change_286_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r130.DCHypot = !ctx_r130.DCHypot; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, " Hypotension");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "mat-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdatepatientComponent_div_0_Template_mat_checkbox_change_289_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r131.DCHypog = !ctx_r131.DCHypog; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, " Hypoglycemia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "mat-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdatepatientComponent_div_0_Template_mat_checkbox_change_292_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r132.DCHyper = !ctx_r132.DCHyper; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, " Hypertension");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "mat-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdatepatientComponent_div_0_Template_mat_checkbox_change_295_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r133.DCMC = !ctx_r133.DCMC; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "Muscle Cramps ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "mat-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdatepatientComponent_div_0_Template_mat_checkbox_change_298_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r134.DCAC = !ctx_r134.DCAC; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Abdominal Colic ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "mat-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdatepatientComponent_div_0_Template_mat_checkbox_change_301_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r135.DCV = !ctx_r135.DCV; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Vomiting ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "mat-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdatepatientComponent_div_0_Template_mat_checkbox_change_304_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r136.DCSZ = !ctx_r136.DCSZ; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Seizure ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "mat-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdatepatientComponent_div_0_Template_mat_checkbox_change_307_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r137.DCHS = !ctx_r137.DCHS; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Hypersensitivity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](309, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "mat-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdatepatientComponent_div_0_Template_mat_checkbox_change_310_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r138.DCIH = !ctx_r138.DCIH; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Itching ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "mat-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdatepatientComponent_div_0_Template_mat_checkbox_change_313_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r139.SelectedDCOther = !ctx_r139.SelectedDCOther; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, " Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](315, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](316, UpdatepatientComponent_div_0_mat_form_field_316_Template, 3, 0, "mat-form-field", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](324, UpdatepatientComponent_div_0_ng_template_324_Template, 1, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "mat-form-field", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "Lab Results Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](329, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "mat-datepicker-toggle", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](331, "mat-datepicker", null, 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "CBC:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "input", 103, 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "input", 105, 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "input", 107, 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "Chemistry:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](351, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "input", 109, 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](355, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](357, "input", 111, 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](359, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](361, "input", 113, 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](365, "input", 115, 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](367, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](369, "input", 116, 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](371, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](373, "input", 117, 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](375, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](377, "input", 119, 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](379, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](381, "input", 121, 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](383, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](385, "input", 123, 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](387, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](389, "input", 125, 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](391, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](393, "input", 127, 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](396, "input", 129, 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "Serology:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](401, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "mat-select", 131, 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "mat-option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "Positive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "mat-option", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "Negative");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](409, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "mat-select", 135, 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "mat-option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "Positive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "mat-option", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "Negative");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](417, UpdatepatientComponent_div_0_mat_form_field_417_Template, 3, 0, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](418, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "mat-select", 137, 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "mat-option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "Positive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "mat-option", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "Negative");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](426, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](428, "input", 139, 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "Iron Profile:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](433, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](435, "input", 141, 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](437, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](439, "input", 143, 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](441, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](443, "input", 145, 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](446, "input", 147, 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "Coagulation:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](451, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](453, "input", 149, 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](455, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](457, "input", 151, 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](459, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](461, "input", 153, 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](463, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, "Hormones:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](467, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](469, "input", 155, 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](471, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](473, "input", 157, 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](475, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](478, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](482, UpdatepatientComponent_div_0_ng_template_482_Template, 1, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](485, "input", 159, 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](487, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](489, "input", 161, 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](491, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](493, "input", 163, 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](495, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](497, "input", 165, 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](499, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](501, "input", 167, 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](503, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](505, "input", 169, 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](507, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](509, "input", 171, 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](511, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](513, "input", 173, 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](515, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](517, "input", 175, 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](519, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](521, "input", 177, 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](523, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](525, "input", 179, 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](527, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](529, "input", 181, 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](531, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](533, "input", 183, 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](535, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](537, "input", 185, 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](539, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](541, "input", 187, 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](544, "input", 189, 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "mat-select", 190, 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](552, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](553, UpdatepatientComponent_div_0_mat_form_field_553_Template, 7, 2, "mat-form-field", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "mat-select", 193, 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](558, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "mat-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](560, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](561, UpdatepatientComponent_div_0_mat_form_field_561_Template, 7, 2, "mat-form-field", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](562, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](563, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](564, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "button", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdatepatientComponent_div_0_Template_button_click_566_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r140.updateP(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](567, "UPDATE MEDICAL RECORD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](73);
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](190);
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](332);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.updateForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linear", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currUser.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.countryList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.updateForm.controls.oKidneyDisease.value == "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.cMorbDM);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.cMorbHyp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.cMorbIHD);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.cMorbE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.SelectedCMorbOther);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.SelectedCMorbOther);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.updateForm.controls.previousTr.value == "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.updateForm.controls.fitForTr.value == "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.updateForm.controls.currentAccess.value == "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.CompIns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.CompInf);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.CompAD);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.CompDC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.SelectedCompOther);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.SelectedCompOther);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.updateForm.controls.antiCoag.value == "Heparin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.updateForm.controls.antiCoag.value == "Heparin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.updateForm.controls.antiCoag.value == "LMWH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.updateForm.controls.antiCoag.value == "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.DCHA);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.DCHypot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.DCHypog);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.DCHyper);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.DCMC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.DCAC);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.DCV);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.DCSZ);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.DCHS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.DCIH);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.SelectedDCOther);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.SelectedDCOther);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.updateForm.controls.hcvAb.value == "Positive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.updateForm.controls.HepBV.value == "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.updateForm.controls.InfV.value == "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.updateForm.pristine || ctx_r0.updateForm.invalid);
} }
class UpdatepatientComponent {
    constructor(nav, authService, hospListService, fb, pService, router, _activatedRoute, _snackBar) {
        this.nav = nav;
        this.authService = authService;
        this.hospListService = hospListService;
        this.fb = fb;
        this.pService = pService;
        this.router = router;
        this._activatedRoute = _activatedRoute;
        this._snackBar = _snackBar;
        this.currPatient = new _patientClass__WEBPACK_IMPORTED_MODULE_2__["PatientObj"]();
        this.updatedP = new _patientClass__WEBPACK_IMPORTED_MODULE_2__["PatientObj"]();
        this.countryList = [
            "Saudi",
            "Non-Saudi"
        ];
        this.currUser = this.authService.getLoggedUser();
        this.updateForm = this.fb.group({
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fullNameAr: [''],
            Age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Height: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            bldGrp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            kAllergies: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Hospital: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            contactInfo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            n_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Nationality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            submittedBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dosDialysis: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            oKidneyDisease: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            otherKD: [''],
            coMorbidityOther: [''],
            previousTr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            prevTrGS: [''],
            fitForTr: [''],
            fitForTrReason: [''],
            potentialRDonors: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            currentAccess: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cAOther: [''],
            dOfAccessCreation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ComplicationOther: [''],
            previousAccess1: [''],
            previousAccess2: [''],
            previousAccess3: [''],
            previousAccess4: [''],
            Frequency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Duration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Dialyser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            antiCoag: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            hInit: [''],
            hMaint: [''],
            LMWHval: [''],
            antiCoReason: [''],
            dryWt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            avgWtGain: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dialAdeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dCompOther: [''],
            labDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cbcHB: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cbcWBC: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cbcPlatelets: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chemCre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chemUrea: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chemSod: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chemPot: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chemCal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chemPhos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chemAST: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chemALT: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chemAlb: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chemMag: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chemAlph: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chemOther: [''],
            Siron: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            TIBC: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Sferitin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            TSAT: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            hormPTH: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            hormVITD: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            hormOther: [''],
            hbsAg: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            hcvAb: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            hcvPCR: [''],
            hivI_II: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            otherSer: [''],
            coagPT: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            coagPPT: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            coagINR: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cMD1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cMD2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cMD3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cMD4: [''],
            cMD5: [''],
            cMD6: [''],
            cMD7: [''],
            cMD8: [''],
            cMD9: [''],
            cMD10: [''],
            cMD11: [''],
            cMD12: [''],
            cMD13: [''],
            cMD14: [''],
            cMD15: [''],
            cMD16: [''],
            HepBV: [''],
            HepBVDate: [''],
            InfV: [''],
            InfVDate: ['']
        });
    }
    ngOnInit() {
        if (!this.isUserAuthorized()) {
            this.router.navigate(['/**']);
        }
        this._activatedRoute.params.subscribe(parameter => {
            this.id = parameter['id'];
        });
        this.getAllHospitals();
        this.getPDetails();
    }
    getAllHospitals() {
        this.hospListService.getHospitals().subscribe((data) => {
            this.hospList = data;
        });
    }
    isUserAuthorized() {
        if (this.currUser.isAdmin || this.currUser.Hospital == this.currPatient.Hospital) {
            this.nav.show();
            return true;
        }
        else {
            return false;
        }
    }
    getPDetails() {
        this.pService.getPatientById(this.id).subscribe((data) => {
            this.currPatient = data;
            this.assignPat();
        });
    }
    assignPat() {
        this.updateForm.get('fullName').setValue(this.currPatient.fullName);
        this.updateForm.get('fullNameAr').setValue(this.currPatient.fullNameAr);
        this.updateForm.get('Age').setValue(this.currPatient.Age);
        this.updateForm.get('Height').setValue(this.currPatient.Height);
        this.updateForm.get('bldGrp').setValue(this.currPatient.bldGrp);
        this.updateForm.get('kAllergies').setValue(this.currPatient.kAllergies);
        this.updateForm.get('Hospital').setValue(this.currPatient.Hospital);
        this.updateForm.get('contactInfo').setValue(this.currPatient.contactInfo);
        this.updateForm.get('Gender').setValue(this.currPatient.Gender);
        this.updateForm.get('n_ID').setValue(this.currPatient.n_ID);
        this.updateForm.get('Nationality').setValue(this.currPatient.Nationality);
        this.updateForm.get('submittedBy').setValue(this.currPatient.submittedBy);
        this.updateForm.get('dosDialysis').setValue(this.currPatient.dosDialysis);
        this.updateForm.get('oKidneyDisease').setValue(this.currPatient.oKidneyDisease);
        this.updateForm.get('otherKD').setValue(this.currPatient.otherKD);
        this.cMorbHyp = this.currPatient.morbHype;
        this.cMorbDM = this.currPatient.morbDM;
        this.cMorbE = this.currPatient.morbEpi;
        if (this.currPatient.coMorbOther != null) {
            this.SelectedCMorbOther = true;
            this.updateForm.get('coMorbidityOther').setValue(this.currPatient.coMorbOther);
        }
        this.updateForm.get('previousTr').setValue(this.currPatient.previousTr);
        this.updateForm.get('prevTrGS').setValue(this.currPatient.prevTrGS);
        this.updateForm.get('fitForTr').setValue(this.currPatient.fitForTr);
        this.updateForm.get('fitForTrReason').setValue(this.currPatient.fitForTrReason);
        this.updateForm.get('potentialRDonors').setValue(this.currPatient.potentialRDonors);
        this.updateForm.get('currentAccess').setValue(this.currPatient.currentAccess);
        this.updateForm.get('cAOther').setValue(this.currPatient.cAOther);
        this.updateForm.get('dOfAccessCreation').setValue(this.currPatient.dOfAccessCreation);
        this.CompIns = this.currPatient.compInsuf;
        this.CompInf = this.currPatient.compInf;
        this.CompAD = this.currPatient.compAD;
        this.CompDC = this.currPatient.compDC;
        if (this.currPatient.compOther != null) {
            this.SelectedCompOther = true;
            this.updateForm.get('ComplicationOther').setValue(this.currPatient.compOther);
        }
        this.updateForm.get('previousAccess1').setValue(this.currPatient.previousAccess1);
        this.updateForm.get('previousAccess2').setValue(this.currPatient.previousAccess2);
        this.updateForm.get('previousAccess3').setValue(this.currPatient.previousAccess3);
        this.updateForm.get('previousAccess4').setValue(this.currPatient.previousAccess4);
        this.updateForm.get('Frequency').setValue(this.currPatient.Frequency);
        this.updateForm.get('Duration').setValue(this.currPatient.Duration);
        this.updateForm.get('Dialyser').setValue(this.currPatient.Dialyser);
        this.updateForm.get('antiCoag').setValue(this.currPatient.antiCoagulation);
        this.updateForm.get('hInit').setValue(this.currPatient.hInit);
        this.updateForm.get('hMaint').setValue(this.currPatient.hMaint);
        this.updateForm.get('LMWHval').setValue(this.currPatient.LMWHval);
        this.updateForm.get('antiCoReason').setValue(this.currPatient.antiCoReason);
        this.updateForm.get('dryWt').setValue(this.currPatient.dryWt);
        this.updateForm.get('avgWtGain').setValue(this.currPatient.avgWtGain);
        this.updateForm.get('dialAdeq').setValue(this.currPatient.dialAdeq);
        this.DCHA = this.currPatient.dCompHead;
        this.DCHypot = this.currPatient.dCompHOT;
        this.DCHypog = this.currPatient.dCompHG;
        this.DCHyper = this.currPatient.dCompHET;
        this.DCMC = this.currPatient.dCompMC;
        this.DCAC = this.currPatient.dCompAC;
        this.DCV = this.currPatient.dCompVom;
        this.DCSZ = this.currPatient.dCompSZ;
        this.DCHS = this.currPatient.dCompHS;
        this.DCIH = this.currPatient.dCompIt;
        if (this.currPatient.dCompOther != null) {
            this.SelectedDCOther = true;
            this.updateForm.get('dCompOther').setValue(this.currPatient.dCompOther);
        }
        this.updateForm.get('labDate').setValue(this.currPatient.labDate);
        this.updateForm.get('cbcHB').setValue(this.currPatient.cbcHB);
        this.updateForm.get('cbcWBC').setValue(this.currPatient.cbcWBC);
        this.updateForm.get('cbcPlatelets').setValue(this.currPatient.cbcPlatelets);
        this.updateForm.get('chemCre').setValue(this.currPatient.chemCre);
        this.updateForm.get('chemUrea').setValue(this.currPatient.chemUrea);
        this.updateForm.get('chemSod').setValue(this.currPatient.chemSod);
        this.updateForm.get('chemPot').setValue(this.currPatient.chemPot);
        this.updateForm.get('chemCal').setValue(this.currPatient.chemCal);
        this.updateForm.get('chemPhos').setValue(this.currPatient.chemPhos);
        this.updateForm.get('chemAST').setValue(this.currPatient.chemAST);
        this.updateForm.get('chemALT').setValue(this.currPatient.chemALT);
        this.updateForm.get('chemAlb').setValue(this.currPatient.chemAlb);
        this.updateForm.get('chemMag').setValue(this.currPatient.chemMag);
        this.updateForm.get('chemAlph').setValue(this.currPatient.chemAlph);
        this.updateForm.get('chemOther').setValue(this.currPatient.chemOther);
        this.updateForm.get('Siron').setValue(this.currPatient.Siron);
        this.updateForm.get('TIBC').setValue(this.currPatient.TIBC);
        this.updateForm.get('Sferitin').setValue(this.currPatient.Sferitin);
        this.updateForm.get('TSAT').setValue(this.currPatient.TSAT);
        this.updateForm.get('hormPTH').setValue(this.currPatient.hormPTH);
        this.updateForm.get('hormVITD').setValue(this.currPatient.hormVITD);
        this.updateForm.get('hormOther').setValue(this.currPatient.hormOther);
        this.updateForm.get('hbsAg').setValue(this.currPatient.hbsAg);
        this.updateForm.get('hcvAb').setValue(this.currPatient.hcvAb);
        this.updateForm.get('hcvPCR').setValue(this.currPatient.hcvPCR);
        this.updateForm.get('hivI_II').setValue(this.currPatient.hivI_II);
        this.updateForm.get('otherSer').setValue(this.currPatient.othrSer);
        this.updateForm.get('coagPT').setValue(this.currPatient.coagPT);
        this.updateForm.get('coagPPT').setValue(this.currPatient.coagPPT);
        this.updateForm.get('coagINR').setValue(this.currPatient.coagINR);
        this.updateForm.get('cMD1').setValue(this.currPatient.cMD1);
        this.updateForm.get('cMD2').setValue(this.currPatient.cMD2);
        this.updateForm.get('cMD3').setValue(this.currPatient.cMD3);
        this.updateForm.get('cMD4').setValue(this.currPatient.cMD4);
        this.updateForm.get('cMD5').setValue(this.currPatient.cMD5);
        this.updateForm.get('cMD6').setValue(this.currPatient.cMD6);
        this.updateForm.get('cMD7').setValue(this.currPatient.cMD7);
        this.updateForm.get('cMD8').setValue(this.currPatient.cMD8);
        this.updateForm.get('cMD9').setValue(this.currPatient.cMD9);
        this.updateForm.get('cMD10').setValue(this.currPatient.cMD10);
        this.updateForm.get('cMD11').setValue(this.currPatient.cMD11);
        this.updateForm.get('cMD12').setValue(this.currPatient.cMD12);
        this.updateForm.get('cMD13').setValue(this.currPatient.cMD13);
        this.updateForm.get('cMD14').setValue(this.currPatient.cMD14);
        this.updateForm.get('cMD15').setValue(this.currPatient.cMD15);
        this.updateForm.get('cMD16').setValue(this.currPatient.cMD16);
        this.updateForm.get('HepBV').setValue(this.currPatient.HepBV);
        this.updateForm.get('HepBVDate').setValue(this.currPatient.HepBVDate);
        this.updateForm.get('InfV').setValue(this.currPatient.InfV);
        this.updateForm.get('InfVDate').setValue(this.currPatient.InfVDate);
    }
    updateP() {
        this.pService.getPatientbynID(this.updateForm.controls.n_ID.value).subscribe((data) => {
            if (data && this.updateForm.controls.n_ID.value != this.currPatient.n_ID) {
                this._snackBar.open("Error: Medical record with matching National ID already exists", "", { duration: 4000, panelClass: ['red-snackbar']
                });
            }
            else {
                this.updatedP.fullName = this.updateForm.controls.fullName.value;
                this.updatedP.fullNameAr = this.updateForm.controls.fullNameAr.value;
                this.updatedP.Age = this.updateForm.controls.Age.value;
                this.updatedP.Height = this.updateForm.controls.Height.value;
                this.updatedP.bldGrp = this.updateForm.controls.bldGrp.value;
                this.updatedP.kAllergies = this.updateForm.controls.kAllergies.value;
                if (this.currUser.isAdmin) {
                    if (this.updateForm.controls.Hospital.value) {
                        this.updatedP.Hospital = this.updateForm.controls.Hospital.value;
                    }
                    else {
                        this.updatedP.Hospital = "Ranya";
                    }
                }
                else {
                    this.updatedP.Hospital = this.currUser.Hospital;
                }
                this.updatedP.contactInfo = this.updateForm.controls.contactInfo.value;
                this.updatedP.Gender = this.updateForm.controls.Gender.value;
                this.updatedP.n_ID = this.updateForm.controls.n_ID.value;
                this.updatedP.Nationality = this.updateForm.controls.Nationality.value;
                this.updatedP.submittedBy = this.updateForm.controls.submittedBy.value;
                this.updatedP.dosDialysis = this.updateForm.controls.dosDialysis.value;
                this.updatedP.oKidneyDisease = this.updateForm.controls.oKidneyDisease.value;
                this.updatedP.otherKD = this.updateForm.controls.otherKD.value;
                this.updatedP.morbHype = this.cMorbHyp;
                this.updatedP.morbDM = this.cMorbDM;
                this.updatedP.morbEpi = this.cMorbE;
                if (this.SelectedCMorbOther) {
                    this.updatedP.coMorbOther = this.updateForm.controls.coMorbidityOther.value;
                }
                this.updatedP.previousTr = this.updateForm.controls.previousTr.value;
                this.updatedP.prevTrGS = this.updateForm.controls.prevTrGS.value;
                this.updatedP.fitForTr = this.updateForm.controls.fitForTr.value;
                this.updatedP.fitForTrReason = this.updateForm.controls.fitForTrReason.value;
                this.updatedP.potentialRDonors = this.updateForm.controls.potentialRDonors.value;
                this.updatedP.currentAccess = this.updateForm.controls.currentAccess.value;
                this.updatedP.cAOther = this.updateForm.controls.cAOther.value;
                this.updatedP.dOfAccessCreation = this.updateForm.controls.dOfAccessCreation.value;
                this.updatedP.compInsuf = this.CompIns;
                this.updatedP.compInf = this.CompInf;
                this.updatedP.compAD = this.CompAD;
                this.updatedP.compDC = this.CompDC;
                if (this.SelectedDCOther) {
                    this.updatedP.compOther = this.updateForm.controls.ComplicationOther.value;
                }
                this.updatedP.previousAccess1 = this.updateForm.controls.previousAccess1.value;
                this.updatedP.previousAccess2 = this.updateForm.controls.previousAccess2.value;
                this.updatedP.previousAccess3 = this.updateForm.controls.previousAccess3.value;
                this.updatedP.previousAccess4 = this.updateForm.controls.previousAccess4.value;
                this.updatedP.Frequency = this.updateForm.controls.Frequency.value;
                this.updatedP.Duration = this.updateForm.controls.Duration.value;
                this.updatedP.Dialyser = this.updateForm.controls.Dialyser.value;
                this.updatedP.antiCoagulation = this.updateForm.controls.antiCoag.value;
                this.updatedP.hInit = this.updateForm.controls.hInit.value;
                this.updatedP.hMaint = this.updateForm.controls.hMaint.value;
                this.updatedP.LMWHval = this.updateForm.controls.LMWHval.value;
                this.updatedP.antiCoReason = this.updateForm.controls.antiCoReason.value;
                this.updatedP.dryWt = this.updateForm.controls.dryWt.value;
                this.updatedP.avgWtGain = this.updateForm.controls.avgWtGain.value;
                this.updatedP.dialAdeq = this.updateForm.controls.dialAdeq.value;
                this.updatedP.dCompHead = this.DCHA;
                this.updatedP.dCompHOT = this.DCHypot;
                this.updatedP.dCompHG = this.DCHypog;
                this.updatedP.dCompHET = this.DCHyper;
                this.updatedP.dCompMC = this.DCMC;
                this.updatedP.dCompAC = this.DCAC;
                this.updatedP.dCompVom = this.DCV;
                this.updatedP.dCompSZ = this.DCSZ;
                this.updatedP.dCompHS = this.DCHS;
                this.updatedP.dCompIt = this.DCIH;
                if (this.SelectedCompOther) {
                    this.updatedP.dCompOther = this.updateForm.controls.dCompOther.value;
                }
                this.updatedP.labDate = this.updateForm.controls.labDate.value;
                this.updatedP.cbcHB = this.updateForm.controls.cbcHB.value;
                this.updatedP.cbcWBC = this.updateForm.controls.cbcWBC.value;
                this.updatedP.cbcPlatelets = this.updateForm.controls.cbcPlatelets.value;
                this.updatedP.chemCre = this.updateForm.controls.chemCre.value;
                this.updatedP.chemUrea = this.updateForm.controls.chemUrea.value;
                this.updatedP.chemSod = this.updateForm.controls.chemSod.value;
                this.updatedP.chemPot = this.updateForm.controls.chemPot.value;
                this.updatedP.chemCal = this.updateForm.controls.chemCal.value;
                this.updatedP.chemPhos = this.updateForm.controls.chemPhos.value;
                this.updatedP.chemAST = this.updateForm.controls.chemAST.value;
                this.updatedP.chemALT = this.updateForm.controls.chemALT.value;
                this.updatedP.chemAlb = this.updateForm.controls.chemAlb.value;
                this.updatedP.chemMag = this.updateForm.controls.chemMag.value;
                this.updatedP.chemAlph = this.updateForm.controls.chemAlph.value;
                this.updatedP.chemOther = this.updateForm.controls.chemOther.value;
                this.updatedP.Siron = this.updateForm.controls.Siron.value;
                this.updatedP.TIBC = this.updateForm.controls.TIBC.value;
                this.updatedP.Sferitin = this.updateForm.controls.Sferitin.value;
                this.updatedP.TSAT = this.updateForm.controls.TSAT.value;
                this.updatedP.hormPTH = this.updateForm.controls.hormPTH.value;
                this.updatedP.hormVITD = this.updateForm.controls.hormVITD.value;
                this.updatedP.hormOther = this.updateForm.controls.hormOther.value;
                this.updatedP.hbsAg = this.updateForm.controls.hbsAg.value;
                this.updatedP.hcvAb = this.updateForm.controls.hcvAb.value;
                this.updatedP.hcvPCR = this.updateForm.controls.hcvPCR.value;
                this.updatedP.hivI_II = this.updateForm.controls.hivI_II.value;
                this.updatedP.othrSer = this.updateForm.controls.otherSer.value;
                this.updatedP.coagPT = this.updateForm.controls.coagPT.value;
                this.updatedP.coagPPT = this.updateForm.controls.coagPPT.value;
                this.updatedP.coagINR = this.updateForm.controls.coagINR.value;
                this.updatedP.cMD1 = this.updateForm.controls.cMD1.value;
                this.updatedP.cMD2 = this.updateForm.controls.cMD2.value;
                this.updatedP.cMD3 = this.updateForm.controls.cMD3.value;
                this.updatedP.cMD4 = this.updateForm.controls.cMD4.value;
                this.updatedP.cMD5 = this.updateForm.controls.cMD5.value;
                this.updatedP.cMD6 = this.updateForm.controls.cMD6.value;
                this.updatedP.cMD7 = this.updateForm.controls.cMD7.value;
                this.updatedP.cMD8 = this.updateForm.controls.cMD8.value;
                this.updatedP.cMD9 = this.updateForm.controls.cMD9.value;
                this.updatedP.cMD10 = this.updateForm.controls.cMD10.value;
                this.updatedP.cMD11 = this.updateForm.controls.cMD11.value;
                this.updatedP.cMD12 = this.updateForm.controls.cMD12.value;
                this.updatedP.cMD13 = this.updateForm.controls.cMD13.value;
                this.updatedP.cMD14 = this.updateForm.controls.cMD14.value;
                this.updatedP.cMD15 = this.updateForm.controls.cMD15.value;
                this.updatedP.cMD16 = this.updateForm.controls.cMD16.value;
                this.updatedP.HepBV = this.updateForm.controls.HepBV.value;
                this.updatedP.HepBVDate = this.updateForm.controls.HepBVDate.value;
                this.updatedP.InfV = this.updateForm.controls.InfV.value;
                this.updatedP.InfVDate = this.updateForm.controls.InfVDate.value;
                this._snackBar.open("Medical record updated successfully", "", { duration: 4000, panelClass: ['green-snackbar']
                });
                this.pService.updatePatient(this.id, this.updatedP).subscribe(res => console.log(res));
                this.router.navigate(['/list']);
            }
        });
    }
}
UpdatepatientComponent.ɵfac = function UpdatepatientComponent_Factory(t) { return new (t || UpdatepatientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_3__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_hosplist_service__WEBPACK_IMPORTED_MODULE_5__["HosplistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_6__["PatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"])); };
UpdatepatientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdatepatientComponent, selectors: [["app-updatepatient"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "shadow"], [1, "update-form", 3, "formGroup"], ["id", "form-bg", 3, "linear"], ["stepper", ""], ["matStepLabel", ""], ["class", "inputfield", 4, "ngIf"], [1, "inputfield"], ["matInput", "", "placeholder", "Full Name", "formControlName", "fullName"], ["fullName", ""], ["matInput", "", "placeholder", "Full Name (Arabic)", "formControlName", "fullNameAr"], ["fullNameAr", ""], ["placeholder", "Gender", "formControlName", "Gender"], ["Gender", ""], ["value", "Male"], ["value", "Female"], ["matInput", "", "placeholder", "Age", "formControlName", "Age"], ["Age", ""], ["placeholder", "Nationality", "formControlName", "Nationality"], ["Nationality", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "National ID", "formControlName", "n_ID"], ["n_ID", ""], ["matInput", "", "placeholder", "Contact Number (+966)", "formControlName", "contactInfo"], ["contactInfo", ""], ["matInput", "", "placeholder", "Blood Group", "formControlName", "bldGrp"], ["bldGrp", ""], ["matInput", "", "placeholder", "Height (cm)", "formControlName", "Height"], ["Height", ""], ["matInput", "", "placeholder", "Known Allergies", "formControlName", "kAllergies"], ["kAllergies", ""], ["matInput", "", "placeholder", "Submitted By", "formControlName", "submittedBy"], ["submittedBy", ""], ["mat-button", "", "matStepperNext", "", 1, "main-btn", "next-btn"], ["appearance", "fill"], ["matInput", "", "formControlName", "dosDialysis", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["dosDialysis", ""], ["name", "oKidneyDisease", "placeholder", "Original Kidney Disease", "formControlName", "oKidneyDisease"], ["oKidneyDisease", ""], ["value", "Unknown"], ["value", "Hypertensive Nephrosclerosis"], ["value", "Diabetic Nephropathy"], ["value", "Obstructive Nephropathy"], ["value", "ADPKD"], ["value", "Other"], ["labelPosition", "before", 3, "checked", "change"], ["name", "previousTr", "placeholder", "Previous Transplantation", "formControlName", "previousTr"], ["previousTr", ""], ["value", "No"], ["value", "Yes"], ["name", "fitForTr", "placeholder", "Fit for Transplantation", "formControlName", "fitForTr"], ["fitForTr", ""], ["class", "hiddeninputfield", 4, "ngIf"], ["name", "potentialRDonors", "placeholder", "Potiential Relative Donors", "formControlName", "potentialRDonors"], ["potentialRDonors", ""], ["mat-button", "", "matStepperPrevious", "", 1, "main-btn", "next-btn"], ["name", "currentAccess", "placeholder", "Current Access", "formControlName", "currentAccess"], ["currentAccess", ""], ["value", "RT. AVF"], ["value", "LT. AVF"], ["value", "Radio-ulnar AVF"], ["value", "Brachio-cephalic AVF"], ["value", "RT. AVG"], ["value", "LT. AVG"], ["value", "Forearm AVG"], ["value", "Upperarm AVG"], ["value", "Lower-limb AVG"], ["value", "Chest AVG"], ["value", "RT. Permcath"], ["value", "LT. Permcath"], ["value", "Int.Jugul Permcath "], ["value", "Subclavia Permcath "], ["value", "Femoral Permcath "], ["value", "Transhepatic Permcath "], ["matInput", "", "formControlName", "dOfAccessCreation", 3, "matDatepicker"], ["dOfAccessCreation", ""], ["matInput", "", "formControlName", "previousAccess1"], ["previousAccess1", ""], ["matInput", "", "formControlName", "previousAccess2"], ["previousAccess2", ""], ["matInput", "", "formControlName", "previousAccess3"], ["previousAccess3", ""], ["matInput", "", "formControlName", "previousAccess4"], ["previousAccess4", ""], ["matInput", "", "placeholder", "Frequency (sessions/week)", "formControlName", "Frequency"], ["Frequency", ""], ["matInput", "", "placeholder", "Duration (hrs/session)", "formControlName", "Duration"], ["Duration", ""], ["matInput", "", "placeholder", "Dialyser", "formControlName", "Dialyser"], ["Dialyser", ""], ["name", "antiCoagulation", "placeholder", "Anticoagulation", "formControlName", "antiCoag"], ["antiCoag", ""], ["value", "Heparin"], ["value", "LMWH"], ["matInput", "", "placeholder", "Average Weight Gain (between sessions)", "formControlName", "avgWtGain"], ["avgWtGain", ""], ["matInput", "", "placeholder", "Dry Weight (kg)", "formControlName", "dryWt"], ["dryWt", ""], ["matInput", "", "placeholder", "Dialysis Adequacy (Kt/V)", "formControlName", "dialAdeq"], ["dialAdeq", ""], ["matInput", "", "formControlName", "labDate", 3, "matDatepicker"], ["labDate", ""], ["matInput", "", "placeholder", "HB (g/dl)", "formControlName", "cbcHB"], ["cbcHB", ""], ["matInput", "", "placeholder", "WBC", "formControlName", "cbcWBC"], ["cbcWBC", ""], ["matInput", "", "placeholder", "Platelets", "formControlName", "cbcPlatelets"], ["cbcPlatelets", ""], ["matInput", "", "placeholder", "S. Creatinine (mg%)", "formControlName", "chemCre"], ["chemCre", ""], ["matInput", "", "placeholder", "S. Urea (mg%)", "formControlName", "chemUrea"], ["chemUrea", ""], ["matInput", "", "placeholder", "S. Sodium (mmoL/L)", "formControlName", "chemSod"], ["chemSod", ""], ["matInput", "", "placeholder", "S. Potassium (mmoL/L)", "formControlName", "chemPot"], ["matInput", "", "placeholder", "S. Calcium (mg%)", "formControlName", "chemCal"], ["matInput", "", "placeholder", "S. Phosphorus (mg%)", "formControlName", "chemPhos"], ["chemPhos", ""], ["matInput", "", "placeholder", "S. Magnesium (mg%)", "formControlName", "chemMag"], ["chemMag", ""], ["matInput", "", "placeholder", "S. Albumin (mg%)", "formControlName", "chemAlb"], ["chemAlb", ""], ["matInput", "", "placeholder", "AST (U/L)", "formControlName", "chemAST"], ["chemAST", ""], ["matInput", "", "placeholder", "ALT (U/L)", "formControlName", "chemALT"], ["chemALT", ""], ["matInput", "", "placeholder", "Alk. Phosphatase (U/L)", "formControlName", "chemAlph"], ["chemAlph", ""], ["matInput", "", "placeholder", "Other", "formControlName", "chemOther"], ["chemOther", ""], ["name", "hbsAg", "placeholder", "HBs Ag", "formControlName", "hbsAg"], ["hbsAg", ""], ["value", "Positive"], ["value", "Negative"], ["name", "hcvAb", "placeholder", "HCV Ab", "formControlName", "hcvAb"], ["hcvAb", ""], ["name", "hivI_II", "placeholder", "HIV I & II", "formControlName", "hivI_II"], ["hivI_II", ""], ["matInput", "", "placeholder", "Other", "formControlName", "otherSer"], ["otherSer", ""], ["matInput", "", "placeholder", "S. Iron (umol/L)", "formControlName", "Siron"], ["Siron", ""], ["matInput", "", "placeholder", "S. Ferritin (ng/mL)", "formControlName", "Sferitin"], ["Sferitin", ""], ["matInput", "", "placeholder", "TIBC (umol/L)", "formControlName", "TIBC"], ["TIBC", ""], ["matInput", "", "placeholder", "TSAT (%)", "formControlName", "TSAT"], ["TSAT", ""], ["matInput", "", "placeholder", "PT (sec)", "formControlName", "coagPT"], ["coagPT", ""], ["matInput", "", "placeholder", "PPT (sec)", "formControlName", "coagPPT"], ["coagPPT", ""], ["matInput", "", "placeholder", "INR", "formControlName", "coagINR"], ["coagINR", ""], ["matInput", "", "placeholder", "PTH (Pmol/L)", "formControlName", "hormPTH"], ["hormPTH", ""], ["matInput", "", "placeholder", "Vitamin D (ng/L)", "formControlName", "hormVITD"], ["hormVITD", ""], ["matInput", "", "placeholder", "Medication 1", "formControlName", "cMD1"], ["cMD1", ""], ["matInput", "", "placeholder", "Medication 2", "formControlName", "cMD2"], ["cM2", ""], ["matInput", "", "placeholder", "Medication 3", "formControlName", "cMD3"], ["cMD3", ""], ["matInput", "", "placeholder", "Medication 4", "formControlName", "cMD4"], ["cMD4", ""], ["matInput", "", "placeholder", "Medication 5", "formControlName", "cMD5"], ["cMD5", ""], ["matInput", "", "placeholder", "Medication 6", "formControlName", "cMD6"], ["cMD6", ""], ["matInput", "", "placeholder", "Medication 7", "formControlName", "cMD7"], ["cMD7", ""], ["matInput", "", "placeholder", "Medication 8", "formControlName", "cMD8"], ["cMD8", ""], ["matInput", "", "placeholder", "Medication 9", "formControlName", "cMD9"], ["cMD9", ""], ["matInput", "", "placeholder", "Medication 10", "formControlName", "cMD10"], ["cMD10", ""], ["matInput", "", "placeholder", "Medication 11", "formControlName", "cMD11"], ["cMD11", ""], ["matInput", "", "placeholder", "Medication 12", "formControlName", "cMD12"], ["cMD12", ""], ["matInput", "", "placeholder", "Medication 13", "formControlName", "cMD13"], ["cMD13", ""], ["matInput", "", "placeholder", "Medication 14", "formControlName", "cMD14"], ["cMD14", ""], ["matInput", "", "placeholder", "Medication 15", "formControlName", "cMD15"], ["cMD15", ""], ["matInput", "", "placeholder", "Medication 16", "formControlName", "cMD16"], ["name", "HepBV", "placeholder", "Hep. B Vaccination", "formControlName", "HepBV"], ["HepBV", ""], ["appearance", "fill", 4, "ngIf"], ["name", "InfV", "placeholder", "Influenza Vaccination", "formControlName", "InfV"], ["InfV", ""], [1, "d-flex", "justify-content-center"], ["mat-button", "", "type", "submit", 1, "main-btn", "update-btn", 3, "disabled", "click"], ["placeholder", "Hospital", "formControlName", "Hospital"], ["Hospital", ""], [3, "value"], ["matInput", "", "placeholder", "Specified Disease", "formControlName", "otherKD"], ["otherKD", ""], ["matInput", "", "placeholder", "Other Co-Morbidities", "formControlName", "coMorbidityOther"], ["coMorbidityOther", ""], ["matInput", "", "placeholder", "Graft Survival", "formControlName", "prevTrGS"], ["prevTrGS", ""], [1, "hiddeninputfield"], ["matInput", "", "placeholder", "Reason", "formControlName", "fitForTrReason"], ["fitForReason", ""], ["matInput", "", "placeholder", "Specified Access", "formControlName", "cAOther"], ["cAOther", ""], ["matInput", "", "placeholder", "Other Complications", "formControlName", "ComplicationOther"], ["ComplicationOther", ""], ["matInput", "", "placeholder", "Initial", "formControlName", "hInit"], ["hInit", ""], ["matInput", "", "placeholder", "Maintenance", "formControlName", "hMaint"], ["hMaint", ""], ["matInput", "", "placeholder", "LMWH Dosage", "formControlName", "LMWHval"], ["LMWHval", ""], ["matInput", "", "placeholder", "Reason", "formControlName", "antiCoReason"], ["antiCoReason", ""], ["matInput", "", "placeholder", "Other Dialysis Complications", "formControlName", "dCompOther"], ["dCompOther", ""], ["matInput", "", "placeholder", "HCV RNA PCR", "formControlName", "hcvPCR"], ["hcvPCR", ""], ["matInput", "", "formControlName", "HepBVDate", 3, "matDatepicker"], ["HepBVDate", ""], ["matInput", "", "formControlName", "InfVDate", 3, "matDatepicker"], ["InfVDate", ""]], template: function UpdatepatientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UpdatepatientComponent_div_0_Template, 568, 46, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserAuthorized());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepLabel"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperNext"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepicker"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckbox"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperPrevious"]], styles: [".update-form[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    \r\n}\r\n.inputfield[_ngcontent-%COMP%] {\r\n    width:100%;\r\n    font-size: large;\r\n}\r\n.update-btn[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    height: 70px;\r\n}\r\n.add-btn[_ngcontent-%COMP%]:disabled{\r\n    color: rgba(128, 128, 128, 0.555);\r\n    background: #044d3291;\r\n    color: #707070;\r\n}\r\n.next-btn[_ngcontent-%COMP%] { \r\n    width: 5%;\r\n    margin-top: 50px;\r\n    margin-right: 40px;\r\n}\r\n.update-btn[_ngcontent-%COMP%]:disabled{\r\n    background: #044d3291;\r\n    color: #707070;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGRhdGVwYXRpZW50L3VwZGF0ZXBhdGllbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7O0FBRWY7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQ0FBaUM7SUFDakMscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsY0FBYzs7QUFFbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VwZGF0ZXBhdGllbnQvdXBkYXRlcGF0aWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwZGF0ZS1mb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbn1cclxuLmlucHV0ZmllbGQge1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuLnVwZGF0ZS1idG4ge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogNzBweDtcclxufVxyXG4uYWRkLWJ0bjpkaXNhYmxlZHtcclxuICAgIGNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTU1KTtcclxuICAgIGJhY2tncm91bmQ6ICMwNDRkMzI5MTtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcbi5uZXh0LWJ0biB7IFxyXG4gICAgd2lkdGg6IDUlO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxufVxyXG4udXBkYXRlLWJ0bjpkaXNhYmxlZHtcclxuICAgIGJhY2tncm91bmQ6ICMwNDRkMzI5MTtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG5cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdatepatientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-updatepatient',
                templateUrl: './updatepatient.component.html',
                styleUrls: ['./updatepatient.component.css']
            }]
    }], function () { return [{ type: src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_3__["NavbarService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _services_hosplist_service__WEBPACK_IMPORTED_MODULE_5__["HosplistService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_6__["PatientService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "bxAD":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-update/user-update.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUpdateComponent", function() { return UserUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_userClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/userClass */ "x4nd");
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/navbar.service */ "n2q6");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_hosplist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/hosplist.service */ "iVMD");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

















function UserUpdateComponent_mat_form_field_18_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hospital_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", hospital_r10.hospitalName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", hospital_r10.hospitalName, " ");
} }
function UserUpdateComponent_mat_form_field_18_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function UserUpdateComponent_mat_form_field_18_Template_mat_select_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.selectedHosp = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserUpdateComponent_mat_form_field_18_mat_option_2_Template, 2, 2, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r3.selectedHosp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.hospList);
} }
function UserUpdateComponent_mat_hint_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserUpdateComponent_mat_hint_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter password confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UserUpdateComponent {
    constructor(nav, authService, fb, router, hospListService, _snackBar) {
        this.nav = nav;
        this.authService = authService;
        this.fb = fb;
        this.router = router;
        this.hospListService = hospListService;
        this._snackBar = _snackBar;
        this.updatedUser = new src_app_userClass__WEBPACK_IMPORTED_MODULE_2__["userObj"];
        this.hide = true;
        this.currUser = authService.getLoggedUser();
        this.updatedUserForm = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            contactInfo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.updatedPassForm = this.fb.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ngOnInit() {
        this.nav.show();
        this.assignUDetails();
        this.getAllHospitals();
    }
    getAllHospitals() {
        this.hospListService.getHospitals().subscribe((data) => {
            this.hospList = data;
        });
    }
    assignUDetails() {
        this.updatedUserForm.get('firstName').setValue(this.currUser.firstName);
        this.updatedUserForm.get('lastName').setValue(this.currUser.lastName);
        this.updatedUserForm.get('email').setValue(this.currUser.email);
        this.updatedUserForm.get('contactInfo').setValue(this.currUser.contactInfo);
        this.selectedHosp = this.currUser.Hospital;
    }
    updateU() {
        this.temp = this.updatedUserForm.controls.email.value;
        this.temp = this.temp.toLowerCase();
        this.authService.getUserbyEmail(this.temp).subscribe((data) => {
            if (data && this.updatedUserForm.controls.email.value != this.currUser.email) {
                this._snackBar.open("Error: User with matching email already exists", "", { duration: 4000, panelClass: ['red-snackbar']
                });
            }
            else {
                this.authService.getUserbyEmail(this.currUser.email).subscribe((data) => {
                    this.userId = data._id;
                    this.updatedUser.firstName = this.updatedUserForm.controls.firstName.value;
                    this.updatedUser.lastName = this.updatedUserForm.controls.lastName.value;
                    this.updatedUser.email = this.updatedUserForm.controls.email.value;
                    this.updatedUser.email = this.updatedUser.email.toLowerCase();
                    this.updatedUser.contactInfo = this.updatedUserForm.controls.contactInfo.value;
                    this.updatedUser.Hospital = this.selectedHosp;
                    this.authService.updateUserbyId(this.userId, this.updatedUser).subscribe(res => console.log(""));
                    this._snackBar.open("User update was successful, please login with your new details", "", { duration: 4000, panelClass: ['green-snackbar'] });
                    this.router.navigate(['/login']);
                });
            }
        });
    }
    updatePass() {
        if (this.passwordInput.value == this.passwordconfirmInput.value) {
            this.authService.getUserId(this.currUser.email).subscribe((data) => {
                this.authService.updateUserPass(data, this.passwordInput.value).subscribe(res => console.log(res));
                this._snackBar.open("Password update was successful, please login with your new password", "", { duration: 4000, panelClass: ['green-snackbar'] });
                this.router.navigate(['/login']);
            });
        }
        else {
            this._snackBar.open("Password confirmation mismatch", "", { duration: 4000, panelClass: ['red-snackbar'] });
        }
    }
    get passwordInput() { return this.updatedPassForm.get('password'); }
    get passwordconfirmInput() { return this.updatedPassForm.get('confirmPassword'); }
}
UserUpdateComponent.ɵfac = function UserUpdateComponent_Factory(t) { return new (t || UserUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_3__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_hosplist_service__WEBPACK_IMPORTED_MODULE_6__["HosplistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"])); };
UserUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserUpdateComponent, selectors: [["app-user-update"]], decls: 48, vars: 11, consts: [[1, "d-flex", "justify-content-around"], [1, "p-2", "border", "rounded", "shadow"], [1, "input-form", "d-flex", "flex-column", "form-width", 3, "formGroup"], [2, "text-align", "center"], [1, "input-border", "p-3", "form-dim"], ["matInput", "", "placeholder", "First Name", "formControlName", "firstName"], ["firstName", ""], [1, "input-border", "p-3"], ["matInput", "", "placeholder", "Last Name", "formControlName", "lastName"], ["lastName", ""], ["matInput", "", "placeholder", "Email Address", "formControlName", "email"], ["email", ""], ["class", "input-border p-3", 4, "ngIf"], ["matInput", "", "placeholder", "Contact Number (+966)", "formControlName", "contactInfo"], ["contactInfo", ""], [1, "d-flex", "justify-content-center"], ["type", "submit", "mat-button", "", 1, "main-btn", "btn-dim", "btn-pos2", 3, "disabled", "click"], [1, "input-form", "form-width", 3, "formGroup"], ["matInput", "", "placeholder", "New Password", "formControlName", "password", 3, "type"], ["password", ""], ["matSuffix", "", 3, "click"], [4, "ngIf"], ["matInput", "", "placeholder", "Confirm New Password", "formControlName", "confirmPassword", 3, "type"], ["confirmPassword", ""], ["type", "submit", "mat-button", "", 1, "main-btn", "p-3", "btn-dim", "btn-pos", 3, "disabled", "click"], ["placeholder", "Hospital", 3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function UserUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "User Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UserUpdateComponent_mat_form_field_18_Template, 3, 2, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserUpdateComponent_Template_button_click_26_listener() { return ctx.updateU(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Update User Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserUpdateComponent_Template_mat_icon_click_35_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, UserUpdateComponent_mat_hint_37_Template, 2, 0, "mat-hint", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserUpdateComponent_Template_mat_icon_click_43_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, UserUpdateComponent_mat_hint_45_Template, 2, 0, "mat-hint", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserUpdateComponent_Template_button_click_46_listener() { return ctx.updatePass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Change Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updatedUserForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currUser.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.updatedUserForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updatedPassForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.passwordInput.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.passwordconfirmInput.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.updatedPassForm.pristine || ctx.updatedPassForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatHint"]], styles: [".form-width[_ngcontent-%COMP%]{\r\n  width: 500px;\r\n}\r\n.btn-dim[_ngcontent-%COMP%]{\r\n  width: 200px;\r\n  height: 70px;\r\n}\r\n.input-dim[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n}\r\n.btn-pos[_ngcontent-%COMP%]{\r\n  margin-left: 150px;\r\n  margin-top: 410px;\r\n}\r\n.btn-pos2[_ngcontent-%COMP%]{\r\n  margin-top: 15px;\r\n}\r\n.main-btn[_ngcontent-%COMP%]:disabled{\r\n  background: #044d3291;\r\n  color: #707070;\r\n}\r\n.user-pagination[_ngcontent-%COMP%]     .ngx-pagination .current{\r\n  background-color: #088156;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXVwZGF0ZS91c2VyLXVwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci11cGRhdGUvdXNlci11cGRhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXdpZHRoe1xyXG4gIHdpZHRoOiA1MDBweDtcclxufVxyXG4uYnRuLWRpbXtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG59XHJcbi5pbnB1dC1kaW17XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4uYnRuLXBvc3tcclxuICBtYXJnaW4tbGVmdDogMTUwcHg7XHJcbiAgbWFyZ2luLXRvcDogNDEwcHg7XHJcbn1cclxuLmJ0bi1wb3Mye1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLm1haW4tYnRuOmRpc2FibGVke1xyXG4gIGJhY2tncm91bmQ6ICMwNDRkMzI5MTtcclxuICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG4udXNlci1wYWdpbmF0aW9uIC9kZWVwLyAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4ODE1NjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-update',
                templateUrl: './user-update.component.html',
                styleUrls: ['./user-update.component.css']
            }]
    }], function () { return [{ type: src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_3__["NavbarService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_services_hosplist_service__WEBPACK_IMPORTED_MODULE_6__["HosplistService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "d+rp":
/*!*************************************!*\
  !*** ./src/app/inviteTokenClass.ts ***!
  \*************************************/
/*! exports provided: invT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invT", function() { return invT; });
class invT {
}


/***/ }),

/***/ "fh5a":
/*!*************************************************************!*\
  !*** ./src/app/components/userslist/userslist.component.ts ***!
  \*************************************************************/
/*! exports provided: UserslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserslistComponent", function() { return UserslistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_userClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/userClass */ "x4nd");
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navbar.service */ "n2q6");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_hosplist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/hosplist.service */ "iVMD");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");














function UserslistComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hospital_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", hospital_r3.hospitalName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hospital_r3.hospitalName);
} }
function UserslistComponent_tbody_21_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", user_r5.firstName, " ", user_r5.lastName, "");
} }
function UserslistComponent_tbody_21_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.email);
} }
function UserslistComponent_tbody_21_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.contactInfo);
} }
function UserslistComponent_tbody_21_tr_1_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.isAdmin ? "Administrator" : "User");
} }
function UserslistComponent_tbody_21_tr_1_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserslistComponent_tbody_21_tr_1_td_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.deleteUser(user_r5._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserslistComponent_tbody_21_tr_1_td_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.changeUserRole(user_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", user_r5.isAdmin || ctx_r10.currUser.email == user_r5.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r10.currUser.email == user_r5.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Change to ", !user_r5.isAdmin ? "Administrator" : "User", "");
} }
function UserslistComponent_tbody_21_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserslistComponent_tbody_21_tr_1_td_1_Template, 2, 2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserslistComponent_tbody_21_tr_1_td_2_Template, 2, 1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserslistComponent_tbody_21_tr_1_td_3_Template, 2, 1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserslistComponent_tbody_21_tr_1_td_4_Template, 2, 1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserslistComponent_tbody_21_tr_1_td_5_Template, 5, 3, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r5);
} }
const _c0 = function (a1) { return { itemsPerPage: 10, currentPage: a1 }; };
function UserslistComponent_tbody_21_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserslistComponent_tbody_21_tr_1_Template, 6, 5, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pagination-controls", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function UserslistComponent_tbody_21_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.p = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r1.users, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r1.p)));
} }
function UserslistComponent_tbody_22_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserslistComponent_tbody_22_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.deleteUser(ctx_r23.singleUser._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserslistComponent_tbody_22_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.changeUserRole(ctx_r25.singleUser); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.singleUser.firstName, " ", ctx_r2.singleUser.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.singleUser.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.singleUser.contactInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.singleUser.isAdmin ? "Administrator" : "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.singleUser.isAdmin || ctx_r2.currUser.email == ctx_r2.singleUser.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.currUser.email == ctx_r2.singleUser.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Change to ", !ctx_r2.singleUser.isAdmin ? "Administrator" : "User", "");
} }
class UserslistComponent {
    constructor(nav, authService, router, hospListService) {
        this.nav = nav;
        this.authService = authService;
        this.router = router;
        this.hospListService = hospListService;
        this.p = 1;
        this.currUser = this.authService.getLoggedUser();
        this.selectedHosp = this.currUser.Hospital;
    }
    ngOnInit() {
        if (!this.currUser.isAdmin) {
            this.router.navigate(['/**']);
        }
        else {
            this.nav.show();
            this.fetchUsers();
            this.getAllHospitals();
        }
    }
    getAllHospitals() {
        this.hospListService.getHospitals().subscribe((data) => {
            this.hospList = data;
        });
    }
    fetchUsers() {
        if (this.selectedHosp != "All") {
            this.authService.getRegUsersByHosp(this.selectedHosp).subscribe((data) => {
                this.preUsers = data;
                console.log(this.preUsers);
                if (this.preUsers && this.preUsers.length > 1) {
                    this.singleUser = null;
                    this.users = this.preUsers;
                }
                else {
                    this.users = null;
                    this.singleUser = data[0];
                }
            });
        }
        else {
            this.authService.getAllUsers().subscribe((data) => {
                this.preUsers = data;
                if (this.preUsers && this.preUsers.length > 1) {
                    this.singleUser = null;
                    this.users = this.preUsers;
                }
                else {
                    this.users = null;
                    this.singleUser = data[0];
                }
            });
        }
    }
    onHospChange(_$event) {
        this.fetchUsers();
    }
    deleteUser(id) {
        if (confirm("Are you sure you want to remove this user?")) {
            this.authService.deleteUser(id).subscribe(res => console.log(""));
            this.fetchUsers();
        }
    }
    changeUserRole(user) {
        if (confirm("Are you sure you want to change this user's role?")) {
            const c_Id = new String(user._id);
            const cUser = new src_app_userClass__WEBPACK_IMPORTED_MODULE_1__["userObj"]();
            cUser.firstName = user.firstName;
            cUser.lastName = user.lastName;
            cUser.email = user.email;
            cUser.contactInfo = user.contactInfo;
            cUser.isAdmin = !user.isAdmin;
            this.authService.updateUserbyId(c_Id, cUser).subscribe(_res => console.log());
            window.location.reload();
        }
    }
}
UserslistComponent.ɵfac = function UserslistComponent_Factory(t) { return new (t || UserslistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_hosplist_service__WEBPACK_IMPORTED_MODULE_5__["HosplistService"])); };
UserslistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserslistComponent, selectors: [["app-userslist"]], decls: 23, vars: 4, consts: [[1, "d-", "flex", "justify-content-center"], ["id", "usertable-bg", 1, "shadow"], [1, "mat-select-width"], ["placeholder", "Hospital Criteria", 3, "value", "selectionChange", "valueChange"], ["value", "All"], [3, "value", 4, "ngFor", "ngForOf"], [1, "table", "table-sm", "table-light"], [1, "table-primary"], ["scope", "col", 1, "th-primary"], [4, "ngIf"], [3, "value"], [4, "ngFor", "ngForOf"], [1, "p-2", "user-pagination", 3, "pageChange"], ["class", "table-element", 4, "ngIf"], [1, "table-element"], ["mat-button", "", 1, "option-button", "p-1", 3, "disabled", "click"]], template: function UserslistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function UserslistComponent_Template_mat_select_selectionChange_4_listener($event) { return ctx.onHospChange($event); })("valueChange", function UserslistComponent_Template_mat_select_valueChange_4_listener($event) { return ctx.selectedHosp = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserslistComponent_mat_option_7_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UserslistComponent_tbody_21_Template, 4, 6, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UserslistComponent_tbody_22_Template, 15, 8, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedHosp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hospList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.users && ctx.users.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.singleUser);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationControlsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginatePipe"]], styles: [".search-card[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    inline-size: 50%;\r\n}\r\n\r\n.search-field[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    margin-right: 20px;\r\n}\r\n\r\n.search-criteria[_ngcontent-%COMP%]{\r\n    color: #068355;\r\n    width: 20%;\r\n}\r\n\r\n.table-primary[_ngcontent-%COMP%]{\r\n    color: #d1ccb9;\r\n    width: 75%;\r\n    font-size: small;\r\n}\r\n\r\n.th-primary[_ngcontent-%COMP%]{\r\n    background-color: #1E866C;\r\n}\r\n\r\n.table-element[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    color: #068355;\r\n    font-weight: lighter;\r\n}\r\n\r\n.option-button[_ngcontent-%COMP%] {\r\n    font-family: \"Roboto\", sans-serif;\r\n  text-transform: uppercase;\r\n  display: inline;\r\n  outline: 0;\r\n  background: #088156;\r\n  color: rgb(255, 255, 255);\r\n  width: 30%;\r\n  border: 0;\r\n  margin-right: 20px;\r\n  color: hsl(#ffffffad);\r\n  font-size: 10px;\r\n  transition: all 0.3 ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.option-button[_ngcontent-%COMP%]:enabled:hover {\r\n    background: #077750;\r\n}\r\n\r\n.option-button[_ngcontent-%COMP%]:disabled{\r\n    background: #044d3291;\r\n    color: #707070;\r\n}\r\n\r\n.mat-select-width[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vyc2xpc3QvdXNlcnNsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUNBQWlDO0VBQ25DLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFFZix3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksZUFBZTs7QUFFbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXJzbGlzdC91c2Vyc2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtY2FyZHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBpbmxpbmUtc2l6ZTogNTAlO1xyXG59XHJcblxyXG4uc2VhcmNoLWZpZWxke1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4uc2VhcmNoLWNyaXRlcmlhe1xyXG4gICAgY29sb3I6ICMwNjgzNTU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcbi50YWJsZS1wcmltYXJ5e1xyXG4gICAgY29sb3I6ICNkMWNjYjk7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG4udGgtcHJpbWFyeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRTg2NkM7XHJcbn1cclxuLnRhYmxlLWVsZW1lbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjMDY4MzU1O1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbi5vcHRpb24tYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYmFja2dyb3VuZDogIzA4ODE1NjtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBjb2xvcjogaHNsKCNmZmZmZmZhZCk7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm9wdGlvbi1idXR0b246ZW5hYmxlZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDc3NzUwO1xyXG59XHJcbi5vcHRpb24tYnV0dG9uOmRpc2FibGVke1xyXG4gICAgYmFja2dyb3VuZDogIzA0NGQzMjkxO1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuLm1hdC1zZWxlY3Qtd2lkdGh7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserslistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-userslist',
                templateUrl: './userslist.component.html',
                styleUrls: ['./userslist.component.css']
            }]
    }], function () { return [{ type: src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_hosplist_service__WEBPACK_IMPORTED_MODULE_5__["HosplistService"] }]; }, null); })();


/***/ }),

/***/ "h+Cs":
/*!*********************************!*\
  !*** ./src/app/patientClass.ts ***!
  \*********************************/
/*! exports provided: PatientObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientObj", function() { return PatientObj; });
class PatientObj {
    PatientObj() {
        this.fullName = "";
        this.fullNameAr = "";
        this.Height = new Number;
        this.bldGrp = "";
        this.kAllergies = "";
        this.Hospital = "";
        this.contactInfo = new Number;
        this.Gender = "";
        this.n_ID = "";
        this.Nationality = "";
        this.submittedBy = "";
        this.dosDialysis = "";
        this.oKidneyDisease = "";
        this.otherKD = "";
        this.morbHype = false;
        this.morbDM = false;
        this.morbIHD = false;
        this.morbEpi = false;
        this.coMorbOther = "";
        this.previousTr = "";
        this.prevTrGS = "";
        this.fitForTr = "";
        this.fitForTrReason = "";
        this.potentialRDonors = "";
        this.currentAccess = "";
        this.cAOther = "";
        this.dOfAccessCreation = "";
        this.compInsuf = false;
        this.compInf = false;
        this.compAD = false;
        this.compDC = false;
        this.compOther = "";
        this.previousAccess1 = "";
        this.previousAccess2 = "";
        this.previousAccess3 = "";
        this.previousAccess4 = "";
        this.Frequency = new Number;
        this.Duration = new Number;
        this.Dialyser = "";
        this.antiCoagulation = "";
        this.hInit = "";
        this.hMaint = "";
        this.LMWHval = "";
        this.antiCoReason = "";
        this.dryWt = new Number;
        this.avgWtGain = new Number;
        this.dialAdeq = "";
        this.dCompHead = false;
        this.dCompHG = false;
        this.dCompHOT = false;
        this.dCompHET = false;
        this.dCompMC = false;
        this.dCompAC = false;
        this.dCompVom = false;
        this.dCompSZ = false;
        this.dCompHS = false;
        this.dCompIt = false;
        this.dCompOther = "";
        this.labDate = "";
        this.cbcHB = new Number;
        this.cbcWBC = new Number;
        this.cbcPlatelets = new Number;
        this.chemCre = new Number;
        this.chemUrea = new Number;
        this.chemSod = new Number;
        this.chemPot = new Number;
        this.chemCal = new Number;
        this.chemPhos = new Number;
        this.chemAST = new Number;
        this.chemALT = new Number;
        this.chemAlb = new Number;
        this.chemMag = new Number;
        this.chemAlph = new Number;
        this.chemOther = "";
        this.Siron = new Number;
        this.TIBC = new Number;
        this.Sferitin = new Number;
        this.hormPTH = new Number;
        this.hormVITD = new Number;
        this.hormOther = "";
        this.hbsAg = "";
        this.hcvAb = "";
        this.hivI_II = "";
        this.othrSer = "";
        this.coagPT = new Number;
        this.coagPPT = new Number;
        this.coagINR = new Number;
        this.cMD1 = "";
        this.cMD2 = "";
        this.cMD3 = "";
        this.cMD4 = "";
        this.cMD5 = "";
        this.cMD6 = "";
        this.cMD7 = "";
        this.cMD8 = "";
        this.cMD9 = "";
        this.cMD10 = "";
        this.cMD11 = "";
        this.cMD12 = "";
        this.cMD13 = "";
        this.cMD14 = "";
        this.cMD15 = "";
        this.cMD16 = "";
        this.HepBV = "";
        this.HepBVDate = "";
        this.InfV = "";
        this.InfVDate = "";
    }
}


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/navbar.service */ "n2q6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function NavbarComponent_nav_0_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Admin Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Generate registration link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Manage users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Manage hospitals");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hemodialysis Patient Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Patients ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "List");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add record");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavbarComponent_nav_0_li_15_Template, 10, 0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " My Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isAdminAuthorized());
} }
class NavbarComponent {
    constructor(userService, router, nav) {
        this.userService = userService;
        this.router = router;
        this.nav = nav;
    }
    ngOnInit() {
    }
    isAdminAuthorized() {
        this.currUser = this.userService.getLoggedUser();
        if (this.currUser) {
            return this.currUser.isAdmin;
        }
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_3__["NavbarService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 1, vars: 1, consts: [["class", "navbar navbar-expand-lg navbar-light bg-light", 4, "ngIf"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "dropdown"], ["id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["routerLink", "/list", 1, "dropdown-item"], ["routerLink", "/add", 1, "dropdown-item"], ["class", "nav-item dropdown", 4, "ngIf"], [1, "navbar-nav"], ["routerLink", "/accountupdate", 1, "dropdown-item"], ["routerLink", "/account", 1, "dropdown-item"], ["routerLink", "/login", 1, "dropdown-item"], ["routerLink", "/gentoken", 1, "dropdown-item"], ["routerLink", "/userlist", 1, "dropdown-item"], ["routerLink", "/hospital", 1, "dropdown-item"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavbarComponent_nav_0_Template, 27, 1, "nav", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nav.visible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_3__["NavbarService"] }]; }, null); })();


/***/ }),

/***/ "iVMD":
/*!**********************************************!*\
  !*** ./src/app/services/hosplist.service.ts ***!
  \**********************************************/
/*! exports provided: HosplistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HosplistService", function() { return HosplistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class HosplistService {
    constructor(http) {
        this.http = http;
    }
    addHosp(hospitalName) {
        return this.http.post(`/hospitals/add`, { hospitalName: hospitalName });
    }
    removeHosp(hospitalName) {
        return this.http.post(`/hospitals/delete`, { hospitalName: hospitalName });
    }
    getHospitals() {
        return this.http.get(`/hospitals/`);
    }
}
HosplistService.ɵfac = function HosplistService_Factory(t) { return new (t || HosplistService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HosplistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HosplistService, factory: HosplistService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HosplistService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "n2q6":
/*!********************************************!*\
  !*** ./src/app/services/navbar.service.ts ***!
  \********************************************/
/*! exports provided: NavbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarService", function() { return NavbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NavbarService {
    constructor() { this.visible = false; }
    hide() { this.visible = false; }
    show() { this.visible = true; }
    toggle() { this.visible = !this.visible; }
}
NavbarService.ɵfac = function NavbarService_Factory(t) { return new (t || NavbarService)(); };
NavbarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavbarService, factory: NavbarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");





class UserService {
    constructor(http) {
        this.http = http;
    }
    regUser(User) {
        return this.http.post(`/users/register`, User);
    }
    authUser(userlogin) {
        return this.http.post('/users/authenticate', userlogin);
    }
    deleteUser(id) {
        return this.http.get(`/users/delete/${id}`);
    }
    getUserId(email) {
        return this.http.post(`/users/id`, { email: email });
    }
    updateUserbyId(id, User) {
        return this.http.post(`/users/update/account/${id}`, User);
    }
    getUserbyEmail(email) {
        return this.http.post(`/users/email`, { email: email });
    }
    getUser() {
        this.loadToken();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authToken
        });
        return this.http.get(`/users/account`, { headers: headers });
    }
    getRegUsersByHosp(Hospital) {
        return this.http.post(`/users/hospital`, { Hospital: Hospital });
    }
    getAllUsers() {
        return this.http.get(`/users/all`);
    }
    loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }
    storeUserData(token, User) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(User));
        this.authToken = token;
        this.user = User;
    }
    loggedIn() {
        if (localStorage.id_token == undefined) {
            return false;
        }
        else {
            const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
            return !helper.isTokenExpired(localStorage.id_token);
        }
    }
    isAdminAuthorized() {
        if (this.user.isAdmin == true) {
            return true;
        }
        else {
            return false;
        }
    }
    getLoggedUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
    isUserAuthorized(pHospital) {
        this.user = this.getLoggedUser();
        if (this.user.Hospital == pHospital) {
            return true;
        }
        else {
            return false;
        }
    }
    updateUserPass(id, Password) {
        return this.http.post(`/users/update/password/${id}`, { password: Password });
    }
    logOut() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_patientslist_patientslist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/patientslist/patientslist.component */ "T+hd");
/* harmony import */ var _components_addpatient_addpatient_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/addpatient/addpatient.component */ "A0J8");
/* harmony import */ var _components_generatetoken_generatetoken_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/generatetoken/generatetoken.component */ "Olwy");
/* harmony import */ var _components_viewpatientdetails_viewpatientdetails_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/viewpatientdetails/viewpatientdetails.component */ "14Ff");
/* harmony import */ var _components_updatepatient_updatepatient_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/updatepatient/updatepatient.component */ "amZW");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "JzmT");
/* harmony import */ var _components_userslist_userslist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/userslist/userslist.component */ "fh5a");
/* harmony import */ var _components_user_update_user_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user-update/user-update.component */ "bxAD");
/* harmony import */ var _components_userpage_userpage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/userpage/userpage.component */ "TNZB");
/* harmony import */ var _components_addhospital_addhospital_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/addhospital/addhospital.component */ "ZKea");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");

















const routes = [{ path: 'register/:token', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'viewdetails/:id', component: _components_viewpatientdetails_viewpatientdetails_component__WEBPACK_IMPORTED_MODULE_7__["ViewpatientdetailsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'list', component: _components_patientslist_patientslist_component__WEBPACK_IMPORTED_MODULE_4__["PatientslistComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'update/:id', component: _components_updatepatient_updatepatient_component__WEBPACK_IMPORTED_MODULE_8__["UpdatepatientComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'add', component: _components_addpatient_addpatient_component__WEBPACK_IMPORTED_MODULE_5__["AddpatientComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'gentoken', component: _components_generatetoken_generatetoken_component__WEBPACK_IMPORTED_MODULE_6__["GeneratetokenComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'userlist', component: _components_userslist_userslist_component__WEBPACK_IMPORTED_MODULE_10__["UserslistComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'accountupdate', component: _components_user_update_user_update_component__WEBPACK_IMPORTED_MODULE_11__["UserUpdateComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'account', component: _components_userpage_userpage_component__WEBPACK_IMPORTED_MODULE_12__["UserpageComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'hospital', component: _components_addhospital_addhospital_component__WEBPACK_IMPORTED_MODULE_13__["AddhospitalComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"] }
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

/***/ "x4nd":
/*!******************************!*\
  !*** ./src/app/userClass.ts ***!
  \******************************/
/*! exports provided: userObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userObj", function() { return userObj; });
class userObj {
}


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