export default {
  name: 'media-object',
  displayName: 'Media Object',
  category: 'Layout',
  description: 'The famous media object prevalent in social media interfaces, but useful in any context',
  homepage: 'https://bulma.io/documentation/layout/media-object',
};

export const variants = [
  {
    displayName: 'Full Example',
    picture: {
      src: './pictures/media-object/full-example.webp',
      width: 183,
      height: 207,
    },
    snippet: {
      html: `
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="https://bulma.io/images/placeholders/128x128.png">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
            <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros.
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-reply"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-retweet"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-heart"></i></span>
            </a>
          </div>
        </nav>
      </div>
      <div class="media-right">
        <button class="delete"></button>
      </div>
    </article>
    `,
    },
  },
  {
    displayName: 'Nested: Comments example',
    picture: {
      src: './pictures/media-object/nested-comments-example.webp',
      width: 360,
      height: 447,
    },
    snippet: {
      html: `
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="https://bulma.io/images/placeholders/128x128.png">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Barbara Middleton</strong>
            <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non.
            <br>
            <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
          </p>
        </div>

        <article class="media">
          <figure class="media-left">
            <p class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Sean Brown</strong>
                <br>
                Donec sollicitudin urna eget eros malesuada sagittis.
                <br>
                <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
              </p>
            </div>

            <article class="media">
              Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
            </article>
          </div>
        </article>

        <article class="media">
          <figure class="media-left">
            <p class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Kayli Eunice </strong>
                <br>
                Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero.
                <br>
                <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
              </p>
            </div>
          </div>
        </article>
      </div>
    </article>
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="https://bulma.io/images/placeholders/128x128.png">
        </p>
      </figure>
      <div class="media-content">
        <div class="field">
          <p class="control">
            <textarea class="textarea" placeholder="Add a comment..."></textarea>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button">Post comment</button>
          </p>
        </div>
      </div>
    </article>
    `,
    },
  },
];
