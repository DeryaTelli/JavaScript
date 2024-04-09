

//ONLOAD EXAMPLE 
//sayfanin yuklenme durumunu soyler 
window.onload=()=>{
    alert('the page is fully loaded');
}

//ONMOUSEMOVE EXAMPLE 
//mouseun hareket kordinatlarini verir
function showCoords(event){
    var x=event.clientX;
    var y=event.clientY;
    console.log('Mouse Coordinates:',x,y);
}

//ONKEYPRESS EXAMPLE 
//kullanici tusa bastigi zaman tetiklenir
function logKeyPress(event){
    console.log('Pressed key:',event.key);
}

