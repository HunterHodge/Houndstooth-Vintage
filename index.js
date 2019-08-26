import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import Navigo from "navigo";

const router = new Navigo(location.origin);

const store = {
<<<<<<< HEAD
    'home': {
        'links': {
            'primary': [ 'Home' ]
        },
        'title': 'Home',
        'store': [
            {
                'id': '6f40965ae02e5f4d59389cedcfeec08c',
                'name': 'Karen Scott',
                'price': '$30.00',
                'description': 'lorem ipsum dolor sit amet consectiur adpecing elit'
            },
            {
                'id': '601159ddcd58ee6bf2ebdf61ed997e6f',
                'name': 'Jacket',
                'price': '$50.00',
                'description': 'filler text'
            }
        ]
    }
=======
  home: {
    links: {
      primary: ["Home"]
    },
    title: "Home",
    products: [
      {
        Id: "6f40965ae02e5f4d59389cedcfeec08c",
        name: "Karen Scott",
        price: "$30.00",
        description: "lorem ipsum dolor sit amet consectiur adpecing elit"
      },
      {
        Id: "601159ddcd58ee6bf2ebdf61ed997e6f",
        name: "Jacket",
        price: "$50.00",
        description: "filler text"
      }
    ]
  }
>>>>>>> 0a9b6f5c0fa16dff3285d4233bc02c143fa9a7ad
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
