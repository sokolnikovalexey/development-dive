var canvasContext = null;

var game = {
    fps: 1000/60,
    width: 480,
    height: 320
}

var ball = {
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    color: "red",
    xDirection: 5,
    yDirection: 5
}

function init() {
    var canvas = document.getElementById("canvas");
    canvasContext = canvas.getContext("2d");

    setInterval(play, game.fps); 
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

    ball.x = ball.x + ball.xDirection;
    ball.y = ball.y + ball.yDirection;
}

function draw() {
    canvasContext.clearRect(0, 0, game.width, game.height);
    canvasContext.fillStyle = ball.color;
    canvasContext.fillRect(ball.x, ball.y, ball.width, ball.height); 
}

