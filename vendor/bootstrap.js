import { css } from "lit";

export const bootstrap = css`
  /*!
* Bootswatch v5.1.3
* Homepage: https://bootswatch.com
* Copyright 2012-2021 Thomas Park
* Licensed under MIT
* Based on Bootstrap
*/
  /*!
* Bootstrap v5.1.3 (https://getbootstrap.com/)
* Copyright 2011-2021 The Bootstrap Authors
* Copyright 2011-2021 Twitter, Inc.
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
  :host {
    --bs-blue: #325d88;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #e83e8c;
    --bs-red: #d9534f;
    --bs-orange: #f47c3c;
    --bs-yellow: #ffc107;
    --bs-green: #93c54b;
    --bs-teal: #20c997;
    --bs-cyan: #29abe0;
    --bs-white: #fff;
    --bs-gray: #8e8c84;
    --bs-gray-dark: #3e3f3a;
    --bs-gray-100: #f8f9fa;
    --bs-gray-200: #f8f5f0;
    --bs-gray-300: #dfd7ca;
    --bs-gray-400: #ced4da;
    --bs-gray-500: #98978b;
    --bs-gray-600: #8e8c84;
    --bs-gray-700: #495057;
    --bs-gray-800: #3e3f3a;
    --bs-gray-900: #212529;
    --bs-primary: #325d88;
    --bs-secondary: #8e8c84;
    --bs-success: #93c54b;
    --bs-info: #29abe0;
    --bs-warning: #f47c3c;
    --bs-danger: #d9534f;
    --bs-light: #f8f5f0;
    --bs-dark: #3e3f3a;
    --bs-primary-rgb: 50, 93, 136;
    --bs-secondary-rgb: 142, 140, 132;
    --bs-success-rgb: 147, 197, 75;
    --bs-info-rgb: 41, 171, 224;
    --bs-warning-rgb: 244, 124, 60;
    --bs-danger-rgb: 217, 83, 79;
    --bs-light-rgb: 248, 245, 240;
    --bs-dark-rgb: 62, 63, 58;
    --bs-white-rgb: 255, 255, 255;
    --bs-black-rgb: 0, 0, 0;
    --bs-body-color-rgb: 62, 63, 58;
    --bs-body-bg-rgb: 255, 255, 255;
    --bs-font-sans-serif: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
    --bs-gradient: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0)
    );
    --bs-body-font-family: var(--bs-font-sans-serif);
    --bs-body-font-size: 1rem;
    --bs-body-font-weight: 400;
    --bs-body-line-height: 1.5;
    --bs-body-color: #3e3f3a;
    --bs-body-bg: #fff;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
    margin: 0;
    font-family: var(--bs-body-font-family);
    font-size: var(--bs-body-font-size);
    font-weight: var(--bs-body-font-weight);
    line-height: var(--bs-body-line-height);
    color: var(--bs-body-color);
    text-align: var(--bs-body-text-align);
    /* background-color: var(--bs-body-bg); */
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  hr {
    margin: 1rem 0;
    color: inherit;
    background-color: currentColor;
    border: 0;
    opacity: 0.25;
  }

  hr:not([size]) {
    height: 1px;
  }

  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4,
  h5,
  .h5,
  h6,
  .h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 400;
    line-height: 1.2;
  }

  h1,
  .h1 {
    font-size: calc(1.375rem + 1.5vw);
  }

  @media (min-width: 1200px) {
    h1,
    .h1 {
      font-size: 2.5rem;
    }
  }

  h2,
  .h2 {
    font-size: calc(1.325rem + 0.9vw);
  }

  @media (min-width: 1200px) {
    h2,
    .h2 {
      font-size: 2rem;
    }
  }

  h3,
  .h3 {
    font-size: calc(1.3rem + 0.6vw);
  }

  @media (min-width: 1200px) {
    h3,
    .h3 {
      font-size: 1.75rem;
    }
  }

  h4,
  .h4 {
    font-size: calc(1.275rem + 0.3vw);
  }

  @media (min-width: 1200px) {
    h4,
    .h4 {
      font-size: 1.5rem;
    }
  }

  h5,
  .h5 {
    font-size: 1.25rem;
  }

  h6,
  .h6 {
    font-size: 1rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  abbr[title],
  abbr[data-bs-original-title] {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    cursor: help;
    -webkit-text-decoration-skip-ink: none;
    text-decoration-skip-ink: none;
  }

  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }

  ol,
  ul {
    padding-left: 2rem;
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  dt {
    font-weight: 700;
  }

  dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }

  blockquote {
    margin: 0 0 1rem;
  }

  b,
  strong {
    font-weight: bolder;
  }

  small,
  .small {
    font-size: 0.875em;
  }

  mark,
  .mark {
    padding: 0.2em;
    background-color: #fcf8e3;
  }

  sub,
  sup {
    position: relative;
    font-size: 0.75em;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  a {
    color: #93c54b;
    text-decoration: underline;
  }

  a:hover {
    color: #769e3c;
  }

  a:not([href]):not([class]),
  a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: var(--bs-font-monospace);
    font-size: 1em;
    direction: ltr /* rtl:ignore */;
    unicode-bidi: bidi-override;
  }

  pre {
    display: block;
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    font-size: 0.875em;
  }

  pre code {
    font-size: inherit;
    color: inherit;
    word-break: normal;
  }

  code {
    font-size: 0.875em;
    color: #e83e8c;
    word-wrap: break-word;
  }

  a > code {
    color: inherit;
  }

  kbd {
    padding: 0.2rem 0.4rem;
    font-size: 0.875em;
    color: #fff;
    background-color: #212529;
    border-radius: 0.2rem;
  }

  kbd kbd {
    padding: 0;
    font-size: 1em;
    font-weight: 700;
  }

  figure {
    margin: 0 0 1rem;
  }

  img,
  svg {
    vertical-align: middle;
  }

  table {
    caption-side: bottom;
    border-collapse: collapse;
  }

  caption {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: #8e8c84;
    text-align: left;
  }

  th {
    text-align: inherit;
    text-align: -webkit-match-parent;
  }

  thead,
  tbody,
  tfoot,
  tr,
  td,
  th {
    border-color: inherit;
    border-style: solid;
    border-width: 0;
  }

  label {
    display: inline-block;
  }

  button {
    border-radius: 0;
  }

  button:focus:not(:focus-visible) {
    outline: 0;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button,
  select {
    text-transform: none;
  }

  [role="button"] {
    cursor: pointer;
  }

  select {
    word-wrap: normal;
  }

  select:disabled {
    opacity: 1;
  }

  [list]::-webkit-calendar-picker-indicator {
    display: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button:not(:disabled),
  [type="button"]:not(:disabled),
  [type="reset"]:not(:disabled),
  [type="submit"]:not(:disabled) {
    cursor: pointer;
  }

  ::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  textarea {
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    float: left;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: calc(1.275rem + 0.3vw);
    line-height: inherit;
  }

  @media (min-width: 1200px) {
    legend {
      font-size: 1.5rem;
    }
  }

  legend + * {
    clear: left;
  }

  ::-webkit-datetime-edit-fields-wrapper,
  ::-webkit-datetime-edit-text,
  ::-webkit-datetime-edit-minute,
  ::-webkit-datetime-edit-hour-field,
  ::-webkit-datetime-edit-day-field,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-year-field {
    padding: 0;
  }

  ::-webkit-inner-spin-button {
    height: auto;
  }

  [type="search"] {
    outline-offset: -2px;
    -webkit-appearance: textfield;
  }

  /* rtl:raw:
[type="tel"],
[type="url"],
[type="email"],
[type="number"] {
 direction: ltr;
}
*/
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  ::file-selector-button {
    font: inherit;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  output {
    display: inline-block;
  }

  iframe {
    border: 0;
  }

  summary {
    display: list-item;
    cursor: pointer;
  }

  progress {
    vertical-align: baseline;
  }

  [hidden] {
    display: none !important;
  }

  .lead {
    font-size: 1.25rem;
    font-weight: 300;
  }

  .display-1 {
    font-size: calc(1.625rem + 4.5vw);
    font-weight: 300;
    line-height: 1.2;
  }

  @media (min-width: 1200px) {
    .display-1 {
      font-size: 5rem;
    }
  }

  .display-2 {
    font-size: calc(1.575rem + 3.9vw);
    font-weight: 300;
    line-height: 1.2;
  }

  @media (min-width: 1200px) {
    .display-2 {
      font-size: 4.5rem;
    }
  }

  .display-3 {
    font-size: calc(1.525rem + 3.3vw);
    font-weight: 300;
    line-height: 1.2;
  }

  @media (min-width: 1200px) {
    .display-3 {
      font-size: 4rem;
    }
  }

  .display-4 {
    font-size: calc(1.475rem + 2.7vw);
    font-weight: 300;
    line-height: 1.2;
  }

  @media (min-width: 1200px) {
    .display-4 {
      font-size: 3.5rem;
    }
  }

  .display-5 {
    font-size: calc(1.425rem + 2.1vw);
    font-weight: 300;
    line-height: 1.2;
  }

  @media (min-width: 1200px) {
    .display-5 {
      font-size: 3rem;
    }
  }

  .display-6 {
    font-size: calc(1.375rem + 1.5vw);
    font-weight: 300;
    line-height: 1.2;
  }

  @media (min-width: 1200px) {
    .display-6 {
      font-size: 2.5rem;
    }
  }

  .list-unstyled {
    padding-left: 0;
    list-style: none;
  }

  .list-inline {
    padding-left: 0;
    list-style: none;
  }

  .list-inline-item {
    display: inline-block;
  }

  .list-inline-item:not(:last-child) {
    margin-right: 0.5rem;
  }

  .initialism {
    font-size: 0.875em;
    text-transform: uppercase;
  }

  .blockquote {
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  .blockquote > :last-child {
    margin-bottom: 0;
  }

  .blockquote-footer {
    margin-top: -1rem;
    margin-bottom: 1rem;
    font-size: 0.875em;
    color: #8e8c84;
  }

  .blockquote-footer::before {
    content: "— ";
  }

  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  .img-thumbnail {
    padding: 0.25rem;
    background-color: #fff;
    border: 1px solid #dfd7ca;
    border-radius: 0.25rem;
    max-width: 100%;
    height: auto;
  }

  .figure {
    display: inline-block;
  }

  .figure-img {
    margin-bottom: 0.5rem;
    line-height: 1;
  }

  .figure-caption {
    font-size: 0.875em;
    color: #8e8c84;
  }

  .container,
  .container-fluid,
  .container-sm,
  .container-md,
  .container-lg,
  .container-xl,
  .container-xxl {
    width: 100%;
    padding-right: var(--bs-gutter-x, 0.75rem);
    padding-left: var(--bs-gutter-x, 0.75rem);
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 576px) {
    .container,
    .container-sm {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .container,
    .container-sm,
    .container-md {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    .container,
    .container-sm,
    .container-md,
    .container-lg {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    .container,
    .container-sm,
    .container-md,
    .container-lg,
    .container-xl {
      max-width: 1140px;
    }
  }

  @media (min-width: 1400px) {
    .container,
    .container-sm,
    .container-md,
    .container-lg,
    .container-xl,
    .container-xxl {
      max-width: 1320px;
    }
  }

  .row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-0.5 * var(--bs-gutter-x));
    margin-left: calc(-0.5 * var(--bs-gutter-x));
  }

  .row > * {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }

  .col {
    -ms-flex: 1 0 0%;
    flex: 1 0 0%;
  }

  .row-cols-auto > * {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-1 > * {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-2 > * {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-3 > * {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 33.333333%;
  }

  .row-cols-4 > * {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-5 > * {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-6 > * {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 16.666667%;
  }

  .col-auto {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
  }

  .col-1 {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 8.333333%;
  }

  .col-2 {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 16.666667%;
  }

  .col-3 {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 25%;
  }

  .col-4 {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 33.333333%;
  }

  .col-5 {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 41.666667%;
  }

  .col-6 {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 50%;
  }

  .col-7 {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 58.333333%;
  }

  .col-8 {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 66.666667%;
  }

  .col-9 {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 75%;
  }

  .col-10 {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 83.333333%;
  }

  .col-11 {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 91.666667%;
  }

  .col-12 {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-1 {
    margin-left: 8.333333%;
  }

  .offset-2 {
    margin-left: 16.666667%;
  }

  .offset-3 {
    margin-left: 25%;
  }

  .offset-4 {
    margin-left: 33.333333%;
  }

  .offset-5 {
    margin-left: 41.666667%;
  }

  .offset-6 {
    margin-left: 50%;
  }

  .offset-7 {
    margin-left: 58.333333%;
  }

  .offset-8 {
    margin-left: 66.666667%;
  }

  .offset-9 {
    margin-left: 75%;
  }

  .offset-10 {
    margin-left: 83.333333%;
  }

  .offset-11 {
    margin-left: 91.666667%;
  }

  .g-0,
  .gx-0 {
    --bs-gutter-x: 0;
  }

  .g-0,
  .gy-0 {
    --bs-gutter-y: 0;
  }

  .g-1,
  .gx-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-1,
  .gy-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-2,
  .gx-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-2,
  .gy-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-3,
  .gx-3 {
    --bs-gutter-x: 1rem;
  }

  .g-3,
  .gy-3 {
    --bs-gutter-y: 1rem;
  }

  .g-4,
  .gx-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-4,
  .gy-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-5,
  .gx-5 {
    --bs-gutter-x: 3rem;
  }

  .g-5,
  .gy-5 {
    --bs-gutter-y: 3rem;
  }

  @media (min-width: 576px) {
    .col-sm {
      -ms-flex: 1 0 0%;
      flex: 1 0 0%;
    }
    .row-cols-sm-auto > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
    }
    .row-cols-sm-1 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 100%;
    }
    .row-cols-sm-2 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 50%;
    }
    .row-cols-sm-3 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 33.333333%;
    }
    .row-cols-sm-4 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 25%;
    }
    .row-cols-sm-5 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 20%;
    }
    .row-cols-sm-6 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 16.666667%;
    }
    .col-sm-auto {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
    }
    .col-sm-1 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 8.333333%;
    }
    .col-sm-2 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 16.666667%;
    }
    .col-sm-3 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 25%;
    }
    .col-sm-4 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 33.333333%;
    }
    .col-sm-5 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 41.666667%;
    }
    .col-sm-6 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 50%;
    }
    .col-sm-7 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 58.333333%;
    }
    .col-sm-8 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 66.666667%;
    }
    .col-sm-9 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 75%;
    }
    .col-sm-10 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 83.333333%;
    }
    .col-sm-11 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 91.666667%;
    }
    .col-sm-12 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 100%;
    }
    .offset-sm-0 {
      margin-left: 0;
    }
    .offset-sm-1 {
      margin-left: 8.333333%;
    }
    .offset-sm-2 {
      margin-left: 16.666667%;
    }
    .offset-sm-3 {
      margin-left: 25%;
    }
    .offset-sm-4 {
      margin-left: 33.333333%;
    }
    .offset-sm-5 {
      margin-left: 41.666667%;
    }
    .offset-sm-6 {
      margin-left: 50%;
    }
    .offset-sm-7 {
      margin-left: 58.333333%;
    }
    .offset-sm-8 {
      margin-left: 66.666667%;
    }
    .offset-sm-9 {
      margin-left: 75%;
    }
    .offset-sm-10 {
      margin-left: 83.333333%;
    }
    .offset-sm-11 {
      margin-left: 91.666667%;
    }
    .g-sm-0,
    .gx-sm-0 {
      --bs-gutter-x: 0;
    }
    .g-sm-0,
    .gy-sm-0 {
      --bs-gutter-y: 0;
    }
    .g-sm-1,
    .gx-sm-1 {
      --bs-gutter-x: 0.25rem;
    }
    .g-sm-1,
    .gy-sm-1 {
      --bs-gutter-y: 0.25rem;
    }
    .g-sm-2,
    .gx-sm-2 {
      --bs-gutter-x: 0.5rem;
    }
    .g-sm-2,
    .gy-sm-2 {
      --bs-gutter-y: 0.5rem;
    }
    .g-sm-3,
    .gx-sm-3 {
      --bs-gutter-x: 1rem;
    }
    .g-sm-3,
    .gy-sm-3 {
      --bs-gutter-y: 1rem;
    }
    .g-sm-4,
    .gx-sm-4 {
      --bs-gutter-x: 1.5rem;
    }
    .g-sm-4,
    .gy-sm-4 {
      --bs-gutter-y: 1.5rem;
    }
    .g-sm-5,
    .gx-sm-5 {
      --bs-gutter-x: 3rem;
    }
    .g-sm-5,
    .gy-sm-5 {
      --bs-gutter-y: 3rem;
    }
  }

  @media (min-width: 768px) {
    .col-md {
      -ms-flex: 1 0 0%;
      flex: 1 0 0%;
    }
    .row-cols-md-auto > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
    }
    .row-cols-md-1 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 100%;
    }
    .row-cols-md-2 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 50%;
    }
    .row-cols-md-3 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 33.333333%;
    }
    .row-cols-md-4 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 25%;
    }
    .row-cols-md-5 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 20%;
    }
    .row-cols-md-6 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 16.666667%;
    }
    .col-md-auto {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
    }
    .col-md-1 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 8.333333%;
    }
    .col-md-2 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 16.666667%;
    }
    .col-md-3 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 25%;
    }
    .col-md-4 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 33.333333%;
    }
    .col-md-5 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 41.666667%;
    }
    .col-md-6 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 50%;
    }
    .col-md-7 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 58.333333%;
    }
    .col-md-8 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 66.666667%;
    }
    .col-md-9 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 75%;
    }
    .col-md-10 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 83.333333%;
    }
    .col-md-11 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 91.666667%;
    }
    .col-md-12 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 100%;
    }
    .offset-md-0 {
      margin-left: 0;
    }
    .offset-md-1 {
      margin-left: 8.333333%;
    }
    .offset-md-2 {
      margin-left: 16.666667%;
    }
    .offset-md-3 {
      margin-left: 25%;
    }
    .offset-md-4 {
      margin-left: 33.333333%;
    }
    .offset-md-5 {
      margin-left: 41.666667%;
    }
    .offset-md-6 {
      margin-left: 50%;
    }
    .offset-md-7 {
      margin-left: 58.333333%;
    }
    .offset-md-8 {
      margin-left: 66.666667%;
    }
    .offset-md-9 {
      margin-left: 75%;
    }
    .offset-md-10 {
      margin-left: 83.333333%;
    }
    .offset-md-11 {
      margin-left: 91.666667%;
    }
    .g-md-0,
    .gx-md-0 {
      --bs-gutter-x: 0;
    }
    .g-md-0,
    .gy-md-0 {
      --bs-gutter-y: 0;
    }
    .g-md-1,
    .gx-md-1 {
      --bs-gutter-x: 0.25rem;
    }
    .g-md-1,
    .gy-md-1 {
      --bs-gutter-y: 0.25rem;
    }
    .g-md-2,
    .gx-md-2 {
      --bs-gutter-x: 0.5rem;
    }
    .g-md-2,
    .gy-md-2 {
      --bs-gutter-y: 0.5rem;
    }
    .g-md-3,
    .gx-md-3 {
      --bs-gutter-x: 1rem;
    }
    .g-md-3,
    .gy-md-3 {
      --bs-gutter-y: 1rem;
    }
    .g-md-4,
    .gx-md-4 {
      --bs-gutter-x: 1.5rem;
    }
    .g-md-4,
    .gy-md-4 {
      --bs-gutter-y: 1.5rem;
    }
    .g-md-5,
    .gx-md-5 {
      --bs-gutter-x: 3rem;
    }
    .g-md-5,
    .gy-md-5 {
      --bs-gutter-y: 3rem;
    }
  }

  @media (min-width: 992px) {
    .col-lg {
      -ms-flex: 1 0 0%;
      flex: 1 0 0%;
    }
    .row-cols-lg-auto > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
    }
    .row-cols-lg-1 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 100%;
    }
    .row-cols-lg-2 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 50%;
    }
    .row-cols-lg-3 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 33.333333%;
    }
    .row-cols-lg-4 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 25%;
    }
    .row-cols-lg-5 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 20%;
    }
    .row-cols-lg-6 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 16.666667%;
    }
    .col-lg-auto {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
    }
    .col-lg-1 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 8.333333%;
    }
    .col-lg-2 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 16.666667%;
    }
    .col-lg-3 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 25%;
    }
    .col-lg-4 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 33.333333%;
    }
    .col-lg-5 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 41.666667%;
    }
    .col-lg-6 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 50%;
    }
    .col-lg-7 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 58.333333%;
    }
    .col-lg-8 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 66.666667%;
    }
    .col-lg-9 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 75%;
    }
    .col-lg-10 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 83.333333%;
    }
    .col-lg-11 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 91.666667%;
    }
    .col-lg-12 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 100%;
    }
    .offset-lg-0 {
      margin-left: 0;
    }
    .offset-lg-1 {
      margin-left: 8.333333%;
    }
    .offset-lg-2 {
      margin-left: 16.666667%;
    }
    .offset-lg-3 {
      margin-left: 25%;
    }
    .offset-lg-4 {
      margin-left: 33.333333%;
    }
    .offset-lg-5 {
      margin-left: 41.666667%;
    }
    .offset-lg-6 {
      margin-left: 50%;
    }
    .offset-lg-7 {
      margin-left: 58.333333%;
    }
    .offset-lg-8 {
      margin-left: 66.666667%;
    }
    .offset-lg-9 {
      margin-left: 75%;
    }
    .offset-lg-10 {
      margin-left: 83.333333%;
    }
    .offset-lg-11 {
      margin-left: 91.666667%;
    }
    .g-lg-0,
    .gx-lg-0 {
      --bs-gutter-x: 0;
    }
    .g-lg-0,
    .gy-lg-0 {
      --bs-gutter-y: 0;
    }
    .g-lg-1,
    .gx-lg-1 {
      --bs-gutter-x: 0.25rem;
    }
    .g-lg-1,
    .gy-lg-1 {
      --bs-gutter-y: 0.25rem;
    }
    .g-lg-2,
    .gx-lg-2 {
      --bs-gutter-x: 0.5rem;
    }
    .g-lg-2,
    .gy-lg-2 {
      --bs-gutter-y: 0.5rem;
    }
    .g-lg-3,
    .gx-lg-3 {
      --bs-gutter-x: 1rem;
    }
    .g-lg-3,
    .gy-lg-3 {
      --bs-gutter-y: 1rem;
    }
    .g-lg-4,
    .gx-lg-4 {
      --bs-gutter-x: 1.5rem;
    }
    .g-lg-4,
    .gy-lg-4 {
      --bs-gutter-y: 1.5rem;
    }
    .g-lg-5,
    .gx-lg-5 {
      --bs-gutter-x: 3rem;
    }
    .g-lg-5,
    .gy-lg-5 {
      --bs-gutter-y: 3rem;
    }
  }

  @media (min-width: 1200px) {
    .col-xl {
      -ms-flex: 1 0 0%;
      flex: 1 0 0%;
    }
    .row-cols-xl-auto > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
    }
    .row-cols-xl-1 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 100%;
    }
    .row-cols-xl-2 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 50%;
    }
    .row-cols-xl-3 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 33.333333%;
    }
    .row-cols-xl-4 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 25%;
    }
    .row-cols-xl-5 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 20%;
    }
    .row-cols-xl-6 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 16.666667%;
    }
    .col-xl-auto {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
    }
    .col-xl-1 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 8.333333%;
    }
    .col-xl-2 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 16.666667%;
    }
    .col-xl-3 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 25%;
    }
    .col-xl-4 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 33.333333%;
    }
    .col-xl-5 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 41.666667%;
    }
    .col-xl-6 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 50%;
    }
    .col-xl-7 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 58.333333%;
    }
    .col-xl-8 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 66.666667%;
    }
    .col-xl-9 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 75%;
    }
    .col-xl-10 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 83.333333%;
    }
    .col-xl-11 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 91.666667%;
    }
    .col-xl-12 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 100%;
    }
    .offset-xl-0 {
      margin-left: 0;
    }
    .offset-xl-1 {
      margin-left: 8.333333%;
    }
    .offset-xl-2 {
      margin-left: 16.666667%;
    }
    .offset-xl-3 {
      margin-left: 25%;
    }
    .offset-xl-4 {
      margin-left: 33.333333%;
    }
    .offset-xl-5 {
      margin-left: 41.666667%;
    }
    .offset-xl-6 {
      margin-left: 50%;
    }
    .offset-xl-7 {
      margin-left: 58.333333%;
    }
    .offset-xl-8 {
      margin-left: 66.666667%;
    }
    .offset-xl-9 {
      margin-left: 75%;
    }
    .offset-xl-10 {
      margin-left: 83.333333%;
    }
    .offset-xl-11 {
      margin-left: 91.666667%;
    }
    .g-xl-0,
    .gx-xl-0 {
      --bs-gutter-x: 0;
    }
    .g-xl-0,
    .gy-xl-0 {
      --bs-gutter-y: 0;
    }
    .g-xl-1,
    .gx-xl-1 {
      --bs-gutter-x: 0.25rem;
    }
    .g-xl-1,
    .gy-xl-1 {
      --bs-gutter-y: 0.25rem;
    }
    .g-xl-2,
    .gx-xl-2 {
      --bs-gutter-x: 0.5rem;
    }
    .g-xl-2,
    .gy-xl-2 {
      --bs-gutter-y: 0.5rem;
    }
    .g-xl-3,
    .gx-xl-3 {
      --bs-gutter-x: 1rem;
    }
    .g-xl-3,
    .gy-xl-3 {
      --bs-gutter-y: 1rem;
    }
    .g-xl-4,
    .gx-xl-4 {
      --bs-gutter-x: 1.5rem;
    }
    .g-xl-4,
    .gy-xl-4 {
      --bs-gutter-y: 1.5rem;
    }
    .g-xl-5,
    .gx-xl-5 {
      --bs-gutter-x: 3rem;
    }
    .g-xl-5,
    .gy-xl-5 {
      --bs-gutter-y: 3rem;
    }
  }

  @media (min-width: 1400px) {
    .col-xxl {
      -ms-flex: 1 0 0%;
      flex: 1 0 0%;
    }
    .row-cols-xxl-auto > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
    }
    .row-cols-xxl-1 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 100%;
    }
    .row-cols-xxl-2 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 50%;
    }
    .row-cols-xxl-3 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 33.333333%;
    }
    .row-cols-xxl-4 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 25%;
    }
    .row-cols-xxl-5 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 20%;
    }
    .row-cols-xxl-6 > * {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 16.666667%;
    }
    .col-xxl-auto {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
    }
    .col-xxl-1 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 8.333333%;
    }
    .col-xxl-2 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 16.666667%;
    }
    .col-xxl-3 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 25%;
    }
    .col-xxl-4 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 33.333333%;
    }
    .col-xxl-5 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 41.666667%;
    }
    .col-xxl-6 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 50%;
    }
    .col-xxl-7 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 58.333333%;
    }
    .col-xxl-8 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 66.666667%;
    }
    .col-xxl-9 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 75%;
    }
    .col-xxl-10 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 83.333333%;
    }
    .col-xxl-11 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 91.666667%;
    }
    .col-xxl-12 {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: 100%;
    }
    .offset-xxl-0 {
      margin-left: 0;
    }
    .offset-xxl-1 {
      margin-left: 8.333333%;
    }
    .offset-xxl-2 {
      margin-left: 16.666667%;
    }
    .offset-xxl-3 {
      margin-left: 25%;
    }
    .offset-xxl-4 {
      margin-left: 33.333333%;
    }
    .offset-xxl-5 {
      margin-left: 41.666667%;
    }
    .offset-xxl-6 {
      margin-left: 50%;
    }
    .offset-xxl-7 {
      margin-left: 58.333333%;
    }
    .offset-xxl-8 {
      margin-left: 66.666667%;
    }
    .offset-xxl-9 {
      margin-left: 75%;
    }
    .offset-xxl-10 {
      margin-left: 83.333333%;
    }
    .offset-xxl-11 {
      margin-left: 91.666667%;
    }
    .g-xxl-0,
    .gx-xxl-0 {
      --bs-gutter-x: 0;
    }
    .g-xxl-0,
    .gy-xxl-0 {
      --bs-gutter-y: 0;
    }
    .g-xxl-1,
    .gx-xxl-1 {
      --bs-gutter-x: 0.25rem;
    }
    .g-xxl-1,
    .gy-xxl-1 {
      --bs-gutter-y: 0.25rem;
    }
    .g-xxl-2,
    .gx-xxl-2 {
      --bs-gutter-x: 0.5rem;
    }
    .g-xxl-2,
    .gy-xxl-2 {
      --bs-gutter-y: 0.5rem;
    }
    .g-xxl-3,
    .gx-xxl-3 {
      --bs-gutter-x: 1rem;
    }
    .g-xxl-3,
    .gy-xxl-3 {
      --bs-gutter-y: 1rem;
    }
    .g-xxl-4,
    .gx-xxl-4 {
      --bs-gutter-x: 1.5rem;
    }
    .g-xxl-4,
    .gy-xxl-4 {
      --bs-gutter-y: 1.5rem;
    }
    .g-xxl-5,
    .gx-xxl-5 {
      --bs-gutter-x: 3rem;
    }
    .g-xxl-5,
    .gy-xxl-5 {
      --bs-gutter-y: 3rem;
    }
  }

  .table {
    --bs-table-bg: transparent;
    --bs-table-accent-bg: transparent;
    --bs-table-striped-color: #3e3f3a;
    --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
    --bs-table-active-color: #3e3f3a;
    --bs-table-active-bg: rgba(0, 0, 0, 0.1);
    --bs-table-hover-color: #3e3f3a;
    --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
    width: 100%;
    margin-bottom: 1rem;
    color: #3e3f3a;
    vertical-align: top;
    border-color: #dfd7ca;
  }

  .table > :not(caption) > * > * {
    padding: 0.5rem 0.5rem;
    background-color: var(--bs-table-bg);
    border-bottom-width: 1px;
    box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
  }

  .table > tbody {
    vertical-align: inherit;
  }

  .table > thead {
    vertical-align: bottom;
  }

  .table > :not(:first-child) {
    border-top: 2px solid currentColor;
  }

  .caption-top {
    caption-side: top;
  }

  .table-sm > :not(caption) > * > * {
    padding: 0.25rem 0.25rem;
  }

  .table-bordered > :not(caption) > * {
    border-width: 1px 0;
  }

  .table-bordered > :not(caption) > * > * {
    border-width: 0 1px;
  }

  .table-borderless > :not(caption) > * > * {
    border-bottom-width: 0;
  }

  .table-borderless > :not(:first-child) {
    border-top-width: 0;
  }

  .table-striped > tbody > tr:nth-of-type(odd) > * {
    --bs-table-accent-bg: var(--bs-table-striped-bg);
    color: var(--bs-table-striped-color);
  }

  .table-active {
    --bs-table-accent-bg: var(--bs-table-active-bg);
    color: var(--bs-table-active-color);
  }

  .table-hover > tbody > tr:hover > * {
    --bs-table-accent-bg: var(--bs-table-hover-bg);
    color: var(--bs-table-hover-color);
  }

  .table-primary {
    --bs-table-bg: #d6dfe7;
    --bs-table-striped-bg: #cbd4db;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #c1c9d0;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #c6ced6;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #c1c9d0;
  }

  .table-secondary {
    --bs-table-bg: #e8e8e6;
    --bs-table-striped-bg: #dcdcdb;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #d1d1cf;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #d7d7d5;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #d1d1cf;
  }

  .table-success {
    --bs-table-bg: #e9f3db;
    --bs-table-striped-bg: #dde7d0;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #d2dbc5;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #d8e1cb;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #d2dbc5;
  }

  .table-info {
    --bs-table-bg: #d4eef9;
    --bs-table-striped-bg: #c9e2ed;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #bfd6e0;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #c4dce6;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #bfd6e0;
  }

  .table-warning {
    --bs-table-bg: #fde5d8;
    --bs-table-striped-bg: #f0dacd;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #e4cec2;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #ead4c8;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #e4cec2;
  }

  .table-danger {
    --bs-table-bg: #f7dddc;
    --bs-table-striped-bg: #ebd2d1;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #dec7c6;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #e4cccc;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #dec7c6;
  }

  .table-light {
    --bs-table-bg: #f8f5f0;
    --bs-table-striped-bg: #ece9e4;
    --bs-table-striped-color: #000;
    --bs-table-active-bg: #dfddd8;
    --bs-table-active-color: #000;
    --bs-table-hover-bg: #e5e3de;
    --bs-table-hover-color: #000;
    color: #000;
    border-color: #dfddd8;
  }

  .table-dark {
    --bs-table-bg: #3e3f3a;
    --bs-table-striped-bg: #484944;
    --bs-table-striped-color: #fff;
    --bs-table-active-bg: #51524e;
    --bs-table-active-color: #fff;
    --bs-table-hover-bg: #4c4d49;
    --bs-table-hover-color: #fff;
    color: #fff;
    border-color: #51524e;
  }

  .table-responsive {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  @media (max-width: 575.98px) {
    .table-responsive-sm {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
  }

  @media (max-width: 767.98px) {
    .table-responsive-md {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
  }

  @media (max-width: 991.98px) {
    .table-responsive-lg {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
  }

  @media (max-width: 1199.98px) {
    .table-responsive-xl {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
  }

  @media (max-width: 1399.98px) {
    .table-responsive-xxl {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
  }

  .form-label {
    margin-bottom: 0.5rem;
  }

  .col-form-label {
    padding-top: calc(0.375rem + 1px);
    padding-bottom: calc(0.375rem + 1px);
    margin-bottom: 0;
    font-size: inherit;
    line-height: 1.5;
  }

  .col-form-label-lg {
    padding-top: calc(0.5rem + 1px);
    padding-bottom: calc(0.5rem + 1px);
    font-size: 1.25rem;
  }

  .col-form-label-sm {
    padding-top: calc(0.25rem + 1px);
    padding-bottom: calc(0.25rem + 1px);
    font-size: 0.875rem;
  }

  .form-text {
    margin-top: 0.25rem;
    font-size: 0.875em;
    color: #8e8c84;
  }

  .form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #3e3f3a;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .form-control {
      transition: none;
    }
  }

  .form-control[type="file"] {
    overflow: hidden;
  }

  .form-control[type="file"]:not(:disabled):not([readonly]) {
    cursor: pointer;
  }

  .form-control:focus {
    color: #3e3f3a;
    background-color: #fff;
    border-color: #99aec4;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(50, 93, 136, 0.25);
  }

  .form-control::-webkit-date-and-time-value {
    height: 1.5em;
  }

  .form-control::-webkit-input-placeholder {
    color: #8e8c84;
    opacity: 1;
  }

  .form-control::-moz-placeholder {
    color: #8e8c84;
    opacity: 1;
  }

  .form-control:-ms-input-placeholder {
    color: #8e8c84;
    opacity: 1;
  }

  .form-control::-ms-input-placeholder {
    color: #8e8c84;
    opacity: 1;
  }

  .form-control::placeholder {
    color: #8e8c84;
    opacity: 1;
  }

  .form-control:disabled,
  .form-control[readonly] {
    background-color: #f8f5f0;
    opacity: 1;
  }

  .form-control::file-selector-button {
    padding: 0.375rem 0.75rem;
    margin: -0.375rem -0.75rem;
    -webkit-margin-end: 0.75rem;
    -moz-margin-end: 0.75rem;
    margin-inline-end: 0.75rem;
    color: #3e3f3a;
    background-color: #f8f5f0;
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: 1px;
    border-radius: 0;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .form-control::file-selector-button {
      transition: none;
    }
  }

  .form-control:hover:not(:disabled):not([readonly])::file-selector-button {
    background-color: #ece9e4;
  }

  .form-control::-webkit-file-upload-button {
    padding: 0.375rem 0.75rem;
    margin: -0.375rem -0.75rem;
    -webkit-margin-end: 0.75rem;
    margin-inline-end: 0.75rem;
    color: #3e3f3a;
    background-color: #f8f5f0;
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: 1px;
    border-radius: 0;
    -webkit-transition: color 0.15s ease-in-out,
      background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .form-control::-webkit-file-upload-button {
      -webkit-transition: none;
      transition: none;
    }
  }

  .form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
    background-color: #ece9e4;
  }

  .form-control-plaintext {
    display: block;
    width: 100%;
    padding: 0.375rem 0;
    margin-bottom: 0;
    line-height: 1.5;
    color: #3e3f3a;
    background-color: transparent;
    border: solid transparent;
    border-width: 1px 0;
  }

  .form-control-plaintext.form-control-sm,
  .form-control-plaintext.form-control-lg {
    padding-right: 0;
    padding-left: 0;
  }

  .form-control-sm {
    min-height: calc(1.5em + 0.5rem + 2px);
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: 0.2rem;
  }

  .form-control-sm::file-selector-button {
    padding: 0.25rem 0.5rem;
    margin: -0.25rem -0.5rem;
    -webkit-margin-end: 0.5rem;
    -moz-margin-end: 0.5rem;
    margin-inline-end: 0.5rem;
  }

  .form-control-sm::-webkit-file-upload-button {
    padding: 0.25rem 0.5rem;
    margin: -0.25rem -0.5rem;
    -webkit-margin-end: 0.5rem;
    margin-inline-end: 0.5rem;
  }

  .form-control-lg {
    min-height: calc(1.5em + 1rem + 2px);
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
  }

  .form-control-lg::file-selector-button {
    padding: 0.5rem 1rem;
    margin: -0.5rem -1rem;
    -webkit-margin-end: 1rem;
    -moz-margin-end: 1rem;
    margin-inline-end: 1rem;
  }

  .form-control-lg::-webkit-file-upload-button {
    padding: 0.5rem 1rem;
    margin: -0.5rem -1rem;
    -webkit-margin-end: 1rem;
    margin-inline-end: 1rem;
  }

  textarea.form-control {
    min-height: calc(1.5em + 0.75rem + 2px);
  }

  textarea.form-control-sm {
    min-height: calc(1.5em + 0.5rem + 2px);
  }

  textarea.form-control-lg {
    min-height: calc(1.5em + 1rem + 2px);
  }

  .form-control-color {
    width: 3rem;
    height: auto;
    padding: 0.375rem;
  }

  .form-control-color:not(:disabled):not([readonly]) {
    cursor: pointer;
  }

  .form-control-color::-moz-color-swatch {
    height: 1.5em;
    border-radius: 0.25rem;
  }

  .form-control-color::-webkit-color-swatch {
    height: 1.5em;
    border-radius: 0.25rem;
  }

  .form-select {
    display: block;
    width: 100%;
    padding: 0.375rem 2.25rem 0.375rem 0.75rem;
    -moz-padding-start: calc(0.75rem - 3px);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #3e3f3a;
    background-color: #fff;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%233e3f3a' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  @media (prefers-reduced-motion: reduce) {
    .form-select {
      transition: none;
    }
  }

  .form-select:focus {
    border-color: #99aec4;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(50, 93, 136, 0.25);
  }

  .form-select[multiple],
  .form-select[size]:not([size="1"]) {
    padding-right: 0.75rem;
    background-image: none;
  }

  .form-select:disabled {
    background-color: #f8f5f0;
  }

  .form-select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #3e3f3a;
  }

  .form-select-sm {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 0.5rem;
    font-size: 0.875rem;
    border-radius: 0.2rem;
  }

  .form-select-lg {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
  }

  .form-check {
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5em;
    margin-bottom: 0.125rem;
  }

  .form-check .form-check-input {
    float: left;
    margin-left: -1.5em;
  }

  .form-check-input {
    width: 1em;
    height: 1em;
    margin-top: 0.25em;
    vertical-align: top;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 1px solid rgba(0, 0, 0, 0.25);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
  }

  .form-check-input[type="checkbox"] {
    border-radius: 0.25em;
  }

  .form-check-input[type="radio"] {
    border-radius: 50%;
  }

  .form-check-input:active {
    -webkit-filter: brightness(90%);
    filter: brightness(90%);
  }

  .form-check-input:focus {
    border-color: #99aec4;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(50, 93, 136, 0.25);
  }

  .form-check-input:checked {
    background-color: #325d88;
    border-color: #325d88;
  }

  .form-check-input:checked[type="checkbox"] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
  }

  .form-check-input:checked[type="radio"] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
  }

  .form-check-input[type="checkbox"]:indeterminate {
    background-color: #325d88;
    border-color: #325d88;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
  }

  .form-check-input:disabled {
    pointer-events: none;
    -webkit-filter: none;
    filter: none;
    opacity: 0.5;
  }

  .form-check-input[disabled] ~ .form-check-label,
  .form-check-input:disabled ~ .form-check-label {
    opacity: 0.5;
  }

  .form-switch {
    padding-left: 2.5em;
  }

  .form-switch .form-check-input {
    width: 2em;
    margin-left: -2.5em;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
    background-position: left center;
    border-radius: 2em;
    transition: background-position 0.15s ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .form-switch .form-check-input {
      transition: none;
    }
  }

  .form-switch .form-check-input:focus {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2399aec4'/%3e%3c/svg%3e");
  }

  .form-switch .form-check-input:checked {
    background-position: right center;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
  }

  .form-check-inline {
    display: inline-block;
    margin-right: 1rem;
  }

  .btn-check {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    pointer-events: none;
  }

  .btn-check[disabled] + .btn,
  .btn-check:disabled + .btn {
    pointer-events: none;
    -webkit-filter: none;
    filter: none;
    opacity: 0.65;
  }

  .form-range {
    width: 100%;
    height: 1.5rem;
    padding: 0;
    background-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .form-range:focus {
    outline: 0;
  }

  .form-range:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(50, 93, 136, 0.25);
  }

  .form-range:focus::-moz-range-thumb {
    box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(50, 93, 136, 0.25);
  }

  .form-range::-moz-focus-outer {
    border: 0;
  }

  .form-range::-webkit-slider-thumb {
    width: 1rem;
    height: 1rem;
    margin-top: -0.25rem;
    background-color: #325d88;
    border: 0;
    border-radius: 1rem;
    -webkit-transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -webkit-appearance: none;
    appearance: none;
  }

  @media (prefers-reduced-motion: reduce) {
    .form-range::-webkit-slider-thumb {
      -webkit-transition: none;
      transition: none;
    }
  }

  .form-range::-webkit-slider-thumb:active {
    background-color: #c2cedb;
  }

  .form-range::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: #dfd7ca;
    border-color: transparent;
    border-radius: 1rem;
  }

  .form-range::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    background-color: #325d88;
    border: 0;
    border-radius: 1rem;
    -moz-transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    -moz-appearance: none;
    appearance: none;
  }

  @media (prefers-reduced-motion: reduce) {
    .form-range::-moz-range-thumb {
      -moz-transition: none;
      transition: none;
    }
  }

  .form-range::-moz-range-thumb:active {
    background-color: #c2cedb;
  }

  .form-range::-moz-range-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: #dfd7ca;
    border-color: transparent;
    border-radius: 1rem;
  }

  .form-range:disabled {
    pointer-events: none;
  }

  .form-range:disabled::-webkit-slider-thumb {
    background-color: #98978b;
  }

  .form-range:disabled::-moz-range-thumb {
    background-color: #98978b;
  }

  .form-floating {
    position: relative;
  }

  .form-floating > .form-control,
  .form-floating > .form-select {
    height: calc(3.5rem + 2px);
    line-height: 1.25;
  }

  .form-floating > label {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    padding: 1rem 0.75rem;
    pointer-events: none;
    border: 1px solid transparent;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    transition: opacity 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out;
    transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
    transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out,
      -webkit-transform 0.1s ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .form-floating > label {
      transition: none;
    }
  }

  .form-floating > .form-control {
    padding: 1rem 0.75rem;
  }

  .form-floating > .form-control::-webkit-input-placeholder {
    color: transparent;
  }

  .form-floating > .form-control::-moz-placeholder {
    color: transparent;
  }

  .form-floating > .form-control:-ms-input-placeholder {
    color: transparent;
  }

  .form-floating > .form-control::-ms-input-placeholder {
    color: transparent;
  }

  .form-floating > .form-control::placeholder {
    color: transparent;
  }

  .form-floating > .form-control:not(:-moz-placeholder-shown) {
    padding-top: 1.625rem;
    padding-bottom: 0.625rem;
  }

  .form-floating > .form-control:not(:-ms-input-placeholder) {
    padding-top: 1.625rem;
    padding-bottom: 0.625rem;
  }

  .form-floating > .form-control:focus,
  .form-floating > .form-control:not(:placeholder-shown) {
    padding-top: 1.625rem;
    padding-bottom: 0.625rem;
  }

  .form-floating > .form-control:-webkit-autofill {
    padding-top: 1.625rem;
    padding-bottom: 0.625rem;
  }

  .form-floating > .form-select {
    padding-top: 1.625rem;
    padding-bottom: 0.625rem;
  }

  .form-floating > .form-control:not(:-moz-placeholder-shown) ~ label {
    opacity: 0.65;
    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
  }

  .form-floating > .form-control:not(:-ms-input-placeholder) ~ label {
    opacity: 0.65;
    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
  }

  .form-floating > .form-control:focus ~ label,
  .form-floating > .form-control:not(:placeholder-shown) ~ label,
  .form-floating > .form-select ~ label {
    opacity: 0.65;
    -webkit-transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
  }

  .form-floating > .form-control:-webkit-autofill ~ label {
    opacity: 0.65;
    -webkit-transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
  }

  .input-group {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: stretch;
    align-items: stretch;
    width: 100%;
  }

  .input-group > .form-control,
  .input-group > .form-select {
    position: relative;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    width: 1%;
    min-width: 0;
  }

  .input-group > .form-control:focus,
  .input-group > .form-select:focus {
    z-index: 3;
  }

  .input-group .btn {
    position: relative;
    z-index: 2;
  }

  .input-group .btn:focus {
    z-index: 3;
  }

  .input-group-text {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #3e3f3a;
    text-align: center;
    white-space: nowrap;
    background-color: #f8f5f0;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }

  .input-group-lg > .form-control,
  .input-group-lg > .form-select,
  .input-group-lg > .input-group-text,
  .input-group-lg > .btn {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
  }

  .input-group-sm > .form-control,
  .input-group-sm > .form-select,
  .input-group-sm > .input-group-text,
  .input-group-sm > .btn {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: 0.2rem;
  }

  .input-group-lg > .form-select,
  .input-group-sm > .form-select {
    padding-right: 3rem;
  }

  .input-group:not(.has-validation)
    > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),
  .input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n + 3) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .input-group.has-validation
    > :nth-last-child(n + 3):not(.dropdown-toggle):not(.dropdown-menu),
  .input-group.has-validation > .dropdown-toggle:nth-last-child(n + 4) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .input-group
    > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    margin-left: -1px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .valid-feedback {
    display: none;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 0.875em;
    color: #93c54b;
  }

  .valid-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: 0.25rem 0.5rem;
    margin-top: 0.1rem;
    font-size: 0.875rem;
    color: #fff;
    background-color: rgba(147, 197, 75, 0.9);
    border-radius: 0.25rem;
  }

  .was-validated :valid ~ .valid-feedback,
  .was-validated :valid ~ .valid-tooltip,
  .is-valid ~ .valid-feedback,
  .is-valid ~ .valid-tooltip {
    display: block;
  }

  .was-validated .form-control:valid,
  .form-control.is-valid {
    border-color: #93c54b;
    padding-right: calc(1.5em + 0.75rem);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2393c54b' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }

  .was-validated .form-control:valid:focus,
  .form-control.is-valid:focus {
    border-color: #93c54b;
    box-shadow: 0 0 0 0.25rem rgba(147, 197, 75, 0.25);
  }

  .was-validated textarea.form-control:valid,
  textarea.form-control.is-valid {
    padding-right: calc(1.5em + 0.75rem);
    background-position: top calc(0.375em + 0.1875rem) right
      calc(0.375em + 0.1875rem);
  }

  .was-validated .form-select:valid,
  .form-select.is-valid {
    border-color: #93c54b;
  }

  .was-validated .form-select:valid:not([multiple]):not([size]),
  .was-validated .form-select:valid:not([multiple])[size="1"],
  .form-select.is-valid:not([multiple]):not([size]),
  .form-select.is-valid:not([multiple])[size="1"] {
    padding-right: 4.125rem;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%233e3f3a' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"),
      url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2393c54b' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
    background-position: right 0.75rem center, center right 2.25rem;
    background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }

  .was-validated .form-select:valid:focus,
  .form-select.is-valid:focus {
    border-color: #93c54b;
    box-shadow: 0 0 0 0.25rem rgba(147, 197, 75, 0.25);
  }

  .was-validated .form-check-input:valid,
  .form-check-input.is-valid {
    border-color: #93c54b;
  }

  .was-validated .form-check-input:valid:checked,
  .form-check-input.is-valid:checked {
    background-color: #93c54b;
  }

  .was-validated .form-check-input:valid:focus,
  .form-check-input.is-valid:focus {
    box-shadow: 0 0 0 0.25rem rgba(147, 197, 75, 0.25);
  }

  .was-validated .form-check-input:valid ~ .form-check-label,
  .form-check-input.is-valid ~ .form-check-label {
    color: #93c54b;
  }

  .form-check-inline .form-check-input ~ .valid-feedback {
    margin-left: 0.5em;
  }

  .was-validated .input-group .form-control:valid,
  .input-group .form-control.is-valid,
  .was-validated .input-group .form-select:valid,
  .input-group .form-select.is-valid {
    z-index: 1;
  }

  .was-validated .input-group .form-control:valid:focus,
  .input-group .form-control.is-valid:focus,
  .was-validated .input-group .form-select:valid:focus,
  .input-group .form-select.is-valid:focus {
    z-index: 3;
  }

  .invalid-feedback {
    display: none;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 0.875em;
    color: #d9534f;
  }

  .invalid-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: 0.25rem 0.5rem;
    margin-top: 0.1rem;
    font-size: 0.875rem;
    color: #fff;
    background-color: rgba(217, 83, 79, 0.9);
    border-radius: 0.25rem;
  }

  .was-validated :invalid ~ .invalid-feedback,
  .was-validated :invalid ~ .invalid-tooltip,
  .is-invalid ~ .invalid-feedback,
  .is-invalid ~ .invalid-tooltip {
    display: block;
  }

  .was-validated .form-control:invalid,
  .form-control.is-invalid {
    border-color: #d9534f;
    padding-right: calc(1.5em + 0.75rem);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23d9534f'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23d9534f' stroke='none'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }

  .was-validated .form-control:invalid:focus,
  .form-control.is-invalid:focus {
    border-color: #d9534f;
    box-shadow: 0 0 0 0.25rem rgba(217, 83, 79, 0.25);
  }

  .was-validated textarea.form-control:invalid,
  textarea.form-control.is-invalid {
    padding-right: calc(1.5em + 0.75rem);
    background-position: top calc(0.375em + 0.1875rem) right
      calc(0.375em + 0.1875rem);
  }

  .was-validated .form-select:invalid,
  .form-select.is-invalid {
    border-color: #d9534f;
  }

  .was-validated .form-select:invalid:not([multiple]):not([size]),
  .was-validated .form-select:invalid:not([multiple])[size="1"],
  .form-select.is-invalid:not([multiple]):not([size]),
  .form-select.is-invalid:not([multiple])[size="1"] {
    padding-right: 4.125rem;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%233e3f3a' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"),
      url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23d9534f'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23d9534f' stroke='none'/%3e%3c/svg%3e");
    background-position: right 0.75rem center, center right 2.25rem;
    background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }

  .was-validated .form-select:invalid:focus,
  .form-select.is-invalid:focus {
    border-color: #d9534f;
    box-shadow: 0 0 0 0.25rem rgba(217, 83, 79, 0.25);
  }

  .was-validated .form-check-input:invalid,
  .form-check-input.is-invalid {
    border-color: #d9534f;
  }

  .was-validated .form-check-input:invalid:checked,
  .form-check-input.is-invalid:checked {
    background-color: #d9534f;
  }

  .was-validated .form-check-input:invalid:focus,
  .form-check-input.is-invalid:focus {
    box-shadow: 0 0 0 0.25rem rgba(217, 83, 79, 0.25);
  }

  .was-validated .form-check-input:invalid ~ .form-check-label,
  .form-check-input.is-invalid ~ .form-check-label {
    color: #d9534f;
  }

  .form-check-inline .form-check-input ~ .invalid-feedback {
    margin-left: 0.5em;
  }

  .was-validated .input-group .form-control:invalid,
  .input-group .form-control.is-invalid,
  .was-validated .input-group .form-select:invalid,
  .input-group .form-select.is-invalid {
    z-index: 2;
  }

  .was-validated .input-group .form-control:invalid:focus,
  .input-group .form-control.is-invalid:focus,
  .was-validated .input-group .form-select:invalid:focus,
  .input-group .form-select.is-invalid:focus {
    z-index: 3;
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #3e3f3a;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none;
    }
  }

  .btn:hover {
    color: #3e3f3a;
  }

  .btn-check:focus + .btn,
  .btn:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(50, 93, 136, 0.25);
  }

  .btn:disabled,
  .btn.disabled,
  fieldset:disabled .btn {
    pointer-events: none;
    opacity: 0.65;
  }

  .btn-primary {
    color: #fff;
    background-color: #325d88;
    border-color: #325d88;
  }

  .btn-primary:hover {
    color: #fff;
    background-color: #2b4f74;
    border-color: #284a6d;
  }

  .btn-check:focus + .btn-primary,
  .btn-primary:focus {
    color: #fff;
    background-color: #2b4f74;
    border-color: #284a6d;
    box-shadow: 0 0 0 0.25rem rgba(81, 117, 154, 0.5);
  }

  .btn-check:checked + .btn-primary,
  .btn-check:active + .btn-primary,
  .btn-primary:active,
  .btn-primary.active,
  .show > .btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #284a6d;
    border-color: #264666;
  }

  .btn-check:checked + .btn-primary:focus,
  .btn-check:active + .btn-primary:focus,
  .btn-primary:active:focus,
  .btn-primary.active:focus,
  .show > .btn-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(81, 117, 154, 0.5);
  }

  .btn-primary:disabled,
  .btn-primary.disabled {
    color: #fff;
    background-color: #325d88;
    border-color: #325d88;
  }

  .btn-secondary {
    color: #fff;
    background-color: #8e8c84;
    border-color: #8e8c84;
  }

  .btn-secondary:hover {
    color: #fff;
    background-color: #797770;
    border-color: #72706a;
  }

  .btn-check:focus + .btn-secondary,
  .btn-secondary:focus {
    color: #fff;
    background-color: #797770;
    border-color: #72706a;
    box-shadow: 0 0 0 0.25rem rgba(159, 157, 150, 0.5);
  }

  .btn-check:checked + .btn-secondary,
  .btn-check:active + .btn-secondary,
  .btn-secondary:active,
  .btn-secondary.active,
  .show > .btn-secondary.dropdown-toggle {
    color: #fff;
    background-color: #72706a;
    border-color: #6b6963;
  }

  .btn-check:checked + .btn-secondary:focus,
  .btn-check:active + .btn-secondary:focus,
  .btn-secondary:active:focus,
  .btn-secondary.active:focus,
  .show > .btn-secondary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(159, 157, 150, 0.5);
  }

  .btn-secondary:disabled,
  .btn-secondary.disabled {
    color: #fff;
    background-color: #8e8c84;
    border-color: #8e8c84;
  }

  .btn-success {
    color: #fff;
    background-color: #93c54b;
    border-color: #93c54b;
  }

  .btn-success:hover {
    color: #fff;
    background-color: #7da740;
    border-color: #769e3c;
  }

  .btn-check:focus + .btn-success,
  .btn-success:focus {
    color: #fff;
    background-color: #7da740;
    border-color: #769e3c;
    box-shadow: 0 0 0 0.25rem rgba(163, 206, 102, 0.5);
  }

  .btn-check:checked + .btn-success,
  .btn-check:active + .btn-success,
  .btn-success:active,
  .btn-success.active,
  .show > .btn-success.dropdown-toggle {
    color: #fff;
    background-color: #769e3c;
    border-color: #6e9438;
  }

  .btn-check:checked + .btn-success:focus,
  .btn-check:active + .btn-success:focus,
  .btn-success:active:focus,
  .btn-success.active:focus,
  .show > .btn-success.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(163, 206, 102, 0.5);
  }

  .btn-success:disabled,
  .btn-success.disabled {
    color: #fff;
    background-color: #93c54b;
    border-color: #93c54b;
  }

  .btn-info {
    color: #fff;
    background-color: #29abe0;
    border-color: #29abe0;
  }

  .btn-info:hover {
    color: #fff;
    background-color: #2391be;
    border-color: #2189b3;
  }

  .btn-check:focus + .btn-info,
  .btn-info:focus {
    color: #fff;
    background-color: #2391be;
    border-color: #2189b3;
    box-shadow: 0 0 0 0.25rem rgba(73, 184, 229, 0.5);
  }

  .btn-check:checked + .btn-info,
  .btn-check:active + .btn-info,
  .btn-info:active,
  .btn-info.active,
  .show > .btn-info.dropdown-toggle {
    color: #fff;
    background-color: #2189b3;
    border-color: #1f80a8;
  }

  .btn-check:checked + .btn-info:focus,
  .btn-check:active + .btn-info:focus,
  .btn-info:active:focus,
  .btn-info.active:focus,
  .show > .btn-info.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(73, 184, 229, 0.5);
  }

  .btn-info:disabled,
  .btn-info.disabled {
    color: #fff;
    background-color: #29abe0;
    border-color: #29abe0;
  }

  .btn-warning {
    color: #fff;
    background-color: #f47c3c;
    border-color: #f47c3c;
  }

  .btn-warning:hover {
    color: #fff;
    background-color: #cf6933;
    border-color: #c36330;
  }

  .btn-check:focus + .btn-warning,
  .btn-warning:focus {
    color: #fff;
    background-color: #cf6933;
    border-color: #c36330;
    box-shadow: 0 0 0 0.25rem rgba(246, 144, 89, 0.5);
  }

  .btn-check:checked + .btn-warning,
  .btn-check:active + .btn-warning,
  .btn-warning:active,
  .btn-warning.active,
  .show > .btn-warning.dropdown-toggle {
    color: #fff;
    background-color: #c36330;
    border-color: #b75d2d;
  }

  .btn-check:checked + .btn-warning:focus,
  .btn-check:active + .btn-warning:focus,
  .btn-warning:active:focus,
  .btn-warning.active:focus,
  .show > .btn-warning.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(246, 144, 89, 0.5);
  }

  .btn-warning:disabled,
  .btn-warning.disabled {
    color: #fff;
    background-color: #f47c3c;
    border-color: #f47c3c;
  }

  .btn-danger {
    color: #fff;
    background-color: #d9534f;
    border-color: #d9534f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #b84743;
    border-color: #ae423f;
  }

  .btn-check:focus + .btn-danger,
  .btn-danger:focus {
    color: #fff;
    background-color: #b84743;
    border-color: #ae423f;
    box-shadow: 0 0 0 0.25rem rgba(223, 109, 105, 0.5);
  }

  .btn-check:checked + .btn-danger,
  .btn-check:active + .btn-danger,
  .btn-danger:active,
  .btn-danger.active,
  .show > .btn-danger.dropdown-toggle {
    color: #fff;
    background-color: #ae423f;
    border-color: #a33e3b;
  }

  .btn-check:checked + .btn-danger:focus,
  .btn-check:active + .btn-danger:focus,
  .btn-danger:active:focus,
  .btn-danger.active:focus,
  .show > .btn-danger.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(223, 109, 105, 0.5);
  }

  .btn-danger:disabled,
  .btn-danger.disabled {
    color: #fff;
    background-color: #d9534f;
    border-color: #d9534f;
  }

  .btn-light {
    color: #000;
    background-color: #f8f5f0;
    border-color: #f8f5f0;
  }

  .btn-light:hover {
    color: #000;
    background-color: #f9f7f2;
    border-color: #f9f6f2;
  }

  .btn-check:focus + .btn-light,
  .btn-light:focus {
    color: #000;
    background-color: #f9f7f2;
    border-color: #f9f6f2;
    box-shadow: 0 0 0 0.25rem rgba(211, 208, 204, 0.5);
  }

  .btn-check:checked + .btn-light,
  .btn-check:active + .btn-light,
  .btn-light:active,
  .btn-light.active,
  .show > .btn-light.dropdown-toggle {
    color: #000;
    background-color: #f9f7f3;
    border-color: #f9f6f2;
  }

  .btn-check:checked + .btn-light:focus,
  .btn-check:active + .btn-light:focus,
  .btn-light:active:focus,
  .btn-light.active:focus,
  .show > .btn-light.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(211, 208, 204, 0.5);
  }

  .btn-light:disabled,
  .btn-light.disabled {
    color: #000;
    background-color: #f8f5f0;
    border-color: #f8f5f0;
  }

  .btn-dark {
    color: #fff;
    background-color: #3e3f3a;
    border-color: #3e3f3a;
  }

  .btn-dark:hover {
    color: #fff;
    background-color: #353631;
    border-color: #32322e;
  }

  .btn-check:focus + .btn-dark,
  .btn-dark:focus {
    color: #fff;
    background-color: #353631;
    border-color: #32322e;
    box-shadow: 0 0 0 0.25rem rgba(91, 92, 88, 0.5);
  }

  .btn-check:checked + .btn-dark,
  .btn-check:active + .btn-dark,
  .btn-dark:active,
  .btn-dark.active,
  .show > .btn-dark.dropdown-toggle {
    color: #fff;
    background-color: #32322e;
    border-color: #2f2f2c;
  }

  .btn-check:checked + .btn-dark:focus,
  .btn-check:active + .btn-dark:focus,
  .btn-dark:active:focus,
  .btn-dark.active:focus,
  .show > .btn-dark.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(91, 92, 88, 0.5);
  }

  .btn-dark:disabled,
  .btn-dark.disabled {
    color: #fff;
    background-color: #3e3f3a;
    border-color: #3e3f3a;
  }

  .btn-outline-primary {
    color: #325d88;
    border-color: #325d88;
  }

  .btn-outline-primary:hover {
    color: #fff;
    background-color: #325d88;
    border-color: #325d88;
  }

  .btn-check:focus + .btn-outline-primary,
  .btn-outline-primary:focus {
    box-shadow: 0 0 0 0.25rem rgba(50, 93, 136, 0.5);
  }

  .btn-check:checked + .btn-outline-primary,
  .btn-check:active + .btn-outline-primary,
  .btn-outline-primary:active,
  .btn-outline-primary.active,
  .btn-outline-primary.dropdown-toggle.show {
    color: #fff;
    background-color: #325d88;
    border-color: #325d88;
  }

  .btn-check:checked + .btn-outline-primary:focus,
  .btn-check:active + .btn-outline-primary:focus,
  .btn-outline-primary:active:focus,
  .btn-outline-primary.active:focus,
  .btn-outline-primary.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(50, 93, 136, 0.5);
  }

  .btn-outline-primary:disabled,
  .btn-outline-primary.disabled {
    color: #325d88;
    background-color: transparent;
  }

  .btn-outline-secondary {
    color: #8e8c84;
    border-color: #8e8c84;
  }

  .btn-outline-secondary:hover {
    color: #fff;
    background-color: #8e8c84;
    border-color: #8e8c84;
  }

  .btn-check:focus + .btn-outline-secondary,
  .btn-outline-secondary:focus {
    box-shadow: 0 0 0 0.25rem rgba(142, 140, 132, 0.5);
  }

  .btn-check:checked + .btn-outline-secondary,
  .btn-check:active + .btn-outline-secondary,
  .btn-outline-secondary:active,
  .btn-outline-secondary.active,
  .btn-outline-secondary.dropdown-toggle.show {
    color: #fff;
    background-color: #8e8c84;
    border-color: #8e8c84;
  }

  .btn-check:checked + .btn-outline-secondary:focus,
  .btn-check:active + .btn-outline-secondary:focus,
  .btn-outline-secondary:active:focus,
  .btn-outline-secondary.active:focus,
  .btn-outline-secondary.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(142, 140, 132, 0.5);
  }

  .btn-outline-secondary:disabled,
  .btn-outline-secondary.disabled {
    color: #8e8c84;
    background-color: transparent;
  }

  .btn-outline-success {
    color: #93c54b;
    border-color: #93c54b;
  }

  .btn-outline-success:hover {
    color: #fff;
    background-color: #93c54b;
    border-color: #93c54b;
  }

  .btn-check:focus + .btn-outline-success,
  .btn-outline-success:focus {
    box-shadow: 0 0 0 0.25rem rgba(147, 197, 75, 0.5);
  }

  .btn-check:checked + .btn-outline-success,
  .btn-check:active + .btn-outline-success,
  .btn-outline-success:active,
  .btn-outline-success.active,
  .btn-outline-success.dropdown-toggle.show {
    color: #fff;
    background-color: #93c54b;
    border-color: #93c54b;
  }

  .btn-check:checked + .btn-outline-success:focus,
  .btn-check:active + .btn-outline-success:focus,
  .btn-outline-success:active:focus,
  .btn-outline-success.active:focus,
  .btn-outline-success.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(147, 197, 75, 0.5);
  }

  .btn-outline-success:disabled,
  .btn-outline-success.disabled {
    color: #93c54b;
    background-color: transparent;
  }

  .btn-outline-info {
    color: #29abe0;
    border-color: #29abe0;
  }

  .btn-outline-info:hover {
    color: #fff;
    background-color: #29abe0;
    border-color: #29abe0;
  }

  .btn-check:focus + .btn-outline-info,
  .btn-outline-info:focus {
    box-shadow: 0 0 0 0.25rem rgba(41, 171, 224, 0.5);
  }

  .btn-check:checked + .btn-outline-info,
  .btn-check:active + .btn-outline-info,
  .btn-outline-info:active,
  .btn-outline-info.active,
  .btn-outline-info.dropdown-toggle.show {
    color: #fff;
    background-color: #29abe0;
    border-color: #29abe0;
  }

  .btn-check:checked + .btn-outline-info:focus,
  .btn-check:active + .btn-outline-info:focus,
  .btn-outline-info:active:focus,
  .btn-outline-info.active:focus,
  .btn-outline-info.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(41, 171, 224, 0.5);
  }

  .btn-outline-info:disabled,
  .btn-outline-info.disabled {
    color: #29abe0;
    background-color: transparent;
  }

  .btn-outline-warning {
    color: #f47c3c;
    border-color: #f47c3c;
  }

  .btn-outline-warning:hover {
    color: #fff;
    background-color: #f47c3c;
    border-color: #f47c3c;
  }

  .btn-check:focus + .btn-outline-warning,
  .btn-outline-warning:focus {
    box-shadow: 0 0 0 0.25rem rgba(244, 124, 60, 0.5);
  }

  .btn-check:checked + .btn-outline-warning,
  .btn-check:active + .btn-outline-warning,
  .btn-outline-warning:active,
  .btn-outline-warning.active,
  .btn-outline-warning.dropdown-toggle.show {
    color: #fff;
    background-color: #f47c3c;
    border-color: #f47c3c;
  }

  .btn-check:checked + .btn-outline-warning:focus,
  .btn-check:active + .btn-outline-warning:focus,
  .btn-outline-warning:active:focus,
  .btn-outline-warning.active:focus,
  .btn-outline-warning.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(244, 124, 60, 0.5);
  }

  .btn-outline-warning:disabled,
  .btn-outline-warning.disabled {
    color: #f47c3c;
    background-color: transparent;
  }

  .btn-outline-danger {
    color: #d9534f;
    border-color: #d9534f;
  }

  .btn-outline-danger:hover {
    color: #fff;
    background-color: #d9534f;
    border-color: #d9534f;
  }

  .btn-check:focus + .btn-outline-danger,
  .btn-outline-danger:focus {
    box-shadow: 0 0 0 0.25rem rgba(217, 83, 79, 0.5);
  }

  .btn-check:checked + .btn-outline-danger,
  .btn-check:active + .btn-outline-danger,
  .btn-outline-danger:active,
  .btn-outline-danger.active,
  .btn-outline-danger.dropdown-toggle.show {
    color: #fff;
    background-color: #d9534f;
    border-color: #d9534f;
  }

  .btn-check:checked + .btn-outline-danger:focus,
  .btn-check:active + .btn-outline-danger:focus,
  .btn-outline-danger:active:focus,
  .btn-outline-danger.active:focus,
  .btn-outline-danger.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(217, 83, 79, 0.5);
  }

  .btn-outline-danger:disabled,
  .btn-outline-danger.disabled {
    color: #d9534f;
    background-color: transparent;
  }

  .btn-outline-light {
    color: #f8f5f0;
    border-color: #f8f5f0;
  }

  .btn-outline-light:hover {
    color: #000;
    background-color: #f8f5f0;
    border-color: #f8f5f0;
  }

  .btn-check:focus + .btn-outline-light,
  .btn-outline-light:focus {
    box-shadow: 0 0 0 0.25rem rgba(248, 245, 240, 0.5);
  }

  .btn-check:checked + .btn-outline-light,
  .btn-check:active + .btn-outline-light,
  .btn-outline-light:active,
  .btn-outline-light.active,
  .btn-outline-light.dropdown-toggle.show {
    color: #000;
    background-color: #f8f5f0;
    border-color: #f8f5f0;
  }

  .btn-check:checked + .btn-outline-light:focus,
  .btn-check:active + .btn-outline-light:focus,
  .btn-outline-light:active:focus,
  .btn-outline-light.active:focus,
  .btn-outline-light.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(248, 245, 240, 0.5);
  }

  .btn-outline-light:disabled,
  .btn-outline-light.disabled {
    color: #f8f5f0;
    background-color: transparent;
  }

  .btn-outline-dark {
    color: #3e3f3a;
    border-color: #3e3f3a;
  }

  .btn-outline-dark:hover {
    color: #fff;
    background-color: #3e3f3a;
    border-color: #3e3f3a;
  }

  .btn-check:focus + .btn-outline-dark,
  .btn-outline-dark:focus {
    box-shadow: 0 0 0 0.25rem rgba(62, 63, 58, 0.5);
  }

  .btn-check:checked + .btn-outline-dark,
  .btn-check:active + .btn-outline-dark,
  .btn-outline-dark:active,
  .btn-outline-dark.active,
  .btn-outline-dark.dropdown-toggle.show {
    color: #fff;
    background-color: #3e3f3a;
    border-color: #3e3f3a;
  }

  .btn-check:checked + .btn-outline-dark:focus,
  .btn-check:active + .btn-outline-dark:focus,
  .btn-outline-dark:active:focus,
  .btn-outline-dark.active:focus,
  .btn-outline-dark.dropdown-toggle.show:focus {
    box-shadow: 0 0 0 0.25rem rgba(62, 63, 58, 0.5);
  }

  .btn-outline-dark:disabled,
  .btn-outline-dark.disabled {
    color: #3e3f3a;
    background-color: transparent;
  }

  .btn-link {
    font-weight: 400;
    color: #93c54b;
    text-decoration: underline;
  }

  .btn-link:hover {
    color: #769e3c;
  }

  .btn-link:disabled,
  .btn-link.disabled {
    color: #8e8c84;
  }

  .btn-lg,
  .btn-group-lg > .btn {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
  }

  .btn-sm,
  .btn-group-sm > .btn {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: 0.2rem;
  }

  .fade {
    transition: opacity 0.15s linear;
  }

  @media (prefers-reduced-motion: reduce) {
    .fade {
      transition: none;
    }
  }

  .fade:not(.show) {
    opacity: 0;
  }

  .collapse:not(.show) {
    display: none;
  }

  .collapsing {
    height: 0;
    overflow: hidden;
    transition: height 0.35s ease;
  }

  @media (prefers-reduced-motion: reduce) {
    .collapsing {
      transition: none;
    }
  }

  .collapsing.collapse-horizontal {
    width: 0;
    height: auto;
    transition: width 0.35s ease;
  }

  @media (prefers-reduced-motion: reduce) {
    .collapsing.collapse-horizontal {
      transition: none;
    }
  }

  .dropup,
  .dropend,
  .dropdown,
  .dropstart {
    position: relative;
  }

  .dropdown-toggle {
    white-space: nowrap;
  }

  .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }

  .dropdown-toggle:empty::after {
    margin-left: 0;
  }

  .dropdown-menu {
    position: absolute;
    z-index: 1000;
    display: none;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0;
    font-size: 1rem;
    color: #3e3f3a;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
  }

  .dropdown-menu[data-bs-popper] {
    top: 100%;
    left: 0;
    margin-top: 0.125rem;
  }

  .dropdown-menu-start {
    --bs-position: start;
  }

  .dropdown-menu-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-end {
    --bs-position: end;
  }

  .dropdown-menu-end[data-bs-popper] {
    right: 0;
    left: auto;
  }

  @media (min-width: 576px) {
    .dropdown-menu-sm-start {
      --bs-position: start;
    }
    .dropdown-menu-sm-start[data-bs-popper] {
      right: auto;
      left: 0;
    }
    .dropdown-menu-sm-end {
      --bs-position: end;
    }
    .dropdown-menu-sm-end[data-bs-popper] {
      right: 0;
      left: auto;
    }
  }

  @media (min-width: 768px) {
    .dropdown-menu-md-start {
      --bs-position: start;
    }
    .dropdown-menu-md-start[data-bs-popper] {
      right: auto;
      left: 0;
    }
    .dropdown-menu-md-end {
      --bs-position: end;
    }
    .dropdown-menu-md-end[data-bs-popper] {
      right: 0;
      left: auto;
    }
  }

  @media (min-width: 992px) {
    .dropdown-menu-lg-start {
      --bs-position: start;
    }
    .dropdown-menu-lg-start[data-bs-popper] {
      right: auto;
      left: 0;
    }
    .dropdown-menu-lg-end {
      --bs-position: end;
    }
    .dropdown-menu-lg-end[data-bs-popper] {
      right: 0;
      left: auto;
    }
  }

  @media (min-width: 1200px) {
    .dropdown-menu-xl-start {
      --bs-position: start;
    }
    .dropdown-menu-xl-start[data-bs-popper] {
      right: auto;
      left: 0;
    }
    .dropdown-menu-xl-end {
      --bs-position: end;
    }
    .dropdown-menu-xl-end[data-bs-popper] {
      right: 0;
      left: auto;
    }
  }

  @media (min-width: 1400px) {
    .dropdown-menu-xxl-start {
      --bs-position: start;
    }
    .dropdown-menu-xxl-start[data-bs-popper] {
      right: auto;
      left: 0;
    }
    .dropdown-menu-xxl-end {
      --bs-position: end;
    }
    .dropdown-menu-xxl-end[data-bs-popper] {
      right: 0;
      left: auto;
    }
  }

  .dropup .dropdown-menu[data-bs-popper] {
    top: auto;
    bottom: 100%;
    margin-top: 0;
    margin-bottom: 0.125rem;
  }

  .dropup .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0;
    border-right: 0.3em solid transparent;
    border-bottom: 0.3em solid;
    border-left: 0.3em solid transparent;
  }

  .dropup .dropdown-toggle:empty::after {
    margin-left: 0;
  }

  .dropend .dropdown-menu[data-bs-popper] {
    top: 0;
    right: auto;
    left: 100%;
    margin-top: 0;
    margin-left: 0.125rem;
  }

  .dropend .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid transparent;
    border-right: 0;
    border-bottom: 0.3em solid transparent;
    border-left: 0.3em solid;
  }

  .dropend .dropdown-toggle:empty::after {
    margin-left: 0;
  }

  .dropend .dropdown-toggle::after {
    vertical-align: 0;
  }

  .dropstart .dropdown-menu[data-bs-popper] {
    top: 0;
    right: 100%;
    left: auto;
    margin-top: 0;
    margin-right: 0.125rem;
  }

  .dropstart .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
  }

  .dropstart .dropdown-toggle::after {
    display: none;
  }

  .dropstart .dropdown-toggle::before {
    display: inline-block;
    margin-right: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid transparent;
    border-right: 0.3em solid;
    border-bottom: 0.3em solid transparent;
  }

  .dropstart .dropdown-toggle:empty::after {
    margin-left: 0;
  }

  .dropstart .dropdown-toggle::before {
    vertical-align: 0;
  }

  .dropdown-divider {
    height: 0;
    margin: 0.5rem 0;
    overflow: hidden;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
  }

  .dropdown-item {
    display: block;
    width: 100%;
    padding: 0.25rem 1rem;
    clear: both;
    font-weight: 400;
    color: #8e8c84;
    text-align: inherit;
    text-decoration: none;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
  }

  .dropdown-item:hover,
  .dropdown-item:focus {
    color: #8e8c84;
    background-color: #f8f5f0;
  }

  .dropdown-item.active,
  .dropdown-item:active {
    color: #8e8c84;
    text-decoration: none;
    background-color: #f8f5f0;
  }

  .dropdown-item.disabled,
  .dropdown-item:disabled {
    color: #98978b;
    pointer-events: none;
    background-color: transparent;
  }

  .dropdown-menu.show {
    display: block;
  }

  .dropdown-header {
    display: block;
    padding: 0.5rem 1rem;
    margin-bottom: 0;
    font-size: 0.875rem;
    color: #8e8c84;
    white-space: nowrap;
  }

  .dropdown-item-text {
    display: block;
    padding: 0.25rem 1rem;
    color: #8e8c84;
  }

  .dropdown-menu-dark {
    color: #dfd7ca;
    background-color: #3e3f3a;
    border-color: rgba(0, 0, 0, 0.15);
  }

  .dropdown-menu-dark .dropdown-item {
    color: #dfd7ca;
  }

  .dropdown-menu-dark .dropdown-item:hover,
  .dropdown-menu-dark .dropdown-item:focus {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.15);
  }

  .dropdown-menu-dark .dropdown-item.active,
  .dropdown-menu-dark .dropdown-item:active {
    color: #8e8c84;
    background-color: #f8f5f0;
  }

  .dropdown-menu-dark .dropdown-item.disabled,
  .dropdown-menu-dark .dropdown-item:disabled {
    color: #98978b;
  }

  .dropdown-menu-dark .dropdown-divider {
    border-color: rgba(0, 0, 0, 0.15);
  }

  .dropdown-menu-dark .dropdown-item-text {
    color: #dfd7ca;
  }

  .dropdown-menu-dark .dropdown-header {
    color: #98978b;
  }

  .btn-group,
  .btn-group-vertical {
    position: relative;
    display: -ms-inline-flexbox;
    display: inline-flex;
    vertical-align: middle;
  }

  .btn-group > .btn,
  .btn-group-vertical > .btn {
    position: relative;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }

  .btn-group > .btn-check:checked + .btn,
  .btn-group > .btn-check:focus + .btn,
  .btn-group > .btn:hover,
  .btn-group > .btn:focus,
  .btn-group > .btn:active,
  .btn-group > .btn.active,
  .btn-group-vertical > .btn-check:checked + .btn,
  .btn-group-vertical > .btn-check:focus + .btn,
  .btn-group-vertical > .btn:hover,
  .btn-group-vertical > .btn:focus,
  .btn-group-vertical > .btn:active,
  .btn-group-vertical > .btn.active {
    z-index: 1;
  }

  .btn-toolbar {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }

  .btn-toolbar .input-group {
    width: auto;
  }

  .btn-group > .btn:not(:first-child),
  .btn-group > .btn-group:not(:first-child) {
    margin-left: -1px;
  }

  .btn-group > .btn:not(:last-child):not(.dropdown-toggle),
  .btn-group > .btn-group:not(:last-child) > .btn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .btn-group > .btn:nth-child(n + 3),
  .btn-group > :not(.btn-check) + .btn,
  .btn-group > .btn-group:not(:first-child) > .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .dropdown-toggle-split {
    padding-right: 0.5625rem;
    padding-left: 0.5625rem;
  }

  .dropdown-toggle-split::after,
  .dropup .dropdown-toggle-split::after,
  .dropend .dropdown-toggle-split::after {
    margin-left: 0;
  }

  .dropstart .dropdown-toggle-split::before {
    margin-right: 0;
  }

  .btn-sm + .dropdown-toggle-split,
  .btn-group-sm > .btn + .dropdown-toggle-split {
    padding-right: 0.375rem;
    padding-left: 0.375rem;
  }

  .btn-lg + .dropdown-toggle-split,
  .btn-group-lg > .btn + .dropdown-toggle-split {
    padding-right: 0.75rem;
    padding-left: 0.75rem;
  }

  .btn-group-vertical {
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-align: start;
    align-items: flex-start;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .btn-group-vertical > .btn,
  .btn-group-vertical > .btn-group {
    width: 100%;
  }

  .btn-group-vertical > .btn:not(:first-child),
  .btn-group-vertical > .btn-group:not(:first-child) {
    margin-top: -1px;
  }

  .btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
  .btn-group-vertical > .btn-group:not(:last-child) > .btn {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .btn-group-vertical > .btn ~ .btn,
  .btn-group-vertical > .btn-group:not(:first-child) > .btn {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .nav {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  .nav-link {
    display: block;
    padding: 0.5rem 0.9rem;
    color: #93c54b;
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .nav-link {
      transition: none;
    }
  }

  .nav-link:hover,
  .nav-link:focus {
    color: #769e3c;
  }

  .nav-link.disabled {
    color: #dfd7ca;
    pointer-events: none;
    cursor: default;
  }

  .nav-tabs {
    border-bottom: 1px solid #dfd7ca;
  }

  .nav-tabs .nav-link {
    margin-bottom: -1px;
    background: none;
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  .nav-tabs .nav-link:hover,
  .nav-tabs .nav-link:focus {
    border-color: #dfd7ca;
    isolation: isolate;
  }

  .nav-tabs .nav-link.disabled {
    color: #dfd7ca;
    background-color: transparent;
    border-color: transparent;
  }

  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: #495057;
    background-color: #fff;
    border-color: #dfd7ca #dfd7ca #fff;
  }

  .nav-tabs .dropdown-menu {
    margin-top: -1px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .nav-pills .nav-link {
    background: none;
    border: 0;
    border-radius: 0.25rem;
  }

  .nav-pills .nav-link.active,
  .nav-pills .show > .nav-link {
    color: #8e8c84;
    background-color: #f8f5f0;
  }

  .nav-fill > .nav-link,
  .nav-fill .nav-item {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    text-align: center;
  }

  .nav-justified > .nav-link,
  .nav-justified .nav-item {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    text-align: center;
  }

  .nav-fill .nav-item .nav-link,
  .nav-justified .nav-item .nav-link {
    width: 100%;
  }

  .tab-content > .tab-pane {
    display: none;
  }

  .tab-content > .active {
    display: block;
  }

  .navbar {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .navbar > .container,
  .navbar > .container-fluid,
  .navbar > .container-sm,
  .navbar > .container-md,
  .navbar > .container-lg,
  .navbar > .container-xl,
  .navbar > .container-xxl {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: inherit;
    flex-wrap: inherit;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .navbar-brand {
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    text-decoration: none;
    white-space: nowrap;
  }

  .navbar-nav {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  .navbar-nav .nav-link {
    padding-right: 0;
    padding-left: 0;
  }

  .navbar-nav .dropdown-menu {
    position: static;
  }

  .navbar-text {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .navbar-collapse {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-align: center;
    align-items: center;
  }

  .navbar-toggler {
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    transition: box-shadow 0.15s ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .navbar-toggler {
      transition: none;
    }
  }

  .navbar-toggler:hover {
    text-decoration: none;
  }

  .navbar-toggler:focus {
    text-decoration: none;
    outline: 0;
    box-shadow: 0 0 0 0.25rem;
  }

  .navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }

  .navbar-nav-scroll {
    max-height: var(--bs-scroll-height, 75vh);
    overflow-y: auto;
  }

  @media (min-width: 576px) {
    .navbar-expand-sm {
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
      -ms-flex-pack: start;
      justify-content: flex-start;
    }
    .navbar-expand-sm .navbar-nav {
      -ms-flex-direction: row;
      flex-direction: row;
    }
    .navbar-expand-sm .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-sm .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-sm .navbar-nav-scroll {
      overflow: visible;
    }
    .navbar-expand-sm .navbar-collapse {
      display: -ms-flexbox !important;
      display: flex !important;
      -ms-flex-preferred-size: auto;
      flex-basis: auto;
    }
    .navbar-expand-sm .navbar-toggler {
      display: none;
    }
    .navbar-expand-sm .offcanvas-header {
      display: none;
    }
    .navbar-expand-sm .offcanvas {
      position: inherit;
      bottom: 0;
      z-index: 1000;
      -ms-flex-positive: 1;
      flex-grow: 1;
      visibility: visible !important;
      background-color: transparent;
      border-right: 0;
      border-left: 0;
      transition: none;
      -webkit-transform: none;
      transform: none;
    }
    .navbar-expand-sm .offcanvas-top,
    .navbar-expand-sm .offcanvas-bottom {
      height: auto;
      border-top: 0;
      border-bottom: 0;
    }
    .navbar-expand-sm .offcanvas-body {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-positive: 0;
      flex-grow: 0;
      padding: 0;
      overflow-y: visible;
    }
  }

  @media (min-width: 768px) {
    .navbar-expand-md {
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
      -ms-flex-pack: start;
      justify-content: flex-start;
    }
    .navbar-expand-md .navbar-nav {
      -ms-flex-direction: row;
      flex-direction: row;
    }
    .navbar-expand-md .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-md .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-md .navbar-nav-scroll {
      overflow: visible;
    }
    .navbar-expand-md .navbar-collapse {
      display: -ms-flexbox !important;
      display: flex !important;
      -ms-flex-preferred-size: auto;
      flex-basis: auto;
    }
    .navbar-expand-md .navbar-toggler {
      display: none;
    }
    .navbar-expand-md .offcanvas-header {
      display: none;
    }
    .navbar-expand-md .offcanvas {
      position: inherit;
      bottom: 0;
      z-index: 1000;
      -ms-flex-positive: 1;
      flex-grow: 1;
      visibility: visible !important;
      background-color: transparent;
      border-right: 0;
      border-left: 0;
      transition: none;
      -webkit-transform: none;
      transform: none;
    }
    .navbar-expand-md .offcanvas-top,
    .navbar-expand-md .offcanvas-bottom {
      height: auto;
      border-top: 0;
      border-bottom: 0;
    }
    .navbar-expand-md .offcanvas-body {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-positive: 0;
      flex-grow: 0;
      padding: 0;
      overflow-y: visible;
    }
  }

  @media (min-width: 992px) {
    .navbar-expand-lg {
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
      -ms-flex-pack: start;
      justify-content: flex-start;
    }
    .navbar-expand-lg .navbar-nav {
      -ms-flex-direction: row;
      flex-direction: row;
    }
    .navbar-expand-lg .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-lg .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-lg .navbar-nav-scroll {
      overflow: visible;
    }
    .navbar-expand-lg .navbar-collapse {
      display: -ms-flexbox !important;
      display: flex !important;
      -ms-flex-preferred-size: auto;
      flex-basis: auto;
    }
    .navbar-expand-lg .navbar-toggler {
      display: none;
    }
    .navbar-expand-lg .offcanvas-header {
      display: none;
    }
    .navbar-expand-lg .offcanvas {
      position: inherit;
      bottom: 0;
      z-index: 1000;
      -ms-flex-positive: 1;
      flex-grow: 1;
      visibility: visible !important;
      background-color: transparent;
      border-right: 0;
      border-left: 0;
      transition: none;
      -webkit-transform: none;
      transform: none;
    }
    .navbar-expand-lg .offcanvas-top,
    .navbar-expand-lg .offcanvas-bottom {
      height: auto;
      border-top: 0;
      border-bottom: 0;
    }
    .navbar-expand-lg .offcanvas-body {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-positive: 0;
      flex-grow: 0;
      padding: 0;
      overflow-y: visible;
    }
  }

  @media (min-width: 1200px) {
    .navbar-expand-xl {
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
      -ms-flex-pack: start;
      justify-content: flex-start;
    }
    .navbar-expand-xl .navbar-nav {
      -ms-flex-direction: row;
      flex-direction: row;
    }
    .navbar-expand-xl .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-xl .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-xl .navbar-nav-scroll {
      overflow: visible;
    }
    .navbar-expand-xl .navbar-collapse {
      display: -ms-flexbox !important;
      display: flex !important;
      -ms-flex-preferred-size: auto;
      flex-basis: auto;
    }
    .navbar-expand-xl .navbar-toggler {
      display: none;
    }
    .navbar-expand-xl .offcanvas-header {
      display: none;
    }
    .navbar-expand-xl .offcanvas {
      position: inherit;
      bottom: 0;
      z-index: 1000;
      -ms-flex-positive: 1;
      flex-grow: 1;
      visibility: visible !important;
      background-color: transparent;
      border-right: 0;
      border-left: 0;
      transition: none;
      -webkit-transform: none;
      transform: none;
    }
    .navbar-expand-xl .offcanvas-top,
    .navbar-expand-xl .offcanvas-bottom {
      height: auto;
      border-top: 0;
      border-bottom: 0;
    }
    .navbar-expand-xl .offcanvas-body {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-positive: 0;
      flex-grow: 0;
      padding: 0;
      overflow-y: visible;
    }
  }

  @media (min-width: 1400px) {
    .navbar-expand-xxl {
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
      -ms-flex-pack: start;
      justify-content: flex-start;
    }
    .navbar-expand-xxl .navbar-nav {
      -ms-flex-direction: row;
      flex-direction: row;
    }
    .navbar-expand-xxl .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-xxl .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-xxl .navbar-nav-scroll {
      overflow: visible;
    }
    .navbar-expand-xxl .navbar-collapse {
      display: -ms-flexbox !important;
      display: flex !important;
      -ms-flex-preferred-size: auto;
      flex-basis: auto;
    }
    .navbar-expand-xxl .navbar-toggler {
      display: none;
    }
    .navbar-expand-xxl .offcanvas-header {
      display: none;
    }
    .navbar-expand-xxl .offcanvas {
      position: inherit;
      bottom: 0;
      z-index: 1000;
      -ms-flex-positive: 1;
      flex-grow: 1;
      visibility: visible !important;
      background-color: transparent;
      border-right: 0;
      border-left: 0;
      transition: none;
      -webkit-transform: none;
      transform: none;
    }
    .navbar-expand-xxl .offcanvas-top,
    .navbar-expand-xxl .offcanvas-bottom {
      height: auto;
      border-top: 0;
      border-bottom: 0;
    }
    .navbar-expand-xxl .offcanvas-body {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-positive: 0;
      flex-grow: 0;
      padding: 0;
      overflow-y: visible;
    }
  }

  .navbar-expand {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }

  .navbar-expand .navbar-nav {
    -ms-flex-direction: row;
    flex-direction: row;
  }

  .navbar-expand .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }

  .navbar-expand .navbar-nav-scroll {
    overflow: visible;
  }

  .navbar-expand .navbar-collapse {
    display: -ms-flexbox !important;
    display: flex !important;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
  }

  .navbar-expand .navbar-toggler {
    display: none;
  }

  .navbar-expand .offcanvas-header {
    display: none;
  }

  .navbar-expand .offcanvas {
    position: inherit;
    bottom: 0;
    z-index: 1000;
    -ms-flex-positive: 1;
    flex-grow: 1;
    visibility: visible !important;
    background-color: transparent;
    border-right: 0;
    border-left: 0;
    transition: none;
    -webkit-transform: none;
    transform: none;
  }

  .navbar-expand .offcanvas-top,
  .navbar-expand .offcanvas-bottom {
    height: auto;
    border-top: 0;
    border-bottom: 0;
  }

  .navbar-expand .offcanvas-body {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-positive: 0;
    flex-grow: 0;
    padding: 0;
    overflow-y: visible;
  }

  .navbar-light .navbar-brand {
    color: #000;
  }

  .navbar-light .navbar-brand:hover,
  .navbar-light .navbar-brand:focus {
    color: #000;
  }

  .navbar-light .navbar-nav .nav-link {
    color: rgba(0, 0, 0, 0.55);
  }

  .navbar-light .navbar-nav .nav-link:hover,
  .navbar-light .navbar-nav .nav-link:focus {
    color: #000;
  }

  .navbar-light .navbar-nav .nav-link.disabled {
    color: rgba(0, 0, 0, 0.3);
  }

  .navbar-light .navbar-nav .show > .nav-link,
  .navbar-light .navbar-nav .nav-link.active {
    color: #000;
  }

  .navbar-light .navbar-toggler {
    color: rgba(0, 0, 0, 0.55);
    border-color: rgba(0, 0, 0, 0.1);
  }

  .navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }

  .navbar-light .navbar-text {
    color: rgba(0, 0, 0, 0.55);
  }

  .navbar-light .navbar-text a,
  .navbar-light .navbar-text a:hover,
  .navbar-light .navbar-text a:focus {
    color: #000;
  }

  .navbar-dark .navbar-brand {
    color: #fff;
  }

  .navbar-dark .navbar-brand:hover,
  .navbar-dark .navbar-brand:focus {
    color: #fff;
  }

  .navbar-dark .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 0.55);
  }

  .navbar-dark .navbar-nav .nav-link:hover,
  .navbar-dark .navbar-nav .nav-link:focus {
    color: #fff;
  }

  .navbar-dark .navbar-nav .nav-link.disabled {
    color: rgba(255, 255, 255, 0.25);
  }

  .navbar-dark .navbar-nav .show > .nav-link,
  .navbar-dark .navbar-nav .nav-link.active {
    color: #fff;
  }

  .navbar-dark .navbar-toggler {
    color: rgba(255, 255, 255, 0.55);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .navbar-dark .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }

  .navbar-dark .navbar-text {
    color: rgba(255, 255, 255, 0.55);
  }

  .navbar-dark .navbar-text a,
  .navbar-dark .navbar-text a:hover,
  .navbar-dark .navbar-text a:focus {
    color: #fff;
  }

  .card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(223, 215, 202, 0.75);
    border-radius: 0.25rem;
  }

  .card > hr {
    margin-right: 0;
    margin-left: 0;
  }

  .card > .list-group {
    border-top: inherit;
    border-bottom: inherit;
  }

  .card > .list-group:first-child {
    border-top-width: 0;
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
  }

  .card > .list-group:last-child {
    border-bottom-width: 0;
    border-bottom-right-radius: calc(0.25rem - 1px);
    border-bottom-left-radius: calc(0.25rem - 1px);
  }

  .card > .card-header + .list-group,
  .card > .list-group + .card-footer {
    border-top: 0;
  }

  .card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1rem 1rem;
  }

  .card-title {
    margin-bottom: 0.5rem;
  }

  .card-subtitle {
    margin-top: -0.25rem;
    margin-bottom: 0;
  }

  .card-text:last-child {
    margin-bottom: 0;
  }

  .card-link + .card-link {
    margin-left: 1rem;
  }

  .card-header {
    padding: 0.5rem 1rem;
    margin-bottom: 0;
    background-color: rgba(248, 245, 240, 0.25);
    border-bottom: 1px solid rgba(223, 215, 202, 0.75);
  }

  .card-header:first-child {
    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
  }

  .card-footer {
    padding: 0.5rem 1rem;
    background-color: rgba(248, 245, 240, 0.25);
    border-top: 1px solid rgba(223, 215, 202, 0.75);
  }

  .card-footer:last-child {
    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
  }

  .card-header-tabs {
    margin-right: -0.5rem;
    margin-bottom: -0.5rem;
    margin-left: -0.5rem;
    border-bottom: 0;
  }

  .card-header-pills {
    margin-right: -0.5rem;
    margin-left: -0.5rem;
  }

  .card-img-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1rem;
    border-radius: calc(0.25rem - 1px);
  }

  .card-img,
  .card-img-top,
  .card-img-bottom {
    width: 100%;
  }

  .card-img,
  .card-img-top {
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
  }

  .card-img,
  .card-img-bottom {
    border-bottom-right-radius: calc(0.25rem - 1px);
    border-bottom-left-radius: calc(0.25rem - 1px);
  }

  .card-group > .card {
    margin-bottom: 0.75rem;
  }

  @media (min-width: 576px) {
    .card-group {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-flow: row wrap;
      flex-flow: row wrap;
    }
    .card-group > .card {
      -ms-flex: 1 0 0%;
      flex: 1 0 0%;
      margin-bottom: 0;
    }
    .card-group > .card + .card {
      margin-left: 0;
      border-left: 0;
    }
    .card-group > .card:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .card-group > .card:not(:last-child) .card-img-top,
    .card-group > .card:not(:last-child) .card-header {
      border-top-right-radius: 0;
    }
    .card-group > .card:not(:last-child) .card-img-bottom,
    .card-group > .card:not(:last-child) .card-footer {
      border-bottom-right-radius: 0;
    }
    .card-group > .card:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    .card-group > .card:not(:first-child) .card-img-top,
    .card-group > .card:not(:first-child) .card-header {
      border-top-left-radius: 0;
    }
    .card-group > .card:not(:first-child) .card-img-bottom,
    .card-group > .card:not(:first-child) .card-footer {
      border-bottom-left-radius: 0;
    }
  }

  .accordion-button {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    padding: 1rem 1.25rem;
    font-size: 1rem;
    color: #3e3f3a;
    text-align: left;
    background-color: #fff;
    border: 0;
    border-radius: 0;
    overflow-anchor: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      border-radius 0.15s ease;
  }

  @media (prefers-reduced-motion: reduce) {
    .accordion-button {
      transition: none;
    }
  }

  .accordion-button:not(.collapsed) {
    color: #2d547a;
    background-color: #ebeff3;
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.125);
  }

  .accordion-button:not(.collapsed)::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%232d547a'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }

  .accordion-button::after {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 1.25rem;
    height: 1.25rem;
    margin-left: auto;
    content: "";
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%233e3f3a'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size: 1.25rem;
    transition: -webkit-transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .accordion-button::after {
      transition: none;
    }
  }

  .accordion-button:hover {
    z-index: 2;
  }

  .accordion-button:focus {
    z-index: 3;
    border-color: #99aec4;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(50, 93, 136, 0.25);
  }

  .accordion-header {
    margin-bottom: 0;
  }

  .accordion-item {
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }

  .accordion-item:first-of-type {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  .accordion-item:first-of-type .accordion-button {
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
  }

  .accordion-item:not(:first-of-type) {
    border-top: 0;
  }

  .accordion-item:last-of-type {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  .accordion-item:last-of-type .accordion-button.collapsed {
    border-bottom-right-radius: calc(0.25rem - 1px);
    border-bottom-left-radius: calc(0.25rem - 1px);
  }

  .accordion-item:last-of-type .accordion-collapse {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  .accordion-body {
    padding: 1rem 1.25rem;
  }

  .accordion-flush .accordion-collapse {
    border-width: 0;
  }

  .accordion-flush .accordion-item {
    border-right: 0;
    border-left: 0;
    border-radius: 0;
  }

  .accordion-flush .accordion-item:first-child {
    border-top: 0;
  }

  .accordion-flush .accordion-item:last-child {
    border-bottom: 0;
  }

  .accordion-flush .accordion-item .accordion-button {
    border-radius: 0;
  }

  .breadcrumb {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0.375rem 0.75rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: #f8f5f0;
    border-radius: 0.25rem;
  }

  .breadcrumb-item + .breadcrumb-item {
    padding-left: 0.5rem;
  }

  .breadcrumb-item + .breadcrumb-item::before {
    float: left;
    padding-right: 0.5rem;
    color: #8e8c84;
    content: var(--bs-breadcrumb-divider, "/")
      /* rtl: var(--bs-breadcrumb-divider, "/") */;
  }

  .breadcrumb-item.active {
    color: #8e8c84;
  }

  .pagination {
    display: -ms-flexbox;
    display: flex;
    padding-left: 0;
    list-style: none;
  }

  .page-link {
    position: relative;
    display: block;
    color: #8e8c84;
    text-decoration: none;
    background-color: #f8f5f0;
    border: 1px solid #dfd7ca;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .page-link {
      transition: none;
    }
  }

  .page-link:hover {
    z-index: 2;
    color: #8e8c84;
    background-color: #f8f5f0;
    border-color: #dfd7ca;
  }

  .page-link:focus {
    z-index: 3;
    color: #769e3c;
    background-color: #f8f5f0;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(50, 93, 136, 0.25);
  }

  .page-item:not(:first-child) .page-link {
    margin-left: -1px;
  }

  .page-item.active .page-link {
    z-index: 3;
    color: #8e8c84;
    background-color: #dfd7ca;
    border-color: #dfd7ca;
  }

  .page-item.disabled .page-link {
    color: #dfd7ca;
    pointer-events: none;
    background-color: #f8f5f0;
    border-color: #dfd7ca;
  }

  .page-link {
    padding: 0.375rem 0.75rem;
  }

  .page-item:first-child .page-link {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  .page-item:last-child .page-link {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  .pagination-lg .page-link {
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
  }

  .pagination-lg .page-item:first-child .page-link {
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
  }

  .pagination-lg .page-item:last-child .page-link {
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }

  .pagination-sm .page-link {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  }

  .pagination-sm .page-item:first-child .page-link {
    border-top-left-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
  }

  .pagination-sm .page-item:last-child .page-link {
    border-top-right-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
  }

  .badge {
    display: inline-block;
    padding: 0.35em 0.65em;
    font-size: 0.75em;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
  }

  .badge:empty {
    display: none;
  }

  .btn .badge {
    position: relative;
    top: -1px;
  }

  .alert {
    position: relative;
    padding: 1rem 1rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }

  .alert-heading {
    color: inherit;
  }

  .alert-link {
    font-weight: 700;
  }

  .alert-dismissible {
    padding-right: 3rem;
  }

  .alert-dismissible .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    padding: 1.25rem 1rem;
  }

  .alert-primary {
    color: #1e3852;
    background-color: #d6dfe7;
    border-color: #c2cedb;
  }

  .alert-primary .alert-link {
    color: #182d42;
  }

  .alert-secondary {
    color: #55544f;
    background-color: #e8e8e6;
    border-color: #ddddda;
  }

  .alert-secondary .alert-link {
    color: #44433f;
  }

  .alert-success {
    color: #58762d;
    background-color: #e9f3db;
    border-color: #dfeec9;
  }

  .alert-success .alert-link {
    color: #465e24;
  }

  .alert-info {
    color: #196786;
    background-color: #d4eef9;
    border-color: #bfe6f6;
  }

  .alert-info .alert-link {
    color: #14526b;
  }

  .alert-warning {
    color: #924a24;
    background-color: #fde5d8;
    border-color: #fcd8c5;
  }

  .alert-warning .alert-link {
    color: #753b1d;
  }

  .alert-danger {
    color: #82322f;
    background-color: #f7dddc;
    border-color: #f4cbca;
  }

  .alert-danger .alert-link {
    color: #682826;
  }

  .alert-light {
    color: #959390;
    background-color: #fefdfc;
    border-color: #fdfcfb;
  }

  .alert-light .alert-link {
    color: #777673;
  }

  .alert-dark {
    color: #252623;
    background-color: #d8d9d8;
    border-color: #c5c5c4;
  }

  .alert-dark .alert-link {
    color: #1e1e1c;
  }

  @-webkit-keyframes progress-bar-stripes {
    0% {
      background-position-x: 1rem;
    }
  }

  @keyframes progress-bar-stripes {
    0% {
      background-position-x: 1rem;
    }
  }

  .progress {
    display: -ms-flexbox;
    display: flex;
    height: 1rem;
    overflow: hidden;
    font-size: 0.75rem;
    background-color: #dfd7ca;
    border-radius: 10px;
  }

  .progress-bar {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    overflow: hidden;
    color: #325d88;
    text-align: center;
    white-space: nowrap;
    background-color: #325d88;
    transition: width 0.6s ease;
  }

  @media (prefers-reduced-motion: reduce) {
    .progress-bar {
      transition: none;
    }
  }

  .progress-bar-striped {
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.15) 75%,
      transparent 75%,
      transparent
    );
    background-size: 1rem 1rem;
  }

  .progress-bar-animated {
    -webkit-animation: 1s linear infinite progress-bar-stripes;
    animation: 1s linear infinite progress-bar-stripes;
  }

  @media (prefers-reduced-motion: reduce) {
    .progress-bar-animated {
      -webkit-animation: none;
      animation: none;
    }
  }

  .list-group {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: 0.25rem;
  }

  .list-group-numbered {
    list-style-type: none;
    counter-reset: section;
  }

  .list-group-numbered > li::before {
    content: counters(section, ".") ". ";
    counter-increment: section;
  }

  .list-group-item-action {
    width: 100%;
    color: #3e3f3a;
    text-align: inherit;
  }

  .list-group-item-action:hover,
  .list-group-item-action:focus {
    z-index: 1;
    color: #3e3f3a;
    text-decoration: none;
    background-color: #f8f5f0;
  }

  .list-group-item-action:active {
    color: #3e3f3a;
    background-color: #dfd7ca;
  }

  .list-group-item {
    position: relative;
    display: block;
    padding: 0.5rem 1rem;
    color: #212529;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #dfd7ca;
  }

  .list-group-item:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }

  .list-group-item:last-child {
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }

  .list-group-item.disabled,
  .list-group-item:disabled {
    color: #98978b;
    pointer-events: none;
    background-color: #fff;
  }

  .list-group-item.active {
    z-index: 2;
    color: #3e3f3a;
    background-color: #f8f5f0;
    border-color: #dfd7ca;
  }

  .list-group-item + .list-group-item {
    border-top-width: 0;
  }

  .list-group-item + .list-group-item.active {
    margin-top: -1px;
    border-top-width: 1px;
  }

  .list-group-horizontal {
    -ms-flex-direction: row;
    flex-direction: row;
  }

  .list-group-horizontal > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }

  .list-group-horizontal > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }

  .list-group-horizontal > .list-group-item.active {
    margin-top: 0;
  }

  .list-group-horizontal > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }

  .list-group-horizontal > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }

  @media (min-width: 576px) {
    .list-group-horizontal-sm {
      -ms-flex-direction: row;
      flex-direction: row;
    }
    .list-group-horizontal-sm > .list-group-item:first-child {
      border-bottom-left-radius: 0.25rem;
      border-top-right-radius: 0;
    }
    .list-group-horizontal-sm > .list-group-item:last-child {
      border-top-right-radius: 0.25rem;
      border-bottom-left-radius: 0;
    }
    .list-group-horizontal-sm > .list-group-item.active {
      margin-top: 0;
    }
    .list-group-horizontal-sm > .list-group-item + .list-group-item {
      border-top-width: 1px;
      border-left-width: 0;
    }
    .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
      margin-left: -1px;
      border-left-width: 1px;
    }
  }

  @media (min-width: 768px) {
    .list-group-horizontal-md {
      -ms-flex-direction: row;
      flex-direction: row;
    }
    .list-group-horizontal-md > .list-group-item:first-child {
      border-bottom-left-radius: 0.25rem;
      border-top-right-radius: 0;
    }
    .list-group-horizontal-md > .list-group-item:last-child {
      border-top-right-radius: 0.25rem;
      border-bottom-left-radius: 0;
    }
    .list-group-horizontal-md > .list-group-item.active {
      margin-top: 0;
    }
    .list-group-horizontal-md > .list-group-item + .list-group-item {
      border-top-width: 1px;
      border-left-width: 0;
    }
    .list-group-horizontal-md > .list-group-item + .list-group-item.active {
      margin-left: -1px;
      border-left-width: 1px;
    }
  }

  @media (min-width: 992px) {
    .list-group-horizontal-lg {
      -ms-flex-direction: row;
      flex-direction: row;
    }
    .list-group-horizontal-lg > .list-group-item:first-child {
      border-bottom-left-radius: 0.25rem;
      border-top-right-radius: 0;
    }
    .list-group-horizontal-lg > .list-group-item:last-child {
      border-top-right-radius: 0.25rem;
      border-bottom-left-radius: 0;
    }
    .list-group-horizontal-lg > .list-group-item.active {
      margin-top: 0;
    }
    .list-group-horizontal-lg > .list-group-item + .list-group-item {
      border-top-width: 1px;
      border-left-width: 0;
    }
    .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
      margin-left: -1px;
      border-left-width: 1px;
    }
  }

  @media (min-width: 1200px) {
    .list-group-horizontal-xl {
      -ms-flex-direction: row;
      flex-direction: row;
    }
    .list-group-horizontal-xl > .list-group-item:first-child {
      border-bottom-left-radius: 0.25rem;
      border-top-right-radius: 0;
    }
    .list-group-horizontal-xl > .list-group-item:last-child {
      border-top-right-radius: 0.25rem;
      border-bottom-left-radius: 0;
    }
    .list-group-horizontal-xl > .list-group-item.active {
      margin-top: 0;
    }
    .list-group-horizontal-xl > .list-group-item + .list-group-item {
      border-top-width: 1px;
      border-left-width: 0;
    }
    .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
      margin-left: -1px;
      border-left-width: 1px;
    }
  }

  @media (min-width: 1400px) {
    .list-group-horizontal-xxl {
      -ms-flex-direction: row;
      flex-direction: row;
    }
    .list-group-horizontal-xxl > .list-group-item:first-child {
      border-bottom-left-radius: 0.25rem;
      border-top-right-radius: 0;
    }
    .list-group-horizontal-xxl > .list-group-item:last-child {
      border-top-right-radius: 0.25rem;
      border-bottom-left-radius: 0;
    }
    .list-group-horizontal-xxl > .list-group-item.active {
      margin-top: 0;
    }
    .list-group-horizontal-xxl > .list-group-item + .list-group-item {
      border-top-width: 1px;
      border-left-width: 0;
    }
    .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {
      margin-left: -1px;
      border-left-width: 1px;
    }
  }

  .list-group-flush {
    border-radius: 0;
  }

  .list-group-flush > .list-group-item {
    border-width: 0 0 1px;
  }

  .list-group-flush > .list-group-item:last-child {
    border-bottom-width: 0;
  }

  .list-group-item-primary {
    color: #1e3852;
    background-color: #d6dfe7;
  }

  .list-group-item-primary.list-group-item-action:hover,
  .list-group-item-primary.list-group-item-action:focus {
    color: #1e3852;
    background-color: #c1c9d0;
  }

  .list-group-item-primary.list-group-item-action.active {
    color: #fff;
    background-color: #1e3852;
    border-color: #1e3852;
  }

  .list-group-item-secondary {
    color: #55544f;
    background-color: #e8e8e6;
  }

  .list-group-item-secondary.list-group-item-action:hover,
  .list-group-item-secondary.list-group-item-action:focus {
    color: #55544f;
    background-color: #d1d1cf;
  }

  .list-group-item-secondary.list-group-item-action.active {
    color: #fff;
    background-color: #55544f;
    border-color: #55544f;
  }

  .list-group-item-success {
    color: #58762d;
    background-color: #e9f3db;
  }

  .list-group-item-success.list-group-item-action:hover,
  .list-group-item-success.list-group-item-action:focus {
    color: #58762d;
    background-color: #d2dbc5;
  }

  .list-group-item-success.list-group-item-action.active {
    color: #fff;
    background-color: #58762d;
    border-color: #58762d;
  }

  .list-group-item-info {
    color: #196786;
    background-color: #d4eef9;
  }

  .list-group-item-info.list-group-item-action:hover,
  .list-group-item-info.list-group-item-action:focus {
    color: #196786;
    background-color: #bfd6e0;
  }

  .list-group-item-info.list-group-item-action.active {
    color: #fff;
    background-color: #196786;
    border-color: #196786;
  }

  .list-group-item-warning {
    color: #924a24;
    background-color: #fde5d8;
  }

  .list-group-item-warning.list-group-item-action:hover,
  .list-group-item-warning.list-group-item-action:focus {
    color: #924a24;
    background-color: #e4cec2;
  }

  .list-group-item-warning.list-group-item-action.active {
    color: #fff;
    background-color: #924a24;
    border-color: #924a24;
  }

  .list-group-item-danger {
    color: #82322f;
    background-color: #f7dddc;
  }

  .list-group-item-danger.list-group-item-action:hover,
  .list-group-item-danger.list-group-item-action:focus {
    color: #82322f;
    background-color: #dec7c6;
  }

  .list-group-item-danger.list-group-item-action.active {
    color: #fff;
    background-color: #82322f;
    border-color: #82322f;
  }

  .list-group-item-light {
    color: #959390;
    background-color: #fefdfc;
  }

  .list-group-item-light.list-group-item-action:hover,
  .list-group-item-light.list-group-item-action:focus {
    color: #959390;
    background-color: #e5e4e3;
  }

  .list-group-item-light.list-group-item-action.active {
    color: #fff;
    background-color: #959390;
    border-color: #959390;
  }

  .list-group-item-dark {
    color: #252623;
    background-color: #d8d9d8;
  }

  .list-group-item-dark.list-group-item-action:hover,
  .list-group-item-dark.list-group-item-action:focus {
    color: #252623;
    background-color: #c2c3c2;
  }

  .list-group-item-dark.list-group-item-action.active {
    color: #fff;
    background-color: #252623;
    border-color: #252623;
  }

  .btn-close {
    box-sizing: content-box;
    width: 1em;
    height: 1em;
    padding: 0.25em 0.25em;
    color: #fff;
    background: transparent
      url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e")
      center/1em auto no-repeat;
    border: 0;
    border-radius: 0.25rem;
    opacity: 0.8;
  }

  .btn-close:hover {
    color: #fff;
    text-decoration: none;
    opacity: 1;
  }

  .btn-close:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(50, 93, 136, 0.25);
    opacity: 1;
  }

  .btn-close:disabled,
  .btn-close.disabled {
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    opacity: 0.25;
  }

  .btn-close-white {
    -webkit-filter: invert(1) grayscale(100%) brightness(200%);
    filter: invert(1) grayscale(100%) brightness(200%);
  }

  .toast {
    width: 350px;
    max-width: 100%;
    font-size: 0.875rem;
    pointer-events: auto;
    background-color: rgba(255, 255, 255, 0.85);
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
  }

  .toast.showing {
    opacity: 0;
  }

  .toast:not(.show) {
    display: none;
  }

  .toast-container {
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    max-width: 100%;
    pointer-events: none;
  }

  .toast-container > :not(:last-child) {
    margin-bottom: 0.75rem;
  }

  .toast-header {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding: 0.5rem 0.75rem;
    color: #8e8c84;
    background-color: rgba(255, 255, 255, 0.85);
    background-clip: padding-box;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
  }

  .toast-header .btn-close {
    margin-right: -0.375rem;
    margin-left: 0.75rem;
  }

  .toast-body {
    padding: 0.75rem;
    word-wrap: break-word;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1055;
    display: none;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
  }

  .modal-dialog {
    position: relative;
    width: auto;
    margin: 0.5rem;
    pointer-events: none;
  }

  .modal.fade .modal-dialog {
    transition: -webkit-transform 0.3s ease-out;
    transition: transform 0.3s ease-out;
    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
    -webkit-transform: translate(0, -50px);
    transform: translate(0, -50px);
  }

  @media (prefers-reduced-motion: reduce) {
    .modal.fade .modal-dialog {
      transition: none;
    }
  }

  .modal.show .modal-dialog {
    -webkit-transform: none;
    transform: none;
  }

  .modal.modal-static .modal-dialog {
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
  }

  .modal-dialog-scrollable {
    height: calc(100% - 1rem);
  }

  .modal-dialog-scrollable .modal-content {
    max-height: 100%;
    overflow: hidden;
  }

  .modal-dialog-scrollable .modal-body {
    overflow-y: auto;
  }

  .modal-dialog-centered {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    min-height: calc(100% - 1rem);
  }

  .modal-content {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #dfd7ca;
    border-radius: 0.3rem;
    outline: 0;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100vw;
    height: 100vh;
    background-color: #000;
  }

  .modal-backdrop.fade {
    opacity: 0;
  }

  .modal-backdrop.show {
    opacity: 0.5;
  }

  .modal-header {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid #dfd7ca;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
  }

  .modal-header .btn-close {
    padding: 0.5rem 0.5rem;
    margin: -0.5rem -0.5rem -0.5rem auto;
  }

  .modal-title {
    margin-bottom: 0;
    line-height: 1.5;
  }

  .modal-body {
    position: relative;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1rem;
  }

  .modal-footer {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 0.75rem;
    border-top: 1px solid #dfd7ca;
    border-bottom-right-radius: calc(0.3rem - 1px);
    border-bottom-left-radius: calc(0.3rem - 1px);
  }

  .modal-footer > * {
    margin: 0.25rem;
  }

  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 500px;
      margin: 1.75rem auto;
    }
    .modal-dialog-scrollable {
      height: calc(100% - 3.5rem);
    }
    .modal-dialog-centered {
      min-height: calc(100% - 3.5rem);
    }
    .modal-sm {
      max-width: 300px;
    }
  }

  @media (min-width: 992px) {
    .modal-lg,
    .modal-xl {
      max-width: 800px;
    }
  }

  @media (min-width: 1200px) {
    .modal-xl {
      max-width: 1140px;
    }
  }

  .modal-fullscreen {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }

  .modal-fullscreen .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }

  .modal-fullscreen .modal-header {
    border-radius: 0;
  }

  .modal-fullscreen .modal-body {
    overflow-y: auto;
  }

  .modal-fullscreen .modal-footer {
    border-radius: 0;
  }

  @media (max-width: 575.98px) {
    .modal-fullscreen-sm-down {
      width: 100vw;
      max-width: none;
      height: 100%;
      margin: 0;
    }
    .modal-fullscreen-sm-down .modal-content {
      height: 100%;
      border: 0;
      border-radius: 0;
    }
    .modal-fullscreen-sm-down .modal-header {
      border-radius: 0;
    }
    .modal-fullscreen-sm-down .modal-body {
      overflow-y: auto;
    }
    .modal-fullscreen-sm-down .modal-footer {
      border-radius: 0;
    }
  }

  @media (max-width: 767.98px) {
    .modal-fullscreen-md-down {
      width: 100vw;
      max-width: none;
      height: 100%;
      margin: 0;
    }
    .modal-fullscreen-md-down .modal-content {
      height: 100%;
      border: 0;
      border-radius: 0;
    }
    .modal-fullscreen-md-down .modal-header {
      border-radius: 0;
    }
    .modal-fullscreen-md-down .modal-body {
      overflow-y: auto;
    }
    .modal-fullscreen-md-down .modal-footer {
      border-radius: 0;
    }
  }

  @media (max-width: 991.98px) {
    .modal-fullscreen-lg-down {
      width: 100vw;
      max-width: none;
      height: 100%;
      margin: 0;
    }
    .modal-fullscreen-lg-down .modal-content {
      height: 100%;
      border: 0;
      border-radius: 0;
    }
    .modal-fullscreen-lg-down .modal-header {
      border-radius: 0;
    }
    .modal-fullscreen-lg-down .modal-body {
      overflow-y: auto;
    }
    .modal-fullscreen-lg-down .modal-footer {
      border-radius: 0;
    }
  }

  @media (max-width: 1199.98px) {
    .modal-fullscreen-xl-down {
      width: 100vw;
      max-width: none;
      height: 100%;
      margin: 0;
    }
    .modal-fullscreen-xl-down .modal-content {
      height: 100%;
      border: 0;
      border-radius: 0;
    }
    .modal-fullscreen-xl-down .modal-header {
      border-radius: 0;
    }
    .modal-fullscreen-xl-down .modal-body {
      overflow-y: auto;
    }
    .modal-fullscreen-xl-down .modal-footer {
      border-radius: 0;
    }
  }

  @media (max-width: 1399.98px) {
    .modal-fullscreen-xxl-down {
      width: 100vw;
      max-width: none;
      height: 100%;
      margin: 0;
    }
    .modal-fullscreen-xxl-down .modal-content {
      height: 100%;
      border: 0;
      border-radius: 0;
    }
    .modal-fullscreen-xxl-down .modal-header {
      border-radius: 0;
    }
    .modal-fullscreen-xxl-down .modal-body {
      overflow-y: auto;
    }
    .modal-fullscreen-xxl-down .modal-footer {
      border-radius: 0;
    }
  }

  .tooltip {
    position: absolute;
    z-index: 1080;
    display: block;
    margin: 0;
    font-family: var(--bs-font-sans-serif);
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: 0.875rem;
    word-wrap: break-word;
    opacity: 0;
  }

  .tooltip.show {
    opacity: 0.9;
  }

  .tooltip .tooltip-arrow {
    position: absolute;
    display: block;
    width: 0.8rem;
    height: 0.4rem;
  }

  .tooltip .tooltip-arrow::before {
    position: absolute;
    content: "";
    border-color: transparent;
    border-style: solid;
  }

  .bs-tooltip-top,
  .bs-tooltip-auto[data-popper-placement^="top"] {
    padding: 0.4rem 0;
  }

  .bs-tooltip-top .tooltip-arrow,
  .bs-tooltip-auto[data-popper-placement^="top"] .tooltip-arrow {
    bottom: 0;
  }

  .bs-tooltip-top .tooltip-arrow::before,
  .bs-tooltip-auto[data-popper-placement^="top"] .tooltip-arrow::before {
    top: -1px;
    border-width: 0.4rem 0.4rem 0;
    border-top-color: #000;
  }

  .bs-tooltip-end,
  .bs-tooltip-auto[data-popper-placement^="right"] {
    padding: 0 0.4rem;
  }

  .bs-tooltip-end .tooltip-arrow,
  .bs-tooltip-auto[data-popper-placement^="right"] .tooltip-arrow {
    left: 0;
    width: 0.4rem;
    height: 0.8rem;
  }

  .bs-tooltip-end .tooltip-arrow::before,
  .bs-tooltip-auto[data-popper-placement^="right"] .tooltip-arrow::before {
    right: -1px;
    border-width: 0.4rem 0.4rem 0.4rem 0;
    border-right-color: #000;
  }

  .bs-tooltip-bottom,
  .bs-tooltip-auto[data-popper-placement^="bottom"] {
    padding: 0.4rem 0;
  }

  .bs-tooltip-bottom .tooltip-arrow,
  .bs-tooltip-auto[data-popper-placement^="bottom"] .tooltip-arrow {
    top: 0;
  }

  .bs-tooltip-bottom .tooltip-arrow::before,
  .bs-tooltip-auto[data-popper-placement^="bottom"] .tooltip-arrow::before {
    bottom: -1px;
    border-width: 0 0.4rem 0.4rem;
    border-bottom-color: #000;
  }

  .bs-tooltip-start,
  .bs-tooltip-auto[data-popper-placement^="left"] {
    padding: 0 0.4rem;
  }

  .bs-tooltip-start .tooltip-arrow,
  .bs-tooltip-auto[data-popper-placement^="left"] .tooltip-arrow {
    right: 0;
    width: 0.4rem;
    height: 0.8rem;
  }

  .bs-tooltip-start .tooltip-arrow::before,
  .bs-tooltip-auto[data-popper-placement^="left"] .tooltip-arrow::before {
    left: -1px;
    border-width: 0.4rem 0 0.4rem 0.4rem;
    border-left-color: #000;
  }

  .tooltip-inner {
    max-width: 200px;
    padding: 0.25rem 0.5rem;
    color: #fff;
    text-align: center;
    background-color: #000;
    border-radius: 0.25rem;
  }

  .popover {
    position: absolute;
    top: 0;
    left: 0 /* rtl:ignore */;
    z-index: 1070;
    display: block;
    max-width: 276px;
    font-family: var(--bs-font-sans-serif);
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: 0.875rem;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
  }

  .popover .popover-arrow {
    position: absolute;
    display: block;
    width: 1rem;
    height: 0.5rem;
  }

  .popover .popover-arrow::before,
  .popover .popover-arrow::after {
    position: absolute;
    display: block;
    content: "";
    border-color: transparent;
    border-style: solid;
  }

  .bs-popover-top > .popover-arrow,
  .bs-popover-auto[data-popper-placement^="top"] > .popover-arrow {
    bottom: calc(-0.5rem - 1px);
  }

  .bs-popover-top > .popover-arrow::before,
  .bs-popover-auto[data-popper-placement^="top"] > .popover-arrow::before {
    bottom: 0;
    border-width: 0.5rem 0.5rem 0;
    border-top-color: rgba(0, 0, 0, 0.25);
  }

  .bs-popover-top > .popover-arrow::after,
  .bs-popover-auto[data-popper-placement^="top"] > .popover-arrow::after {
    bottom: 1px;
    border-width: 0.5rem 0.5rem 0;
    border-top-color: #fff;
  }

  .bs-popover-end > .popover-arrow,
  .bs-popover-auto[data-popper-placement^="right"] > .popover-arrow {
    left: calc(-0.5rem - 1px);
    width: 0.5rem;
    height: 1rem;
  }

  .bs-popover-end > .popover-arrow::before,
  .bs-popover-auto[data-popper-placement^="right"] > .popover-arrow::before {
    left: 0;
    border-width: 0.5rem 0.5rem 0.5rem 0;
    border-right-color: rgba(0, 0, 0, 0.25);
  }

  .bs-popover-end > .popover-arrow::after,
  .bs-popover-auto[data-popper-placement^="right"] > .popover-arrow::after {
    left: 1px;
    border-width: 0.5rem 0.5rem 0.5rem 0;
    border-right-color: #fff;
  }

  .bs-popover-bottom > .popover-arrow,
  .bs-popover-auto[data-popper-placement^="bottom"] > .popover-arrow {
    top: calc(-0.5rem - 1px);
  }

  .bs-popover-bottom > .popover-arrow::before,
  .bs-popover-auto[data-popper-placement^="bottom"] > .popover-arrow::before {
    top: 0;
    border-width: 0 0.5rem 0.5rem 0.5rem;
    border-bottom-color: rgba(0, 0, 0, 0.25);
  }

  .bs-popover-bottom > .popover-arrow::after,
  .bs-popover-auto[data-popper-placement^="bottom"] > .popover-arrow::after {
    top: 1px;
    border-width: 0 0.5rem 0.5rem 0.5rem;
    border-bottom-color: #fff;
  }

  .bs-popover-bottom .popover-header::before,
  .bs-popover-auto[data-popper-placement^="bottom"] .popover-header::before {
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    width: 1rem;
    margin-left: -0.5rem;
    content: "";
    border-bottom: 1px solid #f8f5f0;
  }

  .bs-popover-start > .popover-arrow,
  .bs-popover-auto[data-popper-placement^="left"] > .popover-arrow {
    right: calc(-0.5rem - 1px);
    width: 0.5rem;
    height: 1rem;
  }

  .bs-popover-start > .popover-arrow::before,
  .bs-popover-auto[data-popper-placement^="left"] > .popover-arrow::before {
    right: 0;
    border-width: 0.5rem 0 0.5rem 0.5rem;
    border-left-color: rgba(0, 0, 0, 0.25);
  }

  .bs-popover-start > .popover-arrow::after,
  .bs-popover-auto[data-popper-placement^="left"] > .popover-arrow::after {
    right: 1px;
    border-width: 0.5rem 0 0.5rem 0.5rem;
    border-left-color: #fff;
  }

  .popover-header {
    padding: 0.5rem 1rem;
    margin-bottom: 0;
    font-size: 1rem;
    background-color: #f8f5f0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
  }

  .popover-header:empty {
    display: none;
  }

  .popover-body {
    padding: 1rem 1rem;
    color: #3e3f3a;
  }

  .carousel {
    position: relative;
  }

  .carousel.pointer-event {
    -ms-touch-action: pan-y;
    touch-action: pan-y;
  }

  .carousel-inner {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .carousel-inner::after {
    display: block;
    clear: both;
    content: "";
  }

  .carousel-item {
    position: relative;
    display: none;
    float: left;
    width: 100%;
    margin-right: -100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transition: -webkit-transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .carousel-item {
      transition: none;
    }
  }

  .carousel-item.active,
  .carousel-item-next,
  .carousel-item-prev {
    display: block;
  }

  /* rtl:begin:ignore */
  .carousel-item-next:not(.carousel-item-start),
  .active.carousel-item-end {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }

  .carousel-item-prev:not(.carousel-item-end),
  .active.carousel-item-start {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  /* rtl:end:ignore */
  .carousel-fade .carousel-item {
    opacity: 0;
    transition-property: opacity;
    -webkit-transform: none;
    transform: none;
  }

  .carousel-fade .carousel-item.active,
  .carousel-fade .carousel-item-next.carousel-item-start,
  .carousel-fade .carousel-item-prev.carousel-item-end {
    z-index: 1;
    opacity: 1;
  }

  .carousel-fade .active.carousel-item-start,
  .carousel-fade .active.carousel-item-end {
    z-index: 0;
    opacity: 0;
    transition: opacity 0s 0.6s;
  }

  @media (prefers-reduced-motion: reduce) {
    .carousel-fade .active.carousel-item-start,
    .carousel-fade .active.carousel-item-end {
      transition: none;
    }
  }

  .carousel-control-prev,
  .carousel-control-next {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 15%;
    padding: 0;
    color: #fff;
    text-align: center;
    background: none;
    border: 0;
    opacity: 0.5;
    transition: opacity 0.15s ease;
  }

  @media (prefers-reduced-motion: reduce) {
    .carousel-control-prev,
    .carousel-control-next {
      transition: none;
    }
  }

  .carousel-control-prev:hover,
  .carousel-control-prev:focus,
  .carousel-control-next:hover,
  .carousel-control-next:focus {
    color: #fff;
    text-decoration: none;
    outline: 0;
    opacity: 0.9;
  }

  .carousel-control-prev {
    left: 0;
  }

  .carousel-control-next {
    right: 0;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100% 100%;
  }

  /* rtl:options: {
 "autoRename": true,
 "stringMap":[ {
   "name"    : "prev-next",
   "search"  : "prev",
   "replace" : "next"
 } ]
} */
  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
  }

  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  }

  .carousel-indicators {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0;
    margin-right: 15%;
    margin-bottom: 1rem;
    margin-left: 15%;
    list-style: none;
  }

  .carousel-indicators [data-bs-target] {
    box-sizing: content-box;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 30px;
    height: 3px;
    padding: 0;
    margin-right: 3px;
    margin-left: 3px;
    text-indent: -999px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: 0.5;
    transition: opacity 0.6s ease;
  }

  @media (prefers-reduced-motion: reduce) {
    .carousel-indicators [data-bs-target] {
      transition: none;
    }
  }

  .carousel-indicators .active {
    opacity: 1;
  }

  .carousel-caption {
    position: absolute;
    right: 15%;
    bottom: 1.25rem;
    left: 15%;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    color: #fff;
    text-align: center;
  }

  .carousel-dark .carousel-control-prev-icon,
  .carousel-dark .carousel-control-next-icon {
    -webkit-filter: invert(1) grayscale(100);
    filter: invert(1) grayscale(100);
  }

  .carousel-dark .carousel-indicators [data-bs-target] {
    background-color: #000;
  }

  .carousel-dark .carousel-caption {
    color: #000;
  }

  @-webkit-keyframes spinner-border {
    to {
      -webkit-transform: rotate(360deg) /* rtl:ignore */;
      transform: rotate(360deg) /* rtl:ignore */;
    }
  }

  @keyframes spinner-border {
    to {
      -webkit-transform: rotate(360deg) /* rtl:ignore */;
      transform: rotate(360deg) /* rtl:ignore */;
    }
  }

  .spinner-border {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: -0.125em;
    border: 0.25em solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    -webkit-animation: 0.75s linear infinite spinner-border;
    animation: 0.75s linear infinite spinner-border;
  }

  .spinner-border-sm {
    width: 1rem;
    height: 1rem;
    border-width: 0.2em;
  }

  @-webkit-keyframes spinner-grow {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    50% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes spinner-grow {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    50% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .spinner-grow {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: -0.125em;
    background-color: currentColor;
    border-radius: 50%;
    opacity: 0;
    -webkit-animation: 0.75s linear infinite spinner-grow;
    animation: 0.75s linear infinite spinner-grow;
  }

  .spinner-grow-sm {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-reduced-motion: reduce) {
    .spinner-border,
    .spinner-grow {
      -webkit-animation-duration: 1.5s;
      animation-duration: 1.5s;
    }
  }

  .offcanvas {
    position: fixed;
    bottom: 0;
    z-index: 1045;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    max-width: 100%;
    visibility: hidden;
    background-color: #fff;
    background-clip: padding-box;
    outline: 0;
    transition: -webkit-transform 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .offcanvas {
      transition: none;
    }
  }

  .offcanvas-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
  }

  .offcanvas-backdrop.fade {
    opacity: 0;
  }

  .offcanvas-backdrop.show {
    opacity: 0.5;
  }

  .offcanvas-header {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 1rem 1rem;
  }

  .offcanvas-header .btn-close {
    padding: 0.5rem 0.5rem;
    margin-top: -0.5rem;
    margin-right: -0.5rem;
    margin-bottom: -0.5rem;
  }

  .offcanvas-title {
    margin-bottom: 0;
    line-height: 1.5;
  }

  .offcanvas-body {
    -ms-flex-positive: 1;
    flex-grow: 1;
    padding: 1rem 1rem;
    overflow-y: auto;
  }

  .offcanvas-start {
    top: 0;
    left: 0;
    width: 400px;
    border-right: 1px solid #dfd7ca;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  .offcanvas-end {
    top: 0;
    right: 0;
    width: 400px;
    border-left: 1px solid #dfd7ca;
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }

  .offcanvas-top {
    top: 0;
    right: 0;
    left: 0;
    height: 30vh;
    max-height: 100%;
    border-bottom: 1px solid #dfd7ca;
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }

  .offcanvas-bottom {
    right: 0;
    left: 0;
    height: 30vh;
    max-height: 100%;
    border-top: 1px solid #dfd7ca;
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }

  .offcanvas.show {
    -webkit-transform: none;
    transform: none;
  }

  .placeholder {
    display: inline-block;
    min-height: 1em;
    vertical-align: middle;
    cursor: wait;
    background-color: currentColor;
    opacity: 0.5;
  }

  .placeholder.btn::before {
    display: inline-block;
    content: "";
  }

  .placeholder-xs {
    min-height: 0.6em;
  }

  .placeholder-sm {
    min-height: 0.8em;
  }

  .placeholder-lg {
    min-height: 1.2em;
  }

  .placeholder-glow .placeholder {
    -webkit-animation: placeholder-glow 2s ease-in-out infinite;
    animation: placeholder-glow 2s ease-in-out infinite;
  }

  @-webkit-keyframes placeholder-glow {
    50% {
      opacity: 0.2;
    }
  }

  @keyframes placeholder-glow {
    50% {
      opacity: 0.2;
    }
  }

  .placeholder-wave {
    -webkit-mask-image: linear-gradient(
      130deg,
      #000 55%,
      rgba(0, 0, 0, 0.8) 75%,
      #000 95%
    );
    mask-image: linear-gradient(
      130deg,
      #000 55%,
      rgba(0, 0, 0, 0.8) 75%,
      #000 95%
    );
    -webkit-mask-size: 200% 100%;
    mask-size: 200% 100%;
    -webkit-animation: placeholder-wave 2s linear infinite;
    animation: placeholder-wave 2s linear infinite;
  }

  @-webkit-keyframes placeholder-wave {
    100% {
      -webkit-mask-position: -200% 0%;
      mask-position: -200% 0%;
    }
  }

  @keyframes placeholder-wave {
    100% {
      -webkit-mask-position: -200% 0%;
      mask-position: -200% 0%;
    }
  }

  .clearfix::after {
    display: block;
    clear: both;
    content: "";
  }

  .link-primary {
    color: #325d88;
  }

  .link-primary:hover,
  .link-primary:focus {
    color: #284a6d;
  }

  .link-secondary {
    color: #8e8c84;
  }

  .link-secondary:hover,
  .link-secondary:focus {
    color: #72706a;
  }

  .link-success {
    color: #93c54b;
  }

  .link-success:hover,
  .link-success:focus {
    color: #769e3c;
  }

  .link-info {
    color: #29abe0;
  }

  .link-info:hover,
  .link-info:focus {
    color: #2189b3;
  }

  .link-warning {
    color: #f47c3c;
  }

  .link-warning:hover,
  .link-warning:focus {
    color: #c36330;
  }

  .link-danger {
    color: #d9534f;
  }

  .link-danger:hover,
  .link-danger:focus {
    color: #ae423f;
  }

  .link-light {
    color: #f8f5f0;
  }

  .link-light:hover,
  .link-light:focus {
    color: #f9f7f3;
  }

  .link-dark {
    color: #3e3f3a;
  }

  .link-dark:hover,
  .link-dark:focus {
    color: #32322e;
  }

  .ratio {
    position: relative;
    width: 100%;
  }

  .ratio::before {
    display: block;
    padding-top: var(--bs-aspect-ratio);
    content: "";
  }

  .ratio > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .ratio-1x1 {
    --bs-aspect-ratio: 100%;
  }

  .ratio-4x3 {
    --bs-aspect-ratio: calc(3 / 4 * 100%);
  }

  .ratio-16x9 {
    --bs-aspect-ratio: calc(9 / 16 * 100%);
  }

  .ratio-21x9 {
    --bs-aspect-ratio: calc(9 / 21 * 100%);
  }

  .fixed-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
  }

  .fixed-bottom {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1030;
  }

  .sticky-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }

  @media (min-width: 576px) {
    .sticky-sm-top {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      z-index: 1020;
    }
  }

  @media (min-width: 768px) {
    .sticky-md-top {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      z-index: 1020;
    }
  }

  @media (min-width: 992px) {
    .sticky-lg-top {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      z-index: 1020;
    }
  }

  @media (min-width: 1200px) {
    .sticky-xl-top {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      z-index: 1020;
    }
  }

  @media (min-width: 1400px) {
    .sticky-xxl-top {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      z-index: 1020;
    }
  }

  .hstack {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-item-align: stretch;
    align-self: stretch;
  }

  .vstack {
    display: -ms-flexbox;
    display: flex;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-item-align: stretch;
    align-self: stretch;
  }

  .visually-hidden,
  .visually-hidden-focusable:not(:focus):not(:focus-within) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }

  .stretched-link::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    content: "";
  }

  .text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .vr {
    display: inline-block;
    -ms-flex-item-align: stretch;
    align-self: stretch;
    width: 1px;
    min-height: 1em;
    background-color: currentColor;
    opacity: 0.25;
  }

  .align-baseline {
    vertical-align: baseline !important;
  }

  .align-top {
    vertical-align: top !important;
  }

  .align-middle {
    vertical-align: middle !important;
  }

  .align-bottom {
    vertical-align: bottom !important;
  }

  .align-text-bottom {
    vertical-align: text-bottom !important;
  }

  .align-text-top {
    vertical-align: text-top !important;
  }

  .float-start {
    float: left !important;
  }

  .float-end {
    float: right !important;
  }

  .float-none {
    float: none !important;
  }

  .opacity-0 {
    opacity: 0 !important;
  }

  .opacity-25 {
    opacity: 0.25 !important;
  }

  .opacity-50 {
    opacity: 0.5 !important;
  }

  .opacity-75 {
    opacity: 0.75 !important;
  }

  .opacity-100 {
    opacity: 1 !important;
  }

  .overflow-auto {
    overflow: auto !important;
  }

  .overflow-hidden {
    overflow: hidden !important;
  }

  .overflow-visible {
    overflow: visible !important;
  }

  .overflow-scroll {
    overflow: scroll !important;
  }

  .d-inline {
    display: inline !important;
  }

  .d-inline-block {
    display: inline-block !important;
  }

  .d-block {
    display: block !important;
  }

  .d-grid {
    display: grid !important;
  }

  .d-table {
    display: table !important;
  }

  .d-table-row {
    display: table-row !important;
  }

  .d-table-cell {
    display: table-cell !important;
  }

  .d-flex {
    display: -ms-flexbox !important;
    display: flex !important;
  }

  .d-inline-flex {
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
  }

  .d-none {
    display: none !important;
  }

  .shadow {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }

  .shadow-sm {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  }

  .shadow-lg {
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
  }

  .shadow-none {
    box-shadow: none !important;
  }

  .position-static {
    position: static !important;
  }

  .position-relative {
    position: relative !important;
  }

  .position-absolute {
    position: absolute !important;
  }

  .position-fixed {
    position: fixed !important;
  }

  .position-sticky {
    position: -webkit-sticky !important;
    position: sticky !important;
  }

  .top-0 {
    top: 0 !important;
  }

  .top-50 {
    top: 50% !important;
  }

  .top-100 {
    top: 100% !important;
  }

  .bottom-0 {
    bottom: 0 !important;
  }

  .bottom-50 {
    bottom: 50% !important;
  }

  .bottom-100 {
    bottom: 100% !important;
  }

  .start-0 {
    left: 0 !important;
  }

  .start-50 {
    left: 50% !important;
  }

  .start-100 {
    left: 100% !important;
  }

  .end-0 {
    right: 0 !important;
  }

  .end-50 {
    right: 50% !important;
  }

  .end-100 {
    right: 100% !important;
  }

  .translate-middle {
    -webkit-transform: translate(-50%, -50%) !important;
    transform: translate(-50%, -50%) !important;
  }

  .translate-middle-x {
    -webkit-transform: translateX(-50%) !important;
    transform: translateX(-50%) !important;
  }

  .translate-middle-y {
    -webkit-transform: translateY(-50%) !important;
    transform: translateY(-50%) !important;
  }

  .border {
    border: 1px solid #dfd7ca !important;
  }

  .border-0 {
    border: 0 !important;
  }

  .border-top {
    border-top: 1px solid #dfd7ca !important;
  }

  .border-top-0 {
    border-top: 0 !important;
  }

  .border-end {
    border-right: 1px solid #dfd7ca !important;
  }

  .border-end-0 {
    border-right: 0 !important;
  }

  .border-bottom {
    border-bottom: 1px solid #dfd7ca !important;
  }

  .border-bottom-0 {
    border-bottom: 0 !important;
  }

  .border-start {
    border-left: 1px solid #dfd7ca !important;
  }

  .border-start-0 {
    border-left: 0 !important;
  }

  .border-primary {
    border-color: #325d88 !important;
  }

  .border-secondary {
    border-color: #8e8c84 !important;
  }

  .border-success {
    border-color: #93c54b !important;
  }

  .border-info {
    border-color: #29abe0 !important;
  }

  .border-warning {
    border-color: #f47c3c !important;
  }

  .border-danger {
    border-color: #d9534f !important;
  }

  .border-light {
    border-color: #f8f5f0 !important;
  }

  .border-dark {
    border-color: #3e3f3a !important;
  }

  .border-white {
    border-color: #fff !important;
  }

  .border-1 {
    border-width: 1px !important;
  }

  .border-2 {
    border-width: 2px !important;
  }

  .border-3 {
    border-width: 3px !important;
  }

  .border-4 {
    border-width: 4px !important;
  }

  .border-5 {
    border-width: 5px !important;
  }

  .w-25 {
    width: 25% !important;
  }

  .w-50 {
    width: 50% !important;
  }

  .w-75 {
    width: 75% !important;
  }

  .w-100 {
    width: 100% !important;
  }

  .w-auto {
    width: auto !important;
  }

  .mw-100 {
    max-width: 100% !important;
  }

  .vw-100 {
    width: 100vw !important;
  }

  .min-vw-100 {
    min-width: 100vw !important;
  }

  .h-25 {
    height: 25% !important;
  }

  .h-50 {
    height: 50% !important;
  }

  .h-75 {
    height: 75% !important;
  }

  .h-100 {
    height: 100% !important;
  }

  .h-auto {
    height: auto !important;
  }

  .mh-100 {
    max-height: 100% !important;
  }

  .vh-100 {
    height: 100vh !important;
  }

  .min-vh-100 {
    min-height: 100vh !important;
  }

  .flex-fill {
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important;
  }

  .flex-row {
    -ms-flex-direction: row !important;
    flex-direction: row !important;
  }

  .flex-column {
    -ms-flex-direction: column !important;
    flex-direction: column !important;
  }

  .flex-row-reverse {
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
  }

  .flex-column-reverse {
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
  }

  .flex-grow-0 {
    -ms-flex-positive: 0 !important;
    flex-grow: 0 !important;
  }

  .flex-grow-1 {
    -ms-flex-positive: 1 !important;
    flex-grow: 1 !important;
  }

  .flex-shrink-0 {
    -ms-flex-negative: 0 !important;
    flex-shrink: 0 !important;
  }

  .flex-shrink-1 {
    -ms-flex-negative: 1 !important;
    flex-shrink: 1 !important;
  }

  .flex-wrap {
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
  }

  .flex-nowrap {
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
  }

  .flex-wrap-reverse {
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important;
  }

  .gap-0 {
    gap: 0 !important;
  }

  .gap-1 {
    gap: 0.25rem !important;
  }

  .gap-2 {
    gap: 0.5rem !important;
  }

  .gap-3 {
    gap: 1rem !important;
  }

  .gap-4 {
    gap: 1.5rem !important;
  }

  .gap-5 {
    gap: 3rem !important;
  }

  .justify-content-start {
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
  }

  .justify-content-end {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
  }

  .justify-content-center {
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }

  .justify-content-between {
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
  }

  .justify-content-around {
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
  }

  .justify-content-evenly {
    -ms-flex-pack: space-evenly !important;
    justify-content: space-evenly !important;
  }

  .align-items-start {
    -ms-flex-align: start !important;
    align-items: flex-start !important;
  }

  .align-items-end {
    -ms-flex-align: end !important;
    align-items: flex-end !important;
  }

  .align-items-center {
    -ms-flex-align: center !important;
    align-items: center !important;
  }

  .align-items-baseline {
    -ms-flex-align: baseline !important;
    align-items: baseline !important;
  }

  .align-items-stretch {
    -ms-flex-align: stretch !important;
    align-items: stretch !important;
  }

  .align-content-start {
    -ms-flex-line-pack: start !important;
    align-content: flex-start !important;
  }

  .align-content-end {
    -ms-flex-line-pack: end !important;
    align-content: flex-end !important;
  }

  .align-content-center {
    -ms-flex-line-pack: center !important;
    align-content: center !important;
  }

  .align-content-between {
    -ms-flex-line-pack: justify !important;
    align-content: space-between !important;
  }

  .align-content-around {
    -ms-flex-line-pack: distribute !important;
    align-content: space-around !important;
  }

  .align-content-stretch {
    -ms-flex-line-pack: stretch !important;
    align-content: stretch !important;
  }

  .align-self-auto {
    -ms-flex-item-align: auto !important;
    align-self: auto !important;
  }

  .align-self-start {
    -ms-flex-item-align: start !important;
    align-self: flex-start !important;
  }

  .align-self-end {
    -ms-flex-item-align: end !important;
    align-self: flex-end !important;
  }

  .align-self-center {
    -ms-flex-item-align: center !important;
    align-self: center !important;
  }

  .align-self-baseline {
    -ms-flex-item-align: baseline !important;
    align-self: baseline !important;
  }

  .align-self-stretch {
    -ms-flex-item-align: stretch !important;
    align-self: stretch !important;
  }

  .order-first {
    -ms-flex-order: -1 !important;
    order: -1 !important;
  }

  .order-0 {
    -ms-flex-order: 0 !important;
    order: 0 !important;
  }

  .order-1 {
    -ms-flex-order: 1 !important;
    order: 1 !important;
  }

  .order-2 {
    -ms-flex-order: 2 !important;
    order: 2 !important;
  }

  .order-3 {
    -ms-flex-order: 3 !important;
    order: 3 !important;
  }

  .order-4 {
    -ms-flex-order: 4 !important;
    order: 4 !important;
  }

  .order-5 {
    -ms-flex-order: 5 !important;
    order: 5 !important;
  }

  .order-last {
    -ms-flex-order: 6 !important;
    order: 6 !important;
  }

  .m-0 {
    margin: 0 !important;
  }

  .m-1 {
    margin: 0.25rem !important;
  }

  .m-2 {
    margin: 0.5rem !important;
  }

  .m-3 {
    margin: 1rem !important;
  }

  .m-4 {
    margin: 1.5rem !important;
  }

  .m-5 {
    margin: 3rem !important;
  }

  .m-auto {
    margin: auto !important;
  }

  .mx-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-0 {
    margin-top: 0 !important;
  }

  .mt-1 {
    margin-top: 0.25rem !important;
  }

  .mt-2 {
    margin-top: 0.5rem !important;
  }

  .mt-3 {
    margin-top: 1rem !important;
  }

  .mt-4 {
    margin-top: 1.5rem !important;
  }

  .mt-5 {
    margin-top: 3rem !important;
  }

  .mt-auto {
    margin-top: auto !important;
  }

  .me-0 {
    margin-right: 0 !important;
  }

  .me-1 {
    margin-right: 0.25rem !important;
  }

  .me-2 {
    margin-right: 0.5rem !important;
  }

  .me-3 {
    margin-right: 1rem !important;
  }

  .me-4 {
    margin-right: 1.5rem !important;
  }

  .me-5 {
    margin-right: 3rem !important;
  }

  .me-auto {
    margin-right: auto !important;
  }

  .mb-0 {
    margin-bottom: 0 !important;
  }

  .mb-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-3 {
    margin-bottom: 1rem !important;
  }

  .mb-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-5 {
    margin-bottom: 3rem !important;
  }

  .mb-auto {
    margin-bottom: auto !important;
  }

  .ms-0 {
    margin-left: 0 !important;
  }

  .ms-1 {
    margin-left: 0.25rem !important;
  }

  .ms-2 {
    margin-left: 0.5rem !important;
  }

  .ms-3 {
    margin-left: 1rem !important;
  }

  .ms-4 {
    margin-left: 1.5rem !important;
  }

  .ms-5 {
    margin-left: 3rem !important;
  }

  .ms-auto {
    margin-left: auto !important;
  }

  .p-0 {
    padding: 0 !important;
  }

  .p-1 {
    padding: 0.25rem !important;
  }

  .p-2 {
    padding: 0.5rem !important;
  }

  .p-3 {
    padding: 1rem !important;
  }

  .p-4 {
    padding: 1.5rem !important;
  }

  .p-5 {
    padding: 3rem !important;
  }

  .px-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-0 {
    padding-top: 0 !important;
  }

  .pt-1 {
    padding-top: 0.25rem !important;
  }

  .pt-2 {
    padding-top: 0.5rem !important;
  }

  .pt-3 {
    padding-top: 1rem !important;
  }

  .pt-4 {
    padding-top: 1.5rem !important;
  }

  .pt-5 {
    padding-top: 3rem !important;
  }

  .pe-0 {
    padding-right: 0 !important;
  }

  .pe-1 {
    padding-right: 0.25rem !important;
  }

  .pe-2 {
    padding-right: 0.5rem !important;
  }

  .pe-3 {
    padding-right: 1rem !important;
  }

  .pe-4 {
    padding-right: 1.5rem !important;
  }

  .pe-5 {
    padding-right: 3rem !important;
  }

  .pb-0 {
    padding-bottom: 0 !important;
  }

  .pb-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-3 {
    padding-bottom: 1rem !important;
  }

  .pb-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-5 {
    padding-bottom: 3rem !important;
  }

  .ps-0 {
    padding-left: 0 !important;
  }

  .ps-1 {
    padding-left: 0.25rem !important;
  }

  .ps-2 {
    padding-left: 0.5rem !important;
  }

  .ps-3 {
    padding-left: 1rem !important;
  }

  .ps-4 {
    padding-left: 1.5rem !important;
  }

  .ps-5 {
    padding-left: 3rem !important;
  }

  .font-monospace {
    font-family: var(--bs-font-monospace) !important;
  }

  .fs-1 {
    font-size: calc(1.375rem + 1.5vw) !important;
  }

  .fs-2 {
    font-size: calc(1.325rem + 0.9vw) !important;
  }

  .fs-3 {
    font-size: calc(1.3rem + 0.6vw) !important;
  }

  .fs-4 {
    font-size: calc(1.275rem + 0.3vw) !important;
  }

  .fs-5 {
    font-size: 1.25rem !important;
  }

  .fs-6 {
    font-size: 1rem !important;
  }

  .fst-italic {
    font-style: italic !important;
  }

  .fst-normal {
    font-style: normal !important;
  }

  .fw-light {
    font-weight: 300 !important;
  }

  .fw-lighter {
    font-weight: lighter !important;
  }

  .fw-normal {
    font-weight: 400 !important;
  }

  .fw-bold {
    font-weight: 700 !important;
  }

  .fw-bolder {
    font-weight: bolder !important;
  }

  .lh-1 {
    line-height: 1 !important;
  }

  .lh-sm {
    line-height: 1.25 !important;
  }

  .lh-base {
    line-height: 1.5 !important;
  }

  .lh-lg {
    line-height: 2 !important;
  }

  .text-start {
    text-align: left !important;
  }

  .text-end {
    text-align: right !important;
  }

  .text-center {
    text-align: center !important;
  }

  .text-decoration-none {
    text-decoration: none !important;
  }

  .text-decoration-underline {
    text-decoration: underline !important;
  }

  .text-decoration-line-through {
    text-decoration: line-through !important;
  }

  .text-lowercase {
    text-transform: lowercase !important;
  }

  .text-uppercase {
    text-transform: uppercase !important;
  }

  .text-capitalize {
    text-transform: capitalize !important;
  }

  .text-wrap {
    white-space: normal !important;
  }

  .text-nowrap {
    white-space: nowrap !important;
  }

  /* rtl:begin:remove */
  .text-break {
    word-wrap: break-word !important;
    word-break: break-word !important;
  }

  /* rtl:end:remove */
  .text-primary {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
  }

  .text-secondary {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important;
  }

  .text-success {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important;
  }

  .text-info {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important;
  }

  .text-warning {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important;
  }

  .text-danger {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important;
  }

  .text-light {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;
  }

  .text-dark {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;
  }

  .text-black {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important;
  }

  .text-white {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;
  }

  .text-body {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important;
  }

  .text-muted {
    --bs-text-opacity: 1;
    color: #8e8c84 !important;
  }

  .text-black-50 {
    --bs-text-opacity: 1;
    color: rgba(0, 0, 0, 0.5) !important;
  }

  .text-white-50 {
    --bs-text-opacity: 1;
    color: rgba(255, 255, 255, 0.5) !important;
  }

  .text-reset {
    --bs-text-opacity: 1;
    color: inherit !important;
  }

  .text-opacity-25 {
    --bs-text-opacity: 0.25;
  }

  .text-opacity-50 {
    --bs-text-opacity: 0.5;
  }

  .text-opacity-75 {
    --bs-text-opacity: 0.75;
  }

  .text-opacity-100 {
    --bs-text-opacity: 1;
  }

  .bg-primary {
    --bs-bg-opacity: 1;
    background-color: rgba(
      var(--bs-primary-rgb),
      var(--bs-bg-opacity)
    ) !important;
  }

  .bg-secondary {
    --bs-bg-opacity: 1;
    background-color: rgba(
      var(--bs-secondary-rgb),
      var(--bs-bg-opacity)
    ) !important;
  }

  .bg-success {
    --bs-bg-opacity: 1;
    background-color: rgba(
      var(--bs-success-rgb),
      var(--bs-bg-opacity)
    ) !important;
  }

  .bg-info {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important;
  }

  .bg-warning {
    --bs-bg-opacity: 1;
    background-color: rgba(
      var(--bs-warning-rgb),
      var(--bs-bg-opacity)
    ) !important;
  }

  .bg-danger {
    --bs-bg-opacity: 1;
    background-color: rgba(
      var(--bs-danger-rgb),
      var(--bs-bg-opacity)
    ) !important;
  }

  .bg-light {
    --bs-bg-opacity: 1;
    background-color: rgba(
      var(--bs-light-rgb),
      var(--bs-bg-opacity)
    ) !important;
  }

  .bg-dark {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
  }

  .bg-black {
    --bs-bg-opacity: 1;
    background-color: rgba(
      var(--bs-black-rgb),
      var(--bs-bg-opacity)
    ) !important;
  }

  .bg-white {
    --bs-bg-opacity: 1;
    background-color: rgba(
      var(--bs-white-rgb),
      var(--bs-bg-opacity)
    ) !important;
  }

  .bg-body {
    --bs-bg-opacity: 1;
    background-color: rgba(
      var(--bs-body-bg-rgb),
      var(--bs-bg-opacity)
    ) !important;
  }

  .bg-transparent {
    --bs-bg-opacity: 1;
    background-color: transparent !important;
  }

  .bg-opacity-10 {
    --bs-bg-opacity: 0.1;
  }

  .bg-opacity-25 {
    --bs-bg-opacity: 0.25;
  }

  .bg-opacity-50 {
    --bs-bg-opacity: 0.5;
  }

  .bg-opacity-75 {
    --bs-bg-opacity: 0.75;
  }

  .bg-opacity-100 {
    --bs-bg-opacity: 1;
  }

  .bg-gradient {
    background-image: var(--bs-gradient) !important;
  }

  .user-select-all {
    -webkit-user-select: all !important;
    -moz-user-select: all !important;
    user-select: all !important;
  }

  .user-select-auto {
    -webkit-user-select: auto !important;
    -moz-user-select: auto !important;
    -ms-user-select: auto !important;
    user-select: auto !important;
  }

  .user-select-none {
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    user-select: none !important;
  }

  .pe-none {
    pointer-events: none !important;
  }

  .pe-auto {
    pointer-events: auto !important;
  }

  .rounded {
    border-radius: 0.25rem !important;
  }

  .rounded-0 {
    border-radius: 0 !important;
  }

  .rounded-1 {
    border-radius: 0.2rem !important;
  }

  .rounded-2 {
    border-radius: 0.25rem !important;
  }

  .rounded-3 {
    border-radius: 0.3rem !important;
  }

  .rounded-circle {
    border-radius: 50% !important;
  }

  .rounded-pill {
    border-radius: 50rem !important;
  }

  .rounded-top {
    border-top-left-radius: 0.25rem !important;
    border-top-right-radius: 0.25rem !important;
  }

  .rounded-end {
    border-top-right-radius: 0.25rem !important;
    border-bottom-right-radius: 0.25rem !important;
  }

  .rounded-bottom {
    border-bottom-right-radius: 0.25rem !important;
    border-bottom-left-radius: 0.25rem !important;
  }

  .rounded-start {
    border-bottom-left-radius: 0.25rem !important;
    border-top-left-radius: 0.25rem !important;
  }

  .visible {
    visibility: visible !important;
  }

  .invisible {
    visibility: hidden !important;
  }

  @media (min-width: 576px) {
    .float-sm-start {
      float: left !important;
    }
    .float-sm-end {
      float: right !important;
    }
    .float-sm-none {
      float: none !important;
    }
    .d-sm-inline {
      display: inline !important;
    }
    .d-sm-inline-block {
      display: inline-block !important;
    }
    .d-sm-block {
      display: block !important;
    }
    .d-sm-grid {
      display: grid !important;
    }
    .d-sm-table {
      display: table !important;
    }
    .d-sm-table-row {
      display: table-row !important;
    }
    .d-sm-table-cell {
      display: table-cell !important;
    }
    .d-sm-flex {
      display: -ms-flexbox !important;
      display: flex !important;
    }
    .d-sm-inline-flex {
      display: -ms-inline-flexbox !important;
      display: inline-flex !important;
    }
    .d-sm-none {
      display: none !important;
    }
    .flex-sm-fill {
      -ms-flex: 1 1 auto !important;
      flex: 1 1 auto !important;
    }
    .flex-sm-row {
      -ms-flex-direction: row !important;
      flex-direction: row !important;
    }
    .flex-sm-column {
      -ms-flex-direction: column !important;
      flex-direction: column !important;
    }
    .flex-sm-row-reverse {
      -ms-flex-direction: row-reverse !important;
      flex-direction: row-reverse !important;
    }
    .flex-sm-column-reverse {
      -ms-flex-direction: column-reverse !important;
      flex-direction: column-reverse !important;
    }
    .flex-sm-grow-0 {
      -ms-flex-positive: 0 !important;
      flex-grow: 0 !important;
    }
    .flex-sm-grow-1 {
      -ms-flex-positive: 1 !important;
      flex-grow: 1 !important;
    }
    .flex-sm-shrink-0 {
      -ms-flex-negative: 0 !important;
      flex-shrink: 0 !important;
    }
    .flex-sm-shrink-1 {
      -ms-flex-negative: 1 !important;
      flex-shrink: 1 !important;
    }
    .flex-sm-wrap {
      -ms-flex-wrap: wrap !important;
      flex-wrap: wrap !important;
    }
    .flex-sm-nowrap {
      -ms-flex-wrap: nowrap !important;
      flex-wrap: nowrap !important;
    }
    .flex-sm-wrap-reverse {
      -ms-flex-wrap: wrap-reverse !important;
      flex-wrap: wrap-reverse !important;
    }
    .gap-sm-0 {
      gap: 0 !important;
    }
    .gap-sm-1 {
      gap: 0.25rem !important;
    }
    .gap-sm-2 {
      gap: 0.5rem !important;
    }
    .gap-sm-3 {
      gap: 1rem !important;
    }
    .gap-sm-4 {
      gap: 1.5rem !important;
    }
    .gap-sm-5 {
      gap: 3rem !important;
    }
    .justify-content-sm-start {
      -ms-flex-pack: start !important;
      justify-content: flex-start !important;
    }
    .justify-content-sm-end {
      -ms-flex-pack: end !important;
      justify-content: flex-end !important;
    }
    .justify-content-sm-center {
      -ms-flex-pack: center !important;
      justify-content: center !important;
    }
    .justify-content-sm-between {
      -ms-flex-pack: justify !important;
      justify-content: space-between !important;
    }
    .justify-content-sm-around {
      -ms-flex-pack: distribute !important;
      justify-content: space-around !important;
    }
    .justify-content-sm-evenly {
      -ms-flex-pack: space-evenly !important;
      justify-content: space-evenly !important;
    }
    .align-items-sm-start {
      -ms-flex-align: start !important;
      align-items: flex-start !important;
    }
    .align-items-sm-end {
      -ms-flex-align: end !important;
      align-items: flex-end !important;
    }
    .align-items-sm-center {
      -ms-flex-align: center !important;
      align-items: center !important;
    }
    .align-items-sm-baseline {
      -ms-flex-align: baseline !important;
      align-items: baseline !important;
    }
    .align-items-sm-stretch {
      -ms-flex-align: stretch !important;
      align-items: stretch !important;
    }
    .align-content-sm-start {
      -ms-flex-line-pack: start !important;
      align-content: flex-start !important;
    }
    .align-content-sm-end {
      -ms-flex-line-pack: end !important;
      align-content: flex-end !important;
    }
    .align-content-sm-center {
      -ms-flex-line-pack: center !important;
      align-content: center !important;
    }
    .align-content-sm-between {
      -ms-flex-line-pack: justify !important;
      align-content: space-between !important;
    }
    .align-content-sm-around {
      -ms-flex-line-pack: distribute !important;
      align-content: space-around !important;
    }
    .align-content-sm-stretch {
      -ms-flex-line-pack: stretch !important;
      align-content: stretch !important;
    }
    .align-self-sm-auto {
      -ms-flex-item-align: auto !important;
      align-self: auto !important;
    }
    .align-self-sm-start {
      -ms-flex-item-align: start !important;
      align-self: flex-start !important;
    }
    .align-self-sm-end {
      -ms-flex-item-align: end !important;
      align-self: flex-end !important;
    }
    .align-self-sm-center {
      -ms-flex-item-align: center !important;
      align-self: center !important;
    }
    .align-self-sm-baseline {
      -ms-flex-item-align: baseline !important;
      align-self: baseline !important;
    }
    .align-self-sm-stretch {
      -ms-flex-item-align: stretch !important;
      align-self: stretch !important;
    }
    .order-sm-first {
      -ms-flex-order: -1 !important;
      order: -1 !important;
    }
    .order-sm-0 {
      -ms-flex-order: 0 !important;
      order: 0 !important;
    }
    .order-sm-1 {
      -ms-flex-order: 1 !important;
      order: 1 !important;
    }
    .order-sm-2 {
      -ms-flex-order: 2 !important;
      order: 2 !important;
    }
    .order-sm-3 {
      -ms-flex-order: 3 !important;
      order: 3 !important;
    }
    .order-sm-4 {
      -ms-flex-order: 4 !important;
      order: 4 !important;
    }
    .order-sm-5 {
      -ms-flex-order: 5 !important;
      order: 5 !important;
    }
    .order-sm-last {
      -ms-flex-order: 6 !important;
      order: 6 !important;
    }
    .m-sm-0 {
      margin: 0 !important;
    }
    .m-sm-1 {
      margin: 0.25rem !important;
    }
    .m-sm-2 {
      margin: 0.5rem !important;
    }
    .m-sm-3 {
      margin: 1rem !important;
    }
    .m-sm-4 {
      margin: 1.5rem !important;
    }
    .m-sm-5 {
      margin: 3rem !important;
    }
    .m-sm-auto {
      margin: auto !important;
    }
    .mx-sm-0 {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }
    .mx-sm-1 {
      margin-right: 0.25rem !important;
      margin-left: 0.25rem !important;
    }
    .mx-sm-2 {
      margin-right: 0.5rem !important;
      margin-left: 0.5rem !important;
    }
    .mx-sm-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important;
    }
    .mx-sm-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important;
    }
    .mx-sm-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important;
    }
    .mx-sm-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }
    .my-sm-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
    .my-sm-1 {
      margin-top: 0.25rem !important;
      margin-bottom: 0.25rem !important;
    }
    .my-sm-2 {
      margin-top: 0.5rem !important;
      margin-bottom: 0.5rem !important;
    }
    .my-sm-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
    }
    .my-sm-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }
    .my-sm-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important;
    }
    .my-sm-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }
    .mt-sm-0 {
      margin-top: 0 !important;
    }
    .mt-sm-1 {
      margin-top: 0.25rem !important;
    }
    .mt-sm-2 {
      margin-top: 0.5rem !important;
    }
    .mt-sm-3 {
      margin-top: 1rem !important;
    }
    .mt-sm-4 {
      margin-top: 1.5rem !important;
    }
    .mt-sm-5 {
      margin-top: 3rem !important;
    }
    .mt-sm-auto {
      margin-top: auto !important;
    }
    .me-sm-0 {
      margin-right: 0 !important;
    }
    .me-sm-1 {
      margin-right: 0.25rem !important;
    }
    .me-sm-2 {
      margin-right: 0.5rem !important;
    }
    .me-sm-3 {
      margin-right: 1rem !important;
    }
    .me-sm-4 {
      margin-right: 1.5rem !important;
    }
    .me-sm-5 {
      margin-right: 3rem !important;
    }
    .me-sm-auto {
      margin-right: auto !important;
    }
    .mb-sm-0 {
      margin-bottom: 0 !important;
    }
    .mb-sm-1 {
      margin-bottom: 0.25rem !important;
    }
    .mb-sm-2 {
      margin-bottom: 0.5rem !important;
    }
    .mb-sm-3 {
      margin-bottom: 1rem !important;
    }
    .mb-sm-4 {
      margin-bottom: 1.5rem !important;
    }
    .mb-sm-5 {
      margin-bottom: 3rem !important;
    }
    .mb-sm-auto {
      margin-bottom: auto !important;
    }
    .ms-sm-0 {
      margin-left: 0 !important;
    }
    .ms-sm-1 {
      margin-left: 0.25rem !important;
    }
    .ms-sm-2 {
      margin-left: 0.5rem !important;
    }
    .ms-sm-3 {
      margin-left: 1rem !important;
    }
    .ms-sm-4 {
      margin-left: 1.5rem !important;
    }
    .ms-sm-5 {
      margin-left: 3rem !important;
    }
    .ms-sm-auto {
      margin-left: auto !important;
    }
    .p-sm-0 {
      padding: 0 !important;
    }
    .p-sm-1 {
      padding: 0.25rem !important;
    }
    .p-sm-2 {
      padding: 0.5rem !important;
    }
    .p-sm-3 {
      padding: 1rem !important;
    }
    .p-sm-4 {
      padding: 1.5rem !important;
    }
    .p-sm-5 {
      padding: 3rem !important;
    }
    .px-sm-0 {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    .px-sm-1 {
      padding-right: 0.25rem !important;
      padding-left: 0.25rem !important;
    }
    .px-sm-2 {
      padding-right: 0.5rem !important;
      padding-left: 0.5rem !important;
    }
    .px-sm-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }
    .px-sm-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
    }
    .px-sm-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important;
    }
    .py-sm-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
    .py-sm-1 {
      padding-top: 0.25rem !important;
      padding-bottom: 0.25rem !important;
    }
    .py-sm-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }
    .py-sm-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }
    .py-sm-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }
    .py-sm-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
    .pt-sm-0 {
      padding-top: 0 !important;
    }
    .pt-sm-1 {
      padding-top: 0.25rem !important;
    }
    .pt-sm-2 {
      padding-top: 0.5rem !important;
    }
    .pt-sm-3 {
      padding-top: 1rem !important;
    }
    .pt-sm-4 {
      padding-top: 1.5rem !important;
    }
    .pt-sm-5 {
      padding-top: 3rem !important;
    }
    .pe-sm-0 {
      padding-right: 0 !important;
    }
    .pe-sm-1 {
      padding-right: 0.25rem !important;
    }
    .pe-sm-2 {
      padding-right: 0.5rem !important;
    }
    .pe-sm-3 {
      padding-right: 1rem !important;
    }
    .pe-sm-4 {
      padding-right: 1.5rem !important;
    }
    .pe-sm-5 {
      padding-right: 3rem !important;
    }
    .pb-sm-0 {
      padding-bottom: 0 !important;
    }
    .pb-sm-1 {
      padding-bottom: 0.25rem !important;
    }
    .pb-sm-2 {
      padding-bottom: 0.5rem !important;
    }
    .pb-sm-3 {
      padding-bottom: 1rem !important;
    }
    .pb-sm-4 {
      padding-bottom: 1.5rem !important;
    }
    .pb-sm-5 {
      padding-bottom: 3rem !important;
    }
    .ps-sm-0 {
      padding-left: 0 !important;
    }
    .ps-sm-1 {
      padding-left: 0.25rem !important;
    }
    .ps-sm-2 {
      padding-left: 0.5rem !important;
    }
    .ps-sm-3 {
      padding-left: 1rem !important;
    }
    .ps-sm-4 {
      padding-left: 1.5rem !important;
    }
    .ps-sm-5 {
      padding-left: 3rem !important;
    }
    .text-sm-start {
      text-align: left !important;
    }
    .text-sm-end {
      text-align: right !important;
    }
    .text-sm-center {
      text-align: center !important;
    }
  }

  @media (min-width: 768px) {
    .float-md-start {
      float: left !important;
    }
    .float-md-end {
      float: right !important;
    }
    .float-md-none {
      float: none !important;
    }
    .d-md-inline {
      display: inline !important;
    }
    .d-md-inline-block {
      display: inline-block !important;
    }
    .d-md-block {
      display: block !important;
    }
    .d-md-grid {
      display: grid !important;
    }
    .d-md-table {
      display: table !important;
    }
    .d-md-table-row {
      display: table-row !important;
    }
    .d-md-table-cell {
      display: table-cell !important;
    }
    .d-md-flex {
      display: -ms-flexbox !important;
      display: flex !important;
    }
    .d-md-inline-flex {
      display: -ms-inline-flexbox !important;
      display: inline-flex !important;
    }
    .d-md-none {
      display: none !important;
    }
    .flex-md-fill {
      -ms-flex: 1 1 auto !important;
      flex: 1 1 auto !important;
    }
    .flex-md-row {
      -ms-flex-direction: row !important;
      flex-direction: row !important;
    }
    .flex-md-column {
      -ms-flex-direction: column !important;
      flex-direction: column !important;
    }
    .flex-md-row-reverse {
      -ms-flex-direction: row-reverse !important;
      flex-direction: row-reverse !important;
    }
    .flex-md-column-reverse {
      -ms-flex-direction: column-reverse !important;
      flex-direction: column-reverse !important;
    }
    .flex-md-grow-0 {
      -ms-flex-positive: 0 !important;
      flex-grow: 0 !important;
    }
    .flex-md-grow-1 {
      -ms-flex-positive: 1 !important;
      flex-grow: 1 !important;
    }
    .flex-md-shrink-0 {
      -ms-flex-negative: 0 !important;
      flex-shrink: 0 !important;
    }
    .flex-md-shrink-1 {
      -ms-flex-negative: 1 !important;
      flex-shrink: 1 !important;
    }
    .flex-md-wrap {
      -ms-flex-wrap: wrap !important;
      flex-wrap: wrap !important;
    }
    .flex-md-nowrap {
      -ms-flex-wrap: nowrap !important;
      flex-wrap: nowrap !important;
    }
    .flex-md-wrap-reverse {
      -ms-flex-wrap: wrap-reverse !important;
      flex-wrap: wrap-reverse !important;
    }
    .gap-md-0 {
      gap: 0 !important;
    }
    .gap-md-1 {
      gap: 0.25rem !important;
    }
    .gap-md-2 {
      gap: 0.5rem !important;
    }
    .gap-md-3 {
      gap: 1rem !important;
    }
    .gap-md-4 {
      gap: 1.5rem !important;
    }
    .gap-md-5 {
      gap: 3rem !important;
    }
    .justify-content-md-start {
      -ms-flex-pack: start !important;
      justify-content: flex-start !important;
    }
    .justify-content-md-end {
      -ms-flex-pack: end !important;
      justify-content: flex-end !important;
    }
    .justify-content-md-center {
      -ms-flex-pack: center !important;
      justify-content: center !important;
    }
    .justify-content-md-between {
      -ms-flex-pack: justify !important;
      justify-content: space-between !important;
    }
    .justify-content-md-around {
      -ms-flex-pack: distribute !important;
      justify-content: space-around !important;
    }
    .justify-content-md-evenly {
      -ms-flex-pack: space-evenly !important;
      justify-content: space-evenly !important;
    }
    .align-items-md-start {
      -ms-flex-align: start !important;
      align-items: flex-start !important;
    }
    .align-items-md-end {
      -ms-flex-align: end !important;
      align-items: flex-end !important;
    }
    .align-items-md-center {
      -ms-flex-align: center !important;
      align-items: center !important;
    }
    .align-items-md-baseline {
      -ms-flex-align: baseline !important;
      align-items: baseline !important;
    }
    .align-items-md-stretch {
      -ms-flex-align: stretch !important;
      align-items: stretch !important;
    }
    .align-content-md-start {
      -ms-flex-line-pack: start !important;
      align-content: flex-start !important;
    }
    .align-content-md-end {
      -ms-flex-line-pack: end !important;
      align-content: flex-end !important;
    }
    .align-content-md-center {
      -ms-flex-line-pack: center !important;
      align-content: center !important;
    }
    .align-content-md-between {
      -ms-flex-line-pack: justify !important;
      align-content: space-between !important;
    }
    .align-content-md-around {
      -ms-flex-line-pack: distribute !important;
      align-content: space-around !important;
    }
    .align-content-md-stretch {
      -ms-flex-line-pack: stretch !important;
      align-content: stretch !important;
    }
    .align-self-md-auto {
      -ms-flex-item-align: auto !important;
      align-self: auto !important;
    }
    .align-self-md-start {
      -ms-flex-item-align: start !important;
      align-self: flex-start !important;
    }
    .align-self-md-end {
      -ms-flex-item-align: end !important;
      align-self: flex-end !important;
    }
    .align-self-md-center {
      -ms-flex-item-align: center !important;
      align-self: center !important;
    }
    .align-self-md-baseline {
      -ms-flex-item-align: baseline !important;
      align-self: baseline !important;
    }
    .align-self-md-stretch {
      -ms-flex-item-align: stretch !important;
      align-self: stretch !important;
    }
    .order-md-first {
      -ms-flex-order: -1 !important;
      order: -1 !important;
    }
    .order-md-0 {
      -ms-flex-order: 0 !important;
      order: 0 !important;
    }
    .order-md-1 {
      -ms-flex-order: 1 !important;
      order: 1 !important;
    }
    .order-md-2 {
      -ms-flex-order: 2 !important;
      order: 2 !important;
    }
    .order-md-3 {
      -ms-flex-order: 3 !important;
      order: 3 !important;
    }
    .order-md-4 {
      -ms-flex-order: 4 !important;
      order: 4 !important;
    }
    .order-md-5 {
      -ms-flex-order: 5 !important;
      order: 5 !important;
    }
    .order-md-last {
      -ms-flex-order: 6 !important;
      order: 6 !important;
    }
    .m-md-0 {
      margin: 0 !important;
    }
    .m-md-1 {
      margin: 0.25rem !important;
    }
    .m-md-2 {
      margin: 0.5rem !important;
    }
    .m-md-3 {
      margin: 1rem !important;
    }
    .m-md-4 {
      margin: 1.5rem !important;
    }
    .m-md-5 {
      margin: 3rem !important;
    }
    .m-md-auto {
      margin: auto !important;
    }
    .mx-md-0 {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }
    .mx-md-1 {
      margin-right: 0.25rem !important;
      margin-left: 0.25rem !important;
    }
    .mx-md-2 {
      margin-right: 0.5rem !important;
      margin-left: 0.5rem !important;
    }
    .mx-md-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important;
    }
    .mx-md-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important;
    }
    .mx-md-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important;
    }
    .mx-md-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }
    .my-md-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
    .my-md-1 {
      margin-top: 0.25rem !important;
      margin-bottom: 0.25rem !important;
    }
    .my-md-2 {
      margin-top: 0.5rem !important;
      margin-bottom: 0.5rem !important;
    }
    .my-md-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
    }
    .my-md-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }
    .my-md-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important;
    }
    .my-md-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }
    .mt-md-0 {
      margin-top: 0 !important;
    }
    .mt-md-1 {
      margin-top: 0.25rem !important;
    }
    .mt-md-2 {
      margin-top: 0.5rem !important;
    }
    .mt-md-3 {
      margin-top: 1rem !important;
    }
    .mt-md-4 {
      margin-top: 1.5rem !important;
    }
    .mt-md-5 {
      margin-top: 3rem !important;
    }
    .mt-md-auto {
      margin-top: auto !important;
    }
    .me-md-0 {
      margin-right: 0 !important;
    }
    .me-md-1 {
      margin-right: 0.25rem !important;
    }
    .me-md-2 {
      margin-right: 0.5rem !important;
    }
    .me-md-3 {
      margin-right: 1rem !important;
    }
    .me-md-4 {
      margin-right: 1.5rem !important;
    }
    .me-md-5 {
      margin-right: 3rem !important;
    }
    .me-md-auto {
      margin-right: auto !important;
    }
    .mb-md-0 {
      margin-bottom: 0 !important;
    }
    .mb-md-1 {
      margin-bottom: 0.25rem !important;
    }
    .mb-md-2 {
      margin-bottom: 0.5rem !important;
    }
    .mb-md-3 {
      margin-bottom: 1rem !important;
    }
    .mb-md-4 {
      margin-bottom: 1.5rem !important;
    }
    .mb-md-5 {
      margin-bottom: 3rem !important;
    }
    .mb-md-auto {
      margin-bottom: auto !important;
    }
    .ms-md-0 {
      margin-left: 0 !important;
    }
    .ms-md-1 {
      margin-left: 0.25rem !important;
    }
    .ms-md-2 {
      margin-left: 0.5rem !important;
    }
    .ms-md-3 {
      margin-left: 1rem !important;
    }
    .ms-md-4 {
      margin-left: 1.5rem !important;
    }
    .ms-md-5 {
      margin-left: 3rem !important;
    }
    .ms-md-auto {
      margin-left: auto !important;
    }
    .p-md-0 {
      padding: 0 !important;
    }
    .p-md-1 {
      padding: 0.25rem !important;
    }
    .p-md-2 {
      padding: 0.5rem !important;
    }
    .p-md-3 {
      padding: 1rem !important;
    }
    .p-md-4 {
      padding: 1.5rem !important;
    }
    .p-md-5 {
      padding: 3rem !important;
    }
    .px-md-0 {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    .px-md-1 {
      padding-right: 0.25rem !important;
      padding-left: 0.25rem !important;
    }
    .px-md-2 {
      padding-right: 0.5rem !important;
      padding-left: 0.5rem !important;
    }
    .px-md-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }
    .px-md-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
    }
    .px-md-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important;
    }
    .py-md-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
    .py-md-1 {
      padding-top: 0.25rem !important;
      padding-bottom: 0.25rem !important;
    }
    .py-md-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }
    .py-md-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }
    .py-md-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }
    .py-md-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
    .pt-md-0 {
      padding-top: 0 !important;
    }
    .pt-md-1 {
      padding-top: 0.25rem !important;
    }
    .pt-md-2 {
      padding-top: 0.5rem !important;
    }
    .pt-md-3 {
      padding-top: 1rem !important;
    }
    .pt-md-4 {
      padding-top: 1.5rem !important;
    }
    .pt-md-5 {
      padding-top: 3rem !important;
    }
    .pe-md-0 {
      padding-right: 0 !important;
    }
    .pe-md-1 {
      padding-right: 0.25rem !important;
    }
    .pe-md-2 {
      padding-right: 0.5rem !important;
    }
    .pe-md-3 {
      padding-right: 1rem !important;
    }
    .pe-md-4 {
      padding-right: 1.5rem !important;
    }
    .pe-md-5 {
      padding-right: 3rem !important;
    }
    .pb-md-0 {
      padding-bottom: 0 !important;
    }
    .pb-md-1 {
      padding-bottom: 0.25rem !important;
    }
    .pb-md-2 {
      padding-bottom: 0.5rem !important;
    }
    .pb-md-3 {
      padding-bottom: 1rem !important;
    }
    .pb-md-4 {
      padding-bottom: 1.5rem !important;
    }
    .pb-md-5 {
      padding-bottom: 3rem !important;
    }
    .ps-md-0 {
      padding-left: 0 !important;
    }
    .ps-md-1 {
      padding-left: 0.25rem !important;
    }
    .ps-md-2 {
      padding-left: 0.5rem !important;
    }
    .ps-md-3 {
      padding-left: 1rem !important;
    }
    .ps-md-4 {
      padding-left: 1.5rem !important;
    }
    .ps-md-5 {
      padding-left: 3rem !important;
    }
    .text-md-start {
      text-align: left !important;
    }
    .text-md-end {
      text-align: right !important;
    }
    .text-md-center {
      text-align: center !important;
    }
  }

  @media (min-width: 992px) {
    .float-lg-start {
      float: left !important;
    }
    .float-lg-end {
      float: right !important;
    }
    .float-lg-none {
      float: none !important;
    }
    .d-lg-inline {
      display: inline !important;
    }
    .d-lg-inline-block {
      display: inline-block !important;
    }
    .d-lg-block {
      display: block !important;
    }
    .d-lg-grid {
      display: grid !important;
    }
    .d-lg-table {
      display: table !important;
    }
    .d-lg-table-row {
      display: table-row !important;
    }
    .d-lg-table-cell {
      display: table-cell !important;
    }
    .d-lg-flex {
      display: -ms-flexbox !important;
      display: flex !important;
    }
    .d-lg-inline-flex {
      display: -ms-inline-flexbox !important;
      display: inline-flex !important;
    }
    .d-lg-none {
      display: none !important;
    }
    .flex-lg-fill {
      -ms-flex: 1 1 auto !important;
      flex: 1 1 auto !important;
    }
    .flex-lg-row {
      -ms-flex-direction: row !important;
      flex-direction: row !important;
    }
    .flex-lg-column {
      -ms-flex-direction: column !important;
      flex-direction: column !important;
    }
    .flex-lg-row-reverse {
      -ms-flex-direction: row-reverse !important;
      flex-direction: row-reverse !important;
    }
    .flex-lg-column-reverse {
      -ms-flex-direction: column-reverse !important;
      flex-direction: column-reverse !important;
    }
    .flex-lg-grow-0 {
      -ms-flex-positive: 0 !important;
      flex-grow: 0 !important;
    }
    .flex-lg-grow-1 {
      -ms-flex-positive: 1 !important;
      flex-grow: 1 !important;
    }
    .flex-lg-shrink-0 {
      -ms-flex-negative: 0 !important;
      flex-shrink: 0 !important;
    }
    .flex-lg-shrink-1 {
      -ms-flex-negative: 1 !important;
      flex-shrink: 1 !important;
    }
    .flex-lg-wrap {
      -ms-flex-wrap: wrap !important;
      flex-wrap: wrap !important;
    }
    .flex-lg-nowrap {
      -ms-flex-wrap: nowrap !important;
      flex-wrap: nowrap !important;
    }
    .flex-lg-wrap-reverse {
      -ms-flex-wrap: wrap-reverse !important;
      flex-wrap: wrap-reverse !important;
    }
    .gap-lg-0 {
      gap: 0 !important;
    }
    .gap-lg-1 {
      gap: 0.25rem !important;
    }
    .gap-lg-2 {
      gap: 0.5rem !important;
    }
    .gap-lg-3 {
      gap: 1rem !important;
    }
    .gap-lg-4 {
      gap: 1.5rem !important;
    }
    .gap-lg-5 {
      gap: 3rem !important;
    }
    .justify-content-lg-start {
      -ms-flex-pack: start !important;
      justify-content: flex-start !important;
    }
    .justify-content-lg-end {
      -ms-flex-pack: end !important;
      justify-content: flex-end !important;
    }
    .justify-content-lg-center {
      -ms-flex-pack: center !important;
      justify-content: center !important;
    }
    .justify-content-lg-between {
      -ms-flex-pack: justify !important;
      justify-content: space-between !important;
    }
    .justify-content-lg-around {
      -ms-flex-pack: distribute !important;
      justify-content: space-around !important;
    }
    .justify-content-lg-evenly {
      -ms-flex-pack: space-evenly !important;
      justify-content: space-evenly !important;
    }
    .align-items-lg-start {
      -ms-flex-align: start !important;
      align-items: flex-start !important;
    }
    .align-items-lg-end {
      -ms-flex-align: end !important;
      align-items: flex-end !important;
    }
    .align-items-lg-center {
      -ms-flex-align: center !important;
      align-items: center !important;
    }
    .align-items-lg-baseline {
      -ms-flex-align: baseline !important;
      align-items: baseline !important;
    }
    .align-items-lg-stretch {
      -ms-flex-align: stretch !important;
      align-items: stretch !important;
    }
    .align-content-lg-start {
      -ms-flex-line-pack: start !important;
      align-content: flex-start !important;
    }
    .align-content-lg-end {
      -ms-flex-line-pack: end !important;
      align-content: flex-end !important;
    }
    .align-content-lg-center {
      -ms-flex-line-pack: center !important;
      align-content: center !important;
    }
    .align-content-lg-between {
      -ms-flex-line-pack: justify !important;
      align-content: space-between !important;
    }
    .align-content-lg-around {
      -ms-flex-line-pack: distribute !important;
      align-content: space-around !important;
    }
    .align-content-lg-stretch {
      -ms-flex-line-pack: stretch !important;
      align-content: stretch !important;
    }
    .align-self-lg-auto {
      -ms-flex-item-align: auto !important;
      align-self: auto !important;
    }
    .align-self-lg-start {
      -ms-flex-item-align: start !important;
      align-self: flex-start !important;
    }
    .align-self-lg-end {
      -ms-flex-item-align: end !important;
      align-self: flex-end !important;
    }
    .align-self-lg-center {
      -ms-flex-item-align: center !important;
      align-self: center !important;
    }
    .align-self-lg-baseline {
      -ms-flex-item-align: baseline !important;
      align-self: baseline !important;
    }
    .align-self-lg-stretch {
      -ms-flex-item-align: stretch !important;
      align-self: stretch !important;
    }
    .order-lg-first {
      -ms-flex-order: -1 !important;
      order: -1 !important;
    }
    .order-lg-0 {
      -ms-flex-order: 0 !important;
      order: 0 !important;
    }
    .order-lg-1 {
      -ms-flex-order: 1 !important;
      order: 1 !important;
    }
    .order-lg-2 {
      -ms-flex-order: 2 !important;
      order: 2 !important;
    }
    .order-lg-3 {
      -ms-flex-order: 3 !important;
      order: 3 !important;
    }
    .order-lg-4 {
      -ms-flex-order: 4 !important;
      order: 4 !important;
    }
    .order-lg-5 {
      -ms-flex-order: 5 !important;
      order: 5 !important;
    }
    .order-lg-last {
      -ms-flex-order: 6 !important;
      order: 6 !important;
    }
    .m-lg-0 {
      margin: 0 !important;
    }
    .m-lg-1 {
      margin: 0.25rem !important;
    }
    .m-lg-2 {
      margin: 0.5rem !important;
    }
    .m-lg-3 {
      margin: 1rem !important;
    }
    .m-lg-4 {
      margin: 1.5rem !important;
    }
    .m-lg-5 {
      margin: 3rem !important;
    }
    .m-lg-auto {
      margin: auto !important;
    }
    .mx-lg-0 {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }
    .mx-lg-1 {
      margin-right: 0.25rem !important;
      margin-left: 0.25rem !important;
    }
    .mx-lg-2 {
      margin-right: 0.5rem !important;
      margin-left: 0.5rem !important;
    }
    .mx-lg-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important;
    }
    .mx-lg-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important;
    }
    .mx-lg-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important;
    }
    .mx-lg-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }
    .my-lg-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
    .my-lg-1 {
      margin-top: 0.25rem !important;
      margin-bottom: 0.25rem !important;
    }
    .my-lg-2 {
      margin-top: 0.5rem !important;
      margin-bottom: 0.5rem !important;
    }
    .my-lg-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
    }
    .my-lg-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }
    .my-lg-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important;
    }
    .my-lg-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }
    .mt-lg-0 {
      margin-top: 0 !important;
    }
    .mt-lg-1 {
      margin-top: 0.25rem !important;
    }
    .mt-lg-2 {
      margin-top: 0.5rem !important;
    }
    .mt-lg-3 {
      margin-top: 1rem !important;
    }
    .mt-lg-4 {
      margin-top: 1.5rem !important;
    }
    .mt-lg-5 {
      margin-top: 3rem !important;
    }
    .mt-lg-auto {
      margin-top: auto !important;
    }
    .me-lg-0 {
      margin-right: 0 !important;
    }
    .me-lg-1 {
      margin-right: 0.25rem !important;
    }
    .me-lg-2 {
      margin-right: 0.5rem !important;
    }
    .me-lg-3 {
      margin-right: 1rem !important;
    }
    .me-lg-4 {
      margin-right: 1.5rem !important;
    }
    .me-lg-5 {
      margin-right: 3rem !important;
    }
    .me-lg-auto {
      margin-right: auto !important;
    }
    .mb-lg-0 {
      margin-bottom: 0 !important;
    }
    .mb-lg-1 {
      margin-bottom: 0.25rem !important;
    }
    .mb-lg-2 {
      margin-bottom: 0.5rem !important;
    }
    .mb-lg-3 {
      margin-bottom: 1rem !important;
    }
    .mb-lg-4 {
      margin-bottom: 1.5rem !important;
    }
    .mb-lg-5 {
      margin-bottom: 3rem !important;
    }
    .mb-lg-auto {
      margin-bottom: auto !important;
    }
    .ms-lg-0 {
      margin-left: 0 !important;
    }
    .ms-lg-1 {
      margin-left: 0.25rem !important;
    }
    .ms-lg-2 {
      margin-left: 0.5rem !important;
    }
    .ms-lg-3 {
      margin-left: 1rem !important;
    }
    .ms-lg-4 {
      margin-left: 1.5rem !important;
    }
    .ms-lg-5 {
      margin-left: 3rem !important;
    }
    .ms-lg-auto {
      margin-left: auto !important;
    }
    .p-lg-0 {
      padding: 0 !important;
    }
    .p-lg-1 {
      padding: 0.25rem !important;
    }
    .p-lg-2 {
      padding: 0.5rem !important;
    }
    .p-lg-3 {
      padding: 1rem !important;
    }
    .p-lg-4 {
      padding: 1.5rem !important;
    }
    .p-lg-5 {
      padding: 3rem !important;
    }
    .px-lg-0 {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    .px-lg-1 {
      padding-right: 0.25rem !important;
      padding-left: 0.25rem !important;
    }
    .px-lg-2 {
      padding-right: 0.5rem !important;
      padding-left: 0.5rem !important;
    }
    .px-lg-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }
    .px-lg-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
    }
    .px-lg-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important;
    }
    .py-lg-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
    .py-lg-1 {
      padding-top: 0.25rem !important;
      padding-bottom: 0.25rem !important;
    }
    .py-lg-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }
    .py-lg-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }
    .py-lg-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }
    .py-lg-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
    .pt-lg-0 {
      padding-top: 0 !important;
    }
    .pt-lg-1 {
      padding-top: 0.25rem !important;
    }
    .pt-lg-2 {
      padding-top: 0.5rem !important;
    }
    .pt-lg-3 {
      padding-top: 1rem !important;
    }
    .pt-lg-4 {
      padding-top: 1.5rem !important;
    }
    .pt-lg-5 {
      padding-top: 3rem !important;
    }
    .pe-lg-0 {
      padding-right: 0 !important;
    }
    .pe-lg-1 {
      padding-right: 0.25rem !important;
    }
    .pe-lg-2 {
      padding-right: 0.5rem !important;
    }
    .pe-lg-3 {
      padding-right: 1rem !important;
    }
    .pe-lg-4 {
      padding-right: 1.5rem !important;
    }
    .pe-lg-5 {
      padding-right: 3rem !important;
    }
    .pb-lg-0 {
      padding-bottom: 0 !important;
    }
    .pb-lg-1 {
      padding-bottom: 0.25rem !important;
    }
    .pb-lg-2 {
      padding-bottom: 0.5rem !important;
    }
    .pb-lg-3 {
      padding-bottom: 1rem !important;
    }
    .pb-lg-4 {
      padding-bottom: 1.5rem !important;
    }
    .pb-lg-5 {
      padding-bottom: 3rem !important;
    }
    .ps-lg-0 {
      padding-left: 0 !important;
    }
    .ps-lg-1 {
      padding-left: 0.25rem !important;
    }
    .ps-lg-2 {
      padding-left: 0.5rem !important;
    }
    .ps-lg-3 {
      padding-left: 1rem !important;
    }
    .ps-lg-4 {
      padding-left: 1.5rem !important;
    }
    .ps-lg-5 {
      padding-left: 3rem !important;
    }
    .text-lg-start {
      text-align: left !important;
    }
    .text-lg-end {
      text-align: right !important;
    }
    .text-lg-center {
      text-align: center !important;
    }
  }

  @media (min-width: 1200px) {
    .float-xl-start {
      float: left !important;
    }
    .float-xl-end {
      float: right !important;
    }
    .float-xl-none {
      float: none !important;
    }
    .d-xl-inline {
      display: inline !important;
    }
    .d-xl-inline-block {
      display: inline-block !important;
    }
    .d-xl-block {
      display: block !important;
    }
    .d-xl-grid {
      display: grid !important;
    }
    .d-xl-table {
      display: table !important;
    }
    .d-xl-table-row {
      display: table-row !important;
    }
    .d-xl-table-cell {
      display: table-cell !important;
    }
    .d-xl-flex {
      display: -ms-flexbox !important;
      display: flex !important;
    }
    .d-xl-inline-flex {
      display: -ms-inline-flexbox !important;
      display: inline-flex !important;
    }
    .d-xl-none {
      display: none !important;
    }
    .flex-xl-fill {
      -ms-flex: 1 1 auto !important;
      flex: 1 1 auto !important;
    }
    .flex-xl-row {
      -ms-flex-direction: row !important;
      flex-direction: row !important;
    }
    .flex-xl-column {
      -ms-flex-direction: column !important;
      flex-direction: column !important;
    }
    .flex-xl-row-reverse {
      -ms-flex-direction: row-reverse !important;
      flex-direction: row-reverse !important;
    }
    .flex-xl-column-reverse {
      -ms-flex-direction: column-reverse !important;
      flex-direction: column-reverse !important;
    }
    .flex-xl-grow-0 {
      -ms-flex-positive: 0 !important;
      flex-grow: 0 !important;
    }
    .flex-xl-grow-1 {
      -ms-flex-positive: 1 !important;
      flex-grow: 1 !important;
    }
    .flex-xl-shrink-0 {
      -ms-flex-negative: 0 !important;
      flex-shrink: 0 !important;
    }
    .flex-xl-shrink-1 {
      -ms-flex-negative: 1 !important;
      flex-shrink: 1 !important;
    }
    .flex-xl-wrap {
      -ms-flex-wrap: wrap !important;
      flex-wrap: wrap !important;
    }
    .flex-xl-nowrap {
      -ms-flex-wrap: nowrap !important;
      flex-wrap: nowrap !important;
    }
    .flex-xl-wrap-reverse {
      -ms-flex-wrap: wrap-reverse !important;
      flex-wrap: wrap-reverse !important;
    }
    .gap-xl-0 {
      gap: 0 !important;
    }
    .gap-xl-1 {
      gap: 0.25rem !important;
    }
    .gap-xl-2 {
      gap: 0.5rem !important;
    }
    .gap-xl-3 {
      gap: 1rem !important;
    }
    .gap-xl-4 {
      gap: 1.5rem !important;
    }
    .gap-xl-5 {
      gap: 3rem !important;
    }
    .justify-content-xl-start {
      -ms-flex-pack: start !important;
      justify-content: flex-start !important;
    }
    .justify-content-xl-end {
      -ms-flex-pack: end !important;
      justify-content: flex-end !important;
    }
    .justify-content-xl-center {
      -ms-flex-pack: center !important;
      justify-content: center !important;
    }
    .justify-content-xl-between {
      -ms-flex-pack: justify !important;
      justify-content: space-between !important;
    }
    .justify-content-xl-around {
      -ms-flex-pack: distribute !important;
      justify-content: space-around !important;
    }
    .justify-content-xl-evenly {
      -ms-flex-pack: space-evenly !important;
      justify-content: space-evenly !important;
    }
    .align-items-xl-start {
      -ms-flex-align: start !important;
      align-items: flex-start !important;
    }
    .align-items-xl-end {
      -ms-flex-align: end !important;
      align-items: flex-end !important;
    }
    .align-items-xl-center {
      -ms-flex-align: center !important;
      align-items: center !important;
    }
    .align-items-xl-baseline {
      -ms-flex-align: baseline !important;
      align-items: baseline !important;
    }
    .align-items-xl-stretch {
      -ms-flex-align: stretch !important;
      align-items: stretch !important;
    }
    .align-content-xl-start {
      -ms-flex-line-pack: start !important;
      align-content: flex-start !important;
    }
    .align-content-xl-end {
      -ms-flex-line-pack: end !important;
      align-content: flex-end !important;
    }
    .align-content-xl-center {
      -ms-flex-line-pack: center !important;
      align-content: center !important;
    }
    .align-content-xl-between {
      -ms-flex-line-pack: justify !important;
      align-content: space-between !important;
    }
    .align-content-xl-around {
      -ms-flex-line-pack: distribute !important;
      align-content: space-around !important;
    }
    .align-content-xl-stretch {
      -ms-flex-line-pack: stretch !important;
      align-content: stretch !important;
    }
    .align-self-xl-auto {
      -ms-flex-item-align: auto !important;
      align-self: auto !important;
    }
    .align-self-xl-start {
      -ms-flex-item-align: start !important;
      align-self: flex-start !important;
    }
    .align-self-xl-end {
      -ms-flex-item-align: end !important;
      align-self: flex-end !important;
    }
    .align-self-xl-center {
      -ms-flex-item-align: center !important;
      align-self: center !important;
    }
    .align-self-xl-baseline {
      -ms-flex-item-align: baseline !important;
      align-self: baseline !important;
    }
    .align-self-xl-stretch {
      -ms-flex-item-align: stretch !important;
      align-self: stretch !important;
    }
    .order-xl-first {
      -ms-flex-order: -1 !important;
      order: -1 !important;
    }
    .order-xl-0 {
      -ms-flex-order: 0 !important;
      order: 0 !important;
    }
    .order-xl-1 {
      -ms-flex-order: 1 !important;
      order: 1 !important;
    }
    .order-xl-2 {
      -ms-flex-order: 2 !important;
      order: 2 !important;
    }
    .order-xl-3 {
      -ms-flex-order: 3 !important;
      order: 3 !important;
    }
    .order-xl-4 {
      -ms-flex-order: 4 !important;
      order: 4 !important;
    }
    .order-xl-5 {
      -ms-flex-order: 5 !important;
      order: 5 !important;
    }
    .order-xl-last {
      -ms-flex-order: 6 !important;
      order: 6 !important;
    }
    .m-xl-0 {
      margin: 0 !important;
    }
    .m-xl-1 {
      margin: 0.25rem !important;
    }
    .m-xl-2 {
      margin: 0.5rem !important;
    }
    .m-xl-3 {
      margin: 1rem !important;
    }
    .m-xl-4 {
      margin: 1.5rem !important;
    }
    .m-xl-5 {
      margin: 3rem !important;
    }
    .m-xl-auto {
      margin: auto !important;
    }
    .mx-xl-0 {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }
    .mx-xl-1 {
      margin-right: 0.25rem !important;
      margin-left: 0.25rem !important;
    }
    .mx-xl-2 {
      margin-right: 0.5rem !important;
      margin-left: 0.5rem !important;
    }
    .mx-xl-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important;
    }
    .mx-xl-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important;
    }
    .mx-xl-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important;
    }
    .mx-xl-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }
    .my-xl-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
    .my-xl-1 {
      margin-top: 0.25rem !important;
      margin-bottom: 0.25rem !important;
    }
    .my-xl-2 {
      margin-top: 0.5rem !important;
      margin-bottom: 0.5rem !important;
    }
    .my-xl-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
    }
    .my-xl-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }
    .my-xl-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important;
    }
    .my-xl-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }
    .mt-xl-0 {
      margin-top: 0 !important;
    }
    .mt-xl-1 {
      margin-top: 0.25rem !important;
    }
    .mt-xl-2 {
      margin-top: 0.5rem !important;
    }
    .mt-xl-3 {
      margin-top: 1rem !important;
    }
    .mt-xl-4 {
      margin-top: 1.5rem !important;
    }
    .mt-xl-5 {
      margin-top: 3rem !important;
    }
    .mt-xl-auto {
      margin-top: auto !important;
    }
    .me-xl-0 {
      margin-right: 0 !important;
    }
    .me-xl-1 {
      margin-right: 0.25rem !important;
    }
    .me-xl-2 {
      margin-right: 0.5rem !important;
    }
    .me-xl-3 {
      margin-right: 1rem !important;
    }
    .me-xl-4 {
      margin-right: 1.5rem !important;
    }
    .me-xl-5 {
      margin-right: 3rem !important;
    }
    .me-xl-auto {
      margin-right: auto !important;
    }
    .mb-xl-0 {
      margin-bottom: 0 !important;
    }
    .mb-xl-1 {
      margin-bottom: 0.25rem !important;
    }
    .mb-xl-2 {
      margin-bottom: 0.5rem !important;
    }
    .mb-xl-3 {
      margin-bottom: 1rem !important;
    }
    .mb-xl-4 {
      margin-bottom: 1.5rem !important;
    }
    .mb-xl-5 {
      margin-bottom: 3rem !important;
    }
    .mb-xl-auto {
      margin-bottom: auto !important;
    }
    .ms-xl-0 {
      margin-left: 0 !important;
    }
    .ms-xl-1 {
      margin-left: 0.25rem !important;
    }
    .ms-xl-2 {
      margin-left: 0.5rem !important;
    }
    .ms-xl-3 {
      margin-left: 1rem !important;
    }
    .ms-xl-4 {
      margin-left: 1.5rem !important;
    }
    .ms-xl-5 {
      margin-left: 3rem !important;
    }
    .ms-xl-auto {
      margin-left: auto !important;
    }
    .p-xl-0 {
      padding: 0 !important;
    }
    .p-xl-1 {
      padding: 0.25rem !important;
    }
    .p-xl-2 {
      padding: 0.5rem !important;
    }
    .p-xl-3 {
      padding: 1rem !important;
    }
    .p-xl-4 {
      padding: 1.5rem !important;
    }
    .p-xl-5 {
      padding: 3rem !important;
    }
    .px-xl-0 {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    .px-xl-1 {
      padding-right: 0.25rem !important;
      padding-left: 0.25rem !important;
    }
    .px-xl-2 {
      padding-right: 0.5rem !important;
      padding-left: 0.5rem !important;
    }
    .px-xl-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }
    .px-xl-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
    }
    .px-xl-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important;
    }
    .py-xl-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
    .py-xl-1 {
      padding-top: 0.25rem !important;
      padding-bottom: 0.25rem !important;
    }
    .py-xl-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }
    .py-xl-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }
    .py-xl-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }
    .py-xl-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
    .pt-xl-0 {
      padding-top: 0 !important;
    }
    .pt-xl-1 {
      padding-top: 0.25rem !important;
    }
    .pt-xl-2 {
      padding-top: 0.5rem !important;
    }
    .pt-xl-3 {
      padding-top: 1rem !important;
    }
    .pt-xl-4 {
      padding-top: 1.5rem !important;
    }
    .pt-xl-5 {
      padding-top: 3rem !important;
    }
    .pe-xl-0 {
      padding-right: 0 !important;
    }
    .pe-xl-1 {
      padding-right: 0.25rem !important;
    }
    .pe-xl-2 {
      padding-right: 0.5rem !important;
    }
    .pe-xl-3 {
      padding-right: 1rem !important;
    }
    .pe-xl-4 {
      padding-right: 1.5rem !important;
    }
    .pe-xl-5 {
      padding-right: 3rem !important;
    }
    .pb-xl-0 {
      padding-bottom: 0 !important;
    }
    .pb-xl-1 {
      padding-bottom: 0.25rem !important;
    }
    .pb-xl-2 {
      padding-bottom: 0.5rem !important;
    }
    .pb-xl-3 {
      padding-bottom: 1rem !important;
    }
    .pb-xl-4 {
      padding-bottom: 1.5rem !important;
    }
    .pb-xl-5 {
      padding-bottom: 3rem !important;
    }
    .ps-xl-0 {
      padding-left: 0 !important;
    }
    .ps-xl-1 {
      padding-left: 0.25rem !important;
    }
    .ps-xl-2 {
      padding-left: 0.5rem !important;
    }
    .ps-xl-3 {
      padding-left: 1rem !important;
    }
    .ps-xl-4 {
      padding-left: 1.5rem !important;
    }
    .ps-xl-5 {
      padding-left: 3rem !important;
    }
    .text-xl-start {
      text-align: left !important;
    }
    .text-xl-end {
      text-align: right !important;
    }
    .text-xl-center {
      text-align: center !important;
    }
  }

  @media (min-width: 1400px) {
    .float-xxl-start {
      float: left !important;
    }
    .float-xxl-end {
      float: right !important;
    }
    .float-xxl-none {
      float: none !important;
    }
    .d-xxl-inline {
      display: inline !important;
    }
    .d-xxl-inline-block {
      display: inline-block !important;
    }
    .d-xxl-block {
      display: block !important;
    }
    .d-xxl-grid {
      display: grid !important;
    }
    .d-xxl-table {
      display: table !important;
    }
    .d-xxl-table-row {
      display: table-row !important;
    }
    .d-xxl-table-cell {
      display: table-cell !important;
    }
    .d-xxl-flex {
      display: -ms-flexbox !important;
      display: flex !important;
    }
    .d-xxl-inline-flex {
      display: -ms-inline-flexbox !important;
      display: inline-flex !important;
    }
    .d-xxl-none {
      display: none !important;
    }
    .flex-xxl-fill {
      -ms-flex: 1 1 auto !important;
      flex: 1 1 auto !important;
    }
    .flex-xxl-row {
      -ms-flex-direction: row !important;
      flex-direction: row !important;
    }
    .flex-xxl-column {
      -ms-flex-direction: column !important;
      flex-direction: column !important;
    }
    .flex-xxl-row-reverse {
      -ms-flex-direction: row-reverse !important;
      flex-direction: row-reverse !important;
    }
    .flex-xxl-column-reverse {
      -ms-flex-direction: column-reverse !important;
      flex-direction: column-reverse !important;
    }
    .flex-xxl-grow-0 {
      -ms-flex-positive: 0 !important;
      flex-grow: 0 !important;
    }
    .flex-xxl-grow-1 {
      -ms-flex-positive: 1 !important;
      flex-grow: 1 !important;
    }
    .flex-xxl-shrink-0 {
      -ms-flex-negative: 0 !important;
      flex-shrink: 0 !important;
    }
    .flex-xxl-shrink-1 {
      -ms-flex-negative: 1 !important;
      flex-shrink: 1 !important;
    }
    .flex-xxl-wrap {
      -ms-flex-wrap: wrap !important;
      flex-wrap: wrap !important;
    }
    .flex-xxl-nowrap {
      -ms-flex-wrap: nowrap !important;
      flex-wrap: nowrap !important;
    }
    .flex-xxl-wrap-reverse {
      -ms-flex-wrap: wrap-reverse !important;
      flex-wrap: wrap-reverse !important;
    }
    .gap-xxl-0 {
      gap: 0 !important;
    }
    .gap-xxl-1 {
      gap: 0.25rem !important;
    }
    .gap-xxl-2 {
      gap: 0.5rem !important;
    }
    .gap-xxl-3 {
      gap: 1rem !important;
    }
    .gap-xxl-4 {
      gap: 1.5rem !important;
    }
    .gap-xxl-5 {
      gap: 3rem !important;
    }
    .justify-content-xxl-start {
      -ms-flex-pack: start !important;
      justify-content: flex-start !important;
    }
    .justify-content-xxl-end {
      -ms-flex-pack: end !important;
      justify-content: flex-end !important;
    }
    .justify-content-xxl-center {
      -ms-flex-pack: center !important;
      justify-content: center !important;
    }
    .justify-content-xxl-between {
      -ms-flex-pack: justify !important;
      justify-content: space-between !important;
    }
    .justify-content-xxl-around {
      -ms-flex-pack: distribute !important;
      justify-content: space-around !important;
    }
    .justify-content-xxl-evenly {
      -ms-flex-pack: space-evenly !important;
      justify-content: space-evenly !important;
    }
    .align-items-xxl-start {
      -ms-flex-align: start !important;
      align-items: flex-start !important;
    }
    .align-items-xxl-end {
      -ms-flex-align: end !important;
      align-items: flex-end !important;
    }
    .align-items-xxl-center {
      -ms-flex-align: center !important;
      align-items: center !important;
    }
    .align-items-xxl-baseline {
      -ms-flex-align: baseline !important;
      align-items: baseline !important;
    }
    .align-items-xxl-stretch {
      -ms-flex-align: stretch !important;
      align-items: stretch !important;
    }
    .align-content-xxl-start {
      -ms-flex-line-pack: start !important;
      align-content: flex-start !important;
    }
    .align-content-xxl-end {
      -ms-flex-line-pack: end !important;
      align-content: flex-end !important;
    }
    .align-content-xxl-center {
      -ms-flex-line-pack: center !important;
      align-content: center !important;
    }
    .align-content-xxl-between {
      -ms-flex-line-pack: justify !important;
      align-content: space-between !important;
    }
    .align-content-xxl-around {
      -ms-flex-line-pack: distribute !important;
      align-content: space-around !important;
    }
    .align-content-xxl-stretch {
      -ms-flex-line-pack: stretch !important;
      align-content: stretch !important;
    }
    .align-self-xxl-auto {
      -ms-flex-item-align: auto !important;
      align-self: auto !important;
    }
    .align-self-xxl-start {
      -ms-flex-item-align: start !important;
      align-self: flex-start !important;
    }
    .align-self-xxl-end {
      -ms-flex-item-align: end !important;
      align-self: flex-end !important;
    }
    .align-self-xxl-center {
      -ms-flex-item-align: center !important;
      align-self: center !important;
    }
    .align-self-xxl-baseline {
      -ms-flex-item-align: baseline !important;
      align-self: baseline !important;
    }
    .align-self-xxl-stretch {
      -ms-flex-item-align: stretch !important;
      align-self: stretch !important;
    }
    .order-xxl-first {
      -ms-flex-order: -1 !important;
      order: -1 !important;
    }
    .order-xxl-0 {
      -ms-flex-order: 0 !important;
      order: 0 !important;
    }
    .order-xxl-1 {
      -ms-flex-order: 1 !important;
      order: 1 !important;
    }
    .order-xxl-2 {
      -ms-flex-order: 2 !important;
      order: 2 !important;
    }
    .order-xxl-3 {
      -ms-flex-order: 3 !important;
      order: 3 !important;
    }
    .order-xxl-4 {
      -ms-flex-order: 4 !important;
      order: 4 !important;
    }
    .order-xxl-5 {
      -ms-flex-order: 5 !important;
      order: 5 !important;
    }
    .order-xxl-last {
      -ms-flex-order: 6 !important;
      order: 6 !important;
    }
    .m-xxl-0 {
      margin: 0 !important;
    }
    .m-xxl-1 {
      margin: 0.25rem !important;
    }
    .m-xxl-2 {
      margin: 0.5rem !important;
    }
    .m-xxl-3 {
      margin: 1rem !important;
    }
    .m-xxl-4 {
      margin: 1.5rem !important;
    }
    .m-xxl-5 {
      margin: 3rem !important;
    }
    .m-xxl-auto {
      margin: auto !important;
    }
    .mx-xxl-0 {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }
    .mx-xxl-1 {
      margin-right: 0.25rem !important;
      margin-left: 0.25rem !important;
    }
    .mx-xxl-2 {
      margin-right: 0.5rem !important;
      margin-left: 0.5rem !important;
    }
    .mx-xxl-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important;
    }
    .mx-xxl-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important;
    }
    .mx-xxl-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important;
    }
    .mx-xxl-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }
    .my-xxl-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
    .my-xxl-1 {
      margin-top: 0.25rem !important;
      margin-bottom: 0.25rem !important;
    }
    .my-xxl-2 {
      margin-top: 0.5rem !important;
      margin-bottom: 0.5rem !important;
    }
    .my-xxl-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
    }
    .my-xxl-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }
    .my-xxl-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important;
    }
    .my-xxl-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }
    .mt-xxl-0 {
      margin-top: 0 !important;
    }
    .mt-xxl-1 {
      margin-top: 0.25rem !important;
    }
    .mt-xxl-2 {
      margin-top: 0.5rem !important;
    }
    .mt-xxl-3 {
      margin-top: 1rem !important;
    }
    .mt-xxl-4 {
      margin-top: 1.5rem !important;
    }
    .mt-xxl-5 {
      margin-top: 3rem !important;
    }
    .mt-xxl-auto {
      margin-top: auto !important;
    }
    .me-xxl-0 {
      margin-right: 0 !important;
    }
    .me-xxl-1 {
      margin-right: 0.25rem !important;
    }
    .me-xxl-2 {
      margin-right: 0.5rem !important;
    }
    .me-xxl-3 {
      margin-right: 1rem !important;
    }
    .me-xxl-4 {
      margin-right: 1.5rem !important;
    }
    .me-xxl-5 {
      margin-right: 3rem !important;
    }
    .me-xxl-auto {
      margin-right: auto !important;
    }
    .mb-xxl-0 {
      margin-bottom: 0 !important;
    }
    .mb-xxl-1 {
      margin-bottom: 0.25rem !important;
    }
    .mb-xxl-2 {
      margin-bottom: 0.5rem !important;
    }
    .mb-xxl-3 {
      margin-bottom: 1rem !important;
    }
    .mb-xxl-4 {
      margin-bottom: 1.5rem !important;
    }
    .mb-xxl-5 {
      margin-bottom: 3rem !important;
    }
    .mb-xxl-auto {
      margin-bottom: auto !important;
    }
    .ms-xxl-0 {
      margin-left: 0 !important;
    }
    .ms-xxl-1 {
      margin-left: 0.25rem !important;
    }
    .ms-xxl-2 {
      margin-left: 0.5rem !important;
    }
    .ms-xxl-3 {
      margin-left: 1rem !important;
    }
    .ms-xxl-4 {
      margin-left: 1.5rem !important;
    }
    .ms-xxl-5 {
      margin-left: 3rem !important;
    }
    .ms-xxl-auto {
      margin-left: auto !important;
    }
    .p-xxl-0 {
      padding: 0 !important;
    }
    .p-xxl-1 {
      padding: 0.25rem !important;
    }
    .p-xxl-2 {
      padding: 0.5rem !important;
    }
    .p-xxl-3 {
      padding: 1rem !important;
    }
    .p-xxl-4 {
      padding: 1.5rem !important;
    }
    .p-xxl-5 {
      padding: 3rem !important;
    }
    .px-xxl-0 {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    .px-xxl-1 {
      padding-right: 0.25rem !important;
      padding-left: 0.25rem !important;
    }
    .px-xxl-2 {
      padding-right: 0.5rem !important;
      padding-left: 0.5rem !important;
    }
    .px-xxl-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }
    .px-xxl-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
    }
    .px-xxl-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important;
    }
    .py-xxl-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
    .py-xxl-1 {
      padding-top: 0.25rem !important;
      padding-bottom: 0.25rem !important;
    }
    .py-xxl-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }
    .py-xxl-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }
    .py-xxl-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }
    .py-xxl-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
    .pt-xxl-0 {
      padding-top: 0 !important;
    }
    .pt-xxl-1 {
      padding-top: 0.25rem !important;
    }
    .pt-xxl-2 {
      padding-top: 0.5rem !important;
    }
    .pt-xxl-3 {
      padding-top: 1rem !important;
    }
    .pt-xxl-4 {
      padding-top: 1.5rem !important;
    }
    .pt-xxl-5 {
      padding-top: 3rem !important;
    }
    .pe-xxl-0 {
      padding-right: 0 !important;
    }
    .pe-xxl-1 {
      padding-right: 0.25rem !important;
    }
    .pe-xxl-2 {
      padding-right: 0.5rem !important;
    }
    .pe-xxl-3 {
      padding-right: 1rem !important;
    }
    .pe-xxl-4 {
      padding-right: 1.5rem !important;
    }
    .pe-xxl-5 {
      padding-right: 3rem !important;
    }
    .pb-xxl-0 {
      padding-bottom: 0 !important;
    }
    .pb-xxl-1 {
      padding-bottom: 0.25rem !important;
    }
    .pb-xxl-2 {
      padding-bottom: 0.5rem !important;
    }
    .pb-xxl-3 {
      padding-bottom: 1rem !important;
    }
    .pb-xxl-4 {
      padding-bottom: 1.5rem !important;
    }
    .pb-xxl-5 {
      padding-bottom: 3rem !important;
    }
    .ps-xxl-0 {
      padding-left: 0 !important;
    }
    .ps-xxl-1 {
      padding-left: 0.25rem !important;
    }
    .ps-xxl-2 {
      padding-left: 0.5rem !important;
    }
    .ps-xxl-3 {
      padding-left: 1rem !important;
    }
    .ps-xxl-4 {
      padding-left: 1.5rem !important;
    }
    .ps-xxl-5 {
      padding-left: 3rem !important;
    }
    .text-xxl-start {
      text-align: left !important;
    }
    .text-xxl-end {
      text-align: right !important;
    }
    .text-xxl-center {
      text-align: center !important;
    }
  }

  @media (min-width: 1200px) {
    .fs-1 {
      font-size: 2.5rem !important;
    }
    .fs-2 {
      font-size: 2rem !important;
    }
    .fs-3 {
      font-size: 1.75rem !important;
    }
    .fs-4 {
      font-size: 1.5rem !important;
    }
  }

  @media print {
    .d-print-inline {
      display: inline !important;
    }
    .d-print-inline-block {
      display: inline-block !important;
    }
    .d-print-block {
      display: block !important;
    }
    .d-print-grid {
      display: grid !important;
    }
    .d-print-table {
      display: table !important;
    }
    .d-print-table-row {
      display: table-row !important;
    }
    .d-print-table-cell {
      display: table-cell !important;
    }
    .d-print-flex {
      display: -ms-flexbox !important;
      display: flex !important;
    }
    .d-print-inline-flex {
      display: -ms-inline-flexbox !important;
      display: inline-flex !important;
    }
    .d-print-none {
      display: none !important;
    }
  }

  .bg-primary {
    background-color: #3e3f3a !important;
  }

  .bg-dark {
    background-color: #8e8c84 !important;
  }

  .bg-light {
    background-color: #f8f5f0 !important;
  }

  .sandstone,
  .navbar .nav-link,
  .btn,
  .nav-tabs .nav-link,
  .nav-pills .nav-link,
  .breadcrumb,
  .pagination,
  .dropdown-menu .dropdown-item,
  .tooltip {
    font-size: 13px;
    line-height: 22px;
    font-weight: 500;
    text-transform: uppercase;
  }

  .navbar-form input,
  .navbar-form .form-control {
    border: none;
  }

  .btn:hover {
    border-color: transparent;
  }

  .btn-success,
  .btn-warning {
    color: #fff;
  }

  .table .thead-dark th {
    background-color: #3e3f3a;
  }

  .nav-tabs .nav-link {
    background-color: #f8f5f0;
    border-color: #dfd7ca;
  }

  .nav-tabs .nav-link,
  .nav-tabs .nav-link:hover,
  .nav-tabs .nav-link:focus {
    color: #8e8c84;
  }

  .nav-tabs .nav-link.disabled,
  .nav-tabs .nav-link.disabled:hover,
  .nav-tabs .nav-link.disabled:focus {
    background-color: #f8f5f0;
    border-color: #dfd7ca;
    color: #dfd7ca;
  }

  .nav-pills .nav-link {
    border: 1px solid transparent;
    color: #8e8c84;
  }

  .nav-pills .nav-link.active,
  .nav-pills .nav-link:hover,
  .nav-pills .nav-link:focus {
    background-color: #f8f5f0;
    border-color: #dfd7ca;
  }

  .nav-pills .nav-link.disabled,
  .nav-pills .nav-link.disabled:hover {
    background-color: transparent;
    border-color: transparent;
    color: #dfd7ca;
  }

  .breadcrumb {
    border: 1px solid #dfd7ca;
  }

  .pagination a:hover {
    text-decoration: none;
  }

  .alert {
    color: #fff;
  }

  .alert a,
  .alert .alert-link {
    color: #fff;
    text-decoration: underline;
  }

  .alert-primary,
  .alert-primary > th,
  .alert-primary > td {
    background-color: #325d88;
  }

  .alert-secondary,
  .alert-secondary > th,
  .alert-secondary > td {
    background-color: #8e8c84;
  }

  .alert-success,
  .alert-success > th,
  .alert-success > td {
    background-color: #93c54b;
  }

  .alert-info,
  .alert-info > th,
  .alert-info > td {
    background-color: #29abe0;
  }

  .alert-danger,
  .alert-danger > th,
  .alert-danger > td {
    background-color: #d9534f;
  }

  .alert-warning,
  .alert-warning > th,
  .alert-warning > td {
    background-color: #f47c3c;
  }

  .alert-dark,
  .alert-dark > th,
  .alert-dark > td {
    background-color: #3e3f3a;
  }

  .alert-light,
  .alert-light > th,
  .alert-light > td {
    background-color: #f8f5f0;
  }

  .alert-light,
  .alert-light a:not(.btn),
  .alert-light .alert-link {
    color: #3e3f3a;
  }

  .badge.bg-light {
    color: #3e3f3a;
  }

  .modal .btn-close,
  .toast .btn-close {
    background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23dfd7ca'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg>");
  }
`;

