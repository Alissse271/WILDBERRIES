import './input.css';

export function Input({inputPlaceholder = '', className}) {
    this.rootElement = document.createElement('input');
    this.rootElement.placeholder = inputPlaceholder;
    this.rootElement.classList.add('default-input');
    this.rootElement.classList.add(className);
}