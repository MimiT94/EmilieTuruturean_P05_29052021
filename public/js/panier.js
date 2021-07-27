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

        postOrder();

    });

    function postOrder() {
        // création de l'objet Form
        let form = new Form;
        if (form.validForm()) {


            let productsBought = [];

            CameraLocalStorage.forEach(article => productsBought.push(article.idCam));

            const firstName = document.getElementById("name").value;
            const lastName = document.getElementById("surname").value;
            const email = document.getElementById("email").value;
            const address = document.getElementById("adress").value;
            const zipcode = document.getElementById("postcode").value;
            const city = document.getElementById("city").value;

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
                .then((data) => {
                    console.log(data)
                    //localStorage.removeItem('camera')
                    localStorage.setItem("orderId", data.orderId);
                    localStorage.setItem("total", totalprice);
                  window.location.href = `confirmation_commande.html`
                })
                .catch(() => {
                    alert("error")
                })

            // envoi de la commande
            console.log('envoi de commande');
        } else {
            //pas d'envoi
            console.error('attention erreur pas de commande');
        }
    }





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
    let order = new Order;
        order.postOrder();
 */









