export function Shimmer2() {

    return (

        <div className="max-w-[60%] mx-auto mt-10">

            {/* Search Bar */}
            <div className="w-full h-16 bg-gray-300 rounded-2xl animate-pulse mb-10"></div>

            {/* Veg / Non Veg Buttons */}
            <div className="flex gap-5 mb-10">

                <div className="w-28 h-12 bg-gray-300 rounded-full animate-pulse"></div>

                <div className="w-32 h-12 bg-gray-300 rounded-full animate-pulse"></div>

            </div>

            {/* Menu Cards */}
            {
                Array(6).fill("").map((_, index) => (

                    <div
                        key={index}
                        className="flex justify-between items-center border-b border-gray-300 py-8 animate-pulse"
                    >

                        {/* Left Content */}
                        <div className="w-[70%]">

                            {/* Title */}
                            <div className="h-6 w-[80%] bg-gray-300 rounded-md mb-4"></div>

                            {/* Price */}
                            <div className="h-5 w-24 bg-gray-300 rounded-md mb-4"></div>

                            {/* Rating */}
                            <div className="h-4 w-20 bg-gray-300 rounded-md mb-4"></div>

                            {/* Description */}
                            <div className="h-4 w-[90%] bg-gray-300 rounded-md mb-3"></div>

                            <div className="h-4 w-[70%] bg-gray-300 rounded-md"></div>

                        </div>

                        {/* Right Side */}
                        <div className="flex flex-col items-center">

                            {/* Image */}
                            <div className="w-40 h-36 bg-gray-300 rounded-2xl"></div>

                            {/* Add Button */}
                            <div className="w-28 h-10 bg-gray-300 rounded-xl mt-4"></div>

                        </div>

                    </div>

                ))
            }

        </div>
    )
}