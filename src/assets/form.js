import { html } from 'htm/preact'

export default function Form (props) {
  const {
    startWord,
    endWord,
    onStartWordChange,
    onEndWordChange,
    onSubmit
  } = this.props
  return html`
    <div>
      <div className="input-group">
        <label>Start word</label>
        <input
          type="text"
          value=${startWord}
          onChange=${onStartWordChange}
        />
      </div>
      <div className="input-group">
        <label>End word</label>
        <input
          type="text"
          value=${endWord}
          onChange=${onEndWordChange}
        />
      </div>
      <div className="submit">
        <button
          onClick=${onSubmit}
        >
          Generate
        </button>
      </div>
    </div>
  `
};
