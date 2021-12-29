import { position, id_array, pw_array, letter_array } from "./firebase.js";

window.onload = function() {
  var login_id = document.getElementById("login_id");
  var login_pw = document.getElementById("login_pw");
  var loginBt = document.getElementById("login_button");

  let id_value = (login_id.value == "") ? false : true;
  var pw_value = (login_pw.value == "") ? false : true;

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
  
  var arr_index = -1;

  loginBt.addEventListener("click", function() {
    if (id_array.indexOf(login_id.value) != -1) {
      arr_index = id_array.indexOf(login_id.value);

      if (pw_array[arr_index] == login_pw.value) {
        localStorage.setItem("letter", letter_array[arr_index]);

        login_id.value = "";
        login_pw.value = "";
        arr_index = -1;
        location.href="load.html";
      } else {
        noPassLogin();
      }
    } else {
      noPassLogin();
    }
  });  

  function checkIdPw(id_value, pw_value) {
    if (id_value && pw_value) {
      loginBt.style.display = "block";
    } else {
      loginBt.style.display = "none";
    }
  }

  function noPassLogin(){
    alert("아이디와 비밀번호를 확인해주세요.");
  }
}
