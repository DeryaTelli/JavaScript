//HTML DOM EVENT OBJECT web sitesinde eventlere ulasabilirsin 


let greeting = document.querySelector("#greet");
greeting.addEventListener("click", clickEvent );
// mouseover yazabiilirsin click yerine 

function clickEvent(){
    console.log("clicked");
    this.style.color=="red" ? this.style.color="black" : this.style.color="red";
    console.log(this);
    console.log(this.innerHTML);//innerHTML ile icerisindeki yaziya erisiyoruz
    console.log(this.innerHTML="change text");
    
}

//event lissener ornekleri 

//butona tiklandiginda alert ile ekrana uyari verme 

const buttons=document.querySelector("#button");
buttons.addEventListener("click", warning);

function warning(){
    alert("Click the Button");
}

//mousue ile tiklanmasi ile gerceklesen olay 
//dblclick cift tiklama etkinligidir 
const  mouseE=document.querySelector("#mouse");
mouseE.addEventListener("dblclick",clickFunction);

function clickFunction(){
    document.getElementById("mouse").innerHTML="New Form";
}

//klavyeden hernagi bir tusa basilinca gerceklesen etkinlik 
// copy klavyedeki ctrl+c ile calisir 
const keyboard=document.querySelector("#key");
keyboard.addEventListener("copy", cuttingFunction)
function cuttingFunction(events){
    console.log("etkinlik tipi:", events.type)
}

//form etkinlikleri 
// ornek bir selectbox
const color = document.querySelector("#select")
color.addEventListener("change",selectBox);

function selectBox(events){
    console.log("Etkinlik tipi: ",events.type);
    console.log("deger: ",events.target.value);
    //event.target olayin tetiklendigi html ogesini temsil eden bir referanstir 
    //event.target.value olayin tetiklendigi html ogesinin degerini verir 
}


// event bubbling and event capturing 
//1-Event Bubbling = icten disariya dogru ilerler 
const selectBox1=document.querySelector("#selectC");
const button= document.querySelector('#button');
const form = document.querySelector(".inputText");//class isimleri oldugu icin . koyuldu 
const cerceve=document.querySelector(".container");
selectBox1.addEventListener('click',function(){
    console.log("selectBox");
});
form.addEventListener('click',function(){
    console.log("form");
});
cerceve.addEventListener('click',function(){
    console.log("cerceve");
});

//Event Capturing = hedef distan ice dogru ilerler 
//event.stopPropagation() 
//olayin olay olma surecini durdurur 
//Bir iç içe geçmiş düğme seti varsa ve en içteki düğmeye tıkladığınızda, bu tıklama olayı en içteki düğmeyle başlar ve en dıştaki düğmeye kadar yükselir. event.stopPropagation() bu yayılma sürecini durdurarak, daha dıştaki düğmelere tıklama olayının ulaşmasını engeller.
document.getElementById("innerButton").addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("Inner button clicked.");
});



//event.preventDefault()
//Bu metod, bir olayın varsayılan davranışını durdurur. Örneğin, bir bağlantıya tıklandığında sayfanın başka bir URL'ye yönlendirilmesini engellemek veya bir formun gönderilmesini engellemek için kullanılabilir.
document.getElementById("link").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Link clicked, but default action prevented.");
});

//input addEventlistenerdeki olay 
//olayı, <input> veya <textarea> gibi metin giriş alanlarında herhangi bir metin değişikliği yapıldığında tetiklenir. 
const inputElement = document.getElementById("myInput");

inputElement.addEventListener("input", function(event) {
    console.log("Metin kutusuna bir metin girildi: ", event.target.value);
    // Burada metin kutusuna girilen değeri alıp başka işlemler yapabilirsiniz.
});


//select addEvenetListener olayi 
//Bu olay, bir metin kutusunda veya bir metin alanında metnin seçildiğinde tetiklenir.
const item = document.getElementById("input");

item.addEventListener("select", function(event) {
    console.log("Seçilen metin: ", event.target.value.substring(event.target.selectionStart, event.target.selectionEnd));
});
//substring
//substring(event.target.selectionStart, event.target.selectionEnd): Bu ifade, bir metin kutusunda veya metin alanında kullanıcının seçtiği metni almak için kullanılır. 

//keypress 
//keypress: Bu olay, bir tuşa basıldığında tetiklenir. Ancak, modern tarayıcılarda keypress yerine keydown veya keyup olayları daha yaygın olarak kullanılır, çünkü keypress bazı tarayıcılarda ve bazı özel tuş kombinasyonlarında çalışmayabilir.
const keypress = document.getElementById("tus");

keypress.addEventListener("keypress", function(event) {
    console.log("Basılan tuşun kodu: ", event.key);
    console.log("Basılan tuşun karakteri: ", String.fromCharCode(event.key));
});
//event.key: Bu, bir olay nesnesinin özelliğidir ve olayın tetiklendiği sırada basılan tuşun karakterini içerir. Örneğin, eğer kullanıcı "A" tuşuna bastıysa, event.key "A" olacaktır.
//String.fromCharCode(event.key): Bu ifade, verilen Unicode karakter kodunu içeren bir dize döndürür. event.key özelliği genellikle bir karakterin Unicode karakter kodunu içerir. Bu nedenle, String.fromCharCode() metodu bu Unicode karakter kodunu alır ve karşılık gelen karakteri döndürür. Örneğin, eğer event.key 65 ise, bu ifade "A" döndürecektir, çünkü 65 Unicode'da "A" karakterinin kodudur.

//currentTarget olayin dinleyicisi hangi ogeye bagli oldugunu berlitir 
//open javascripteki url ve dosyalari acmak icin kullanilir 
//play ses ve video dosyalarini oynatmak icin kullanilir 
