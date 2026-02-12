const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const btn = document.getElementById("btn");
const total  = document.getElementById("span");

btn.addEventListener("click", ()=>{
    const b = bill.value;
    const t = tip.value;
     if(b == "" || b <= 0 && t == "" || t <= 0){
          total.innerText = "00.00";
     }
     else{
       total.innerText = Math.floor(b * (1 + t / 100 ));

     }
})
    