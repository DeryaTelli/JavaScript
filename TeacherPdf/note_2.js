
console.log("this a script entry point");

document.body.onclick=()=>{
    console.log("onclick");
}

//arrow function kulandik
setTimeout(()=>{
    console.log("setTimeout callback log 1");
    console.log("setTimeout callback log 2");

},100);
//100 milisaniyede bir calisacaktir 

//example1: collection calculate
let number1=prompt("Enter number1:");
let number2=prompt("Enter number2:");
let colection=document.querySelector('#collect');
colection.innerHTML=parseInt(number1)+parseInt(number2);

//example2: browser event 
//arrow function kullanildi 
const click=document.querySelector('#click');
click.addEventListener('click', whichButton);

function whichButton(events) {
    if(events.button==1){
        alert("You clicked the left mouse button!")
    }else{
        alert("You clicked the right mouse button!")
    }
}

//example3: element yarat ve listeye ekle 
const add=document.querySelector('#add');
add.addEventListener('click',addItem);

function addItem(){
    let list = document.getElementById('t1');
    let newItem=document.createElement('li');
    let text="Ayva";
    let newText=document.createTextNode(text);
    list.appendChild(newItem);
    newItem.appendChild(newText);
    console.log('item was added');
}

//JavaScript Properties 
document.getElementsById('list').nodeName 
// bu idye sahip html tagini soyleyecektir
document.getElementById('list').nodeValue 
// bu idye sahip html tagini icerigini soyleyecektir 
document.getElementById('list').firstChild.nodeName 
//bu idye sahip html taginin ilk cocugunun tagini soyleyecektir 
document.getElementById('list').firstChild.firstChild.nodeName 
//bu idye sahip html taginin cocugunun cocugu'nun html tagini soyleyecektir 
document.getElementById('list').firstChild.firstChild.nodeValue
//bu idye sahip html taginin cocugunun cocugu'nun html taginin icindeki degeri soyleyecektir 


