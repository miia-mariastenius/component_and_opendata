import { useState } from 'react'
import OrderInfo from './OrderInfo'

function OrderForm() {

  const [products, setProducts] = useState(['BenQ PD3220U', 'Huawei MateView', 'BenQ PD3420Q', 'Dell U2719DC'])
  const [selectedProduct, setSelectedProduct] = useState('')
  const [productPrice, setProductPrice] = (['1 289€', '699€', '899€', '535€'])
  const [quantity, setQuantity] = useState(0)

  function add(){
    setQuantity(prev=> prev+1)
  }

  function subtract(){
    setQuantity(prev=> {
      if (prev > 0) {
        return prev - 1
      } else {
        return 0
      }
    })
  }

  return (
    <div>
      <h2>Select product</h2>
      <div className='row'>
        <p>Product:</p>
        <select value={selectedProduct} onChange={e => setSelectedProduct(e.target.value)}>
          {
            products.map(p => <option key={p} value={p}>{p}</option>)
          }
        </select>
      </div>
      <div className='row'>
        <p>Quantity:</p><button onClick={subtract}>-</button>{quantity}<button onClick={add}>+</button>
      </div>
      <OrderInfo />
    </div>
  )
}

export default OrderForm