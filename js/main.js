var back = 1;

setTimeout(function() {
change();
},5000);

function change() {
switch(back){
case 1:
document.body.style.backgroundImage="url('images/slideshow/image1.jpg')";
back = 2;
break;
case 2:
document.body.style.backgroundImage="url('images/slideshow/image2.jpg')";
back = 3;
break;
case 3:
document.body.style.backgroundImage="url('images/slideshow/image3.jpg')";
back = 4;
break;
case 4:
document.body.style.backgroundImage="url('images/slideshow/image4.jpg')";
back = 5;
break;
case 5:
document.body.style.backgroundImage="url('images/slideshow/image5.jpg')";
back = 6;
break;
case 6:
document.body.style.backgroundImage="url('images/slideshow/image6.jpg')";
back = 7;
break;
case 7:
document.body.style.backgroundImage="url('images/slideshow/image7.jpg')";
back = 8;
break;
case 8:
document.body.style.backgroundImage="url('images/slideshow/image8.jpg')";
back = 9;
break;
case 9:
document.body.style.backgroundImage="url('images/slideshow/image9.jpg')";
back = 10;
break;
case 10:
document.body.style.backgroundImage="url('images/slideshow/image10.jpg')";
back = 11;
break;
case 11:
document.body.style.backgroundImage="url('images/slideshow/image11.jpg')";
back = 1;
break;
default:
//bla
break;
}
}