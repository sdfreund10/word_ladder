import { html } from 'htm/preact';

export default function Form(props) {
  const {
    startWord,
    endWord,
    onStartWordChange,
    onEndWordChange,
    onSubmit,
    loading,
  } = props;
  return html`
    <form onsubmit=${onSubmit}>
      <div className="input-group">
        <label>Start word</label>
        <input
          type="text"
          value=${startWord}
          onChange=${onStartWordChange}
          disabled=${loading}
        />
      </div>
      <div className="input-group">
        <label>End word</label>
        <input
          type="text"
          value=${endWord}
          onChange=${onEndWordChange}
          disabled=${loading}
        />
      </div>
      <div className="submit">
        <button type="submit" disabled=${loading}>
          Generate
        </button>
      </div>
    </form>
  `;
}
