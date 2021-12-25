window.onload = function() {
  var id = document.getElementById("login_id");
  var pw = document.getElementById("login_pw");
  var loginBt = document.getElementById("login_button");

  var id_value = false;
  var pw_value = false;


  id.addEventListener("keyup", function(){
    if (login_id.value != "") {
      if (!id_value) id_value = true;
    } else {
      if (id_value) id_value = false;
    }

    checkIdPw(id_value, pw_value);
  });

  pw.addEventListener("keyup", function(){
    if (login_pw.value != "") {
      if (!pw_value) pw_value = true;
    } else {
      if (pw_value) pw_value = false;
    }

    checkIdPw(id_value, pw_value);
  });

  loginBt.addEventListener("mouseover", function(){
    loginBt.src = "image/read_button_hover.png";
  });

  loginBt.addEventListener("mouseout", function(){
    loginBt.src = "image/read_button.png";
  });
  

  function checkIdPw(id_value, pw_value) {
    if (id_value && pw_value) {
      loginBt.style.display = "block";
    } else {
      loginBt.style.display = "none";
    }
  }
}