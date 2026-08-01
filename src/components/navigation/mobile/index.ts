import { Base } from '@components/base';
import '@components/icon';
import '@components/social';
import { close, homeRepairService, menu } from '@icons/index';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { style } from './index.css';

@customElement('navigation-mobile')
export class NavigationMobile extends Base {
  @property({ type: Boolean, reflect: true }) accessor opened = false;

  static styles = [...super.styles, style];

  scrollY = 0;

  toggle() {
    this.opened = !this.opened;

    if (this.opened) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }
  }

  firstUpdated() {
    super.firstUpdated();

    window.addEventListener('scroll', () => {
      if (this.scrollY > window.scrollY) {
        this.hidden = false;
      }

      if (this.scrollY < window.scrollY) {
        this.hidden = true;
      }

      this.scrollY = window.scrollY;
    });
  }

  render() {
    return html`
      <div class="space-between">
        <icon-component @click=${this.toggle}>${menu}</icon-component>
        <a
          href="https://hvshs.com/"
          class="brand-icon"
          aria-label="Hudson Valley Smart Home Services"
        >
          <icon-component>${homeRepairService}</icon-component>
        </a>
      </div>
      <aside class="column gap flex">
        <icon-component @click=${this.toggle}>${close}</icon-component>
        <div class="flex-1 padding">
          <ul>
            <li><a href="/">Home</a></li>
            <li>
              <details>
                <summary>Services</summary>
                <ul>
                  <li><a href="/services/design">Design</a></li>
                  <li><a href="/services/installation">Installation</a></li>
                  <li><a href="/services/consultation">Consultation</a></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Projects</summary>
                <ul>
                  <li><a href="/portfolio/personal">Residential</a></li>
                  <li><a href="/portfolio/professional">Commercial</a></li>
                </ul>
              </details>
            </li>
            <li><a href="/mentorship">Education</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
        <social-component></social-component>
      </aside>
    `;
  }
}
