import './basket.scss';
import './media.scss';
import { Button } from '../button/index';
import { clearCount } from '../common functions//index';
import { clearLocalStorage, loadTotalFromLocalStorage, saveTotalToLocalStorage } from '../../../data-controllers/index';

export function Basket () {

    this.onCloseButtonClick = () => {
        this.rootElement.classList.remove('open');
        document.body.classList.remove('no-scroll');
    }

    this.onButtonClearClick = () => {
        console.log(this.content)
            while (this.content.firstChild) {
                this.content.removeChild(this.content.firstChild);
            }
            this.totalAmountOfPurchases.innerText ='0.00 р.';
            clearCount();
            clearLocalStorage();
            saveTotalToLocalStorage(0);
        }

    this.rootElement = document.createElement('div');
    this.rootElement.classList.add('body-basket');

    this.basket = document.createElement('div');
    this.basket.classList.add('basket');
    this.rootElement.append(this.basket);

    this.header = document.createElement('div');
    this.header.classList.add('basket-header');
    this.basket.append(this.header);

    this.headerTitle = document.createElement('div');
    this.headerTitle.classList.add('basket-header-title');
    this.headerTitle.innerText = 'Корзина';
    this.header.append(this.headerTitle);

    this.headerClearButton = new Button({buttonText: 'Очистить корзину', className: 'basket-header-button-clear', onClick: this.onButtonClearClick});
    this.header.append(this.headerClearButton.rootElement);

    this.headerCloseButton = new Button({buttonText: 'x', className: 'basket-header-button-close', onClick: this.onCloseButtonClick});
    this.header.append(this.headerCloseButton.rootElement);

    this.content = document.createElement('div');
    this.content.classList.add('basket-content');
    this.basket.append(this.content);

    this.footer = document.createElement('div');
    this.footer.classList.add('basket-footer');
    this.basket.append(this.footer);

    this.footerTitle = document.createElement('div');
    this.footerTitle.classList.add('basket-footer-title');
    this.footerTitle.innerText = 'Итого';
    this.footer.append(this.footerTitle);

    this.totalAmountOfPurchases = document.createElement('div');
    this.totalAmountOfPurchases.classList.add('basket-footer-total_amount');
    this.totalAmountOfPurchases.innerText = `${loadTotalFromLocalStorage().toFixed(2)} р.`;
    this.footer.append(this.totalAmountOfPurchases);
}

export function BasketElement({productName, productPrice}) {
    this.productInfo = document.createElement('div');
    this.productInfo.classList.add('basket-content-info');

    this.productName = document.createElement('div');
    this.productName.classList.add('basket-content-info-name');
    this.productName.innerText = productName;
    this.productInfo.append(this.productName);

    this.productPrice = document.createElement('div');
    this.productPrice.classList.add('basket-content-info-price');
    this.productPrice.innerText = `${productPrice} р.`;
    this.productInfo.append(this.productPrice);
}