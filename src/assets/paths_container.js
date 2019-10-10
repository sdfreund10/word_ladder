import { html, Fragment } from 'htm/preact'

import Path from './path';

export default function PathsContainer ({ paths, loading }) {
  if (loading) {
    return html`
      <div className="results-container">
        <div class="loader"></div>
      </div>
    `;
  }

  const pathsHtml = paths.map(path => {
    return html`
      <div className="path">
        <${Path} path=${path} />
      </div>
    `
  });

  return html`
    <div className="results-container">
      ${pathsHtml}
    </div>
  `
};
