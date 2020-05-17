export default {
  displayName: 'General',
  name: 'form',
  category: 'Form',
  description: 'All generic form controls, designed for consistency',
  homepage: 'https://bulma.io/documentation/form/general/',
};

export const variants = [
  {
    displayName: 'Full Example',
    picture: {
      src: './pictures/form/full-example.webp',
      width: 183,
      height: 511,
    },
    snippet: {
      html: `
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input">
      </div>
    </div>

    <div class="field">
      <label class="label">Username</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input is-success" type="text" placeholder="Text input" value="bulma">
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </div>
      <p class="help is-success">This username is available</p>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle"></i>
        </span>
      </div>
      <p class="help is-danger">This email is invalid</p>
    </div>

    <div class="field">
      <label class="label">Subject</label>
      <div class="control">
        <div class="select">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Message</label>
      <div class="control">
        <textarea class="textarea" placeholder="Textarea"></textarea>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox">
          I agree to the <a href="#">terms and conditions</a>
        </label>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="radio">
          <input type="radio" name="question">
          Yes
        </label>
        <label class="radio">
          <input type="radio" name="question">
          No
        </label>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
      <div class="control">
        <button class="button is-link is-light">Cancel</button>
      </div>
    </div>
    `,
    },
  },
  {
    displayName: 'Horizontal Full Example',
    picture: {
      src: './pictures/form/horizontal-example.webp',
      width: 183,
      height: 364,
    },
    snippet: {
      html: `
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">From</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control is-expanded has-icons-left">
            <input class="input" type="text" placeholder="Name">
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control is-expanded has-icons-left has-icons-right">
            <input class="input is-success" type="email" placeholder="Email" value="alex@smith.com">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label"></div>
      <div class="field-body">
        <div class="field is-expanded">
          <div class="field has-addons">
            <p class="control">
              <a class="button is-static">
                +44
              </a>
            </p>
            <p class="control is-expanded">
              <input class="input" type="tel" placeholder="Your phone number">
            </p>
          </div>
          <p class="help">Do not enter the first zero</p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Department</label>
      </div>
      <div class="field-body">
        <div class="field is-narrow">
          <div class="control">
            <div class="select is-fullwidth">
              <select>
                <option>Business development</option>
                <option>Marketing</option>
                <option>Sales</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label">
        <label class="label">Already a member?</label>
      </div>
      <div class="field-body">
        <div class="field is-narrow">
          <div class="control">
            <label class="radio">
              <input type="radio" name="member">
              Yes
            </label>
            <label class="radio">
              <input type="radio" name="member">
              No
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Subject</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input class="input is-danger" type="text" placeholder="e.g. Partnership opportunity">
          </div>
          <p class="help is-danger">
            This field is required
          </p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Question</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
          </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label">
        <!-- Left empty for spacing -->
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <button class="button is-primary">
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
    `,
    },
  },
  {
    displayName: 'Form Field',
    picture: {
      src: './pictures/form/form-field.webp',
      width: 183,
      height: 70,
    },
    snippet: {
      html: `
    <div class="field">
      <label class="label">Label</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input">
      </div>
      <p class="help">This is a help text</p>
    </div>
    `,
    },
  },
  {
    displayName: 'Login Form Example',
    picture: {
      src: './pictures/form/login-form.webp',
      width: 183,
      height: 108,
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
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password">
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button class="button is-success">
          Login
        </button>
      </p>
    </div>
    `,
    },
  },
  {
    displayName: 'Search Field',
    picture: {
      src: './pictures/form/search-field.webp',
      width: 183,
      height: 30,
    },
    snippet: {
      html: `
    <div class="field has-addons">
      <div class="control">
        <input class="input" type="text" placeholder="Find a repository">
      </div>
      <div class="control">
        <a class="button is-info">
          Search
        </a>
      </div>
    </div>
    `,
    },
  },
  {
    displayName: 'Input With Static End Value',
    picture: {
      src: './pictures/form/input-static-append.webp',
      width: 183,
      height: 30,
    },
    snippet: {
      html: `
    <div class="field has-addons">
      <p class="control">
        <input class="input" type="text" placeholder="Your email">
      </p>
      <p class="control">
        <a class="button is-static">
          @gmail.com
        </a>
      </p>
    </div>
    `,
    },
  },
  {
    displayName: 'Form Group',
    picture: {
      src: './pictures/form/forn-group.webp',
      width: 136,
      height: 30,
    },
    snippet: {
      html: `
    <div class="field is-grouped">
      <p class="control">
        <a class="button is-primary">
          Submit
        </a>
      </p>
      <p class="control">
        <a class="button is-light">
          Cancel
        </a>
      </p>
    </div>
    `,
    },
  },
];
