"use client";
import { Lora } from "next/font/google";

const play = Lora({
    weight: "400",
    subsets: ["latin"],
})

const page = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className=" w-[50%] ">
                <h1 className={`text-gray-300 text-4xl text-center mt-10 tracking-wide pb-10 pt-14 ${play.className}`}>
                    Weekly Report: Summary of Global Environmental Changes
                </h1>
                <video src="/Videos/vedio.mp4" className="rounded-2xl" loop muted controls autoPlay></video>
            </div>
        </div>
    )
}

export default page
