import { html } from 'htm/preact';
import { Fragment } from 'preact';

export default function Response({ json, loading }) {
  // https://tobiasahlin.com/spinkit/
  if (loading) {
    return html`
      <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div>
    `;
  }

  if (!json) {
    return null;
  }
  if (json.status !== 200) {
    return html`<${Fragment}>${JSON.stringify(json)}</${Fragment}>`;
  }

  const dataHtml = json.data.map((arr) => (
    html`<${Fragment}>${'    ["'}${arr.join('","')}${'"],'}<br /></${Fragment}>`
  ));

  return (
    html`
      <${Fragment}>
        ${'{'}<br />
        ${'  data: ['}<br />
        ${dataHtml}
        ${'  ],'}<br />
        ${`  status: ${json.status}`}<br />
        ${'}'}
      </${Fragment}>
    `
  );
}
