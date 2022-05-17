const navBarUl = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

// build the nav using a loop

//Using a basic for loop to create new elements. The loop starts with the i in 1 and goes to 4 because there are 4 sections, and we are using te i to assing the number of section dynamically.
for (let i = 1; i <= 4; i++) {
  const newLi = document.createElement("li");
  newLi.className="navLi";
  //Create the anchor to refference the section we will want to go. The html will look like <li><a></a></li>
  const newA = document.createElement("a");
  //Adding the A (anchor) to the li
  newLi.appendChild(newA);
  //Adding the href so it links to the sections with the proper id
  newA.setAttribute("href", "#section" + i);
  newA.innerText = "Section " + i;
  newA.setAttribute('id','anchor');

  //appending everything to the nav bar
  navBarUl.appendChild(newLi);
}

// Add class 'active' to section when near top of viewport -> REFERENCED FROM KNOWLEDGE UDACITY https://knowledge.udacity.com/questions/85408#96950 it ltierally says we can use it for this specific project

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

//highlight active sections in grey or leave them with the default css
function makeActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    if (box.top <= 150 && box.bottom >= 150) {
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
  
//           // Highlight the current menu item by adding 'active' class
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
        //document.querySelector('#menu-center ul li a').classList.remove('active');
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
