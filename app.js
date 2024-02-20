document.addEventListener("DOMContentLoaded", baseGrid());

function baseGrid() {
    let initGrid;
    initGrid = 16;
    const container = document.querySelector("#container");

    for (i = 0; i < initGrid; ++i) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (j = 0; j < initGrid; ++j) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square); 
        }
    }
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseenter', function() {
            this.classList.add('hovered'); 
        }); 
        square.addEventListener('mouseleave', function() {
            this.classList.add('hovered');
        }); 
    });

}; 
const btn = document.querySelector('.btn');
//container.append(btn);

function newGrid() {
    
    btn.addEventListener('click', function() {
        
        container.innerHTML = "";
        createGrid();
    });
}; newGrid();

function createGrid() {
    let gridSize = prompt('How big of a grid?');
   const container = document.querySelector("#container");
   container.classList.add('container')
   //container.appendChild(btn);

 for (i = 0; i < gridSize; ++i) {
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    container.appendChild(newRow);
       for (j = 0; j < gridSize; ++j) {
       const newSquare = document.createElement('div');
        newSquare.classList.add('square');
        newRow.appendChild(newSquare);
       }
       const squares = document.querySelectorAll('.square');
        squares.forEach(newSquare => {
        newSquare.addEventListener('mouseenter', function() {
            this.classList.add('hovered'); 
        }); 
        newSquare.addEventListener('mouseleave', function() {
            this.classList.add('hovered');
        }); 
        });
    }
}; 

