export default {
  name: 'radio-button',
  displayName: 'Radio button',
  category: 'Form',
  description: 'The mutually exclusive radio buttons in their native format',
  homepage: 'https://bulma.io/documentation/form/radio',
};

export const variants = [
  {
    displayName: 'Basic example',
    picture: {
      src: './pictures/radio/basic.webp',
      width: 94,
      height: 27,
    },
    snippet: {
      html: `
    <div class="control">
      <label class="radio">
        <input type="radio" name="answer" checked>
        Yes
      </label>
      <label class="radio">
        <input type="radio" name="answer">
        No
      </label>
    </div>
    `,
}
  },
];
