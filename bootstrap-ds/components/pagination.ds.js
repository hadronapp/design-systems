export default {
  displayName: 'Pagination',
  name: 'pagination',
  homepage: 'https://getbootstrap.com/docs/4.0/components/pagination'
}

export const variants = [
  {
    displayName: 'With text',
    picture: {
      src: "./pictures/pagination/with-text.webp",
      width: 198,
      height: 31
    },
    snippet: {
      html:  `
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      `
    }
  },
  {
    displayName: 'With icons',
    picture: {
      src: "./pictures/pagination/with-icons.webp",
      width: 138,
      height: 31
    },
    snippet: {
      html:  `
      <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      `
    }
  },
  {
    displayName: 'Small',
    picture: {
      src: "./pictures/pagination/small.webp",
      width: 62,
      height: 26
    },
    snippet: {
      html:  `
        <nav aria-label="Page navigation example">
          <ul class="pagination pagination-sm">
            <li class="page-item active" aria-current="page">
              <span class="page-link">
                1
                <span class="sr-only">(current)</span>
              </span>
            </li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
          </ul>
        </nav>
      `,
    }
  },
  {
    displayName: 'Centered',
    picture: {
      src: "./pictures/pagination/centered.webp",
      width: 396,
      height: 31
    },
    snippet: {
      html:  `
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
        `
    }
  },
  {
    displayName: 'At Right',
    picture: {
      src: "./pictures/pagination/at-right.webp",
      width: 396,
      height: 31
    },
    snippet: {
      html:  `
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-end">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      `
    }
  }
]
