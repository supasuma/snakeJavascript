function Snake() {
    this.direction = "right";
    this.x = 95;
    this.y = 50;
    this.speed = 5;
}

Snake.prototype = {
    draw: function(ctx) {
        ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
    },

    update: function() {
        switch (this.direction) {
            case "right":
                this.x += this.speed;
                break;

            case "left":
                this.x -= this.speed;
                break;

            case "up":
                this.y -= this.speed;
                break;

            case "down":
                this.y += this.speed;
                break;
        }
    }
}
