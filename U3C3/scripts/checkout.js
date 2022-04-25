// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let movies=JSON.parse(localStorage.getItem("book"))||[];
console.log(movies)


let movie=document.getElementById("movie")
display(movies)

function display(movies){
    movies.forEach(function(el){

        let Title=document.createElement("p")
        Title.innerText=el.Title;

        let img=document.createElement("img");
        img.src=el.Poster

        let btn=document.createElement("button")
        btn.innerText="Book Now"

        btn.addEventListener("click",function(){
            book(el)

        })


        movie.append(img,Title,btn)

        
    });
}
