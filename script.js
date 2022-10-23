
function makeDivGrid(){
    const container = document.querySelector('.container')

    for (let i = 0; i < 16; i++) {
        const divTwo = document.createElement('div');
        divTwo.setAttribute('class', 'rows')
        container.appendChild(divTwo);
    
        for (let j = 0; j < 16; j++) {
        const rows = document.querySelectorAll('.rows');
        const div = document.createElement('div');
        div.setAttribute('id', 'box');
        rows[i].appendChild(div);

        }
    }  
}

makeDivGrid();
