export default {
  displayName: "Badge",
  name: "badge",
  homepage: "https://getbootstrap.com/docs/4.4/components/badge"
}

export const variants = [
  {
    displayName: 'Primary',
    picture: {
      src: "./pictures/badge/primary.webp",
      width: 55,
      height: 18
    },
    snippet: {
      html: `<span class="badge badge-primary">Primary</span>`,
    }
  },
  {
    displayName: 'Secondary',
    picture: {
      src: "./pictures/badge/secondary.webp",
      width: 71,
      height: 18
    },
    snippet: {
      html: `<span class="badge badge-secondary">Secondary</span>`,
    }
  },
  {
    displayName: 'Success',
    picture: {
      src: "./pictures/badge/success.webp",
      width: 59,
      height: 18
    },
    snippet: {
      html: `<span class="badge badge-success">Success</span>`,
    }
  },
  {
    displayName: 'Danger',
    picture: {
      src: "./pictures/badge/danger.webp",
      width: 51,
      height: 18
    },
    snippet: {
      html: `<span class="badge badge-danger">Danger</span>`,
    }
  },
  {
    displayName: 'Warning',
    picture: {
      src: "./pictures/badge/warning.webp",
      width: 58,
      height: 18
    },
    snippet: {
      html: `<span class="badge badge-warning">Warning</span>`,
    }
  },
  {
    displayName: 'Info',
    picture: {
      src: "./pictures/badge/info.webp",
      width: 32,
      height: 18
    },
    snippet: {
      html: `<span class="badge badge-info">Info</span>`,
    }
  },
  {
    displayName: 'Light',
    picture: {
      src: "./pictures/badge/light.webp",
      width: 39,
      height: 18
    },
    snippet: {
      html: `<span class="badge badge-light">Light</span>`,
    }
  },
  {
    displayName: 'Dark',
    picture: {
      src: "./pictures/badge/dark.webp",
      width: 37,
      height: 18
    },
    snippet: {
      html: `<span class="badge badge-dark">Dark</span>`,
    }
  },
  {
    displayName: 'Rounded Primary',
    picture: {
      src: "./pictures/badge/pill-primary.webp",
      width: 60,
      height: 18
    },
    snippet: {
      html: `<span class="badge badge-pill badge-primary">Primary</span>`,
    }
  },
  {
    displayName: 'Rounded Secondary',
    picture: {
      src: "./pictures/badge/pill-secondary.webp",
      width: 76,
      height: 18
    },
    snippet: {
      html: `<span class="badge badge-pill badge-secondary">Secondary</span>`,
    }
  },
  {
    displayName: 'Rounded Success',
    picture: {
      src: "./pictures/badge/pill-success.webp",
      width: 64,
      height: 18
    },
    snippet: {
      html: `<span class="badge badge-pill badge-success">Success</span>`,
    }
  },
  {
    displayName: 'Rounded Danger',
    picture: {
      src: "./pictures/badge/pill-danger.webp",
      width: 56,
      height: 18
    },
    snippet: {
      html: `<span class="badge badge-pill badge-danger">Danger</span>`,
    }
  },
  {
    displayName: 'Rounded Warning',
    picture: {
      src: "./pictures/badge/pill-warning.webp",
      width: 62,
      height: 18
    },
    snippet: {
      html: `<span class="badge badge-pill badge-warning">Warning</span>`,
    }
  },
  {
    displayName: 'Rounded Info',
    picture: {
      src: "./pictures/badge/pill-info.webp",
      width: 37,
      height: 18
    },
    snippet: {
      html: `<span class="badge badge-pill badge-info">Info</span>`,
    }
  },
  {
    displayName: 'Rounded Light',
    picture: {
      src: "./pictures/badge/pill-light.webp",
      width: 44,
      height: 18
    },
    snippet: {
      html: `<span class="badge badge-pill badge-light">Light</span>`,
    }
  },
  {
    displayName: 'Rounded Dark',
    picture: {
      src: "./pictures/badge/pill-dark.webp",
      width: 42,
      height: 18
    },
    snippet: {
      html: `<span class="badge badge-pill badge-dark">Dark</span>`,
    }
  },
  {
    displayName: 'As part of a button',
    picture: {
      src: "./pictures/badge/inside-button.webp",
      width: 101,
      height: 29
    },
    snippet: {
      html:  `
        <button type="button" class="btn btn-primary">
          Notifications <span class="badge badge-light">4</span>
        </button>
        `,
    }
  },
]