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

//let camera;

class Camera {
    constructor(data) {
        this.camera = data;
        this.showCamera()
    }

    showCamera() {
        let camera = this.camera;
        let body = document.getElementById("body");
        body.innerHTML =
            `
                <h2>Votre produit sélectionné</h2>
            <article id="appareil1">
                <figure class="product">
                    <img src=${camera.imageUrl}>
                        <figcaption>
                            <h3>${camera.name}</h3>
                            <label for="lenses">Choisissez une lentille :</label>
                            <select name="lenses" id="lenses">
                            </select>
                            <p>Prix : ${camera.price / 100} €</p>
                            <p>Description: ${camera.description} </p>
                            <button id="btn" class="btn-panier" type="submit">Ajouter au panier</button>
                        </figcaption>
                </figure>
            </article>

       `
        ;
        let lensesOptions = [];

//selection de l'option
        for (let i = 0; i < camera.lenses.length; i++) {
            lensesOptions += `<option value="${camera.lenses[i]}">${camera.lenses[i]}</option>;
                               `
        }
        // ajout du choix des lenses avec id de select
        document.getElementById("lenses").innerHTML =
            `<option value="">--Choisissez une option--</option>` + lensesOptions;


        //
        //ecouter le click
        document.getElementById("btn").addEventListener("click", (e) => {
            e.preventDefault();
            let selectedCamera = camera;
            selectedCamera.lensesOptions = document.querySelector("select").value;


//recuperation des données de la page
            let productOptions = {
                nameProduct: camera.name,
                idCam: camera._id,
                lensesOptions: camera.lenses,
                quantity: 1,
                Price: camera.price / 100
            }
            console.log(productOptions);


            //local storage
            let CameraLocalStorage = JSON.parse(localStorage.getItem("camera"));
            console.log(CameraLocalStorage)
// message de confirmation
            const popupConfirmation = () => {
                if (window.confirm(`${camera.name} au prix de  ${camera.price / 100} € a bien été ajouté au panier.Cliquez sur  annuler pour revenir à la page d'accueil ou ok pour aller au panier`)) {
                    window.location.href = "panier.html";
                } else {
                    window.location.href = "index.html";
                }
            }
            // fonction pour ajouter le produit selectionné au local storage
            const addCamerainLocalStorage = () => {

                CameraLocalStorage.push(camera)
                localStorage.setItem("camera", JSON.stringify(CameraLocalStorage));
            }

            if (CameraLocalStorage) {
                addCamerainLocalStorage();
                popupConfirmation();
            } else {
                CameraLocalStorage = [];
                addCamerainLocalStorage();
                popupConfirmation();
            }

        })
    }

}
