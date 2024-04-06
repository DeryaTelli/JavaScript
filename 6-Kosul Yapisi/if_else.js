



// let userN=prompt("Enter your user name: ");
// let information=document.querySelector("#info");

//kisa if kullanimi
//kosul ? dogruysa yapilacaklari yaz : yanlissa yapilacaklari yaz
// information.innerHTML=`${userN.length > 0 ? userN : "Not find user name :("}`;


//zincirleme 
let money=40;
let canBuy=
    (money<17)? "can't buy" :
    (money>30)? "can buy":
    "can enter your money amoung..";
console.log(canBuy);    


//let userName=prompt("Enter your user name: ");
let userName="deraa";
if(userName.length>0){
    console.log(`Kullanici bilginiz: ${userName}`);
}else{
    console.log("user name empty");
}


//example 1 sayidan buyuk kucugu bulma 
let number1 = prompt("Enter first number: ");
let number2=prompt("Enter second number: ");
if(number1>number2){
    console.log(`number : ${number1}`);
}else if(number1==number2){
    console.log("Same number ");
}else{
    console.log(`number : ${number2}`);
}

let midterm=prompt("Enter midterm: ");
let finals=prompt("Enter finals: ");
let avg=(midterm*0.4)+(finals*0.6);
let textInfo;

let SMILE=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
<path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg>`

let SAD=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
<path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg>
`
textInfo=SMILE;
if(avg>=0 && avg<=49){
    textInfo+=" FF"
}else if(avg>=50 && avg<=59){
    textInfo+=" FD"
}else if(avg>=60 && avg<=64){
    textInfo+=" DD"
}else if(avg>=65 && avg<=69){
    textInfo+=" DC"
}else if(avg>=70 && avg<=74){
    textInfo+=" CC"
}else if(avg>=75 && avg<=79){
    textInfo+=" CB"
}else if(avg>=80 && avg<=84){
    textInfo+=" BB"
}else if(avg>=85 && avg<=89){
    textInfo+=" BA"
}else if(avg>=90 && avg<=100){
    textInfo=SAD +" AA"
}
let emoji=document.querySelector("#emoji");
emoji.innerHTML=`${textInfo} -> ${avg}`;

let randomNumber=Math.floor(Math.random()*10);
let guesst=prompt("1 - 10 between enter number");
if(guesst==randomNumber && randomNumber!=null){
    alert("Correct");

}else if(guesst==""){
    alert("please enter number");

}else{
    alert("Wrong");
    console.log("random number: "+randomNumber);
}


// example 

let user = prompt("Enter your user name: ");
let age = prompt("Enter your age:");
let info=document.querySelector("#info");

if(user && age >=18){
    info.innerHTML="can get a driver's license ";
}else if(!user){
    info.innerHTML="don't have username"
}else if(!(age<18)){
    info.innerHTML="don't have age or don't be 18 years old"
}

//switch case 

let weahter="sunny";
switch(weahter){
    case"rainy":
    console.log("take umbrella");
    break;
    case "sunny":
    console.log("apply sunscreen");
    break;
    case "snowy":
    console.log("dress warmly ");
    break;
    case "stormy":
    console.log("don't go outside");
    break;
    default:
        console.log("unknown weather", weahter);       
}
