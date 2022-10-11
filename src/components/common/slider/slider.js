import './slider.scss';
import './media.scss';
import { Button } from "../button/index";

export function Slider() {

    this.rootElement = document.createElement('div');
    this.rootElement.classList.add('slider-wrapper');

    this.container = document.createElement('div');
    this.container.classList.add('slider-container');
    this.rootElement.append(this.container);

    this.slide = document.createElement('div');
    this.slide.classList.add('slider-track');
    this.container.append(this.slide);

    this.slideImage = document.createElement('img');
    this.slideImage.classList.add('slider-image');
    this.slideImage.style.width = 'auto';
    this.slideImage.src = 'https://images.wbstatic.net/bners1/big_pre_sale_0510.jpg';
    this.slide.append(this.slideImage);

    this.slideImage = document.createElement('img');
    this.slideImage.classList.add('slider-image');
    this.slideImage.src = 'https://images.wbstatic.net/bners1/2big_week_30_09_22.jpg';
    this.slide.append(this.slideImage);

    this.slideImage = document.createElement('img');
    this.slideImage.classList.add('slider-image');
    this.slideImage.src = 'https://images.wbstatic.net/bners1/big_shoesshoes_30_09_22.jpg';
    this.slide.append(this.slideImage);

    this.buttons = document.createElement('div');
    this.buttons.classList.add('slider-buttons');
    this.rootElement.append(this.buttons);

    this.buttonPrev = new Button({className: 'btn-prev'});
    this.buttonNext = new Button({className: 'btn-next'});
    this.buttons.append(this.buttonPrev.rootElement);
    this.buttons.append(this.buttonNext.rootElement);

}