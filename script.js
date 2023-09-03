function guncelleSaat() {
    const saatDiv = document.getElementById("saat");
    const tarih = new Date();
    const saat = tarih.getHours();
    const dakika = tarih.getMinutes();
    const saniye = tarih.getSeconds();

    const saatMetni = `${saat.toString().padStart(2, "0")}:${dakika.toString().padStart(2, "0")}:${saniye.toString().padStart(2, "0")}`;
    saatDiv.textContent = `Türkiye Saati: ${saatMetni}`;
}

setInterval(guncelleSaat, 1000); // Saati her saniye güncelle
guncelleSaat(); // Sayfa yüklendiğinde saat bilgisini hemen güncelle
