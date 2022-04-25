let cart=JSON.parse(localStorage.getItem("cart"))||[];
console.log(cart);
display(cart)

function display(cart){

    cart.map(function(el,index){

        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image

        let price=document.createElement("p");
        price.innerText=el.price;
        
        let name =document.createElement("p")
        name.innerText=el.name;

        let btn=document.createElement("button");
        btn.innerText="Remove"
        btn.setAttribute("id","remove")

        btn.addEventListener("click",function(){
            cart.splice(index,1);
            localStorage.setItem("cart",JSON.stringify(cart));
            window.location.reload();

        })
        div.append(img,price,name,btn)
        document.querySelector("#cart").append(div)


    })

}

var sum=0;
for(var i=0;i<cart.length;i++){

  sum = sum+cart[i].price;
  document.querySelector("#cart_total").innerText="Total: "+sum;
}