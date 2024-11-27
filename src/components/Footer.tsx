"use client"
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"; // Import social icons from react-icons

const Footer = () => {
    return (
        <footer className=" text-gray-300/[0.9] py-10  mt-0 border-t-2 border-0  border-zinc-500 "
            style={{ backgroundColor: 'rgba(10, 10, 11, 0.98)' }}
        >
            <div className="container mx-auto px-6 md:px-12">
                {/* Footer content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* About Section */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">About Us</h4>
                        <p className="text-gray-400 text-sm">
                            We raise awareness about climate <br /> 
                            change and inspire action for a <br /> 
                            sustainable future
                        </p>
                    </div>

                    {/* Links Section */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                        <ul className="text-gray-400 text-sm">
                            <li ><p className="hover:text-blue-500">Home</p></li>
                            <li ><p className="hover:text-blue-500">About</p></li>
                            <li ><p className="hover:text-blue-500">Services</p></li>
                            <li ><p className="hover:text-blue-500">Contact</p></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Contact</h4>
                        <ul className="text-gray-400 text-sm">
                            <li>Email: <p className="hover:text-blue-500">shivampatil2023.it@mmcoe.edu.in</p></li>
                            <li>Phone: <p className="hover:text-blue-500">+91 81779 18140</p></li>
                            <li>MMCOE, Pune</li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div className="flex justify-center items-center space-x-4 w-[70%]">
                        <div className="flex space-x-6">
                            <h4 className="text-xl font-semibold mb-4 align-middle">Follow Us</h4>
                            <p className="text-gray-400 hover:text-blue-500" onClick={() => { window.open('https://chatgpt.com') }}>
                                <FaFacebook size={24} />
                            </p>
                            <p className="text-gray-400 hover:text-blue-500" onClick={() => { window.open('https://chatgpt.com') }}>
                                <FaTwitter size={24} />
                            </p>
                            <p className="text-gray-400 hover:text-blue-500" onClick={() => { window.open('https://chatgpt.com') }}>
                                <FaInstagram size={24} />
                            </p>
                            <p className="text-gray-400 hover:text-blue-500" onClick={() => { window.open('https://chatgpt.com') }}>
                                <FaLinkedin size={24} />
                            </p>
                            <p className="text-gray-400 hover:text-blue-500" onClick={() => { window.open('https://chatgpt.com') }}>
                                <FaGithub size={24} />
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer bottom */}
                <div className="mt-10 border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
                    <p>© 2024 Dev Deities. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
