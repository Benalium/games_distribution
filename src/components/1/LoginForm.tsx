import { sc } from "@/global/styleConstants"
import { Button } from "@/styled/1/Button"
import { Input } from "@/styled/1/Input"
import { Form } from "@/styled/1/Form"
import { ReactNode, useState } from "react"
import { useAuthorization } from "@/hooks/useAuthorization"

const variants = {
  default: ({ loginPack, passwordPack, warningPack, onSubmit }: VariantProps) => {
    const [login, setLogin] = loginPack;
    const [password, setPassword] = passwordPack;
    const [warning, setWarningState] = warningPack;
    return (
      <Form
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            const success = await onSubmit({ login, password });
            if (!success) {
              setWarningState(true);
            }
          } catch (error) {
            console.log(error)
          }
        }}>
        <h1 css={{ fontSize: sc.offsets.l }}>
          Login
        </h1>
        <Input
          required
          value={login}
          onChange={e => setLogin(e.target.value)} />
        <Input
          required
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)} />
        <Button
          type="submit" >
          Submit
        </Button>
        {
          warning &&
          <div css={{ color: 'red' }}>
            Wrong input
          </div>
        }
      </Form>
    )
  }
}

type VariantProps = {
  loginPack: [string, React.Dispatch<React.SetStateAction<string>>]
  passwordPack: [string, React.Dispatch<React.SetStateAction<string>>]
  warningPack: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  onSubmit: (user: any) => Promise<boolean>
}
type Props = {
  Variant?: ({ loginPack, passwordPack, warningPack }: VariantProps) => ReactNode
}

const LoginForm = ({ Variant }: Props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [warningState, setWarningState] = useState(false)
  const { logIn } = useAuthorization()

  return (
    Variant
      ?
      <Variant
        loginPack={[login, setLogin]}
        passwordPack={[password, setPassword]}
        warningPack={[warningState, setWarningState]}
        onSubmit={logIn} />
      :
      <variants.default
        loginPack={[login, setLogin]}
        passwordPack={[password, setPassword]}
        warningPack={[warningState, setWarningState]}
        onSubmit={logIn}
      />
  )
}

export { LoginForm }