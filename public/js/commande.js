

let orderId = JSON.parse(localStorage.getItem("orderId"));
let totalConfirmation = JSON.parse(localStorage.getItem("total"));

    const totalConfirmation = document.querySelector("euros");
    const orderId = document.querySelector("commandeNumber");

    totalConfirmation.innerHTML = ` <p>Total de votre commande: <span id="euros">${total}€</span></p>`
    orderId.innerHTML = localStorage.getItem("orderId");

    // On vide le localStorage pour recommencer plus tard le processus d'achat




let ConfirmText = `
    <h3 id="commande"> Votre commande a bien été enregistrée ! Merci d'avoir choisis Orinoco</h3>
    <p>Total de votre commande: <span id="euros">${totalprice}€</span></p>
    <p>Votre numéro de commande est le suivant: <span id="commandeNumber">${orderId}</span></p>
                `;
    //localStorage.clear();