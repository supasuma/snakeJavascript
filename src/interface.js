var game;

$(document).ready(function() {
    game = new Game();
    game.start();
    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 37:
                game.snake.direction = "left";
                break;
            case 38:
                game.snake.direction = "up";
                break;
            case 39:
                game.snake.direction = "right";
                break;
            case 40:
                game.snake.direction = "down";
                break;
        }
    };
});
