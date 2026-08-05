import { Base } from '@components/base';
import '@components/icon';
import '@components/social';
import { close, menu } from '@icons/index';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { style } from './index.css';

@customElement('navigation-component')
export class NavigationComponent extends Base {
  @property({ type: Boolean, reflect: true }) accessor opened = false;

  static styles = [...super.styles, style];

  toggle() {
    this.opened = !this.opened;

    if (this.opened) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }
  }

  render() {
    return html`
      <div class="space-between">
        <button
          class="menu-toggle"
          @click=${this.toggle}
          aria-label=${this.opened
            ? 'Close navigation menu'
            : 'Open navigation menu'}
          aria-expanded=${this.opened ? 'true' : 'false'}
          aria-controls="mobile-drawer"
        >
          <icon-component>${this.opened ? close : menu}</icon-component>
        </button>
        <a
          href="https://hvshs.com/"
          class="brand-icon"
          aria-label="Hudson Valley Smart Home Services"
        >
          <span class="brand-title">HVSHS</span>
        </a>
      </div>
      <div
        id="mobile-drawer"
        class="column gap flex drawer"
        aria-hidden=${this.opened ? 'false' : 'true'}
      >
        <button
          class="menu-toggle"
          @click=${this.toggle}
          aria-label="Close navigation menu"
        >
          <icon-component>${close}</icon-component>
        </button>
        <div class="flex-1 padding">
          <nav aria-label="Mobile navigation">
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
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/mentorship">Education</a></li>
              <li><a href="/service-area">Service Area</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </nav>
        </div>
        <social-component></social-component>
      </div>
    `;
  }
}
