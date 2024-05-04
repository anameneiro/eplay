import Tag from '../Tag'

import { Card, Descricao, Titulo, Infos } from './style'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Produt = ({
  title,
  category,
  system,
  description,
  image,
  infos
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <Descricao>{description}</Descricao>
  </Card>
)

export default Produt
