
//normal function 
function hello(firstName){
    console.log(`hello ${firstName}`);
}
hello("javascript");


//arrow function 
const helloArrowFunction= (firstName)=>{console.log(`hello ${firstName}`)}
helloArrowFunction("javascript")
//arrow function iceriginde bir tane islem veya parametre  varsa suslu parantez  ve normal kullanmaya gerek yok 

// arrow function deger donduren 
const helloArrowFunction2= (firstName, lastName)=>{
    let info=`Hello ${firstName} ${lastName}`
    return info ;
}
let returnArrowFunction=helloArrowFunction2("defne","telli");
console.log(returnArrowFunction);

// example farkli fonsiyon yazma turleri 

//iki sayiy toplama 
const toplam = function (number1, number2){
    return number1 + number2;
};
let toplams=toplam(2,3);
console.log(toplams);


const toplamArrow=(number1, number2)=>number1+number2;
let arrowToplam=toplamArrow(2,10);
console.log(arrowToplam);

//ayni sayiyi carpma 
const multi=function(number1){
    return number1*number1;
}
let multiF=multi(2);
console.log(multiF);

const multiArrow=number1=>number1*number1;
let multiA=multiArrow(3);
console.log(multiA);

//example liste 
//".concat()" dizileri birlestirmek icin kullanilir 
const myList=function(money1, money2){
    return money1.concat(money2);
}
let myMoneyList=myList([1,2],[3,4,5]);
console.log(myMoneyList);

const myListArrow=(money1,money2)=>money1.concat(money2);
let myMoneyA=myListArrow([1,2],[3,4,5]);
console.log(myMoneyA);


//if statement kullanilan arrow function 
const feedTheCat=(cat)=>{
    if(cat=='hungry'){
        return 'Feed the cat';
    }else{
        return 'Do not feed the cat'
    }
}
let feed=feedTheCat('huny');
console.log(feed);

//-------------------------------------------------------------------------

//example 
//seriess list 
//Bir dizi veya film listesi parametre alan bir arrow fonksiyonumuz olsun, bunların hervbirini 1'den başlayarak alt alta yazalım.

const seriesList=list=>{
    list.forEach((series,index)=>{console.log(`${index+1}. ${series}`)});
}
seriesList(["Friends", "Black Mirror", "Shadow Hunter"]);

//-------------------------------------------------------------------------

//example 
//[1,2,3,4,5] array'ini parametre alan bir arrow fonksiyonumuz olsun. Bu array'in sonucu bize yeni bir array döndürsün. Oluşan yeni array'deki çift sayılar 2, tek sayılar ise 3 ile çarpılmış olsun. [1,2,3,4,5] => [1x3, 2x2, 3x3, 4x2, 5x3] =>Sonuç çıktımız **[3,4,9,8,15]** olacak.


const newArray=(num)=>{
    const newNum=num.map((num)=>{
        if(num%2==0){
            return num*2;
        }else if (num%2==1){
            return num*3;
        }
    });
    return newNum;
}
let array=newArray([1,2,3,4,5,6]);
console.log(array);