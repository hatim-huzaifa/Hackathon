let url = document.location.href;
let id = url.split("?")[1];
id = id.split("=")[1];
console.log(id);
let product = JSON.parse(localStorage.getItem("products"))[id - 1];
console.log(product);

let pageTitle = document.getElementById("pageTitle")

pageTitle.innerHTML = `
    ${product.title}
`

let renderProductDetails = () => {
    let productDetails = document.getElementById("productDetails");

    productDetails.innerHTML = `
                <div class="row">
                    <div class="col-4"> 
                        <img src="${product.thumbnail}" alt="" class="w-100">
                        
                    </div>
                    <div class="col-8">
                        <h2>${product.title}</h2>
                        <p>${product.description}</p>
                        <p>${product.price}</p>
                        <p>(${product.rating})</p>
                        <div class="text-warning">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                        </div>
                        <button class="btn btn-outline-primary mt-3" onclick="addToCart(${product.id})">Add To Cart <i class="bi bi-cart-plus"></i></button>
                        <div class="flex">
                        <a href="index.html#products" class="btn btn-outline-dark mt-5 mr-5">Go Back</a>
                    </div>


                  </div>

                  <div class="mt-5">
                      <h3>Description</h3>
                  </div>

                  <div class="mt-5 text-start">
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cumque corporis unde odio totam ipsum doloremque autem deserunt vitae maiores eveniet, ad repudiandae dolore enim nostrum incidunt iure ullam ex!
                    Obcaecati magni neque ipsa ad dolores perspiciatis excepturi dolorem nostrum, vero, sint asperiores voluptatem explicabo praesentium consectetur placeat? </p>
                  </div>

                  <div class="mt-5 d-flex justify-content-evenly" >
                  <img src="${product.images[1]}" class="w-25 h-50" >
                  <img src="${product.images[2]}" class="w-25 h-50" >
                  <img src="${product.images[3]}" class="w-25 h-50" >
                  </div>
                </div>
                

    `
}

renderProductDetails();

let cart = [];
let addToCart = (id) => {
    event.preventDefault();
    alert("product added successfully !!");
    let product = JSON.parse(localStorage.getItem("products"))[id-1];
    cart.push(product);
    console.log(product);
    renderCartItems();
}