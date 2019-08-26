function linkBuilder(links) {
  return links
    .map(function linkHandler(link) {
      return `<li><a href="./${link.toLowerCase()}" data-navigo>${link}</a></li>`;
    })
    .join("");
}

export default state => `
<nav>
  <ul>
  ${linkBuilder(state.links.primary)}
  </ul>
</nav>
`;
