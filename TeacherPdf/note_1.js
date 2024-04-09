//NaN = Not a number kisaltmasidir 
// bir hesaplama sonucu sayisal bir deger elde edilemediginde veya sayisal olmayan bir ifadeyle iselme yapmaya calisilinca verir 
let result = "hello"/2;
console.log(result)


let name1 = document.getElementById("paragraf").textContent;
// verilen idyi iceren tag elemaninin icerigine ulasiyor 
console.log(name1);

let element = document.createElement('p');
// bu kod html tag olusturur 
element.textContent="Hello World";
// olusturulan ogenin icerigini verir 
document.body.appendChild(element);
//appendChild methodu belirtilen ogenin alt ogesi olarak ekler degiskeni 


//example 
let h1=document.createElement('h1');
h1.textContent="How are you?";
document.body.appendChild(h1);
//h1 etiketi olusturulup icerik atandi ve html icine eklendi 


//prompt kullanicidan bilgi isterken kullaniliyor
let age= prompt("How old are you?");
console.log(age);


//confirm pop up gibi uyari msj cikartiyor 
if(confirm("Are you sure you want to delete this?")){
    deleteItem();
}
function deleteItem(){
    console.log("Item was deleted");
}

//canvas yaratma 
let canvas= document.createElement('canvas');
canvas.width=500;
canvas.height=250;
let ctx=canvas.getContext('2d');
//2 boyutlu olarak cizdigini gosterir 
ctx.font='30px Cursive';
ctx.fillText("Hello World!",50,50);
//fillText methodu metni belirtilen konumda cizer 
//verilen texti belirtilen kordinatlarda cizer 
document.body.appendChild(canvas);


//img dosyasi yaratma 
let img=new Image();
img.src='https://i.ytimg.com//vi/zecueq-mo4M/maxresdefault.jpg';
document.body.appendChild(img);


//javascript nesnesi olusturma
let myList={
    firtName:"derya",
    lastName:undefined,
    fullName:"defne"
};

console.log(myList.firtName + myList.fullName);

// onemli
// == deger olarak esit olup olmadiklarina bakar 
// === hem deger olarak hemde tip olarak esit olmasi gerekir dogru olmasi icin
//!! typeof null 'object'

isNaN("Hello");   // true, "Hello" bir sayıya dönüştürülemez
isNaN("123");     // false, "123" bir sayıdır
isNaN("123abc");  // true, "123abc" bir sayıya dönüştürülemez
isNaN(123);       // false, 123 bir sayıdır
isNaN(0/0);       // true

//Number sabiti sayisal degerleri temsil etmek icin kullanilan bir beri turudur 

//Infinity sonsuz sayilari ifade etmek icin 
let positiveInfinity=Number.POSITIVE_INFINITY;
let negativeInfinity=Number.NEGATIVE_INFINITY;
console.log("+ infinity: ",positiveInfinity);
console.log("- infinity: ",negativeInfinity);

let notANumber=Number.NaN;
console.log("NaN: ",notANumber);

let maxValue=Number.MAX_VALUE;
let maxSafeInteger=Number.MAX_SAFE_INTEGER;
console.log("Max Value: ",maxValue);
console.log("Max Safe Integer: ",maxSafeInteger);

let minValue=Number.MIN_VALUE;
let minSafeInteger=Number.MIN_SAFE_INTEGER;
console.log("Min Value: ",minValue);
console.log("Min Safe Integer: ",minSafeInteger);

let epsilon=Number.EPSILON;
console.log("Epsilon: ",epsilon);

//Math methodlari 
/*
Math.abs(x): Bir sayının mutlak değerini döndürür.
Math.ceil(x): Bir ondalık sayıyı yukarı yuvarlar ve en yakın büyük tam sayıyı döndürür.
Math.floor(x): Bir ondalık sayıyı aşağı yuvarlar ve en yakın küçük tam sayıyı döndürür.
Math.round(x): Bir ondalık sayıyı en yakın tam sayıya yuvarlar.
Math.max(x, y, ...): Verilen sayılar arasındaki en büyük sayıyı döndürür.
Math.min(x, y, ...): Verilen sayılar arasındaki en küçük sayıyı döndürür.
Math.pow(x, y): Bir sayının belirtilen üs kuvvetini döndürür.
Math.sqrt(x): Bir sayının karekökünü döndürür.
Math.random(): 0 (dahil) ile 1 (hariç) arasında rastgele bir ondalık sayı döndürür.
Math.sin(x), Math.cos(x), Math.tan(x): Verilen açının sinüs, kosinüs ve tanjant değerlerini 
 */



