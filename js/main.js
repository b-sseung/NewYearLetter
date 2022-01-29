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

  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth();
  var date = today.getDate();

  var passValue = true;
  loginBt.addEventListener("click", function() {
    if (year != 2021 || month != 11 || date != 31) {
      alert(unescape("2021%uB144%2012%uC6D4%2031%uC77C%uC5D0%uB9CC%20%uC5F4%uB78C%uD560%20%uC218%20%uC788%uC2B5%uB2C8%uB2E4."));

      return;
    }

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
    alert(unescape("%uCF54%uB4DC%uB97C%20%uB2E4%uC2DC%20%uD655%uC778%uD574%uC8FC%uC138%uC694."));
  }

  window.addEventListener("load", function() {
    localStorage.clear();
  });

//   console.log(escape("코드를 다시 확인해주세요."));
//   console.log(escape("2021년 12월 31일에만 열람할 수 있습니다."));
}