class Food {
    constructor(){
     
    }
  
    getCount(){
      fedTime = database.ref('FeedTime');
      fedTime.on("value",function(data) {
      lastFed = data.val();
      });
    
    display();{
        var x=80,y=100;

        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }



      }
    }
}