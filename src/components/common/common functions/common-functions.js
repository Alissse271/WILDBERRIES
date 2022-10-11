import { loadTotalFromLocalStorage } from "../../../data-controllers";


let count = +(loadTotalFromLocalStorage());
export function countTotal(price) {
    if(typeof(price) == "number") {
        count += price;
    }
    return count.toFixed(2);
}

export function clearCount() {
    count = 0;
}

export function ProductToSave(data = {productImage, productName, productPrice, productPriceLast, id}) {
this.rootElement = data;
}

export function restoreBasketElement(basketElement, product) {
    basketElement.querySelector('.basket-content-info-name').innerText = product.productName;
    basketElement.querySelector('.basket-content-info-price').innerText = product.productPrice;
}

export function countLastPrice(nowPrice, discount) {
    const lastPrice = nowPrice / (1 - discount / 100);
    return lastPrice.toFixed(2);
}

export function createSliderAnimation() {

    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const container = document.querySelector('.slider-container');
    const track = document.querySelector('.slider-track');

    const buttonPrev = document.querySelector('.btn-prev');
    buttonPrev.addEventListener('click', onPrevButtonClick);

    const buttonNext = document.querySelector('.btn-next');
    buttonNext.addEventListener('click', onNextButtonClick);

    const images = document.querySelectorAll('.slider-image');
    const imagesCount = images.length;
    const imageWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * imageWidth;

    images.forEach(item => {
        item.style.width = `${imageWidth}px`;
    })

    function onPrevButtonClick () {
        const itemsLeft = Math.abs(position) / imageWidth;
        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * imageWidth;

        setPosition();
        checkBtns();
    }

    function onNextButtonClick() {
        const itemsLeft = imagesCount - (Math.abs(position) + slidesToShow * imageWidth) / imageWidth;
        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * imageWidth;

        setPosition();
        checkBtns();
    }

    const setPosition = () => {
        document.querySelector('.slider-track').style.transform = `translateX(${position}px)`;
    }

    const checkBtns = () => {
        buttonPrev.disabled = position === 0;
        buttonNext.disabled = position <= -(imagesCount - slidesToShow) * imageWidth;
    }
    checkBtns();

    function initSlider() {
        width = document.querySelector('.slider-container').offsetWidth;
        track.style.width = width * images.length + 'px';
        images.forEach(item => {
            item.style.width = `${width}px`;
            item.style.height = `auto`;
        })
        setPosition();
    }
    
    initSlider();
    window.addEventListener('resize', initSlider);
        
}