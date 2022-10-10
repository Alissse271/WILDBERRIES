import './header.scss';
import './media.scss';
import { Input } from '../common/input/index';
import { Button } from '../common/button/index';
import { Logo } from '../common/logo/index';
import { Basket } from '../common/basket/index';
import { SearchBlockMedia } from '../common/search-block-media/search-block-media';


export function Header() {

    this.onButtonClick = () => {
        this.basket.rootElement.classList.add('open');
        document.body.classList.add('no-scroll');
    }

    this.onLogoClick = () => {
        document.querySelector('.slider-wrapper').classList.remove('hidden');
        this.input.rootElement.value = '';
        const allProducts = Array.from(document.querySelectorAll('.product-card'));
        allProducts.forEach(element => {
            element.style.display = 'block';
        });
        document.querySelector('.products-title').innerText = 'Хиты продаж';
    }

    this.onButtonInputSearchClick = () => {
        if (this.input.rootElement.value !== '') {
            document.querySelector('.slider-wrapper').classList.add('hidden');
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
    }

    this.onButtonInputClearClick = () => {
        this.input.rootElement.value = '';

        this.buttonInputClear.rootElement.classList.remove('header-input-button-clear__active');
    }

    this.onButtonInputMediaClick = () => {
        this.searchBlockMedia = new SearchBlockMedia();
        this.rootElement.append(this.searchBlockMedia.rootElement)
        document.querySelector('.products-wrapper').classList.add('hidden');
        document.querySelector('.slider-wrapper').classList.add('hidden');
    }

    this.onInputClick = () => {
        this.buttonInputSearch.rootElement.classList.add('header-input-button-search__active');
        if (this.input.rootElement.value === '') {
            this.buttonInputClear.rootElement.classList.remove('header-input-button-clear__active');
        } else {
            this.buttonInputClear.rootElement.classList.add('header-input-button-clear__active');
        }
    }

    document.addEventListener('click', (e) => {
        const outsideInput = e.composedPath().includes(this.input.rootElement);
        if (!outsideInput) {
            this.buttonInputSearch.rootElement.classList.remove('header-input-button-search__active');
        }
    })

    this.rootElement = document.createElement('header');
    this.rootElement.classList.add('header');   

    this.logo = new Logo({logoText: 'Wildberries', className: 'header-logo', onClick: this.onLogoClick});
    this.rootElement.append(this.logo.rootElement);

    this.blockInput = document.createElement('div');
    this.blockInput.classList.add('header-block-input');
    this.rootElement.append(this.blockInput);

    this.input = new Input({inputPlaceholder: 'Поиск...', className: 'header-input'});
    this.input.rootElement.addEventListener('keyup', this.onInputClick);
    this.blockInput.append(this.input.rootElement);

    this.buttonInputSearch = new Button({className: 'header-input-button-search', onClick: this.onButtonInputSearchClick});
    this.blockInput.append(this.buttonInputSearch.rootElement);

    this.buttonInputClear = new Button({className: 'header-input-button-clear', onClick: this.onButtonInputClearClick});
    this.blockInput.append(this.buttonInputClear.rootElement);

    this.buttonInputMediaBlock = document.createElement('div');
    this.buttonInputMediaBlock.classList.add('header-input-button-media-block');
    this.rootElement.append(this.buttonInputMediaBlock);
    
    this.buttonInputMedia = new Button({className: 'header-input-button-media', onClick: this.onButtonInputMediaClick});
    this.buttonInputMediaBlock.append(this.buttonInputMedia.rootElement);

    this.button = new Button({buttonText: 'Корзина', className: 'header-button', onClick: this.onButtonClick});
    this.rootElement.append(this.button.rootElement);

    this.basket = new Basket();
    this.rootElement.append(this.basket.rootElement);
}