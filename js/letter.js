window.onload = function () {
  var letter_layout = document.getElementById("letter_layout");

  var letter_text = localStorage.getItem("letter");
  var letter_arr = letter_text.split("<br/>");

  var to_text = document.getElementById("to_text");
  var main_text = document.getElementById("main_text");
  var from_text = document.getElementById("from_text");

  var temp = "";
  for (var i = 0; i < letter_arr.length; i++) {
    if (i == 0) {
      to_text.innerHTML = letter_arr[i];
    } else if (i == letter_arr.length-1) {
      from_text.innerHTML = "<br/>" + letter_arr[i];
    } else {
      temp = temp + "<br/>" + letter_arr[i];
    }
  }

  main_text.innerHTML = temp;
}