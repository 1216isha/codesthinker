import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import UserContext from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    setUser(formData);
    navigate("/");
    alert('Your Account is created.');
  };

  return (
    <div className="w-full px-4 md:py-10 py-4  flex justify-center">
      <div className="w-full max-w-5xl bg-gray-300 md:pb-0 pb-4 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">

        {/* Image Section - Hidden on Mobile */}
        <div className="hidden md:flex md:w-1/2 bg-gray-100 items-center justify-center">
          <img
            src="https://codesthinker.com/login.jpg"
            alt="img"
            className="w-[80%] h-[60%] rounded-2xl"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 bg-white py-8 px-6 md:px-10">
          <h2 className="text-center text-2xl font-bold">Create an Account</h2>

          <div className="mt-4">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full py-3 px-2 border border-gray-400 rounded-lg mt-3"
              required
            />
          </div>

          <div className="mt-4">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full py-3 px-2 border border-gray-400 rounded-lg mt-3"
              required
            />
          </div>

          <div className="mt-4">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full py-3 px-2 border border-gray-400 rounded-lg mt-3"
              required
            />
          </div>

          {/* <div className="flex items-center justify-between mt-5">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4 accent-blue-600 cursor-pointer" />
              <span className="text-sm text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline font-semibold">
              Forgot password?
            </a>
          </div> */}

          <button
            onClick={handleSubmit}
            className="mt-6 w-full bg-[#007DFE] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#1447E6]"
          >
            Create Account
          </button>

          <div className="text-center mt-4">OR</div>

          <div className="mt-4 border w-full py-3 px-4 rounded-lg border-gray-500">
            <button className="flex items-center justify-center gap-2 w-full">
              <FcGoogle className="text-2xl" />
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
