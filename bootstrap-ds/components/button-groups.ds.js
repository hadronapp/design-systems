export default {
  displayName: "Button Group",
  name: "button-group",
  homepage: "https://getbootstrap.com/docs/4.4/components/button-group"
}

export const variants = [
  {
    displayName: 'Basic',
    picture: {
      src: "./pictures/button-group/basic.webp",
      width: 142,
      height: 29
    },
    snippet: {
      html:  `
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary">Left</button>
          <button type="button" class="btn btn-secondary">Middle</button>
          <button type="button" class="btn btn-secondary">Right</button>
        </div>
      `,
    }
  },
  {
    displayName: 'Button Toolbar (combined sets)',
    picture: {
      src: "./pictures/button-group/combined-sets.webp",
      width: 198,
      height: 29
    },
    snippet: {
      html:  `
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-secondary">1</button>
            <button type="button" class="btn btn-secondary">2</button>
            <button type="button" class="btn btn-secondary">3</button>
            <button type="button" class="btn btn-secondary">4</button>
          </div>
          <div class="btn-group mr-2" role="group" aria-label="Second group">
            <button type="button" class="btn btn-secondary">5</button>
            <button type="button" class="btn btn-secondary">6</button>
            <button type="button" class="btn btn-secondary">7</button>
          </div>
          <div class="btn-group" role="group" aria-label="Third group">
            <button type="button" class="btn btn-secondary">8</button>
          </div>
        </div>
      `
    }
  },
  {
    displayName: 'Nested Toolbars',
    picture: {
      src: "./pictures/button-group/nested.webp",
      width: 140,
      height: 29
    },
    snippet: {
      html:  `
        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
          <button type="button" class="btn btn-secondary">1</button>
          <button type="button" class="btn btn-secondary">2</button>

          <div class="btn-group" role="group">
            <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </button>
            <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <a class="dropdown-item" href="#">Dropdown link</a>
              <a class="dropdown-item" href="#">Dropdown link</a>
            </div>
          </div>
        </div>
      `
    }
  },
  {
    displayName: 'Vertical',
    picture: {
      src: "./pictures/button-group/vertical.webp",
      width: 55,
      height: 84
    },
    snippet: {
      html:  `
        <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
          <button type="button" class="btn btn-secondary">
            Button
          </button>

          <div class="btn-group" role="group">
            <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop1">
              <a class="dropdown-item" href="#">
                Dropdown link
              </a>
              <a class="dropdown-item" href="#">
                Dropdown link
              </a>
            </div>
          </div>
          <button type="button" class="btn btn-secondary">
            Button
          </button>
          <button type="button" class="btn btn-secondary">
            Button
          </button>
        </div>
        `
    }
  }
];
