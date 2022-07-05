import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <div>
            <label className="btn btn-ghost btn-circle">
              Menu
            </label>
          </div>
        </div>
        <div className="navbar-center">
           <a className="btn btn-ghost normal-case text-xl">Pequenas Despesas </a>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar