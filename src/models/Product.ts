type Product = {
  id: number,
  image?: string,
  name?: string,
  price?: number,
  genre?: string,
  platform?: string,
  publisher?: string,
  description?: string
}

type SendedProduct = {
  image?: string,
  name?: string,
  price: number,
  genre?: string,
  platform?: string,
  publisher?: string,
  description?: string
}

export { Product, SendedProduct }