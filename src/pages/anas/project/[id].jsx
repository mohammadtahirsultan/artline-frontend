import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router';
import { editProject, getProjectDetails } from '@/redux/actions/project'
import Loader from '@/components/Loader'
import Sidebar from '@/admin/Sidebar';

const EditProject = () => {
    const { project, loading } = useSelector((state) => state.project);

    const [title, setTitle] = useState(project?.title)
    const [description, setDescription] = useState(project?.description)
    const [category, setCategory] = useState(project?.category)
    const [link, setLink] = useState(project?.link)
    const [image, setImage] = useState([])

    const router = useRouter();
    const { id } = router.query;

    const dispatch = useDispatch()
    const navigate = (path) => {
        router.push(path);
    };




    const imageUploadChange = (e) => {
        const files = Array.from(e.target.files);

        setImage([]);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImage((old) => [...old, reader.result]);
                }
            };

            reader.readAsDataURL(file);
        });
    };

    const editProjectSubmit = async (e) => {
        e.preventDefault()


        const data = new FormData();
        data.set("title", title)
        data.set("description", description)
        data.set("category", category)
        data.set("link", link)

        image.forEach((image) => {
            data.append("image", image);
        });
        await dispatch(editProject(data, id));

        setTitle("")
        setDescription("")
        setCategory("")
        setLink("")
        setImage("")

        navigate('/anas/projects');
    }

    console.log(project);

    useEffect(() => {
        if (project && project._id !== id) {
            dispatch(getProjectDetails(id));
        } else {
            setTitle(project?.title)
            setDescription(project?.description)
            setCategory(project?.category)
            setLink(project?.link)
            setImage(project?.image)
        }

        dispatch(getProjectDetails(id));
    }, [])
    return (

        <div className='flex'>
            <Sidebar />

            <div className="adProject flex min-h-full w-screen flex-col justify-center px-6 py-8 lg:px-20">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                    <img className="mx-auto h-6 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 className="mt-4 text-center text-2xl font-bold leading-4 tracking-tight">Edit Project </h2>
                </div>

                <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm ">
                    <form onSubmit={editProjectSubmit} className="space-y-1 " encType="multipart/form-data">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium leading-6">Title</label>
                            <div className="mt-1">
                                <input value={title} type="text" name='title' onChange={(e) => setTitle(e.target.value)} autoComplete="title" required className="block w-full text-sm border border-black rounded-lg  bg-gray-50 focus:outline-none p-2" placeholder='Enter Title' />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-medium leading-6">Description</label>
                            <div className="mt-1">
                                <input value={description} name='description' onChange={(e) => setDescription(e.target.value)} type="text" autoComplete="description" required className="block w-full text-sm border border-black rounded-lg  bg-gray-50 focus:outline-none p-2" placeholder='Enter Description' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium leading-6">Category</label>
                            <div className="mt-1">
                                <select
                                    value={category}
                                    name="category"
                                    onChange={(e) => setCategory(e.target.value)}
                                    required
                                    className="block w-full text-sm border border-black rounded-lg bg-gray-50 focus:outline-none p-2"
                                >
                                    <option value="" disabled>Select Category</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Graphics Designing">Graphics Designing</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="link" className="block text-sm font-medium leading-6" autoComplete="link">Link</label>
                            </div>
                            <div className="mt-1">
                                <input value={link} onChange={(e) => setLink(e.target.value)} type="text" name='link' autoComplete="link" className="block w-full text-sm border border-black rounded-lg  bg-gray-50 focus:outline-none p-2" placeholder='Provide Link' />
                            </div>
                        </div>



                        <div className='pb-2'>
                            <label htmlFor="image" className="block text-sm font-medium leading-6">Image</label>
                            <div className="mt-1 pb-1">
                                <input
                                    name="image"
                                    accept="image/*"
                                    required
                                    onChange={imageUploadChange}
                                    className="block w-full text-sm border border-black rounded-lg cursor-pointer  bg-gray-50 focus:outline-none p-4"
                                    type="file"
                                    multiple
                                />
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

export default EditProject