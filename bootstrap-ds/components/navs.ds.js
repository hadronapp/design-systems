export default {
  displayName: 'Navigation component',
  name: 'nav',
  homepage: 'https://getbootstrap.com/docs/4.0/components/navs'
}

export const variants = [
  {
    displayName: 'Basic',
    picture: {
      src: './pictures/navigation-component/basic.webp',
      width: 198,
      height: 32
    },
    snippet: {
      html:  `
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      `
    }
  },
  {
    displayName: 'Tabs',
    picture: {
      src: './pictures/navigation-component/tabs.webp',
      width: 198,
      height: 34
    },
    snippet: {
      html:  `
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      `
    }
  },
  {
    displayName: 'Pills',
    picture: {
      src: './pictures/navigation-component/pills.webp',
      width: 198,
      height: 32
    },
    snippet: {
      html:  `
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link active" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      `
    }
  },
  {
    displayName: 'With content',
    picture: {
      src: './pictures/navigation-component/with-content.webp',
      width: 198,
      height: 53
    },
    snippet: {
      html:  `
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Tab 1 Content</div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Tab 2 Content</div>
          <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Tab 3 Content</div>
        </div>
      `,
    }
  }
]
