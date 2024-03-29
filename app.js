document.getElementById("ContainerOne");
document.getElementById("ContainerTwo");
document.getElementById("ContainerThree");
document.getElementById("ContainerFour");
document.getElementById("ContainerFive");

function navOne() {
  location.href = `#ContainerOne`;
}

function navTwo() {
  location.href = `#ContainerTwo`;
}

function navThree() {
  location.href = `#ContainerThree`;
}

function navFour() {
  location.href = `#ContainerFour`;
}

function navFive() {
  location.href = `#ContainerFive`;
}

// copy button

function copyEvent(copy) {
  var str = document.getElementById(copy);
  window.getSelection().selectAllChildren(str);
  document.execCommand("Copy");
}

// nav hide when scroll

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
};
