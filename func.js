darkMode = false;
texte_final = "";

var beep_petit = new Audio('./assets/beep_petit.mp3');
var beep_long = new Audio('./assets/beep_long.mp3');
var beep_vide = new Audio('./assets/beep_vide.mp3');

dictionnaire = {
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",
    " ": "/"
}

dictionnaire_morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0"
}

function switchMode() {
    
    if (!darkMode) {

        document.querySelector("body").classList.remove("lightMode_body");
        document.querySelector("body").classList.add("darkMode_body");

        document.getElementById("entree_texte").classList.remove("lightMode_textarea");
        document.getElementById("entree_texte").classList.add("darkMode_textarea");
        document.getElementById("result").classList.remove("lightMode_textarea");
        document.getElementById("result").classList.add("darkMode_textarea");

        document.getElementById("entree_morse").classList.remove("lightMode_textarea");
        document.getElementById("entree_morse").classList.add("darkMode_textarea");
        document.getElementById("result2").classList.remove("lightMode_textarea");
        document.getElementById("result2").classList.add("darkMode_textarea");
        
        document.getElementById("bouton").innerText = "Mode clair"
        darkMode = true;

    } else {

        document.querySelector("body").classList.remove("darkMode_body");
        document.querySelector("body").classList.add("lightMode_body");

        document.getElementById("entree_texte").classList.add("lightMode_textarea");
        document.getElementById("entree_texte").classList.remove("darkMode_textarea");
        document.getElementById("result").classList.add("lightMode_textarea");
        document.getElementById("result").classList.remove("darkMode_textarea");

        document.getElementById("entree_morse").classList.add("lightMode_textarea");
        document.getElementById("entree_morse").classList.remove("darkMode_textarea");
        document.getElementById("result2").classList.add("lightMode_textarea");
        document.getElementById("result2").classList.remove("darkMode_textarea");

        document.getElementById("bouton").innerText = "Mode sombre"
        darkMode = false;

    }

}

function traduire() {

    texte_final = "";

    var texte = document.getElementById("entree_texte").value.split("");

    for (let i = 0; i < texte.length; i++) {

        if(Object.keys(dictionnaire).includes(texte[i][0])) {

            texte[i] = texte[i].replace(texte[i][0], dictionnaire[texte[i][0]]);

        } else {

            texte[i] = "!";
        }
        
    }

    for (let i = 0; i < texte.length; i++) {

        texte_final = texte_final + texte[i] + " ";

    }

    texte_final = texte_final.replace(" ! ", " ");
    document.getElementById("result").value = texte_final;

}

function traduire_morse() {

    texte_final = "";

    var texte_morse = document.getElementById("entree_morse").value.split(" ");

    for (let i = 0; i < texte_morse.length; i++) {

        if(Object.keys(dictionnaire_morse).includes(texte_morse[i])) {

            texte_morse[i] = texte_morse[i].replace(texte_morse[i], dictionnaire_morse[texte_morse[i]]);

        } else {

            texte_morse[i] = ""

        }

    }

    for (let i = 0; i < texte_morse.length; i++) {

        texte_final = texte_final + texte_morse[i] + " ";

    }

    texte_final = texte_final.replace(/  /g, "@")
    texte_final = texte_final.replace(/ /g, "")
    texte_final = texte_final.replace(/@/g, " ")

    document.getElementById("result2").value = texte_final;

}

async function jouerSon() {

    for (let i = 0; i < texte_final.length; i++) {
        if(texte_final[i] == ".") {

            beep_petit.play();

        } else if(texte_final[i] == "-") {

            beep_long.play();

        } else if(texte_final[i] == "/") {

            await new Promise(r => setTimeout(r, 100));

        }

        await new Promise(r => setTimeout(r, 750));
    
    }   

}
