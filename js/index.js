
const toggler = document.querySelector(".toggler");
const sideBar = document.querySelector(".side__bar");
const btn = document.querySelector(".btn");
const iconToggler = document.querySelector(".icon__toggler");
toggler.addEventListener("click", () => {
  sideBar.classList.toggle("w-1/5");
  iconToggler.classList.toggle("rotate-180");

  const classlist = [...sideBar.classList];
  console.log(classlist);
  if (classlist.includes("w-1/5")) {
    console.log("aaaaaaaaaaaaaaaaaa");
    sideBar.classList.remove("w-0");
  } else sideBar.classList.add("w-0");
});

btn.addEventListener("click", getData);

function getData() {
  fetch("https://reqres.in/api/users",{method:"GET"}).then((respans) => {
    return respans.json();
  }).then(data=>console.log(data))
}
