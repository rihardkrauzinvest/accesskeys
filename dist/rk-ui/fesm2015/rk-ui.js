import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class RkUiService {
    constructor() { }
}
RkUiService.ɵfac = function RkUiService_Factory(t) { return new (t || RkUiService)(); };
RkUiService.ɵprov = ɵɵdefineInjectable({ token: RkUiService, factory: RkUiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RkUiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class RkUiComponent {
    constructor() { }
    ngOnInit() {
    }
}
RkUiComponent.ɵfac = function RkUiComponent_Factory(t) { return new (t || RkUiComponent)(); };
RkUiComponent.ɵcmp = ɵɵdefineComponent({ type: RkUiComponent, selectors: [["lib-rk-ui"]], decls: 2, vars: 0, template: function RkUiComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " rk-ui works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RkUiComponent, [{
        type: Component,
        args: [{
                selector: 'lib-rk-ui',
                template: `
    <p>
      rk-ui works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class RkUiModule {
}
RkUiModule.ɵmod = ɵɵdefineNgModule({ type: RkUiModule });
RkUiModule.ɵinj = ɵɵdefineInjector({ factory: function RkUiModule_Factory(t) { return new (t || RkUiModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(RkUiModule, { declarations: [RkUiComponent], exports: [RkUiComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(RkUiModule, [{
        type: NgModule,
        args: [{
                declarations: [RkUiComponent],
                imports: [],
                exports: [RkUiComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of rk-ui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { RkUiComponent, RkUiModule, RkUiService };
//# sourceMappingURL=rk-ui.js.map
