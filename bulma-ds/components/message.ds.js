export default {
  displayName: 'Message',
  name: 'message',
  category: 'Components',
  description: 'Colored message blocks, to emphasize part of your page.',
  homepage: 'https://bulma.io/documentation/elements/message',
};

export const variants = [
  {
    displayName: 'With header',
    picture: {
      src: './pictures/message/with-header.webp',
      width: 183,
      height: 176,
    },
    snippet: {
      html: `
    <article class="message">
      <div class="message-header">
        <p>Hello World</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <strong>Pellentesque risus mi</strong>
        , tempus quis placerat ut, porta nec nulla.
      </div>
    </article>
    `,
    },
  },
  {
    displayName: 'Colored: Primary',
    picture: {
      src: './pictures/message/color-primary.webp',
      width: 183,
      height: 176,
    },
    snippet: {
      html: `
    <article class="message is-primary">
      <div class="message-header">
        <p>Primary</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <strong>Pellentesque risus mi</strong>
        , tempus quis placerat ut, porta nec nulla.
      </div>
    </article>
    `,
    },
  },
  {
    displayName: 'Body only',
    picture: {
      src: './pictures/message/body-only.webp',
      width: 183,
      height: 138,
    },
    snippet: {
      html: `
    <article class="message">
      <div class="message-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <strong>Pellentesque risus mi</strong>
        , tempus quis placerat ut, porta nec nulla.
      </div>
    </article>
    `,
    },
  },
  {
    displayName: 'Small',
    picture: {
      src: './pictures/message/size-small.webp',
      width: 183,
      height: 104,
    },
    snippet: {
      html: `
    <article class="message is-small">
      <div class="message-header">
        <p>Small message</p>
        <button class="delete is-small" aria-label="delete"></button>
      </div>
      <div class="message-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <strong>Pellentesque risus mi</strong>
        , tempus quis placerat ut, porta nec nulla.
      </div>
    </article>
    `,
    },
  },
];
