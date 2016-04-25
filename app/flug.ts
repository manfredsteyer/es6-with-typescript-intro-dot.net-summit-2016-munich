
function Docu(target, key?, descriptor?) {
	console.debug(target);
	console.debug(key);	
	console.debug(descriptor);	
	console.debug("---");
}

function DocuWithLabel(label: string) {
	
	return function(target, key = null, descriptor = null) {
		console.debug(label);
		console.debug(target);
		console.debug(key);	
		console.debug(descriptor);	
		console.debug("---");
	}
}

function Log(target, key?, descriptor?) {
	
	var method = descriptor.value; // function (info)
	
	descriptor.value = function(...params) {
		console.debug('Calling ' + target.constructor.name + '.' + key);
		return method.apply(this, params); 
	}
	
}

@DocuWithLabel("Repräsentiert einen Flug")
export class Flug {
    
    @Docu
    id: number;
    abflugort: string;
    zielort: string;
    datum: string;
    
    constructor(@Docu other?: any) {
        if (other) {
            this.id = other.id;
            this.abflugort = other.abflugort;
            this.zielort = other.zielort;
            this.datum = other.datum;
        }
    }
    
    @Docu
    @Log
    info(@Docu title: string) {
        return title + ": " + this.abflugort + " - " + this.zielort;
    }
}

var flug = new Flug({ id: 1, abflugort: 'Graz', zielort: 'Hamburg', datum: '2016-31-12' });
flug.info("INFO");