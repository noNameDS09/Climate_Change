"use client";
import { Domine, Antic_Slab } from "next/font/google";

const domine = Domine({
    weight: '400',
    subsets: ['latin'],
})

const anticSlab = Antic_Slab({
    weight: '400',
    subsets: ['latin'],
})
const page = () => {
    return (
        <>
            <div className="text-white p-10 bg-zinc-900 h-[100vh] absolute">
                <h1 className={`text-center text-3xl mt-32 text-gray-300 ${domine.className}`}>
                    Join the Movement: Take Action for a Sustainable Future
                </h1>
                <h2 className={`text-center text-2xl mt-5 text-gray-300 ${domine.className}`}>
                    The Climate Crisis Demands Collective Action.
                </h2>
                <div className="p-28 pt-5">

                    <p className={`mt-5 text-pretty text-lg text-gray-300 tracking-wider font-extralight ${anticSlab.className}`}>
                        Climate change is one of the most pressing challenges of our time, and the fight to protect our planet requires the involvement of everyone. Join the Movement today to become part of a global effort aimed at mitigating the effects of climate change and building a more sustainable world. Whether you're reducing your carbon footprint, advocating for policy changes, or simply spreading awareness, your participation can make a difference.
                    </p>
                    <h2 className={`text-center text-2xl mt-8 text-gray-300 ${domine.className}`}>
                        How You Can Make an Impact:
                    </h2>
                    <ul className={`mt-5 text-pretty text-lg text-gray-300 tracking-wider font-extralight ${anticSlab.className}`}>
                        <li>
                            Reduce Your Carbon Footprint: Start with small changes like using energy-efficient appliances, reducing waste, and driving less.
                        </li>
                        <li>
                            Support Renewable Energy: Advocate for and support policies that promote clean energy solutions like solar and wind power.
                        </li>
                        <li>
                            Educate and Inspire Others: Share information about climate change and inspire others to take action in their own lives.
                        </li>
                    </ul>
                    <h2 className={`text-center text-2xl p-40 pt-20 pb-0 text-gray-300 ${domine.className}`}>
                        Together, we can create the change we need. Join the Movement and be part of the solution for a better, more sustainable future.
                    </h2>
                </div>
            </div>
        </>
    )
}

export default page
