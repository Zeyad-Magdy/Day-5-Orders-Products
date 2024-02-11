const ProductValidator = require("../Utilities/ProductValidate");
const ProductModel = require("../Models/ProductModel");

//handle the logic for orer routes

const GetAllProducts = (req, res) => {
  res.status(200).json(ProductModel.GetAll());
};

const GetProductById = (req, res) => {
  let Id = req.params.Id;
  let Product = ProductModel.GetAll().find((Product) => Product.id == Id);
  Product
    ? res.status(200).json(Product)
    : res.status(404).send(`Product with Id ${Id} was not found`);
};

const UpdateProductById = (req, res) => {
  let Id = req.params.id;
  let updatedProduct = req.body;
  if (ProductValidator(updatedProduct)) {
    let Product = ProductModel.GetAll().find((Product) => Product.id == Id);
    if (Product) {
      Product.Name = updatedProduct.Name;
      Product.price = updatedProduct.price;
      res
        .status(201)
        .json({ message: "updated successfully", data: ProductModel.GetAll() });
    } else {
      res.status(404).json({ message: `Product ID ${Id} not found` });
    }
  } else {
    res.status(400).json({ message: "" });
  }
};

const DeleteProductById = (req, res) => {
  let Id = req.params.id;
console.log(typeof Id)
  let Product = ProductModel.GetAll().find((Product) => Product.id == Id);
  if (Product) {
    ProductModel.Delete(Id);
    res
      .status(200)
      .json({
        message: `Product ${Id} successfully deleted`,
        data: ProductModel.GetAll(),
      });
  } else res.status(404).send(`Product with Id ${Id} was not found`);
};

const AddNewProduct = (req, res) => {
  let newProduct = req.body;
  if (ProductValidator(newProduct)) {
    let Product = new ProductModel(newProduct);
    Product.AddProduct();
    res.status(201).json({ Message: "Product Added Successfully", data: Product });
  } else {
    res.status(400).json(ProductValidator.errors[0].message);
  }
};

module.exports = {
  GetAllProducts,
  GetProductById,
  UpdateProductById,
  DeleteProductById,
  AddNewProduct,
};
