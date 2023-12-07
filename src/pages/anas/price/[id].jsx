import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router';
import { editProject, getProjectDetails } from '@/redux/actions/project'
import Loader from '@/components/Loader'
import Sidebar from '@/admin/Sidebar';
import { editPrice, getPriceDetails } from '@/redux/actions/price';

const EditPrice = () => {
    const { pricing, loading } = useSelector((state) => state.price);

    console.log("main hoon prcing", pricing);
    const [packageName, setPackageName] = useState(pricing?.packageName)
    const [newPrice, setNewPrice] = useState(pricing?.price)

    const router = useRouter();
    const { id } = router.query;
    const dispatch = useDispatch()
    const navigate = (path) => {
        router.push(path);
    };


    const editPriceSubmit = async (e) => {
        e.preventDefault()

        await dispatch(editPrice(newPrice, packageName, id));

        navigate('/anas/pricing');
    }

    useEffect(() => {
        dispatch(getPriceDetails(id))
        setPackageName(pricing?.packageName)
        setNewPrice(pricing?.price)
    }, [])
    return (

        <div className='flex'>
            <Sidebar />

            <div className="adProject flex min-h-full w-screen flex-col justify-center px-6 py-8 lg:px-20">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                    <img className="mx-auto h-6 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Artline" />
                    <h2 className="mt-4 text-center text-2xl font-bold leading-4 tracking-tight">Edit Price Package </h2>
                </div>

                <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm ">
                    <form onSubmit={editPriceSubmit} className="space-y-1 " >
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
                                <input value={newPrice} name='price' onChange={(e) => setNewPrice(e.target.value)} type="text" autoComplete="price" required className="block w-full text-sm border border-black rounded-lg  bg-gray-50 focus:outline-none p-2" placeholder='Enter Price in Dollar' />
                            </div>
                        </div>

                        <div>
                            {
                                loading ? <Loader /> : <button type="submit" className="flex w-full justify-center rounded-md bg-black text-white px-3 py-2 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offappend-2 focus-visible:outline-gray-900">Update</button>
                            }
                        </div>
                    </form>


                </div>
            </div>
        </div>

    )
}

export default EditPrice