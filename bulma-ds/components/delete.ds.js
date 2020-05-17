export default {
  displayName: 'Delete',
  name: 'delete',
  category: 'Elements',
  description: 'A versatile delete cross',
  homepage: 'https://bulma.io/documentation/elements/delete',
};

export const variants = [
  {
    displayName: 'Normal',
    picture: {
      src: './pictures/delete/normal.webp',
      width: 20,
      height: 20,
    },
    snippet: {
      html: `<a class="delete"></a>`,
    },
  },
  {
    displayName: 'Small',
    picture: {
      src: './pictures/delete/small.webp',
      width: 16,
      height: 16,
    },
    snippet: {
      html: `<a class="delete is-small"></a>`,
    },
  },
  {
    displayName: 'Medium',
    picture: {
      src: './pictures/delete/medium.webp',
      width: 24,
      height: 24,
    },
    snippet: {
      html: `<a class="delete is-medium"></a>`,
    },
  },
  {
    displayName: 'Large',
    picture: {
      src: './pictures/delete/large.webp',
      width: 32,
      height: 32,
    },
    snippet: {
      html: `<a class="delete is-large"></a>`,
    },
  },
];
