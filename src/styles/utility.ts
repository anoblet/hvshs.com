import { css } from 'lit';

export const utility = css`
  .align-content-space-around {
    align-content: space-around;
  }

  .align-items-center {
    align-items: center;
  }

  .align-self-center {
    align-self: center;
  }

  .align-self-flex-end {
    align-self: flex-end;
  }

  .color-tertiary {
    color: var(--tertiary-color);
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .font-weight-500 {
    font-weight: 500;
  }

  .font-weight-600 {
    font-weight: 600;
  }

  .font-weight-700 {
    font-weight: 700;
  }

  .font-weight-800 {
    font-weight: 800;
  }

  .gap-0-25 {
    gap: 0.25rem;
  }

  .gap-0-5 {
    gap: 0.5rem;
  }

  .height-0-25 {
    height: 0.25rem;
  }

  .height-0-5 {
    height: 0.5rem;
  }

  .justify-content-space-around {
    justify-content: space-around;
  }

  .margin-auto {
    margin: auto;
  }

  .space-around {
    justify-content: space-around;
  }

  .space-between {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .visually-hidden {
    display: none;
    visibility: hidden;
  }

  .padding-top-3 {
    padding-top: 3rem;
  }

  .padding-top-5 {
    padding-top: 5rem;
  }

  .padding-top-6 {
    padding-top: 6rem;
  }

  .border-radius-50 {
    border-radius: 50%;
  }

  .box-shadow-tertiary {
    box-shadow: 0 0 0 4px var(--tertiary-color);
  }

  .object-fit-cover {
    object-fit: cover;
  }

  .height-50vw {
    height: 50vw;
  }

  .width-50vw {
    width: 50vw;
  }

  .height-16 {
    height: 16rem;
  }

  .width-16 {
    width: 16rem;
  }

  .max-height-16 {
    max-height: 16rem;
  }

  .max-width-16 {
    max-width: 16rem;
  }

  .padding-horizontal-1 {
    padding: 0 1rem;
  }

  .block {
    display: block;
  }

  .relative {
    position: relative;
  }

  .z-index-1 {
    z-index: 1;
  }

  .button {
    background: var(--button-background-color, var(--color-primary));
    border: 1px solid var(--button-border-color, var(--color-primary));
    border-radius: 0.375rem;
    color: var(--button-text-color, var(--color-primary-contrast));
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    font-weight: 500;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    text-decoration: none;
    transition: all 0.15s ease-in-out;
  }

  .button:hover {
    background: var(--button-hover-background-color, var(--color-primary-700));
    border-color: var(--button-hover-border-color, var(--color-primary-700));
    text-decoration: none;
  }

  .button-primary {
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: var(--color-primary-contrast);
  }

  .button-primary:hover {
    background: var(--color-primary-700);
    border-color: var(--color-primary-700);
  }
`;
