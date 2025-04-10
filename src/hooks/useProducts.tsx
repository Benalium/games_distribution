import { useState, FC, useEffect } from "react";
import { Product, SendedProduct } from "@/models/Product";
import { respond } from "@/global/requests";

import axios from "axios";

const baseUrl = 'http://localhost:3000/products'

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const fetchProducts = async () => {
    const response = await axios.get(`${baseUrl}`)
    setProducts(response.data)
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  const getProductById = async (id: number) => {
    const respond = await axios.get(`${baseUrl}/${id}`)
    return respond.data;
  }
  const createProduct = async (product: SendedProduct) => {
    await axios.post(`${baseUrl}`, product)
    await fetchProducts();
  }
  const deleteProduct = async (id: number) => {
    console.log('Method: DELETE. Id:', id)
    await axios.delete(`${baseUrl}/${id}`)
    await fetchProducts();
  }
  const updateProduct = async (id: number, product: SendedProduct) => {
    console.log('Method: PATCH. Id:', id, 'Body: ', product);
    await axios.patch(`${baseUrl}/${id}`, product);
    await fetchProducts();
  }
  return { fetchProducts, products, createProduct, deleteProduct, updateProduct, getProductById }
}

export { useProducts }