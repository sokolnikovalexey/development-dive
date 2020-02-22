var canvasContext = null;

function init() {
    var canvas = document.getElementById("canvas");
    canvasContext = canvas.getContext("2d");
    draw();
}

function draw() {
    canvasContext.fillStyle = "green";
    canvasContext.fillRect(20, 20, 50, 50);
    canvasContext.fillStyle = "red";
    canvasContext.fillRect(10, 10, 50, 50);
}

