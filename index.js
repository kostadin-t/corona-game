import Koji from '@withkoji/vcc';
import './styles.css';
import App from './app.js';
// render app
const render = () => {
    const stage = new App();
    document.body.appendChild(stage.view);

};

// render
render();