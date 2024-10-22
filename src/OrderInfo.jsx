function OrderInfo({ productName, productPrice, quantity }) {

  const calculateTotalPrice = () => {
    const priceNumber = parseFloat(productPrice.replace(/[^\d.-]/g, ''));
    return priceNumber * quantity;
  };

  return (
    <div>
      <h2>Order info</h2>
      <table className='order-table'>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>{calculateTotalPrice()}€</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default OrderInfo