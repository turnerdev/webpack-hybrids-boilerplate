import './my-outer-component.js';
import normalizecss from 'normalize.css';

// Inject normalize.css
var node = document.createElement('style');
node.innerHTML = normalizecss;
document.body.appendChild(node);

// Injection application component
const el = document.createElement('my-outer-component');
document.body.appendChild(el);
