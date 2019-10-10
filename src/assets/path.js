import { html, Fragment } from 'htm/preact'

const indexOfDiff = (word1, word2) => {
  let result = word1.length;
  word1.split('').forEach((letter, index) => {
    if(letter !== word2[index]) {
      result = index;
    }
  });
  return result;
};

export default function Path ({ path }) {
    const words = path.map((word, index) => {
      if (index === 0) {
        return html`<span className="word">${word}</span>`;
      }
      const diffIndex = indexOfDiff(word, path[index - 1]);
      return html`
        <span className="word">
          ${word.slice(0, diffIndex)}
          <span className="change">${word.slice(diffIndex, diffIndex + 1)}</span>
          ${word.slice(diffIndex + 1)}
        </span>
      `;
    });
  return html`<div className="path"> ${words}</div>`;
};
