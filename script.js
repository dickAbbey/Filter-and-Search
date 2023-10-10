let products = {
    data : [
        {
            productName : "Regular White T-Shirt",
            category : "Topwear",
            price : "30",
            image : "images/white-shirt.jpeg",
        },
        {
            productName : "Beige Short Skirt",
            category : "Bottomwear",
            price : "49",
            image : "images/short.jpg",
        },
        {
            productName : "Sporty Smart Watch",
            category : "Watch",
            price : "99",
            image : "images/sporty-smartwatch.jpg",
        },
        {
            productName : "Basic Knitted Top",
            category : "Topwear",
            price : "29",
            image : "images/knitted.jpeg",
        },
        {
            productName : "Black Jacket",
            category : "Jacket",
            price : "300",
            image : "images/black-jacket.jpeg",
        },
        {
            productName : "Stylish Pink Trousers",
            category : "Bottomwear",
            price : "89",
            image : "images/Pink-Trousers.jpg",
        },
        {
            productName : "Brown Men's jacket",
            category : "Jacket",
            price : "189",
            image : "images/Brown-jacket.jpg",
        },
        {
            productName : "Comfy Gray Pants",
            category : "Bottomwear",
            price : "49",
            image : "images/comfy-gray.jpeg",
        },
    ],
};

for (let i of  products.data ) {
    // Create Card
    let card = document.createElement("div");

    // Card should have category and should stay in hidden initially 
    card.classList.add("card",i.category, "hide");

    // Image div  
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    // img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image); 
    card.appendChild(imgContainer);

    // Container
    let container = document.createElement("div");
    container.classList.add("container");

    // Product Name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    // Product Price
    let price = document.createElement("h6");
    price.classList.add("product-price");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);

    document.getElementById("products").appendChild(card);
}

// Parameter passed from the button (Parameter same as category)
function filterProduct(value) {
    // Butom class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) =>{
        // Check if value equals innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");  
        }else{
            button.classList.remove("active");
        }
    });
    // Select all cards
    let elements = document.querySelectorAll(".card");

    // loop through all cards
    elements.forEach((element) =>{
        // Display all cards on 'all' button click
        if(value =="all"){
            element.classList.remove("hide");
        }else{
            // Check if element contains category class
            if( element.classList.contains(value)){
                // display element based on category
                element.classList.remove("hide");
            }else{
                // hide other elements
                element.classList.add("hide");
            }
        }
    });
}

// Search button click
document.getElementById("search").addEventListener("click", ()=>{
    //Initialization
    let searchInput  = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    // Loop through all elements
    elements.forEach((element,index) =>{
        // Check if text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())) {
            // Display maatching card
            cards[index].classList.remove("hide");
        }else{
            // Hide others
            cards[index].classList.add("hide");
        }
    })
});

// Initially display all products
window.onload = () => {
    filterProduct("all");
}
