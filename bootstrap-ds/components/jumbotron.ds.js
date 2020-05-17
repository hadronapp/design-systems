export default {
  displayName: 'Jumbotron',
  name: 'jumbotron',
  homepage: 'https://getbootstrap.com/docs/4.0/components/jumbotron',
};

export const variants = [
  {
    displayName: 'Basic',
    picture: {
      src: './pictures/jumbotron/basic.webp',
      width: 198,
      height: 441,
    },
    snippet: {
      html: `
        <div class="jumbotron">
          <h1 class="display-4">Hello, world!</h1>
          <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr class="my-4">
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>
        `,
    },
  },
  {
    displayName: 'fluid',
    picture: {
      src: './pictures/jumbotron/fluid.webp',
      width: 198,
      height: 259,
    },
    snippet: {
      html: `
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Fluid jumbotron</h1>
            <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </div>
        </div>
        `,
    },
  },
];
