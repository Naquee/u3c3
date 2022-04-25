// Store cart items in local storage with key: "items"

// console.log(1==="1")
let items=document.getElementById("items");

function getGrosiry(){
    
    
    const url=`https://grocery-masai.herokuapp.com/items`
    
    fetch(url).then(function(res){
        return res.json();
        // display(name[0].data)
        // console.log("res:",res);

    })
    .then(function(res){
        // display(name[2].data)

        // display(res[0].name)
        console.log(res);
        var pro=res.data  
        display(pro)
    })
    .catch(function(err){
        console.log("err:",err)
    })
}




getGrosiry();





function display(data){
    items.innerHTML=null;

  data.map(function(elem){
      let div1=document.createElement("div");

      let img=document.createElement("img");
      img.setAttribute("src",elem.image)

      let name=document.createElement("p");
      name.innerText=elem.name;

      let price=document.createElement("p");
      price.innerText=elem.price;

      let btn=document.createElement("button");
      btn.innerText="Add To Cart";
      btn.setAttribute("id","cart");

      btn.addEventListener("click",function(){
          addtocart(elem);
      })



      div1.append(img,name,price,btn);
      document.querySelector("#items").append(div1)
  })
//   console.log("imag:",img)

 
}

let cartArr=[];
function addtocart(elem){
    elem.quant=1;
    cartArr.push(elem);
    localStorage.setItem("cart",JSON.stringify(cartArr))
    var count=document.getElementById("item_count")
    count.innerText=cartArr.length;
}

