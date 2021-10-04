class ProductManage{
    products;
    constructor() {
        this.products = []
    }
    addProduct(product) {
        this.products.unshift(product)
    }
    display(id){
        document.getElementById(id).innerHTML = '';
        for (let i = 0; i < this.products.length; i++) {
            this.products[i].index = i
            document.getElementById(id).innerHTML += this.products[i].gethtml()
        }
    }
    removeProduct(index){
        this.products.splice(index,1)
    }
    updateProduct(index, product1) {
        this.products[index] = product1;
    }
}

