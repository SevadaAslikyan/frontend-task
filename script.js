let x = canvas.getContext("2d");
x.fillStyle = "white";
x.fillRect(0 , 0 , 1500, 0);
x.moveTo(0 , 0);
x.lineTo(600,30);
x.lineTo(600, 250);
x.lineTo(0, 240);
x.lineTo(0, 0);
x.stroke();