import { Input } from '../input/index';
import { Button } from '../button/index';
import './search-block-media.scss';

export function SearchBlockMedia() {
    this.rootElement = document.createElement('div');
    this.rootElement.classList.add('search-block-media');

    this.onInputClick = () => {
        if (this.input.rootElement.value === '') {
            this.buttonInputClear.rootElement.classList.remove('search-block-media-header-block-button-clear__active');
            this.buttonInputSearch.rootElement.classList.remove('search-block-media-header-block-button-search__active');
        } else {
            this.buttonInputClear.rootElement.classList.add('search-block-media-header-block-button-clear__active');
            this.buttonInputSearch.rootElement.classList.add('search-block-media-header-block-button-search__active');
        }
    }

    this.onButtonInputSearchClick = () => {
        this.rootElement.remove()
        document.querySelector('.products-wrapper').classList.remove('hidden');
        const allProducts = Array.from(document.querySelectorAll('.product-card'));
            const searchedProducts = allProducts.filter(element => {
                return element.lastChild.querySelector('.product-card-info-description').innerText.toLowerCase().includes(this.input.rootElement.value);
            })
            if (searchedProducts.length === 0) {
                document.querySelector('.products-title').innerText = 'К сожалению, ничего не найдено :с';
            } else {
                document.querySelector('.products-title').innerText = 'Хиты продаж';
            }
            allProducts.forEach(e => {
                e.style.display = searchedProducts.includes(e) ? "block" : "none";
            });
    }

    this.onButtonInputClearClick = () => {
        this.input.rootElement.value = '';
        this.buttonInputClear.rootElement.classList.remove('search-block-media-header-block-button-clear__active');
        this.buttonInputSearch.rootElement.classList.remove('search-block-media-header-block-button-search__active');
    }

    this.onCancelButtonClick = () => {
        this.rootElement.remove()
        document.querySelector('.products-wrapper').classList.remove('hidden');
        document.querySelector('.slider-wrapper').classList.remove('hidden');
        const allProducts = Array.from(document.querySelectorAll('.product-card'));
        allProducts.forEach(e => {
            e.style.display = 'block';
        })
        document.querySelector('.products-title').innerText = 'Хиты продаж';
    }
    
    this.header = document.createElement('div');
    this.header.classList.add('search-block-media-header');
    this.rootElement.append(this.header);

    this.headerBlock = document.createElement('div');
    this.headerBlock.classList.add('search-block-media-header-block');
    this.header.append(this.headerBlock);

    this.input = new Input({className: 'search-block-media-header-block-input'});
    this.input.rootElement.addEventListener('keyup', this.onInputClick);
    this.headerBlock.append(this.input.rootElement);

    this.buttonInputSearch = new Button({className: 'search-block-media-header-block-button-search', onClick: this.onButtonInputSearchClick});
    this.headerBlock.append(this.buttonInputSearch.rootElement);

    this.buttonInputClear = new Button({className: 'search-block-media-header-block-button-clear', onClick: this.onButtonInputClearClick});
    this.headerBlock.append(this.buttonInputClear.rootElement);

    this.cancelButton = new Button({buttonText: 'Отмена', className:'cancel-button', onClick: this.onCancelButtonClick});
    this.header.append(this.cancelButton.rootElement);
}