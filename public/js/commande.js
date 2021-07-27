let orderId = localStorage.getItem("orderId");
let totalConfirmation = localStorage.getItem("total");


let ConfirmText = `
    <h3 id="commande"> Votre commande a bien été enregistrée ! </h3>
    <p>Total de votre commande: <span id="euros">${totalConfirmation}€</span></p>
    <p>Votre numéro de commande est le suivant: <span id="commandeNumber">${orderId}</span></p>
    <p>Vous allez recevoir un mail de confirmation d'ici peu de temps.</p>
    <h3>Merci d'avoir choisis Orinoco et à bientôt</h3>
                `;
document.getElementById('commande-confirmation').innerHTML = ConfirmText;
localStorage.clear();