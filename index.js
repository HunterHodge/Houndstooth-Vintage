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
        name: "Plaid shirt",
        price: "$30.00",
        description: "A plaid shirt with inner lining by Karen Scott",
        imgs: "6f40965ae02e5f4d59389cedcfeec08c-large.jpg"
      },
      {
        id: "60",
        name: "Jacket",
        price: "$50.00",
        description: "A heavy green jacket with a swirly pattern",
        imgs: "601159ddcd58ee6bf2ebdf61ed997e6f-large.jpg"
      },
      {
        id: "d0",
        name: "Sweater",
        price: "$30.00",
        description:
          "A red sleeveless sweater with a logo on the right side of the chest",
        imgs: "d0ab37fc6366613390d25f55529b7f60-large.jpg"
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
