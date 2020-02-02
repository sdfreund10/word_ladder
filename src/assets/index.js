import { render } from 'preact';
import { html } from 'htm/preact';

import Background from './background';
import Example from './example';
import ParametersTable from './parametersTable';
import ResponsesTable from './responsesTable';
import Form from './form';

function App() {
  return html`
    <div className="app">
      <div className="nav-container">
        <h3>Word Ladder</h3>
      </div>
      <div className="main">
        <div className="row">
          <div className="col-40">
            <div className="card-label">
              <h3>Background</h3>
            </div>
            <div className="card">
              <${Background} />
            </div>
            <div className="card-label">
              <h3>Example</h3>
            </div>
            <div className="card">
              <${Example} />
            </div>
          </div>
          <div className="col-60">
            <div className="card-label">
              <h3>Try it!</h3>
            </div>
            <div className="card">
              <${Form} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-100">
            <div className="card-label">
              <h3>API</h3>
            </div>
            <div className="card">
              <h3>GET /paths/new</h3>
              <${ParametersTable} />
              <${ResponsesTable} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-100">
            <div className="card-label">
              <h3>A note on caching</h3>
            </div>
            <div className="card">
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
      </div>
    </div>
  `;
}

render(html`<${App} />`, document.body);
