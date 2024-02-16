function Header() {
    return (
      <>
          
          <div className="navbar">
              <h1>GEN-Z DICTIONARY</h1>
          </div> 
          <div className="input">
            <input type="search" className="search" placeholder="Search" />
            <input type="search" className="add" placeholder="Add New Words" />
          </div>
      </>
    )
  }
  
  export default Header