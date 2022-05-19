/*
The nav bar is dynamically created with a basic for loop. The loop dynamically generates <li> elements, that have an <a> element inside. Using the method .appendChild we get the final result.

The section near the top of the viewport is highlighted. First we check that the elements are in the viewport (referenced from the Knowledge section, the mentor literally wrote that we can use the code for this project -> https://knowledge.udacity.com/questions/85408#96950). The section that we are currently viewing will get a grey background

The active section in the Navbar is highlighted.

The document has smooth scrolling
*/


const navBarUl = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

for (let i = 1; i <= 4; i++) {
  const newLi = document.createElement("li");
  newLi.className="navLi";
  const newA = document.createElement("a");
  newLi.appendChild(newA);
  newA.setAttribute("href", "#section" + i);
  newA.innerText = "Section " + i;
  newA.setAttribute('id','anchor');
  navBarUl.appendChild(newLi);
}

//checking elements in the viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

//Highlight element that is being viewed
function makeActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    if (box.top <= 50 && box.bottom >= 50) {
      section.classList.add("your-active-class");
      section.style.cssText = "background-color: grey;";
    } else {
      section.classList.remove("your-active-class");
      section.style.cssText =
        "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
    }
  }
}

// Make sections active
document.addEventListener("scroll", function() {
  makeActive();
});


//Per mentor correction: The active section in the Navbar should be highlighted.

//I don't know if we can use jQuery, so i wrote it the way I know and translated it to vanilla js

// $(document).ready(function () {
//   $(window).scroll(function (e) {
//     let windowTop = $(this).scrollTop();
//     $('.navLi a').each(function (event) {
//       if (windowTop >= $($(this).attr('href')).offset().top - 100) {
//           // Remove 'active' from previously highlighted menu items
//           $('.navLi .active').removeClass('active');
//           $(this).addClass('active');
//       }
//   });
//   });
// });


//Tutorial on how to convert jQuery into vanilla JS https://www.freecodecamp.org/news/how-to-translate-jquery-code-into-vanilla-js/

  function onScroll(event) {
    var navLiA = [...document.querySelectorAll('.navLi a')];
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    navLiA.forEach(function(currLink) {
      var val = currLink.getAttribute('href');
      var refElement = document.querySelector(val);
      if (refElement.offsetTop <= scrollPos && (refElement.offsetTop + refElement.offsetHeight > scrollPos)) {
        currLink.classList.add('active');
      } else {
        currLink.classList.remove('active');
      }
    });
  }
  
  document.addEventListener('scroll', onScroll);

  //Per mentor correction: add smooth scrolling

function smoothScroll(){
  const anchorNav = document.getElementById('anchor');
  anchorNav.scrollIntoView({behavior: "smooth"})
};
navBarUl.addEventListener('click', smoothScroll());

const sec1 = document.getElementById("s1");
sec1.scrollIntoView({behavior: "smooth"});

const sec2 = document.getElementById("s2");
sec2.scrollIntoView({behavior: "smooth"});

const sec3 = document.getElementById("s3");
sec3.scrollIntoView({behavior: "smooth"});

const sec4 = document.getElementById("s4");
sec4.scrollIntoView({behavior: "smooth"});
