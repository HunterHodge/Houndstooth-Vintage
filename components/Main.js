function stockBuilder(stockItems) {
  return stockItems
    .map(item => {
      return `
        <div class='stockItem'>
            <a href="./stock/${item.id}" data-navigo>
                <figure><img src="http://images.pixieset.com/68114502/${item.imgs}"></figure>
                <div>
                    <h3>${item.name}</h3>
                    <h4>${item.price}</h4>
                    <p>${item.description}</p>
                </div>
            </a>
        </div>`;
    })
    .join("");
}

function listCart(cart) {
  let ret = "";
  Object.keys(cart).forEach(item => {
    const obj = cart[item];
    console.log(obj);
    ret =
      ret +
      `
    <div class = "cartItem">
      <div>${obj.name}</div>
      <div>${obj.count}</div>
      <div>\$${multCost(obj.cost, obj.count)}</div>
    </div>
    `;
  });
  return ret;
  function multCost(cost, count) {
    return parseInt(cost.slice(1)) * count;
  }
}

export default (state, data) => {
  switch (state.title) {
    case "Home":
      return `
    <main>
        ${stockBuilder(data.products)}
    </main>
    `;
    case "Cart":
      return `
    <main>
        ${listCart(data.cart)}
    </main>
    `;
  }
};
