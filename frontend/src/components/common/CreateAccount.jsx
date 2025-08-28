import React, { useContext, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import UserContext from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';


const CreateAccount = () => {

    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = () => {
        setUser(formData);
        navigate("/");
        alert('Your Account is created.')
    }

    return (

        <div className='w-full px-10 pb-10 pt-14'>
            <div className='w-[70%] h-[620px] bg-gray-300 m-auto rounded-2xl flex shadow-2xl mt-10'>

                <div className='h-full w-[50%] bg-gray-100 rounded-l-2xl flex items-center justify-center'>
                    <img src="https://codesthinker.com/login.jpg" alt="img" className='w-[80%] h-[60%] rounded-2xl' />
                </div>



                <div className='h-full w-[50%] bg-white rounded-r-2xl py-10 px-10'>
                    <h2 className='text-center text-2xl font-bold'>Create an Account</h2>


                    <div className='mt-4'>
                        <label htmlFor="">Full Name</label>
                        <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Enter your full name' className='w-full py-3 px-2 border border-gray-400 rounded-lg mt-3' required />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="">Email</label>
                        <input type="text" name='email' value={formData.email} onChange={handleChange} placeholder='Enter your email' className='w-full py-3 px-2 border border-gray-400 rounded-lg mt-3' required />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="">Password</label>
                        <input type="password" name='password' value={formData.password} onChange={handleChange} placeholder='Enter your password' className='w-full py-3 px-2 border border-gray-400 rounded-lg mt-3' required />

                    </div>
                    <div className='flex items-center justify-between  space-x-2 mt-5'>
                        <label className='flex items-center space-x-2'>
                            <input type="checkbox" className='w-4 h-4 accent-blue-600 cursor-pointer' />
                            <span className='text-sm text-gray-700'>Remember me</span>
                        </label>
                        <a href="#" className='text-sm text-blue-600 hover:underline font-semibold'>Forgot password?</a>
                    </div>
                    <button onClick={handleSubmit} className='mt-6 w-full bg-[#007DFE] text-white font-semibold py-4 px-4 rounded-lg hover:bg-[#1447E6]'>Create Account</button>

                    <div className='text-center mt-2'>OR</div>


                    <div className='mt-4 border w-full py-4 px-4 rounded-lg border-gray-500 '>
                        <button className='flex items-center gap-2 px-20'>
                            <div><FcGoogle className='text-2xl' /></div>
                            Sign up with Google</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount