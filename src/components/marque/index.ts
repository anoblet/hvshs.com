import { Base } from '@components/base';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('marque-component')
export class Marque extends Base {
  @property({ type: Array }) accessor items: string[] = [];
  @property({ type: Number }) accessor interval = 10;

  static styles = [
    ...super.styles,
    css`
      :host {
        display: block;
        overflow: hidden;
        white-space: nowrap;
        box-sizing: border-box;
        background-color: var(--marque-background-color);
        color: var(--marque-color);
      }
      .stagnant-content {
        display: inline-block;
        font-weight: bold;
      }
    `,
  ];

  private _currentIndex = 0;
  private _intervalId: number | undefined;

  connectedCallback() {
    super.connectedCallback?.();
    this._setRandomItem();
    this._intervalId = window.setInterval(() => {
      this._setRandomItem();
      this.requestUpdate();
    }, this.interval * 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback?.();
    if (this._intervalId) {
      clearInterval(this._intervalId);
    }
  }

  private _setRandomItem() {
    if (this.items.length > 0) {
      this._currentIndex = Math.floor(Math.random() * this.items.length);
    } else {
      this._currentIndex = 0;
    }
  }

  render() {
    const content =
      this.items.length > 0
        ? this.items[this._currentIndex]
        : html`<slot></slot>`;
    return html`<div class="bold stagnant-content">${content}</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'marque-component': Marque;
  }
}
