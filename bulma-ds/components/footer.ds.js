export default {
  displayName: 'Footer',
  name: 'footer',
  category: 'Layout',
  description: 'Simple responsive footer which can include anything.',
  homepage: 'https://bulma.io/documentation/layout/footer',
};

export const variants = [
  {
    picture: {
      src: './pictures/footer/basic.webp',
      width: 184,
      height: 172,
    },
    snippet: {
      html: `
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
    `,
    },
  },
];
