const navBarUl = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

// build the nav using a loop
//Using a basic for loop to create new elements from 1 to 4 (because there are 4 sections).
for (let i = 1; i <= 4; i++) {
  const newLi = document.createElement("li");
  //Create the A so the html looks like <li><a></a></li>
  const newA = document.createElement("a");
  //Adding the A to the li
  newLi.appendChild(newA);
  //Adding the href so it links to the sections with the id
  newA.setAttribute("href", "#section" + i);
  newA.innerText = "Section " + i;
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

