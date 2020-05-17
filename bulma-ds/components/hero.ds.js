export default {
  displayName: 'Hero',
  name: 'hero',
  category: 'Layout',
  description: 'An imposing hero banner to showcase something.',
  homepage: 'https://bulma.io/documentation/layout/hero',
};

export const variants = [
  {
    displayName: 'Basic',
    picture: {
      src: './pictures/hero/basic.webp',
      width: 183,
      height: 120,
    },
    snippet: {
      html: `
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Hero title
            </h1>
            <h2 class="subtitle">
              Hero subtitle
            </h2>
          </div>
        </div>
      </section>
    `,
}
  },
  {
    displayName: 'Primary',
    picture: {
      src: './pictures/hero/primary.webp',
      width: 183,
      height: 120,
    },
    snippet: {
      html: `
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Primary title
            </h1>
            <h2 class="subtitle">
              Primary subtitle
            </h2>
          </div>
        </div>
      </section>
    `,
}
  },
  {
    displayName: 'Dark',
    picture: {
      src: './pictures/hero/dark.webp',
      width: 183,
      height: 120,
    },
    snippet: {
      html: `
      <section class="hero is-dark">
        <div class="hero-body">
          <div class="container">
            <p class="title">
              Dark title
            </p>
            <p class="subtitle">
              Dark subtitle
            </p>
          </div>
        </div>
      </section>
    `,
}
  },
  {
    displayName: 'With gradient',
    picture: {
      src: './pictures/hero/with-gradient.webp',
      width: 183,
      height: 291,
    },
    snippet: {
      html: `
      <section class="hero is-medium is-info is-bold">
        <div class="hero-body">
          <div class="container">
            <p class="title">
              Info bold title
            </p>
            <p class="subtitle">
              Info bold subtitle
            </p>
          </div>
        </div>
      </section>
    `,
}
  },
  {
    displayName: 'Large',
    picture: {
      src: './pictures/large/large.webp',
      width: 183,
      height: 480,
    },
    snippet: {
      html: `
      <section class="hero is-info is-large">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Large title
            </h1>
            <h2 class="subtitle">
              Large subtitle
            </h2>
          </div>
        </div>
      </section>
    `,
}
  },
  {
    displayName: 'Fullheight with navbar',
    picture: {
      src: './pictures/hero/fullheight-with-navbar.webp',
      width: 1024,
      height: 803,
    },
    snippet: {
      html: `
      <div class="is-fullwidth">
        <nav class="navbar">
          <div class="container">
            <div id="navMenu" class="navbar-menu">
              <div class="navbar-start">
                <a class="navbar-item">
                  Home
                </a>
                <a class="navbar-item">
                  Documentation
                </a>
              </div>

              <div class="navbar-end">
                <div class="navbar-item">
                  <div class="buttons">
                    <a class="button is-dark">Github</a>
                    <a class="button is-link">Download</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <section class="hero is-link is-fullheight-with-navbar">
          <div class="hero-body">
            <div class="container">
              <p class="title">
                Fullheight hero with navbar
              </p>
            </div>
          </div>
        </section>
      </div>
    `,
}
  },
  {
    displayName: 'With navbar',
    picture: {
      src: './pictures/hero/with-navbar.webp',
      width: 1004,
      height: 337,
    },
    snippet: {
      html: `
      <section class="hero is-primary is-medium">
        <!-- Hero head: will stick at the top -->
        <div class="hero-head">
          <nav class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
                </a>
                <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" class="navbar-menu">
                <div class="navbar-end">
                  <a class="navbar-item is-active">
                    Home
                  </a>
                  <a class="navbar-item">
                    Examples
                  </a>
                  <a class="navbar-item">
                    Documentation
                  </a>
                  <span class="navbar-item">
                    <a class="button is-primary is-inverted">
                      <span class="icon">
                        <i class="fab fa-github"></i>
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <!-- Hero content: will be in the middle -->
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title">
              Title
            </h1>
            <h2 class="subtitle">
              Subtitle
            </h2>
          </div>
        </div>

        <!-- Hero footer: will stick at the bottom -->
        <div class="hero-foot">
          <nav class="tabs is-boxed is-fullwidth">
            <div class="container">
              <ul>
                <li class="is-active"><a>Overview</a></li>
                <li><a>Modifiers</a></li>
                <li><a>Grid</a></li>
                <li><a>Elements</a></li>
                <li><a>Components</a></li>
                <li><a>Layout</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    `,
}
  },
  {
    displayName: 'Fullheight hero in 3 parts',
    picture: {
      src: './pictures/hero/fullheight-3parts.webp',
      width: 1004,
      height: 336,
    },
    snippet: {
      html: `
      <section class="hero is-primary is-medium">
          <!-- Hero head: will stick at the top -->
          <div class="hero-head">
            <nav class="navbar">
              <div class="container">
                <div class="navbar-brand">
                  <a class="navbar-item">
                    <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
                  </a>
                  <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div id="navbarMenuHeroA" class="navbar-menu">
                  <div class="navbar-end">
                    <a class="navbar-item is-active">
                      Home
                    </a>
                    <a class="navbar-item">
                      Examples
                    </a>
                    <a class="navbar-item">
                      Documentation
                    </a>
                    <span class="navbar-item">
                      <a class="button is-primary is-inverted">
                        <span class="icon">
                          <i class="fab fa-github"></i>
                        </span>
                        <span>Download</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <!-- Hero content: will be in the middle -->
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title">
                Title
              </h1>
              <h2 class="subtitle">
                Subtitle
              </h2>
            </div>
          </div>

          <!-- Hero footer: will stick at the bottom -->
          <div class="hero-foot">
            <nav class="tabs">
              <div class="container">
                <ul>
                  <li class="is-active"><a>Overview</a></li>
                  <li><a>Modifiers</a></li>
                  <li><a>Grid</a></li>
                  <li><a>Elements</a></li>
                  <li><a>Components</a></li>
                  <li><a>Layout</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
    `,
}
  },
];
