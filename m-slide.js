
var i = 0;
var path = new Array();
 
// LIST OF IMAGES
path[0] = "images/images.jpg";
path[1] = "images/images1.jpg";
path[2] = "images/images2.jpg";

function swapImage()
{
   document.slide.src = path[i];
   if(i < path.length - 1) i++; else i = 0;
   setTimeout("swapImage()",3000);
}
window.onload=swapImage;

<img height="200" name="slide" src="images/images.jpg" width="400" />
