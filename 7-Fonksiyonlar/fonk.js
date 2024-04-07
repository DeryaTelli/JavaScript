const greets=function(who){
    return `Hello , ${who} !`;
}
greets("John");
//fonksiyon yazma cesitleri 

function helloWorld(){
    console.log("Hello World");

}

function hello(){
    console.log("Hello");
    helloWorld();
}

hello();

//*************************************************

function greet(firstname){//default parametre aliyor
    console.log(`Merhaba ${firstname}`)
} 

greet("Apple");

//*************************************************

function newFunction(firstname, lastname){
    console.log(`hello ${firstname}`)
    console.log(`hello ${firstname} ${lastname}`)
}

newFunction("Derya", "Telli");

//*************************************************

function greet2(firstname , lastname){
    let info=`hello ${firstname} ${lastname}`;
    return info;
}

let info= document.querySelector("#greet");
info.innerHTML=greet2("Defne","Telli");

//*************************************************

function idInfo(id, info){
    let domId=document.querySelector(`#${id}`);
    domId.innerHTML=info;
}

idInfo("example",info.innerHTML);

let htmlInfo=`<span style="color:red">Color REDDDD</span>`
idInfo("color",htmlInfo);

// example 
//Herhangi iki sayıyı toplayıp, bir değişkene atayan fonksiyon ifadesini yazalım.
function collection(number1 , number2){
    let collect = number1+number2;
    return collect
}

let collect=collection(10 , 20);
console.log(collect);

//example 
//Herhangi bir yarıçapa sahip bir dairenin alanını hesaplayan fonksiyonu yazınız.

function circileArea(reduce){
    const pi = 3.14;
    let area= pi*Math.pow(reduce,2);
    return area;
}
let circile = circileArea(2);
console.log(circile);

//example 
// Farklı yarıçaplardaki iki farklı dairenin, alanları çarpımını veren bir fonksiyon yazınız

function multiCirclesArea(circle1 , circle2){
    let multi=circle1*circle2;
    return multi;
}

let multi = multiCirclesArea(circileArea(2),circileArea(3));
console.log(multi);

//example 
function Question(hobby) {
    switch (hobby) {
    case "car":
        return function (name) {
        console.log(name + " do you have a car ?");
        };
        break;
    case "book":
        return function (name) {
        console.log(name + " what is your favorite author?");
        };
        break;
    case "software":
        return function (name, type) {
        console.log(name + " are you interested in " + type + "?");
        };
        break;
    default:
        return function (name) {
        console.log(name + "  how are you ?");
        };
        break;
    }
}

var softwareQuestion = Question("software");
softwareQuestion("Cemre","nodejs");
