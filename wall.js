class Wall {
    constructor(x,y,w,h) {
        this.w = w;
        this.h = h;

        var wall_options = {
            isStatic : true
        };

        this.body = Bodies.rectangle(x,y,w,h, wall_options);
        World.add(world,this.body);
    }

    

    show() {
        var bp = this.body.position;
        rectMode(CENTER);
        rect(bp.x, bp.y, this.w, this.h);
    }
}