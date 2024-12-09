export const Accommodation = () => {
    return (
        <div className="mt-[90px] mb-20">
            <div class="container mx-auto px-4">
                <div class="container mx-auto px-4 py-8">
                    <h1 class="text-2xl font-bold text-[#000080] px-6">List of hotels:</h1>
                    <div class=" p-6 text-[#000080] text-lg">
                        <h1 class="text-2xl font-bold  mb-4">Grand Mehfil</h1>
                        <p class="mb-2">
                            <strong>Address:</strong> Camp Road, Amravati - 444 605
                        </p>
                        <p class="mb-2">
                            <strong>Contact:</strong> +91 721 2666660 | Hotline: 090211 60000
                        </p>
                        <p class="mb-2">
                            <strong>Email:</strong>
                            <a href="mailto:hotelmehfilin@gmail.com" class="text-blue-500 hover:underline">hotelmehfilin@gmail.com</a>
                        </p>
                        <p class="">
                            <strong>Website:</strong>
                            <a href="https://www.mehfilhotels.com" class="text-blue-500 hover:underline">www.mehfilhotels.com</a>
                        </p>
                    </div>
                </div>

                <div class="lg:w-2/3  text-base font-medium lg:mx-6 text-[#000080]">
                    <table class="min-w-full border-collapse border border-gray-200 text-center">
                        <thead class="bg-gray-100">
                            <tr>
                                <th class="border border-gray-200 px-4 py-2 font-bold">Room Type</th>
                                <th class="border border-gray-200 px-4 py-2 font-bold">Single</th>
                                <th class="border border-gray-200 px-4 py-2 font-bold">Double</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border border-gray-200 px-4 py-2">Deluxe Room</td>
                                <td class="border border-gray-200 px-4 py-2">₹ 4000</td>
                                <td class="border border-gray-200 px-4 py-2">₹ 4300</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-200 px-4 py-2">Junior Suite</td>
                                <td class="border border-gray-200 px-4 py-2">₹ 5500</td>
                                <td class="border border-gray-200 px-4 py-2">₹ 6000</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-200 px-4 py-2">Elite Suite</td>
                                <td class="border border-gray-200 px-4 py-2">₹ 7499</td>
                                <td class="border border-gray-200 px-4 py-2">₹ 7499</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-200 px-4 py-2">Extra Person</td>
                                <td colspan="2" class="border border-gray-200 px-4 py-2">₹ 1000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div >
    );
}