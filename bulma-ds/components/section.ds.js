export default {
  name: 'section',
  displayName: 'Section',
  category: 'Layout',
  description: 'A simple container to divide your page into sections',
  homepage: 'https://bulma.io/documentation/layout/section',
};

export const variants = [
  {
    displayName: 'Basic',
    picture: {
      src: './pictures/section/basic.webp',
      width: 183,
      height: 116,
    },
    snippet: {
      html: `
      <section class="section">
        <div class="container">
          <h1 class="title">Section</h1>
          <h2 class="subtitle">
            Use sections as direct children of body.
          </h2>
        </div>
      </section>
      `,
    },
  },
];
