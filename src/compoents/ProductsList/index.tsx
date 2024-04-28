import Produt from '../Product'

type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => (
  <div>
    <h2>{title}</h2>
    <ul>
      <Produt />
      <Produt />
      <Produt />
      <Produt />
    </ul>
  </div>
)

export default ProductsList
