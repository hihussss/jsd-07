 export class Validator {
    constructor(name){

        this.name = name
    }

    validateUsername(name) { 
    return /^[^\d-_]+[\d]{1,3}[^\d-_]+$/.test(name)
        
    }
}





