// inject-meta-plugin.js
export default function injectMetaTag() {
    return {
      name: 'inject-meta-tag',
      transformIndexHtml(html) {
        return html.replace(
          /<head>/,
          `<head>\n  <meta http-equiv="refresh" content="0; URL=/demo-react-router-gh-pages/">`
        );
      }
    };
  }
  