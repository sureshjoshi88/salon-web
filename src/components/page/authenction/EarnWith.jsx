import React, { useReducer, useState } from 'react'
import { FiUser, FiUsers } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
import { initialState, registerFromReducer } from '../../../reducer/registerFrom';

import { BsCardImage } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";

import { GrFormPreviousLink } from "react-icons/gr";



const EarnWith = () => {
  const [ownership, setOwnership] = useState('personal')
  const [state, dispatch] = useReducer(registerFromReducer, initialState);
  console.log(state.step)
  return (
    <>
      {state.step === 1 && <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <header className="px-6 py-6 border-b text-white" style={{ background: "var(--primary-gradient)" }}>
            <h1 className="text-2xl font-semibold ">Earn with Us</h1>
            <p className="font-medium  mt-1">Partner Registration — register your shop and start earning</p>
          </header>

          {/* Steps */}
          <nav className="px-6 py-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div style={{ background: "var(--primary)" }} className="flex items-center justify-center w-10 h-10 rounded-full  text-white text-xl">
                  <FaRegUserCircle />
                </div>
                <div>
                  <p className="text-sm font-medium">Contact Details</p>
                  <p className="text-xs text-gray-500">Provide your basic contact</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-xl">
                  <FaCartShopping className='text-[var(--primary)]' />
                </div>
                <div>
                  <p className="text-sm font-medium">Shop Details</p>
                  <p className="text-xs text-gray-500">Tell us about your shop</p>
                </div>
              </div>



              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-xl">
                  <MdVerifiedUser className='text-[var(--primary)]' />
                </div>
                <div>
                  <p className="text-sm font-medium">Verification</p>
                  <p className="text-xs text-gray-500">Upload documents to verify</p>
                </div>
              </div>
            </div>
          </nav>


          <main className="px-6 py-6">
            <section className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Contact Details</h2>
              <p className="text-sm text-gray-600">Tell us about your business ownership</p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className={`p-4 border rounded-lg cursor-pointer ${ownership === 'personal' ? 'bg-[var(--primary)] text-white' : 'bg-white'}`}>
                  <input type="radio" name="ownership" value="personal" checked={ownership === 'personal'} onChange={() => setOwnership('personal')} className="hidden" />
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <FiUser className="w-5 h-5 text-[var(--primary)]" />
                    </div>
                    <div>
                      <p className="font-medium">Personal</p>
                      <p className="text-xs ">I am the owner</p>
                    </div>
                  </div>
                </label>

                <label className={`p-4 border rounded-lg cursor-pointer ${ownership === 'business' ? 'bg-[var(--primary)] text-white' : 'bg-white'}`}>
                  <input type="radio" name="ownership" value="business" checked={ownership === 'business'} onChange={() => setOwnership('business')} className="hidden" />
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border">
                      <FiUsers className="w-5 h-5 text-indigo-600" />

                    </div>
                    <div>
                      <p className="font-medium">Business / Partnership</p>
                      <p className="text-xs ">Registered business or multiple owners</p>
                    </div>
                  </div>
                </label>
              </div>
            </section>



            {ownership === "personal" ? <main>
              <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Owner Details</h3>
                <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">Owner Full Name</label>
                    <input style={{ background: "var(--secondary)" }}
                      id="ownerName" name="ownerName" type="text" placeholder="Enter owner's full name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none h-10 p-3" />
                  </div>

                  <div>
                    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label>
                    <input style={{ background: "var(--secondary)" }}
                      id="contactNumber" name="contactNumber" type="tel" placeholder="Enter contact number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none h-10 p-3" />
                  </div>

                  <div>
                    <label htmlFor="email1" className="block text-sm font-medium text-gray-700">Email</label>
                    <input style={{ background: "var(--secondary)" }}
                      id="email1" name="whatsappNumber" type="email" placeholder="Enter your email " className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none h-10 p-3" />
                  </div>

                   <div>
                    <label htmlFor="password1" className="block text-sm font-medium text-gray-700">Password</label>
                    <input style={{ background: "var(--secondary)" }}
                      id="password1" name="whatsappNumber" type="password" placeholder="Enter your password " className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none h-10 p-3" />
                  </div>
                </form>
              </section>

              <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Shop Details</h3>
                <form className="mt-4 grid grid-cols-1 gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div>
                      <label htmlFor="shopName" className="block text-sm font-medium text-gray-700">Shop / Salon Name</label>
                      <input style={{ background: "var(--secondary)" }}
                        id="shopName" name="shopName" type="text" placeholder="Enter shop name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                    </div>

                    <div>
                      <label htmlFor="Shop Contact Number" className="block text-sm font-medium text-gray-700">Shop Contact Number</label>
                      <input style={{ background: "var(--secondary)" }}
                        id="Shop Contact Number" name="Shop Contact Number" type="number" placeholder="Enter shop contact number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="Shop WhatsApp Number" className="block text-sm font-medium text-gray-700">Shop WhatsApp Number</label>
                      <input style={{ background: "var(--secondary)" }} id="Shop WhatsApp Number" name="shopAddress" type="text" placeholder="Enter shop WhatsApp number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                    </div>

                    <div>
                      <label htmlFor="shopCity" className="block text-sm font-medium text-gray-700">City</label>
                      <input style={{ background: "var(--secondary)" }} id="shopCity" name="shopCity" type="text" placeholder="City" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                    </div>
                    <div>
                      <label htmlFor="Number of Staff" className="block text-sm font-medium text-gray-700">Number of Staff</label>
                      <input style={{ background: "var(--secondary)" }} id="Number of Staff" name="Number of Staff" type="number" placeholder="Enter number of staff" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                    </div>
                    <div>
                      <label htmlFor="Shop Opening Date" className="block text-sm font-medium text-gray-700">Shop Opening Date</label>
                      <input style={{ background: "var(--secondary)" }} id="Shop Opening Date" name="Shop Opening Date" type="date" placeholder='Select date' className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                    </div>
                    <div>
                      <label htmlFor="Registration Number" className="block text-sm font-medium text-gray-700">Registration Number</label>
                      <input style={{ background: "var(--secondary)" }} id="Registration Number" name="Registration Number" type="text" placeholder="Enter registration number (optional)" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                    </div>
                  </div>
                </form>
              </section>
            </main>

              :
              <main>
                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Partners Details</h3>
                  <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="Partner Name" className="block text-sm font-medium text-gray-700">Partner Name</label>
                      <input style={{ background: "var(--secondary)" }}
                        id="Partner Name" name="Partner Name" type="text" placeholder="Enter owner's full name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none h-10 p-3" />
                    </div>

                    <div>
                      <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label>
                      <input style={{ background: "var(--secondary)" }}
                        id="contactNumber" name="contactNumber" type="tel" placeholder="Enter contact number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none h-10 p-3" />
                    </div>

                    <div>
                      <label htmlFor="whatsappNumber" className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
                      <input style={{ background: "var(--secondary)" }}
                        id="whatsappNumber" name="whatsappNumber" type="tel" placeholder="Enter WhatsApp number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none h-10 p-3" />
                    </div>

                  </form>
                </section>

                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Partner 2</h3>
                  <form className="mt-4 grid grid-cols-1 gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                      <div>
                        <label htmlFor="Partner Name 2" className="block text-sm font-medium text-gray-700">Partner Name</label>
                        <input style={{ background: "var(--secondary)" }}
                          id="Partner Name 2" name="Partner Name 2" type="text" placeholder="Enter owner's full name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                      </div>

                      <div>
                        <label htmlFor="Contact Number" className="block text-sm font-medium text-gray-700">Contact Number</label>
                        <input style={{ background: "var(--secondary)" }}
                          id="Contact Number" name="Contact Number" type="number" placeholder="Enter shop contact number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                      </div>
                      <div>
                        <label htmlFor="WhatsApp Number" className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
                        <input style={{ background: "var(--secondary)" }} id="WhatsApp Number" name="WhatsApp Number" type="text" placeholder="Enter WhatsApp number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                      </div>
                    </div>


                    <button className="border bg-[var(--primary)] w-full py-2 rounded-md text-white font-medium">+ Add Staff Member</button>
                  </form>
                </section>

                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Shop information</h3>
                  <form className="mt-4 grid grid-cols-1 gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                      <div>
                        <label htmlFor="shop name2" className="block text-sm font-medium text-gray-700">shop/Salon Name</label>
                        <input style={{ background: "var(--secondary)" }}
                          id="shop name2" name="shop name2" type="text" placeholder="Enter your shop name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                      </div>

                      <div>
                        <label htmlFor="shop Contact Number" className="block text-sm font-medium text-gray-700">Shop Contact Number</label>
                        <input style={{ background: "var(--secondary)" }}
                          id="shop Contact Number" name="shop Contact Number" type="number" placeholder="Enter shop contact number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                      </div>
                      <div>
                        <label htmlFor="shop WhatsApp Number" className="block text-sm font-medium text-gray-700">Shop WhatsApp Number</label>
                        <input style={{ background: "var(--secondary)" }} id="shop WhatsApp Number" name="shop WhatsApp Number" type="text" placeholder="Enter shop WhatsApp number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                      </div>

                      <div>
                        <label htmlFor="shop Staff Count" className="block text-sm font-medium text-gray-700">Number of Staff</label>
                        <input style={{ background: "var(--secondary)" }} id="shop Staff Count" name="shop Staff Count" type="text" placeholder="Enter number of staff " className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                      </div>
                      <div>
                        <label htmlFor="shop Opening Date" className="block text-sm font-medium text-gray-700">Shop Opening Date</label>
                        <input style={{ background: "var(--secondary)" }} id="shop Opening Date" name="shop Opening Date" type="text" placeholder="Enter shop opening date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                      </div>
                      <div>
                        <label htmlFor="shop Registration Number" className="block text-sm font-medium text-gray-700">Registration Number</label>
                        <input style={{ background: "var(--secondary)" }} id="shop Registration Number" name="shop Registration Number" type="text" placeholder="Enter registration number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                      </div>
                    </div>


                  </form>
                </section>
              </main>
            }
            <div className="flex justify-end">
              <button onClick={() => dispatch({ type: "NEXT_STEP" })} className="cursor-pointer font-medium px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Save & Continue</button>
            </div>
          </main>
        </div>
      </div>
      }





      {/* 2 */}

      {
        state.step === 2 && <div className="min-h-screen bg-gray-50 p-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <header className="px-6 py-6 border-b text-white" style={{ background: "var(--primary-gradient)" }}>
              <h1 className="text-2xl font-semibold ">Earn with Us</h1>
              <p className="font-medium  mt-1">Partner Registration — register your shop and start earning</p>
            </header>

            {/* Steps */}
            <nav className="px-6 py-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-400  text-white text-xl">
                    <FaCheck />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Contact Details</p>
                    <p className="text-xs text-gray-500">Provide your basic contact</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--primary)] text-white text-xl">
                    <FaCartShopping />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Shop Details</p>
                    <p className="text-xs text-gray-500">Tell us about your shop</p>
                  </div>
                </div>



                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-xl">
                    <MdVerifiedUser className='text-[var(--primary)]' />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Verification</p>
                    <p className="text-xs text-gray-500">Upload documents to verify</p>
                  </div>
                </div>
              </div>
            </nav>


            <main className="px-6 py-6">
              <section className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Shop Details</h2>
                <p className="text-sm text-gray-600">Showcase your salon to customers</p>


                <div className='mt-3'>
                  <h2 className="text-lg font-semibold text-gray-800">Shop Images *</h2>
                  <p className="text-sm text-gray-600">Upload 3-4 high-quality images of your salon</p>
                </div>

              </section>



              <section>
                <div className='grid md:grid-cols-4 gap-6'>
                  <div className='bg-[var(--secondary)] h-40 flex items-center justify-center text-4xl cursor-pointer'><BsCardImage className='text-gray-600' /></div>
                  <div className='bg-[var(--secondary)] h-40 flex items-center justify-center text-4xl cursor-pointer'><BsCardImage className='text-gray-600' /></div>
                  <div className='bg-[var(--secondary)] h-40 flex items-center justify-center text-4xl cursor-pointer'><BsCardImage className='text-gray-600' /></div>
                  <div className='bg-[var(--secondary)] h-40 flex items-center justify-center text-4xl cursor-pointer'><BsCardImage className='text-gray-600' /></div>
                </div>
              </section>

              <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Shop Location *</h3>
                <p className="font-semibold text-gray-800">Help customers find you</p>
                <form className="mt-4 grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="shopName" className="block text-sm font-medium text-gray-700">Complete Address *</label>
                    <input style={{ background: "var(--secondary)" }}
                      id="shopName" name="shopName" type="text" placeholder="Shop No, Building, Street, Area, City, State, Pincode" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                  </div>
                </form>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Set Location on Map</h3>
                  <div className='bg-gray-300 flex justify-center p-3 mt-2'>
                    <div className='text-center'>
                      <div className='flex justify-center'>
                        <div className='h-10 w-10 rounded-full bg-white text-center'></div>
                      </div>
                      <p className='text-gray-700'>Pin your exact location</p>
                      <p className='text-gray-700'>this helps customers find you easily</p>
                    </div>
                  </div>
                  <button className='border rounded w-full mt-3 p-2'>Open Map & Set Location</button>
                </div>

                <main className="px-6 py-6">
                  {/* Staff Members Section */}
                  <section className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800">Staff Members *</h3>
                    <p className="text-sm text-gray-600 mb-4">Add your team details</p>

                    <div className="border rounded-lg p-4 mb-3">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-semibold text-gray-700">Staff Member 1</h4>
                        <span className="text-xs border px-2 py-0.5 rounded-full bg-gray-100">1 Staff</span>
                      </div>

                      <form>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                          <div className="flex-1">
                            <input className="w-full border rounded-md p-2 text-sm mb-2" placeholder="Staff name" />
                            <div className="grid grid-cols-2 gap-2">
                              <input className="w-full border rounded-md p-2 text-sm" placeholder="Role (e.g., Stylist)" />
                              <input className="w-full border rounded-md p-2 text-sm" placeholder="Experience" />
                            </div>
                          </div>
                        </div>

                        <button className="border w-full py-2 rounded-md text-gray-600 text-sm">+ Add Staff Member</button>
                      </form>
                    </div>
                  </section>

                  {/* Services Section */}
                  <section className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800">Services & Pricing *</h3>
                    <p className="text-sm text-gray-600 mb-4">List all services you offer</p>

                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-semibold text-gray-700">Service 1</h4>
                        <span className="text-xs border px-2 py-0.5 rounded-full bg-gray-100">1 Service</span>
                      </div>

                      <form>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                          <div className="flex-1">
                            <select className="w-full border rounded-md p-2 text-sm mb-2">
                              <option>Select category</option>
                            </select>
                            <input className="w-full border rounded-md p-2 text-sm mb-2" placeholder="Service name (e.g., Haircut)" />
                            <div className="grid grid-cols-2 gap-2">
                              <input className="w-full border rounded-md p-2 text-sm" placeholder="₹ Price" />
                              <input className="w-full border rounded-md p-2 text-sm" placeholder="Duration" />
                            </div>
                          </div>
                        </div>

                        <button className="border w-full py-2 rounded-md text-gray-600 text-sm">+ Add Service</button>
                      </form>
                    </div>
                  </section>


                </main>


              </section>

              <div className="flex justify-between items-center pt-4">
                <button onClick={() => dispatch({ type: "PREV_STEP" })} className="flex items-center gap-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                  <GrFormPreviousLink size={16} />
                  Back
                </button>
                <button onClick={() => dispatch({ type: "NEXT_STEP" })} className="cursor-pointer font-medium px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Save & Continue</button>
              </div>



            </main>
          </div>
        </div>
      }


      {/* 3 */}





      {state.step === 3 && <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <header className="px-6 py-6 border-b text-white" style={{ background: "var(--primary-gradient)" }}>
            <h1 className="text-2xl font-semibold ">Earn with Us</h1>
            <p className="font-medium  mt-1">Partner Registration — register your shop and start earning</p>
          </header>

          {/* Steps */}
          <nav className="px-6 py-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-400  text-white text-xl">
                  <FaCheck />
                </div>
                <div>
                  <p className="text-sm font-medium">Contact Details</p>
                  <p className="text-xs text-gray-500">Provide your basic contact</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-400 text-white text-xl">
                  <FaCheck />
                </div>
                <div>
                  <p className="text-sm font-medium">Shop Details</p>
                  <p className="text-xs text-gray-500">Tell us about your shop</p>
                </div>
              </div>



              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--primary)] text-white text-xl">
                  <MdVerifiedUser />
                </div>
                <div>
                  <p className="text-sm font-medium">Verification</p>
                  <p className="text-xs text-gray-500">Upload documents to verify</p>
                </div>
              </div>
            </div>
          </nav>


          <main className="px-6 py-6">
            <div className="max-w-lg mx-auto bg-white shadow-md rounded-2xl p-6 space-y-5">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Verification Documents</h2>
                <p className="text-sm text-gray-500">
                  Upload your ID proof for verification
                </p>
              </div>

              {/* ID Proof Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ID Proof Type <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select ID proof type
                  </option>
                  <option value="aadhar">Aadhar Card</option>
                  <option value="pan">PAN Card</option>
                  <option value="driving">Driving License</option>
                  <option value="passport">Passport</option>
                </select>
              </div>

              {/* ID Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ID Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter ID number"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Upload Section */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload ID Proof <span className="text-red-500">*</span>
                </label>

                <div className="border-2 border-gray-300 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-400 transition">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                    <span className="text-gray-500 text-xl">📎</span>
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    Click to upload ID proof <br />
                    <span className="text-xs text-gray-400">PNG, JPG up to 5MB</span>
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between items-center pt-4">
                <button onClick={() => dispatch({ type: "PREV_STEP" })} className="flex items-center gap-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                  <GrFormPreviousLink size={16} />
                  Back
                </button>

                <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
                  Submit Registration
                </button>
              </div>
            </div>



          </main>
        </div>
      </div>}
    </>
  )
}

export default EarnWith
