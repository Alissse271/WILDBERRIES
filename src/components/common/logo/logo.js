import './logo.scss';

export function Logo({logoText, className, onClick}) {
    this.rootElement = document.createElement('button');
    this.rootElement.classList.add('default-btn');
    this.rootElement.classList.add(className);
    this.rootElement.innerText = logoText;
    this.rootElement.addEventListener('click', onClick);
}