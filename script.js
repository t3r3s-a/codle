const words = [
    "ARRAY", "BLOCK", "CACHE", "CLICK", "CLONE", "CLOUD", "CODEC", "CODER", "CONST", "DEBUG",
    "ERROR", "EVENT", "FETCH", "FILES", "FLOAT", "FRAME", "GRAPH", "INDEX", "INPUT", "LAYER",
    "LINUX", "LOGIC", "LOGIN", "MERGE", "MOUSE", "NODES", "PATCH", "PARSE", "PIXEL", "PROXY",
    "QUERY", "QUEUE", "REACT", "SHELL", "SHIFT", "STACK", "SWIFT", "TABLE", "TWEET", "WHILE",
    "ABORT", "ALIGN", "ASCII", "ASYNC", "AUDIO", "BASIC", "BATCH", "BUILD", "CABLE", "CHART",
    "CHECK", "CHIPS", "CLASS", "CLEAN", "CLOSE", "COLOR", "COMMA", "COUNT", "CRASH", "CYBER",
    "DATAX", "DELAY", "DRIVE", "EMPTY", "ERASE", "FALSE", "FIELD", "FLASH", "FORTH", "GATES",
    "GLYPH", "GUARD", "HEAPS", "HOSTS", "IMAGE", "INBOX", "INNER", "KEYED", "LABEL", "LINKS",
    "LOCAL", "LOOPS", "MACRO", "MEDIA", "MOUNT", "ORDER", "PANEL", "PATHS", "PHONE",    
    "PRINT", "RESET", "ROBOT", "ROUTE", "SCOPE", "SCRUM", "SERVE", "SLACK", "SLICE", "TOKEN"
];

let dictionary=[];

fetch("https://raw.githubusercontent.com/tabatkins/wordle-list/main/words")
    .then(response => response.text())
    .then(data => {
        let commonWords = data.split("\n").map(w => w.trim().toLowerCase());
        let techWords = words.map(w => w.toLowerCase());
        dictionary=[...commonWords, ...techWords]
        console.log("Dictionary loaded");
    })
    .catch(error => console.error("Error loading dictionary", error));


let selectedWord = words[Math.floor(Math.random() * words.length)];
let cRow=1;

let inseredWord="";
let i=1;

console.log("Word:" + selectedWord);

window.addEventListener("keydown", function(event){
    if (event.key=="Enter"){
        inseredWord="";
        for(let i=1;i<=5;i++){

            let idSearched="tile-" + cRow + "-" + i;
            let idFound= document.getElementById(idSearched);
            if(idFound && idFound.value){
                inseredWord += idFound.value.toUpperCase();
            }else{
                console.error("Not founded");
            }

        }
        if(inseredWord.length != 5){
            console.log("Incomplete line");
        }else{
            if(dictionary.includes(inseredWord.toLowerCase())){
                checkguess(inseredWord,selectedWord);
                console.log("Complete line");
                cRow++;
                    if (cRow<=6){

                    for (let j = 1; j <= 5; j++) {

                        let nextTile = document.getElementById("tile-" + cRow + "-" + j);
                        if (nextTile){
                            nextTile.readOnly = false;
                        }
                    }

                    let tile=document.getElementById("tile-"+ cRow + "-" + 1);

            if (tile) tile.focus();
            
            }else{
                console.log("You lost");
                this.document.getElementById("defeat").style.display="flex";
            }
            }else{
                console.log("Word doesnt exist");
            }
        }

    }

});

document.querySelectorAll("input").forEach(tile => {
    tile.addEventListener("input", function() {
        if (this.value.length >= 1) {
            let parts = this.id.split("-");
            let row = parts[1];
            let col = parseInt(parts[2]);

            let next = document.getElementById("tile-" + row + "-" + (col + 1));
            if (next) {
                next.focus();
            }
        }
    });
});

function countOccurrences (letter,secret){
    let x=0;
    for(let i=0;i<5;i++){
        if (letter==secret[i]){
            x++;
        }
    }

    return x;
}

function checkguess(guess,secret){
    let ocurrences={};
    let countRight=0;
    for (let char of secret) {
        ocurrences[char] = countOccurrences(char, secret);
    }
    let status=[null,null,null,null,null];
    for(let i=0;i<5;i++){
        let letter=guess[i];

        if(letter==secret[i]){
            status[i]="correct";
            ocurrences[letter]--;
            countRight++;
        }

    }

    for(let i=0;i<5;i++){
        if (status[i]=="correct") continue;

        let letter=guess[i];

        if(secret.includes(letter) && ocurrences[letter]> 0){
            status[i]="present";
            ocurrences[letter]--;
        }
    }

    for(let i=0;i<5;i++){

        let tile=document.getElementById("tile-" + cRow + "-" + (i+1));
        
        if(status[i]=="correct"){
            tile.classList.add("correct");
        } else if (status[i]=="present"){
            tile.classList.add("present");
        }
        tile.readOnly=true;
    }

    if(countRight==5){
        console.log("You won");
        document.getElementById("victory").style.display="flex";
    }

}


