// 2D上下文
var context = Canvas.getContext("2d");
context.strokeStyle = "#f00";
context.fillStyle = "#e4066e";
fillRect();
strokeRect();
clearRect();
beginPath();
arc(x, y, radius, startAngle, endAngle, counterclockwise);
arcTo(x1, y1, x2, y2, radius);
bezierCurveTo(c1x, c1y, c2x, c2y, x, y);
lineTo(x, y);
moveTo(x, y);
quadraticCurveTo(cx, cy, x, y);
rect(x, y, width, height);
closePath();
fill();
stroke();
clip();
//共有属性，font,textAlign,textBaseline
fillText(fontSize, x, y);
strokeText();
// measureText()方法利用 font、textAlign 和 textBaseline 的当前值计算指定文本的大小。
var fontSize = 100;
context.font = fontSize + "px Arial";
while (context.measureText("Hello world!").width > 140) {
  fontSize--;
  context.font = fontSize + "px Arial";
}
context.fillText("Hello world!", 10, 10);
context.fillText("Font size is " + fontSize + "px", 10, 50);

rotate(angle);
scale(scaleX, scaleY);
translate(x, y);
// m1_1 m1_2 dx
// m2_1 m2_2 dy
// 0 0 1
transform(m1_1, m1_2, m2_1, m2_2, dx, dy);
setTransform(m1_1, m1_2, m2_1, m2_2, dx, dy);

drawImage(image, x, y, width, heigth);
drawImage(image, x1, y1, width1, heigth1, x2, y2, width2, height2);

shadowColor;
shadowOffsetX;
shadowOffsetY;
shadowBlur;

createLinearGradient(x, y, x1, y1);
adddColorStep(position, color);

createPattern(image, "repeat");
getImageData(x, y, width, height);
putImageData(data, x, y);

globalAlpha //全局透明度
globalCompositionOperation  //表示后绘制的图形怎样与先绘制的图形结合

// 3D上下文
WebGL   //类型化数组，元素被设置为特定类型的值。
ArrayBuffer //数组缓冲器类型，是内存中指定的字节数，但不会指定这些字节用于保存什么类型的数据。
var buffer = new ArrayBuffer(20);   //内存中分配 20B
var bytes = buffer.byteLength;      //包含的字节数
DataView
//基于整个缓冲器创建一个新视图
var view = new DataView(buffer); 
//创建一个开始于字节 9 的新视图
var view = new DataView(buffer, 9); 
//创建一个从字节 9 开始到字节 18 的新视图
var view = new DataView(buffer, 9, 10);
view.byteOffset
view.byteLength

var gl = canvas.getContext("experimental-webgl");
viewport(x, y, width, height)
var buffer = gl.createBuffer(); 
gl.bindBuffer(gl.ARRAY_BUFFER, buffer); 
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0.5, 1]), gl.STATIC_DRAW);