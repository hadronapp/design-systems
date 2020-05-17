export default {
  displayName: 'Pagination',
  name: 'pagination',
  category: 'Components',
  description: 'A responsive, usable, and flexible pagination',
  homepage: 'https://bulma.io/documentation/elements/pagination',
};

export const variants = [
  {
    displayName: 'List on left',
    picture: {
      src: './pictures/pagination/list-left.webp',
      width: 400,
      height: 31,
    },
    snippet: {
      html: `
    <nav class="pagination" role="navigation" aria-label="pagination">
      <a class="pagination-previous">Previous</a>
      <a class="pagination-next">Next page</a>
      <ul class="pagination-list">
        <li>
          <a class="pagination-link" aria-label="Goto page 1">1</a>
        </li>
        <li>
          <span class="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <a class="pagination-link" aria-label="Goto page 45">45</a>
        </li>
        <li>
          <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
        </li>
        <li>
          <a class="pagination-link" aria-label="Goto page 47">47</a>
        </li>
        <li>
          <span class="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <a class="pagination-link" aria-label="Goto page 86">86</a>
        </li>
      </ul>
    </nav>
    `,
    },
  },
  {
    displayName: 'List centered',
    picture: {
      src: './pictures/pagination/list-centered.webp',
      width: 400,
      height: 31,
    },
    snippet: {
      html: `
    <nav class="pagination is-centered" role="navigation" aria-label="pagination">
      <a class="pagination-previous">Previous</a>
      <a class="pagination-next">Next page</a>
      <ul class="pagination-list">
        <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
        <li><span class="pagination-ellipsis">&hellip;</span></li>
        <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
        <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
        <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
        <li><span class="pagination-ellipsis">&hellip;</span></li>
        <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
      </ul>
    </nav>
    `,
    },
  },
  {
    displayName: 'Rounded buttons',
    picture: {
      src: './pictures/pagination/rounded-buttons.webp',
      width: 400,
      height: 31,
    },
    snippet: {
      html: `
    <nav class="pagination is-rounded" role="navigation" aria-label="pagination">
      <a class="pagination-previous">Previous</a>
      <a class="pagination-next">Next page</a>
      <ul class="pagination-list">
        <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
        <li><span class="pagination-ellipsis">&hellip;</span></li>
        <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
        <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
        <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
        <li><span class="pagination-ellipsis">&hellip;</span></li>
        <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
      </ul>
    </nav>
    `,
    },
  },
  {
    displayName: 'Small',
    picture: {
      src: './pictures/pagination/size-small.webp',
      width: 400,
      height: 29,
    },
    snippet: {
      html: `
    <nav class="pagination is-small" role="navigation" aria-label="pagination">
      <a class="pagination-previous">Previous</a>
      <a class="pagination-next">Next page</a>
      <ul class="pagination-list">
        <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
        <li><span class="pagination-ellipsis">&hellip;</span></li>
        <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
        <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
        <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
        <li><span class="pagination-ellipsis">&hellip;</span></li>
        <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
      </ul>
    </nav>
    `,
    },
  },
];
