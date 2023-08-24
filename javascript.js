
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-container");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
// if(document.write.style.width = "780px"){}
/*
$(document).ready(function () {
  let arrowIcon = document.getElementsByClassName(".arrow");
  let windowsize = $(window).width();
  if (windowsize >= 900) {
    // location.reload();
    $(".inline-block").slidDown("slow");
  }
  // console.log(windowsize)
  else if (windowsize <= 900) {
    $(".inline-block").toggle("show");
    $(".footer-header").click(function () {
      $(".about-menu").toggle("slow");
      arrowIcon.classList.add(".arrow-icon");
    });
    $(".careers-header").click(function () {
      $(".careers-menu").toggle("slow");
    });
    $(".social-header").click(function () {
      $(".social-menu").toggle("slow");
    });
    $(".business-header").click(function () {
      $(".business-menu").toggle("slow");
    });
    $(".order-header").click(function () {
      $(".order-menu").toggle("slow");
    });
  }
});
*/
//  footer responsive algorithm
document.addEventListener('DOMContentLoaded', function() {
  const toggleLinks = document.querySelectorAll('.header');
  console.log(toggleLinks)
  // console.log(toggleLinks.lastElementChild)
  toggleLinks.forEach((toggleLink)=> {
    toggleLink.addEventListener('click', function() {
      // selected the sub-menu in the footer header
      const submenu = toggleLink.nextElementSibling;
      // select the arrow of the footer header 
      const arrowIcon = toggleLink.lastElementChild;
      if (submenu.style.maxHeight === '0px' || submenu.style.maxHeight === '') {
          console.log(submenu.scrollHeight)
        submenu.style.maxHeight = submenu.scrollHeight + 'px';
        arrowIcon.style.transform = 'rotate(-180deg)';
      } else {
        submenu.style.maxHeight = '0';
        arrowIcon.style.transform = 'rotate(-360deg)';

      }
    });
  });
});

// Reload the page when window width are less then 900px width
function reloadPageIfWindowTooSmall() {
  let time = 0;
  while (time === 0) {
    if (window.innerWidth < 900) {
      // Reload the page
      window.location.reload();
      time++;
    } else {
      window.location.reload();
      time++;
    }
  }
}
window.addEventListener("resize", reloadPageIfWindowTooSmall);
