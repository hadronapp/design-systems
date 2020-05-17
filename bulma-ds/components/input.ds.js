export default {
  name: 'input',
  displayName: 'Text Input',
  category: 'Form',
};

export const variants = [
  {
    displayName: 'Small',
    picture: {
      src: './pictures/text-input/small.webp',
      width: 183,
      height: 23,
    },
    snippet: {
      html: `<input class="input is-small" type="text" placeholder="Small input">`,
    },
  },
  {
    displayName: 'Normal',
    picture: {
      src: './pictures/text-input/normal.webp',
      width: 183,
      height: 30,
    },
    snippet: {
      html: `<input class="input" type="text" placeholder="Text input">`,
    },
  },
  {
    displayName: 'Medium',
    picture: {
      src: './pictures/text-input/medium.webp',
      width: 183,
      height: 38,
    },
    snippet: {
      html: `<input class="input is-medium" type="text" placeholder="Medium input">`,
    },
  },
  {
    displayName: 'Large',
    picture: {
      src: './pictures/text-input/large.webp',
      width: 183,
      height: 45,
    },
    snippet: {
      html: `<input class="input is-large" type="text" placeholder="Large input">`,
    },
  },
  {
    displayName: 'Rounded',
    picture: {
      src: './pictures/text-input/rounded.webp',
      width: 183,
      height: 30,
    },
    snippet: {
      html: `<input class="input is-rounded" type="text" placeholder="Rounded input">`,
    },
  },
  {
    displayName: 'Disabled',
    picture: {
      src: './pictures/text-input/disabled.webp',
      width: 183,
      height: 30,
    },
    snippet: {
      html: `<input class="input" type="text" placeholder="Disabled input" disabled>`,
    },
  },
  {
    displayName: 'Readonly',
    picture: {
      src: './pictures/text-input/readonly.webp',
      width: 183,
      height: 30,
    },
    snippet: {
      html: `<input class="input" type="text" value="This text is readonly" readonly>`,
    },
  },
  {
    displayName: 'With One Icon',
    picture: {
      src: './pictures/text-input/left-icon.webp',
      width: 183,
      height: 30,
    },
    snippet: {
      html: `
      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="password" placeholder="Password">
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
    `,
    },
  },
  {
    displayName: 'With Two Icons',
    picture: {
      src: './pictures/text-input/left-right-icons.webp',
      width: 183,
      height: 30,
    },
    snippet: {
      html: `
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="Email">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
      </div>
    `,
    },
  },
];
