const cloudinary = require('cloudinary').v2
const Product = require("../models/Product")
const fs = require('fs')

const uploadProductImage = async (req,res) => {
 const response = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_fileName: true,
      folder: "file-upload",
    }
  );

  fs.unlinkSync(req.files.image.tempFilePath)
 res.status(200).json({image: {src: response.secure_url}})
}

const addProduct = async (req,res) => {
  const product = await Product.create(req.body)
  res.status(200).json({product})
}


module.exports = {
  uploadProductImage,
  addProduct,
}
