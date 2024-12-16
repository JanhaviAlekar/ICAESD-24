export const Accommodation = () => {
    return (
        <div className="mt-[90px] mb-20">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-[#000080] px-6">List of hotels:</h1>
                {/* h1 */}
                <div className="container mx-auto px-4 py-4">

                    <div className=" px-6 text-[#000080] text-lg">
                        <h1 className="text-2xl font-bold  mb-4">Grand Mehfil</h1>
                        <p className="mb-2">
                            <strong>Address:</strong> Camp Road, Amravati - 444 605
                        </p>
                        <p className="mb-2">
                            <strong>Contact:</strong> +91 721 2666660 | Hotline: 090211 60000
                        </p>
                        <p className="mb-2">
                            <strong>Email:</strong>
                            <a href="mailto:hotelmehfilin@gmail.com" className="text-blue-500 hover:underline">hotelmehfilin@gmail.com</a>
                        </p>
                        <p className="">
                            <strong>Website:</strong>
                            <a href="https://www.mehfilhotels.com" className="text-blue-500 hover:underline">www.mehfilhotels.com</a>
                        </p>
                    </div>

                    <div className="lg:w-2/3  text-base font-medium lg:mx-6 text-[#000080]">
                        <table className="min-w-full border-collapse border border-gray-200 text-center">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border border-gray-200 px-4 py-2 font-bold">Room Type</th>
                                    <th className="border border-gray-200 px-4 py-2 font-bold">Single</th>
                                    <th className="border border-gray-200 px-4 py-2 font-bold">Double</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2">Deluxe Room</td>
                                    <td className="border border-gray-200 px-4 py-2">₹ 4000</td>
                                    <td className="border border-gray-200 px-4 py-2">₹ 4300</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2">Junior Suite</td>
                                    <td className="border border-gray-200 px-4 py-2">₹ 5500</td>
                                    <td className="border border-gray-200 px-4 py-2">₹ 6000</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2">Elite Suite</td>
                                    <td className="border border-gray-200 px-4 py-2">₹ 7499</td>
                                    <td className="border border-gray-200 px-4 py-2">₹ 7499</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2">Extra Person</td>
                                    <td colspan="2" className="border border-gray-200 px-4 py-2">₹ 1000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-2">

                    <div className=" px-6 text-[#000080] text-lg">
                        <h1 className="text-2xl font-bold  mb-4">Hotel Rangoli Pearl</h1>
                        <p className="mb-2">
                            <strong>Address:</strong>Nawathe Stop, Badnera Rd, Amravati, Maharashtra 444607
                        </p>
                        <p className="mb-2">
                            <strong>Contact:</strong> 077678 07309
                        </p>

                    </div>

                    <div className="lg:w-2/3  text-base font-medium lg:mx-6 text-[#000080]">
                        <table>
                            <thead>
                                <tr class="bg-gray-100">
                                    <th class="border border-gray-300 px-4 py-2" rowspan="2">Room Type</th>
                                    <th class="border border-gray-300 px-4 py-2" colspan="2">C.P. (Continental Plan)</th>
                                    <th class="border border-gray-300 px-4 py-2" colspan="2">M.A.P. (Modified American Plan)</th>
                                </tr>
                                <tr class="bg-gray-100">
                                    <th class="border border-gray-300 px-4 py-2">Single</th>
                                    <th class="border border-gray-300 px-4 py-2">Double</th>
                                    <th class="border border-gray-300 px-4 py-2">Single</th>
                                    <th class="border border-gray-300 px-4 py-2">Double</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2">Deluxe</td>
                                    <td class="border border-gray-300 px-4 py-2">₹ 1700/-</td>
                                    <td class="border border-gray-300 px-4 py-2">₹ 2000/-</td>
                                    <td class="border border-gray-300 px-4 py-2">₹ 2508/-</td>
                                    <td class="border border-gray-300 px-4 py-2">₹ 3360/-</td>
                                </tr>
                                <tr class="bg-gray-50">
                                    <td class="border border-gray-300 px-4 py-2">Super Deluxe</td>
                                    <td class="border border-gray-300 px-4 py-2">₹ 2200/-</td>
                                    <td class="border border-gray-300 px-4 py-2">₹ 2500/-</td>
                                    <td class="border border-gray-300 px-4 py-2">₹ 3584/-</td>
                                    <td class="border border-gray-300 px-4 py-2">₹ 3920/-</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2">Executive Class</td>
                                    <td class="border border-gray-300 px-4 py-2">₹ 3200/-</td>
                                    <td class="border border-gray-300 px-4 py-2">₹ 3500/-</td>
                                    <td class="border border-gray-300 px-4 py-2">₹ 4480/-</td>
                                    <td class="border border-gray-300 px-4 py-2">₹ 5040/-</td>
                                </tr>

                                <tr class="bg-gray-50">
                                    <td class="border border-gray-300 px-4 py-2">Couple Suite</td>
                                    <td class="border border-gray-300 px-4 py-2">₹ 4000/-</td>
                                    <td class="border border-gray-300 px-4 py-2">₹ 4000/-</td>
                                    <td class="border border-gray-300 px-4 py-2">-</td>
                                    <td class="border border-gray-300 px-4 py-2">-</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2">Rangoli Suite</td>
                                    <td class="border border-gray-300 px-4 py-2">₹ 5000/-</td>
                                    <td class="border border-gray-300 px-4 py-2">₹ 5000/-</td>
                                    <td class="border border-gray-300 px-4 py-2">-</td>
                                    <td class="border border-gray-300 px-4 py-2">-</td>
                                </tr>
                                <tr class="bg-gray-50">
                                    <td class="border border-gray-300 px-4 py-2">Extra Bed/Person</td>
                                    <td class="border border-gray-300 px-4 py-2">₹ 500/-</td>
                                    <td class="border border-gray-300 px-4 py-2">-</td>
                                    <td class="border border-gray-300 px-4 py-2">-</td>
                                    <td class="border border-gray-300 px-4 py-2">-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="container mx-auto px-4 py-2">

                    <div className=" px-6 text-[#000080] text-lg">
                        <h1 className="text-2xl font-bold  mb-4">Hotel Radhey Inn
                        </h1>
                        <p className="mb-2">
                            <strong>Address:</strong> Railway Station to Bus Station Road, Amravati, Maharashtra 444602
                        </p>
                        <p className="mb-2">
                            <strong>Contact:</strong> 0721 267 1234
                        </p>

                    </div>

                    <div className="lg:w-2/3  text-base font-medium lg:mx-6 text-[#000080]">
                        <table class="min-w-full border-collapse border border-gray-300 text-center">
                            <thead>
                                <tr class="bg-gray-100">
                                    <th class="border border-gray-300 px-4 py-2" rowspan="2">Room Type</th>
                                    <th class="border border-gray-300 px-4 py-2" colspan="1">Single</th>
                                    <th class="border border-gray-300 px-4 py-2" colspan="2">Double</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2 font-semibold">Pearl - Deluxe</td>
                                    <td class="border border-gray-300 px-4 py-2  ">₹ 2000</td>
                                    <td class="border border-gray-300 px-4 py-2  ">₹ 2400</td>
                                </tr>
                                <tr class="bg-gray-50">
                                    <td class="border border-gray-300 px-4 py-2 font-semibold">Ruby - Premium</td>
                                    <td class="border border-gray-300 px-4 py-2  ">₹ 2200</td>
                                    <td class="border border-gray-300 px-4 py-2  ">₹ 2800</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2 font-semibold">Diamond - Regal</td>
                                    <td class="border border-gray-300 px-4 py-2  ">₹ 2600</td>
                                    <td class="border border-gray-300 px-4 py-2  ">₹ 3000</td>
                                </tr>

                                <tr class="bg-gray-50">
                                    <td class="border border-gray-300 px-4 py-2 font-semibold">Radhey - Royal</td>
                                    <td class="border border-gray-300 px-4 py-2  ">₹ 3000</td>
                                    <td class="border border-gray-300 px-4 py-2  ">₹ 3500</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2 font-semibold">Extra Person</td>
                                    <td colspan="2" class="border border-gray-300 px-4 py-2  ">₹ 600</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-4">

                    <div className=" px-6 text-[#000080] text-lg">
                        <h1 className="text-2xl font-bold  mb-4">Hotel Elements</h1>
                        <p className="mb-2">
                            <strong>Address:</strong>  Old Biyani Clg Square Beside Garden Glory Bar, Amravati, Maharashtra 444602
                        </p>
                        <p className="mb-2">
                            <strong>Contact:</strong>  090282 31146
                        </p>
                    </div>

                    <div className="lg:w-2/3  text-base font-medium lg:mx-6 text-[#000080]">
                        <table className="min-w-full border-collapse border border-gray-200 text-center">
                            <tbody>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2">Deluxe Room</td>
                                    <td className="border border-gray-200 px-4 py-2">₹ 2800</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2">Suite Room</td>
                                    <td className="border border-gray-200 px-4 py-2">₹ 3360</td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-4">

                    <div className=" px-6 text-[#000080] text-lg">
                        <h1 className="text-2xl font-bold  mb-4">Hotel Empire Stay</h1>
                        <p className="mb-2">
                            <strong>Address:</strong> 5th Floor, Empire Mall, opposite Samarth High School, Amravati, Maharashtra 444605
                        </p>
                        <p className="mb-2">
                            <strong>Contact:</strong>   095031 80123
                        </p>
                    </div>

                    <div className="lg:w-2/3  text-base font-medium lg:mx-6 text-[#000080]">
                        <table className="min-w-full border-collapse border border-gray-200 text-center">
                            <tbody>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2">Single Room</td>
                                    <td className="border border-gray-200 px-4 py-2">₹ 2500 + TAX</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2">Deluxe Room</td>
                                    <td className="border border-gray-200 px-4 py-2">₹ 3000 + TAX</td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-2">

                    <div className=" px-6 text-[#000080] text-lg">
                        <h1 className="text-2xl font-bold  mb-4">
                            Hotel Shripad
                        </h1>
                        <p className="mb-2">
                            <strong>Address:</strong> Morshi Rd, opposite ITI College, near Indian Oil Petrol Pump, Paranjpe Colony, Amravati, Maharashtra 444602
                        </p>
                        <p className="mb-2">
                            <strong>Contact:</strong> 096738 60000
                        </p>

                    </div>

                    <div className="lg:w-2/3  text-base font-medium lg:mx-6 text-[#000080]">
                        <table class="min-w-full border-collapse border border-gray-300 text-center">

                            <thead>
                                <tr class="bg-gray-200">
                                    <th class="border border-gray-300 px-4 py-2">Room Type</th>
                                    <th class="border border-gray-300 px-4 py-2">Pax</th>
                                    <th class="border border-gray-300 px-4 py-2">Rate</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2">Standard Room</td>
                                    <td class="border border-gray-300 px-4 py-2">Single</td>
                                    <td class="border border-gray-300 px-4 py-2">2000</td>
                                </tr>
                                <tr class="bg-gray-50">
                                    <td class="border border-gray-300 px-4 py-2"></td>
                                    <td class="border border-gray-300 px-4 py-2">Double</td>
                                    <td class="border border-gray-300 px-4 py-2">2150</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2">Deluxe Room</td>
                                    <td class="border border-gray-300 px-4 py-2">Single</td>
                                    <td class="border border-gray-300 px-4 py-2">2100</td>
                                </tr>
                                <tr class="bg-gray-50">
                                    <td class="border border-gray-300 px-4 py-2"></td>
                                    <td class="border border-gray-300 px-4 py-2">Double</td>
                                    <td class="border border-gray-300 px-4 py-2">2250</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2"></td>
                                    <td class="border border-gray-300 px-4 py-2">Triple</td>
                                    <td class="border border-gray-300 px-4 py-2">2400</td>
                                </tr>
                                <tr class="bg-gray-50">
                                    <td class="border border-gray-300 px-4 py-2">Executive Room</td>
                                    <td class="border border-gray-300 px-4 py-2">Single</td>
                                    <td class="border border-gray-300 px-4 py-2">2200</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2"></td>
                                    <td class="border border-gray-300 px-4 py-2">Double</td>
                                    <td class="border border-gray-300 px-4 py-2">2350</td>
                                </tr>
                                <tr class="bg-gray-50">
                                    <td class="border border-gray-300 px-4 py-2"></td>
                                    <td class="border border-gray-300 px-4 py-2">Triple</td>
                                    <td class="border border-gray-300 px-4 py-2">2500</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2"></td>
                                    <td class="border border-gray-300 px-4 py-2">Four</td>
                                    <td class="border border-gray-300 px-4 py-2">2650</td>
                                </tr>
                                <tr class="bg-gray-50">
                                    <td class="border border-gray-300 px-4 py-2">Luxury Room</td>
                                    <td class="border border-gray-300 px-4 py-2">Single</td>
                                    <td class="border border-gray-300 px-4 py-2">2300</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2"></td>
                                    <td class="border border-gray-300 px-4 py-2">Double</td>
                                    <td class="border border-gray-300 px-4 py-2">2450</td>
                                </tr>
                                <tr class="bg-gray-50">
                                    <td class="border border-gray-300 px-4 py-2"></td>
                                    <td class="border border-gray-300 px-4 py-2">Triple</td>
                                    <td class="border border-gray-300 px-4 py-2">2600</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2"></td>
                                    <td class="border border-gray-300 px-4 py-2">Four</td>
                                    <td class="border border-gray-300 px-4 py-2">2750</td>
                                </tr>
                                <tr class="bg-gray-50">
                                    <td class="border border-gray-300 px-4 py-2"></td>
                                    <td class="border border-gray-300 px-4 py-2">Five</td>
                                    <td class="border border-gray-300 px-4 py-2">2900</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2">Executive Suit</td>
                                    <td class="border border-gray-300 px-4 py-2">Single</td>
                                    <td class="border border-gray-300 px-4 py-2">2400</td>
                                </tr>
                                <tr class="bg-gray-50">
                                    <td class="border border-gray-300 px-4 py-2"></td>
                                    <td class="border border-gray-300 px-4 py-2">Double</td>
                                    <td class="border border-gray-300 px-4 py-2">2550</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div >
    );
}