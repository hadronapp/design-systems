export default {
  displayName: 'Columns',
  name: 'columns',
  description: 'A simple way to build responsive columns',
  homepage: 'https://bulma.io/documentation/columns/basics',
};

export const variants = [
  {
    displayName: '2 columns',
    picture: {
      src: './pictures/columns/2-columns.webp',
      width: 300,
      height: 36,
    },
    snippet: {
      html: `
      <div class="columns">
        <div class="column">
          First column
        </div>
        <div class="column">
          Second column
        </div>
      </div>
    `,
    },
  },
  {
    displayName: '3 columns',
    picture: {
      src: './pictures/columns/3-columns.webp',
      width: 800,
      height: 36,
    },
    snippet: {
      html: `
      <div class="columns">
        <div class="column">
          First column
        </div>
        <div class="column">
          Second column
        </div>
        <div class="column">
          Third column
        </div>
      </div>
    `,
    },
  },
  {
    displayName: '4 columns',
    picture: {
      src: './pictures/columns/4-columns.webp',
      width: 800,
      height: 36,
    },
    snippet: {
      html: `
      <div class="columns">
        <div class="column">
          First column
        </div>
        <div class="column">
          Second column
        </div>
        <div class="column">
          Third column
        </div>
        <div class="column">
          Fourth column
        </div>
      </div>
    `,
    },
  },
  {
    displayName: 'Narrow Column',
    picture: {
      src: './pictures/columns/narrow-column.webp',
      width: 800,
      height: 103,
    },
    snippet: {
      html: `
      <div class="columns">
        <div class="column is-narrow">
          <div class="box" style="width: 200px;">
            <p class="title is-5">Narrow column</p>
            <p class="subtitle">This column is only 200px wide.</p>
          </div>
        </div>
        <div class="column">
          <div class="box">
            <p class="title is-5">Flexible column</p>
            <p class="subtitle">This column will take up the remaining space available.</p>
          </div>
        </div>
      </div>
      `,
    },
  },
  {
    displayName: 'Full column',
    picture: {
      src: './pictures/columns/full-column.webp',
      width: 800,
      height: 63,
    },
    snippet: {
      html: `
      <div class="columns">
        <div class="column is-full">
          <p class="notification is-primary">
            <code class="html">is-full</code>
          </p>
        </div>
      </div>
      `,
    },
  },
  {
    displayName: 'Four Fifths',
    picture: {
      src: './pictures/columns/four-fifths.webp',
      width: 800,
      height: 66,
    },
    snippet: {
      html: `
      <div class="columns">
        <div class="column is-four-fifths">
          <p class="notification is-primary">
            <code class="html">is-four-fifths</code>
          </p>
        </div>
        <div class="column">
          <p class="notification">Auto</p>
        </div>
        <div class="column">
          <p class="notification">Auto</p>
        </div>
      </div>
      `,
    },
  },
  {
    displayName: 'Three quarters',
    picture: {
      src: './pictures/columns/three-quarters.webp',
      width: 800,
      height: 66,
    },
    snippet: {
      html: `
      <div class="columns">
        <div class="column is-three-quarters">
          <p class="notification is-primary">
            <code class="html">is-three-quarters</code>
          </p>
        </div>
        <div class="column">
          <p class="notification">Auto</p>
        </div>
        <div class="column">
          <p class="notification">Auto</p>
        </div>
      </div>
      `,
    },
  },
  {
    displayName: 'Two thirds',
    picture: {
      src: './pictures/columns/two-thirds.webp',
      width: 800,
      height: 66,
    },
    snippet: {
      html: `
      <div class="columns">
        <div class="column is-two-thirds">
          <p class="notification is-primary">
            <code class="html">is-two-thirds</code>
          </p>
        </div>
        <div class="column">
          <p class="notification">Auto</p>
        </div>
        <div class="column">
          <p class="notification">Auto</p>
        </div>
      </div>
      `,
    },
  },
  {
    displayName: 'Three fifths',
    picture: {
      src: './pictures/columns/three-fifths.webp',
      width: 800,
      height: 66,
    },
    snippet: {
      html: `
      <div class="columns">
        <div class="column is-three-fifths">
          <p class="notification is-primary">
            <code class="html">is-three-fifths</code>
          </p>
        </div>
        <div class="column">
          <p class="notification">Auto</p>
        </div>
        <div class="column">
          <p class="notification">Auto</p>
        </div>
      </div>
      `,
    },
  },
  {
    displayName: 'Is Half',
    picture: {
      src: './pictures/columns/is-half.webp',
      width: 800,
      height: 66,
    },
    snippet: {
      html: `
      <div class="columns">
        <div class="column is-half">
          <p class="notification is-primary">
            <code class="html">is-half</code>
          </p>
        </div>
        <div class="column">
          <p class="notification">Auto</p>
        </div>
        <div class="column">
          <p class="notification">Auto</p>
        </div>
      </div>
      `,
    },
  },
  {
    displayName: 'Two Fifths',
    picture: {
      src: './pictures/columns/two-fifths.webp',
      width: 800,
      height: 66,
    },
    snippet: {
      html: `
      <div class="columns">
        <div class="column is-two-fifths">
          <p class="notification is-primary">
            <code class="html">is-two-fifths</code>
          </p>
        </div>
        <div class="column">
          <p class="notification">Auto</p>
        </div>
        <div class="column">
          <p class="notification">Auto</p>
        </div>
      </div>
      `,
    },
  },
  {
    displayName: 'One third',
    picture: {
      src: './pictures/columns/one-third.webp',
      width: 800,
      height: 66,
    },
    snippet: {
      html: `
      <div class="columns">
        <div class="column is-one-third">
          <p class="notification is-primary">
            <code class="html">is-one-third</code>
          </p>
        </div>
        <div class="column">
          <p class="notification">Auto</p>
        </div>
        <div class="column">
          <p class="notification">Auto</p>
        </div>
      </div>
      `,
    },
  },
  {
    displayName: 'One quarter',
    picture: {
      src: './pictures/columns/one-quarter.webp',
      width: 800,
      height: 66,
    },
    snippet: {
      html: `
      <div class="columns">
        <div class="column is-one-quarter">
          <p class="notification is-primary">
            <code class="html">is-one-quarter</code>
          </p>
        </div>
        <div class="column">
          <p class="notification">Auto</p>
        </div>
        <div class="column">
          <p class="notification">Auto</p>
        </div>
      </div>
      `,
    },
  },
  {
    displayName: 'One fifth',
    picture: {
      src: './pictures/columns/one-fifth.webp',
      width: 800,
      height: 66,
    },
    snippet: {
      html: `
      <div class="columns">
        <div class="column is-one-fifth">
          <p class="notification is-primary">
            <code class="html">is-one-fifth</code>
          </p>
        </div>
        <div class="column">
          <p class="notification">Auto</p>
        </div>
        <div class="column">
          <p class="notification">Auto</p>
        </div>
      </div>
      `,
    },
  },
  {
    displayName: 'Columns on mobile too',
    picture: {
      src: './pictures/columns/mobile-too.webp',
      width: 198,
      height: 36,
    },
    snippet: {
      html: `
      <div class="columns is-mobile">
        <div class="column">1</div>
        <div class="column">2</div>
        <div class="column">3</div>
        <div class="column">4</div>
      </div>
      `,
    },
  },
  {
    displayName: 'Columns on desktop upwards',
    picture: {
      src: './pictures/columns/desktop-upward.webp',
      width: 110,
      height: 36,
    },
    snippet: {
      html: `
      <div class="columns is-desktop">
        <div class="column">1</div>
        <div class="column">2</div>
        <div class="column">3</div>
        <div class="column">4</div>
      </div>
      `,
    },
  },
  {
    displayName: 'Nested columns',
    picture: {
      src: './pictures/columns/nested-columns.webp',
      width: 720,
      height: 150,
    },
    snippet: {
      html: `
      <div class="columns">
        <div class="column">
          <p class="notification is-info">First column</p>
          <div class="columns is-mobile">
            <div class="column">
              <p class="notification is-info">First nested column</p>
            </div>
            <div class="column">
              <p class="notification is-info">Second nested column</p>
            </div>
          </div>
        </div>
        <div class="column">
          <p class="notification is-danger">Second column</p>
          <div class="columns is-mobile">
            <div class="column is-half">
              <p class="notification is-danger">50%</p>
            </div>
            <div class="column">
              <p class="notification is-danger">Auto</p>
            </div>
            <div class="column">
              <p class="notification is-danger">Auto</p>
            </div>
          </div>
        </div>
      </div>
      `,
    },
  },
  {
    displayName: 'A centered column',
    picture: {
      src: './pictures/columns/a-center-column.webp',
      width: 800,
      height: 66,
    },
    snippet: {
      html: `
      <div class="columns is-mobile is-centered">
        <div class="column is-half">
          <p class="notification is-primary">
            <code class="html">is-half</code><br>
          </p>
        </div>
      </div>
      `,
    },
  },
];
