var GAME = {
    width: 500,
    height: 500,
    fps: 1000 / 60,
    canvasContext: null
}

var BALL = {
    x: 100,
    y: 100,
    size: 20,
    color: "red",
    speed: 20,
    xDirection: 4,
    yDirection: 4
}

function init() {
    var canvas = document.getElementById("canvas");
    _initCanvas(canvas);

    setInterval(play, GAME.fps);  
}

function play() {
    draw();
    update();
}

function draw() {
    GAME.canvasContext.clearRect(0, 0, GAME.width, GAME.height);

    GAME.canvasContext.fillStyle = BALL.color;
    GAME.canvasContext.fillRect(BALL.x, BALL.y, BALL.size, BALL.size); //Рисуем мячик
}

function update() {
    // двигаем мячик на его скорость
    BALL.x += BALL.xDirection;
    BALL.y += BALL.yDirection;
}

function _initCanvas(canvas) {
    canvas.width = GAME.width;
    canvas.height = GAME.height;
    GAME.canvasContext = canvas.getContext("2d");
}