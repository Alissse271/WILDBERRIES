import { Header } from "../components/header/index";
import { Product, SectionTitle, ProductsWrapper } from "../components/products/index";
import { Slider } from "../components/common/slider/index";
import { getProducts } from "../api/api";
import { countLastPrice } from "../components/common/common functions/index";

export function Application() {
    
    this.rootElement = document.createElement('div');
    this.rootElement.classList.add('application');

    this.header = new Header();
    this.rootElement.append(this.header.rootElement);

    this.advertisment = new Slider();
    this.rootElement.append(this.advertisment.rootElement);
    
    this.productsSectionTitle = new SectionTitle('Хиты продаж');
    this.rootElement.append(this.productsSectionTitle.rootElement);
    
    this.productsWrapper = new ProductsWrapper();
    this.rootElement.append(this.productsWrapper.rootElement);

    getProducts()
    .then(data => data.forEach(element => {
        
        element.discount = 10;
        element.productPriceLast = countLastPrice(element.price, element.discount);

        let newProduct = new Product({productName: element.name, productPrice: element.price, productImage: element.image, id: element.id, discount : element.discount, productPriceLast : element.productPriceLast})
        this.productsWrapper.rootElement.append(newProduct.rootElement);
    }))

}