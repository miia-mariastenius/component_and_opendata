import { useState } from 'react'
import OrderInfo from './OrderInfo'

function OrderForm() {

  const [products] = useState(['BenQ PD3220U', 'Huawei MateView', 'BenQ PD3420Q', 'Dell U2719DC'])
  const [prices] = useState(['1 289€', '699€', '899€', '535€'])

  const [selectedProduct, setSelectedProduct] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const handleSelectChange = (e) => {
    setSelectedProduct(Number(e.target.value))
  }

  const add = () => setQuantity(prev => prev + 1);
  const subtract = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0))

  return (
    <div>
      <h2>Select product</h2>
      <div className='row'>
        <p>Product:</p>
        <select value={selectedProduct} onChange={handleSelectChange}>
          {
            products.map((product, index) => (
              <option key={index} value={index}>
            {product} ({prices[index]})
          </option>
          ))}
        </select>
      </div>
      <div className='row'>
        <p>Quantity:</p><button onClick={subtract}>-</button>{quantity}<button onClick={add}>+</button>
      </div>
      <OrderInfo productName={products[selectedProduct]}
        productPrice={prices[selectedProduct]}
        quantity={quantity}
      />
    </div>
  )
}

export default OrderForm