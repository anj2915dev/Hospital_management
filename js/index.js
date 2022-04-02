const toggler = document.querySelector(".toggler");
const sideBar = document.querySelector(".side__bar");
const btn = document.querySelector(".btn");
const iconToggler = document.querySelector(".icon__toggler");
const down = document.querySelectorAll(".bx");
const itemMenu = document.querySelectorAll(".item__menu");
const iconDown = document.querySelectorAll(".icon__down");
const toglerMenu = document.querySelectorAll(".togller__menu");
const iconMenu = document.querySelectorAll(".icon__menu");
const toltip__menu = document.querySelector(".toltip__menu");

// togller sideBar
toggler.addEventListener("click", () => {
  sideBar.classList.toggle("sm:w-20");
  sideBar.classList.toggle("w-full");
  sideBar.classList.toggle("w-0");
  sideBar.classList.toggle("px-5");

  iconToggler.classList.toggle("rotate-[130deg]");
  iconToggler.classList.toggle("-rotate-45");

  toglerMenu.forEach((t) => {
    t.classList.toggle("hidd__item");
  });
  iconMenu.forEach((element) => element.classList.toggle("icon__size"));
  const classlist = [...sideBar.classList];
  console.log(classlist);
});
let i;

function colorLink() {
  itemMenu.forEach((l) => l.classList.remove("activ"));
  console.log(this.children.length);

  this.classList.add("activ");
  iconDown.forEach((i) => {
   
      i.classList.remove("rotate-180");
      this.children[0].children[0].classList.add("rotate-180");
    
  });

  console.log(this.children[0]);
  itemMenu.forEach((l) => {
    if (l.children.length != 1) {
      l.children[1].classList.remove("show");
      this.children[1].classList.add("show");
    }
  });
 
}
itemMenu.forEach((item) => item.addEventListener("click", colorLink));

toggler.addEventListener(
  "mouseover",
  (event) => {
    toltip__menu.classList.add("showToltip");
    toltip__menu.classList.add("acrivToltip");
    toltip__menu.classList.add("hidden");

    setTimeout(function () {
      toltip__menu.classList.remove("showToltip");
      toltip__menu.classList.remove("acrivToltip");
      toltip__menu.classList.remove("hidden");
    }, 500);
  },
  false
);
