var slider1_img = document.querySelector('.slider1-img');
var images1 = ['1.jpg', '2.jpg', '3.jpg'];
var j = 0;

function prev1(){
	if(j <= 0) j = images1.length;	
	j--;
	return setImg1();			 
}

function next1(){
	if(j >= images1.length-1) j = -1;
	j++;
	return setImg1();			 
}

function setImg1(){
	return slider1_img.setAttribute('src', "images1/"+images1[j]);
	
}