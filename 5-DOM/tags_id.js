
let h2=document.getElementsByTagName('h2');
console.log(h2.title.innerHTML); // h2.idismi.innerHTML dersem icindeki bilgiye ulasabilirm 
//icindeki text ulasmak kolay olmayacak 

let title=document.getElementById('title');
console.log(title.innerHTML);
title.innerHTML ="Degisen bilgi"; //icerisindeki bilgiyi boyle degistirebiliyoruz 
console.log(title.innerHTML);
//icindeki veriye id yoluya ulasabilirim burda 

let link = document.querySelector("ul#list>li>a") //birden fazla eleman olsada bir tane secim yapar
console.log(link.innerHTML); 
link.innerHTML +="degisti";
link.style.color="red";
link.classList.add('btn');
console.log(link.innerHTML);

