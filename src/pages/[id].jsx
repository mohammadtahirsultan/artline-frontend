import { getProjectDetails } from '@/redux/actions/project';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';

const ProjectDetails = () => {
    const dispatch = useDispatch()
    const { project } = useSelector(state => state.project)
    const router = useRouter();
    const { id } = router.query;
    console.log(id);
    useEffect(() => {
        dispatch(getProjectDetails(id))
    }, [])
    console.log(project);
    return (
        <>
            <main id="main">
                {/* ======= Breadcrumbs ======= */}
                <section className="breadcrumbs">
                    <div className="container pt-4">
                        <ol>
                            <li><Link href="/l">Home</Link></li>
                            <li>Project Details</li>
                        </ol>
                        <h2>Portfolio Details</h2>
                    </div>
                </section>{/* End Breadcrumbs */}
                {/* ======= Portfolio Details Section ======= */}
                <section id="portfolio-details" className="portfolio-details">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-8">
                                <div className="portfolio-details-slider swiper">
                                    <div className="swiper-wrapper align-items-center">
                                    <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} showIndicators={false} showStatus={false} showArrows={true}>
                                        <div className="swiper-slide">
                                            <img src={project?.image?.url} alt={project?.title} />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src={project?.image?.url} alt={project?.title} />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src={project?.image?.url} alt={project?.title} />
                                        </div>
                                    </Carousel>
                                    </div>
                                    <div className="swiper-pagination" />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="portfolio-info">
                                    <h3>Project information</h3>
                                    <ul>
                                        <li><strong>Category</strong>: {project?.category}</li>
                                        <li><strong>Title</strong>: {project?.title}</li>
                                        <li><strong>Project date</strong>: {project?.createdAt?.slice(0,10)}</li>
                                        <li><strong>Project URL</strong>: <a href={project?.link}>{project?.link}</a></li>
                                    </ul>
                                </div>
                                <div className="portfolio-description">
                                    <h2>{project?.title}</h2>
                                    <p>
                                    {project?.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* End Portfolio Details Section */}
            </main>{/* End #main */}


        </>
    )
}

export default ProjectDetails