function roter() {
  const roters = [
    { path: "/", view: console.log("aaaaa") },
    { path: "/post", view: console.log("aaaaa") },
    { path: "/products", view: console.log("aaaaa") },
  ];
  const potentialRoters = roters.map((itme) => {
    return {
      rout: itme,
      ismatch: location.pathname === itme.path,
    };
  });
  console.log(potentialRoters);
}
roter();
