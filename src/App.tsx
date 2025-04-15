import { CartProvider } from '@/providers/CartProvider';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Products } from '@/pages/Products'
import ProductInfo from '@/pages/ProductInfo'
import Orders from '@/components/Orders';
import { Cart } from '@/pages/Cart';
import { Navigate } from 'react-router-dom';
import { Page } from './styled/1/Page';
import { LoginForm } from './components/1/LoginForm';
import styled from '@emotion/styled'
import { NavigationLayout } from './styled/2/NavigationLayout';
import { AuthorizationProvider } from './providers/AuthorizationProvider';
import { PrivateRoute } from './components/1/PrivateRoute';
import { RegistrationForm } from './components/1/RegistrationForm';
const Template = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex'
})
const App = () => {
  return (
    <Template>
      <AuthorizationProvider>
        <CartProvider>
          <Router>
            <Routes>
              <Route
                path="/products"
                element={
                  <PrivateRoute>
                    <NavigationLayout>
                      <Products />
                    </NavigationLayout>
                  </PrivateRoute>
                } />
              <Route
                path="/"
                element={<Navigate to="/login" replace />} />
              <Route
                path="/history"
                element={
                  <NavigationLayout>
                    <Orders />
                  </NavigationLayout>
                } />
              <Route
                path="/products/:id"
                element={
                  <NavigationLayout>
                    <ProductInfo />
                  </NavigationLayout>
                } />
              <Route
                path="/cart"
                element={
                  <NavigationLayout>
                    <Cart />
                  </NavigationLayout>
                } />
              <Route path="/login"
                element={
                  <Page>
                    <LoginForm />
                  </Page>
                } />
              <Route path="/register"
                element={
                  <Page>
                    <RegistrationForm />
                  </Page>
                } />
            </Routes>
          </Router>
        </CartProvider>
      </AuthorizationProvider>
    </Template>
  )
}
export { App };
