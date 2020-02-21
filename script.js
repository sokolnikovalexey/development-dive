var GAME = {
    width: 500,
    height: 500,
    canvasContext: null
}

function init() {
    var canvas = document.getElementById("canvas");
    _initCanvas(canvas);
    draw(); 
}

function draw() {
    GAME.canvasContext.clearRect(0, 0, GAME.width, GAME.height);

    GAME.canvasContext.fillStyle = "red";
    GAME.canvasContext.fillRect(10, 10, 50, 50);
}

function _initCanvas(canvas) {
    canvas.width = GAME.width;
    canvas.height = GAME.height;
    GAME.canvasContext = canvas.getContext("2d");
}