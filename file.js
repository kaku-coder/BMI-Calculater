let btnel=document.querySelector(".btn")
let bmiresult= document.querySelector("#bmi-result") 
let weightcondion=document.getElementById("weight-condition")
btnel.addEventListener("click",function calculatebmi(){
    let height = document.querySelector("#Height").value /100;
    let weight = document.querySelector("#weight").value;


    let bmivalue = weight/(height * height)
    console.log(bmivalue);
    bmiresult.value=bmivalue // its a input so you can't use innerText here

    if (bmivalue<=18.5) {
        weightcondion.innerText="Under weight"
    }else if (bmivalue >= 18.5 && bmivalue <=24.9) {
        weightcondion.innerText="Normal weight"
    }else{
        weightcondion.innerText="Over weight"
    }
})