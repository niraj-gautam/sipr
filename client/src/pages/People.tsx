import React, { useState } from "react";
import { Users, ChevronDown, ChevronUp } from "lucide-react";

const People = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const people = {
        "Senior Fellow": [
            {
                name: "Durga Bhandari",
                role: "Taxation and Fiscal Policy",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
            },
            {
                name: "Shanta Raj Subedi",
                role: "Fiscal Federalism",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
            },
            {
                name: "Name Required",
                role: "Law",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
            },
            {
                name: "Bhagirath Yogi",
                role: "Politics and Media",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
            },
            {
                name: "Rabin Thapa",
                role: "Agriculture",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
            },
            {
                name: "Name Required",
                role: "Machine Learning and AI",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
            },
        ],
        "Research and Policy Fellow": [
            {
                name: "Ram Narayan Shrestha",
                role: "Migration and Labor Economics",
                image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80",
            },
            {
                name: "Damber Raj Bhatta",
                role: "Tourism",
                image: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80",
            },
            {
                name: "Narendra Regmi",
                role: "Trade, Monetary Economics, Applied Machine Learning",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
            },
            {
                name: "Krishna Sharma",
                role: "Innovation, Migration, Applied Machine Learning",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
            },
            {
                name: "Maheswor Giri",
                role: "Agriculture, Food Security",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
            },
            {
                name: "Suvekshya Gautam",
                role: "Education, Development",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
            },
            {
                name: "Praval Sharma",
                role: "Machine Learning and AI policy",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
            },
            {
                name: "Bishu Giri",
                role: "AI Policy",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
            },
            {
                name: "Indra Giri",
                role: "Digital Economy, Climate",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
            },
            {
                name: "Prashant Bhandari",
                role: "Development Economics",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
            },
            {
                name: "Alisha Bhattrai",
                role: "Health",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
            },
            {
                name: "Sujata Bhandari",
                role: "Human Resources and Business Analytics",
                image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80",
            },
            {
                name: "Susmita Puri",
                role: "Migration, Gender, Governance",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
            },
        ],
        "Graduate Fellows": [
            {
                name: "Adarsha Subedi",
                role: "Development Economics, Sports",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
            },
            {
                name: "Kusharga Karki",
                role: "International Economics",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
            },
            {
                name: "Achala Pokhrel",
                role: "Nutrition",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
            },
        ],
        "Staff & Administration": [
            {
                name: "Bijeta Shrestha",
                role: "Research Program Manager",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
            },
            {
                name: "Priya Puri",
                role: "Tech Operations & Strategy",
                image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80",
            },
            {
                name: "Sarmila Giri",
                role: "Communications & Outreach Lead",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
            },
        ],
    };

    const toggleCategory = (category: string) => {
        setActiveCategory(activeCategory === category ? null : category);
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section - Keep original with shorter text */}
            <div className="relative bg-[#F0EFF4] py-24">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&q=80"
                        alt="Our People"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-['Montserrat'] font-semibold mb-6">
                        Our Scholars & Experts
                    </h1>
                    <p className="text-lg max-w-3xl">
                        SIPR employs interdisciplinary scholars who address
                        policy challenges in developing countries through
                        research and cross-sector collaboration.
                    </p>
                </div>
            </div>

            <section className="pt-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="">
                            <h2 className="text-4xl font-['Montserrat'] font-semibold mb-6 text-[#8c1616]">
                                Key People at SIPR
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                SIPR's scholars include professors and
                                researchers who apply interdisciplinary
                                approaches to tackling some of the most pressing
                                policy challenges in developing countries. Many
                                of our Senior Fellows, Faculty Fellows, and
                                visiting researchers have worked in government
                                agencies or advised policymakers on AI policy,
                                economic governance, and public sector reforms.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our dedicated staff strengthens SIPR's mission
                                by facilitating cutting-edge research, mentoring
                                future policy leaders, and fostering
                                collaboration between academia, government, and
                                industry.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* People Categories */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-6">
                        {Object.entries(people).map(([category, members]) => (
                            <div
                                key={category}
                                className="bg-[#F0EFF4]  overflow-hidden shadow-md"
                            >
                                <button
                                    onClick={() => toggleCategory(category)}
                                    className={`w-full inline-flex items-center px-6 py-3 border-2 border-[#8c1616] hover:bg-[#8c1616] hover:text-white transition-colors font-['Montserrat'] ${
                                        activeCategory === category
                                            ? "bg-[#8c1616] text-white"
                                            : "bg-white"
                                    }`}
                                >
                                    <div className="flex items-center">
                                        <Users className="w-6 h-6 mr-3" />
                                        <span className="text-xl font-['Montserrat'] font-semibold">
                                            {category}
                                        </span>
                                    </div>
                                    {activeCategory === category ? (
                                        <ChevronUp className="w-6 h-6" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6" />
                                    )}
                                </button>

                                {activeCategory === category && (
                                    <div className="p-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {members.map((person, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                                                >
                                                    <div className="h-48 relative">
                                                        <img
                                                            src={person.image}
                                                            alt={person.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="p-4">
                                                        <h3 className="text-lg font-['Montserrat'] font-semibold">
                                                            {person.name}
                                                        </h3>
                                                        <p className="text-[#8c1616] font-['Montserrat'] text-sm">
                                                            {person.role}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default People;
