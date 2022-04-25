//store the products array in localstorage as "data"
document.querySelector("#product_form").addEventListener("submit",submitFun);

let productArr=JSON.parse(localStorage.getItem("products"))||[];

function submitFun(){
    event.preventDefault();
    let brand=document.querySelector("#product_brand").value;
    let name=document.querySelector("#product_name").value;
    let price=document.querySelector("#product_price").value;
    
    let image=document.querySelector("#image").value;

    function product(brand,name,price,image){
        this.brand=brand;
        this.name=name;
        this.price=price;
        this.image=image;
    
    }
    let product1=new product(brand,name,price,image);
    productArr.push(product1)
    console.log(productArr);

    localStorage.setItem("products",JSON.stringify(productArr));
    document.querySelector("#product_form").rest();


}
