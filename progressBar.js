const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const bar4 = document.getElementById("bar4");
const bar5 = document.getElementById("bar5");
const bar6 = document.getElementById("bar6");

function setProgress(bar, percent) {
  bar.style.width = percent + "%";
}

setProgress(bar1, 80); // Set bar1 to 75% progress
setProgress(bar2, 60);
setProgress(bar3, 70);
setProgress(bar4, 75);
setProgress(bar5, 60);
setProgress(bar6, 90);