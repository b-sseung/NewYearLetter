window.onload = function() {

  if (localStorage.getItem("id")) {
    var idText = localStorage.getItem("id");
  }

  console.log(idText);

  var load_image = document.createElement("img");
  var load_image_id = document.createAttribute("id");
  var load_image_src = document.createAttribute("src");
  load_image_id.value = "load_image";

  load_image.setAttributeNode(load_image_id);
  load_image.setAttributeNode(load_image_src);

  var load_animation_wrapper = document.getElementById("load_animation_wrapper");
  load_animation_wrapper.appendChild(load_image);

  for (var i = 0; i <= 12; i++) {
    if (i < 12) {
      (function(x){
        setTimeout(function(){
          load_image_src.value = "image/loading_move_" + (x+1) + ".png";
        }, 300 * x);
      })(i);
    } else {
      setTimeout(function(){
        load_image_id.value = "letter_image"
        load_image_src.value = "image/letter_open1.png";
      }, 5000);
    }
  }

  load_image.addEventListener("click", function(){
    if (load_image_src.value == "image/letter_open1.png") {
      load_image_src.value = "image/letter_open2.png";
    } else if (load_image_src.value == "image/letter_open2.png") {
      load_animation_wrapper.removeChild(load_image);
    }
  });
}