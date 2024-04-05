
//kullanicidan bilgi almak icin kullaniyoruz 

let fullName = prompt("Enter your name:");

let greeting =document.querySelector("#greeting");
greeting.innerHTML=`${greeting.innerHTML} <small style="color:red"> ${fullName}</small>`;
console.log(greeting.innerHTML+fullName);