export default {
  displayName: 'Image',
  name: 'image',
  category: 'Elements',
  description: 'A container for responsive images',
  homepage: 'https://bulma.io/documentation/elements/image',
};

export const variants = [
  {
    displayName: '16x16',
    picture: {
      src: './pictures/image/16x16.webp',
      width: 16,
      height: 16,
    },
    snippet: {
      html: `
    <figure class="image is-16x16">
      <img src="https://bulma.io/images/placeholders/16x16.png">
    </figure>
    `,
    },
  },
  {
    displayName: '24x24',
    picture: {
      src: './pictures/image/24x24.webp',
      width: 24,
      height: 24,
    },
    snippet: {
      html: `
    <figure class="image is-24x24">
      <img src="https://bulma.io/images/placeholders/24x24.png">
    </figure>
    `,
    },
  },
  {
    displayName: '32x32',
    picture: {
      src: './pictures/image/32x32.webp',
      width: 32,
      height: 32,
    },
    snippet: {
      html: `
    <figure class="image is-32x32">
      <img src="https://bulma.io/images/placeholders/32x32.png">
    </figure>
    `,
    },
  },
  {
    displayName: '48x48',
    picture: {
      src: './pictures/image/48x48.webp',
      width: 48,
      height: 48,
    },
    snippet: {
      html: `
    <figure class="image is-48x48">
      <img src="https://bulma.io/images/placeholders/48x48.png">
    </figure>
    `,
    },
  },
  {
    displayName: '64x64',
    picture: {
      src: './pictures/image/64x64.webp',
      width: 64,
      height: 64,
    },
    snippet: {
      html: `
    <figure class="image is-64x64">
      <img src="https://bulma.io/images/placeholders/64x64.png">
    </figure>
    `,
    },
  },
  {
    displayName: '96x96',
    picture: {
      src: './pictures/image/96x96.webp',
      width: 96,
      height: 96,
    },
    snippet: {
      html: `
    <figure class="image is-96x96">
      <img src="https://bulma.io/images/placeholders/96x96.png">
    </figure>
    `,
    },
  },
  {
    displayName: '128x128',
    picture: {
      src: './pictures/image/128x128.webp',
      width: 128,
      height: 128,
    },
    snippet: {
      html: `
    <figure class="image is-128x128">
      <img src="https://bulma.io/images/placeholders/128x128.png">
    </figure>
    `,
    },
  },
  {
    displayName: 'Rounded 128x128',
    picture: {
      src: './pictures/image/rounded-128x128.webp',
      width: 128,
      height: 128,
    },
    snippet: {
      html: `
    <figure class="image is-128x128">
      <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
    </figure>`,
    },
  },
];
