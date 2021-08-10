let url = "http://localhost:3000/api/cameras/";
getData = async () => {
   try {
       const response = await fetch(url);
       const data = await response.json();
       let Product = new Products();
       Product.products = data;
       Product.showProducts();
   }
   catch (e) {
      console.log("error")
   }
};
getData();