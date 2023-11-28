import { Assignment, BorderColor, Category, Chat, Home, Language, People } from '@mui/icons-material';
import Link from 'next/link';
const Sidebar = () => {

    return (

        <>
            <div className="flex flex-col h-screen p-3 shadow w-60">
                <div className="space-y-3">
                    <div className="flex items-center m-4">
                        <h2 className="text-xl font-bold">Dashboard</h2>
                    </div>
                    <div className="flex-1">
                        <ul className="admin-sidebar pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <Link
                                    href="/anas"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <Home className='h-6 w-6' />
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link
                                    href="/anas/projects"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <Assignment className='h-6 w-6' />
                                    <span>Projects</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >

                                    <BorderColor className='h-6 w-6' />

                                    <span>Blogs</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >

                                    <Category className='h-6 w-6' />

                                    <span>Categories</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >

                                    <People className='h-6 w-6' />

                                    <span>Users</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >

                                    <Chat className='h-6 w-6' />


                                    <span>Testimonials</span>
                                </Link>
                            </li>


                            <li className="rounded-sm">
                                <Link
                                    href="/"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <Language className='h-6 w-6' />

                                    <span>Back to Website</span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </>




    );
}

export default Sidebar