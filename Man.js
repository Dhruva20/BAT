class Man{
    constructor(x,y){
        var options ={
            isStatic : true
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.body = Bodies.circle(x,y,50,options);
        World.add(world,this.body);
}

display(){
    var pos  = this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,200,200);
}


}