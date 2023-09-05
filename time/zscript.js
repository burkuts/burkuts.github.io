let intervalId;
let isRunning = false;
let remainingHours = 0;
let remainingMinutes = 0;
let remainingSeconds = 0;

const zamanEkrani = document.getElementById("zaman");
const saatInput = document.getElementById("saatInput");
const dakikaInput = document.getElementById("dakikaInput");
const saniyeInput = document.getElementById("saniyeInput");
const baslatDurdurButonu = document.getElementById("baslatDurdur");
const sifirlaButonu = document.getElementById("sifirla");

function baslatDurdurZamanlayici() {
    if (isRunning) {
        clearInterval(intervalId);
        baslatDurdurButonu.textContent = "Başlat";
    } else {
        remainingHours = parseInt(saatInput.value) || 0;
        remainingMinutes = parseInt(dakikaInput.value) || 0;
        remainingSeconds = parseInt(saniyeInput.value) || 0;
        
        if (remainingHours > 0 || remainingMinutes > 0 || remainingSeconds > 0) {
            intervalId = setInterval(degerleriGuncelle, 1000);
            baslatDurdurButonu.textContent = "Durdur";
        }
    }
    isRunning = !isRunning;
    saatInput.disabled = isRunning;
    dakikaInput.disabled = isRunning;
    saniyeInput.disabled = isRunning;
}

function sifirlaZamanlayici() {
    clearInterval(intervalId);
    isRunning = false;
    saatInput.value = "";
    dakikaInput.value = "";
    saniyeInput.value = "";
    zamanEkrani.textContent = "00:00:00";
    baslatDurdurButonu.textContent = "Başlat";
    saatInput.disabled = false;
    dakikaInput.disabled = false;
    saniyeInput.disabled = false;
}

function degerleriGuncelle() {
    if (remainingSeconds > 0 || remainingMinutes > 0 || remainingHours > 0) {
        remainingSeconds--;
        if (remainingSeconds < 0) {
            if (remainingMinutes > 0) {
                remainingSeconds = 59;
                remainingMinutes--;
            } else if (remainingHours > 0) {
                remainingSeconds = 59;
                remainingMinutes = 59;
                remainingHours--;
            }
        }
        zamanEkrani.textContent = formatZaman(remainingHours, remainingMinutes, remainingSeconds);
    } else {
        clearInterval(intervalId);
        isRunning = false;
        baslatDurdurButonu.textContent = "Başlat";
        saatInput.value = "";
        dakikaInput.value = "";
        saniyeInput.value = "";
    }
}

function formatZaman(hours, minutes, seconds) {
    return `${Math.max(hours, 0).toString().padStart(2, '0')}:${Math.max(minutes, 0).toString().padStart(2, '0')}:${Math.max(seconds, 0).toString().padStart(2, '0')}`;
}

baslatDurdurButonu.addEventListener("click", baslatDurdurZamanlayici);
sifirlaButonu.addEventListener("click", sifirlaZamanlayici);