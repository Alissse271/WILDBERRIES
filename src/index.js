import './index.scss';
import { Application } from './components/application';
import { restoreAllProducts } from './components/products/index';
import { createSliderAnimation } from './components/common/common functions';

const rootElement = document.createElement('div');
rootElement.id = 'root';
document.body.prepend(rootElement);

const application = new Application();
rootElement.append(application.rootElement);

restoreAllProducts();
createSliderAnimation();