import { render, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import { html } from 'htm/preact';
import axios from 'axios';

import Nav from './nav';
import PathsContainer from './paths_container';
import Form from './form';

function getPaths(startWord, endWord) {
  return axios
    .get(`/paths/new?start=${startWord}&end=${endWord}`);
}

function App() {
  const [startWord, startWordChange] = useState('');
  const [endWord, endWordChange] = useState('');
  const [paths, pathsChange] = useState({ loading: false, data: [], errorMessage: '' });
  const { data, loading, errorMessage } = paths;

  function updatePaths(newPathData) {
    pathsChange({ ...paths, ...newPathData });
  }

  const onChangeFunction = (stateFunction) => (
    (event) => stateFunction(event.target.value)
  );

  const onSubmit = function (event) {
    event.preventDefault();
    updatePaths({ loading: true });
  };

  if (loading) {
    getPaths(startWord, endWord)
      .then((response) => updatePaths({ data: response.data, loading: false, errorMessage: '' }))
      .catch((error) => { updatePaths({ loading: false, data: [], errorMessage: error.response.data }); });
  }

  return html`
    <${Fragment}>
      <div className="body">
        <div className="head">
          <div className="title">Word Ladder Solver</div>
          <p className="description">
            Find the shortest chain of words between a start and end word, either by
            changing one letter or rearranging the letters at each step
          </p>
        </div>
        <${Form}
          startWord=${startWord}
          onStartWordChange=${onChangeFunction(startWordChange)}
          endWord=${endWord}
          onEndWordChange=${onChangeFunction(endWordChange)}
          onSubmit=${onSubmit}
          loading=${loading}
        }}/>
        <${PathsContainer} paths=${data} loading=${loading} error=${errorMessage}/>
      </div>
    </${Fragment}>
  `;
}

render(html`<${App} />`, document.body);
