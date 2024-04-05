

let userName="Derya";
const DOMAIN="example.com";
let email=userName+"@"+DOMAIN;
console.log("Merhaba",userName, "sitemize hosgeldin", "mail adresin:",email);

//template literals `` kullaniliyor tek tirnak degil icinde   ${} kullanarak degiskenleri yazdirma islemi yapiliyor
//satir atlayarak islem yapmamiza imkan sagliyor 
let info=`merhaba ${userName} sitemize hosgeldin
mail adresin: ${email} 
mail adresinin uzunlugu: ${email.length}
borcunuz: ${(2+3)*10}TL
gunun saat bilgisi: ${new Date().getHours()}
kisa isminiz: ${userName[0]}`;
console.log(info);

//alistirma

const kitap={
    ad: "Firtina",
    yazar: "Shakespeare",
    tarih: "1610"
}

const bookTable=`
        <table border> 
            <tbody> 
                <tr> 
                    <td> Kitap </td> 
                    <td>${kitap.ad}</td> 
                </tr> 
                <tr> 
                    <td> Yazar </td> 
                    <td>${kitap.yazar}</td> 
                </tr> 
                <tr> 
                <td> Tarih </td> 
                <td>${kitap.tarih}</td>
                </tr>
            </tbody>
        </table>
`
document.body.innerHTML=bookTable;

