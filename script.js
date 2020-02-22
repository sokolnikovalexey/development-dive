var canvasContext = null;

var game = {
    fps: 1000/60,
    width: 480,
    height: 320,
    background: new Image()
}

var ball = {
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    color: "red",
    xDirection: 5,
    yDirection: 5,
    speed: 5
}

function init() {
    var canvas = document.getElementById("canvas");
    canvasContext = canvas.getContext("2d");

    game.background.src = "img/bg.jpg"

    canvas.addEventListener("mousemove", onCanvasMouseMove);
    document.addEventListener("keydown", onDocumentKeyDown);

    game.background.onload = function(){
        setInterval(play, game.fps); 
    }       
}

function play() {
    draw();
    update();
}

function update() {
    // направляем шарик в противоположную сторону при соприкосновении с ПОЛОМ или ПОТОЛКОМ игрового поля
    if (ball.y < 0 || (ball.y + ball.height > game.height)) {
        ball.yDirection = -ball.yDirection;
    }

    // направляем шарик в противоположную сторону при соприкосновении с ПОЛОМ или ПОТОЛКОМ игрового поля
    if (ball.x < 0 || (ball.x + ball.width > game.width)) {
        ball.xDirection = -ball.xDirection;
    }
}

function draw() {
    canvasContext.clearRect(0, 0, game.width, game.height);
    canvasContext.drawImage(game.background, 0, 0, game.width, game.height);  //Рисуем фон

    canvasContext.strokeStyle = ball.color;
    canvasContext.strokeRect(ball.x, ball.y, ball.width, ball.height); 
}

function onCanvasMouseMove(event) {
    ball.x = event.layerX;
    ball.y = event.layerY;
}

function onDocumentKeyDown(event) {
    if (event.key == "ArrowUp") {
        ball.yDirection = -ball.speed;
    } else if (event.key == "ArrowDown") {
        ball.yDirection = ball.speed;
    }
}
