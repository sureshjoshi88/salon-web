import React, { useReducer, useState } from 'react'
import { FiUser, FiUsers } from "react-icons/fi";
import { initialState, registerFromReducer } from '../../../reducer/registerFrom';
import { BsCardImage } from "react-icons/bs";
import { GrFormPreviousLink } from "react-icons/gr";
import RegisterFromHeader from '../reusableComponent/RegisterFromHeader';



const EarnWith = () => {
  const [ownership, setOwnership] = useState('personal')
  const [state, dispatch] = useReducer(registerFromReducer, initialState);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "salon_owner",
    salonData: {
      shopType: "",
      shopName: "",
      salonCategory: "",
      location: {
        type: "Point",
        coordinates: [0, 0], // [longitude, latitude]
        address: "",
        city: "",
        state: "",
        pincode: ""
      },
      governmentId: {
        idType: "",
        idNumber: "",
        idImageUrl: ""
      }
    }
  });
  console.log(formData)
  const [partners, setPartners] = useState([
    { name: "", phone: "", whatsapp: "" },
  ]);

  const addPartner = () => {
    if (partners.length >= 2) return alert("You can add only 2 partners");
    setPartners([...partners, { name: "", phone: "", whatsapp: "" }]);
  };

  const handleChange = (index, field, value) => {
    const updated = [...partners];
    updated[index][field] = value;
    setPartners(updated);
  };

  const removePartner = (index) => {
    const updated = [...partners];
    updated.splice(index, 1);
    setPartners(updated);
  };

  const registerAdmin = () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "name": "suresh",
        "email": "suresh1234@gmail.com",
        "phone": 9006543254,
        "password": "suresh123",
        "role": "salon_owner",
        "salonData": {
          "shopType": "personal",
          "shopName": "suresh",
          "salonCategory": "men",
          "location": {
            "coordinates": [
              75.8577,
              26.9124
            ],
            "address": "MI Road",
            "city": "Jaipur",
            "state": "Rajasthan",
            "pincode": "302001"
          },
          "governmentId": {
            "idType": "Aadhar",
            "idNumber": "123456789",
            "idImageUrl": "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202304/untitled_design_90-sixteen_nine.jpg"
          }
        }
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch("https://saloonbackend-mumt.onrender.com/api/auth/signup", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
    } catch (error) {
      console.error(error)
    }
  }


  const handleChangeinput = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSalonChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      salonData: {
        ...prev.salonData,
        [field]: value
      }
    }));
  };

  const handleLocationChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      salonData: {
        ...prev.salonData,
        location: {
          ...prev.salonData.location,
          [field]: value
        }
      }
    }));
  };
  return (
    <>
      <form>
        {state.step === 1 && <div className="min-h-screen bg-gray-50 p-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">

            <RegisterFromHeader />

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
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">Owner Full Name</label>
                      <input style={{ background: "var(--secondary)" }}
                        onChange={(e) => handleChangeinput("name", e.target.value)}
                        id="ownerName" name="ownerName" type="text" placeholder="Enter owner's full name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none h-10 p-3" />
                    </div>

                    <div>
                      <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label>
                      <input style={{ background: "var(--secondary)" }}
                        id="contactNumber" name="" onChange={(e) => handleChangeinput("phone", e.target.value)}
                        type="tel" placeholder="Enter contact number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none h-10 p-3" />
                    </div>

                    <div>
                      <label htmlFor="email1" className="block text-sm font-medium text-gray-700">Email</label>
                      <input style={{ background: "var(--secondary)" }}
                        onChange={(e) => handleChangeinput("email", e.target.value)}

                        id="email1" name="" type="email" placeholder="Enter your email " className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none h-10 p-3" />
                    </div>

                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                      <input style={{ background: "var(--secondary)" }}
                        onChange={(e) => handleChangeinput("password", e.target.value)}

                        id="password" name="" type="password" placeholder="Enter your password " className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none h-10 p-3" />
                    </div>


                    <div>
                      <label htmlFor="whatsappNumber" className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
                      <input style={{ background: "var(--secondary)" }}


                        id="whatsappNumber" name="whatsappNumber" type="tel" placeholder="Enter WhatsApp number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none h-10 p-3" />
                    </div>
                  </div>
                </section>

                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Shop Details</h3>
                  <div className="mt-4 grid grid-cols-1 gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="shopName" className="block text-sm font-medium text-gray-700">Shop / Salon Name</label>
                        <input style={{ background: "var(--secondary)" }}
                          onChange={(e) => handleSalonChange("shopName", e.target.value)}

                          id="shopName" name="shopName" type="text" placeholder="Enter shop name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Select Category <span className="text-red-500">*</span>
                        </label>
                        <select

                          className="w-full border border-[var(--secondary)] rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
                          onChange={(e) => handleSalonChange("salonCategory", e.target.value)}

                        >
                          <option value="" disabled>
                            Select Category
                          </option>
                          <option value="men">Men Salon</option>
                          <option value="beautyParlour">Beauty Parlour</option>
                          <option value="unisex">Unisex Salon</option>
                          <option value="spa">Spa</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </section>
              </main>

                :
                <main>
                  <section className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800">Partners Details</h3>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">Owner Full Name</label>
                        <input style={{ background: "var(--secondary)" }}
                          onChange={(e) => handleChangeinput("name", e.target.value)}

                          id="ownerName" name="ownerName" type="text" placeholder="Enter owner's full name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none h-10 p-3" />
                      </div>

                      <div>
                        <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label>
                        <input style={{ background: "var(--secondary)" }}
                          onChange={(e) => handleChangeinput("phone", e.target.value)}
                          id="contactNumber" name="contactNumber" type="tel" placeholder="Enter contact number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none h-10 p-3" />
                      </div>

                      <div>
                        <label htmlFor="email1" className="block text-sm font-medium text-gray-700">Email</label>
                        <input style={{ background: "var(--secondary)" }}
                          onChange={(e) => handleChangeinput("email", e.target.value)}
                          id="email1" name="" type="email" placeholder="Enter your email " className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none h-10 p-3" />
                      </div>

                      <div>
                        <label htmlFor="password2" className="block text-sm font-medium text-gray-700">Password</label>
                        <input style={{ background: "var(--secondary)" }}
                          onChange={(e) => handleChangeinput("password", e.target.value)}
                          id="password2" name="" type="password" placeholder="Enter your password " className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none h-10 p-3" />
                      </div>


                      <div>
                        <label htmlFor="whatsappNumber1" className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
                        <input style={{ background: "var(--secondary)" }}
                          id="whatsappNumber1" name="" type="tel" placeholder="Enter WhatsApp number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none h-10 p-3" />
                      </div>
                    </div>
                  </section >

                  <section className="mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="shopName" className="block text-sm font-medium text-gray-700">Shop / Salon Name</label>
                        <input style={{ background: "var(--secondary)" }}
                          onChange={(e) => handleSalonChange("shopName", e.target.value)}

                          id="shopName" name="shopName" type="text" placeholder="Enter shop name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Select Category <span className="text-red-500">*</span>
                        </label>
                        <select
                          className="w-full border border-[var(--secondary)] rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
                          defaultValue=""
                          onChange={(e) => handleSalonChange("salonCategory", e.target.value)}


                        >
                          <option value="" disabled>
                            Select Category
                          </option>
                          <option value="men">Men Salon</option>
                          <option value="beautyParlour">Beauty Parlour</option>
                          <option value="unisex">Unisex Salon</option>
                          <option value="spa">Spa</option>
                        </select>
                      </div>
                    </div>
                  </section>
                  <section className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800">Partner </h3>
                    {/* <div className="mt-4 grid grid-cols-1 gap-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        <div>
                          <label htmlFor="Partner Name 1" className="block text-sm font-medium text-gray-700">Partner Name</label>
                          <input style={{ background: "var(--secondary)" }}
                            id="Partner Name 1" name="Partner Name 1" type="text" placeholder="Enter owner's full name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                        </div>

                        <div>
                          <label htmlFor="Contact Number" className="block text-sm font-medium text-gray-700">Contact Number</label>
                          <input style={{ background: "var(--secondary)" }}
                            id="Contact Number" name="Contact Number" type="number" placeholder="Enter shop contact number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                        </div>
                        <div>
                          <label htmlFor="WhatsApp Number" className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
                          <input style={{ background: "var(--secondary)" }} id="WhatsApp Number" name="" type="text" placeholder="Enter WhatsApp number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                        </div>
                      </div>


                      <button className="border bg-[var(--primary)] w-full py-2 rounded-md text-white font-medium">+ Add Staff Member</button>
                    </div> */}

                    <div className="space-y-6">

                      {partners.map((p, index) => (
                        <div key={index} className="rounded-md bg-gray-50  relative">

                          {index > 0 && (
                            <button
                              onClick={() => removePartner(index)}
                              className="absolute right-2 top-2 text-red-500 text-sm"
                            >
                              ✖ Remove
                            </button>
                          )}

                          <div className="grid md:grid-cols-3 gap-4">

                            {/* Full Name */}
                            <div>
                              <label className="block text-sm font-medium text-gray-700">
                                Full Name
                              </label>
                              <input
                                style={{ background: "var(--secondary)" }}
                                type="text"
                                placeholder="Enter full name"
                                value={p.name}
                                onChange={(e) => handleLocationChange("city", e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3"
                              />
                            </div>

                            {/* Contact Number */}
                            <div>
                              <label className="block text-sm font-medium text-gray-700">
                                Contact Number
                              </label>
                              <input
                                style={{ background: "var(--secondary)" }}
                                type="tel"
                                placeholder="Enter contact number"
                                value={p.phone}
                                onChange={(e) => handleChange(index, "phone", e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3"
                              />
                            </div>

                            {/* WhatsApp Number */}
                            <div>
                              <label className="block text-sm font-medium text-gray-700">
                                WhatsApp Number
                              </label>
                              <input
                                style={{ background: "var(--secondary)" }}
                                type="tel"
                                placeholder="Enter WhatsApp number"
                                value={p.whatsapp}
                                onChange={(e) => handleChange(index, "whatsapp", e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3"
                              />
                            </div>

                          </div>
                        </div>
                      ))}

                      <button
                        onClick={addPartner}
                        disabled={partners.length >= 2}
                        className={`px-4 py-2 rounded font-medium w-full ${partners.length >= 2
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-indigo-600 text-white"
                          }`}
                      >
                        + Add Partner
                      </button>

                    </div>
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

              <RegisterFromHeader icon1={'icon1'} green={'green'} />



              <main className="px-6 py-6">
                <section className="mb-6">
                  <div className='mt-3'>
                    <h2 className="text-lg font-semibold text-gray-800">Shop Images *</h2>
                    <p className="text-sm text-gray-600">Upload 3-4 high-quality images of your salon</p>
                  </div>

                </section>



                <section>
                  <div className='grid md:grid-cols-4 gap-6'>

                    <label htmlFor='img1' className='bg-[var(--secondary)] h-40 flex items-center justify-center text-4xl cursor-pointer'><BsCardImage className='text-gray-600' />
                      <input className='hidden' type="file" name="" id="img1" />
                    </label>
                    <label htmlFor='img1' className='bg-[var(--secondary)] h-40 flex items-center justify-center text-4xl cursor-pointer'><BsCardImage className='text-gray-600' />
                      <input className='hidden' type="file" name="" id="img1" />
                    </label>
                    <label htmlFor='img1' className='bg-[var(--secondary)] h-40 flex items-center justify-center text-4xl cursor-pointer'><BsCardImage className='text-gray-600' />
                      <input className='hidden' type="file" name="" id="img1" />
                    </label>
                    <label htmlFor='img1' className='bg-[var(--secondary)] h-40 flex items-center justify-center text-4xl cursor-pointer'><BsCardImage className='text-gray-600' />
                      <input className='hidden' type="file" name="" id="img1" />
                    </label>
                  </div>
                </section>

                <section className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Shop Location *</h3>
                  <p className="font-semibold text-gray-800">Help customers find you</p>
                  <div >
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>

                        <label htmlFor="shopadress" className="block text-sm font-medium text-gray-700">Complete Address *</label>
                        <input style={{ background: "var(--secondary)" }}
                          id="shopadress" name="shopadress" type="text" placeholder="Shop No, Building, Street, Area" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                      </div>

                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City *</label>
                        <input style={{ background: "var(--secondary)" }}
                          id="city" name="city" type="text" placeholder="Enter your city name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700">State *</label>
                        <input style={{ background: "var(--secondary)" }}
                          id="state" name="state" type="text" placeholder="Enter your state name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                      </div>
                      <div>
                        <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Pincode *</label>
                        <input style={{ background: "var(--secondary)" }}
                          id="pincode" name="pincode" type="text" placeholder="Enter your pincode number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-0 h-10 p-3" />
                      </div>

                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Set Location on Map</h3>
                    <div className='bg-[var(--secondary)] flex justify-center p-3 mt-2'>
                      <div className='text-center'>
                        <div className='flex justify-center'>
                          <div className='h-10 w-10 rounded-full bg-white text-center'></div>
                        </div>
                        <p className='text-gray-700'>Pin your exact location</p>
                        <p className='text-gray-700'>this helps customers find you easily</p>
                      </div>
                    </div>
                    <button className="border bg-[var(--primary)] w-full py-2 rounded-md text-white font-medium mt-4 cursor-pointer">Open Map & Set Location</button>
                  </div>
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


            <RegisterFromHeader icon1={'icon1'} icon2={'icon1'} green={'green'} green2={'green'} />



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
                  <input className='hidden' type="file" id='documents' />
                  <label htmlFor='documents' className="border-2 border-gray-300 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-400 transition">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                      <span className="text-gray-500 text-xl">📎</span>
                    </div>
                    <p className="text-sm text-gray-600 text-center">
                      Click to upload ID proof <br />
                      <span className="text-xs text-gray-400">PNG, JPG up to 5MB</span>
                    </p>
                  </label>
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
      </form>
    </>
  )
}

export default EarnWith
