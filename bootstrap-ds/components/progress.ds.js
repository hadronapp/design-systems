export default {
  displayName: 'Progress',
  name: 'progress',
  homepage: 'https://getbootstrap.com/docs/4.0/components/progress'
}

export const variants = [
  {
    displayName: 'Basic',
    picture: {
      src: './pictures/progress/progress-without-label.webp',
      width: 240,
      height: 16
    },
    snippet: {
      html:  `
        <div class="progress">
          <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      `
    }
  },
  {
    displayName: 'With label',
    picture: {
      src: './pictures/progress/progress-with-label.webp',
      width: 240,
      height: 16
    },
    snippet: {
      html:  `
        <div class="progress">
          <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
        </div>
      `
    }
  },
  {
    displayName: 'Striped',
    picture: {
      src: './pictures/progress/progress-stripped.webp',
      width: 240,
      height: 16
    },
    snippet: {
      html:  `
        <div class="progress">
          <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      `,
    }
  }
]
