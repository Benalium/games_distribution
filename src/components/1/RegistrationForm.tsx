import { sc } from "@/global/styleConstants";
import { useAuthorization } from "@/hooks/useAuthorization"
import { Button } from "@/styled/1/Button";
import { Form } from "@/styled/1/Form"
import { Input } from "@/styled/1/Input"
import { StyledLink } from "@/styled/1/StyledLink";
import { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { register } = useAuthorization()

  return (
    <Form onSubmit={() => register({ login, password, name, role: "basic" })}>
      <h1 css={{ fontSize: sc.offsets.l }}>
        Register
      </h1>
      <Input
        placeholder="Name"
        onChange={e => setName(e.target.value)} />
      <Input
        placeholder="Login"
        onChange={e => setLogin(e.target.value)} />
      <Input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)} />
      <Button
        type="submit" >
        Submit
      </Button>
      <Link to='/products'>
        <StyledLink>
          Back
        </StyledLink>
      </Link>
    </Form>
  )
}

export { RegistrationForm }