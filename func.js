darkMode = false;
morseMode = true
texte_final = "";
click_counter = 0
limite = 50

var beep_petit = new Audio('./assets/beep_petit.mp3');
var beep_long = new Audio('./assets/beep_long.mp3');
var beep_vide = new Audio('./assets/beep_vide.mp3');
var nggyu = new Audio('./assets/nggyu.mp3');

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
    "----": "9",
    "-----": "0"
}

async function switchMode() {

    if(click_counter < limite) {

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
    
        click_counter = click_counter + 1
    
        if(click_counter == limite) {
    
            document.querySelector("body").classList.add("rickMode_body");
            document.getElementById("entree_texte").classList.add("rickMode_textarea");
            document.getElementById("result").classList.add("rickMode_textarea");
            document.getElementById("entree_morse").classList.add("rickMode_textarea");
            document.getElementById("result2").classList.add("rickMode_textarea");
            document.getElementById("body").innerText = "Never gonna give you up"
            document.getElementById("entree_texte").value = "Never gonna give you up";
            document.getElementById("result").value = "Never gonna give you up";
            document.getElementById("entree_morse").value = "Never gonna give you up";
            document.getElementById("result2").value = "Never gonna give you up";
            document.getElementById("bouton").innerText = "Mode rick"
            document.getElementById("b_mode").innerText = "Mode chanson"
            document.getElementById("b_mode").innerText = "Mode chanson"
            document.getElementById("lien").innerText = "Youtube"
            document.getElementById("lien").href = "https://youtu.be/dQw4w9WgXcQ"

            await new Promise(r => setTimeout(r, 700));

            nggyu.play();
    
        }

    }

}

function switchMorse() {

    if(morseMode) {

        document.getElementById("b_mode").innerText = "Mode titaah"
        morseMode = false;

    } else {

        document.getElementById("b_mode").innerText = "Mode caractères"
        morseMode = true;

    }

}

function traduire() {

    texte_final = "";

    var texte = document.getElementById("entree_texte").value.toLowerCase().split("");

    for (let i = 0; i < texte.length; i++) {

        if(morseMode) {

            if(Object.keys(dictionnaire).includes(texte[i])) {

                texte[i] = texte[i].replace(texte[i], dictionnaire[texte[i]]);
    
            } else {
    
                texte[i] = "!";
            }

        } else {

            if(Object.keys(dictionnaire).includes(texte[i])) {

                texte[i] = texte[i].replace(texte[i], dictionnaire[texte[i]].replaceAll(".", "ti").replaceAll("-", "taah"));
    
            } else {
    
                texte[i] = "!";
            }

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

        if(morseMode) {

            if(Object.keys(dictionnaire_morse).includes(texte_morse[i])) {

                texte_morse[i] = texte_morse[i].replace(texte_morse[i], dictionnaire_morse[texte_morse[i]]);
    
            } else {
    
                texte_morse[i] = ""
    
            }

        } else {

            if(Object.keys(dictionnaire_morse).includes(texte_morse[i].replaceAll("ti", ".").replaceAll("taah", "-"))) {

                texte_morse[i] = texte_morse[i].replace(texte_morse[i], dictionnaire_morse[texte_morse[i].replaceAll("ti", ".").replaceAll("taah", "-")]);
    
            } else {
    
                texte_morse[i] = ""
    
            }

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

    if(morseMode) {

        for (let i = 0; i < texte_final.length; i++) {

            if(morseMode) {
    
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

    } else {

        if ('speechSynthesis' in window) {

            var msg = new SpeechSynthesisUtterance(document.getElementById("result").value);
            window.speechSynthesis.speak(msg);
    
        } else {
    
            alert("Désolé, mais le text-to-speech n'est pas supporté sur ce navigateur :(");
    
        }

    }

}
