import React from 'react'

const Hompage = () => {
   return (
        <div className="container mx-auto margin pt-16 px-4">
            <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                <div className="w-full px-4 py-5 rounded-lg shadow-sm">
                    <div className="text-sm font-medium truncate">
                        Total users
                    </div>
                    <div className="mt-4 text-3xl font-semibold">
                        12,00
                    </div>
                </div>
                <div className="w-full px-4 py-5 mt-4  rounded-lg shadow-sm">
                    <div className="text-sm font-medium truncate">
                        Total Profit
                    </div>
                    <div className="mt-4 text-3xl font-semibold">
                        $ 450k
                    </div>
                </div>
                <div className="w-full px-4 py-5 mt-4 rounded-lg shadow-sm">
                    <div className="text-sm font-medium truncate">
                        Total Orders
                    </div>
                    <div className="mt-1 text-3xl font-semibold">
                        20k
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hompage