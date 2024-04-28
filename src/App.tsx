import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from './compoents/Banner'
import Header from './compoents/Header'
import { GlobalCss } from './styles'
import ProductsList from './compoents/ProductsList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductsList title="Promoções" background="gray" />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
