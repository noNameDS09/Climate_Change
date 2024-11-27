'use client';
import { Domine } from "next/font/google";
import Typewriter from 'typewriter-effect';
import styles from '../app/home.module.css';

const domine = Domine({
    weight: '400',
    subsets: ['latin'],
});

const Hero = () => {
    return (
        <section className="relative flex items-center justify-center h-[100vh] text-white px-0">
            {/* Background image with opacity */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-1] opacity-50"
                style={{
                    backgroundImage: 'url(/Wallpaper/hero.jpg)',
                }}
            ></div>

            <div className="flex flex-col justify-center items-center z-10 text-center max-w-2xl backdrop-blur-sm p-10 pb-14 rounded-3xl">
                <h1 className={`text-4xl font-bold text-gray-200 mb-6 ${domine.className}`}>
                    <Typewriter
                        options={{
                            strings: ['Empower Change', 'Protect Our Planet'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                <p className={`text-lg text-gray-300 mb-8 leading-relaxed w-5/6 text-center ${domine.className}`}>
                    A tool designed to inform, inspire, and ignite action towards a sustainable future. Understand the realities of climate change and how you can make a difference.
                </p>
                <div className="flex justify-center gap-6">
                    <button
                        className={styles.button1}
                        onClick={() => window.location.href = "/explore"}
                        aria-label="Explore Climate Insights"
                    >
                        Explore Climate Insights
                    </button>
                    <button
                        className={styles.button2}
                        onClick={() => window.location.href = "/movement"}
                        aria-label="Join the Movement"
                    >
                        Join the Movement
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
