export default {
  displayName: 'Breadcrumb',
  name: 'breadcrumb',
  category: 'Components',
  description: 'A simple breadcrumb component to improve your navigation experience',
  homepage: 'https://bulma.io/documentation/elements/breadcrumb',
};

export const variants = [
  {
    displayName: 'Basic',
    picture: {
      src: './pictures/breadcrumb/basic.webp',
      width: 335,
      height: 24,
    },
    snippet: {
      html: `
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li><a href="#">Bulma</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Components</a></li>
          <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
        </ul>
      </nav>
      `,
    },
  },
  {
    displayName: 'With Icons',
    picture: {
      src: './pictures/breadcrumb/with-icons.webp',
      width: 407,
      height: 24,
    },
    snippet: {
      html: `
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <a href="#">
              <span class="icon is-small">
                <i class="fas fa-home" aria-hidden="true"></i>
              </span>
              <span>Bulma</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon is-small">
                <i class="fas fa-book" aria-hidden="true"></i>
              </span>
              <span>Documentation</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon is-small">
                <i class="fas fa-puzzle-piece" aria-hidden="true"></i>
              </span>
              <span>Components</span>
            </a>
          </li>
          <li class="is-active">
            <a href="#">
              <span class="icon is-small">
                <i class="fas fa-thumbs-up" aria-hidden="true"></i>
              </span>
              <span>Breadcrumb</span>
            </a>
          </li>
        </ul>
      </nav>
      `,
    },
  },
  {
    displayName: 'With Arrow separator',
    picture: {
      src: './pictures/breadcrumb/with-arrow-separator.webp',
      width: 361,
      height: 24,
    },
    snippet: {
      html: `
      <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
        <ul>
          <li><a href="#">Bulma</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Components</a></li>
          <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
        </ul>
      </nav>
      `,
    },
  },
];
