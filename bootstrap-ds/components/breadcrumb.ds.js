export default {
  displayName: "Breadcrumb",
  name: "breadcrumb",
  homepage: "https://getbootstrap.com/docs/4.4/components/breadcrumb",
}

export const variants = [{
  displayName: 'Breadcrumb',
  picture: {
    src: './pictures/breadcrumb/basic.webp',
    width: 198,
    height: 42
  },
  snippet: {
    html:  `
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
      </nav>
    `,
  }
}]
