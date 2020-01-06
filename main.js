let arr = [];
let arrAux = [];

function randomCard() {
    let number = document.querySelector("#number").value;
    if (number == "") {
        number = 1;
    }
    for (let x = 1; x <= number; x++) {
        let s = randomSymbol();
        let c = color(s);
        let n = randomNumber();
        arr.push({ "number": n, "symbol": s, "color": c });
        if (n === 1) { n = "A" }
        else if (n === 11) { n = "J" }
        else if (n === 12) { n = "Q" }
        else if (n === 13) { n = "K" }
        createCard(s, n, c);
    }
}

function createCard(symbol, number, color) {

    let card = document.getElementById("randCard");
    let div = document.createElement('div');
    div.innerHTML = `
    <div class="bg-white card ${color} m-1 shadow-lg">
        <div class="ml-1">${symbol}</div>
        <div class="text-center">${number}</div>
        <div class="inv mt-2 mr-1">${symbol}</div>
    </div>`;
    card.appendChild(div);
}

function createSortCard(symbol, number, color) {

    let div = document.createElement('div');
    div.innerHTML = `
    <div class="bg-white card ${color} m-1 shadow-lg">
        <div class="ml-1">${symbol}</div>
        <div class="text-center">${number===1?number="A":number===11?number="J":number===12?number="Q":number===13?number="K":number}</div>
        <div class="inv mt-2 mr-1">${symbol}</div> 
    </div>`;
    return div;
}
const bubbleSort = () => {

    let wall = arr.length - 1; //we start the wall at the end of the array

    let card = document.getElementById('sortCard');
    let div = document.createElement('div');
    div.classList.add("row");
    card.appendChild(div);
    for (let x = 0; x < arr.length; x++) {
        let div2 = createSortCard(arr[x].symbol, arr[x].number, arr[x].color);
        div2.classList.add("col-md-1");
        div.appendChild(div2);
    }

    while (wall > 0) {
        let index = 0;
        while (index < wall) {
            //compare the adjacent positions, if the right one is bigger, we have to swap
            if (arr[index].number > arr[index + 1].number) {
                let aux = arr[index].number;
                let aux2 = arr[index].symbol;
                let aux3 = arr[index].color;

                arr[index].number = arr[index + 1].number;
                arr[index].symbol = arr[index + 1].symbol;
                arr[index].color = arr[index + 1].color;

                arr[index + 1].number = aux;
                arr[index + 1].symbol = aux2;
                arr[index + 1].color = aux3;

                let card2 = document.getElementById('sortCard');
                let div3 = document.createElement('div');
                div3.classList.add("row");
                card2.appendChild(div3);
                for (let x = 0; x < arr.length; x++) {
                    let div4 = createSortCard(arr[x].symbol, arr[x].number, arr[x].color);
                    console.log(div4);
                    div4.classList.add("col-md-1");
                    div3.appendChild(div4);
                }
            }
            index++;
        }
        wall--; //decrease the wall for optimization
    }
    return arr;
}
function randomNumber() {
    switch (Math.floor(Math.random() * 13)) {
        case 0: return 1;
        case 1: return 2;
        case 2: return 3;
        case 3: return 4;
        case 4: return 5;
        case 5: return 6;
        case 6: return 7;
        case 7: return 8;
        case 8: return 9;
        case 9: return 10;
        case 10: return 11;
        case 11: return 12;
        case 12: return 13;
    }
}
function randomSymbol() {
    switch (Math.floor(Math.random() * 4)) {
        case 0: return "♠";
        case 1: return "♣";
        case 2: return "♥";
        case 3: return "♦";
    }
}
function color(random) {
    if (random == "♠" || random == "♣") { return "text-body"; }
    else { return "text-danger"; }
}

