//ust alma 
console.log(2**4);//2 uzeri 4 demek yani 16 
// asagi,yukari ve yakina  yuvarlama 
console.log(Math.floor(4.9));//4 asagi yuvarlama 
console.log(Math.ceil(4.1));//5 yukari yuvarlama 
console.log(Math.round(4.5));//5 yakina yuvarlama
console.log(Math.round(4.2))//4 yakina yuvarlama 


//type of ile veri turlerine bakabiliriz
let price= 111;
let stringPrice="111";
let hasPassword=true;

console.log("price: ",typeof(price));
console.log("stringPrice: ",typeof(stringPrice));
console.log("hasPasswrd: ",typeof(hasPassword));

//string ifadeyi int ve float donusturme 

let number1="11"
number1=parseInt(number1);
console.log("string1: ", number1, typeof(number1));


let number2="11px"
number2=parseInt(number2);
console.log("string2: ", number2, typeof(number2));


let number3="11.3"
number3=Number(number3);
console.log("string3: ", number3, typeof(number3));


let number4="11.1"
number4=parseFloat(number4);
console.log("string4: ", number4, typeof(number4));

//number ifadeyi string veri tipine cevirme 
let number5= 55;
number5=number5.toString();
console.log("number: ",number5, typeof(number5));

console.log(12 / "6") //6 degerini verecektir

//1
console.log("foo" + +"bar")
//2
console.log('true' == true)
//3
console.log(null=="")
//4
console.log(0 || " 0" && {})
//5
console.log(["a"] > null)

