import { html } from 'htm/preact';
import { useState } from 'preact/hooks';
import axios from 'axios';
import Response from './response';

export default function Form() {
  const [startWord, changeStartWord] = useState('');
  const [endWord, changeEndWord] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [responseTime, setResponseTime] = useState(null);
  function getPaths(e) {
    e.preventDefault();
    setLoading(true);
    const startTime = Date.now();
    axios.get(`/paths/new?start=${startWord}&end=${endWord}`).then(
      ({ data, status }) => {
        setResponseTime(Date.now() - startTime);
        setResponse({ data, status });
        setLoading(false);
      },
    ).catch(
      ({ response: { data, status } }) => {
        setResponseTime(Date.now() - startTime);
        setResponse({ data, status });
        setLoading(false);
      },
    );
  }


  return html`
    <form className="form">
      <div className="input">
        <div className="input-group">
          <label htmlFor="start-word-input">Starting Word</label>
          <input
            id="start-word-input"
            value=${startWord}
            disable={loading}
            onChange=${({ target: { value } }) => changeStartWord(value)} />
        </div>
        <div className="input-group">
          <label htmlFor="end-word-input">Ending Word</label>
          <input
            id="end-word-input"
            value=${endWord}
            disable={loading}
            onChange=${({ target: { value } }) => changeEndWord(value)} />
        </div>
      </div>
      <button onClick=${getPaths} disable={loading}>Submit</button>
      <div className="example">
        <h4>Request</h4>
        <code>curl -X GET "${window.location.origin}/paths/new?start=${startWord}&end=${endWord}"</code>
      </div>
      <div className="response">
        <h4>Response</h4>
        <code>
          <${Response} json=${response} loading=${loading}/>
        </code>
        <small>Approximate Response Time: ${responseTime && `${responseTime} ms`}</small>
      </div>
    </form>
  `;
}
