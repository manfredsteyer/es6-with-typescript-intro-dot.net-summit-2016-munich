import { Flug } from './flug';

var flug = new Flug();


declare function fetch(url: string): any;

export class FlugSuchenVM {
    
    public von: string;
    public nach: string;
    public fluege: Array<Flug> = [];
    public selectedFlug = null;
    
    public message: string = "";
    
    public search(): any {
        
        let von = encodeURIComponent(this.von);
        let nach = encodeURIComponent(this.nach);
        
        var url = `http://www.angular.at/api/flug?abflugOrt=${von}&zielOrt=${nach}`; 

        return fetch(url)
                .then(r => r.json())
                .then(fluege => {
                    this.fluege = fluege;
                    return fluege;
                });
        
    }
    
    public select(flug: Flug): void {
        this.selectedFlug = flug;
    }
    
    
    
}