var hamburgerMenu = document.querySelector('.hamburger-menu');
var menuList = document.querySelector('.menu-list');

hamburgerMenu.addEventListener('click', function () {
  menuList.classList.toggle('active');
});


// shoes collection
const shoes = document.querySelectorAll('.shoe');
shoes.forEach(shoe => {
  shoe.addEventListener('mouseenter', () => {
    shoe.querySelector('.shoe-info').style.transform = 'translateY(0)';
  });
  shoe.addEventListener('mouseleave', () => {
    shoe.querySelector('.shoe-info').style.transform = 'translateY(100%)';
  });
}); 

// sunglasses

var sunglassesList = Array.from(document.getElementsByClassName("sunglasses-item"));
var currentIndex = 0;

function displayNextSunglasses() {
  sunglassesList.forEach(function (sunglasses) {
    sunglasses.classList.remove("active");
  });

  currentIndex = (currentIndex + 1) % sunglassesList.length;
  sunglassesList[currentIndex].classList.add("active");
}

setInterval(displayNextSunglasses, 2000);



// shoes video
const video = document.getElementById("my-video");
video.addEventListener("ended", function() {
  this.currentTime = 0;
  this.play();
});



var img = document.getElementById("myImg");
var originalSrc = img.src;
var newSrc = "images/black1.jpg";
var timeout;
img.addEventListener("mouseover", function() {
	clearTimeout(timeout);
	img.src = newSrc;
});
img.addEventListener("mouseout", function() {
	timeout = setTimeout(function() {
		img.src = originalSrc;
	}, 500); 
});



var white = document.getElementById("img");
var recent=white.src;
var newImg="/images/heel-removebg-preview.png";
var timeout;

white.addEventListener("mouseover",function () {
  clearTimeout(timeout);
  white.src=newImg;
  
})
white.addEventListener("mouseout",function () {
  timeout=setTimeout(function(){
    white.src=recent;
  },500);
  
})


var blue = document.getElementById("blue");
var recentblue=blue.src;
var newblue="/images/blue2-removebg-preview.png";
var timeout;

blue.addEventListener("mouseover",function () {
  clearTimeout(timeout);
  blue.src=newblue;
  
})
blue.addEventListener("mouseout",function () {
  timeout=setTimeout(function(){
    blue.src=recentblue;
  },500);
  
})

var red = document.getElementById("red");
var recentred=red.src;
var newred="/images/red1.webp";
var timeout;

red.addEventListener("mouseover",function () {
  clearTimeout(timeout);
  red.src=newred;
  
})
red.addEventListener("mouseout",function () {
  timeout=setTimeout(function(){
    red.src=recentred;
  },500);
  
})


var pink = document.getElementById("pink");
var recentpink=pink.src;
var newpink="/images/pink1.webp";
var timeout;

pink.addEventListener("mouseover",function () {
  clearTimeout(timeout);
  pink.src=newpink;
  
})
pink.addEventListener("mouseout",function () {
  timeout=setTimeout(function(){
    pink.src=recentpink;
  },500);
  
})


var colorless = document.getElementById("colorless");
var recentcolorless=colorless.src;
var newcolorless="/images/colorless.jpg";
var timeout;

colorless.addEventListener("mouseover",function () {
  clearTimeout(timeout);
  colorless.src=newcolorless;
  
})
colorless.addEventListener("mouseout",function () {
  timeout=setTimeout(function(){
    colorless.src=recentcolorless;
  },500);
  
})





