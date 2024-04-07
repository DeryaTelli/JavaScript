
//eger komplex yapilari localstorageye ekliyorsa bunu stringe cevirip o sekilde 
//eklemeliyiz cagirirken ise eski haline parse ile donusturup cagirmaliyiz

let user={userName:"deryatelli", isActive:true}
console.log(user);
//localStorage.setItem('userInfo',user); // veri ekledim 
//object olarak gozukecektir icerik hakkinda bilgi vermeyecektir storagede o yuzden json kullandik
localStorage.setItem('userInfo',JSON.stringify(user))


let userInfo=localStorage.getItem('userInfo'); //veriyi alma 
userInfo=JSON.parse(userInfo); //bu sekilde yapma sebebimiz icerisindeki bilgiye ulasmak istememiz
console.log(userInfo);

//bunu cagirip eklerken json kullanmamiza gerek kalmadi karmasik degil cunku 
localStorage.setItem('number',11);
localStorage.getItem('number')

//dizi ekleme 
let items=[1,2,3,user]
//localStorage.setItem('newItem',items) //bu sekilde yaptigimiz zaman komplex yapiyi iceriklerini gostermeyecektir o yuzden json kullanmaliyiz 
localStorage.setItem('newItem',JSON.stringify(items));

JSON.parse(localStorage.getItem('newItem'));