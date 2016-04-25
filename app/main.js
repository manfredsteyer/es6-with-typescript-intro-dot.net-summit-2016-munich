System.register(['./flug-suchen-vm'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var flug_suchen_vm_1;
    var vm;
    return {
        setters:[
            function (flug_suchen_vm_1_1) {
                flug_suchen_vm_1 = flug_suchen_vm_1_1;
            }],
        execute: function() {
            vm = new flug_suchen_vm_1.FlugSuchenVM();
            vm.von = "Graz";
            vm.nach = "Hamburg";
            vm.search().then(function () {
                var html = "<b>" + vm.fluege[0].abflugort + " - " + vm.fluege[0].zielort + "</b>";
                $("#placeholder").html(html);
                console.debug(vm.fluege);
            });
        }
    }
});
//# sourceMappingURL=main.js.map