export default {
  displayName: 'Progress Bars',
  name: 'progress-bars',
  category: 'Elements',
  description: 'Native HTML progress bars',
  homepage: 'https://bulma.io/documentation/elements/progress',
};

export const variants = [
  {
    displayName: 'Basic',
    picture: {
      src: './pictures/progress-bar/basic.webp',
      width: 183,
      height: 12,
    },
    snippet: {
      html: `<progress class="progress" value="15" max="100"></progress>`,
    },
  },
  {
    displayName: 'Primary Color',
    picture: {
      src: './pictures/progress-bar/primary.webp',
      width: 183,
      height: 12,
    },
    snippet: {
      html: `<progress class="progress is-primary" value="15" max="100"></progress>`,
    },
  },
  {
    displayName: 'Link Color',
    picture: {
      src: './pictures/progress-bar/link.webp',
      width: 183,
      height: 12,
    },
    snippet: {
      html: `<progress class="progress is-link" value="30" max="100"></progress>`,
    },
  },
  {
    displayName: 'Info Color',
    picture: {
      src: './pictures/progress-bar/info.webp',
      width: 183,
      height: 12,
    },
    snippet: {
      html: `<progress class="progress is-info" value="45" max="100"></progress>`,
    },
  },
  {
    displayName: 'Success Color',
    picture: {
      src: './pictures/progress-bar/success.webp',
      width: 183,
      height: 12,
    },
    snippet: {
      html: `<progress class="progress is-success" value="60" max="100"></progress>`,
    },
  },
  {
    displayName: 'Warning Color',
    picture: {
      src: './pictures/progress-bar/warning.webp',
      width: 183,
      height: 12,
    },
    snippet: {
      html: `<progress class="progress is-warning" value="75" max="100"></progress>`,
    },
  },
  {
    displayName: 'Danger Color',
    picture: {
      src: './pictures/progress-bar/danger.webp',
      width: 183,
      height: 12,
    },
    snippet: {
      html: `<progress class="progress is-danger" value="90" max="100"></progress>`,
    },
  },
  {
    displayName: 'Small',
    picture: {
      src: './pictures/progress-bar/small.webp',
      width: 183,
      height: 9,
    },
    snippet: {
      html: `<progress class="progress is-small" value="15" max="100"></progress>`,
    },
  },
  {
    displayName: 'Medium',
    picture: {
      src: './pictures/progress-bar/medium.webp',
      width: 183,
      height: 15,
    },
    snippet: {
      html: `<progress class="progress is-medium" value="45" max="100"></progress>`,
    },
  },
  {
    displayName: 'Big',
    picture: {
      src: './pictures/progress-bar/big.webp',
      width: 183,
      height: 18,
    },
    snippet: {
      html: `<progress class="progress is-large" value="60" max="100">60%</progress>`,
    },
  },
  {
    displayName: 'Indeterminate',
    picture: {
      src: './pictures/progress-bar/indeterminate.webp',
      width: 183,
      height: 9,
    },
    snippet: {
      html: `<progress class="progress is-small is-primary" max="100"></progress>`,
    },
  },
];
