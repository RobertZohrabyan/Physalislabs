document.addEventListener('DOMContentLoaded', function() {
  (function () {
  

let rocketPieces = document.querySelectorAll('.rocket-body span')

let rocket = document.querySelector('.rocket')

let triggerStart = window.innerHeight / 5;

let rocketOffsetTop = rocket.offsetTop;

let thirdOffsetTop = rocketPieces[2].offsetTop;

document.addEventListener('scroll', (e) => {
  if(window.scrollY > (rocketOffsetTop - triggerStart)) {
    rocketPieces[0].classList.add('active');
    rocketPieces[1].classList.add('active');
  } else {
    rocketPieces[0].classList.remove('active');
    rocketPieces[1].classList.remove('active');
  }

  if(window.scrollY > (thirdOffsetTop - triggerStart)) {
    rocketPieces[2].classList.add('active');
  } else {
    rocketPieces[2].classList.remove('active');
  }
})


}())

});