import { Base } from '@components/base';
import { planet } from '@icons/planet';
import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { phone } from '@icons/phone';
import { mail } from '@icons/mail';
import { language } from '@icons/language';

@customElement('business-card')
export class BusinessCard extends Base {
  static styles = [
    ...super.styles,
    css`
      :host {
        --icon-padding: 0.5rem;

        background-color: var(--color-neutral-900);
        border: 1px solid var(--color-neutral-500);
        border-radius: 0.5rem;
        height: calc(600px / 2);
        justify-content: center;
        width: calc(1050px / 2);
      }

      .amber-300 {
        color: var(--color-amber-300);
      }

      .padding {
        padding: 0.75rem;
      }

      .sky-200 {
        color: var(--color-sky-200);
      }

      span {
        align-items: center;
        display: flex;
      }

      ul {
        padding: 0.5rem;
      }
    `,
  ];

  render() {
    return html`
      <div class="column flex padding width-100">
        <h1 class="text-align-center">Andrew Noblet</h1>
        <p class="text-align-center">
          Empowering your online presence with design, hosting, and expert
          guidance.
        </p>
        <div class="flex space-around">
          <ul class="amber-300">
            <li>Design</li>
            <li>Hosting</li>
            <li>Consultation</li>
          </ul>
          <ul class="amber-300">
            <li>Mentorship</li>
            <li>Tutoring</li>
            <li>Development</li>
          </ul>
        </div>
        <div class="gap flex space-around">
          <span>
            <icon-component>${phone}</icon-component>
            (914) 417-9070
          </span>
          <span>
            <icon-component>${mail}</icon-component>
            andrewbnoblet@gmail.com
          </span>
        </div>
        <span class="justify-content-center text-align-center">
          <icon-component>${language}</icon-component>
          andrewbnoblet.com
        </span>
      </div>
    `;
  }
}
