let CameraLocalStorage = JSON.parse(localStorage.getItem("camera"));
console.log(typeof CameraLocalStorage);
console.log(CameraLocalStorage);
let totalprice = 0;

let arrayCamera = `
    <h2>Récapitulatif de votre commande:</h2>
    <table class="container">
        <tr>
        <th>Vos articles</th>
        <th>Quantité</th>
        <th>Prix</th>
        <th>Total</th>
        </tr>
                `;

CameraLocalStorage.forEach((camera) => {
    console.log(camera.idCam);
    console.log(camera)
    let id = camera.idCam;



    fetch(`http://localhost:3000/api/cameras/${id}`)
        .then( res => res.json())
        .then( data =>
           {
            arrayCamera += `<tr id="articles">
                <td>${data.name}</td>
                <td>${camera.quantity}
                   </td>
                <td>${data.price / 100}€</td>
                <td>${data.price / 100 * camera.quantity}€</td>
            </tr>  
                ` ;


               const basket = document.querySelector("#containerBasket")
               basket.innerHTML = arrayCamera + totalCamera ;
               console.log(basket)  });


});

let totalCamera = `
        <tr>
                <td colspan="3" id="price-total">PRIX TOTAL</td>
                <td>${totalprice} €</td>

            </tr>
        </table>
       <button class="btn-panier empty" id="empty">Vider le panier</button>
    `;


const btnEmptyBasket = document.getElementById("empty");
btnEmptyBasket.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem("camera");
    alert("Votre panier est maintenant vide")
    window.location.href = "panier.html";

});



/*
    for (j = 0; j < CameraLocalStorage.length; j++){
        arrayCamera += `<tr id="articles">
                <td>${CameraLocalStorage[j].name}</td>
                <td>${CameraLocalStorage[j].quantity}
                   </td>
                <td>${CameraLocalStorage[j].price / 100}€</td>
                <td>${CameraLocalStorage[j].price / 100 * CameraLocalStorage[j].quantity}€</td>
            </tr>   `
    arrayCamera += `
        <tr>
                <td colspan="3" id="price-total">PRIX TOTAL</td>
                <td>€</td>

            </tr>
        </table>
       <button class="btn-panier empty" id="empty">Vider le panier</button>
    `;}

});



 */
/*

Je récupère mon localstorage
Je créé une boucle sur mon tableau
Ici je suis dans la boucle et j'ai donc l'id présent dans chaque itération de ma boucle
Je fais une requête fetch avec l'id pour récupérer les informations
Je les ajoute à mon tableau
J'inser mon tableau dans mon html

*/


/*

let price = camera.price;


console.log(CameraLocalStorage)
console.log(CameraLocalStorage.quantity)*/
// affichage des produits du panier
//const basket = document.querySelector("#containerBasket")
// si le panier est vide :
//if (CameraLocalStorage === null) {
  //  const emptyBasket = `<h1>Votre panier  est vide</h1>`;
   // basket.innerHTML = emptyBasket;
/* else {
    let basketCam = `
        <h2>Récapitulatif de votre commande:</h2>
        <table class="container">
            <tr>
                <th>Vos articles</th>
                <th>Quantité</th>
                <th>Prix</th>
                <th>Total</th>

            </tr>
    `;*/

   /* for (j = 0; j < CameraLocalStorage.length; j++) {

        basketCam += `
            <tr id="articles">
                <td>${CameraLocalStorage[j].idCam}</td>
                <td>${CameraLocalStorage[j].quantity}
                   </td>
                <td>${CameraLocalStorage.price / 100}€</td>
                <td>${CameraLocalStorage[j].price / 100 * CameraLocalStorage[j].quantity}€</td>
            </tr>
        `;
    }
    basketCam += `
        <tr>
                <td colspan="3" id="price-total">PRIX TOTAL</td>
                <td>€</td>

            </tr>
        </table>
       <button class="btn-panier empty" id="empty">Vider le panier</button>
    `;


    basket.innerHTML = basketCam;


}*/

// vider le panier

