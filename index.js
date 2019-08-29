import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import Navigo from "navigo";

const router = new Navigo(location.origin);

const sessionStorage = {
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
  ],
  cart: {}
};

const store = {
  home: {
    links: {
      primary: ["Home", "Cart"]
    },
    title: "Home"
  },
  cart: {
    links: {
      primary: ["Home", "Cart"]
    },
    title: "Cart"
  }
};

function render(state, data) {
  document.querySelector("#root").innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Main(state, data)}
    ${Footer(state)}
    `;

  router.updatePageLinks();

  if (document.querySelector(".stockItem")) {
    let stockItems = document.querySelectorAll(".stockItem");
    stockItems.forEach(i => {
      i.addEventListener("click", e => {
        e.preventDefault();
        const cartUpdate = e.target
          .closest("a")
          .getAttributeNode("href")
          .textContent.slice(-2);
        if (sessionStorage.cart.hasOwnProperty(cartUpdate)) {
          sessionStorage.cart[cartUpdate].count += 1;
        } else {
          sessionStorage.products.forEach(i => {
            if (i.id === cartUpdate) {
              sessionStorage.cart[cartUpdate] = {
                cost: i.price,
                name: i.name,
                count: 1
              };
            }
          });
        }
        console.log(sessionStorage);
      });
    });
  }
}

router
  .on(":view", params => {
    render(store[params.view], sessionStorage);
  })
  .on("/", () => {
    render(store.home, sessionStorage);
  })
  .notFound(render(store.home, sessionStorage))
  .resolve();
