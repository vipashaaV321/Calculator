import React from "react";
const NavBar = () => {
    return (<div>
         <nav className="navbar navbar-expand-lg navbar-dark py-3 ">

<div className="container">

  <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> 

  <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">

    <ul className="navbar-nav">

       <li className="nav-item mx-auto">
      <b><h3>Calculator</h3> </b>
      </li>
      

    </ul>
   

  </div>


</div>

</nav>
    </div>
      
        );
      };
      
      export default NavBar;
      