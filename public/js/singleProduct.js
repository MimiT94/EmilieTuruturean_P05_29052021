//pour le produit pas de s a produit et pas de for each, recuperer l'id avec  URLSearchParams ! puis voir le local storage

const queryString_url_id = window.location.search;
console.log(queryString_url_id);//affiche l'id
let id = new URLSearchParams(queryString_url_id).get("name");

console.log(id);// coupe l'id pour afficher que les chiffres sans le ?id=


getData2 = async () => {
    const response = await fetch(`http://localhost:3000/api/cameras/${id}`);
    const data2 = await response.json();
    let camera = new Camera(data2);


};

getData2();