function setup() {
    canvas = createCanvas(280, 280)
    canvas.center();
    background("white")
    canvas.mouseReleased(classifierCanvas);
    synth = window.speechSynthesis;

}

function clearCanvas() {
    background("white")
}

function preload() {
    classifier = ml5.imageClassifier('DoodleNet');
}

function draw() {
    strokeWeight(13)
    stroke(0);

    if (mouseIsPressed)
        line(pmouseX, pmouseY, mouseX, mouseY);
}

function classifierCanvas() {
    classifier.classify(canvas, gotresults);
}

function gotresults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    document.getElementById('lable').innerHTML='lable : '+results[0].label;
    document.getElementById('confidence').innerHTML='confidence : ' 
    +Math.round(results[0].confidence*100)+'%'
utterThis= new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);
}
