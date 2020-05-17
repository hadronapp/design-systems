export default {
  displayName: 'Media object',
  name: 'media-object',
  homepage: 'https://getbootstrap.com/docs/4.0/components/media-object',
};

export const variants = [
  {
    displayName: 'Top-Aligned',
    picture: {
      src: './pictures/media-object/top-aligned.webp',
      width: 198,
      height: 86,
    },
    snippet: {
      html: `
        <div class="media">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='52'%3E%3Cpath stroke='gray' stroke-width='3' fill='gray' d='M0 0h64v64H0z'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' fill='%23fff' class='placeholder' text-anchor='middle'%3E%3C/text%3E%3C/svg%3E" class="mr-3">
          <div class="media-body">
            <h5 class="mt-0">Media heading</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
          </div>
        </div>
      `,
    },
  },
  {
    displayName: 'Center-Aligned',
    picture: {
      src: './pictures/media-object/center-aligned.webp',
      width: 198,
      height: 145,
    },
    snippet: {
      html: `
        <div class="media">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='52'%3E%3Cpath stroke='gray' stroke-width='3' fill='gray' d='M0 0h64v64H0z'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' fill='%23fff' class='placeholder' text-anchor='middle'%3E%3C/text%3E%3C/svg%3E" class="align-self-center mr-3">
          <div class="media-body">
            <h5 class="mt-0">Center-aligned media</h5>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
            <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </div>
        </div>
      `,
    },
  },
  {
    displayName: 'Bottom-Aligned',
    picture: {
      src: './pictures/media-object/bottom-aligned.webp',
      width: 198,
      height: 129,
    },
    snippet: {
      html: `
        <div class="media">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='52'%3E%3Cpath stroke='gray' stroke-width='3' fill='gray' d='M0 0h64v64H0z'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' fill='%23fff' class='placeholder' text-anchor='middle'%3E%3C/text%3E%3C/svg%3E" class="align-self-end mr-3">
          <div class="media-body">
            <h5 class="mt-0">Bottom-aligned media</h5>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
            <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </div>
        </div>
        `,
    },
  },
  {
    displayName: 'Right-Aligned',
    picture: {
      src: './pictures/media-object/right-aligned.webp',
      width: 198,
      height: 83,
    },
    snippet: {
      html: `
        <div class="media">
          <div class="media-body">
            <h5 class="mt-0 mb-1">Media object</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
          </div>
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='52'%3E%3Cpath stroke='gray' stroke-width='3' fill='gray' d='M0 0h64v64H0z'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' fill='%23fff' class='placeholder' text-anchor='middle'%3E%3C/text%3E%3C/svg%3E" class="ml-3">
        </div>
        `,
    },
  },
  {
    displayName: 'Nested',
    picture: {
      src: './pictures/media-object/nested.webp',
      width: 198,
      height: 134,
    },
    snippet: {
      html: `
        <div class="media">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='52'%3E%3Cpath stroke='gray' stroke-width='3' fill='gray' d='M0 0h64v64H0z'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' fill='%23fff' class='placeholder' text-anchor='middle'%3E%3C/text%3E%3C/svg%3E" class="mr-3">
          <div class="media-body">
            <h5 class="mt-0">Media heading</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.

            <div class="media mt-3">
              <a class="mr-3" href="#">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='52'%3E%3Cpath stroke='gray' stroke-width='3' fill='gray' d='M0 0h64v64H0z'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' fill='%23fff' class='placeholder' text-anchor='middle'%3E%3C/text%3E%3C/svg%3E" class="mr-3">
              </a>
              <div class="media-body">
                <h5 class="mt-0">Media heading</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
              </div>
            </div>
          </div>
        </div>
      `,
    },
  },
  {
    displayName: 'List',
    picture: {
      src: './pictures/media-object/list.webp',
      width: 198,
      height: 330,
    },
    snippet: {
      html: `
        <ul class="list-unstyled">
          <li class="media">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='52'%3E%3Cpath stroke='gray' stroke-width='3' fill='gray' d='M0 0h64v64H0z'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' fill='%23fff' class='placeholder' text-anchor='middle'%3E%3C/text%3E%3C/svg%3E" class="mr-3">
            <div class="media-body">
              <h5 class="mt-0 mb-1">List-based media object</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
            </div>
          </li>
          <li class="media my-4">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='52'%3E%3Cpath stroke='gray' stroke-width='3' fill='gray' d='M0 0h64v64H0z'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' fill='%23fff' class='placeholder' text-anchor='middle'%3E%3C/text%3E%3C/svg%3E" class="mr-3">
            <div class="media-body">
              <h5 class="mt-0 mb-1">List-based media object</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
            </div>
          </li>
          <li class="media">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='52'%3E%3Cpath stroke='gray' stroke-width='3' fill='gray' d='M0 0h64v64H0z'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' fill='%23fff' class='placeholder' text-anchor='middle'%3E%3C/text%3E%3C/svg%3E" class="mr-3">
            <div class="media-body">
              <h5 class="mt-0 mb-1">List-based media object</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
            </div>
          </li>
        </ul>
      `,
    },
  },
];
