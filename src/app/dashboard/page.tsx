import React from "react";
import { Compare } from "@/components/ui/compare";
import Dashboard from "@/components/Dashboard";

const page = () => {
    return (
        <>
            <Dashboard />
            <div className="flex justify-center items-center">
                <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4 mt-40 max-w-[40%] flex justify-center items-center ">
                    <Compare
                        firstImage="/Compare/clean.jpeg"
                        secondImage="/Compare/notclean.jpeg"
                        firstImageClassName="object-cover object-left-top"
                        secondImageClassname="object-cover object-left-top"
                        className="h-[250px] w-[20vw] md:h-[500px] md:w-[100vw]"
                        slideMode="drag"
                    />
                </div>
            </div>
        </>
    )
}

export default page;

