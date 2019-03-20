import { html, define } from 'hybrids';
import styles from './my-outer-component.scss';

export function increaseCount(host) {
  host.count += 1;
}

export const MyOuterComponent = {
  count: 0,
  render: ({ count }) => html`
    <button onclick="${increaseCount}">
      Count: ${count}
    </button>
  `.style(styles),
};

define('my-outer-component', MyOuterComponent);