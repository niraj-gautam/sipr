import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="relative pb-12">
            {/* Banner Image */}
            <div className="relative h-[80vh] min-h-[600px]">
                <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                    alt="Research background"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F1A20]/80 to-[#0F1A20]/50"></div>
            </div>

            {/* Overlapping Card */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white/95 backdrop-blur-sm p-8 md:p-10  shadow-xl max-w-2xl">
                        <h2 className="text-sm md:text-base  text-[#8c1616] mb-2">
                            Welcome to SIPR
                        </h2>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-['Montserrat'] font-semibold text-gray-900 mb-4">
                            AI and Data-Driven Policy Research for a Better
                            Future
                        </h1>
                        {/* <p className="text-md md:text-lg text-gray-700 mb-2">
                            At the Sankhya Institute for Policy and Research
                            (SIPR), we are at the forefront of innovative,
                            data-driven, and AI-enhanced policy insights,
                            dedicated to shaping the future of developing
                            countries. Our work is grounded in nonpartisan
                            research and fosters collaboration with governments,
                            academia, and industry leaders to develop
                            innovative, data-driven policy solutions that drive
                            sustainable development.
                        </p> */}
                        <p className="text-md md:text-lg text-gray-700 mb-8">
                            Join us in transforming policy through AI and data
                            science. Explore SIPR’s mission, research
                            initiatives, and the experts behind our work.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/research"
                                className="inline-flex items-center px-6 py-3 bg-[#8c1616] text-white hover:bg-[#7a1313] transition-colors font-['Montserrat']"
                            >
                                Explore Research
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                to="/about"
                                className="inline-flex items-center px-6 py-3 bg-white text-[#8c1616] border-2 border-[#8c1616] hover:bg-[#8c1616] hover:text-white transition-colors font-['Montserrat']"
                            >
                                More About Us
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
