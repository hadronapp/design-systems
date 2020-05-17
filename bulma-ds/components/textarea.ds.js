export default {
  name: 'textarea',
  displayName: 'Textarea',
  category: 'Form',
  description: 'The multiline textarea and its variations',
  homepage: 'https://bulma.io/documentation/form/textarea/',
};

export const variants = [
  {
    displayName: 'Basic',
    picture: {
      src: './pictures/textarea/basic.webp',
      width: 183,
      height: 70,
    },
    snippet: {
      html: `
      <textarea class="textarea" placeholder="e.g. Hello world"></textarea>
      `,
    },
  },
  {
    displayName: 'Colored: Primary',
    picture: {
      src: './pictures/textarea/primary.webp',
      width: 183,
      height: 70,
    },
    snippet: {
      html: `
      <textarea class="textarea is-primary" placeholder="Primary textarea"></textarea>
      `,
    },
  },
  {
    displayName: 'Small',
    picture: {
      src: './pictures/textarea/small.webp',
      width: 183,
      height: 70,
    },
    snippet: {
      html: `
      <textarea class="textarea is-small" placeholder="Small textarea"></textarea>
      `,
    },
  },
  {
    displayName: 'Large',
    picture: {
      src: './pictures/textarea/large.webp',
      width: 183,
      height: 70,
    },
    snippet: {
      html: `
      <textarea class="textarea is-large" placeholder="Large textarea"></textarea>
      `,
    },
  },
  {
    displayName: 'Fixed Size',
    picture: {
      src: './pictures/textarea/fixed-size.webp',
      width: 183,
      height: 70,
    },
    snippet: {
      html: `
      <textarea class="textarea has-fixed-size" placeholder="Fixed size textarea"></textarea>
      `,
    },
  },
];
