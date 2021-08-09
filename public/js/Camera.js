class Camera {
    constructor(data) {
        this.camera = data;
        this._id = data._id;
        this.imageURL = data.imageURL;
        this.price = data.price;
        this.description = data.description;
        this.name = data.name;




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
                            <label for="lenses">Choisissez une lentille : (facultatif)</label>
                            <select name="lenses" id="lenses"  required>
                            </select>
                            <label for="quantity">Choisissez une quantité :</label>
                            <select name="quantity" id="quantity"  required>
                            </select>
                            <p>Prix : ${camera.price / 100} €</p>
                            <p>Description: ${camera.description} </p>
                            <button id="btn" class="btn-panier" type="submit">Ajouter au panier</button>
                            <span id="productok"></span>
                        </figcaption>
                </figure>
            </article>

       `
        ;
        let lensesOptions = ``;

//selection de l'option
        for (let i = 0; i < camera.lenses.length; i++) {
            lensesOptions += `<option value="" >${camera.lenses[i]}</option>;
                               `
        }
        // ajout du choix des lenses avec id de select
        document.getElementById("lenses").innerHTML =
            `<option value="" >--Choisissez une option--</option>` + lensesOptions;

//choix de quantité
        const quantityValue =
            `<option value="1" >1</option>
        <option value="2" >2</option>
        <option value="3" >3</option>`;
        const addQuantity = document.getElementById("quantity")
        addQuantity.innerHTML = quantityValue;
        //
        //ecouter le click
        document.getElementById("btn").addEventListener("click", (e) => {
            e.preventDefault();
//alert("camera prise en compte")
            document.getElementById("productok").innerHTML = `<h2>Votre article est bien enregistré</h2>`;

            let selectedCamera = camera;
            selectedCamera.camera = document.querySelector("select").value;
// ajout du choix de la quantité
            const quantityChoice = parseInt(addQuantity.value);


//recuperation des données de la page
            let productOptions = {
                //nameProduct: camera.name,
                idCam: camera._id,
                quantity: quantityChoice,
                //price: camera.price
            }
            let CameraLocalStorage = JSON.parse(localStorage.getItem("camera")) || [];

            console.log(CameraLocalStorage);
            if (CameraLocalStorage.some(cameraBasket => cameraBasket.idCam === camera._id)) {
                console.log('existant dans le panier');
                CameraLocalStorage = CameraLocalStorage.map(cameraBasket => {
                    if (cameraBasket.idCam === camera._id) {
                        cameraBasket.quantity += +quantityChoice
                    }
                    return cameraBasket;
                })
            } else {
                //
                CameraLocalStorage.push(productOptions)
            }
            localStorage.setItem("camera", JSON.stringify(CameraLocalStorage));
            console.log(CameraLocalStorage);

// calcul du prix total
            /*
            let totalPrice = localStorage.getItem('totalprice');
            if (totalPrice != null) {
                totalPrice = parseInt(totalPrice);
                localStorage.setItem('totalprice', totalPrice + camera.price);
            } else {
                localStorage.setItem("totalprice", camera.price)
            }

             */
            //local storage
            //let CameraLocalStorage = JSON.parse(localStorage.getItem("camera")) || [];
            // if id dans le panier alors quantity ++

            console.log(CameraLocalStorage);
//pour la quantité du produit
//let product = CameraLocalStorage.find( product => camera._id == idCam)
            //          if(productOptions){
            //           camera.quantity ++
            //}
            //      CameraLocalStorage.push(productOptions);
            // fonction pour ajouter le produit selectionné au local storage
            /*const addCamerainLocalStorage = () => {

                localStorage.setItem("camera", JSON.stringify(CameraLocalStorage));
            }*/

/*
            if (CameraLocalStorage) {
                addCamerainLocalStorage();
                productOptions.quantity++;

            } else {
                CameraLocalStorage = [];
                addCamerainLocalStorage();
            }
*/

        })
    }

}