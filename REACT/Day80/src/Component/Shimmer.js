export  function Shimmer() {

    return (

        <div className="max-w-[90%] container mx-auto mt-10">

            {/* Heading Shimmer */}
            <div className="w-60 h-8 bg-gray-300 rounded-md animate-pulse mb-10"></div>

            {/* Full Page Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                {
                    Array(12).fill("").map((_, index) => (

                        <div
                            key={index}
                            className="animate-pulse"
                        >

                            {/* Image */}
                            <div className="w-full h-50 bg-gray-300 rounded-2xl"></div>

                            {/* Restaurant Name */}
                            <div className="h-5 w-[80%] bg-gray-300 rounded-md mt-4"></div>

                            {/* Cuisine */}
                            <div className="h-4 w-[60%] bg-gray-300 rounded-md mt-3"></div>

                            {/* Rating + Delivery */}
                            <div className="flex gap-3 mt-4">

                                <div className="h-4 w-16 bg-gray-300 rounded-md"></div>

                                <div className="h-4 w-20 bg-gray-300 rounded-md"></div>

                            </div>

                            {/* Price */}
                            <div className="h-4 w-24 bg-gray-300 rounded-md mt-3"></div>

                        </div>

                    ))
                }

            </div>

        </div>
    )
}