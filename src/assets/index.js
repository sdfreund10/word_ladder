import { render, Fragment } from 'preact'
import { useState } from 'preact/hooks'
import { html } from 'htm/preact'
import axios from 'axios'

import Nav from './nav'
import PathsContainer from './paths_container'
import Form from './form'

function getPaths (startWord, endWord, callback) {
  axios
    .get(`/paths/new?start=${startWord}&end=${endWord}`)
    .then(response => callback(response.data))
}

function App () {
  const [startWord, startWordChange] = useState('')
  const [endWord, endWordChange] = useState('')
  const [paths, pathsChange] = useState([])
  const onChangeFunction = (stateFunction) => {
    return event => { stateFunction(event.target.value) }
  }

  return html`
    <${Fragment}>
      <${Nav} />
      <div className="body">
        <div className="title">Word Ladder Solver</div>
        <p className="description">
          Find the shortest chain of words between a start and end word, either by
          changing one letter or rearranging the letters at each step
        </p>
        <hr />
        <${Form}
          startWord=${startWord}
          onStartWordChange=${onChangeFunction(startWordChange)}
          endWord=${endWord}
          onEndWordChange=${onChangeFunction(endWordChange)}
          onSubmit=${event => getPaths(startWord, endWord, pathsChange)}
        }}/>
        <${PathsContainer} paths=${paths} />
      </div>
    </${Fragment}>
  `
};

render(html`<${App} />`, document.body)
