import { mountControls } from './controls';

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountControls, { once: true });
} else {
  mountControls();
}
