const PRODUCTS_URL = 'https://633806a75327df4c43dbc345.mockapi.io/wildberries/products';

export function getProducts() {
    return fetch(PRODUCTS_URL)
      .then(response => response.json())
      .catch(error => console.log(error));
  }