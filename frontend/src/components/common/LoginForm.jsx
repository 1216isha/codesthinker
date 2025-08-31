import React, { useState, useContext } from 'react'
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';

const LoginForm = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handldeChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        setUser(formData);
        navigate("/");
    }

    return (
        <div className="w-full px-4 md:px-10 flex justify-center py-6 md:py-16">
            <div className="w-full md:w-[70%] h-auto md:h-[600px] bg-gray-300 rounded-2xl flex flex-col md:flex-row shadow-2xl">

                {/* Left Section */}
                <div className="w-full md:w-1/2 bg-white rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none py-8 px-4 md:px-10">
                    <h2 className="text-center text-2xl font-bold">Welcome Back</h2>
                    <p className="text-center mt-2 text-sm text-gray-700">
                        Start your journey with us. Don’t have an account?
                    </p>
                    <div className="text-center mt-2">
                        <Link to="/signup" className="text-[#0880FC] font-semibold">
                            Sign up
                        </Link>
                    </div>

                    {/* Email Input */}
                    <div className="mt-6">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handldeChange}
                            required
                            placeholder="Enter your email"
                            className="w-full py-3 px-2 border border-gray-400 rounded-lg mt-2"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mt-6">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handldeChange}
                            required
                            placeholder="Enter your password"
                            className="w-full py-3 px-2 border border-gray-400 rounded-lg mt-3"
                        />
                    </div>

                    {/* Remember + Forgot Password */}
                    <div className="flex items-center justify-between mt-6">
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="w-4 h-4 accent-blue-600 cursor-pointer"
                            />
                            <span className="text-sm text-gray-700">Remember me</span>
                        </label>
                        <Link
                            to="/forgot-password"
                            className="text-sm text-blue-600 hover:underline font-semibold"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="mt-4 w-full bg-[#007DFE] text-white font-semibold py-4 rounded-lg hover:bg-[#1447E6]"
                    >
                        Sign in to your account
                    </button>

                    <div className="text-center mt-4">OR</div>

                    <div className="mt-4 border w-full py-4 rounded-lg border-gray-500">
                        <button className="flex items-center justify-center gap-2">
                            <FcGoogle className="text-2xl" />
                            Sign in with Google
                        </button>
                    </div>
                </div>

                <div className='hidden md:flex h-full w-[50%] bg-gray-100 rounded-r-2xl items-center justify-center'>
                    <img
                        src="https://codesthinker.com/login.jpg"
                        alt="img"
                        className='w-[80%] h-[60%] rounded-2xl'
                    />
                </div>

            </div>
        </div>
    );
}

export default LoginForm;
