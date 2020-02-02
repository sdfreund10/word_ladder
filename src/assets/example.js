import { html } from 'htm/preact';

export default function Example() {
  return html`
    <div className="Example">
      <p>
        As an example, given the words "ruby" and "cool", one solution might be
      </p>
      <code>ruby > rubs > cubs > cobs > coos > cool</code>
    </div>
  `;
}
