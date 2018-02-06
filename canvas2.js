var box = document.getElementById("box")
var ctx = box.getContext("2d")
var c = document.getElementById("clear")
var lastX = -1;
var lastY = -1;

ctx.fillStyle = "red";

var clear = function(e){
    ctx.clearRect(0, 0, 500, 500);
    lastX = -1;
}

var draw = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    if (lastX != -1){
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(x, y);
	ctx.stroke();
	console.log("draw the line");
    }
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, 2 * Math.PI);
    ctx.fill();
    lastX = x;
    lastY = y;
}



c.addEventListener("click", clear);
box.addEventListener("click", draw);
