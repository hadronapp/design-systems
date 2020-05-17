export default {
  displayName: 'Notification',
  name: 'notification',
  category: 'Elements',
  description: 'Bold notification blocks, to alert your users of something',
  homepage: 'https://bulma.io/documentation/elements/notification',
};

export const variants = [
  {
    displayName: 'Basic',
    picture: {
      src: './pictures/notification/basic.webp',
      width: 198,
      height: 110,
    },
    snippet: {
      html: `
      <div class="notification">
        <button class="delete"></button>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
        consectetur adipiscing elit
      </div>
      `,
    },
  },
  {
    displayName: 'Primary',
    picture: {
      src: './pictures/notification/primary.webp',
      width: 198,
      height: 110,
    },
    snippet: {
      html: `
      <div class="notification is-primary">
        <button class="delete"></button>
        Primar lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
        consectetur adipiscing elit
      </div>
      `,
    },
  },
  {
    displayName: 'Info',
    picture: {
      src: './pictures/notification/info.webp',
      width: 198,
      height: 110,
    },
    snippet: {
      html: `
      <div class="notification is-info">
        <button class="delete"></button>
        Primar lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
        consectetur adipiscing elit
      </div>
      `,
    },
  },
  {
    displayName: 'Success',
    picture: {
      src: './pictures/notification/success.webp',
      width: 198,
      height: 110,
    },
    snippet: {
      html: `
      <div class="notification is-success">
        <button class="delete"></button>
        Primar lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
        consectetur adipiscing elit
      </div>
      `,
    },
  },
  {
    displayName: 'Warning',
    picture: {
      src: './pictures/notification/warning.webp',
      width: 198,
      height: 110,
    },
    snippet: {
      html: `
      <div class="notification is-warning">
        <button class="delete"></button>
        Primar lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
        consectetur adipiscing elit
      </div>
     `,
    },
  },
  {
    displayName: 'Danger',
    picture: {
      src: './pictures/notification/danger.webp',
      width: 198,
      height: 110,
    },
    snippet: {
      html: `
      <div class="notification is-danger">
        <button class="delete"></button>
        Primar lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
        consectetur adipiscing elit
      </div>
      `,
    },
  },
];
