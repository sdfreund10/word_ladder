import { html } from 'htm/preact';

function Background() {
  return html`
    <div className="background">
      <p>
        Word ladder is a game invented by Lewis Carol. The game is played by finding the shortest chain between two words,
        where each link in the chain is a valid word differing from adjacent words by one letter.
      </p>
    </div>
  `;
}

export default Background;
