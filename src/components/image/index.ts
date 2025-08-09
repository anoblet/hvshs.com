import { css, html, LitElement } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { customElement, property } from 'lit/decorators.js';
import { globalStyles } from '@styles/global';

@customElement('image-component')
export class ImageComponent extends LitElement {
  @property({ type: String }) accessor alt = '';
  @property({ reflect: true, type: Boolean }) accessor loaded = false;
  @property({ type: String }) accessor src = '';
  @property({ type: Number }) accessor width: number | undefined = undefined;
  @property({ type: Number }) accessor height: number | undefined = undefined;
  @property({ type: String }) accessor fetchpriority: 'high' | 'low' | 'auto' =
    'auto';

  static styles = [
    globalStyles,
    css`
      img {
        width: 100%;
      }
    `,
  ];

  firstUpdated() {
    const img = this.shadowRoot?.querySelector('img');
    if (img) {
      img.addEventListener('load', this.onLoad.bind(this));
    }
  }

  onLoad() {
    this.loaded = true;
  }

  render() {
    return html`
      <img
        src="${this.src}"
        alt="${this.alt}"
        loading="lazy"
        decoding="async"
        fetchpriority="${this.fetchpriority}"
        width=${ifDefined(this.width)}
        height=${ifDefined(this.height)}
      />
    `;
  }
}
