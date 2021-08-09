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

    validName() {
        if (this.testStringBetween3and15(this.name)) {
            document.getElementById('Nameerror').textContent = "";
            return true;
        }
        document.getElementById('Nameerror').textContent = "* 3 à 15 caractères maximum";
        this.error++;
        return false;

    }

    validSurname() {
        if (this.testStringBetween3and15(this.surname)) {
            document.getElementById('Surnameerror').textContent = "";
            return true;
        }
        document.getElementById('Surnameerror').textContent = "* 3 à 15 caractères maximum";
        this.error++;
        return false;
    }
    validAdress() {
        if (this.testStingBetween5and25(this.adress)) {
            document.getElementById('Adresserror').textContent = "";
            return true;
        }
        document.getElementById('Adresserror').textContent = "* 5 à 25 caractères maximum";
        this.error++;
        return false;
    }
    validEmail() {
        if (this.testEmail(this.email)) {
            document.getElementById('Emailerror').textContent = "";
            return true;
        }
        document.getElementById('Emailerror').textContent = "* le format est incorrect (hh@gmail.com)";
        this.error++;
        return false;
    }
    validPostCode() {
        if (this.testNumbers5(this.postcode)) {
            document.getElementById('Postcodeerror').textContent = "";
            return true;
        }
        document.getElementById('Postcodeerror').textContent = "* Renseignez 5 chiffres";
        this.error++;
        return false;
    }
    validCity() {
        if (this.testStringBetween3and15(this.city)) {
            document.getElementById('Cityerror').textContent = "";
            return true;
        }
        document.getElementById('Cityerror').textContent = "* Entre 3 et 15 lettres";
        this.error++;
        return false;
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