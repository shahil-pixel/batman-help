class Drop{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
          
              }
           this.x=x
           this.y=y
           this.radius=radius
           this.body=Bodies.circle(this.x,this.y,this.radius/2,options)
        
           World.add(world,this.body);
       
        var maxDrops = 100;
    }
    display(){
    

    }
    
    update(){
    if(maxDrops.position > displayHeight){
      
      }
    }
}