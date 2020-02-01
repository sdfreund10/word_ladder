import { render } from 'preact';
import { html } from 'htm/preact';
import axios from 'axios';

import Background from './background';
import ParametersTable from './parametersTable';
import ResponsesTable from './responsesTable';
import Form from './form';

function App() {
  return html`
    <div className="app">
      <div className="main">
        <div className="card">
          <h1>
            Word Ladder
          </h1>
          <${Background} />
        </div>
        <div className="card">
          <h2>Try it!</h4>
          <${Form} />
        </div>
        <div className="card">
          <h2>API</h2>
          <p>
            This site provides an API to provide the shortest possible solution to
            this puzzle given a start and an end word.
            If there are multiple paths tied for the shortest chain,
            this API will return all solutions.
          </p>
          <h3>GET /paths/new</h3>
          <${ParametersTable} />
          <${ResponsesTable} />
        </div>
        <div className="card">
          <h3>A note on caching</h3>
          <p>
            Solving a word ladder puzzle can be very computationally expensive.
            This API does no precalculation and manually computes the solution every time.
            To make this a little faster and not get clogged up with multiple long running requests,
            the API uses a simple caching function. This cache is small and will not last long,
            but should make subsequent requests given the same start and end word
            much faster.
          </p>
        </div>
      </div>
    </div>
  `;
}

render(html`<${App} />`, document.body);
