import { useAuthorization } from "@/hooks/useAuthorization"
import { ReactNode } from "react";
import { Route, RouteProps } from "react-router-dom"

type Props = {
  children: ReactNode
}
const PrivateRoute = ({ children }: Props) => {
  const { user } = useAuthorization();
  return (
    /*user === null ?*/ children /*: <div>You are not authorized</div>*/
  )
}
export { PrivateRoute, Props as PrivateRouteProps }