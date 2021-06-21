class Ground {
     constructor(x, y, width, height) {
       var options = {
         isStatic: true,
         'restitution' :0,
         'friction' :0,
         'density' :1  
        }
       this.Body = Bodies.rectangle(x, y, width, height, options);    
       this.width = width;
       thisheight = height;

       World.add(world, this.Body);
      }
   
     display(){
    
       rectMode(CENTER);
       
       fill(255);

       rect(this.Body.position.x, this.Body.position.y, this.width, this.height);
     }
   };