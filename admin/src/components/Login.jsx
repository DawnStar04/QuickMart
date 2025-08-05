import axios from 'axios'
import React, { useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'



const Login = ({setToken}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + '/api/user/admin',{email,password})
            if (response.data.success) {
                setToken(response.data.token )
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
return (
    <div
        className="min-h-screen flex items-center justify-center w-full"
        style={{
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            position: 'relative',
        }}
    >
        {/* Company Logo */}
        <img
            src={assets.logo}
            alt="Company Logo"
            className="absolute top-8 left-8 w-20 h-20 object-contain opacity-90"
            style={{ zIndex: 1 }}
        />
        <div className="bg-white shadow-2xl rounded-xl px-10 py-8 max-w-md relative z-10">
            <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800 tracking-wide">
                Admin Panel
            </h1>
            <form onSubmit={onSubmitHandler}>
                <div className="mb-4 min-w-72">
                    <p className="text-sm font-medium text-gray-700 mb-2">Email Address</p>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-200 transition"
                        type="email"
                        placeholder="your@email.com"
                        required
                    />
                </div>
                <div className="mb-4 min-w-72">
                    <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-200 transition"
                        type="password"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button
                    className="mt-2 w-full py-2 px-4 rounded-md text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 transition font-semibold shadow cursor-pointer"
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>
    </div>
)
}

export default Login
