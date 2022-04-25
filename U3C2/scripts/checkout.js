document.querySelector("#form").addEventListener("submit",Checkout);

function Checkout(event){
    event.preventDefault()

    alert("Order Accepted");

    setTimeout(function(){
        alert("order is being cooked")
    },3000)

    setTimeout(function(){
        alert("order is ready")
    },10000)

    setTimeout(function(){
        alert("order delivered");
    },15000)
}