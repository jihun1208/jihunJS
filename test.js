class Car{
    constructor(color){
        this.color = color;
        this.wheels = 4;
    }
    drive(){
        console.log("drive..");
    }
    stop(){
        console.log("STOP!");
    }
}

class Bmw extends Car{
    park(){
        console.log("PARK");
    }
    stop(){
        super.stop();
        console.log("and.. wait!");
    }
}

class Newbmw extends Bmw{
    stop(){
        super.stop();
        console.log("yre!!");
    }
}

const mybmw = new Newbmw("white");

mybmw.stop();