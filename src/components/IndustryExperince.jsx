import React, { useRef } from 'react'
import { animate, motion } from "framer-motion"

const IndustryExperince = () => {

  const clientCount = useRef(null);
  const projectCount = useRef(null)
  const YearCount = useRef(null)

  const animateClientCount = () => {
    animate(0, 20, {
      duration: 1,
      onUpdate: (v) => clientCount.current.textContent = v.toFixed()
    })
  }


  const animateProjectCount = () => {
    animate(0, 50, {
      duration: 1,
      onUpdate: (v) => projectCount.current.textContent = v.toFixed()
    })
  }


  const animateYearCount = () => {
    animate(0, 3, {
      duration: 2,
      onUpdate: (v) => YearCount.current.textContent = v.toFixed()
    })
  }

  return (
    <section className="max-w-screen-lg items-center justify-between">
      <div className=" px-5 py-24 mx-auto">
        <div className="flex flex-wrap text-center counter">
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7k</h2>
            <p className="leading-relaxed">Clients World Wide</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
            <p className="leading-relaxed">Projects Done</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">10</h2>
            <p className="leading-relaxed">Years Industry Experience</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">4</h2>
            <p className="leading-relaxed">Products</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustryExperince
