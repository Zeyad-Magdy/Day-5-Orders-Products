//region Database
var Orders = []
var OrderID = 0;
//endregion

class OrdersModel{
    constructor(body={items,TotalPrice}){
        this.items = body.items;
        this.TotalPrice = body.TotalPrice

    }
    AddOrder(){
        this.id = ++OrderID
        Orders.push(this)
    }
    static GetAll(){
        return Orders;
    }
    static Delete(Id){
        Orders = Orders.filter(order=>order.id != Id)
    }
}

module.exports= OrdersModel