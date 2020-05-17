export default {
  displayName: 'Tabs',
  name: 'tabs',
  category: 'Components',
  description:
    'Simple responsive horizontal navigation tabs, with different styles',
  homepage: 'https://bulma.io/documentation/elements/tabs',
};

export const variants = [
  {
    displayName: 'Basic',
    picture: {
      src: './pictures/tabs/basic.webp',
      width: 440,
      height: 43,
    },
    snippet: {
      html: `
    <div class="tabs">
      <ul>
        <li class="is-active"><a>Pictures</a></li>
        <li><a>Music</a></li>
        <li><a>Videos</a></li>
        <li><a>Documents</a></li>
      </ul>
    </div>
    `,
    },
  },
  {
    displayName: 'Centered',
    picture: {
      src: './pictures/tabs/centered.webp',
      width: 440,
      height: 43,
    },
    snippet: {
      html: `
    <div class="tabs is-centered">
      <ul>
        <li class="is-active"><a>Pictures</a></li>
        <li><a>Music</a></li>
        <li><a>Videos</a></li>
        <li><a>Documents</a></li>
      </ul>
    </div>
    `,
    },
  },
  {
    displayName: 'With Icons',
    picture: {
      src: './pictures/tabs/with-icons.webp',
      width: 440,
      height: 43,
    },
    snippet: {
      html: `
    <div class="tabs is-centered">
      <ul>
        <li class="is-active">
          <a>
            <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
            <span>Documents</span>
          </a>
        </li>
      </ul>
    </div>
    `,
    },
  },
  {
    displayName: 'Small',
    picture: {
      src: './pictures/tabs/small.webp',
      width: 440,
      height: 35,
    },
    snippet: {
      html: `
    <div class="tabs is-small">
      <ul>
        <li class="is-active"><a>Pictures</a></li>
        <li><a>Music</a></li>
        <li><a>Videos</a></li>
        <li><a>Documents</a></li>
      </ul>
    </div>
    `,
    },
  },
  {
    displayName: 'With Borders',
    picture: {
      src: './pictures/tabs/with-borders.webp',
      width: 440,
      height: 44,
    },
    snippet: {
      html: `
    <div class="tabs is-boxed">
      <ul>
        <li class="is-active">
          <a>
            <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
            <span>Documents</span>
          </a>
        </li>
      </ul>
    </div>
    `,
    },
  },
  {
    displayName: 'Mutually Exclusive',
    picture: {
      src: './pictures/tabs/mutually-exclusive.webp',
      width: 440,
      height: 44,
    },
    snippet: {
      html: `
    <div class="tabs is-toggle">
      <ul>
        <li class="is-active">
          <a>
            <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
            <span>Documents</span>
          </a>
        </li>
      </ul>
    </div>
    `,
    },
  },
];
