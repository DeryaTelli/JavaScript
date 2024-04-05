// var ile degisken tanimlamak 
var serverName="api.kodlama"; 
console.log(serverName);

//let ile degiskeni bos tanimlamak 
let name;
console.log(name); // undefined

//birlestirme yapma
//Aynı isimle tekrardan aynı blokta tanımlanamaz. Farklı block'larda aynı isimle tanımlanabilir.
let fullName="derya"
console.log(fullName+" telli");
fullName+=" telli";
console.log(fullName);  

//const ile degiskeni bos tanimlanamaz 
//degismeyen degiskenler icin kullanilir 
//const kullanildigini anlamak icin tum degisken ismi buyuk harf ile yazilir 
const PASSWORD="df;lgk;ldfgk;ldf";
const SERVER_PASSWORD="12345"; 
console.log(PASSWORD);
