class Wall{
    constructor(x,y){
        var options={
            isStatic:true,
            restitutuon:0.3
        }
        this.body=Bodies.rectangle(x,y,5,100,options);
        World.add(world,this.body);
    }
    display(){
        push();
        var pos = this.body.position;
        fill("white");
        rectMode(CENTER)
        rect(pos.x,pos.y,10,100);
        pop();
    }
}