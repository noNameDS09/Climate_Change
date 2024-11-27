import Image from "next/image"

const Dashboard = () => {
    return (
        <>
            <div className="mt-32 text-white text-center text-2xl font-sans tracking-widest">
                DASHBOARD
            </div>
            <div className="flex flex-wrap justify-center mt-20">
                <div className="grid grid-cols-1 content-center w-[70%] rounded-md p-4">
                    <div className="w-full p-10 grid grid-cols-2 content-center">
                        <div className="bg-red-400 justify-self-start">
                            <Image src={'/Wallpaper/10.jpg'} alt="1" width={150} height={150} />
                        </div>
                        <div className="justify-self-center place-content-center p-5">
                            <h2 className="text-gray-300 text-lg text-center">Carbon Footprint</h2>
                            <p className="text-pretty text-gray-400">A carbon footprint is a calculation of the total amount of greenhouse gases (GHGs) released into the atmosphere by an activity, product, company, or country. It is usually reported in tonnes of emissions per unit of comparison.</p>
                        </div>
                    </div>
                    <div className="w-full p-10 grid grid-cols-2 content-center">
                        <div className="justify-self-center place-content-center p-5">
                            <h2 className="text-gray-300 text-lg text-center">Carbon Footprint</h2>
                            <p className="text-pretty text-gray-400">A carbon footprint is a calculation of the total amount of greenhouse gases (GHGs) released into the atmosphere by an activity, product, company, or country. It is usually reported in tonnes of emissions per unit of comparison.</p>
                        </div>
                        <div className="bg-red-400 justify-self-end">
                            <Image src={'/Wallpaper/10.jpg'} alt="1" width={150} height={150} />
                        </div>
                    </div>
                    <div className="w-full p-10 grid grid-cols-2 content-center">
                        <div className="bg-red-400 justify-self-start">
                            <Image src={'/Wallpaper/10.jpg'} alt="1" width={150} height={150} />
                        </div>
                        <div className="justify-self-center place-content-center p-5">
                            <h2 className="text-gray-300 text-lg text-center">Carbon Footprint</h2>
                            <p className="text-pretty text-gray-400">A carbon footprint is a calculation of the total amount of greenhouse gases (GHGs) released into the atmosphere by an activity, product, company, or country. It is usually reported in tonnes of emissions per unit of comparison.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
