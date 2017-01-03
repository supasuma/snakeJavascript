function Segments(x, y, w, h, fill) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.fill = fill;
}

Segments.prototype = {
    draw: function(ctx) {
        ctx.fillStyle = this.fill;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

};
