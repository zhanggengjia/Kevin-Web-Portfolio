import { FaBarsStaggered } from 'react-icons/fa6';
import { links } from '../data'
import NavLinks from './NavLinks';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { useState } from 'react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const handleTheme = () => {
    setIsDark((prevValue) => {
      const darkTheme = prevValue;
      if (darkTheme) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
      return !isDark
    });
  }
  return (
    <nav className="sticky top-0 z-50 bg-base-100/80 backdrop-blur border-b border-base-200">
      <div className='align-element navbar lg:px-10'>
        {/* Start */}
        <div className='navbar-start'>
          <h2 className='text-3xl font-bold hidden lg:flex'>
            Web<span className='text-emerald-600'>Dev</span>
          </h2>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <FaBarsStaggered className='h-6 w-6' />
            </label>
            <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'>
              <NavLinks />
            </ul>
          </div>
        </div>
        {/* Center */}
        <div className='navbar-center hidden lg:flex'>
          <h2 className='text-3xl font-bold lg:hidden'>
            Web<span className='text-emerald-600'>Dev</span>
          </h2>
          <ul className='menu menu-horizontal'>
            <NavLinks />
          </ul>
        </div>
        <div className='navbar-center lg:hidden'>
          <h2 className='text-3xl font-bold'>
            Web<span className='text-emerald-600'>Dev</span>
          </h2>
        </div>
        {/* End */}
        <div className='navbar-end'>
          <label className='swap swap-rotate'>
            <input type='checkbox' checked={isDark} onChange={handleTheme} />
            <BsSunFill className='swap-on h-4 w-4' />
            <BsMoonFill className='swap-off h-4 w-4' />
          </label>
        </div>
      </div>
    </nav>
  )
}

export default Navbar