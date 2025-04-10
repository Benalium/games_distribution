import { useEffect, useState } from "react"
import { useCart } from "./useCart"
import axios from "axios"
import { Receipt, ReceiptItem } from "@/models/Receipt"
import { useAuthorization } from "./useAuthorization"

const baseUrl = 'http://localhost:3000/receipts'

const useReceipts = () => {
  const [receipts, setReceipts] = useState<Receipt[]>([])
  const { cart, clearCart } = useCart()
  const { user } = useAuthorization()
  useEffect(() => {
    fetchReceipts()
  }, [])
  const fetchReceipts = async () => {
    const response = await axios.get(baseUrl)
    const receipts = response.data
    console.log(receipts)
    setReceipts(receipts)
  }
  const createReceipt = async () => {
    const order = {
      userId: user.id,
      items: cart.map((cart): ReceiptItem => ({
        productId: cart.productId,
        quantity: cart.quantity
      }))
    }
    clearCart();
    console.log(await axios.post(baseUrl, order))
  }
  return { receipts, createReceipt, fetchReceipts }
}

export { useReceipts }