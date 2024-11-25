document.getElementById("nav-menu-icon").addEventListener("click", function () {
  var nav = document.querySelector(".main-nav");
  nav.classList.add("showNav");
});

document.getElementById("nav-closeBtn").addEventListener("click", function () {
  var nav = document.querySelector(".main-nav");
  nav.classList.remove("showNav");
});

// footer year
document.getElementById("year").textContent =
  "\u00A9 " +
  new Date().getFullYear() +
  " Jo Smith Photography . All rights reserved.";
