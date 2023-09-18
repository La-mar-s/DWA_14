// import { LitElement, html, css, property } from "lit-element";
import {
  LitElement,
  html,
  css,
  // property,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 5;

class TallyCounter extends LitElement {
  constructor() {
    super();
    this._count = 0;
  }

  static get properties() {
    return {
      _count: { type: Number },
    };
  }

  decrement() {
    if (this._count > MIN_NUMBER) {
      this._count -= STEP_AMOUNT;
      this.requestUpdate("_count");
    }
  }

  increment() {
    if (this._count < MAX_NUMBER) {
      this._count += STEP_AMOUNT;
      this.requestUpdate("_count");
    }
  }

  get count() {
    return this._count;
  }

  set count(value) {
    this._count = value;
    this.requestUpdate("_count");
  }

  render() {
    return html`
      <input
        class="counter_value"
        data-key="number"
        readonly
        .value="${this.count}"
      />
      <div class="counter_actions">
        <button
          data-key="subtract"
          class="counter_button counter_button_first"
          @click="${this.decrement}"
          ?disabled="${this.count <= MIN_NUMBER}"
        >
          -
        </button>
        <button
          data-key="add"
          class="counter_button"
          @click="${this.increment}"
          ?disabled="${this.count >= MAX_NUMBER}"
        >
          +
        </button>
      </div>
    `;
  }

  static styles = css`
    :root {
      --color-green: #31c48d;
      --color-white: #ffffff;
      --color-dark-grey: #33333d;
      --color-medium-grey: #424250;
      --color-light-grey: #9ca3ae;
    }

    * {
      box-sizing: border-box;
    }

    html {
      height: 100vh;
    }

    body {
      margin: 0;
      background: var(--color-medium-grey);
      color: var(--color-white);
      font-family: Roboto, Arial, Helvetica, sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }

    /* header */

    .header {
      text-align: center;
    }

    .header_title {
      font-size: 3rem;
      font-weight: 900;
      color: var(--color-light-grey);
    }

    /* controls */

    .controls {
      background: yellow;
    }

    /* counter */

    .counter {
      background: var(--color-dark-grey);
    }

    .counter_value {
      width: 100%;
      height: 15rem;
      text-align: center;
      font-size: 5rem;
      font-weight: 900;
      background: none;
      color: var(--color-white);
      border-width: 0;
      border-bottom: 1px solid var(--color-light-grey);
    }

    .counter_actions {
      display: flex;
    }

    .counter_button {
      background: none;
      width: 50%;
      border-width: 0;
      color: var(--color-white);
      font-size: 3rem;
      height: 10rem;
      border-bottom: 1px solid var(--color-light-grey);
      transition: transform 0.1s;
      transform: translateY(0);
    }

    .counter_button:disabled {
      opacity: 0.2;
    }

    .counter_button:active {
      background: var(--color-medium-grey);
      transform: translateY(2%);
    }

    .counter_button_first {
      border-right: 1px solid var(--color-light-grey);
    }

    /* footer */

    .footer {
      background: var(--color-dark-grey);
      color: var(--color-light-grey);
      padding: 2rem;
      font-size: 0.8rem;
      text-align: center;
    }

    .footer_link {
      color: var(--color-white);
    }
  };
`;
}

customElements.define("tally-counter", TallyCounter);
