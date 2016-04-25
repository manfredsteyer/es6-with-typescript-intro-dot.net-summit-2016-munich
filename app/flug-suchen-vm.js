System.register(['./flug'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var flug_1;
    var flug, FlugSuchenVM;
    return {
        setters:[
            function (flug_1_1) {
                flug_1 = flug_1_1;
            }],
        execute: function() {
            flug = new flug_1.Flug();
            FlugSuchenVM = (function () {
                function FlugSuchenVM() {
                    this.fluege = [];
                    this.selectedFlug = null;
                    this.message = "";
                }
                FlugSuchenVM.prototype.search = function () {
                    var _this = this;
                    var von = encodeURIComponent(this.von);
                    var nach = encodeURIComponent(this.nach);
                    var url = "http://www.angular.at/api/flug?abflugOrt=" + von + "&zielOrt=" + nach;
                    return fetch(url)
                        .then(function (r) { return r.json(); })
                        .then(function (fluege) {
                        _this.fluege = fluege;
                        return fluege;
                    });
                };
                FlugSuchenVM.prototype.select = function (flug) {
                    this.selectedFlug = flug;
                };
                return FlugSuchenVM;
            }());
            exports_1("FlugSuchenVM", FlugSuchenVM);
        }
    }
});
//# sourceMappingURL=flug-suchen-vm.js.map