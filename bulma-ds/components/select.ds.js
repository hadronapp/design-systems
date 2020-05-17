export default {
  name: 'select',
  displayName: 'Select',
  category: 'Form',
  description: 'The browser built-in select dropdown, styled accordingly',
  homepage: 'https://bulma.io/documentation/form/select/',
};

export const variants = [
  {
    displayName: 'Basic',
    picture: {
      src: './pictures/select/basic.webp',
      width: 122,
      height: 28,
    },
    snippet: {
      html: `
    <div class="select">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
    `,
    },
  },
  {
    displayName: 'Multiple Select',
    picture: {
      src: './pictures/select/multiple-select.webp',
      width: 76,
      height: 186,
    },
    snippet: {
      html: `
    <div class="select is-multiple">
      <select multiple size="8">
        <option value="Argentina">Argentina</option>
        <option value="Bolivia">Bolivia</option>
        <option value="Brazil">Brazil</option>
        <option value="Chile">Chile</option>
        <option value="Colombia">Colombia</option>
        <option value="Ecuador">Ecuador</option>
        <option value="Guyana">Guyana</option>
        <option value="Paraguay">Paraguay</option>
        <option value="Peru">Peru</option>
        <option value="Suriname">Suriname</option>
        <option value="Uruguay">Uruguay</option>
        <option value="Venezuela">Venezuela</option>
      </select>
    </div>
    `,
    },
  },
  {
    displayName: 'Colored: Primary',
    picture: {
      src: './pictures/select/color-primary.webp',
      width: 122,
      height: 28,
    },
    snippet: {
      html: `
    <div class="select is-primary">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
    `,
    },
  },
  {
    displayName: 'Rounded',
    picture: {
      src: './pictures/select/rounded.webp',
      width: 141,
      height: 28,
    },
    snippet: {
      html: `
    <div class="select is-rounded">
      <select>
        <option>Rounded dropdown</option>
        <option>With options</option>
      </select>
    </div>
    `,
    },
  },
  {
    displayName: 'Small',
    picture: {
      src: './pictures/select/small.webp',
      width: 101,
      height: 23,
    },
    snippet: {
      html: `
    <div class="select is-small">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
    `,
    },
  },
  {
    displayName: 'With Icons',
    picture: {
      src: './pictures/select/with-icons.webp',
      width: 183,
      height: 30,
    },
    snippet: {
      html: `
    <div class="field">
      <div class="control has-icons-left">
        <div class="select">
          <select>
            <option selected>Country</option>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
        <div class="icon is-small is-left">
          <i class="fas fa-globe"></i>
        </div>
      </div>
    </div>
    `,
    },
  },
];
