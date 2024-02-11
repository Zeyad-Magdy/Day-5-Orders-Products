const OrderValidator = require("../Utilities/OrderValidate");
const OrderModel = require("../Models/OrderModel");

//handle the logic for orer routes

const GetAllOrders = (req, res) => {
  res.status(200).json(OrderModel.GetAll());
};

const GetOrderById = (req, res) => {
  let Id = req.params.Id;
  let Order = OrderModel.GetAll().find((order) => order.id == Id);
  Order
    ? res.status(200).json(Order)
    : res.status(404).send(`Order with Id ${Id} was not found`);
};

const UpdateOrderById = (req, res) => {
  let Id = req.params.id;
  console.log(Id)
  let updatedOrder = req.body;
  if (OrderValidator(updatedOrder)) {
    let Order = OrderModel.GetAll().find((order) => order.id == Id);
    console.log(OrderModel.GetAll())
    if (Order) {
      Order.items = updatedOrder.items;
      Order.TotalPrice = updatedOrder.TotalPrice;
      res
        .status(201)
        .json({ message: "updated successfully", data: OrderModel.GetAll() });
    } else {
      res.status(404).json({ message: `Order ID ${Id} not found` });
    }
  } else {
    res.status(400).json({ message: "" });
  }
};

const DeleteOrderById = (req, res) => {
  let Id = req.params.id;

  let Order = OrderModel.GetAll().find((order) => order.id == Id);
  if(Order){
    OrderModel.Delete(Id)
    res.status(200).json({message:`Order ${Id} successfully deleted`,data:OrderModel.GetAll()})
  }
  else
    res.status(404).send(`Order with Id ${Id} was not found`);
};

const AddNewOrder = (req, res) => {
  let newOrder = req.body;
  if (OrderValidator(newOrder)) {
    let Order = new OrderModel(newOrder);
    Order.AddOrder();
    res.status(201).json({ Message: "Order Added Successfully", data: Order });
  } else {
    res.status(404).json(OrderValidator.errors[0].message);
  }
};

module.exports = {
  GetAllOrders,
  GetOrderById,
  UpdateOrderById,
  DeleteOrderById,
  AddNewOrder,
};
