import { Base } from '@components/base';
import '@components/button';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('consultation-component')
export class Consultation extends Base {
  @property({ type: String }) accessor copy: string = '';

  copyArray = [
    'Interested in a Smarter Home?',
    'Let’s Connect!',
    'Ready to Automate Your Home?',
    'Let’s Discuss Your Smart Home!',
    'Let’s Bring Your Smart Home to Life!',
    'Let’s Make Your Home Work Smarter!',
    'Let’s Create a Seamless Smart Home Together!',
    'Let’s Start Your Smart Home Journey!',
  ];

  constructor() {
    super();
    this.copy =
      this.copyArray[Math.floor(Math.random() * this.copyArray.length)];
  }

  static styles = [
    ...super.styles,
    css`
      :host {
        --a-color: inherit;
        --icon-padding: 0.25rem;

        justify-content: center;
      }

      button-component {
        gap: 0.5rem;
      }
    `,
  ];

  render() {
    return html`
      <section class="gap grid justify-content-center text-align-center">
        <h2>${this.copy}</h2>
        <p>
          Let's connect and discuss how our smart home services can work for
          your home.
        </p>
        <div></div>
        <a
          class="justify-content-center"
          href="https://calendar.app.google/JjnLtVR6mnM11FcS9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button-component> Contact Us </button-component>
        </a>
      </section>
    `;
  }
}
