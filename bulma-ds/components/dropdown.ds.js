export default {
  displayName: 'Dropdown',
  name: 'dropdown',
  category: 'Components',
  description: 'An interactive dropdown menu for discoverable content',
  homepage: 'https://bulma.io/documentation/elements/dropdown',
};

export const variants = [
  {
    displayName: 'Toggleable',
    picture: {
      src: './pictures/dropdown/toggleable.webp',
      width: 198,
      height: 179,
    },
    snippet: {
      html: `
    <div class="dropdown is-active">
      <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
          <span>Dropdown button</span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            Dropdown item
          </a>
          <a class="dropdown-item">
            Other dropdown item
          </a>
          <a href="#" class="dropdown-item is-active">
            Active dropdown item
          </a>
          <a href="#" class="dropdown-item">
            Other dropdown item
          </a>
          <hr class="dropdown-divider">
          <a href="#" class="dropdown-item">
            With a divider
          </a>
        </div>
      </div>
    </div>
    `,
    },
  },
  {
    displayName: 'Hoverable',
    picture: {
      src: './pictures/dropdown/hoverable.webp',
      width: 198,
      height: 30,
    },
    snippet: {
      html: `
      <div class="dropdown is-hoverable">
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
            <span>Hover me</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu4" role="menu">
          <div class="dropdown-content">
            <div class="dropdown-item">
              <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    },
  },
  {
    displayName: 'With any content',
    picture: {
      src: './pictures/dropdown/any-content.webp',
      width: 198,
      height: 174,
    },
    snippet: {
      html: `
    <div class="dropdown is-active">
      <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu2">
          <span>Content</span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu2" role="menu">
        <div class="dropdown-content">
          <div class="dropdown-item">
            <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
          </div>
          <hr class="dropdown-divider">
          <div class="dropdown-item">
            <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
          </div>
          <hr class="dropdown-divider">
          <a href="#" class="dropdown-item">
            This is a link
          </a>
        </div>
      </div>
    </div>
    `,
    },
  },
];
