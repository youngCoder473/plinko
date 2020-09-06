class Particle{
    constructor(x,y,){
        var options={
            isStatic:false,
            restitution:0.05
        }
        this.body = Bodies.circle(x,y,8,options);
        World.add(world,this.body);
        this.color=(random(0,255),random(0,255),random(0,255));
    }
    display(){
        push();
        var pos = this.body.position
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,10);
        pop();
    }
}