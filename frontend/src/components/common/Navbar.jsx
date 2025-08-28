import { Link } from 'react-router-dom'
import companylogo from '../../assets/homeImages/companylogo.webp'
import { useContext } from 'react';
import UserContext from '../../context/UserContext';

const Navbar = () => {
    const { user } = useContext(UserContext);
    return (
        <div className='flex justify-center w-full h-auto m-auto'>
            <nav className='w-full px-10 bg-[#060145] h-[70px] flex justify-between fixed z-50'>
                <Link to="/" className=''>

                    <img src={companylogo} alt="" className='w-44 mb-6' />
                </Link>
                <div className="text-white flex py-4 justify-between gap-7 text-[20px] font-semibold ">
                    <Link to="/" className='hover:underline hover:text-blue-400'>Home </Link>
                    <Link to="/about" className='hover:underline hover:text-blue-400'>About </Link>
                    <Link to="/services" className='hover:underline hover:text-blue-400'>Services</Link>
                    <Link to="/projects" className='hover:underline hover:text-blue-400'>Projects</Link>
                    <Link to="/team" className='hover:underline hover:text-blue-400'>Team </Link>
                    <Link to="/contact" className='hover:underline hover:text-blue-400'>Contact</Link>
                </div>
                <div className='w-[150px]'>
                    {
                        user ? (
                            <div>
                                <Link to="#">
                                    <button className='btn border border-white text-white font-[10px] px-6 py-2 bg-gradient-to-r from-[#080054] to-[#0E009C] rounded-4xl my-[10px] mx-[20px]  hover:from-[#0E009C] hover:to-[#080054]'>Log out</button>
                                </Link>
                            </div>
                        ) :
                            (
                                <Link to="/login">
                                    <button className='btn border border-white text-white font-[10px] px-10 py-2 bg-gradient-to-r from-[#080054] to-[#0E009C] rounded-4xl my-[10px] mx-[15px]  hover:from-[#0E009C] hover:to-[#080054]'>Login</button>
                                </Link>
                            )
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar