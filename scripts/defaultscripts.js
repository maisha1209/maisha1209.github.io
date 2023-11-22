window.onload = function (){
    alert("Hey my script is running");
} 

//function getUserInput(){
    //var name = document.getElementById("nameInput").value;

    //document.getElementById("output").innerHTML = name;
//}

// defaultscripts.js



/**console.log("Hello");
    function getUserInput(){
    var name= document.getElementById("nameInput").value;
    var feeling=document.getElementById("feelingInput").value;

    var outputMessage="Hello" + " " + name + "! I am glad that you are feeling" + feeling+ ".";
    console.log(outputMessage);

}**/

function add(){
    var x=6;
    var y=8;
    var sum= x+y;
    alert(sum);
}

function subtract(){
    var z=6;
    var p=4;
    var minus=z-p;
    alert(minus);
}

function multiply(){
    var q=6;
    var r=7;
    var product=q*r;
    alert(product);
}

function divide(){
    var a=6;
    var b=2;
    var di=a/b;
    alert(di);
}

function average(){
    var one= 21;
    var two = 24;
    var three=46;
    var total= one+two+three;
    var avg=total/3;
    alert(avg);
}


function findPolygon() {
    const number = Math.abs(Math.round(parseFloat(document.getElementById("favNumber").value)));
    const polygons = [
        "0", "one-sided", "digon", "triangle", "quadrilateral", "pentagon", "hexagon",
        "heptagon", "octagon", "enneagon", "decagon"
    ];

    if (number >= 0 && number < polygons.length) {
        const polygonName = polygons[number];
        alert(polygonName);
       
}}


// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    const userForm = document.getElementById("userForm");

    // Add an event listener for form submission
    userForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting and refreshing the page

        // Get the user inputs
        const name = document.getElementById("nameInput").value;
        const feeling = document.getElementById("feelingInput").value;
        //const favNum= document.getElementById("favNumber").value;
        findPolygon();

        // Create a display message, a template literal which is an HTML
        const displayMessage = `Hi ${name} I am glad that you are feeling ${feeling}`;

        // Display the user inputs in the 'display' div
        document.getElementById("display").innerHTML = displayMessage;
    });
   
});



