let intitalLength=100;
let splitAngle=15;
let reductionFactor=0.7;
let minimumBranchLength=10;

function setup(){
    createCanvas(720,480);
    angleMode(DEGREES);
    frameRate(3);//2, changed to make it look more smoother
    // branch(100);
    // noLoop();
}

function draw(){
    background('LightBlue');//was grey
    translate(width/2,height);
    intitalLength=map(mouseX,0,width,50,200);
    splitAngle=map(mouseY,0,height,1,30);
    branch(intitalLength);
  
}

// let intitalLength=100;
// let splitAngle=15;
// let reductionFactor=0.7;
// let minimumBranchLength=10;
function branch(length){

    if(length>minimumBranchLength){
        stroke('brown');
        line(0,0,0,-length);//0,0,0-length
    }else{
        noStroke();
        //fill('green');
        ellipse(0,-length,7,15+random(20));//7,15+random(20)
        return;
    }
    push();
    translate(0,-length);
    rotate(splitAngle);
    fill('white');
    branch(length*reductionFactor);
    pop();
    if(random(0,1)<0.5){//originally 0.5
        push();
        translate(0,-length);
        rotate(-splitAngle);
        fill('Hotpink');//orignially was pink
        branch(length*reductionFactor);
        pop(); 
    }
    push();
    translate(0,-length);
    rotate(splitAngle);
    fill('MistyRose');
    branch(length*reductionFactor);
    pop();
    if(random(0,1)<0.5){//originally 0.5
        push();
        translate(0,-length);
        rotate(-splitAngle);
        fill('Lightpink');
        branch(length*reductionFactor);
        pop(); 
    }//double the amount of petals
    
}

//Cherry Blossom tree
//change in color scheme to match the colour of the tree
//Would have added another colour but the drawing will 100% lag
//Also the page might crash if the page runs for a long time
//could use this gif function? i don't know