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
        load_image_id.value = "letter_img_ani"
        load_image_src.value = "image/letter_open1.png";
        setTimeout(function(){
          load_image_id.value = "letter_image"
        }, 3000);
      }, 4000);
    }
  }

  var load_image1 = document.createElement("img");
  var load_image2 = document.createElement("img");

  var load_image_id1 = document.createAttribute("id");
  var load_image_id2 = document.createAttribute("id");

  var load_image_src1 = document.createAttribute("src");
  var load_image_src2 = document.createAttribute("src");

  var load_image_index = document.createAttribute("style");
  var load_image_index1 = document.createAttribute("style");
  var load_image_index2 = document.createAttribute("style");

  var letter2_delay = true;
  load_image.addEventListener("click", function(){
    if (load_image_src.value == "image/letter_open1.png") {
      openLetter();
    }
  });

  load_image2.addEventListener("click", function(){
    console.log("시발");
    load_image_id1.value = "letter_papper";

    setTimeout(function(){
      load_image_index1.value = "z-index: 3";
      load_image_index2.value = "z-index: 2";
    }, 500);
  });

  function openLetter() {
    load_image_id1.value = "letter_image";
    load_image_id2.value = "letter_image";

    load_image_src.value = "image/letter_open3.png";
    load_image_src1.value = "image/letter_open4.png";
    load_image_src2.value = "image/letter_open5.png";

    load_image_index.value = "z-index: 1";
    load_image_index1.value = "z-index: 2";
    load_image_index2.value = "z-index: 3";

    load_image.setAttributeNode(load_image_index);
    load_image1.setAttributeNode(load_image_id1);
    load_image1.setAttributeNode(load_image_src1);
    load_image1.setAttributeNode(load_image_index1);
    load_image2.setAttributeNode(load_image_id2);
    load_image2.setAttributeNode(load_image_src2);
    load_image2.setAttributeNode(load_image_index2);

    load_animation_wrapper.appendChild(load_image1);
    load_animation_wrapper.appendChild(load_image2);

    letter2_delay = false;
  }
}