// Select color input
var colorPicker = document.getElementById("colorPicker");
// Select size input
var inputHeight = document.getElementById('inputHeight');
var inputWidth = document.getElementById('inputWidth');
// When size is submitted by the user, call makeGrid()
document.getElementById("sizePicker").addEventListener('submit', handleForm);
function handleForm(event) { event.preventDefault(); makeGrid(); }

function makeGrid() {
    // Your code goes here!

    // Select table 
    var pixelCanvas = document.getElementById("pixelCanvas");
    var inputColor = document.getElementById("colorPicker");
    var cols = inputWidth.value;
    var rows = inputHeight.value;
    var table = "";

    for (x = 0; x < rows; x++) {
        table += "<tr>";
        for (y = 0; y < cols; y++) {
            table += "<td></td>";
        }
        table += "</tr>";
    }

    pixelCanvas.innerHTML = table;
    // Add event to each cell of the grid table
    document.querySelectorAll('td').forEach(e => e.addEventListener("click", function () {
        console.log("clicked");
        e.style.background = inputColor.value;
    }));
}
