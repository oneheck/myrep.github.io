const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customtext = document.getElementById("custom-text");

customBtn.addEventListener("click", function() {
  realFileBtn.click();
});

realFileBtn.addEventListener("change", function() {
  if (realFileBtn.value) {
    customtext.innerHTML = realFileBtn.value.match(
      /[\/\\]([\w\d\s\.\-\(\)]+)$/
    )[1];
  } else {
    customtext.innerHTML = "No File Choosen yet.";
  }
});

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 40) {
      $(".gotopbtn").fadeIn();
    } else {
      $(".gotopbtn").fadeOut();
    }
  });
  $(".gotopbtn").click(function() {
    $("html ,body").animate({ scrollTop: 0 }, 800);
  });
});
