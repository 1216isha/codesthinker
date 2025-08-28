
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [otp,setOtp] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OTP: ", otp);
    navigate("/")

    setMessage("OTP has been sent to your email.");
  };

  return (
    <div className="w-full pb-10 pt-30 flex justify-center items-center m-auto bg-[#F3F4F6]">
      <form
        onSubmit={handleSubmit}
        className="w-[450px] h-auto bg-white rounded-lg py-6 px-6 shadow-lg"
        noValidate
      >
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>

        <label htmlFor="email" className="block mb-2 text-gray-600 font-medium">
          Email Address
        </label>
        <input
          id="otp"
          type="number"
          name="otp"
          value={otp}
          onChange={(e)=>setOtp(e.target.value)}
          className="w-full py-2 px-2 border-2 border-[#BEDBFF] rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#2B7FFF]"
          placeholder="Enter your email"
          required
        />

        <button
          type="submit"
          disabled={!otp}
          className={`w-full py-2 px-2 rounded-lg text-white transition 
            ${otp ? "bg-[#2B7FFF] hover:bg-[#1A5DCC]" : "bg-gray-400 cursor-not-allowed"}`}
        >
          Send OTP
        </button>

        {message && (
          <p className="text-green-600 text-center mt-4">{message}</p>
        )}
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
