export default {
  displayName: 'List group',
  name: 'list-group',
  homepage: 'https://getbootstrap.com/docs/4.0/components/list-group',
}

export const variants = [
  {
    displayName: 'Basic',
    picture: {
      src: './pictures/list-group/basic.webp',
      width: 198,
      height: 120
    },
    snippet: {
      html:  `
        <ul class="list-group">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
      `,
    }
  },
  {
    displayName: 'With badges',
    picture: {
      src: './pictures/list-group/with-badges.webp',
      width: 198,
      height: 120
    },
    snippet: {
      html:  `
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Cras justo odio
            <span class="badge badge-primary badge-pill">14</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Dapibus ac facilisis in
            <span class="badge badge-primary badge-pill">2</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Morbi leo risus
            <span class="badge badge-primary badge-pill">1</span>
          </li>
        </ul>
      `,
    }
  },
  {
    displayName: 'Custom content',
    picture: {
      src: './pictures/list-group/custom-content.webp',
      width: 198,
      height: 355
    },
    snippet: {
      html:  `
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p class="mb-1">Donec id elit non mi porta gravida at eget metus.</p>
            <small>Donec id elit non mi porta.</small>
          </a>
          <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List group item heading</h5>
              <small class="text-muted">3 days ago</small>
            </div>
            <p class="mb-1">Donec id elit non mi porta gravida at eget metus.</p>
            <small class="text-muted">Donec id elit non mi porta.</small>
          </a>
          <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List group item heading</h5>
              <small class="text-muted">3 days ago</small>
            </div>
            <p class="mb-1">Donec id elit non mi porta gravida at eget metus.</p>
            <small class="text-muted">Donec id elit non mi porta.</small>
          </a>
        </div>
      `,
    }
  },
  {
    displayName: 'Without borders',
    picture: {
      src: './pictures/list-group/without-borders.webp',
      width: 198,
      height: 119
    },
    snippet: {
      html:  `
        <ul
          class="list-group list-group-flush item-sm"
          element-name="list-group"
          variant="without-borders">
          <li class="list-group-item">
            Cras justo odio
          </li>
          <li class="list-group-item">
            Morbi leo risus
          </li>
          <li class="list-group-item">
            Vestibulum at eros
          </li>
        </ul>
      `
    }
  },
  {
    displayName: 'Horizontal',
    picture: {
      src: './pictures/list-group/horizontal.webp',
      width: 198,
      height: 41
    },
    snippet: {
      html:  `
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
        </ul>
      `
    }
  },
  {
    displayName: 'Tabbable panes',
    picture: {
      src: './pictures/list-group/tabbable-panes.webp',
      width: 410,
      height: 159
    },
    snippet: {
      html:  `
        <div class="row item">
          <div class="col-4">
            <div class="list-group" id="list-tab" role="tablist">
              <a
                class="list-group-item list-group-item-action active"
                id="list-home-list"
                data-toggle="list"
                href="#list-home"
                role="tab"
                aria-controls="home">
                Home
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-profile-list"
                data-toggle="list"
                href="#list-profile"
                role="tab"
                aria-controls="profile">
                Profile
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-messages-list"
                data-toggle="list"
                href="#list-messages"
                role="tab"
                aria-controls="messages">
                Messages
              </a>
              <a
                class="list-group-item list-group-item-action"
                id="list-settings-list"
                data-toggle="list"
                href="#list-settings"
                role="tab"
                aria-controls="settings">
                Settings
              </a>
            </div>
          </div>
          <div class="col-8">
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="list-home"
                role="tabpanel"
                aria-labelledby="list-home-list">
                Home content
              </div>
              <div
                class="tab-pane fade"
                id="list-profile"
                role="tabpanel"
                aria-labelledby="list-profile-list">
                Profile content
              </div>

              <div
                class="tab-pane fade"
                id="list-settings"
                role="tabpanel"
                aria-labelledby="list-settings-list">
                Settings content
              </div>
            </div>
          </div>
        </div>
      `
    }
  }
]
