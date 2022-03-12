function route() {
  const routes = [
    { path: "/", view: () => console.log("dashbor dpage") },
    { path: "/post", view: () => console.log("post page") },
    { path: "/products", view: () => console.log("products page") },
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
}

document.addEventListener("DOMContentLoaded", () => {
  route();
});
