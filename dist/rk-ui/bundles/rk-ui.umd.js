(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('rk-ui', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['rk-ui'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var RkUiService = /** @class */ (function () {
        function RkUiService() {
        }
        return RkUiService;
    }());
    RkUiService.ɵfac = function RkUiService_Factory(t) { return new (t || RkUiService)(); };
    RkUiService.ɵprov = i0.ɵɵdefineInjectable({ token: RkUiService, factory: RkUiService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RkUiService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var RkUiComponent = /** @class */ (function () {
        function RkUiComponent() {
        }
        RkUiComponent.prototype.ngOnInit = function () {
        };
        return RkUiComponent;
    }());
    RkUiComponent.ɵfac = function RkUiComponent_Factory(t) { return new (t || RkUiComponent)(); };
    RkUiComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RkUiComponent, selectors: [["lib-rk-ui"]], decls: 2, vars: 0, template: function RkUiComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " rk-ui works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RkUiComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-rk-ui',
                        template: "\n    <p>\n      rk-ui works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var RkUiModule = /** @class */ (function () {
        function RkUiModule() {
        }
        return RkUiModule;
    }());
    RkUiModule.ɵmod = i0.ɵɵdefineNgModule({ type: RkUiModule });
    RkUiModule.ɵinj = i0.ɵɵdefineInjector({ factory: function RkUiModule_Factory(t) { return new (t || RkUiModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RkUiModule, { declarations: [RkUiComponent], exports: [RkUiComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RkUiModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [RkUiComponent],
                        imports: [],
                        exports: [RkUiComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of rk-ui
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.RkUiComponent = RkUiComponent;
    exports.RkUiModule = RkUiModule;
    exports.RkUiService = RkUiService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=rk-ui.umd.js.map
