let products = [];
let totalAmount;
let total;

export function saveToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(products));
}


export function loadFromLocalStorage() {
    const loadedData = JSON.parse(localStorage.getItem('products'));
    if (loadedData != null) {
        products = Array.from(loadedData);
    }
    return products;
}

export function clearLocalStorage() {
    products = [];
    saveToLocalStorage();
}

export function saveProductToLocalStorage(product) {
    products.push(product);
    saveToLocalStorage();
}

export function saveTotalToLocalStorage(totalAmount) {
    total = +totalAmount;
    localStorage.setItem('totalAmount', JSON.stringify(total));
}

export function loadTotalFromLocalStorage() {
    if (localStorage.getItem('totalAmount') === null) {
        totalAmount = localStorage.setItem('totalAmount', 0)
    }
    const loadedAmount = JSON.parse(localStorage.getItem('totalAmount'));
    totalAmount = loadedAmount;
    return totalAmount;
}