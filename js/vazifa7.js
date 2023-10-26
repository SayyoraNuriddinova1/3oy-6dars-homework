// sayohat
let howMuch = prompt ("Sayohat qilishga qancha mablag'ingiz bor (so'mda yozing)?")
let dollar = prompt ("Dollar kursini kiriting");
let yevro = prompt ("Yevro kursini kiriting");
let rasxod = (850 * dollar) + (300 * yevro);
if (howMuch>rasxod) {
    alert("Siz bemalol Yevropaga sayohat qilishingiz mumkin, mablag'ingiz yetarli!")
} else {
    alert ("Afsuski, mablag'ingiz yetarli emas ekan");
}