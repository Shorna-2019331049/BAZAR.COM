import productModel from '../models/productModel.js';
import fs from 'fs';
import slugify from 'slugify';
import orderModel from '../models/orderModel.js';

export const createProductController = async (req, res) => {
  try {
    const { name, description, price, quantity, shipping } = req.fields;
    const { photo } = req.files;
    //alidation
    switch (true) {
      case !name:
        return res.status(500).send({ error: 'Name is Required' });
      case !description:
        return res.status(500).send({ error: 'Description is Required' });
      // case !price:
      //   return res.status(500).send({ error: 'Category is Required' });
      case !quantity:
        return res.status(500).send({ error: 'Quantity is Required' });
      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: 'photo is Required and should be less then 1mb' });
    }

    const products = new productModel({ ...req.fields, slug: slugify(name) });
    if (photo) {
      products.photo.data = fs.readFileSync(photo.path);
      products.photo.contentType = photo.type;
    }
    await products.save();
    res.status(201).send({
      success: true,
      message: 'Product Created Successfully',
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: 'Error in creating product',
    });
  }
};

//get all products
export const getProductController = async (req, res) => {
  try {
    const products = await productModel
      .find({})
      .select('-photo')
      .limit(12)
      .sort({ createdAt: -1 });
      res.status(200).send({
      success: true,
      counTotal: products.length,
      message: 'ALlProducts ',
      products,
    });
    return 
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Erorr in getting products',
      error: error.message,
    });
  }
};

// get single product
export const getSingleProductController = async (req, res) => {
  try {
    const product = await productModel
      .findOne({ slug: req.params.slug })
      .select('-photo');
    res.status(200).send({
      success: true,
      message: 'Single Product Fetched',
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error while getting single product',
      error,
    });
  }
};

// get photo
export const productPhotoController = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.pid).select('photo');
    if (product.photo.data) {
      res.set('Content-type', product.photo.contentType);
      return res.status(200).send(product.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error while getting photo',
      error,
    });
  }
};


export const createOrder = async(req,res) => {
  try {
    const {cart} = req.body;
    let total = 0;
    cart.map((i) => {
      total += i.price;
    });
    console.log(total)
    const order = new orderModel({
      products: cart,
      payment: "success",
      buyer: req.user._id,
    }).save();
    return res.status(200).send("Successful");
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error while getting photo',
      error,
    });
  }
}