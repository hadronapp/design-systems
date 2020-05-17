export default {
  displayName: 'Alert',
  name: 'alert',
  homepage: 'https://getbootstrap.com/docs/4.4/components/alerts',
  classNames: [
    {
      category: 'Colors',
      multiple: false,
      values: [
        'alert-primary',
        'alert-secondary',
        'alert-success',
        'alert-danger',
        'alert-warning',
        'alert-info',
        'alert-light',
        'alert-dark',
      ],
    },
  ],
};

export const variants = [
  {
    displayName: 'Primary',
    picture: {
      src: './pictures/alert/primary.webp',
      width: 198,
      height: 38,
    },
    snippet: {
      html: `
        <div class="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
      `,
    },
  },
  {
    displayName: 'Secondary',
    picture: {
      src: './pictures/alert/secondary.webp',
      width: 198,
      height: 38,
    },
    snippet: {
      html: `
        <div class="alert alert-secondary" role="alert">
          A simple secondary alert—check it out!
        </div>
      `,
    },
  },
  {
    displayName: 'Success',
    picture: {
      src: './pictures/alert/success.webp',
      width: 198,
      height: 38,
    },
    snippet: {
      html: `
        <div class="alert alert-success" role="alert">
          A simple success alert—check it out!
        </div>
      `,
    },
  },
  {
    displayName: 'Danger',
    picture: {
      src: './pictures/alert/danger.webp',
      width: 198,
      height: 38,
    },
    snippet: {
      html: `
        <div class="alert alert-danger" role="alert">
          A simple danger alert—check it out!
        </div>
      `,
    },
  },
  {
    displayName: 'Warning',
    picture: {
      src: './pictures/alert/warning.webp',
      width: 198,
      height: 38,
    },
    snippet: {
      html: `
        <div class="alert alert-warning" role="alert">
          A simple warning alert—check it out!
        </div>
      `,
    },
  },
  {
    displayName: 'Info',
    picture: {
      src: './pictures/alert/info.webp',
      width: 198,
      height: 38,
    },
    snippet: {
      html: `
        <div class="alert alert-info" role="alert">
          A simple info alert—check it out!
        </div>
      `,
    },
  },
  {
    displayName: 'Light',
    picture: {
      src: './pictures/alert/light.webp',
      width: 198,
      height: 38,
    },
    snippet: {
      html: `
        <div class="alert alert-light" role="alert">
          A simple light alert—check it out!
        </div>
      `,
    },
  },
  {
    displayName: 'Dark',
    picture: {
      src: './pictures/alert/dark.webp',
      width: 198,
      height: 38,
    },
    snippet: {
      html: `
        <div class="alert alert-dark" role="alert">
          A simple dark alert—check it out!
        </div>
      `,
    },
  },
  {
    displayName: 'With Close Icon',
    picture: {
      src: './pictures/alert/dismissible.webp',
      width: 198,
      height: 38,
    },
    snippet: {
      html: `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        `,
    },
  },
];
