import { useSelector } from "react-redux";

export default function Checkout() {

    const data = useSelector((state) => state.Slice1.items);

    // Total Price
    const total = data.reduce((acc, item) => {
        return acc + (item.price / 100) * item.quantity;
    }, 0);

    return (
        <>

            {/* HEADER */}
            <header className="bg-white border-b-gray-200 shadow py-4">
                <div className="max-w-[80%] mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <svg
  width="50"
  height="50"
  viewBox="0 0 61 61"
  xmlns="http://www.w3.org/2000/svg"
>

  <path
    fill="#FF5200"
    d="M.32 30.5c0-12.966 0-19.446 3.498-23.868a16.086 16.086 0 0 1 2.634-2.634C10.868.5 17.354.5 30.32.5s19.446 0 23.868 3.498c.978.774 1.86 1.656 2.634 2.634C60.32 11.048 60.32 17.534 60.32 30.5s0 19.446-3.498 23.868a16.086 16.086 0 0 1-2.634 2.634C49.772 60.5 43.286 60.5 30.32 60.5s-19.446 0-23.868-3.498a16.086 16.086 0 0 1-2.634-2.634C.32 49.952.32 43.466.32 30.5Z"
  />

  <path
    fill="#fff"
    fillRule="evenodd"
    d="M32.317 24.065v-6.216a.735.735 0 0 0-.732-.732.735.735 0 0 0-.732.732v7.302c0 .414.336.744.744.744h.714c10.374 0 11.454.54 10.806 2.73-.03.108-.066.21-.102.324-.006.024-.012.048-.018.066-2.724 8.214-10.092 18.492-12.27 21.432a.764.764 0 0 1-1.23 0c-1.314-1.776-4.53-6.24-7.464-11.304-.198-.462-.294-1.542 2.964-1.542h3.984c.222 0 .402.18.402.402v3.216c0 .384.282.738.666.768a.73.73 0 0 0 .582-.216.701.701 0 0 0 .216-.516v-4.362a.76.76 0 0 0-.756-.756h-8.052c-1.404 0-2.256-1.2-2.814-2.292-1.752-3.672-3.006-7.296-3.006-10.152 0-7.314 5.832-13.896 13.884-13.896 7.17 0 12.6 5.214 13.704 11.52.006.054.048.294.054.342.288 3.096-7.788 2.742-11.184 2.76a.357.357 0 0 1-.36-.36v.006Z"
  />

</svg>
                        <h1 className="font-bold text-2xl">SECURE CHECKOUT</h1></div>

                    <div className="flex gap-10 font-semibold">
                        <p>Help</p>
                        <p>Sign In</p>
                    </div>

                </div>

            </header>


            {/* MAIN SECTION */}
            <div className="bg-gray-100 min-h-screen py-10">

                <div className="max-w-[80%] mx-auto flex gap-10">

                    {/* LEFT SECTION */}
                    <div className="w-[65%]">

                        <div className="bg-white p-6 rounded-md shadow">

                            <h1 className="text-2xl font-bold mb-5">Cart Items</h1>

                            {
                                data.map((item) => {
                                    return (<div
                                            key={item.id}
                                            className="flex justify-between items-center border-b py-5"
                                        >

                                            {/* LEFT */}
                                            <div className="flex gap-5">

                                                <img
                                                    className="w-28 rounded-md"
                                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                                                />

                                                <div>

                                                    <h2 className="font-bold text-lg">
                                                        {item.name}
                                                    </h2>

                                                    <p className="text-gray-500 mt-2">
                                                        Quantity : {item.quantity}
                                                    </p>

                                                </div>

                                            </div>


                                            {/* RIGHT */}
                                            <div>

                                                <h1 className="font-bold text-lg">
                                                    ₹ {(item.price / 100) * item.quantity}
                                                </h1>

                                            </div>

                                        </div>

                                    )

                                })
                            }

                        </div>

                    </div>


                    {/* RIGHT SECTION */}
                    <div className="w-[35%]">

                        <div className="bg-white p-6 rounded-md shadow sticky top-5">

                            <h1 className="text-2xl font-bold mb-5">
                                Bill Details
                            </h1>

                            <div className="flex justify-between mb-3">
                                <p>Item Total</p>
                                <p>₹ {total}</p>
                            </div>

                            <div className="flex justify-between mb-3">
                                <p>Delivery Fee</p>
                                <p>₹ 45</p>
                            </div>

                            <div className="flex justify-between mb-5">
                                <p>GST & Charges</p>
                                <p>₹ 20</p>
                            </div>

                            <hr />

                            <div className="flex justify-between mt-5 font-bold text-xl">
                                <p>TO PAY</p>
                                <p>₹ {total + 45 + 20}</p>
                            </div>

                            <button className="bg-orange-500 text-white w-full py-3 rounded-md mt-6 font-bold cursor-pointer">
                                Proceed To Pay
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}