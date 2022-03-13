import Dashbord from "./pages/Dashbord.js";
import Post from "./pages/Post.js";
import Product from "./pages/Product.js";
function route() {
  const routes = [
    { path: "/", view: () => Dashbord() },
    { path: "/post", view: () => Post() },
    { path: "/products", view: () => Product() },
  ];
  const potentialRoters = routes.map((itme) => {
    return {
      route: itme,
      ismatch: location.pathname === itme.path,
    };
  });

  // get ismatch=true
  const match = potentialRoters.find((route) => route.ismatch);
  console.log(match.route.view());
  // if not match
  if (!match) {
    match = {
      route: { path: "/not-found", view: () => console.log("not-found page") },
    };
  }
  document.querySelector("#app").innerHTML = match.route.view();
}

function navGtion(url) {
  history.pushState("", "", url);
  route();
}
window.addEventListener("popstate", route());

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.hasAttribute("href")) {
      e.preventDefault();
      console.log(e.target.href)
      navGtion(e.target.href);
    }
  });
  route();
});
