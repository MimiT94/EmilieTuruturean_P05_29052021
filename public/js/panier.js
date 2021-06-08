
let CameraLocalStorage = JSON.parse(localStorage.getItem("camera"));

// affichage des produits du panier
const basket = document.querySelector("#containerForm")
// si le panier est vide :
if(CameraLocalStorage === null){
    const emptyBasket = `  <h1> Votre panier  est vide</h1>`
    basket.innerHTML = emptyBasket;
    console.log("panier vide");
}else {
    console.log("panier pas vide")


let basketCam = [];

    for( j =0; j < CameraLocalStorage.length; j ++){
        basketCam =  ` <table class="container">
            <tr>
                <th>Vos articles</th>
                <th>Quantité</th>
                <th>Prix</th>
                <th>Total</th>

            </tr>
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
                <td>${CameraLocalStorage[j].price/100}€</td>
                <td>€</td>
            </tr>
            <tr>
                <td colspan="3" id="price-total">PRIX TOTAL</td>
                <td>€</td>

            </tr>
        </table>
        <button class="btn-panier empty">Vider le panier</button>


        <form class="container">
            <fieldset>
                <legend>Vos informations</legend>
                <label for="name">Nom :<input id="name" type="text" class="form-control" placeholder="Dupont" required/>
                </label>
                <label for="surname">Prénom :<input id="surname" type="text" class="form-control"
                                                    placeholder="Jean Paul" required/></label>
                <label for="email">Email :<input type="email" name="email" class="form-control" id="email"
                                                 placeholder="JpDupont@gmail.com" required/></label>
                <label for="address">Adresse :<input type="text" id="address" class="form-control"
                                                    placeholder="13 rue des roses" required/></label>
                <label for="postcode">Code Postal :<input id="postcode" type="number" class="form-control"
                                                          placeholder="49000" required/></label>
                <label for="city">Ville :<input id="city" type="text" class="form-control" placeholder="Angers"
                                                required/></label>


                <p id="champs">Merci de remplir tous les champs</p>
                <button class="btn-panier" id="btnConfirm">Valider les
                    informations 
                    </button>
            </fieldset>
        </form>
       
`; }
        if(j == CameraLocalStorage.length){
            basket.innerHTML = basketCam;
        }



}
// afficher plusieurs produits dans le panier
// vider le panier

//selection du bouton confirmation
const btnConfirm = document.getElementById("btnConfirm");
btnConfirm.addEventListener("click", ()=>

{
    class Form{
        constructor() {
        this.name  = document.getElementById("name").value;
        this.surname = document.getElementById("surname").value;
        this.email =document.getElementById("email").value;
        this.address = document.getElementById("address").value;
        this.postcode = document.getElementById("postcode").value;
        this.city = document.getElementById("city").value;
        }}
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
    headers: { 'Content-Type': 'application/json',
    },
    body : JSON.stringify(SendProducts),

}
fetch(`http://localhost:3000/api/cameras/order`, order)
    console.log(order)

});







