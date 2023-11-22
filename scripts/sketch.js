let drawing = true;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('sketch-container');
    background(255);
}

function draw() {
    if (drawing) {
        stroke(0);
        strokeWeight(4);
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function mousePressed() {
    drawing = true;
}

function mouseReleased() {
    drawing = false;
}

function keyPressed() {
    if (keyCode === ENTER) {
        saveCanvas('myDrawing', 'png');
    } else if (keyCode === BACKSPACE) {
        background(255);
    }
}
