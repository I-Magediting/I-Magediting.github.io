var slider2_img = document.querySelector('.slider2-img');
var images2 = ['1.jpg', '2.jpg', '3.jpg'];
var k = 0;

function prev5(){
	if(k <= 0) k = images2.length;	
	k--;
	return setImg2();			 
}

function next5(){
	if(k >= images1.length-1) k = -1;
	k++;
	return setImg2();			 
}

function setImg2(){
	return slider2_img.setAttribute('src', "images2/"+images2[k]);
	
}