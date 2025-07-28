import '@components/button';
import '@components/icon';
import { phone } from '@icons/index';
import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Base } from '../base';

@customElement('contact-component')
export class ContactComponent extends Base {
  static styles = [
    ...super.styles,
    css`
      :host {
        --icon-padding: 0.5rem;
        --icon-size: 1.5rem;
        --icon-color: inherit;

        align-items: center;
        background-color: var(--button-background-color);
        border: 1px solid var(--color-neutral-400);
        border-radius: 50%;
        bottom: 1rem;
        box-shadow: var(--box-shadow);
        color: var(--button-color);
        cursor: pointer;
        display: flex;
        justify-content: center;
        outline: var(--button-outline);
        padding: 0.5rem;
        position: fixed;
        right: 1rem;
        z-index: 1;

        a {
          color: inherit;
        }
      }

      :host(:hover) {
        background-color: var(--button-hover-background-color);
        color: var(--button-hover-color);
        transform: scale(1.05);
        transition: transform 0.1s ease-in-out;
      }

      icon-component {
        color: inherit;

        &:hover {
          color: inherit;
        }
      }
    `,
  ];

  render() {
    return html`
      <a
        href="https://calendar.app.google/JjnLtVR6mnM11FcS9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <icon-component>${phone}</icon-component>
      </a>
    `;
  }
}
