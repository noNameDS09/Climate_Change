"use client"
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Roboto, Montserrat } from "next/font/google";
import styles from "../app/home.module.css"

const montserrat = Montserrat({
    weight: "400",
    subsets: ["latin"],
})

const data = [
    {
        title: "Climate Change Blogs: Insights and Updates",
        content: (
            <div className={`bg-zinc-800 rounded-xl p-4 tracking-wide ${montserrat.className}`} >
                <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Our climate change blog section is designed to keep you informed on the latest environmental news, scientific discoveries, and in-depth discussions about the planet's changing climate. Here, we highlight the most pressing environmental issues and share expert opinions to help you understand the urgent need for climate action.
                </p>
                <h2 className="text-neutral-400 dark:text-neutral-200 text-lg font-semibold mb-4">Blog Topics</h2>
                <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Our blog covers a wide range of topics related to climate change, including global warming, sustainable practices, renewable energy, deforestation, and much more. Each blog post provides valuable insights, backed by research, to help our readers stay up-to-date with environmental trends and challenges.
                </p>
                <h2 className="text-neutral-400 dark:text-neutral-200 text-lg font-semibold mb-4">Why Read Our Blogs?</h2>
                <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    By reading our blogs, you gain access to well-researched articles, opinion pieces, interviews with environmental experts, and real-time updates on climate events around the world. Our goal is to educate, inspire, and drive change through thoughtful and engaging content.
                </p>
                <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    The blogs also offer practical tips on how individuals can contribute to combating climate change through small yet impactful actions. We aim to empower our readers with the knowledge to make more sustainable choices in their everyday lives.
                </p>
                <h2 className="text-neutral-400 dark:text-neutral-200 text-lg font-semibold mb-4">How to Stay Updated</h2>
                <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    To stay updated on the latest posts, simply subscribe to our newsletter or follow our social media channels. Each blog is crafted to provide readers with clear, concise, and actionable information, making it easy to stay informed on the rapidly changing climate crisis.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src='/Wallpaper/blog1.jpg'
                        alt="Blog Post on Climate Action"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                        src='/Wallpaper/blog2.jpg'
                        alt="Sustainable Living Tips"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
                <h2 className="text-neutral-400 dark:text-neutral-200 text-lg font-semibold mb-4">Impact of Our Blog on Climate Awareness</h2>
                <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Through this blog, we aim to foster a community of environmentally conscious individuals who are not only informed but also inspired to take action. By discussing critical issues and exploring sustainable solutions, we hope to spark meaningful change at both individual and global levels.
                </p>
                <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    With every blog post, we challenge our readers to rethink their role in the fight against climate change and offer practical steps they can take to minimize their environmental footprint. Whether it’s reducing waste, supporting green businesses, or advocating for policy change, the impact of knowledge can lead to collective action.
                </p>
            </div>
        )
    },
    {
        title: "Chatbot Conversation Example",
        content: (
            <div className={` flex flex-col gap-y-2 items-center  bg-zinc-800 rounded-xl p-4 tracking-wide ${montserrat.className}`}>
                <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Welcome to our AI-powered chatbot! In this conversation, the chatbot helps users with general inquiries and provides responses to various queries.
                </p>
                <div className="flex flex-col gap-y-4 bg-green-700/[0.8] p-10 rounded-3xl w-fit">
                    <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-[65%]">
                        <p className="text-white/[0.6] text-sm font-normal">
                            Chatbot: How can I assist you today?
                        </p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg shadow-lg max-w-[65%] ml-auto">
                        <p className="text-neutral-400 dark:text-neutral-200 text-sm font-normal">
                            User: What is carbon footprint? 
                        </p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-[65%]">
                        <p className="text-white/[0.6] text-sm font-normal">
                            Chatbot: A carbon footprint is the total amount of greenhouse gases, particularly carbon dioxide, emitted into the atmosphere due to human activities, such as transportation, energy consumption, and manufacturing processes.
                        </p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg shadow-lg ml-auto">
                        <p className="text-neutral-400 dark:text-neutral-200 text-sm font-normal">
                            User: How should i reduce it?
                        </p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-[65%]">
                        <p className="text-white/[0.6] text-sm font-normal">
                            Chatbot: Reduce your carbon footprint by using renewable energy, driving less, conserving resources, recycling, eating plant-based foods, and reducing waste.
                        </p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg shadow-lg ml-auto">
                        <p className="text-neutral-400 dark:text-neutral-200 text-sm font-normal">
                            User: Thanks for your help!
                        </p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-[65%]">
                        <p className="text-white/[0.6] text-sm font-normal">
                            Chatbot: You're welcome! Let me know if you have any other questions. Have a great day!
                        </p>
                    </div>
                </div>
                <button
                    className={`mt-3 w-[50%] ${styles.button3}`}
                    onClick={() => window.location.href = "/chatbot"}
                    aria-label="ChatBot"
                >
                    Try ChatBot
                </button>
            </div>
        )
    },
    {
        title: "3D Model Reporter for Climate Change Awareness",
        content: (
            <div className={`bg-zinc-800 rounded-xl p-4 tracking-wide ${montserrat.className}`}>
                <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Meet our virtual reporter, a custom-made 3D model designed using Blender. This reporter has been integrated into our website to provide insightful information on climate change, educate the public, and raise awareness about the environmental challenges we face. Using cutting-edge technology, the reporter brings important data to life in an interactive and engaging way.
                </p>
                <h2 className="text-neutral-400 dark:text-neutral-200 text-lg font-semibold mb-4">About the 3D Model</h2>
                <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    The 3D model was created in Blender, a powerful open-source 3D creation suite. It features a fully animated character with realistic facial expressions and gestures, allowing it to interact with users in a more human-like manner. The model is integrated directly into the website using WebGL and Three.js, making it easily accessible to visitors.
                </p>
                <h2 className="text-neutral-400 dark:text-neutral-200 text-lg font-semibold mb-4">The Role of the Reporter</h2>
                <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    The reporter’s primary goal is to provide real-time updates and important facts related to the changing climate of our planet. This includes data about global warming, deforestation, melting ice caps, and the rising levels of greenhouse gases. Through engaging video content and educational dialogues, the 3D model helps users understand the complexities of climate change in a relatable and easy-to-understand manner.
                </p>
                <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Visitors can interact with the model, ask questions about environmental issues, and receive informative responses that help raise awareness about the need for climate action. The reporter also offers actionable steps for individuals to reduce their carbon footprint and contribute to the protection of the environment.
                </p>
                <h2 className="text-neutral-400 dark:text-neutral-200 text-lg font-semibold mb-4">How It Works</h2>
                <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    The reporter speaks in a natural and engaging tone, using pre-recorded audio clips or AI-generated speech to respond to user queries. As users interact with the model, it provides both visual and auditory information, allowing for an immersive learning experience. Additionally, the model can be customized to deliver personalized information based on location, time of year, and specific environmental concerns relevant to the user.
                </p>
                <div className="flex items-center justify-center text-center">
                    <video src="/Videos/vedio.mp4" autoPlay muted controls className="rounded-xl" width={400}></video>
                </div>
                <h2 className="text-neutral-400 dark:text-neutral-200 text-lg font-semibold mb-4">Impact on Climate Education</h2>
                <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    By combining state-of-the-art 3D modeling with real-time data, this reporter serves as a tool for educating people about the importance of taking immediate action on climate change. It also encourages viewers to reflect on how their own behavior impacts the environment and provides suggestions on how to be more eco-friendly.
                </p>
                <p className="text-neutral-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    The goal of this initiative is not only to inform but also to empower people, giving them the knowledge and tools they need to participate in global efforts to combat climate change. With the 3D reporter, we hope to inspire a more conscious, responsible, and active community.
                </p>
            </div>
        )
    },
];


export default function TimelineDemo() {
    return (
        <div className="w-full pt-0">
            <Timeline data={data} />
        </div >
    );
}
