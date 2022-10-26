import { Link } from "react-router-dom"


const NavBar = () => {
  return (
<div>
  <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
    <div className="container-fluid">
      <Link to='/' className="navbar-brand" href="#">Inicio</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
       <div className="collapse navbar-collapse show" id="navbarDark">
        <ul className="navbar-nav me-auto mb-2 mb-xl-0">
          <li className="nav-item">
            <Link to='/categoria/remera' className="nav-link active" aria-current="page" href="#">Remeras</Link>
          </li>
          <li className="nav-item">
            <Link to='/categoria/buzos' className="nav-link active" href="#">Buzos</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#" tabIndex="-1">Pantalones</a>
          </li>
        </ul>
      
      </div>
    </div>
  </nav>  
</div>        
        
    
  )
}

export default NavBar