class Plink{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0
        }
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }

    display(){
        push();
        var pos = this.body.position
        fill("gold");
        ellipse(pos.x,pos.y,10);
        pop();
    }
}