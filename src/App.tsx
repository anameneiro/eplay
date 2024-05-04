import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'

import Header from './compoents/Header'
import Rotas from './routes'
import Footer from './compoents/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
