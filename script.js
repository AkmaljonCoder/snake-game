const container = document.querySelector(".container");
const snake = document.getElementById("snake");
const food = document.getElementById("food");
const itemSize = 20; // width of the items (snake and food)
const gridSize = 20; // size of the container

let score = 0;

let direction = "";

let gameStarted = false;

let snakeY = 0;
let snakeX = 0;

let foodY = 0;
let foodX = 0;

setInterval(() => {
    if (snakeY > gridSize || snakeX > gridSize || snakeY < 0 || snakeX < 0) gameOver();
    if (gameStarted) snakeHandle(direction);
    if (gameStarted) updateDisplay();
}, 200);

function snakeHandle(direction) {
    switch (direction) {
        case "ArrowUp":
            snakeY--;
            break;
        case "ArrowRight":
            snakeX++;
            break;
        case "ArrowDown":
            snakeY++;
            break;
        case "ArrowLeft":
            snakeX--;
            break;
        default:
            break;
    }
};

function gameOver() {
    alert(`Congratulations, you've scored ${score} balls`);
    direction = "";
    snakeY = 0;
    snakeX = 0;
    gameStarted = false;
    score = 0;
    updateDisplay();
}

function updateDisplay() {
    const randomFoodAxis = {
        y: Math.floor(Math.random() * gridSize) + 1,
        x: Math.floor(Math.random() * gridSize) + 1
    };
    if (snakeY > gridSize || snakeX > gridSize || snakeY < 0 || snakeX < 0) return;
    snake.style.top = `${itemSize * snakeY}px`;
    snake.style.left = `${itemSize * snakeX}px`;

    if (snakeX == foodX && snakeY == foodY) {
        foodX = randomFoodAxis.x;
        foodY = randomFoodAxis.x;

        food.style.top = `${itemSize * foodY}px`;
        food.style.left = `${itemSize * foodX}px`;

        score++;
        console.log(score);
    }
};

window.addEventListener("keydown", function(e){
    const key = e.key;
    if (key == "ArrowUp" || key == "ArrowRight" || key == "ArrowDown" || key == "ArrowLeft") {
        if (direction == "" && key == "ArrowUp" || direction == "" && key == "ArrowLeft") return;
        if (direction == "ArrowRight" && key == "ArrowLeft" || direction == "ArrowLeft" && key == "ArrowRight" || direction == "ArrowUp" && key == "ArrowDown" || direction == "ArrowDown" && key == "ArrowUp") return;
        gameStarted = true;
        direction = key;
    };
});

window.addEventListener("load", function(){
    const randomFoodAxis = {
        y: Math.floor(Math.random() * gridSize) + 1,
        x: Math.floor(Math.random() * gridSize) + 1
    };

    foodY = randomFoodAxis.y;
    foodX = randomFoodAxis.x;

    snake.style.top = `${itemSize * snakeY}px`;
    snake.style.left = `${itemSize * snakeX}px`;

    food.style.top = `${itemSize * foodY}px`;
    food.style.left = `${itemSize * foodX}px`;
});