import { Input } from "@/styled/1/Input"
import { useParams } from "react-router-dom"
import { useState } from "react";
import { Form } from "@/styled/1/Form";
import { Button } from "@/styled/1/Button";
import styled from '@emotion/styled'
import { sc } from "@/global/styleConstants";
import axios from "axios";
import { Product } from "@/models/Product";
import { SendedProduct } from "@/models/Product";
import { useProducts } from "@/hooks/useProducts";

type Props = {
  onSubmit: (product: SendedProduct) => void
  product: Product
}

const UpdateProductForm = ({ onSubmit, product }: Props) => {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [platform, setPlatform] = useState(product.platform);
  const [publisher, setPublisher] = useState(product.publisher);
  const [image, setImage] = useState(product.image);
  const [price, setPrice] = useState(product.price);

  console.log('Product form', product)

  const sendedProduct: SendedProduct = { name, description, platform, publisher, image, price: Number(price) }

  const locals = {
    FormHeading: styled.h1({
      fontSize: sc.fontSize.l
    })
  }

  return (
    <Form onSubmit={e => {
      e.preventDefault();
      onSubmit(sendedProduct)
    }}>
      <locals.FormHeading>
        Update
      </locals.FormHeading>
      <Input
        required
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)} />
      <Input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)} />
      <Input
        placeholder="Platform"
        value={platform}
        onChange={(e) => setPlatform(e.target.value)} />
      <Input
        placeholder="Publisher"
        value={publisher}
        onChange={(e) => setPublisher(e.target.value)} />
      <Input
        placeholder="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))} />
      <Input
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)} />
      <Button type="submit">
        Submit
      </Button>
    </Form>
  )
}

export { UpdateProductForm }