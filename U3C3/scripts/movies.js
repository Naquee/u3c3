// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
// console.log(1=="1")

let id;

let movies=document.getElementById("movies")

async function searchMovies(){

    try{
        let search=document.getElementById("search").value;

        let res=await fetch(`https://www.omdbapi.com/?apikey=6a41ddca&s=${search}`)
        // console.log(res)
        let data=await res.json();
        // console.log(data)
        let movies=data.Search;
        appendMovies(movies)
        // return movies

    }catch(err){
        console.log(err);
    }

}

function appendMovies(data){
    data.forEach(function(el){
        let Title=document.createElement("p")
        Title.innerText=el.Title;

        let img=document.createElement("img");
        img.src=el.Poster

        let btn=document.createElement("button")
        btn.innerText="Book Now"

        btn.addEventListener("click",function(){
            book(el)

        })


        movies.append(img,Title,btn)
        

    })
}
let bookArr=[];
function book(el){
    bookArr.push(el)
    localStorage.setItem("book",JSON.stringify(bookArr));
    window.location.href="checkout.html"

}

// for debounce

// async function main(){
//     let data =await searchMovies()

//     if(data===undefined){
//         return false;
//     }
//     // console.log(data)
//     appendMovies(data)

// }

// function debounce(func,delay){
//     if(id){
//         clearTimeout(id)
//     }

//     id=setTimeout(function(){
//         func();

//     },delay)

// }

