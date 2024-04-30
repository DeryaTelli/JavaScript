//form submit 
//form icinde bulundurdugu form elementlerinin nameleri sayesinde degerlerini alip bu degerlerle islem yapmaniza olanak saglayan yapidadir
//<form action="siteadi" method="get|post">*form elementleri*</form>
//get methodu  name kullanarak url uzerinden paremetre olarak veri gonderiyor 
//post methodu ise paremetre olarak gondermiyor tum islemi arkadan gerceklestiriyor ama get methoduna gore daha yavas calisiyor 


let formDom = document.querySelector("#userForm")
formDom.addEventListener('submit',formSubmit)

function formSubmit(event){
    event.preventDefault() //defaul islemi engelledik he send butonuna tiklandigimda sayfa yenilenmiyecektir artik 
    console.log("transaction completed")
    let newScore = document.querySelector('#score')
    console.log(newScore.value); 
    localStorage.setItem('score', newScore.value);
}

// username ve point information part 
let userFormDOM=document.querySelector("#userForm2");
userFormDOM.addEventListener('submit',formHandler);
function formHandler(event){
    event.preventDefault();
    const USER_NAME=document.querySelector('#username');
    const SCORE=document.querySelector('#score');
}

/*  <li class="list-group-item d-flex justify-content-between align-items-center">
Cras jutso odio
<span class="badge bg-primary rounded-pill">14</span>
</li> */

let liDom=document.querySelector('#userList');
function addItem(userName, score){
    let li=document.createElement('li');
    liDom.innerHTML='${userName}'
}