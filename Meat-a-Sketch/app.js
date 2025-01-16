
const gridSide = 600;
let rows = 16;
let cols = 16;
const Draw = document.querySelector('.draw');
const Erase = document.querySelector('.erase');
const ColorPicker = document.querySelector('.grid-color');
const clear = document.querySelector('.clear-btn');



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
        // clear.addEventListener('click', () => square.classList.remove('hovered'));
        clear.addEventListener('click', () => square.style.backgroundColor = '');
    }
        //This just removes the hover from Erase button when Draw is clicked
    Draw.addEventListener('click', function draw() {
        Draw.classList.add('btn-hover');
        Erase.classList.remove('btn-hover');
    
        const squares = document.querySelectorAll('.square');
            squares.forEach(square => {
            square.addEventListener('click', function() {
                // this.classList.add('hovered'); 
                this.style.backgroundColor = 
                document.getElementById('clr').value; 
            });  
            //This just removes the hover from Draw button when Erase is clicked
            Erase.addEventListener('click', function() {
                Erase.classList.add('btn-hover')
                Draw.classList.remove('btn-hover');
               
                
                while (Erase.click = true) {
                    //  square.addEventListener('click', () => square.classList.remove('hovered'));
            //Now the Erase button does it's job when Draw button has
            //the value of the color picker
                    square.addEventListener('click', () => square.style.backgroundColor = '');
                    break;
                 } 
        }); 
    });
});

} baseGrid();

const ResizeBtn = document.querySelector('.btn');

function newGrid() {
    
    ResizeBtn.addEventListener('click', function() {
        
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
        // clear.addEventListener('click', () => square.classList.remove('hovered'));
        clear.addEventListener('click', () => square.style.backgroundColor = '');
    };
    //    const squares = document.querySelectorAll('.square');
    //     squares.forEach(newSquare => {
    //     newSquare.addEventListener('mouseenter', function() {
    //         this.classList.add('hovered'); 
    //     }); 
    //     newSquare.addEventListener('mouseleave', function() {
    //         this.classList.add('hovered');
    //     }); 
    //     });
    };


