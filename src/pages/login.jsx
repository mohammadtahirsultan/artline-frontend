import Loader from '@/components/Loader'
import { loadUser, loginUser } from '@/redux/actions/user'
import { isAuthenticated } from '@/utils/auth'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const LoginForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const router = useRouter()
    const navigate = router.push
    const { loading } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const formSubmit = (e) => {
        e.preventDefault()

        if (!isEmailValid(email)) {
            alert('Invalid Email Format');
            return;
        }

        dispatch(loginUser(email, password))
        setEmail("")
        setPassword("")
        // navigate("/anas")
    }


    useEffect(() => {

        dispatch(loadUser())

    }, [dispatch])
    

    useEffect(() => {
        // Redirect to login if the user is not authenticated
        if (isAuthenticated()) {
            router.push('/anas');
        }
    }, [router]);
    return (
        <>
            <div className="adProject login w-screen flex-col justify-center px-6 py-8 lg:px-20">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                    <img className="mx-auto h-6 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 className="mt-4 text-center text-2xl font-bold leading-4 tracking-tight">Artline Login  </h2>
                </div>

                <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm ">
                    <form onSubmit={formSubmit} className="space-y-1 ">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium leading-6">Email</label>
                            <div className="mt-1">
                                <input value={email} type="text" name='email' onChange={(e) => setEmail(e.target.value)} required className="block w-full text-sm border border-black rounded-lg  bg-gray-50 focus:outline-none p-2" placeholder='Enter Email' />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-medium leading-6">Password</label>
                            <div className="mt-1">
                                <input value={password} name='password' onChange={(e) => setPassword(e.target.value)} type="password" required className="block w-full text-sm border border-black rounded-lg  bg-gray-50 focus:outline-none p-2" placeholder='Enter Password' />
                            </div>
                        </div>
                        <div>
                            {
                                loading ? <Loader /> : <button type="submit" className="flex w-full justify-center rounded-md bg-black text-white px-3 py-2 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offappend-2 focus-visible:outline-gray-900">Login</button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}



export default LoginForm