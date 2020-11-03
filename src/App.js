import FilterableProductTable from './FilterableProductTable'
import PRODUCTS from './products.json'

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />
}
