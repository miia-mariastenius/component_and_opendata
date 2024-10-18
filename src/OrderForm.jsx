import { useState } from 'react'
import OrderInfo from './OrderInfo'

function OrderForm() {

  const [products, setProducts] = useState(['BenQ PD3220U', 'Huawei MateView', 'BenQ PD3420Q', 'Dell U2719DC'])
  const [selectedProduct, setSelectedProduct] = useState('')
  const [productPrice, setProductPrice] = (['1 289€', '699€', '899€', '535€'])

  return (
    <div>
      <h2>Select product</h2>
      <p>Product:</p>
      <select value={selectedProduct} onChange={e => setSelectedProduct(e.target.value)}>
        {
          products.map(p => <option key={p} value={p}>{p}</option>)
        }
      </select>
      <p>Quantity:</p><button>+</button><button>-</button>
      <OrderInfo />
    </div>
  )
}

export default OrderForm