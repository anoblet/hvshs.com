import { Base } from '@components/base';
import { hub } from '@icons/index';
import { globalStyles } from '@styles/global';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { style } from './index.css';

@customElement('navigation-desktop')
export class NavigationDesktop extends Base {
  @property({ type: Boolean, reflect: true }) accessor opened = false;

  static styles = [globalStyles, style];

  close() {
    this.opened = false;
  }

  render() {
    return html`
      <div class="left">
        <a href="/" id="home" part="home" aria-label="Home">
          <icon-component>${hub}</icon-component>
        </a>
        <ul class="overflow-x">
          <li>
            <div class="dropdown">
              <a
                href="/services"
                class="dropdown-trigger"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                aria-controls="services-menu"
                >Services</a
              >
              <div
                class="dropdown-menu"
                id="services-menu"
                role="menu"
                aria-label="Services submenu"
              >
                <a href="/services/design" role="menuitem">Design</a>
                <a href="/services/installation" role="menuitem"
                  >Installation</a
                >
                <a href="/services/consultation" role="menuitem"
                  >Consultation</a
                >
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <a
                href="/portfolio"
                class="dropdown-trigger"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                aria-controls="projects-menu"
                >Projects</a
              >
              <div
                class="dropdown-menu"
                id="projects-menu"
                role="menu"
                aria-label="Projects submenu"
              >
                <a href="/portfolio/personal" role="menuitem">Residential</a>
                <a href="/portfolio/professional" role="menuitem">Commercial</a>
              </div>
            </div>
          </li>
          <li><a href="/mentorship">Education</a></li>
        </ul>
      </div>
      <a
        href="/"
        class="brand-icon"
        part="brand-icon"
        aria-label="Hudson Valley Smart Home Services"
      >
        <icon-component>${hub}</icon-component>
      </a>
      <div class="right">
        <ul>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/about">About</a></li>
        </ul>
        <social-component></social-component>
      </div>
    `;
  }
}
