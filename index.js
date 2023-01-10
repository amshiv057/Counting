  let saveE =document.getElementById("save-ent");
let countE=document.getElementById("count-el")

let count =0
console.log(saveE)
function increment(){
    count =count+1;
    countE.textContent=count;
}
function save(){
    let countstr= count+"-"
    saveE.textContent+=countstr;
    console.log(count)
    countE.textContent =0;
    count=0
}