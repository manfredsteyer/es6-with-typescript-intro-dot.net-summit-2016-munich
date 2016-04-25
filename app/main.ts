import { FlugSuchenVM } from './flug-suchen-vm';

var vm = new FlugSuchenVM();
vm.von = "Graz";
vm.nach = "Hamburg";
vm.search().then(() => {
    
    var html = `<b>${vm.fluege[0].abflugort} - ${vm.fluege[0].zielort}</b>`;
    $("#placeholder").html(html);
    
    console.debug(<any>vm.fluege);
    
})