export const reboot = css`
  /*!
 * Bootstrap Reboot v5.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors
 * Copyright 2011-2021 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)
 */
  :host {
    --bs-blue: #0d6efd;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #d63384;
    --bs-red: #dc3545;
    --bs-orange: #fd7e14;
    --bs-yellow: #ffc107;
    --bs-green: #198754;
    --bs-teal: #20c997;
    --bs-cyan: #0dcaf0;
    --bs-white: #fff;
    --bs-gray: #6c757d;
    --bs-gray-dark: #343a40;
    --bs-gray-100: #f8f9fa;
    --bs-gray-200: #e9ecef;
    --bs-gray-300: #dee2e6;
    --bs-gray-400: #ced4da;
    --bs-gray-500: #adb5bd;
    --bs-gray-600: #6c757d;
    --bs-gray-700: #495057;
    --bs-gray-800: #343a40;
    --bs-gray-900: #212529;
    --bs-primary: #0d6efd;
    --bs-secondary: #6c757d;
    --bs-success: #198754;
    --bs-info: #0dcaf0;
    --bs-warning: #ffc107;
    --bs-danger: #dc3545;
    --bs-light: #f8f9fa;
    --bs-dark: #212529;
    --bs-primary-rgb: 13, 110, 253;
    --bs-secondary-rgb: 108, 117, 125;
    --bs-success-rgb: 25, 135, 84;
    --bs-info-rgb: 13, 202, 240;
    --bs-warning-rgb: 255, 193, 7;
    --bs-danger-rgb: 220, 53, 69;
    --bs-light-rgb: 248, 249, 250;
    --bs-dark-rgb: 33, 37, 41;
    --bs-white-rgb: 255, 255, 255;
    --bs-black-rgb: 0, 0, 0;
    --bs-body-color-rgb: 33, 37, 41;
    --bs-body-bg-rgb: 255, 255, 255;
    --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
    --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
    --bs-gradient: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0)
    );
    --bs-body-font-family: var(--bs-font-sans-serif);
    --bs-body-font-size: 1rem;
    --bs-body-font-weight: 400;
    --bs-body-line-height: 1.5;
    --bs-body-color: #212529;
    --bs-body-bg: #fff;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host {
    margin: 0;
    font-family: var(--bs-body-font-family);
    font-size: var(--bs-body-font-size);
    font-weight: var(--bs-body-font-weight);
    line-height: var(--bs-body-line-height);
    color: var(--bs-body-color);
    text-align: var(--bs-body-text-align);
    /* background-color: var(--bs-body-bg); */
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  hr {
    margin: 1rem 0;
    color: inherit;
    background-color: currentColor;
    border: 0;
    opacity: 0.25;
  }

  hr:not([size]) {
    height: 1px;
  }

  h6,
  h5,
  h4,
  h3,
  h2,
  h1 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  h1 {
    font-size: calc(1.375rem + 1.5vw);
  }
  @media (min-width: 1200px) {
    h1 {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: calc(1.325rem + 0.9vw);
  }
  @media (min-width: 1200px) {
    h2 {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: calc(1.3rem + 0.6vw);
  }
  @media (min-width: 1200px) {
    h3 {
      font-size: 1.75rem;
    }
  }

  h4 {
    font-size: calc(1.275rem + 0.3vw);
  }
  @media (min-width: 1200px) {
    h4 {
      font-size: 1.5rem;
    }
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  abbr[title],
  abbr[data-bs-original-title] {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    cursor: help;
    -webkit-text-decoration-skip-ink: none;
    text-decoration-skip-ink: none;
  }

  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }

  ol,
  ul {
    padding-left: 2rem;
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  dt {
    font-weight: 700;
  }

  dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }

  blockquote {
    margin: 0 0 1rem;
  }

  b,
  strong {
    font-weight: bolder;
  }

  small {
    font-size: 0.875em;
  }

  mark {
    padding: 0.2em;
    background-color: #fcf8e3;
  }

  sub,
  sup {
    position: relative;
    font-size: 0.75em;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  a {
    color: #0d6efd;
    text-decoration: underline;
  }
  a:hover {
    color: #0a58ca;
  }

  a:not([href]):not([class]),
  a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: var(--bs-font-monospace);
    font-size: 1em;
    direction: ltr /* rtl:ignore */;
    unicode-bidi: bidi-override;
  }

  pre {
    display: block;
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    font-size: 0.875em;
  }
  pre code {
    font-size: inherit;
    color: inherit;
    word-break: normal;
  }

  code {
    font-size: 0.875em;
    color: #d63384;
    word-wrap: break-word;
  }
  a > code {
    color: inherit;
  }

  kbd {
    padding: 0.2rem 0.4rem;
    font-size: 0.875em;
    color: #fff;
    background-color: #212529;
    border-radius: 0.2rem;
  }
  kbd kbd {
    padding: 0;
    font-size: 1em;
    font-weight: 700;
  }

  figure {
    margin: 0 0 1rem;
  }

  img,
  svg {
    vertical-align: middle;
  }

  table {
    caption-side: bottom;
    border-collapse: collapse;
  }

  caption {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: #6c757d;
    text-align: left;
  }

  th {
    text-align: inherit;
    text-align: -webkit-match-parent;
  }

  thead,
  tbody,
  tfoot,
  tr,
  td,
  th {
    border-color: inherit;
    border-style: solid;
    border-width: 0;
  }

  label {
    display: inline-block;
  }

  button {
    border-radius: 0;
  }

  button:focus:not(:focus-visible) {
    outline: 0;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button,
  select {
    text-transform: none;
  }

  [role="button"] {
    cursor: pointer;
  }

  select {
    word-wrap: normal;
  }
  select:disabled {
    opacity: 1;
  }

  [list]::-webkit-calendar-picker-indicator {
    display: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  button:not(:disabled),
  [type="button"]:not(:disabled),
  [type="reset"]:not(:disabled),
  [type="submit"]:not(:disabled) {
    cursor: pointer;
  }

  ::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  textarea {
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    float: left;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: calc(1.275rem + 0.3vw);
    line-height: inherit;
  }
  @media (min-width: 1200px) {
    legend {
      font-size: 1.5rem;
    }
  }
  legend + * {
    clear: left;
  }

  ::-webkit-datetime-edit-fields-wrapper,
  ::-webkit-datetime-edit-text,
  ::-webkit-datetime-edit-minute,
  ::-webkit-datetime-edit-hour-field,
  ::-webkit-datetime-edit-day-field,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-year-field {
    padding: 0;
  }

  ::-webkit-inner-spin-button {
    height: auto;
  }

  [type="search"] {
    outline-offset: -2px;
    -webkit-appearance: textfield;
  }

  /* rtl:raw:
[type="tel"],
[type="url"],
[type="email"],
[type="number"] {
  direction: ltr;
}
*/
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  ::-webkit-file-upload-button {
    font: inherit;
  }

  ::file-selector-button {
    font: inherit;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  output {
    display: inline-block;
  }

  iframe {
    border: 0;
  }

  summary {
    display: list-item;
    cursor: pointer;
  }

  progress {
    vertical-align: baseline;
  }

  [hidden] {
    display: none !important;
  }

  /*# sourceMappingURL=bootstrap-reboot.css.map */
`;
