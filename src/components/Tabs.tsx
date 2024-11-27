'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Roboto_Slab, Bitter, Assistant } from 'next/font/google';


const roboto_slab = Roboto_Slab({
    weight: "300",
    subsets: ["latin"],
})

const bitter = Bitter({
    weight: "400",
    subsets: ["latin-ext"],
})

const assistant = Assistant({
    weight: "300",
    subsets: ["hebrew"],
})


const Tabs = () => {
    const [activeTab, setActiveTab] = useState('science');
    const [documents, setDocuments] = useState<Array<{ _id: string, tab: string, img: string, link: string, title: string, description: string }>>([]);
    const [page, setPage] = useState(1); // Added state to track the current page
    const itemsPerPage = 10; // Set the number of items per page

    let data: Array<{ _id: string, tab: string, img: string, link: string, title: string, description: string }> = [];

    useEffect(() => {
        const fetchDocuments = async () => {
            const response = await fetch('/api/documents');
            data = await response.json();
            setDocuments(data);
        };
        fetchDocuments();
    }, []);

    const tab1 = documents.filter(doc => doc.tab === 'tab1');
    const tab2 = documents.filter(doc => doc.tab === 'tab2');
    const tab3 = documents.filter(doc => doc.tab === 'tab3');
    const tab4 = documents.filter(doc => doc.tab === 'tab4');
    const tab5 = documents.filter(doc => doc.tab === 'tab5');

    const tabContent = {
        science: (
            <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-16 p-20 -mt-5`}>
                {tab1.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((doc) => (
                    <div className="border border-neutral-500 p-4 text-white rounded-xl" key={doc._id}>
                        <div className='flex flex-wrap mt-5'>
                            <Image
                                src={doc.img}
                                alt={doc.description}
                                width={150}
                                height={150}
                                className='ml-10 rounded-xl object-fit'
                            />
                            <h2 className={`w-64 ml-10 mt-2 text-xl font-semibold font-sans text-blue-100 ${bitter.className}`}>{doc.title}</h2>
                        </div>
                        <div className={`flex flex-col p-10 pt-5 text-gray-400 ${assistant.className}`}>
                            <p>{doc.description}</p>
                            <hr />
                            <a
                                href={doc.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-blue-700 text-end mt-4'
                            >
                                View Document
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        ),
        math: (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-16 p-20 -mt-5">
                {tab2.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((doc) => (
                    <div className="border border-neutral-500 p-4 text-white rounded-xl" key={doc._id}>
                        <div className='flex flex-wrap mt-5'>
                            <Image
                                src={doc.img}
                                alt={doc.description}
                                width={150}
                                height={150}
                                className='ml-10 rounded-xl object-fit'
                            />
                            <h2 className={`w-64 ml-10 mt-2 text-xl font-semibold font-sans text-blue-100 ${bitter.className}`}>{doc.title}</h2>
                        </div>
                        <div className={`flex flex-col p-10 pt-5 text-gray-400 ${assistant.className}`}>
                            <p>{doc.description}</p>
                            <hr />
                            <a
                                href={doc.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-blue-700 text-end mt-4'
                            >
                                View Document
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        ),
        history: (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-16 p-20 -mt-5">
                {tab3.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((doc) => (
                    <div className="border border-neutral-500 p-4 text-white rounded-xl" key={doc._id}>
                        <div className='flex flex-wrap mt-5'>
                            <Image
                                src={doc.img}
                                alt={doc.description}
                                width={150}
                                height={150}
                                className='ml-10 rounded-xl object-fit'
                            />
                            <h2 className={`w-64 ml-10 mt-2 text-xl font-semibold font-sans text-blue-100 ${bitter.className}`}>{doc.title}</h2>
                        </div>
                        <div className={`flex flex-col p-10 pt-5 text-gray-400 ${assistant.className}`}>
                            <p>{doc.description}</p>
                            <hr />
                            <a
                                href={doc.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-blue-700 text-end mt-4'
                            >
                                View Document
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        ),
        bio: (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-16 p-20 -mt-5">
                {tab4.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((doc) => (
                    <div className="border border-neutral-500 p-4 text-white rounded-xl" key={doc._id}>
                        <div className='flex flex-wrap mt-5'>
                            <Image
                                src={doc.img}
                                alt={doc.description}
                                width={150}
                                height={150}
                                className='ml-10 rounded-xl object-fit'
                            />
                            <h2 className={`w-64 ml-10 mt-2 text-xl font-semibold font-sans text-blue-100 ${bitter.className}`}>{doc.title}</h2>
                        </div>
                        <div className={`flex flex-col p-10 pt-5 text-gray-400 ${assistant.className}`}>
                            <p>{doc.description}</p>
                            <hr />
                            <a
                                href={doc.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-blue-700 text-end mt-4'
                            >
                                View Document
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        ),
        english: (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-16 p-20 -mt-5">
                {tab5.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((doc) => (
                    <div className="border border-neutral-500 p-4 text-white rounded-xl" key={doc._id}>
                        <div className='flex flex-wrap mt-5'>
                            <Image
                                src={doc.img}
                                alt={doc.description}
                                width={150}
                                height={150}
                                className='ml-10 rounded-xl object-fit'
                            />
                            <h2 className={`w-64 ml-10 mt-2 text-xl font-semibold font-sans text-blue-100 ${bitter.className}`}>{doc.title}</h2>
                        </div>
                        <div className={`flex flex-col p-10 pt-5 text-gray-400 ${assistant.className}`}>
                            <p>{doc.description}</p>
                            <hr />
                            <a
                                href={doc.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-blue-700 text-end mt-4'
                            >
                                View Document
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        ),
    };

    const tabs = ['science', 'math', 'history', 'bio', 'english'];

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        setPage(1); // Reset page to 1 when a new tab is selected
    };

    // Pagination controls
    const totalPages = Math.ceil(tab1.length / itemsPerPage);
    const handleNextPage = () => {setPage(page + 1)};
    const handlePreviousPage = () => {setPage(page - 1)};

    return (
        <div className='bg-black p-4'>
            <div className="flex space-x-4 border-b-2 border-gray-500 pb-2 pt-5 p-10 mb-4 justify-center">
                {tabs.map((tab) => (
                    <div
                        key={tab}
                        className={`cursor-pointer py-2 px-4 hover:text-blue-500 hover:duration-150 ${activeTab === tab ? 'border-b-2 border-blue-500 text-blue-500 duration-300' : 'text-gray-400'} ${roboto_slab.className}`}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </div>
                ))}
            </div>

            <div className="p-4 rounded-md bg-gray-950">
                {tabContent[activeTab]}
                <div className="flex justify-center items-center space-x-4 mt-6 mb-5">
                    <button
                        onClick={handlePreviousPage}
                        disabled={page <= 1}
                        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                    >
                        {"<"}
                    </button>
                    <span className="text-white">{page}</span>
                    <button
                        onClick={handleNextPage}
                        disabled={page >= totalPages}
                        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                    >
                        {">"}
                    </button>
                </div>
            </div>

            {/* Pagination controls */}
        </div>
    );
};

export default Tabs;
