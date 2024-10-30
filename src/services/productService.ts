
import { IProduct, productModel } from "../models/productModels";


export const getAllProducts = async ()=>{
  return await productModel.find()
} 


export const seedInitialProducts = async () =>{
  const products = [
    {title: "Laptop Dell", image: "https://dream.ps/wp-content/uploads/2023/07/c08691986.png", price: 1050, stock: 105},
  ]

  const existingProducts = await getAllProducts()

  if(existingProducts.length == 0){
    await productModel.insertMany(products);
  }
}




