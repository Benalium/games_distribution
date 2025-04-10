type Receipt = {
  id: number,
  userId: number,
  items: ReceiptItem[],
  user: User
  dateTime: string
}
type ReceiptItem = {
  quantity: number,
  productId: number
}

export { Receipt, ReceiptItem }