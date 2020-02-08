class helperClass {

    validator(formObject) {
        for (var key in formObject) {   
            if(formObject[key] === ""){
                console.log(key+' '+'fiel is required');
                return "e0";
            }
        }
    }
}

export default helperClass = new helperClass();