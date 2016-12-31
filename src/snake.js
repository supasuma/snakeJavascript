function Snake() {

}

Snake.prototype = {
    draw: function(ctx) {
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    }
}
