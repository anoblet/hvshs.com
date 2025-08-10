import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('loading-bar')
export class LoadingBar extends LitElement {
  @property({ type: Boolean })
  accessor active = false;

  static styles = css`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10000;
      height: 3px;
      pointer-events: none;
    }

    .bar {
      height: 100%;
      background: linear-gradient(
        90deg,
        var(--primary-color, #3b82f6) 0%,
        var(--secondary-color, #06b6d4) 50%,
        var(--primary-color, #3b82f6) 100%
      );
      width: 0%;
      opacity: 0;
      transition: opacity 0.2s ease;
      animation: none;
    }

    :host([active]) .bar {
      opacity: 1;
      animation: progress 2s ease-out forwards;
    }

    @keyframes progress {
      0% {
        width: 0%;
        transform: translateX(-100%);
      }
      10% {
        width: 10%;
        transform: translateX(0%);
      }
      50% {
        width: 70%;
      }
      90% {
        width: 95%;
      }
      100% {
        width: 100%;
      }
    }

    .completion {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      background: var(--primary-color, #3b82f6);
      transform: translateX(100%);
      opacity: 0;
    }

    :host([completing]) .completion {
      opacity: 1;
      animation: complete 0.3s ease-out forwards;
    }

    @keyframes complete {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `;

  render() {
    return html`
      <div class="bar"></div>
      <div class="completion"></div>
    `;
  }

  start() {
    this.active = true;
    this.removeAttribute('completing');
  }

  complete() {
    this.active = false;
    this.setAttribute('completing', '');
    setTimeout(() => {
      this.removeAttribute('completing');
    }, 300);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'loading-bar': LoadingBar;
  }
}
