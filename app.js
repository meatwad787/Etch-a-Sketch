
const gridSide = 600;
let rows = 16;
let cols = 16;

const container = document.querySelector('#container');
container.style.width = `${gridSide}px`;
container.style.height = `${gridSide}px`;

function baseGrid() {
    for (let i = 0; i < (rows * cols); ++i) {
        const square = document.createElement('div');

        square.style.width = `${(gridSide / cols) -2}px`;
        square.style.height = `${(gridSide / rows) -2}px`;
        square.classList.add('square');
        container.appendChild(square);
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


} baseGrid();

const btn = document.querySelector('.btn');

function newGrid() {
    
    btn.addEventListener('click', function() {
        
        container.innerHTML = "";
        createGrid();
    });
}; newGrid();

function createGrid() {
    let customSize = prompt('Enter a grid size between 1 and 100');

    while (customSize < 1 || customSize > 100) {
        alert('Please enter a number between 1 and 100');
        customSize = prompt('Enter a grid size between 1 and 100');
        if (isNaN(customSize)) {
            alert('Please enter a number between 1 and 100');
            customSize = prompt('Enter a grid size between 1 and 100');
        } 
    };

    const gridSide = 600;
    let rows = customSize;
    let cols = customSize;
    const container = document.querySelector("#container");
    container.style.width = `${gridSide}px`;
    container.style.height = `${gridSide}px`;
    container.classList.add('container');

    for (let i = 0; i < (rows * cols); ++i) {
        const square = document.createElement('div');

        square.style.width = `${(gridSide / cols) -2}px`;
        square.style.height = `${(gridSide / rows) -2}px`;
        square.classList.add('square');
        container.appendChild(square);
    };
       const squares = document.querySelectorAll('.square');
        squares.forEach(newSquare => {
        newSquare.addEventListener('mouseenter', function() {
            this.classList.add('hovered'); 
        }); 
        newSquare.addEventListener('mouseleave', function() {
            this.classList.add('hovered');
        }); 
        });
    };


