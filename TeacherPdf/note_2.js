
console.log("this a script entry point");

document.body.onclick=()=>{
    console.log("onclick");
}

//arrow function kulandik
setTimeout(()=>{
    console.log("setTimeout callback log 1");
    console.log("setTimeout callback log 2");

},100);
//100 milisaniyede bir calisacaktir 

//collection calculate
let number1=prompt("Enter number1:");
let number2=prompt("Enter number2:");
let colection=document.querySelector('#collect');
colection.innerHTML=parseInt(number1)+parseInt(number2);
