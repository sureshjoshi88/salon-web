import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {

    const [form, setForm] = useState({ name: '', number: '', email: '', password: '' })
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!form.name || !form.number || !form.email || !form.password) {
            alert('Please fill all required fields')
            return
        }

        // prepare form data (example: for API upload)
        const fd = new FormData()
        fd.append('name', form.name)
        fd.append('number', form.number)
        fd.append('email', form.email)
        fd.append('password', form.password)
        // Replace the following with actual submission logic (fetch/axios)
        console.log('Submitting form:', { ...form })
        alert('Form submitted (see console)')
    }
    return (
        <div>
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Create Account</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full name
                            </label>
                            <input
                                style={{ background: "var(--secondary)" }}
                                id="name"
                                name="name"
                                type="text"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your full name"
                                required
                                className="mt-1 block w-full rounded-md outline-0 shadow-sm focus:border-indigo-500 p-3 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>

                        {/* Username */}
                        <div>
                            <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                style={{ background: "var(--secondary)" }}
                                id="number"
                                name="number"
                                type="number"
                                value={form.number}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                required
                                className="mt-1 block w-full rounded-md outline-0 shadow-sm focus:border-indigo-500 p-3 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                style={{ background: "var(--secondary)" }}
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                required
                                className="mt-1 block w-full rounded-md outline-0 shadow-sm focus:border-indigo-500 p-3 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                style={{ background: "var(--secondary)" }}
                                id="password"
                                name="password"
                                type="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Enter a secure password"
                                required
                                className="mt-1 block w-full rounded-md outline-0 shadow-sm focus:border-indigo-500 p-3 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>


                        <button type="submit" style={{ background: "var(--primary-gradient)" }} className="w-full inline-flex justify-center items-center px-4 py-2  text-white font-medium rounded-md  focus:outline-none focus:ring-2 cursor-pointer ">
                            Create Account
                        </button>
                    </form>
                    <div className='flex gap-1 items-center my-5'>
                        <div className='border-b w-1/2'></div>
                        <p className='text-center font-medium text-xl'>or</p>
                        <div className='border-b w-1/2'></div>
                    </div>
                    <button type="button" style={{ background: "var(--primary-gradient)" }} className="w-full inline-flex justify-center items-center px-4 py-2  text-white font-medium rounded-md  focus:outline-none focus:ring-2 cursor-pointer mt-2 ">
                        Continue with Google
                    </button>
                    <div className='flex gap-1 items-center justify-center my-3'>
                        <p>Already have an account?</p>
                        <Link to="/login" className="text-indigo-600 hover:text-indigo-800 hover:underline font-medium ml-2">Login</Link>
                    </div>
                    <p>By continuing, you agree to our <span className='
                    text-blue-600 font-medium'>Terms</span>  of <span className='text-blue-600 font-medium'>Service</span> and <span className='text-blue-600 font-medium'>Privacy Policy</span></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp
