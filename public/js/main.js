
let url = "http://localhost:3000/api/cameras/";

getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    let Product = new Products();
    Product.products = data;
    Product.showProducts();

};
getData();