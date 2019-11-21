import { html } from 'htm/preact';

import Path from './path';

export default function PathsContainer({ paths, loading, error }) {
  if (loading) {
    return html`
      <div className="results-container">
        <div class="loader"></div>
      </div>
    `;
  }

  if (error) {
    return html`
      <div>
        ${error}
      </div>
    `;
  }

  const pathsHtml = paths.map((path) => html`
      <div className="path">
        <${Path} path=${path} />
      </div>
    `);

  return html`
    <div className="results-container">
      ${pathsHtml}
    </div>
  `;
}
