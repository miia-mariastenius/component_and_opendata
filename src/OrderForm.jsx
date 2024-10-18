import OrderInfo from './OrderInfo'

function OrderForm() {
  
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