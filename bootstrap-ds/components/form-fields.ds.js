export default {
  displayName: "Fields",
  name: "form-fields",
  category: "Forms",
  homepage: "https://getbootstrap.com/docs/4.0/components/forms"
}

export const variants = [
  {
    displayName: 'Help Text',
    picture: {
      src: "./pictures/form-fields/help-text.webp",
      width: 198,
      height: 128
    },
    snippet: {
      html:  `
        <div class="form-group">
          <label for="inputPassword5">Password</label>
          <input
            type="password"
            id="inputPassword5"
            class="form-control"
            aria-describedby="passwordHelpBlock" />

          <small
            id="passwordHelpBlock"
            class="form-text text-muted">
            Your password must be 8-20 characters long, contain letters and numbers,
            and must not contain spaces, special characters, or emoji.
          </small>
        </div>
      `
    }
  },
  {
    displayName: 'Checkbox',
    picture: {
      src: "./pictures/form-fields/checkbox.webp",
      width: 198,
      height: 20
    },
    snippet: {
      html:  `
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customCheck1" />
          <label
            class="custom-control-label"
            for="customCheck1">
            Check this custom checkbox
          </label>
        </div>
      `
    }
  },
  {
    displayName: 'Radios in rows',
    picture: {
      src: "./pictures/form-fields/radios-rows.webp",
      width: 198,
      height: 47
    },
    snippet: {
      html:  `
        <div class="form-group">
          <div class="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio1"
              name="customRadio"
              class="custom-control-input" />

            <label
              class="custom-control-label"
              for="customRadio1">
              Toggle this custom radio
            </label>
          </div>
          <div class="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio2"
              name="customRadio"
              class="custom-control-input" />

            <label
              class="custom-control-label"
              for="customRadio2">
              Or this
            </label>
          </div>
        </div>
      `
    }
  },
  {
    displayName: 'Radios inline',
    picture: {
      src: "./pictures/form-fields/radios-inline.webp",
      width: 154,
      height: 28
    },
    snippet: {
      html:  `
        <div class="form-group custom-control-inline">
          <div class="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio1"
              name="customRadio"
              class="custom-control-input" />

            <label
              class="custom-control-label"
              for="customRadio1">
              Toggle this&nbsp;
            </label>
          </div>
          <div class="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio21"
              name="customRadio"
              class="custom-control-input" />

            <label
              class="custom-control-label"
              for="customRadio2">
              Or this
            </label>
          </div>
        </div>
      `
    }
  },
  {
    displayName: 'Switch button',
    picture: {
      src: "./pictures/form-fields/switch-button.webp",
      width: 198,
      height: 20
    },
    snippet: {
      html:  `
        <div class="custom-control custom-switch">
          <input type="checkbox" class="custom-control-input" id="customSwitch1" />
          <label class="custom-control-label" for="customSwitch1">Toggle button</label>
        </div>
      `
    }
  },
  {
    displayName: 'Select',
    picture: {
      src: "./pictures/form-fields/select.webp",
      width: 198,
      height: 32
    },
    snippet: {
      html:  `
        <select class="custom-select">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      `
    }
  },
  {
    displayName: 'Select multiple',
    picture: {
      src: "./pictures/form-fields/multiple.webp",
      width: 198,
      height: 76
    },
    snippet: {
      html:  `
        <select class="custom-select" multiple>
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      `
    }
  },
  {
    displayName: 'Range',
    picture: {
      src: "./pictures/form-fields/range.webp",
      width: 198,
      height: 19
    },
    snippet: {
      html:  `<input variant="range" type="range" class="custom-range" />`
    }
  },
  {
    displayName: 'File browser',
    picture: {
      src: "./pictures/form-fields/file-browser.webp",
      width: 198,
      height: 32
    },
    snippet: {
      html:  `
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="customFile" />
          <label class="custom-file-label" for="customFile">Choose file</label>
        </div>
      `
    }
  },
]
