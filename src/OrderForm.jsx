import { useState } from 'react'
import OrderInfo from './OrderInfo'

function OrderForm() {

  const [products, setProducts] = useState(['BenQ PD3220U', 'Huawei MateView', 'BenQ PD3420Q', 'Dell U2719DC'])
  const [productPrice, setProductPrice] = (['1 289€', '699€', '899€', '535€'])
  
  return(
    <div>
      <h2>Select product</h2>
      <p>Product:</p>
      <select></select>
      <p>Quantity:</p><button>+</button><button>-</button>
      <OrderInfo/>
    </div>
  )
}

export default OrderForm