


let counter= localStorage.getItem('counter') ? Number(localStorage.getItem('counter')):0 ;
let counterDOM=document.querySelector('#counter');
counterDOM.innerHTML=counter;
let increaseDOM=document.querySelector('#increase');
increaseDOM.addEventListener('click', clickEvent);
let decreaseDOM=document.querySelector('#decrease');
decreaseDOM.addEventListener('click',clickEvent);

//function increase (){
//   console.log(this.id);
//    let newValue=counter++;
//    counterDOM.innerHTML=newValue;
//}

//function decrease(){
//    console.log(this.id);
//    let newValue= counter--;
//    counterDOM.innerHTML=newValue;
//}

function clickEvent(){
    console.log(this.id);
    this.id=="increase" ? counter++ : counter--
    localStorage.setItem('counter',counter)
    counterDOM.innerHTML=counter;
}