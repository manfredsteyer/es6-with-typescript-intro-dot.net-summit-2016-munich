System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var Flug, flug;
    function Docu(target, key, descriptor) {
        console.debug(target);
        console.debug(key);
        console.debug(descriptor);
        console.debug("---");
    }
    function DocuWithLabel(label) {
        return function (target, key, descriptor) {
            if (key === void 0) { key = null; }
            if (descriptor === void 0) { descriptor = null; }
            console.debug(label);
            console.debug(target);
            console.debug(key);
            console.debug(descriptor);
            console.debug("---");
        };
    }
    function Log(target, key, descriptor) {
        var method = descriptor.value; // function
        descriptor.value = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i - 0] = arguments[_i];
            }
            console.debug('Calling ' + target.constructor.name + '.' + key);
            return method.apply(this, params);
        };
    }
    return {
        setters:[],
        execute: function() {
            Flug = (function () {
                function Flug(other) {
                    if (other) {
                        this.id = other.id;
                        this.abflugort = other.abflugort;
                        this.zielort = other.zielort;
                        this.datum = other.datum;
                    }
                }
                Flug.prototype.info = function (title) {
                    return title + ": " + this.abflugort + " - " + this.zielort;
                };
                __decorate([
                    Docu, 
                    __metadata('design:type', Number)
                ], Flug.prototype, "id", void 0);
                __decorate([
                    Docu,
                    Log,
                    __param(0, Docu), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [String]), 
                    __metadata('design:returntype', void 0)
                ], Flug.prototype, "info", null);
                Flug = __decorate([
                    DocuWithLabel("Repräsentiert einen Flug"),
                    __param(0, Docu), 
                    __metadata('design:paramtypes', [Object])
                ], Flug);
                return Flug;
            }());
            exports_1("Flug", Flug);
            flug = new Flug({ id: 1, abflugort: 'Graz', zielort: 'Hamburg', datum: '2016-31-12' });
            flug.info("INFO");
        }
    }
});
//# sourceMappingURL=flug.js.map