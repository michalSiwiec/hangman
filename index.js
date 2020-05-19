/*eslint-env browser*/
/*jslint devel: true */
/* eslint-disable no-console */
/* eslint-env es6 */
/* eslint-disable no-console */
/* exported myFunction */


const litery = ["a", "ą", "b", "c", "ć", "d", "e", "ę", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ń", "o", "p", "q", "r", "s", "t", "u", "w", "y", "z", "ź", "ż"],
    div_haslo = document.querySelector('#p_Haslo'),
    div_Litera = document.querySelectorAll('.p_litera'),
    wisielec_png = document.querySelector('#obrazek'),
    pula_Hasel = [{
            kategoria: "sport",
            podpowiedz: "Babduś Habduś najpiękniejszy pies w całej wsi, no może za wyjątkiem Wojtusia",
            haslo: "lekkoatletyka"
        },

        {
            kategoria: "muzyka",
            podpowiedz: "Babduś Habduś najpiękniejszy pies w całej wsi, no może za wyjątkiem Wojtusia",
            haslo: "The Beatles"
        },

        {
            kategoria: "kino",
            podpowiedz: "Babduś Habduś najpiękniejszy pies w całej wsi, no może za wyjątkiem Wojtusia",
            haslo: "Pulp Fiction"
        },

        {
            kategoria: "Budownictwo",
            podpowiedz: "Babduś Habduś najpiękniejszy pies w całej wsi, no może za wyjątkiem Wojtusia",
            haslo: "Dachowka"
        },

        {
            kategoria: "Przysłowia Polskie",
            podpowiedz: "Babduś Habduś najpiękniejszy pies w całej wsi, no może za wyjątkiem Wojtusia",
            haslo: "Fortuna kolem się toczy"
        },
        {
            kategoria: "Przysłowia Polskie",
            podpowiedz: "Babduś Habduś najpiękniejszy pies w całej wsi, no może za wyjątkiem Wojtusia",
            haslo: "Bez pracy nie ma kolaczy"
        },
        {
            kategoria: "Przysłowia Polskie",
            podpowiedz: "Babduś Habduś najpiękniejszy pies w całej wsi, no może za wyjątkiem Wojtusia",
            haslo: "Nie chwal dnia przed zachodem slońca"
        },
        {
            kategoria: "Przysłowia Polskie",
            podpowiedz: "Babduś Habduś najpiękniejszy pies w całej wsi, no może za wyjątkiem Wojtusia",
            haslo: "Dzieci i ryby glosu nie mają"
        },
        {
            kategoria: "Przysłowia Polskie",
            podpowiedz: "Babduś Habduś najpiękniejszy pies w całej wsi, no może za wyjątkiem Wojtusia",
            haslo: "co ma wisieć nie utonie"
        },
        {
            kategoria: "Przysłowia Polskie",
            podpowiedz: "Babduś Habduś najpiękniejszy pies w całej wsi, no może za wyjątkiem Wojtusia",
            haslo: "apetyt rosnie w miarę jedzenia"
        },
        {
            kategoria: "Przysłowia Polskie",
            podpowiedz: "Babduś Habduś najpiękniejszy pies w całej wsi, no może za wyjątkiem Wojtusia",
            haslo: "darowanemu koniowi w zęby się nie zagląda"
        }
    ]

let haslo = "",
    kopia_hasla = "",
    ile_nietrafionych = 0;

function losuj_Pytanie(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function szyfruj_haslo(haslo) {
    let bufor = "";
    bufor = bufor.split("");

    for (let i = 0; i < haslo.length; ++i) {
        if (haslo.charAt(i) != " ")
            bufor += "-";
        else
            bufor += " ";
    }

    haslo = bufor;
    return haslo;
}

function zaznacz(k, j) {
    let kolor = "green";

    if (k == 2)
        kolor = "red";

    document.querySelectorAll('.litera')[j].style.backgroundColor = kolor;
    document.querySelectorAll('.litera')[j].style.cursor = "default";
}

function wypisz_przycisk() {
    document.querySelector('#odslon_haslo').innerHTML = '<button id="zagraj_ponownie">Zagraj ponownie</button>';
    document.querySelector('#odslon_haslo').addEventListener('click', function() {
        location.href = "Gry online.html";
    });
}

function wypisz_haslo(k) {
    let odsloniete_haslo = document.querySelector('#odslon_haslo'),
        rezultat = document.querySelector('#rezultat_rozgrywki');

    if (k == 1) {
        rezultat.innerHTML = "PRZEGRANA!";
        rezultat.style.color = "red";

        odsloniete_haslo.innerHTML = 'Poprawne hasło to: " <span style = "color:red">' + haslo + '</span> "';
    } else if (k == 2) {
        rezultat.innerHTML = "ZWYCIESTWO!";
        rezultat.style.color = "green";
    }

    odsloniete_haslo.style.position = "relative";
    odsloniete_haslo.style.top = "90px";
    setTimeout(wypisz_przycisk, 5000);

    rezultat.style.position = "relative";
    rezultat.style.fontSize = "50px";
    rezultat.style.top = "80px";
}

function sprawdz_czy_koniec() {
    if (ile_nietrafionych == 9) {
        wypisz_haslo(1);
    }

    if (kopia_hasla == haslo) {
        wypisz_haslo(2);
    }
}

function pokaz_podpowiedz(wylosowana) {
    alert("Podpowiedz dobudowywuje jedną część szubienicy!");
    ++ile_nietrafionych;
    let nazwa = "s" + ile_nietrafionych + ".jpg";
    wisielec_png.innerHTML = '<img src="' + nazwa + '"/>';
    document.querySelector('#podpowiedz').innerHTML = pula_Hasel[wylosowana].podpowiedz;
}

function sprawdz_litere(j) {
    kopia_hasla = kopia_hasla.split("");
    let czy_trafiona = false;

    for (let i = 0; i < kopia_hasla.length; ++i) {
        if (haslo.charAt(i) == litery[j]) {
            czy_trafiona = true;
            kopia_hasla[i] = litery[j];
            zaznacz(1, j);
            div_Litera[j].onclick = function() {};
        }
    }

    kopia_hasla = String(kopia_hasla);
    kopia_hasla = kopia_hasla.replace(/,/g, "");

    div_haslo.innerHTML = kopia_hasla;


    if (czy_trafiona == false) {
        ++ile_nietrafionych;
        let nazwa = "s" + ile_nietrafionych + ".jpg";
        wisielec_png.innerHTML = '<img src="PNG/' + nazwa + '"/>';
        zaznacz(2, j);
        div_Litera[j].onclick = function() {};
        console.log("Nietrafionych: " + ile_nietrafionych);
    }

    sprawdz_czy_koniec();
}


function pokaz_kategorie(wylosowana) {
    let kategoria = document.querySelector('#kategoria');
    kategoria.innerHTML = '<span id="span_style">KATEGORIA: </span>' + pula_Hasel[wylosowana].kategoria;
    setTimeout(function() {

        div_haslo.innerHTML = kopia_hasla;
        document.querySelector('#podpowiedz').style.display = "block";
        kategoria.innerHTML = "";

    }, 5000)
}

function start() {
    for (let i = 0; i < div_Litera.length; ++i) {
        litery[i] = litery[i].toUpperCase();
        div_Litera[i].innerHTML = litery[i];
        div_Litera[i].onclick = function() {
            sprawdz_litere(i);
        }
    }

    document.querySelector('#podpowiedz').addEventListener('click', function() {
        pokaz_podpowiedz(wylosowana);
    })
    let wylosowana = losuj_Pytanie(0, pula_Hasel.length - 1);
    haslo = pula_Hasel[wylosowana].haslo;
    haslo = haslo.toUpperCase();
    kopia_hasla = haslo;

    console.log("Hasło: " + haslo);
    console.log("Kopia hasła: " + kopia_hasla);

    kopia_hasla = szyfruj_haslo(kopia_hasla);
    console.log("Kopia hasła: " + kopia_hasla);

    pokaz_kategorie(wylosowana);
}

window.onload = start();