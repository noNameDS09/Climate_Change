'use client'; // For Next.js client-side rendering (if you're using Next.js)
import styles from "../app/home.module.css"
import { useRouter } from 'next/router'; // Optional: For navigation to a different page (e.g., Carbon Footprint Calculator page)

const CarbonFootprintSection = () => {
    // const router = useRouter();

    const handleCalculateClick = () => {
        // Navigate to a carbon footprint calculator page or open a modal (customize as per your needs)
        // router.push('/calculator'); // Example: Navigating to "/calculator" page
    };

    return (
        <section className="py-16 pt-20 text-center"
            style={{backgroundColor:"rgba(10, 10, 11, 0.98)"}}
        >
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-green-300 mb-4">
                    What is Carbon Footprint?
                </h2>
                <p className="text-lg text-gray-400 mb-8">
                    A carbon footprint refers to the total amount of greenhouse gases (GHGs) emitted into the atmosphere as a result of human activities, primarily from the burning of fossil fuels. Every action, from driving a car to using electricity, contributes to the carbon footprint. Understanding your carbon footprint can help you make more sustainable choices and reduce your environmental impact.
                </p>
                <button
                    onClick={handleCalculateClick}
                    className={`bg-green-600 text-white py-3 px-6 text-lg rounded-lg hover:bg-blue-700 transition ${styles.button2}`}
                >
                    Calculate Your Carbon Footprint
                </button>
            </div>
        </section>
    );
};

export default CarbonFootprintSection;
