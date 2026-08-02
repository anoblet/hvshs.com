import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Base } from '../base';
import '../button';

export interface HeroImage {
  src: string;
  srcset?: string;
  alt: string;
}

const taglines = [
  'Smart Home Solutions for the Hudson Valley',
  'Design, Install, and Manage Your Smart Home',
  'Whole-Home Automation, Simplified',
  'Connecting Your Home, Effortlessly',
  'Local Experts in Smart Home Technology',
  'Seamless Smart Home Services',
  'Making Your Home Work Smarter',
  'Expert Smart Home Installation & Support',
];

@customElement('hero-component')
export class HeroComponent extends Base {
  @property({ type: String }) accessor images = '[]';

  @property({ type: Number }) accessor interval = 6000;

  static styles = [
    ...super.styles,
    css`
      :host {
        display: block;
        flex: 1;
        width: 100%;
      }

      .hero {
        aspect-ratio: 16 / 9;
        border-radius: 0.5rem;
        overflow: hidden;
        position: relative;
        width: 100%;
      }

      .slides,
      .slide {
        inset: 0;
        position: absolute;
      }

      .slide {
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 1.2s ease-in-out;
        width: 100%;
      }

      .slide.active {
        opacity: 1;
      }

      .overlay {
        align-items: center;
        display: flex;
        inset: 0;
        justify-content: center;
        padding: 1.5rem;
        position: absolute;
      }

      .text {
        background: rgb(12 21 26 / 0.62);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        border: 1px solid rgb(255 255 255 / 0.14);
        border-radius: 0.75rem;
        color: #fff;
        max-width: 44rem;
        padding: 1.75rem 2rem;
        text-align: center;
        width: 100%;
      }

      h1 {
        color: #fff;
        font-size: 1.75rem;
        font-weight: 500;
        line-height: 1.4;
        margin: 0;
      }

      h1 .highlight {
        font-weight: 800;
      }

      .buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        margin-top: 1.5rem;
      }

      .buttons button-component {
        flex: 1 1 auto;
        min-width: 12rem;
      }

      .buttons button-component[variant='secondary'] {
        background-color: rgb(255 255 255 / 0.92);
        color: #0c151a;
        outline-color: #fff;
      }

      .buttons button-component[variant='primary'] {
        --button-background-color: var(--color-sky-700);
        --button-color: #fff;
      }

      @media (max-width: 48rem) {
        .hero {
          aspect-ratio: auto;
          min-height: 24rem;
        }

        .overlay {
          padding: 1rem;
        }

        .text {
          padding: 1rem;
        }

        h1 {
          font-size: 1.25rem;
        }

        .buttons {
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .buttons button-component {
          min-width: 100%;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .slide {
          transition: none;
        }
      }
    `,
  ];

  private current = 0;

  private timerId?: ReturnType<typeof setInterval>;

  private tagline = taglines[Math.floor(Math.random() * taglines.length)];

  private get slides(): HeroImage[] {
    try {
      const parsed = JSON.parse(this.images);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.start();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.stop();
  }

  private reducedMotion() {
    return (
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    );
  }

  private start() {
    this.stop();
    if (this.slides.length < 2 || this.reducedMotion()) return;
    this.timerId = setInterval(() => {
      this.current = (this.current + 1) % this.slides.length;
      this.requestUpdate();
    }, this.interval);
  }

  private stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = undefined;
    }
  }

  private handleEnter = () => this.stop();

  private handleLeave = () => this.start();

  render() {
    return html`
      <div
        class="hero"
        @mouseenter=${this.handleEnter}
        @mouseleave=${this.handleLeave}
        @focusin=${this.handleEnter}
        @focusout=${this.handleLeave}
      >
        <div class="slides">
          ${this.slides.map(
            (image, index) => html`
              <img
                class="slide ${index === this.current ? 'active' : ''}"
                src=${image.src}
                srcset=${image.srcset ?? ''}
                alt=${image.alt}
                loading=${index === 0 ? 'eager' : 'lazy'}
              />
            `
          )}
        </div>
        <div class="overlay">
          <div class="text">
            <h1>
              Hudson Valley Smart Home Services<br />
              <span class="highlight">${this.tagline}</span>
            </h1>
            <div class="buttons">
              <button-component href="/services" variant="primary">
                Services
              </button-component>
              <button-component href="/contact" variant="secondary">
                Contact
              </button-component>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
