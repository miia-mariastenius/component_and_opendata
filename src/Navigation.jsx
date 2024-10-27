import { Link, Outlet } from "react-router-dom"


function Navigation() {
  return (
    <div>
      <Link to={'/'}>Component assignment</Link>
      <Link to={'/meal-generator'}>Open data assignment</Link>
      <Outlet/>
    </div>
  )

}

export default Navigation