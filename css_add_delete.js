// css class eklemek veya cikarmak 

let css=document.querySelector("#css");
console.log(css.classList);

//sinif ekleme 
css.classList.add("color");
console.log(css.classList);
css.classList.add("one-class", "second-class","third-class");
//seklinde birden fazla class olusturabiliriz 

//classlari silme 
css.classList.remove("one-class");

//toggle hem add hemde remove islemi gerceklestirir 
css.classList.toggle("new-class"); // new-class olmadigi icin listede ekleme yapacaktir 
css.classList.toggle("second-class"); // second class listede oldugu icin silme islemi yapacaktir 
console.log(css.classList);

//classlari indexlerine gore cagirma 
let firstClass=css.classList.item(1); //birnci classi getirecetir 
console.log(firstClass);
