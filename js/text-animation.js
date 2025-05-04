document.addEventListener("DOMContentLoaded", function() {
   window.addEventListener('load', () => {
           setTimeout(() => {
               // Hide the preloader
               document.getElementById('preloader').style.display = 'none';
               document.getElementById('main-content').style.display = 'block';
               document.body.style.overflow = 'auto';
         
               // Now trigger the text animation after preloader is gone
               animateText(); // Call the text animation function
           }, 3200); // Preloader duration matches
         });
         
         function animateText() {
           const text = document.getElementById('text');
           const textLength = text.getComputedTextLength();
           
           text.style.strokeDasharray = textLength;
           text.style.strokeDashoffset = textLength;
         
           text.animate([
               { strokeDashoffset: textLength },
               { strokeDashoffset: 0 }
           ], {
               duration: 5000,
               easing: 'cubic-bezier(.38,.57,1,.5)'
           }).onfinish = () => {
               text.style.strokeDasharray = 'none';
               text.style.strokeDashoffset = '0';
           };
         }
});