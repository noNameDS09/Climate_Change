"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
})

interface menuItem_ {
    Title: string;
    href: string;
    src: string;
    description: string;
}

export default function Navbar({ className }: { className?: string }) {
    const [activeTab, setActiveTab] = useState('home');
    const [active, setActive] = useState<string | null>(null);
    const menuItem: menuItem_[] = [
        {
            Title: "ClimateAction",
            href: "https://climateaction.com",
            src: "/Wallpaper/23.jpg",
            description: "Join the fight against climate change by learning about its impacts and taking action to protect the planet.",
        },
        {
            Title: "ClimateAction",
            href: "https://climateaction.com",
            src: "/Wallpaper/23.jpg",
            description: "Join the fight against climate change by learning about its impacts and taking action to protect the planet.",
        },
        {
            Title: "ClimateAction",
            href: "https://climateaction.com",
            src: "/Wallpaper/23.jpg",
            description: "Join the fight against climate change by learning about its impacts and taking action to protect the planet.",
        },
        {
            Title: "ClimateAction",
            href: "https://climateaction.com",
            src: "/Wallpaper/23.jpg",
            description: "Join the fight against climate change by learning about its impacts and taking action to protect the planet.",
        },
    ];

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div
            className={cn(`fixed top-5 inset-x-0 max-w-5xl mx-auto z-50 opacity-100 backdrop-blur-none rounded-full ${roboto.className}`, className)}
        >
            <Menu setActive={setActive}>
                {/* Profile Image */}
                <Image 
                    src={'/Wallpaper/blog1.jpg'} 
                    alt="Image" 
                    width={50} 
                    height={50} 
                    className="rounded-full aspect-square border-spacing-2 border-x-2 border-y-2 border-x-black border-y-black" 
                />
                
                {/* Menu Items */}
                <div className={`${activeTab === 'home' ? 'border-b-4  border-green-700 text-blue-500 duration-300' : 'text-gray-400'}`}
                    onClick={() => handleTabClick('Home')}
                >
                    <MenuItem setActive={setActive} active={active} item="Home" />
                </div>

                <div
                    className={`${activeTab === 'Reports' ? 'border-b-4  border-green-700 text-blue-500 duration-300' : 'text-gray-400'}`}
                    onClick={() => handleTabClick('Reports')}
                >
                    <HoveredLink href="/reports">
                        <MenuItem setActive={setActive} active={active} item="Reports">
                            <div className="text-sm grid grid-cols-1 gap-0 p-0">
                                See Our Blogs
                            </div>
                        </MenuItem>
                    </HoveredLink>
                </div>

                <div
                    className={`${activeTab === 'ChatBot' ? 'border-b-4  border-green-700 text-blue-500 duration-300' : 'text-gray-400'}`}
                    onClick={() => handleTabClick('ChatBot')}
                >
                    <HoveredLink href='/chatbot'>
                        <MenuItem setActive={setActive} active={active} item="ChatBot" />
                    </HoveredLink>
                </div>

                <div
                    className={`${activeTab === 'Reporter' ? 'border-b-4  border-green-700 text-blue-500 duration-300' : 'text-gray-400'}`}
                    onClick={() => handleTabClick('Reporter')}
                >
                    <HoveredLink href='/reporter'>
                        <MenuItem setActive={setActive} active={active} item="Reporter" />
                    </HoveredLink>
                </div>

            </Menu>
        </div>
    );
}
