let CameraLocalStorage = JSON.parse(localStorage.getItem("camera"));

// affichage des produits du panier
const basket = document.querySelector("#containerBasket")
// si le panier est vide :
if (CameraLocalStorage === null) {
    const emptyBasket = `<h1>Votre panier  est vide</h1>`;
    basket.innerHTML = emptyBasket;
    console.log("panier vide");
} else {
    console.log("panier pas vide")


    let basketCam = `
        <h2>Récapitulatif de votre commande:</h2>
        <table class="container">
            <tr>
                <th>Vos articles</th>
                <th>Quantité</th>
                <th>Prix</th>
                <th>Total</th>

            </tr>
    `;

    for (j = 0; j < CameraLocalStorage.length; j++) {
        //fectch vers http://localhost:3000/api/cmaeras/idduproduit
        basketCam += `
            <tr id="articles">
                <td>${CameraLocalStorage[j].name}</td>
                <td><select name="quantity" id="quantity">
                    <option value="">--Choisissez la quantité--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select></td>
                <td>${CameraLocalStorage[j].price / 100}€</td>
                <td>€</td>
            </tr>   
        `;
    }
    basketCam += `
        <tr>
                <td colspan="3" id="price-total">PRIX TOTAL</td>
                <td>€</td>

            </tr>
        </table>
        <button class="btn-panier empty">Vider le panier</button>
    `;


    basket.innerHTML = basketCam;


}
// afficher plusieurs produits dans le panier
// vider le panier

//selection du bouton confirmation
const btnConfirm = document.getElementById("btnConfirm");
btnConfirm.addEventListener("click", () => {
    class Form {
        constructor() {
            this.name = document.getElementById("name").value;
            this.surname = document.getElementById("surname").value;
            this.email = document.getElementById("email").value;
            this.address = document.getElementById("address").value;
            this.postcode = document.getElementById("postcode").value;
            this.city = document.getElementById("city").value;
        }
    }

    const formValues = new Form();


    localStorage.setItem("formValues", JSON.stringify(formValues));
    //ajout des produits du panier + les données du form
    const SendProducts = {
        CameraLocalStorage,
        formValues
    }
    // mettre dans requete post les infos recupérés
    const order = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(SendProducts),

    }
    fetch(`http://localhost:3000/api/cameras/order`, order)
    console.log(order)

});







