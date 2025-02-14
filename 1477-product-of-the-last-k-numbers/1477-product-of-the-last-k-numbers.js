class ProductOfNumbers {
    constructor() {
        this.products = [];
    }

    add(num) {
        if (num === 0) {
            this.products = [];
        } else {
            this.products.push(num * (this.products.length > 0 ? this.products[this.products.length - 1] : 1));
        }
    }

    getProduct(k) {
        let n = this.products.length;
        if (n === 0 || k > n) return 0;
        if (k === n) return this.products[n - 1];
        return Math.floor(this.products[n - 1] / this.products[n - k - 1]);
    }
}