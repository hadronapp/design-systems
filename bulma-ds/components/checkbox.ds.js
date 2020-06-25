export default {
  name: 'checkbox',
  displayName: 'Checkbox',
  category: 'Form',
  description: 'The 2-state checkbox in its native format',
  homepage: 'https://bulma.io/documentation/form/checkbox',
};

export const variants = [
  {
    displayName: 'Simple labeled checkbox',
    picture: {
      src: './pictures/checkbox/basic.webp',
      width: 89,
      height: 16,
    },
    snippet: {
      html: `
      <label class="checkbox">
        <input type="checkbox">
        Remember me
      </label>
      `
    }
  },
];
