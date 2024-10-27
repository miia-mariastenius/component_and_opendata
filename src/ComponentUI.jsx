import OrderForm from './OrderForm'
import HeaderImg from './assets/icon-5577198_1280.png'
import './Component.css'

function ComponentUI() {

  return(
    <div>
      <header className='component-header'>
        <img src={HeaderImg} alt="Header"  />
        <h1>Welcome to product page</h1>
      </header>
      <OrderForm/>
    </div>
  )
}

export default ComponentUI