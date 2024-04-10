//Objects konusu 
//javascripte nesneler suslu parantez arasinda tanimlanir 
//ve anahtarlarla iliskilendirilmis degerler icerirler 

//bu sekilde tanimlanir 
/*
let object={
    key:value1,
    key:value2,
};
*/

let user={
    name:"derya",
    surname:"telli",
    age:20,
    adres:{
        street:"Ciftciler Street",
        city:"Mersin",
    }
}
//burada user adinda bir nesne tanimladik ve iinde 4 ozellik ekledik
//adress ozelligide bir alt nesne olusturdu kendi icinde 
//java diline benziyor 

console.log(user.name);
console.log(user["age"]);
console.log(user.adres.city);
//nesne icindeki ozelliklere erisme yollaridir 

user.age=22;
user.email="2002derya2002@gmail.com"
delete user.surname;
//nesne ozelliklerini degistirebilir ekleyip silebirilirz 
console.log(user.age);
console.log(user.email);
console.log(user.surname);

//Function ---------------------------

//example 
function curriedAdd(x){
    return function(y){
        return x+y;
    }
}

let result= curriedAdd(3);
console.log(result(4));


//example 
function sumAll(){
    let total=0;
    for(let i=0; i<sumAll.arguments.length; i++){
        total+=sumAll.arguments[i];
    }
    return total;
}

let result2=sumAll(5,5,5,5);
console.log(result2);

//Anonymous Function 
//geri cagirmalar icin cok kullanislidir 
setTimeout(function(){
    console.log("anonymous function");
},1000);


//example anlasilmayan ornek 
let u={a: 1, b: 2};
let v={a: 3, b: 4};
(function(x,y){
    let tempA=x.a;
    let tempB=x.b;
    x.a=y.a;
    x.b=y.b;
    y.a=tempA;
    y.b=tempB;
})(u,v);

//construct an object 
function car(make , model , year){
    this.make=make;
    this.model=model;
    this.year=year;
    //to string kullanarak yazidirma yontemi 
    this.toString=function(){
        return` Marks: ${this.make} Model:${this.model} Year:${this.year}`;
    };
}

const  myCar=new car("BMW","J500",1990);
let print=myCar.toString();
console.log(print);
//! farkli yazdirma yontemi 
//car.prototype.print=function(){
    //return this.year+" "+this.make+" "+this.model;}
//console.log(myCar.print());


//Garbage Collection 
//Exception 





