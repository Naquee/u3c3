// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar} from "../components/navbar.js"
let x=document.getElementById("navbar")
x.innerHTML=navbar()

import {apiCall,appendArticles} from "./main.js"


let url="https://masai-mock-api.herokuapp.com/news/top-headlines?country=in"

let news=document.getElementById("news");

let data=await apiCall(url)
console.log(data)
appendArticles(data,news)







// console.log(1=="1")








