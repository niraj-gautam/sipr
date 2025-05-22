import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { content } from "../../data/content";

const Footer = () => {
    return (
        <footer className="bg-[#8c1616] text-white">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div className="">
                        <h3 className="text-xl font-['Montserrat'] font-semibold mb-4">
                            SIPR
                        </h3>
                        <p className=" text-gray-200">
                            Advancing policy research and fostering
                            evidence-based decision-making for a better
                            tomorrow.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-['Montserrat'] font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 ">
                            <li>
                                <Link
                                    to="/research"
                                    className="hover:text-[#8c1616] transition-colors"
                                >
                                    Research
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/publications"
                                    className="hover:text-[#8c1616] transition-colors"
                                >
                                    Publications
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/events"
                                    className="hover:text-[#8c1616] transition-colors"
                                >
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/news"
                                    className="hover:text-[#8c1616] transition-colors"
                                >
                                    News
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-['Montserrat'] font-semibold mb-4">
                            Contact
                        </h3>
                        <ul className="space-y-2 ">
                            <li className="flex items-center gap-2">
                                <MapPin size={18} />
                                <span>123 Research Avenue, City, Country</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={18} />
                                <span>+1 234 567 8900</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={18} />
                                <span>contact@sipr.org</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-4 mt-6">
                    <div className="relative flex flex-col items-center md:flex-row md:justify-center">
                        <p className="text-sm text-center md:text-left">
                            &copy; {new Date().getFullYear()}{" "}
                            {content.company.registeredName} All rights
                            reserved.
                        </p>
                        <div className="mt-2 self-end md:self-auto md:absolute md:right-0 flex items-center group text-xs text-gray-300 md:pr-2">
                            <p>Crafted by</p>
                            <a
                                href="https://knitbytes.com/"
                                className="text-gray-300 ml-1 underline group-hover:text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                KnitBytes
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
