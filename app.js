document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector("#container");

    for (i = 0; i < 16 * 16; ++i) {
        const square = document.createElement('div');
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
});