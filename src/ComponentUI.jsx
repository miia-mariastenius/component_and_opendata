import OrderForm from './OrderForm'
import HeaderImg from './assets/icon-5577198_1280.png'

function ComponentUI() {

  return(
    <div>
      <img src={HeaderImg} alt="Header"  />
      <h1>Welcome to My Application</h1>
      <OrderForm/>
    </div>
  )
}

export default ComponentUI