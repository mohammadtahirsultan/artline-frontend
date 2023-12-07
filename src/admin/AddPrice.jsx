import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router';
import Sidebar from './Sidebar'
import { addProject } from '@/redux/actions/project'
import Loader from '@/components/Loader'
import { addPrice } from '@/redux/actions/price';

const AddPricingForm = () => {

    const [packageName, setPackageName] = useState("")
    const [price, setPrice] = useState("")

    const dispatch = useDispatch()
    const router = useRouter();
    const navigate = (path) => {
        router.push(path);
    };

    const { loading } = useSelector(state => state.price)


    const addPriceSubmit = async (e) => {
        e.preventDefault()

        await dispatch(addPrice(packageName, price))

        navigate('/anas/pricing');
    }


    return (

        <div className='flex'>
            <Sidebar />

            <div className="adProject flex min-h-full w-screen flex-col justify-center px-6 py-8 lg:px-20">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                    <img className="mx-auto h-6 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 className="mt-4 text-center text-2xl font-bold leading-4 tracking-tight">Add Price Package</h2>
                </div>

                <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm ">
                    <form onSubmit={addPriceSubmit} className="space-y-1 " encType="multipart/form-data">
                        <div>
                            <label htmlFor="packageName" className="block text-sm font-medium leading-6">Package Name</label>
                            <div className="mt-1">
                                <select
                                    value={packageName}
                                    onChange={(e) => setPackageName(e.target.value)}
                                    className="block w-full text-sm border border-black rounded-lg bg-gray-50 focus:outline-none p-2"
                                    required
                                >
                                    <option value="">Select Package</option>
                                    <option value="Web-Development">Web Development</option>
                                    <option value="Graphics-Designing">Graphics Designing</option>
                                    <option value="Digital-Marketing">Digital Marketing</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="price" className="block text-sm font-medium leading-6">Package Price</label>
                            <div className="mt-1">
                                <input value={price} name='price' onChange={(e) => setPrice(e.target.value)} type="text" autoComplete="price" required className="block w-full text-sm border border-black rounded-lg  bg-gray-50 focus:outline-none p-2" placeholder='Enter Price in Dollar' />
                            </div>
                        </div>


                        <div>
                            {
                                loading ? <Loader /> : <button type="submit" className="flex w-full justify-center rounded-md bg-black text-white px-3 py-2 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offappend-2 focus-visible:outline-gray-900">Create</button>
                            }
                        </div>
                    </form>


                </div>
            </div>
        </div>

    )
}

export default AddPricingForm