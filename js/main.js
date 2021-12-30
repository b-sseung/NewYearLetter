import { position, code_array, letter_array } from "./firebase.js";

window.onload = function() {
  var login_code = document.getElementById("login_code");
  var loginBt = document.getElementById("login_button");

  var code_value = (login_code.value == "") ? false : true;

  checkIdPw(code_value);

  // console.log(localStorage.getItem("letter"));

  login_code.addEventListener("keyup", function(){

    if (login_code.value != "") {
      if (!code_value) code_value = true;
    } else {
      if (code_value) code_value = false;
    }

    checkIdPw(code_value);
  });

  loginBt.addEventListener("mouseover", function(){
    loginBt.src = "image/read_button_hover.png";
  });

  loginBt.addEventListener("mouseout", function(){
    loginBt.src = "image/read_button.png";
  });

  loginBt.addEventListener("click", function() {
    if (code_array.indexOf(login_code.value) != -1) {
      localStorage.setItem("letter", letter_array[code_array.indexOf(login_code.value)]);
      // console.log(letter_array[code_array.indexOf(login_code.value)]);
      login_code.value = "";
      location.href="load.html";
    } else {
      noPassLogin();
    }
  });  

  function checkIdPw(code_value) {
    if (code_value) {
      loginBt.style.display = "block";
    } else {
      loginBt.style.display = "none";
    }
  }

  function noPassLogin(){
    alert("아이디와 비밀번호를 확인해주세요.");
  }

  window.addEventListener("load", function() {
    localStorage.clear();
  });
}
