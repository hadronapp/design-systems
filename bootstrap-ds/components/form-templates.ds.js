export default {
  displayName: 'Templates',
  name: 'form-templates',
  category: 'Forms',
  homepage: 'https://getbootstrap.com/docs/4.0/components/forms',
};

export const variants = [
  {
    displayName: 'Login form template',
    picture: {
      src: './pictures/forms/login-form-template.webp',
      width: 198,
      height: 197,
    },
    snippet: {
      html: `
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      `,
    },
  },
  {
    displayName: 'Form group',
    picture: {
      src: './pictures/forms/form-group.webp',
      width: 198,
      height: 54,
    },
    snippet: {
      html: `
        <div class="form-group">
          <label for="formGroupExampleInput">Example label</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder">
        </div>
      `,
    },
  },
  {
    displayName: 'Form row',
    picture: {
      src: './pictures/forms/form-row.webp',
      width: 198,
      height: 32,
    },
    snippet: {
      html: `
        <div class="form-row">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name">
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name">
          </div>
        </div>
      `,
    },
  },
  {
    displayName: 'Registration template',
    picture: {
      src: './pictures/forms/registration-template.webp',
      width: 198,
      height: 327,
    },
    snippet: {
      html: `
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4">
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input type="password" class="form-control" id="inputPassword4">
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity">
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip">
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck">
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
      `,
    },
  },
  {
    displayName: 'Horizontal form template',
    picture: {
      src: './pictures/forms/horizontal-form-example.webp',
      width: 420,
      height: 210,
    },
    snippet: {
      html: `
        <form>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail3">
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword3">
            </div>
          </div>
          <fieldset class="form-group">
            <div class="row">
              <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
              <div class="col-sm-10">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                  <label class="form-check-label" for="gridRadios1">
                    First radio
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                  <label class="form-check-label" for="gridRadios2">
                    Second radio
                  </label>
                </div>
                <div class="form-check disabled">
                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
                  <label class="form-check-label" for="gridRadios3">
                    Third disabled radio
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <div class="form-group row">
            <div class="col-sm-2">Checkbox</div>
            <div class="col-sm-10">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck1">
                <label class="form-check-label" for="gridCheck1">
                  Example checkbox
                </label>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-10">
              <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
          </div>
        </form>
      `,
    },
  },
  {
    displayName: 'Inline form template',
    picture: {
      src: './pictures/forms/inline-form-template.webp',
      width: 355,
      height: 75,
    },
    snippet: {
      html: `
        <form class="form-inline">
          <label class="sr-only" for="inlineFormInputName2">Name</label>
          <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe">

          <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
          <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend">
              <div class="input-group-text">@</div>
            </div>
            <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username">
          </div>

          <div class="form-check mb-2 mr-sm-2">
            <input class="form-check-input" type="checkbox" id="inlineFormCheck">
            <label class="form-check-label" for="inlineFormCheck">
              Remember me
            </label>
          </div>

          <button type="submit" class="btn btn-primary mb-2">Submit</button>
        </form>
      `,
    },
  },
  {
    displayName: 'Full form template',
    picture: {
      src: './pictures/forms/another-form-template.webp',
      width: 198,
      height: 194,
    },
    snippet: {
      html: `
        <form>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label for="validationDefault01">First name</label>
              <input type="text" class="form-control" id="validationDefault01" placeholder="First name" value="Mark" required>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationDefault02">Last name</label>
              <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required>
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationDefaultUsername">Username</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroupPrepend2">@</span>
                </div>
                <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationDefault03">City</label>
              <input type="text" class="form-control" id="validationDefault03" placeholder="City" required>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationDefault04">State</label>
              <input type="text" class="form-control" id="validationDefault04" placeholder="State" required>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationDefault05">Zip</label>
              <input type="text" class="form-control" id="validationDefault05" placeholder="Zip" required>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
              <label class="form-check-label" for="invalidCheck2">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <button class="btn btn-primary" type="submit">Submit form</button>
        </form>
      `,
    },
  },
];
