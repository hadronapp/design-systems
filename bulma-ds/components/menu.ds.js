export default {
  displayName: 'Menu',
  name: 'menu',
  category: 'Components',
  description: 'A simple menu, for any type of vertical navigation.',
  homepage: 'https://bulma.io/documentation/elements/menu',
};

export const variants = [
  {
    displayName: 'Basic',
    picture: {
      src: './pictures/menu/basic.webp',
      width: 183,
      height: 355,
    },
    snippet: {
      html: `
    <aside class="menu">
      <p class="menu-label">
        General
      </p>
      <ul class="menu-list">
        <li><a>Dashboard</a></li>
        <li><a>Customers</a></li>
      </ul>
      <p class="menu-label">
        Administration
      </p>
      <ul class="menu-list">
        <li><a>Team Settings</a></li>
        <li>
          <a class="is-active">Manage Your Team</a>
          <ul>
            <li><a>Members</a></li>
            <li><a>Plugins</a></li>
          </ul>
        </li>
        <li><a>Invitations</a></li>
      </ul>
      <p class="menu-label">
        Transactions
      </p>
      <ul class="menu-list">
        <li><a>Payments</a></li>
        <li><a>Transfers</a></li>
      </ul>
    </aside>
    `,
    },
  },
];
