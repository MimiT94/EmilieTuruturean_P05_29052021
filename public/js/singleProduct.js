//pour le produit pas de s a produit et pas de for each, recuperer l'id avec  URLSearchParams ! puis voir le local storage
const queryString_url_id = window.location.search;
console.log(queryString_url_id);//affiche l'id
let id = new URLSearchParams(queryString_url_id).get("name");
console.log(id);// coupe l'id pour afficher que les chiffres sans le ?id=
getProduct = async () => {
    try {
    const response = await fetch(`http://localhost:3000/api/cameras/${id}`);
    const product = await response.json();
    let camera = new Camera(product);
    camera.showCamera();
    }
    catch (e) {
       console.log("error")
    }
};
getProduct();

