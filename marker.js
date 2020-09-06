class Marker{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,120,5,options);
        World.add(world,this.body);
    }
}