class keyMovements {
    constructor(){
        this.movement ={};
        window.addEventListener("keydown",this.down.bind(this));
        window.addEventListener("keyup",this.up.bind(this));
    }
    isPressed(keyCode){        
        return this.movement[keyCode] ? this.movement[keyCode]:false;
    }
    down(e){
        if(this.movement[e.keyCode]) return;
        this.movement[e.keyCode]=true;
        console.log("keyDown: ",e.key,"keCode:",e.keyCode);
    }
    up(e){
        this.movement[e.keyCode]=false;
        console.log("keyUp: ",e.key,"keCode:",e.keyCode);
    }
}

const Movements = new keyMovements();
export default Movements;