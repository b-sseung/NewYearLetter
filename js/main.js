window.onload = function() {
  var login_id = document.getElementById("login_id");
  var login_pw = document.getElementById("login_pw");
  var loginBt = document.getElementById("login_button");

  let id_value = (login_id.value == "") ? false : true;
  var pw_value = (login_pw.value == "") ? false : true;

  console.log(id_value + ", " + pw_value);

  checkIdPw(id_value, pw_value);

  login_id.addEventListener("keyup", function(){
    if (login_id.value != "") {
      if (!id_value) id_value = true;
    } else {
      if (id_value) id_value = false;
    }

    checkIdPw(id_value, pw_value);
  });

  login_pw.addEventListener("keyup", function(){
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

  loginBt.addEventListener("click", function() {
    localStorage.setItem("id", login_id.value);
    localStorage.setItem("pw", login_pw.value);
    login_id.value = "";
    login_pw.value = "";
    location.href="load.html";
  });  

  function checkIdPw(id_value, pw_value) {
    if (id_value && pw_value) {
      loginBt.style.display = "block";
    } else {
      loginBt.style.display = "none";
    }
  }


}