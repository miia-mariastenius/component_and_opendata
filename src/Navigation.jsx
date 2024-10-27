import { Link, Outlet } from "react-router-dom"


function Navigation() {
  return (
    <div>
      <nav className="navigation-links">
      <Link to={'/'}>Component assignment</Link>
      <Link to={'/meal-generator'}>Open data assignment</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Navigation