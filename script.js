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

