export class Validator {
    constructor(number){
        this.number = number
    }

    validateNumber(number) {
    
    const status = /^[+]{1}[7-8]{1}\d+$/.test(number)
    
    if (!status){
        let result = number.split(/[(\-) ]/)
        result = result.join("")
        return result
    }else {
        return number
    }    
    }
}



