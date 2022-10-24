//generates a default grid
function makeDivGrid(x){
    const container = document.querySelector('.container')

    if (x == undefined || x == NaN){
        let x = 16;
    } else {
        x = x;
    }

    for (let i = 0; i < x; i++) {
        const divTwo = document.createElement('div');
        divTwo.setAttribute('class', 'rows')
        container.appendChild(divTwo);
    
        for (let j = 0; j < x; j++) {
        const rows = document.querySelectorAll('.rows');
        const div = document.createElement('div');
        div.setAttribute('id', 'box');
        rows[i].appendChild(div);

        }
    }  
}

makeDivGrid();

// prompt for new grid
function userChangedGrid(){
    let userInput = prompt("how many squares fill your grid?");
    if (userInput > 100 || userInput < 0){
        console.log("invalid")
    } else
    makeDivGrid(userInput);
}

userChangedGrid();
