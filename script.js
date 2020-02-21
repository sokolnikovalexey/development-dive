var GAME = {
    width: 500,
    height: 500,
    fps: 1000 / 60,
    canvasContext: null,
    background: new Image()
}

var PLAYER = {
    x: 50,
    y: 0,
    width: 20,
    height: 100,
    color: "green",
    yDirection: 0,
    speed: 40,
}

function init() {
    var canvas = document.getElementById("canvas");
    _initCanvas(canvas);
    _initEventsListeners(canvas);

    play();
}

function play() {
    draw();
    update();
}

function draw() {
    GAME.canvasContext.clearRect(0, 0, GAME.width, GAME.height);

    GAME.canvasContext.fillStyle = PLAYER.color;
    GAME.canvasContext.fillRect(PLAYER.x, PLAYER.y, PLAYER.width, PLAYER.height); //Рисуем игрока
}

function update() {
    //Двигаем игрока на его скорость
    PLAYER.y += PLAYER.yDirection;
    PLAYER.yDirection = 0;
}

function _initCanvas(canvas) {
    canvas.width = GAME.width;
    canvas.height = GAME.height;
    GAME.canvasContext = canvas.getContext("2d");
}

function _initEventsListeners(canvas) {
    document.addEventListener("keydown", _onDocumentKeyDown);
    canvas.addEventListener("mousemove", _onCanvasMouseMove);
}

function _onCanvasMouseMove(event) {
    PLAYER.y = event.clientY;
    play();
}

function _onDocumentKeyDown(event) {
    if (event.key == "ArrowUp") {
        PLAYER.yDirection = -PLAYER.speed;
    } else if (event.key == "ArrowDown") {
        PLAYER.yDirection = PLAYER.speed;
    }
    play();
}