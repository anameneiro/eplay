import Tag from '../Tag'

import { Card, Descricao, Titulo, Infos } from './style'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Produt = ({
  title,
  category,
  system,
  description,
  image,
  infos,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }

  return (
    <Card
      title={`Clique aqui para ver mais detahles do jogo ${title}`}
      to={`/product/${id}`}
    >
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Descricao>{getDescricao(description)}</Descricao>
    </Card>
  )
}

export default Produt