// selection du bouton pour supprimer
//const btnEmptyBasket = document.getElementById("empty");
//vider le local storage
/*
btnEmptyBasket.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem("camera");
    localStorage.removeItem("totalprice")
    alert("Votre panier est maintenant vide")
    window.location.href = "panier.html";

});

*/
//selection du bouton confirmation
const btnConfirm = document.getElementById("btnConfirm");
btnConfirm.addEventListener("click", (e) => {
    e.preventDefault();

    class Form {
        constructor() {
            this.name = document.getElementById("name").value;
            this.surname = document.getElementById("surname").value;
            this.email = document.getElementById("email").value;
            this.adress = document.getElementById("adress").value;
            this.postcode = document.getElementById("postcode").value;
            this.city = document.getElementById("city").value;
        }
    }

    const formValues = new Form();

    const regexNameSurnameCity = (value) => {
        return /^[A-Za-z]{3,15}$/.test(value);
    }

//fonction pour l'input valide
    function validElement(querySelectorId) {
        document.querySelector(`#${querySelectorId}`).textContent = "";
    }

    //fonction pour l'input invalide
    function invalidElement(querySelectorId) {
        document.querySelector(`#${querySelectorId}`).textContent = "Veuillez bien compléter ce champs";
    }

    function nameValid() {
// condition de mini  3 lettre pour le nom
        const theName = formValues.name;
        if (regexNameSurnameCity(theName)) {
            validElement("Nameerror");
            return true;
        } else {
            invalidElement("Nameerror");
            return false;
        }
    }

    function surnameValid() {
// condition de mini  3 lettre pour le nom
        const theSurname = formValues.surname;
        if (regexNameSurnameCity(theSurname)) {
            validElement("Surnameerror");
            return true;
        } else {
            invalidElement("Surnameerror");
            return false;
        }
    }

    const regexEmail = (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    function EmailValid() {
        const TheEmail = formValues.email;

        if (regexEmail(TheEmail)) {
            validElement("Emailerror");
            return true;
        } else {
            invalidElement("Emailerror");
            return false;
        }
    }

    const regexAdress = (value) => {
        return /^[A-Za-z0-9\s]{5,25}$/.test(value);
    }

    function adressValid() {
// condition de mini  3 lettres pour le nom
        const theAdress = formValues.adress;
        if (regexAdress(theAdress)) {
            validElement("Adresserror");
            return true;
        } else {
            invalidElement("Adresserror");
            return false;
        }
    }

    const regexCodePost = (value) => {
        return /^[0-9]{5}$/.test(value);
    }

    function PostCodeValid() {
        const thePostCode = formValues.postcode;

        if (regexCodePost(thePostCode)) {
            validElement("Postcodeerror");
            return true;
        } else {
            invalidElement("Postcodeerror");
            return false;
        }
    }


    function CityValid() {
// condition de mini  3 lettre pour le nom
        const theCity = formValues.city;
        if (regexNameSurnameCity(theCity)) {
            validElement("Cityerror");
            return true;
        } else {
            invalidElement("Cityerror");
            return false;
        }
    }

    // demande de validation avant d'envoyer les infos
    if (nameValid() && surnameValid() && PostCodeValid() && EmailValid() && adressValid() && CityValid()) {
        localStorage.setItem("formValues", JSON.stringify(formValues));
    } else {
        invalidElement();
    }

    //ajout des produits du panier + les données du form
    const SendProducts = {
        CameraLocalStorage,
        formValues
    }


    function FormContact() {
        firstName = document.getElementById("name").value;
        lastName = document.getElementById("surname").value;
        email = document.getElementById("email").value;
        address = document.getElementById("adress").value;
        zipcode = document.getElementById("postcode").value;
        city = document.getElementById("city").value;


        const order = {
            contact: {
                firstName: firstName,
                lastName: lastName,
                address: address + ' ' + zipcode,
                city: city,
                email: email,
            },
            products: CameraLocalStorage.idCam,
        }
        console.log(CameraLocalStorage);

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {'Content-Type': 'application/json; charset=utf-8'},
        }

        fetch(`http://localhost:3000/api/cameras/order`, requestOptions)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                localStorage.removeItem('camera')
                window.location.href = `confirmation_commande.html`
            })
            .catch(() => {
                alert(error)
            })
    }

})


/*   const sendbasket =   {
       method: "POST",
       body: JSON.stringify(SendProducts),
       headers: {
           'Content-Type': 'application/json',

   }};
   fetch(`http://localhost:3000/api/cameras/order`, sendbasket) .then((response) => response.json())
       .then((json) => {
           console.log(json)
           localStorage.removeItem('camera'+ 'totalprice'+ 'formValues')
           window.location.href = confirmation_commande.html;
       })
       .catch(() => {
           alert(error)
       })
}

   // mettre dans requete post les infos recupérés
  /* const order = {
       method: "POST",
       headers: {
           'Content-Type': 'application/json',
       },
       body: JSON.stringify(SendProducts),

   }
   fetch(`http://localhost:3000/api/cameras/order`, order)
   console.log(order)
*/








