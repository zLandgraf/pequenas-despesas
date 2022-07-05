import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="navbar py-3">
        <div className="navbar-start align-middle">
          <a className="text-2xl font-semibold">Caixinha </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href="/empenhos">
                Empenhos
              </Link>
            </li>
            <li>
              <Link href="/fornecedores">
                Fornecedores
              </Link>
            </li>
            <li>
              <Link href="/solicitantes">
                Socilitantes
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar placeholder">
              <div className="bg-blue-900 text-white rounded-full w-12">
                <span>AL</span>
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