import { html, Fragment } from 'htm/preact'

export default function PathsContainer ({ paths }) {
  const pathHtml = paths.map(path => (
    html`
      <div className="path">
        ${path.map(word => html`<span className="word">${word}</span>`)}
      </div>
    `
  ))
  return html`
    <div className="results-container">
      ${pathHtml}
    </div>
  `
};
