async function apiCall(url){
    try{
        let res=await fetch(url)
        let data=await res.json();
        console.log(data)
        return data
        
    }
    catch(err){
        console.log(err);
    }
}

export {apiCall,appendArticles}


// function appendArticles(articles,news){
//     articles.forEach(el=>{

//         // let news=document.getElementById("news")

//         let div1=document.createElement("div");
//         let div2=document.createElement("div");
//         let div3=document.createElement("div");
//         let div4=document.createElement("div");
//         let div=document.createElement("div");
//         div.setAttribute("id","div")
//         let img=document.createElement("img")
//         img.src=el.urlToImage

//         let author=document.createElement("p")
//         author.innerText=el.author

//         let content=document.createElement("p")
//         content.innerText=el.content

//         let description=document.createElement("p")
//         description.innerText=el.description

//         let title=document.createElement("p")
//         title.innerText=el.title

//         div1.append(title);
//         div2.append(author,content)
//         div3.append(description)
//         div4.append(img)

//         div.append(div1,div2,div3,div4)

//         // news.append(div)
//         // document.querySelector("#news").append(div)
//         news.append(div)
//     })
    

// }


function appendArticles(articles, news) {
    articles.forEach(element => {
        let div1 = document.createElement("div")
        let div2 = document.createElement("div")
        let div3 = document.createElement("div")
        let div4 = document.createElement("div")
        let div = document.createElement("div")
        div.setAttribute("id","div")

        let img = document.createElement("img")
        img.src = element.urlToImage

        let name = document.createElement("p")
        name.innerText=element.author

        let content = document.createElement("p")
        content.innerText=element.content

        let disc = document.createElement("p")
        disc.innerText=element.description

        let title = document.createElement("p")
        title.innerText=element.title

        div1.append(title)
        div2.append(name,content)
        div3.append(disc)
        div4.append(img)
        div.append(div1,div2,div3,div4)
        div.addEventListener("click",function(){
            clickfun(element)
            
        })

        news.append(div)
        
    });
   
}

const clickfun=(element)=>{
    localStorage.setItem("article",JSON.stringify(element))
    location.href="blog.html"

}

// export { apiCall, appendArticles }


