export default {
  displayName: 'Panel',
  name: 'panel',
  category: 'Components',
  description: 'A composable panel, for compact controls',
  homepage: 'https://bulma.io/documentation/elements/panel',
};

export const variants = [
  {
    displayName: 'Full Example',
    picture: {
      src: './pictures/panel/full-example.webp',
      width: 183,
      height: 276,
    },
    snippet: {
      html: `
    <nav class="panel">
      <p class="panel-heading">
        Repositories
      </p>
      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input" type="text" placeholder="Search">
          <span class="icon is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <p class="panel-tabs">
        <a class="is-active">All</a>
        <a>Public</a>
        <a>Private</a>
        <a>Sources</a>
        <a>Forks</a>
      </p>
      <a class="panel-block is-active">
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        bulma
      </a>
      <a class="panel-block">
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        jgthms.github.io
      </a>
      <a class="panel-block">
        <span class="panel-icon">
          <i class="fas fa-code-branch" aria-hidden="true"></i>
        </span>
        mojs
      </a>
      <label class="panel-block">
        <input type="checkbox">
        remember me
      </label>
      <div class="panel-block">
        <button class="button is-link is-outlined is-fullwidth">
          Reset all filters
        </button>
      </div>
    </nav>
    `,
    },
  },
  {
    displayName: 'Colored: Primary Color',
    picture: {
      src: './pictures/panel/color-primary.webp',
      width: 183,
      height: 171,
    },
    snippet: {
      html: `
    <article class="panel is-primary">
      <p class="panel-heading">
        Primary
      </p>
      <p class="panel-tabs">
        <a class="is-active">All</a>
        <a>Public</a>
      </p>
      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input is-primary" type="text" placeholder="Search">
          <span class="icon is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <a class="panel-block">
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        minireset.css
      </a>
      <a class="panel-block">
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        jgthms.github.io
      </a>
    </article>
    `,
    },
  },
];
