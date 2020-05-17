export default {
  displayName: 'Button',
  name: 'button',
  category: 'Elements',
  description: 'The classic button, in different colors, sizes, and states.',
  homepage: 'https://bulma.io/documentation/elements/button',
};

export const variants = [
  {
    displayName: 'Normal',
    picture: {
      src: './pictures/button/normal.webp',
      width: 65,
      height: 30,
    },
    snippet: {
      html: `<button class="button">Button</button>`,
    },
  },
  {
    displayName: 'Primary',
    picture: {
      src: './pictures/button/primary.webp',
      width: 69,
      height: 30,
    },
    snippet: {
      html: `
      <button class="button is-primary">Primary</button>
    `,
    },
  },
  {
    displayName: 'Link',
    picture: {
      src: './pictures/button/link.webp',
      width: 49,
      height: 30,
    },
    snippet: {
      html: `
      <button class="button is-link">Link</button>
    `,
    },
  },
  {
    displayName: 'White',
    picture: {
      src: './pictures/button/white.webp',
      width: 59,
      height: 30,
    },
    snippet: {
      html: `
      <button class="button is-white">White</button>
    `,
    },
  },
  {
    displayName: 'Light',
    picture: {
      src: './pictures/button/light.webp',
      width: 54,
      height: 30,
    },
    snippet: {
      html: `
      <button class="button is-light">Light</button>
    `,
    },
  },
  {
    displayName: 'Dark',
    picture: {
      src: './pictures/button/dark.webp',
      width: 52,
      height: 30,
    },
    snippet: {
      html: `
      <button class="button is-dark">Dark</button>
    `,
    },
  },
  {
    displayName: 'Black',
    picture: {
      src: './pictures/button/black.webp',
      width: 56,
      height: 30,
    },
    snippet: {
      html: `
      <button class="button is-black">Black</button>
    `,
    },
  },
  {
    displayName: 'Text',
    picture: {
      src: './pictures/button/text.webp',
      width: 50,
      height: 30,
    },
    snippet: {
      html: `
      <button class="button is-text">Text</button>
    `,
    },
  },
  {
    displayName: 'Primary Light',
    picture: {
      src: './pictures/button/primary-light.webp',
      width: 69,
      height: 30,
    },
    snippet: {
      html: `
      <button class="button is-primary is-light">Primary</button>
    `,
    },
  },
  {
    displayName: 'Link Light',
    picture: {
      src: './pictures/button/link-light.webp',
      width: 49,
      height: 30,
    },
    snippet: {
      html: `
      <button class="button is-link is-light">Link</button>
    `,
    },
  },
  {
    displayName: 'Outlined',
    picture: {
      src: './pictures/button/outline.webp',
      width: 75,
      height: 30,
    },
    snippet: {
      html: `
      <button class="button is-outlined">Outlined</button>
    `,
    },
  },
  {
    displayName: 'Outlined Primary',
    picture: {
      src: './pictures/button/outline-primary.webp',
      width: 75,
      height: 30,
    },
    snippet: {
      html: `
      <button class="button is-primary is-outlined">Outlined</button>
    `,
    },
  },
  {
    displayName: 'Rounded',
    picture: {
      src: './pictures/button/rounded.webp',
      width: 82,
      height: 30,
    },
    snippet: {
      html: `
      <button class="button is-rounded">Rounded</button>
    `,
    },
  },
  {
    displayName: 'Rounded Primary',
    picture: {
      src: './pictures/button/rounded-primary.webp',
      width: 127,
      height: 30,
    },
    snippet: {
      html: `
      <button class="button is-primary is-rounded">Rounded Primary</button>
    `,
    },
  },
  {
    displayName: 'Group',
    picture: {
      src: './pictures/button/group.webp',
      width: 268,
      height: 30,
    },
    snippet: {
      html: `
      <div class="field is-grouped">
        <p class="control">
          <button class="button is-link">
            Save changes
          </button>
        </p>
        <p class="control">
          <button class="button">
            Cancel
          </button>
        </p>
        <p class="control">
          <button class="button is-danger">
            Delete post
          </button>
        </p>
      </div>
    `,
    },
  },
  {
    displayName: 'Full Width',
    picture: {
      src: './pictures/button/full-width.webp',
      width: 183,
      height: 30,
    },
    snippet: {
      html: `
      <button class="button is-fullwidth">Normal</button>
    `,
    },
  },
  {
    displayName: 'With Icon',
    picture: {
      src: './pictures/button/with-icon.webp',
      width: 89,
      height: 30,
    },
    snippet: {
      html: `
      <button class="button is-primary">
        <span class="icon">
          <i class="fab fa-twitter"></i>
        </span>
        <span>@jgthms</span>
      </button>
    `,
    },
  },
  {
    displayName: 'With Right Icon',
    picture: {
      src: './pictures/button/with-right-icon.webp',
      width: 77,
      height: 30,
    },
    snippet: {
      html: `
      <button class="button is-danger is-outlined">
        <span>Delete</span>
        <span class="icon is-small">
          <i class="fas fa-times"></i>
        </span>
      </button>
    `,
    },
  },
  {
    displayName: 'Icon Only',
    picture: {
      src: './pictures/button/only-icon.webp',
      width: 30,
      height: 30,
    },
    snippet: {
      html: `
      <button class="button">
        <span class="icon is-small">
          <i class="fas fa-bold"></i>
        </span>
      </button>
    `,
    },
  },
  {
    displayName: 'Button Addons',
    picture: {
      src: './pictures/button/button-addons.webp',
      width: 206,
      height: 30,
    },
    snippet: {
      html: `
      <div class="field has-addons">
        <p class="control">
          <button class="button">
            <span class="icon is-small">
              <i class="fas fa-align-left"></i>
            </span>
            <span>Left</span>
          </button>
        </p>
        <p class="control">
          <button class="button">
            <span class="icon is-small">
              <i class="fas fa-align-center"></i>
            </span>
            <span>Center</span>
          </button>
        </p>
        <p class="control">
          <button class="button">
            <span class="icon is-small">
              <i class="fas fa-align-right"></i>
            </span>
            <span>Right</span>
          </button>
        </p>
      </div>
    `,
    },
  },
  {
    displayName: 'List of Buttons',
    picture: {
      src: './pictures/button/list-of-buttons.webp',
      width: 271,
      height: 36,
    },
    snippet: {
      html: `
      <div class="buttons">
        <button class="button is-info">Info</button>
        <button class="button is-success">Success</button>
        <button class="button is-warning">Warning</button>
        <button class="button is-danger">Danger</button>
      </div>
    `,
    },
  },
];
