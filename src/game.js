function Game() {
    this.snakevas = document.getElementById("myCanvas");
    this.ctx = this.snakevas.getContext("2d");
    this.snake = new Snake();

}

Game.prototype = {
    start: function() {
        console.log(this.snake);
        var that = this;
        var drawWrapper = function() {
            that.update();
            that.draw();
        }
        setInterval(drawWrapper, 33);
    },

    draw: function() {
        this.ctx.clearRect(0, 0, this.snakevas.width, this.snakevas.height)
        this.ctx.beginPath();
        this.snake.draw(this.ctx);
        this.ctx.stroke();
    },

    update: function() {
        this.snake.update();
    }

};
