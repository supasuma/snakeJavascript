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
            that.draw();
        }
        setInterval(drawWrapper, 100);
    },

    draw: function() {
        console.log("drwa");
        this.ctx.beginPath();
        this.snake.draw(this.ctx);
        this.ctx.stroke();
    },

    process: function() {
        console.log("stuff");
        this.draw();
    }

};
