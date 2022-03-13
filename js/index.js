const toggler = document.querySelector(".toggler");
const sideBar = document.querySelector(".side__bar");
const iconToggler=document.querySelector(".icon__toggler")
toggler.addEventListener("click", () => {
  sideBar.classList.toggle("w-1/5");
  const classlist = [...sideBar.classList];
  console.log(classlist);
  if (classlist.includes("w-1/5")) {
    console.log("aaaaaaaaaaaaaaaaaa");
    sideBar.classList.remove("w-0");
  } else sideBar.classList.add("w-0");
  iconToggler.classList.toggle("rotate-180")
});
