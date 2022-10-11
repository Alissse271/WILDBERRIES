import './products.scss';
import './media.scss';
import { Button } from '../common/button/index';
import { BasketElement } from '../common/basket/index';
import { countTotal } from '../common/common functions/index';
import { ProductToSave, restoreBasketElement } from '../common/common functions/index';
import { saveProductToLocalStorage, loadFromLocalStorage, saveTotalToLocalStorage } from '../../data-controllers/index';


export function SectionTitle(title) {
    this.rootElement = document.createElement('div');
    this.rootElement.classList.add('products');

    this.title = document.createElement('h2');
    this.title.classList.add('products-title');
    this.title.innerText = title;
    this.rootElement.append(this.title);
}

export function ProductsWrapper() {
    this.rootElement = document.createElement('div');
    this.rootElement.classList.add('products-wrapper');
}

export function Product({productName, productPrice, productImage, id, discount, productPriceLast}) {
    this.onQuickShowBtnClick = () => {
        this.zoomProduct = new ZoomProductCard(data);
        this.zoomProduct.rootElement.classList.add('open');
        this.rootElement.append(this.zoomProduct.rootElement);
        document.body.classList.add('no-scroll');
    }

    this.onCreateBasketClicked = () => {
        const basketElement = new BasketElement(data);

        const productToSave = new ProductToSave(data).rootElement;
        saveProductToLocalStorage(productToSave);

        document.querySelector('.basket').querySelector('.basket-content').append(basketElement.productInfo);

        let amount = countTotal(+productPrice);
        document.querySelector('.basket-footer-total_amount').innerText = `${amount} р.`;
        saveTotalToLocalStorage(amount);
    }
 
    const data = {productName, productPrice, productImage, id, discount, productPriceLast};

    this.rootElement = document.createElement('div');
    this.rootElement.classList.add('product-card');
    this.rootElement.id = id;

    this.cardImageWrap = document.createElement('div');
    this.cardImageWrap.classList.add('product-card-image-wrap');
    this.rootElement.append(this.cardImageWrap);

    this.cardImage = document.createElement('img');
    this.cardImage.classList.add('product-image');
    this.cardImage.src = productImage;
    this.cardImageWrap.append(this.cardImage);

    this.buttonShow = new Button({buttonText: 'Быстрый просмотр', className: 'quick-show-btn', onClick: this.onQuickShowBtnClick});
    this.cardImageWrap.append(this.buttonShow.rootElement);

    this.discount = document.createElement('p');
    this.discount.classList.add('product-discount');
    this.discount.innerText = `-${discount}%`;
    this.cardImageWrap.append(this.discount);

    this.buttonAddToBasket = new Button({buttonText: '+', className: 'add-to-basket-btn', onClick: this.onCreateBasketClicked});

    this.cardImageWrap.append(this.buttonAddToBasket.rootElement);

    this.productCardInfo = document.createElement('div');
    this.productCardInfo.classList.add('product-card-info');
    this.rootElement.append(this.productCardInfo);

    this.productCardPrice = document.createElement('div');
    this.productCardPrice.classList.add('product-card-info-price');
    this.productCardInfo.append(this.productCardPrice);

    this.productCardPriceNow = document.createElement('span');
    this.productCardPriceNow.classList.add('product-card-info-price-now');
    this.productCardPriceNow.innerText = `${productPrice} р.`;
    this.productCardPrice.append(this.productCardPriceNow);

    this.productCardPriceLast = document.createElement('span');
    this.productCardPriceLast.classList.add('product-card-info-price-last');
    this.productCardPriceLast.innerText = `${productPriceLast} р.`;
    this.productCardPrice.append(this.productCardPriceLast);

    this.productCardDescription = document.createElement('div');
    this.productCardDescription.classList.add('product-card-info-description');
    this.productCardDescription.innerText = productName;
    this.productCardInfo.append(this.productCardDescription);
}

function ZoomProductCard({productName, productPrice, productImage, id, productPriceLast}) {

    const data = {productName, productPrice, productImage, id, productPriceLast};
    this.onCreateBasketClicked = () => {
        const basketElement = new BasketElement({productName, productPrice});

        const productToSave = new ProductToSave(data).rootElement;
        saveProductToLocalStorage(productToSave);

        document.querySelector('.basket').querySelector('.basket-content').append(basketElement.productInfo);

        let amount = countTotal(+productPrice);
        document.querySelector('.basket-footer-total_amount').innerText = `${amount} р.`;
        saveTotalToLocalStorage(amount);
    }

    this.onButtonCloseZoomProductClick = () => {
        document.querySelector('.body-zoom-product-card').remove('open');
        document.body.classList.remove('no-scroll');
    }

    this.rootElement = document.createElement('div');
    this.rootElement.classList.add('body-zoom-product-card');
    this.rootElement.id = id;

    this.zoomProductCard = document.createElement('div');
    this.zoomProductCard.classList.add('zoom-product-card');
    this.rootElement.append(this.zoomProductCard);

    this.zoomCardImageWrap = document.createElement('div');
    this.zoomCardImageWrap.classList.add('zoom-product-card-image-wrap');
    this.zoomProductCard.append(this.zoomCardImageWrap);

    this.zoomCardImage = document.createElement('img');
    this.zoomCardImage.classList.add('zoom-product-image');
    this.zoomCardImage.src = productImage;
    this.zoomCardImageWrap.append(this.zoomCardImage);

    this.zoomProductCardInfo = document.createElement('div');
    this.zoomProductCardInfo.classList.add('zoom-product-card-info');
    this.zoomProductCard.append(this.zoomProductCardInfo);

    this.zoomProductCardDescription = document.createElement('div');
    this.zoomProductCardDescription.classList.add('zoom-product-card-info-description');
    this.zoomProductCardDescription.innerText = productName;
    this.zoomProductCardInfo.append(this.zoomProductCardDescription);

    this.zoomProductCardPrice = document.createElement('div');
    this.zoomProductCardPrice.classList.add('zoom-product-card-info-price');
    this.zoomProductCardInfo.append(this.zoomProductCardPrice);

    this.zoomProductCardPriceNow = document.createElement('span');
    this.zoomProductCardPriceNow.classList.add('zoom-product-card-info-price-now');
    this.zoomProductCardPriceNow.innerText =`${productPrice} р.`;
    this.zoomProductCardPrice.append(this.zoomProductCardPriceNow);

    this.zoomProductCardPriceLast = document.createElement('span');
    this.zoomProductCardPriceLast.classList.add('zoom-product-card-info-price-last');
    this.zoomProductCardPriceLast.innerText = `${productPriceLast} р.`;
    this.zoomProductCardPrice.append(this.zoomProductCardPriceLast);

    this.buttonAddToBasket = new Button({buttonText: 'Добавить в корзину', className: 'zoom-add-to-basket-btn', onClick: this.onCreateBasketClicked});
    this.zoomProductCardInfo.append(this.buttonAddToBasket.rootElement);


    this.buttonCloseZoomProduct = new Button({buttonText: 'x', className: 'zoom-product-card-button-close', onClick: this.onButtonCloseZoomProductClick})
    this.zoomProductCardInfo.append(this.buttonCloseZoomProduct.rootElement);
}

export function restoreAllProducts() {
    loadFromLocalStorage().forEach(product => {
        restoreBasketElement(new BasketElement(product).productInfo, product);
        document.querySelector('.basket-content').append(new BasketElement(product).productInfo);
    })
}