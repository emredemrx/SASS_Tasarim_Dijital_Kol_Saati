function verSaat()
{
    var tarih=new Date();
    return tarih;
}
function saatGoster() {
    const saatP = document.getElementById("saat");
    const dakikaP = document.getElementById("dakika");
    saatP.innerHTML= verSaat().getHours();
    dakikaP.innerHTML= verSaat().getMinutes();
}
saatGoster();
setInterval("saatGoster()", 1000); //işlemi belirli aralıklar ile gerçekleştir 1sn