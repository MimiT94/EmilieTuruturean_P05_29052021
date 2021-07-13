class Products {
    constructor() {

    }

    showProducts() {
        let home = document.getElementById("home");

        home.innerHTML = `<h2>Nos appareils photos</h2>`;
        this.products.forEach(product => {
            home.innerHTML += `
                 <article id="appareil">
                    <a href="product.html?name=${product._id}">
                        <figure>
                            <img class ="product_picture" src='${product.imageUrl}' />
                            <figcaption>
                                <h2 class="product_name">${product.name}</h2>
                                <button class="btn-panier">plus de détails</button>
                            </figcaption>
                        </figure>
                    </a>
                </article>
            `;
        })

    }
}


