'use client';
import { useState, KeyboardEvent, useEffect } from 'react';
import { Roboto } from 'next/font/google';
import Typewriter from 'typewriter-effect';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

interface Message {
    text: string;
    sender: 'user' | 'bot';
}

const Home = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState<string>('');
    const [arrow, setArrow] = useState(false);

    const handleSendMessage = async () => {
        if (userInput.trim()) {
            setMessages([...messages, { text: userInput, sender: 'user' }]);

            // Call the backend API to process the prompt
            const response = await fetch(`/api/python?prompt=${encodeURIComponent(userInput)}`);
            const botResponse = await response.text();

            setMessages((prevMessages) => [
                ...prevMessages,
                { text: botResponse, sender: 'bot' },
            ]);

            setUserInput('');
        }
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="flex flex-col gap-y-5 justify-center items-center h-[90vh] mt-24 mb-20"
            style={{ backgroundColor: 'rgba(10, 10, 11, 0)' }}
        >
            <div className="flex flex-col justify-center text-center items-center w-[70rem] gap-y-3">
                <h1 className={`text-zinc-300 text-2xl ${roboto.className}`}>
                    Introducing our Climate Change Awareness Chatbot
                </h1>
                <p className='text-zinc-400 w-[50rem]'>
                    Your assistant for staying informed on global climate change. Get real-time insights, answers, and guidance on climate impacts, solutions, and ways to act for a sustainable future.
                </p>
            </div>
            <div className="w-full max-w-lg bg-emerald-800 rounded-lg shadow-lg p-4 flex flex-col h-4/5">
                <div className='text-center text-zinc-400 text-xl mt-52'> 
                    <Typewriter
                        options={{
                            strings: ['Ask Me Anything', 'What is Carbon Footprint?', 'What is Carbon Emission?', 'How should I reduce my carbon footprint?'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <div className="flex-grow overflow-y-auto space-y-4 px-4">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`p-3 rounded-lg max-w-[75%] w-fit ${msg.sender === 'user'
                                ? 'bg-green-400/[0.6] ml-auto text-right'
                                : 'bg-gray-400 mr-auto text-left'
                                }`}
                        >
                            <span>{msg.text}</span>
                        </div>
                    ))}
                </div>
                <div className="flex items-center mt-4 space-x-4 px-4">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="Type a message..."
                        className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                    />
                    <button
                        onMouseEnter={() => { setArrow(true); }}
                        onMouseLeave={() => { setArrow(false); }}
                        onClick={handleSendMessage}
                        className={`px-4 py-2 w-18 min-w-18 text-white rounded-md focus:outline-none ${arrow === true ? 'hover:bg-green-600 duration-300' : 'bg-green-500'}`}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
