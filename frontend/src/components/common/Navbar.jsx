import { Link, NavLink } from 'react-router-dom'
import companylogo from '../../assets/homeImages/companylogo.webp'
import { useContext, useState } from 'react';
import UserContext from '../../context/UserContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useContext(UserContext);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className='flex justify-center h-auto m-auto'>
      <nav className='w-full md:px-10 px-2 bg-[#060145] h-[70px] flex justify-between items-center fixed z-50 max-w-[2100px]'>

        {/* Logo */}
        <Link to="/"><img src={companylogo} alt="Logo" className='md:w-44 w-26 mr-4 mt-2 md:mt-6 md:mb-6' /></Link>

        {/* Desktop Links */}
        <div className='hidden md:flex text-white gap-7 text-[18px] font-semibold'>
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-400' : 'hover:text-blue-400'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-400' : 'hover:text-blue-400'}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'text-blue-400' : 'hover:text-blue-400'}>Services</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-400' : 'hover:text-blue-400'}>Projects</NavLink>
          <NavLink to="/team" className={({ isActive }) => isActive ? 'text-blue-400' : 'hover:text-blue-400'}>Team</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-400' : 'hover:text-blue-400'}>Contact</NavLink>
        </div>

        {/* Hamburger + Login (Desktop) */}
        <div className='flex items-center gap-4'>
          <button title='Menu' className='text-white text-3xl md:hidden' onClick={() => setIsOpen(!isOpen)}>☰</button>
          <div className='hidden md:block'>
            {user ? (
              <Link to="#"><button className='btn border border-white text-white md:px-8 md:py-2 px-10 py-2 bg-gradient-to-r from-[#080054] to-[#0E009C] rounded-4xl hover:from-[#0E009C] hover:to-[#080054]'>Log out</button></Link>
            ) : (
              <Link to="/login"><button className='btn border border-white text-white md:px-8 md:py-2 px-10 py-2 bg-gradient-to-r from-[#080054] to-[#0E009C] rounded-4xl hover:from-[#0E009C] hover:to-[#080054]'>Login</button></Link>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden flex-col items-center absolute top-[70px] left-0 w-full bg-[#060145] py-5 px-6 gap-5 text-white text-[18px] font-semibold ${isOpen ? 'flex' : 'hidden'}`}>
          {['/', '/about', '/services', '/projects', '/team', '/contact'].map((path, idx) => (
            <NavLink key={idx} to={path} onClick={handleLinkClick}
              className={({ isActive }) => isActive
                ? 'block w-full text-center text-blue-400 font-semibold bg-gray-200/20 px-3 py-2 rounded-md'
                : 'block w-full text-center hover:bg-gray-200/20 hover:text-blue-400 px-3 py-2 rounded-md'}>
              {['Home', 'About', 'Services', 'Projects', 'Team', 'Contact'][idx]}
            </NavLink>
          ))}
          <div className='mt-2 md:hidden'>
            {user ? (
              <Link to="#"><button className='btn border border-white text-white px-10 py-2 bg-gradient-to-r from-[#080054] to-[#0E009C] rounded-4xl hover:from-[#0E009C] hover:to-[#080054]'>Log out</button></Link>
            ) : (
              <Link to="/login"><button className='btn border border-white text-white px-10 py-2 bg-gradient-to-r from-[#080054] to-[#0E009C] rounded-4xl hover:from-[#0E009C] hover:to-[#080054]'>Login</button></Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;
