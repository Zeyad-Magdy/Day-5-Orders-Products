//region Database
var products = []
var ProdID = 0;
//endregion

class OrdersModel{
    constructor(body={Name,price}){
        this.Name = body.Name;
        this.price = body.price

    }
    AddProduct(){
        this.id = ++ProdID
        products.push(this)
    }
    static GetAll(){
        return products;
    }
    static Delete(Id){
        products = products.filter(product=>product.id != Id)
    }
}

module.exports= OrdersModel