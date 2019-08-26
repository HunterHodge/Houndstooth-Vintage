function stockBuilder(stockItems){
    return stockItems.map((item) => {
        return `
        <div class='stockItem'>
            <a href="./stock/${item.id}data-navigo${item.id}">
                <figure><img src='http://images.pixieset.com/68114502/${item.id}-large.jpg'></figure>
                <div>
                    <h3>${item.name}</h3>
                    <h4>${item.price}</h4>
                    <p>${item.description}</p>
                </div>
            </a>
        </div>`;
    }).join('');
}

export default (state) => `
<main>
    ${stockBuilder(state.store)}
</main>
`;
