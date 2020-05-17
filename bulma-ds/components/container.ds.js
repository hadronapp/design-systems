export default {
  name: 'container',
  displayName: 'Container',
  category: 'Layout',
  description: 'A simple container to center your content horizontally',
  homepage: 'https://bulma.io/documentation/layout/container',
};

export const variants = [
  {
    displayName: 'Centered',
    picture: {
      src: './pictures/container/centered.webp',
      width: 183,
      height: 62,
    },
    snippet: {
      html: `
      <div class="container">
        <div class="notification">
          This container is <strong>centered</strong> on desktop.
        </div>
      </div>
      `,
    },
  },
  {
    displayName: 'Fluid',
    picture: {
      src: './pictures/container/fluid.webp',
      width: 410,
      height: 62,
    },
    snippet: {
      html: `
      <div class="container is-fluid">
        <div class="notification">
          This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any
          viewport size.
        </div>
      </div>
      `,
    },
  },
  {
    displayName: 'Fluid until widescreen',
    picture: {
      src: './pictures/container/fluid-until-widescreen.webp',
      width: 183,
      height: 79,
    },
    snippet: {
      html: `
      <div class="container is-widescreen">
        <div class="notification">
          This container is <strong>fullwidth</strong> <em>until</em> the <code>$widescreen</code> breakpoint.
        </div>
      </div>
      `,
    },
  },
  {
    displayName: 'Fluid until full-hd',
    picture: {
      src: './pictures/container/fluid-until-fullhd.webp',
      width: 183,
      height: 79,
    },
    snippet: {
      html: `
      <div class="container is-fullhd">
        <div class="notification">
          This container is <strong>fullwidth</strong> <em>until</em> the <code>$fullhd</code> breakpoint.
        </div>
      </div>
      `,
    },
  },
];
