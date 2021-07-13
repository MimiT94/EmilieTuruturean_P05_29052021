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
let totalCamera = `
        <tr>
                <td colspan="3" id="price-total">PRIX TOTAL</td>
                <td id="price-total-content"></td>

            </tr>
        </table>
       <button class="btn-panier empty" id="empty">Vider le panier</button>
    `;


if (CameraLocalStorage) {
    CameraLocalStorage.forEach((camera) => {
        console.log(camera.idCam);
        console.log(camera)
        let id = camera.idCam;


        fetch(`http://localhost:3000/api/cameras/${id}`)
            .then(res => res.json())
            .then(data => {
                arrayCamera += `<tr id="articles">
                <td>${data.name}</td>
                <td>${camera.quantity}
                   </td>
                <td>${data.price / 100}€</td>
                <td>${data.price / 100 * camera.quantity}€</td>
            </tr>`;


                totalprice += data.price / 100 * camera.quantity;
                const basket = document.querySelector("#containerBasket")
                console.log(totalprice);
                console.log(totalCamera);
                basket.innerHTML = arrayCamera + totalCamera;
                const tt = document.querySelector("#price-total-content")
                tt.innerHTML = totalprice + "€";
            })
            .then(data => {
                const btnEmptyBasket = document.getElementById("empty");
                btnEmptyBasket.addEventListener('click', (e) => {
                    e.preventDefault();
                    localStorage.removeItem("camera");
                    alert("Votre panier est maintenant vide")
                    window.location.href = "panier.html";

                });

            })
        ;


    });
} else {
    const basket = document.querySelector("#containerBasket")
    basket.innerHTML = "<p id='emptyMessage'>Votre panier est vide</p>";
}


//selection du bouton confirmation
if (CameraLocalStorage) {


    const btnConfirm = document.getElementById("btnConfirm");
    btnConfirm.addEventListener("click", (e) => {
        e.preventDefault();
        /*
        postOrder();
        // appeler une fonction qui va être en charge de passer la commande postOrder
    });
/*
    function postOrder() {
        // création de l'objet Form
        let form = new Form;
        form.validForm();
    }

 */
    // a déplacer dans un fichier Form.js

// function validForm
    // validForm va créer un object Form de ta classe d'avant
    // la classe dans le constructeur elle récupère les valeurs des input
    // appeler une fonction de cette classe validForm qui va valider les input
    // si les input sont valide alors on commande
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
            invalidElement(CityValid(), surnameValid(), nameValid(), PostCodeValid(), EmailValid(), adressValid());
        }

        //ajout des produits du panier + les données du form
        const SendProducts = {
            CameraLocalStorage,
            formValues
        }


        firstName = document.getElementById("name").value;
        lastName = document.getElementById("surname").value;
        email = document.getElementById("email").value;
        address = document.getElementById("adress").value;
        zipcode = document.getElementById("postcode").value;
        city = document.getElementById("city").value;


        let productsBought = [];

        CameraLocalStorage.forEach(article => productsBought.push(article.idCam));

        const order = {
            contact: {
                firstName: firstName,
                lastName: lastName,
                address: address + ' ' + zipcode,
                city: city,
                email: email,
            },
            products: productsBought,
        };
        console.log(order);

        console.log(productsBought);

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {'Content-Type': 'application/json; charset=utf-8'},
        }

        fetch(`http://localhost:3000/api/cameras/order`, requestOptions)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                //localStorage.removeItem('camera')
                localStorage.setItem("orderId", CameraLocalStorage.idCam);
                localStorage.setItem("total", totalprice);

                window.location.href = `confirmation_commande.html`
            })
            .catch(() => {
                alert("error")
            })


    })
} else {
    const form = document.querySelector("#containerForm")
    form.innerHTML = "<p id='emptyMessage'>Revenez quand vous aurez fait votre choix</p>";
}


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








