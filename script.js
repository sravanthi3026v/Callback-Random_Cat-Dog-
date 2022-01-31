function cat(){
    let caturl="https://aws.random.cat/meow";
    fetch(caturl).then((response)=>response.json())
    .then((catdata)=>{getData(catdata)})
    .catch((error)=>{console.log(error)});
}
function getData(catdata){
    let catdiv=document.querySelector("#cat");
    catdiv.innerHTML=`<img src="${catdata.file}" alt="RandomCat" width="300px" height="300px">`
}

function dog(){
    let dogurl="https://dog.ceo/api/breeds/image/random";
    fetch(dogurl).then((response)=>response.json())
    .then((dogdata)=>{getData(dogdata)})
    .catch((error)=>{console.log(error)});
}
function getData(dogdata){
    let dogdiv=document.querySelector("#dog");
    dogdiv.innerHTML=`<img src="${dogdata.message}" alt="RandomDog" width="200px" height="200px">`
}
