import { html } from 'htm/preact';
import { Fragment } from 'preact';

function ResponsesTable() {
  return html`
    <${Fragment}>
      <code>GET /paths/new?start=ruby&end=cool</code>
      <h4>Response</h4>
      <code>
        Status: 200
      </code>
      <div className="break" />
      <code>
        ${'{'}<br />
        ${'  status: 200,'}<br />
        ${'  data: ['}<br />
        ${'    ["ruby","rubs","cubs","cobs","coos","cool"],'}<br />
        ${'    ["ruby","rubs","robs","cobs","coos","cool"],'}<br />
        ${'    ["ruby","rubs","robs","roos","coos","cool"],'}<br />
        ${'  ]'}<br />
        ${'}'}
      </code>
    </${Fragment}>
  `;
}

export default ResponsesTable;
