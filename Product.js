class Product {
    index;
    name;
    price;
    description;
    type;
    image;

    constructor(name, price, type, description, image ) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
        this.type = type
    }

    gethtml() {
        let html = `<div class="card">
                        <img src="${this.image}" alt="${this.image}" style="width:100%">
                        <h1>${this.name}</h1>
                        <p class="price">Price : ${this.price}</p>
                        <p>Description : ${this.description}</p>
                        <p>Type : ${this.type}</p>
                        <p><button onclick="editProduct(${this.index})" ">Update</button></p>
                        <p><button onclick="deleteProduct(${this.index})">Remove</button></p>
                        </div>`
        return html

    }
}