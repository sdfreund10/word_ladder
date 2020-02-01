import { html } from 'htm/preact';
import { Fragment } from 'preact';

function ParametersTable() {
  return html`
    <${Fragment}>
      <h4 id="parameters">Parameters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>start_word</td>
            <td>string</td>
            <td>The first word in the chain. Needs to have the same number of characters as the end_word</td>
          </tr>
          <tr>
            <td>end_word</td>
            <td>string</td>
            <td>The last word in the chain. Needs to have the same number of characters and the start_word</td>
          </tr>
        </tbody>
      </table>
    </${Fragment}>
  `;
}

export default ParametersTable;
