class Rope{
    constructor(body1,pointB){
        var options={
            bodyA:body1,
            pointB:pointB,
           stiffness:0.8,
           length:100
        }
        this.pointB=pointB
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.pointB;
        push();
        fill("blue")
        strokeWeight(4);
        
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    pop();
    }
}