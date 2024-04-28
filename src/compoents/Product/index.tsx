import Tag from '../Tag'

import { Card, Descricao, Titulo } from './style'

const Produt = () => (
  <Card>
    <img src="https://via.placeholder.com/222x250" alt="" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
      reiciendis optio dignissimos illo est itaque atque? Necessitatibus
      blanditiis quia nisi deserunt? Rerum at iusto enim. Aspernatur, qui
      cumque? Veniam, natus.
    </Descricao>
  </Card>
)

export default Produt
