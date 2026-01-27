const words = [
    "ARRAY", "BLOCK", "CACHE", "CLICK", "CLONE", "CLOUD", "CODEC", "CODER", "CONST", "DEBUG",
    "ERROR", "EVENT", "FETCH", "FILES", "FLOAT", "FRAME", "GRAPH", "INDEX", "INPUT", "LAYER",
    "LINUX", "LOGIC", "LOGIN", "MERGE", "MOUSE", "NODES", "PATCH", "PARSE", "PIXEL", "PROXY",
    "QUERY", "QUEUE", "REACT", "SHELL", "SHIFT", "STACK", "SWIFT", "TABLE", "TWEET", "WHILE",
    "ABORT", "ALIGN", "ASCII", "ASYNC", "AUDIO", "BASIC", "BATCH", "BUILD", "CABLE", "CHART",
    "CHECK", "CHIPS", "CLASS", "CLEAN", "CLOSE", "COLOR", "COMMA", "COUNT", "CRASH", "CYBER",
    "DATAX", "DELAY", "DRIVE", "EMPTY", "ERASE", "FALSE", "FIELD", "FLASH", "FORTH", "GATES",
    "GLYPH", "GUARD", "HEAPS", "HOSTS", "IMAGE", "INBOX", "INNER", "KEYED", "LABEL", "LINKS",
    "LOCAL", "LOOPS", "MACRO", "MEDIA", "MOUNT", "ORDER", "PANEL", "PARAM", "PATHS", "PHONE",
    "PRINT", "RESET", "ROBOT", "ROUTE", "SCOPE", "SCRUM", "SERVE", "SLACK", "SLICE", "TOKEN"
];

let selectedWord = words[Math.floor(Math.random() * words.length)];
let cRow=1;

let inseredWord="";
let i=1;

console.log("Palavra:" + selectedWord);

window.addEventListener("keydown", function(event){
    if (event.key=="Enter"){
        inseredWord="";
        for(let i=1;i<=5;i++){

            let idSearched="tile-" + cRow + "-" + i;
            let idFound= document.getElementById(idSearched);
            if(idFound && idFound.value){
                inseredWord += idFound.value.toUpperCase();
            }else{
                console.error("Nao foi encontrado");
            }

        }
        if(inseredWord.length != 5){
            console.log("Linha incompleta!");
        }else{
            checkguess(inseredWord,selectedWord);
            console.log("Linha completa");
            cRow++;
        }

    }

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
    let arrayOcurrences=[];
    let countRight=0;
    for(let j=0;j<5;j++){
        arrayOcurrences[j]=countOccurrences(secret[j],secret);
    }
    for(let i=0;i<5;i++){
        let tile=document.getElementById("tile-"+ cRow + "-" + (i+1));
        let letter=guess[i];

        if(letter==secret[i]){
            countRight++;

        }else if (secret.includes(letter) && arrayOcurrences[i]>0){
            arrayOcurrences[i]--;
        }

    }
    if(countRight==5){
        console.log("Adivinhou a palavra");
    }

}
