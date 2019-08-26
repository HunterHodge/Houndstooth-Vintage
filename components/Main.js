function stockBuilder(stockItems){
    return stockItems.map((item) => {
        return `
        <div class='stockItem'>
            <a href="./stock/${item.Id}data-navigo${item.Id}>
                <div><img src='http://images.pixieset.com/68114502/${item.image}-large.jpg></div>
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
    ${stockBuilder(state.products)}
</main>
`;
