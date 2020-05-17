export default {
  displayName: 'Input Group',
  name: 'input-group',
  homepage: 'https://getbootstrap.com/docs/4.0/components/input-group',
  picture: '',
};

export const variants = [
  {
    displayName: 'Input with left icon',
    picture: {
      src: './pictures/input-group/left-icon.webp',
      width: 198,
      height: 29,
    },
    snippet: {
      html: `
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">@</span>
          </div>
          <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
        </div>
      `,
    },
  },
  {
    displayName: 'Input with right icon',
    picture: {
      src: './pictures/input-group/right-icon.webp',
      width: 198,
      height: 29,
    },
    snippet: {
      html: `
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">@example.com</span>
          </div>
        </div>
      `,
    },
  },
  {
    displayName: 'Input with left abd right icon',
    picture: {
      src: './pictures/input-group/left-right-icon.webp',
      width: 198,
      height: 29,
    },
    snippet: {
      html: `
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">$</span>
          </div>
          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
          <div class="input-group-append">
            <span class="input-group-text">.00</span>
          </div>
        </div>
      `,
    },
  },
];
