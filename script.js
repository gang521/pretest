var startImage = document.getElementById("start-image");
var transitionPage = document.getElementById("transition-page");
var detailPage = document.getElementById("detail-page");
var endPage = document.getElementById("end-page");
var finalPage = document.getElementById("final-page");
var returnButton = document.getElementById("return-button");
var timeline = document.getElementById("timeline");

startImage.addEventListener("click", function() {
  transitionPage.classList.add("show");
  setTimeout(function() {
    showDetailPage("\images\zhanshi.jpg");
  }, 1000);
});

returnButton.addEventListener("click", function() {
  showMainPage();
});

function showMainPage() {
  mainPage.style.display = "block";
  detailPage.style.display = "none";
  endPage.style.display = "none";
  finalPage.style.display = "none";
  timeline.innerHTML = "";
}

function showDetailPage(imageUrl) {
  mainPage.style.display = "none";
  detailPage.style.display = "block";
  endPage.style.display = "none";
  finalPage.style.display = "none";
  timeline.innerHTML = "";
}