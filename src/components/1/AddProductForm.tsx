import { respond } from "@/global/requests"
import { Button } from "@/styled/1/Button"
import { Input } from "@/styled/1/Input"
import { Form } from "@/styled/1/Form"
import { Product, SendedProduct } from "@/models/Product"
import axios from "axios"
import { FormEvent, FormEventHandler, useState } from "react"
import { useProducts } from "@/hooks/useProducts"

type Props = {
  onClick: (product: SendedProduct) => void
}

const AddProductForm = ({ onClick }: Props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [platform, setPlatform] = useState('');
  const [publisher, setPublisher] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  const product = {
    name,
    description,
    platform,
    publisher,
    image,
    price: Number(price)
  }
  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      onClick(product)
    }}>
      <Input
        required
        placeholder="Name"
        onChange={(e) => setName(e.target.value)} />
      <Input
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)} />
      <Input
        placeholder="Platform"
        onChange={(e) => setPlatform(e.target.value)} />
      <Input
        placeholder="Publisher"
        onChange={(e) => setPublisher(e.target.value)} />
      <Input
        required
        min={0}
        placeholder="Price"
        type="number"
        onChange={(e) => setPrice(e.target.value)} />
      <Input
        placeholder="Image URL"
        onChange={(e) => setImage(e.target.value)} />
      <Button>
        Submit
      </Button>
    </Form>
  )
}

export { AddProductForm }