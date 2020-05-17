export default {
  displayName: 'Dropdown',
  name: 'dropdown',
  homepage: 'https://getbootstrap.com/docs/4.0/components/dropdowns',
  dependencies: [
    {
      url: 'node_modules/popper.js/dist/umd/popper.min.js',
      priority: 0,
    },
  ],
};

export const variants = [
  {
    displayName: 'Basic',
    picture: {
      src: './pictures/dropdown/basic.webp',
      width: 198,
      height: 164,
    },
    snippet: {
      html: `
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </div>
      `,
    },
  },
  {
    displayName: 'Menu form',
    picture: {
      src: './pictures/dropdown/menu-form.webp',
      width: 198,
      height: 335,
    },
    snippet: {
      html: `
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>

          <div class="dropdown-menu">
            <form class="px-4 py-3">
              <div class="form-group">
                <label for="exampleDropdownFormEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
              </div>
              <div class="form-group">
                <label for="exampleDropdownFormPassword1">Password</label>
                <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck">
                <label class="form-check-label" for="dropdownCheck">
                  Remember me
                </label>
              </div>
              <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">New around here? Sign up</a>
            <a class="dropdown-item" href="#">Forgot password?</a>
          </div>
        </div>
      `,
    },
  },
];
