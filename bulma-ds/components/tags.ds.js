export default {
  displayName: 'Tags',
  name: 'tags',
  category: 'Elements',
  description: 'Small tag labels to insert anywhere',
  homepage: 'https://bulma.io/documentation/elements/tag',
};

export const variants = [
  {
    displayName: 'Black',
    picture: {
      src: './pictures/tags/black.webp',
      width: 36,
      height: 18,
    },
    snippet: {
      html: `<span class="tag is-black">Black</span>`,
    },
  },
  {
    displayName: 'Dark',
    picture: {
      src: './pictures/tags/dark.webp',
      width: 33,
      height: 18,
    },
    snippet: {
      html: `<span class="tag is-dark">Dark</span>`,
    },
  },
  {
    displayName: 'Light',
    picture: {
      src: './pictures/tags/light.webp',
      width: 34,
      height: 18,
    },
    snippet: {
      html: `<span class="tag is-light">Light</span>`,
    },
  },
  {
    displayName: 'White',
    picture: {
      src: './pictures/tags/white.webp',
      width: 37,
      height: 18,
    },
    snippet: {
      html: `<span class="tag is-white">White</span>`,
    },
  },
  {
    displayName: 'Primary',
    picture: {
      src: './pictures/tags/primary.webp',
      width: 45,
      height: 18,
    },
    snippet: {
      html: `<span class="tag is-primary">Primary</span>`,
    },
  },
  {
    displayName: 'Link',
    picture: {
      src: './pictures/tags/link.webp',
      width: 30,
      height: 18,
    },
    snippet: {
      html: `<span class="tag is-link">Link</span>`,
    },
  },
  {
    displayName: 'Info',
    picture: {
      src: './pictures/tags/info.webp',
      width: 29,
      height: 18,
    },
    snippet: {
      html: `<span class="tag is-info">Info</span>`,
    },
  },
  {
    displayName: 'Success',
    picture: {
      src: './pictures/tags/success.webp',
      width: 48,
      height: 18,
    },
    snippet: {
      html: `<span class="tag is-success">Success</span>`,
    },
  },
  {
    displayName: 'Warning',
    picture: {
      src: './pictures/tags/warning.webp',
      width: 47,
      height: 18,
    },
    snippet: {
      html: `<span class="tag is-warning">Warning</span>`,
    },
  },
  {
    displayName: 'Danger',
    picture: {
      src: './pictures/tags/danger.webp',
      width: 44,
      height: 18,
    },
    snippet: {
      html: `<span class="tag is-danger">Danger</span>`,
    },
  },
  {
    displayName: 'Light Version: Primary',
    picture: {
      src: './pictures/tags/light-primary.webp',
      width: 45,
      height: 18,
    },
    snippet: {
      html: `<span class="tag is-primary is-light">Primary</span>`,
    },
  },
  {
    displayName: 'Light Version: Link',
    picture: {
      src: './pictures/tags/light-link.webp',
      width: 30,
      height: 18,
    },
    snippet: {
      html: `<span class="tag is-link is-light">Link</span>`,
    },
  },
  {
    displayName: 'Size Normal',
    picture: {
      src: './pictures/tags/size-normal.webp',
      width: 43,
      height: 18,
    },
    snippet: {
      html: `<span class="tag is-link is-normal">Normal</span>`,
    },
  },
  {
    displayName: 'Size Medium',
    picture: {
      src: './pictures/tags/size-medium.webp',
      width: 61,
      height: 24,
    },
    snippet: {
      html: `<span class="tag is-primary is-medium">Medium</span>`,
    },
  },
  {
    displayName: 'Size Large',
    picture: {
      src: './pictures/tags/size-large.webp',
      width: 61,
      height: 30,
    },
    snippet: {
      html: `<span class="tag is-info is-large">Large</span>`,
    },
  },
  {
    displayName: 'Rounded',
    picture: {
      src: './pictures/tags/rounded.webp',
      width: 51,
      height: 18,
    },
    snippet: {
      html: `<span class="tag is-rounded">Rounded</span>`,
    },
  },
  {
    displayName: 'Combination: With Delete button',
    picture: {
      src: './pictures/tags/combination-delete.webp',
      width: 60,
      height: 24,
    },
    snippet: {
      html: `
      <span class="tag is-warning is-medium">
        Hello
        <button class="delete is-small"></button>
      </span>`,
    },
  },
  {
    displayName: 'List',
    picture: {
      src: './pictures/tags/list.webp',
      width: 110,
      height: 24,
    },
    snippet: {
      html: `
    <div class="tags">
      <span class="tag">One</span>
      <span class="tag">Two</span>
      <span class="tag">Three</span>
    </div>
    `,
    },
  },
  {
    displayName: 'Attached Tags List',
    picture: {
      src: './pictures/tags/attached-tags-list.webp',
      width: 88,
      height: 24,
    },
    snippet: {
      html: `
    <div class="tags has-addons">
      <span class="tag">Package</span>
      <span class="tag is-primary">Bulma</span>
    </div>
    `,
    },
  },
  {
    displayName: 'Attached Tag Containers',
    picture: {
      src: './pictures/tags/attached-tag-containers.webp',
      width: 138,
      height: 27,
    },
    snippet: {
      html: `
    <div class="field is-grouped is-grouped-multiline">
      <div class="control">
        <div class="tags has-addons">
          <span class="tag is-dark">npm</span>
          <span class="tag is-info">0.7.0</span>
        </div>
      </div>

      <div class="control">
        <div class="tags has-addons">
          <span class="tag is-dark">build</span>
          <span class="tag is-success">passing</span>
        </div>
      </div>

      <div class="control">
        <div class="tags has-addons">
          <span class="tag is-dark">chat</span>
          <span class="tag is-primary">on gitter</span>
        </div>
      </div>
    </div>
    `,
    },
  },
];
