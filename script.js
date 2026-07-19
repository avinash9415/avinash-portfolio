

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

navbar.classList.add("sticky");

}else{

navbar.classList.remove("sticky");

}

});




const typing=document.querySelector(".hero-role span");

const words=[
"Developer",
// "Frontend",
"Designer",
"Freelancer"
];

let word=0;
let letter=0;
let deleting=false;

function type(){

const current=words[word];

if(!deleting){

typing.textContent=current.substring(0,letter++);

if(letter>current.length){

deleting=true;

setTimeout(type,1200);

return;

}

}else{

typing.textContent=current.substring(0,letter--);

if(letter<0){

deleting=false;

word++;

if(word>=words.length){

word=0;

}

letter=0;

}

}

setTimeout(type,deleting?60:120);

}

type();





const loader=document.querySelector(".loader");
const number=document.querySelector(".loader-number");
const progress=document.querySelector(".loader-progress");

let count=0;

const loading=setInterval(()=>{

count++;

number.innerHTML=count+"%";

progress.style.width=count+"%";

if(count>=100){

clearInterval(loading);

setTimeout(()=>{

loader.classList.add("hide");

},500);

}

},22);