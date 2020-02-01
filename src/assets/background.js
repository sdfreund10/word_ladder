import { html } from 'htm/preact';

function Background() {
  return html`
    <div className="background">
      <h2>
        Background
      </h2>
      <p>
        Word ladder is a game invented by Lewis Carol. The game is played by finding the shortest chain between two words,
        where each link in the chain is a valid word differing from adjacent words by one letter.
      </p>
      <p>
        As an example, given the words "ruby" and "cool", one solution might be
      </p>
      <code>ruby → rubs → cubs → cobs → coos → cool</code>
    </div>
  `;
}

export default Background;
