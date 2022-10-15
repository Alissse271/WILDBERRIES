import './button.scss';

export function Button({buttonText = '', className, onClick}) {
    this.rootElement = document.createElement('button');
    this.rootElement.innerText = buttonText;
    this.rootElement.classList.add('default-btn');
    this.rootElement.classList.add(className);
    this.rootElement.addEventListener('click', onClick);
}