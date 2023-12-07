import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux'
import { deleteProject, getAllProjects } from '@/redux/actions/project';
import Loader from '@/components/Loader';
import { getAllPrices } from '@/redux/actions/price';

const AdminPricing = () => {

    const dispatch = useDispatch()
    const { loading, error, pricings, message } = useSelector(state => state.price)


    useEffect(() => {
        if (error) {
            dispatch({ type: "clearError" })
        }
        if (message) {
            dispatch({ type: "clearMessage" })
        }

        dispatch(getAllPrices())
    }, [error, message, dispatch])
    return (
        <div className='flex '>
            <Sidebar />

            <section className="body-font flex-grow w-screen">
                <div className=" px-1 py-10 mx-auto">
                    <button className="flex padd text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded">
                        <Link href={"/anas/addpricing"} className='text-white pl-4'>Add New Price Package</Link>
                    </button>
                    <div className="flex flex-col text-center w-full mb-8">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2">Pricing</h1>
                    </div>

                    <div className="lg:px-2 w-full overflow-hidden bg-green-400">
                        <table className="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-sm md:text-lg  rounded-tl rounded-bl">Package</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-sm md:text-lg  rounded-tl rounded-bl">Price</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-sm md:text-lg ">Edit</th>
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    loading ? <div className='loader flex h-full w-screen justify-center mt-20'><Loader /></div> : <>
                                        {
                                            pricings && pricings.map((price) => (

                                                <tr key={price._id}>
                                                    <td className="px-4 py-3">{price.packageName}</td>
                                                    <td className="px-4 py-3">{price.price}</td>
                                                    <td className="px-4 py-3 text-lg ">
                                                        <button className='bg-black hover:bg-gray-700 text-white w-full py-1 rounded-md'>
                                                            <Link href={`/anas/price/${price._id}`} className='text-white'>Edit</Link>
                                                        </button>
                                                    </td>


                                                </tr>
                                            ))
                                        }

                                    </>
                                }



                            </tbody>
                        </table>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default AdminPricing