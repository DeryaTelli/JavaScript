
let email="deryatelli@gmail.com";
let firstName="Derya";
let lastName="TELLI";


//string karakter sayisi "length"
console.log(email.length);

//ilk karakter bulmak 
console.log(firstName[0]); // verilen idexe gore o harfi getirecektir degiskende 
console.log(firstName.charAt(0)); // yukaridaki kod gibi calisma mantigi 

//buyuk harf kucuk harf 

firstName =firstName.toUpperCase();
console.log(firstName); // buyuk harf yapacaktir tum kelimleri 

firstName=firstName.toLowerCase();
console.log(firstName); // kucuk harf yapacaktir tum kelimleri

// string icinde istedigimiz bilgiyi arayabilir ve yerini bulabiliriz "search , indexOf , lastIndexOf (birden fazla geciyor ise kelime son gectigi indexi alir )"

console.log(email.search("@")); // hangi indexte oldugunu yazdiracaktir 
console.log(email.search("olmayan deger "));// olmayan bir deger icin -1 dondurur 
console.log(email.indexOf("@")); // de ayni islemi yapiyor yukaridaki kodlarla 


//belli bir yere kadar al "slice "
//verilen deger ve sonrasini alacaktir bu islem 
let DOMAIN= email.slice(email.search("@")+1); // @ isaretinden sonrasini alacaktir +1 ekledigim icin eger eklemeseydim @dan itibaren sonrayi verecekti 
console.log(DOMAIN);
console.log(DOMAIN.slice(0,DOMAIN.indexOf("."))); // 0 ci indexten . iceren indexe kadar olan kelimeleri yaz demek 


//bilgiyi degistir "replace "
email = email.replace('gmail.com ', 'hotmail.com');
console.log(email); //gmail.com kismi hotmail olarak degisti 


//istedigim bilgiyi iceriyor mu "includes"
console.log(email.includes("@")); //verdigim deger var mi yok mu diye degisken icinde onu kontrol edip true false donduruyor 

//istedigim bilgi ile basladi mi bitti mi "startsWidth , endWidth"
console.log(email.startsWith("derya"));
console.log(email.endsWith(".com"));

//ilk harfleri buyuk yapmak 
firstName="FIRST"
lastName="last"
let fullName=`
${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}
`
console.log(fullName);

//verilen iki metni birlestirmeye yarar "concat"
let Name="derya";
let last="telli";
console.log(Name.concat(' ',last));

//metni diziye cevirme "split "
let array= email.split("@"); //verilen degerden itibaren iyiye ayirir 
console.log(array);


//example 
let url = "www.kodluyoruz.org";
let language = "Java";

console.log(language.replace('Java','JavaScript'));
let domain=url.slice(url.lastIndexOf("w")+2);
console.log(domain);
