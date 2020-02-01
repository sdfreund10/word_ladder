import { html } from 'htm/preact';
import { Fragment } from 'preact';

function ResponsesTable() {
  return html`
    <${Fragment}>
      <h4 id="response">Responses</h4>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>200</td>
            <td>One or more chains were found. Will return an array of arrays or strings</td>
            <td>
              { data: [], status: 200 }
            </td>
          </tr>
          <tr>
            <td>400</td>
            <td>
              Result when no path between provided words can be found.
              In this case, the words were valid but they have no solution.
            </td>
            <td>
              No valid path between words
            </td>
          </tr>
          <tr>
            <td>406</td>
            <td>
              Result when one or both of the provided words cannot be used,
              either because it is not a valid word,
              or because they have a different number of characters
            </td>
            <td>
              Invalid arguments
            </td>
          </tr>
        </tbody>
      </table>
    </${Fragment}>
  `;
}

export default ResponsesTable;
