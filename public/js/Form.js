class Form {
    constructor() {
        this.name = document.getElementById("name").value;
        this.surname = document.getElementById("surname").value;
        this.email = document.getElementById("email").value;
        this.adress = document.getElementById("adress").value;
        this.postcode = document.getElementById("postcode").value;
        this.city = document.getElementById("city").value;
        this.error = 0;
    }
    validForm() {
        this.validName();
        this.validSurname();
        this.validAdress();
        this.validEmail();
        this.validPostCode();
        this.validCity();
        if (this.error === 0) {
            // ici pas d'erreur
            console.log('pas erreur dans le formulaire' + this.error);
            return true;
        }
        // ici au moins une erreur
        console.log('erreur dans le formulaire' + this.error);
        return false;
    }
    validateInput(functionTest, input, errorElement, errorMessage){
        if(functionTest(input)){
            document.getElementById(errorElement).textContent = "";
            return true;
        }
        document.getElementById(errorElement).textContent = errorMessage;
        this.error++;
        return false;
    }
    validName(){
        this.validateInput(this.testStringBetween3and15, this.name, 'Nameerror','* 3 à 15 caractères maximum');
    }
    validSurname() {
        this.validateInput(this.testStringBetween3and15, this.surname, 'Surnameerror','* 3 à 15 caractères maximum');
    }
    validAdress() {
        this.validateInput(this.testStingBetween5and25, this.adress, 'Adresserror','* 5 à 25 caractères maximum');
    }
    validEmail() {
        this.validateInput(this.testEmail, this.email, 'Emailerror','* le format est incorrect (hh@gmail.com)');
    }
    validPostCode() {
        this.validateInput(this.testNumbers5, this.postcode, 'Postcodeerror','* Renseignez 5 chiffres');
    }
    validCity() {
        this.validateInput(this.testStringBetween3and15, this.city, 'Postcodeerror','* Entre 3 et 15 lettres');
    }
    testStringBetween3and15(value) {
        return /^[A-Za-z]{3,15}$/.test(value);
    }
    testStingBetween5and25 (value) {
        return /^[A-Za-z0-9\s]{5,25}$/.test(value);
    }
    testEmail(value){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    testNumbers5(value){
        return /^[0-9]{5}$/.test(value);
    }

}

//try { validForm()
//} catch (error) {
    console.log("error")
//}