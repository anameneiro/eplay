import Button from '../Button'
import * as S from './styles'

const Cart = () => {
  return (
    <S.CartContainer>
      <S.Overlay />
      <aside>
        <ul>
          <li>
            <h3>Nome do jogo</h3>
          </li>
        </ul>
        <p>2 jogos no carrinho</p>
        <p>
          Total de R$250,00 <span>Em até 6x sem juros</span>
        </p>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </aside>
    </S.CartContainer>
  )
}

export default Cart
