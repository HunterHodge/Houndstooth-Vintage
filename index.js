import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import Navigo from "navigo";

const router = new Navigo(location.origin);

const store = {
  home: {
    links: {
      primary: ["Home"]
    },
    title: "Home",
    products: [
      {
        id: "6f",
        name: "Karen Scott",
        price: "$30.00",
        description: "lorem ipsum dolor sit amet consectiur adpecing elit",
        imgs: "6f.jpg"
      },
      {
        id: "60",
        name: "Jacket",
        price: "$50.00",
        description: "filler text",
        imgs: "60.jpg"
      }
    ]
  }
};

function render(state) {
  document.querySelector("#root").innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Main(state)}
    ${Footer(state)}
    `;

  router.updatePageLinks();
}

router
  .on(":view", params => {
    render(store[params.view]);
  })
  .on("/", () => {
    render(store.home);
  })
  .resolve();
