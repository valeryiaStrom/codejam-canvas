var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var img = new Image();

img.src = "./data/rss.png";

img.onload = function() {
context.drawImage(img, 0, 0, 512, 512);
};