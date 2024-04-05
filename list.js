// liste icerisine oge ekleme silme 

let lastChild= document.querySelector("ul#list>li:last-child");
console.log(lastChild.innerHTML);
lastChild.innerHTML="son eleman degisti";
console.log(lastChild.innerHTML);


let firstChild= document.querySelector("ul#list>li:first-child");
console.log(firstChild.innerHTML);
firstChild.innerHTML="ilk eleman degisti";
console.log(firstChild.innerHTML);

//oge ekleme 
//ilk olarak listemizin documanina ulasiyouz 

let ulDOM = document.querySelector("ul#list");
let liDOM=document.createElement("li");
liDOM.innerHTML="yeni eklenecek element";
ulDOM.append(liDOM); // sona ekleme yapacaktir 
ulDOM.prepend(liDOM); // ilk liste elamani olarak ekleyecektir



//example 
let urun = document.getElementById("data");
let add=document.querySelector("button#add")

add.addEventListener("click",function(){
    //createElement ile yeni bir listItem (li) olusturuyoruz 
    var li2=document.createElement("li");

    //input ile gelen veriyi li icerisinde metin olarak giriyoruz 
    li2.textContent=data.value;

    //appendChild ile olusturdugmuz elementi "list" isimli degiskenimizin icerisine ekliyoruz 
    //list yani yukarida olustrudgumuz ulDOM listesi icine atiyoruz 
    ulDOM.appendChild(li2);

    //data intputu icersindeki metni siliyoruz 
    data.value="";
})
