setInterval(createSnow, 500);

function createSnow() {
   const snow = document.createElement('i');
   snow.classList.add('fas');
   snow.classList.add('fa-snowflake');
   snow.style.left = Math.random() * document.documentElement.clientWidth + 'px';
   //window.innerWidth는 브라우저 width
   snow.style.animationDirection = Math.random() * 3 + 2 + 's';
   snow.style.opacity = Math.random();
   snow.style.fontSize = Math.random() * 10 + 10 + 'px';
   // var size = Math.random() * 10 + 10;
   // snow.style.width = this.size + 'px'; 
   // snow.style.height = this.size + 'px';
   
   document.body.appendChild(snow);

   setTimeout(() => {
      snow.remove();
   }, 5000);
}