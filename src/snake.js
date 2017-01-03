function Snake() {
    this.direction = "right";
    this.speed = 27;

    this.segments = [];
    this.segments.push(new Segments(0, 0, 25, 25, "blue"));
    this.segments.push(new Segments(27, 0, 25, 25, "red"));
    this.segments.push(new Segments(52, 0, 25, 25, "#333"));
    this.segments.push(new Segments(77, 0, 25, 25, "#333"));

}

Snake.prototype = {
    draw: function(ctx) {
        for (var i in this.segments) {
            oneSegment = this.segments[i];
            oneSegment.draw(ctx);
        }
    },

    update: function() {
        for (var i = 0; i < this.segments.length - 1; i++) {
            var thisSegment = this.segments[i];
            var nextSeg = this.segments[i + 1];
            thisSegment.y = nextSeg.y;
            thisSegment.x = nextSeg.x;
        }

        switch (this.direction) {
            case "right":
                this.segments[this.segments.length - 1].x += this.speed;
                break;

            case "left":
                this.segments[this.segments.length - 1].x -= this.speed;
                break;

            case "up":
                this.segments[this.segments.length - 1].y -= this.speed;
                break;

            case "down":
                this.segments[this.segments.length - 1].y += this.speed;
                break;
        }
    }
}
