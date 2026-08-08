import { css } from 'lit';

export const style = css`
  .menu-toggle {
    appearance: none;
    background: transparent;
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
    text-decoration: none;

    &:focus-visible {
      outline: 2px solid var(--color-accent-500, var(--color-sky-500));
      outline-offset: 4px;
      border-radius: 0.25rem;
    }
  }

  :host {
    background-color: var(--navigation-background-color);
    box-shadow: var(--box-shadow);
    opacity: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;

    .drawer > ul {
      margin: 0 1rem;
    }
  }

  :host([opened]) {
    .drawer {
      left: 0;
      transition: left 0.2s ease-in-out;
    }
  }

  .drawer {
    background-color: var(--navigation-background-color);
    height: 100vh;
    left: -100vw;
    position: fixed;
    transition: left 0.2s ease-in-out;
    width: 100vw;
    z-index: 1;

    a {
      color: var(--navigation-a-color);

      &:hover {
        color: var(--navigation-a-hover-color);
      }
    }
  }

  details {
    summary {
      cursor: pointer;
      list-style: none;
      font-weight: 500;

      &::marker {
        content: '';
        display: none;
      }

      &:hover {
        color: var(--navigation-a-hover-color);
      }
    }

    &[open] summary::before {
      transform: rotate(90deg);
    }

    ul {
      margin-top: 1rem;
    }
  }

  icon-component {
    color: var(--navigation-icon-color);
    cursor: pointer;
    z-index: 1;
  }

  .brand-icon {
    align-items: center;
    cursor: pointer;
    display: flex;
    gap: 0.5rem;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }

  .brand-title {
    color: var(--navigation-a-color);
    font-size: 1rem;
    font-weight: 600;
  }

  .brand-title-desktop {
    display: none;
  }

  @media (min-width: 48rem) {
    .brand-title-mobile {
      display: none;
    }

    .brand-title-desktop {
      display: inline;
    }
  }

  svg {
    height: 2rem;
    width: 2rem;
  }

  ul {
    display: grid;
    gap: 1rem;
    list-style: none;
    padding: 0 1rem;

    li {
      padding: 0 1rem;
    }
  }

  .title {
    align-items: center;
    color: var(--color-sky-200);
    display: flex;
    flex: 1;
    font-size: 1.25rem;
    font-weight: 600;
    height: 100%;
    justify-content: center;
    padding: 1rem;
    position: absolute;
    width: 100%;
  }
`;
