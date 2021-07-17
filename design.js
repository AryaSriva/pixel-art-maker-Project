// Select color input
// Select size input
const sizePicker = document.getElementById('sizePicker');
const canvas = document.getElementById('pixelCanvas');
const color = document.getElementById('colorPicker');
sizePicker.addEventListener('submit', function(event) {
    event.preventDefault();
    let sizeHeight = document.getElementById('inputHeight').value;
    let sizeWidth = document.getElementById('inputWidth').value;
    canvas.innerHTML = ""; //clears canvas
    makeGrid(sizeHeight, sizeWidth); //make a new custom grid
});


// When size is submitted by the user, call makeGrid()


function makeGrid(sizeHeight, sizeWidth) {
    for (let y = 0; y < sizeHeight; y++) {
        let row = canvas.insertRow(y);//make a new row
        for (let x = 0; x < sizeWidth; x++) {
            let newElement = row.insertCell(x);//insert a cell in that row
            newElement.addEventListener('click', function() { //if that cell is clicked, change its color
                newElement.style.backgroundColor = color.value; 
            });
        }
    } 

}
