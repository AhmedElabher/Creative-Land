// Login Page popup
let links = document.querySelector(".landing-page .links");
let icon = document.querySelector(".fa-solid");
icon.onclick = function (e) {
  e.stopPropagation();
  links.classList.toggle("open");
};
let sign = document.querySelector(".center .sign-up");
login = document.querySelector(".landing-page .login-page");
button = document.getElementById("login-button").onclick = function (e) {
  e.stopPropagation();
  login.style.display = "block";
  sign.style.display = "none";
};
login.onclick = function (e) {
  e.stopPropagation();
};
document.addEventListener("click", (e) => {
  if (e.target !== button && e.target !== login) {
    login.style.display = "none";
    console.log("good");
  }
  if ((login.style.display = "none")) {
    sign.style.display = "block";
  }
  if (e.target !== icon) {
    links.classList.remove("open");
  }
});
// burger icon
