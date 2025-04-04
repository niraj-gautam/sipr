import React from "react";
import {
    Target,
    Award,
    Globe,
    Database,
    Users,
    BookOpen,
    Briefcase,
    BarChart4,
    Check,
} from "lucide-react";

const About = () => {
    const researchAreas = [
        {
            title: "AI and Public Policy",
            description:
                "Exploring how artificial intelligence can improve governance, economic policy, and social well-being.",
        },
        {
            title: "Economic Development",
            description:
                "Designing evidence-based policies that drive inclusive and sustainable economic growth.",
        },
        {
            title: "Migration and Labor Markets",
            description:
                "Investigating the impacts of migration, returnee entrepreneurship, and labor policies on emerging economies.",
        },
        {
            title: "Tax and Fiscal Policy",
            description:
                "Analyzing taxation, government spending, and financial regulations to enhance economic stability.",
        },
        {
            title: "Agriculture and Food Security",
            description:
                "Using data science to improve agricultural policies and ensure food security.",
        },
        {
            title: "Trade and Globalization",
            description:
                "Examining trade policies and international economic relations to strengthen emerging markets.",
        },
    ];

    const partnerships = [
        {
            icon: Briefcase,
            title: "Government agencies",
            description:
                "to provide data-driven policy recommendations and impact assessments.",
        },
        {
            icon: BookOpen,
            title: "Academic institutions",
            description:
                "to advance interdisciplinary research and train the next generation of policy leaders.",
        },
        {
            icon: BarChart4,
            title: "Industry leaders",
            description:
                "to integrate technology and evidence-based strategies into decision-making.",
        },
        {
            icon: Globe,
            title: "International organizations and NGOs",
            description:
                "to support global policy discussions and cross-border initiatives.",
        },
    ];

    const strengths = [
        {
            title: "Nonpartisan",
            description:
                "Committed to unbiased, research-based policy solutions.",
        },
        {
            title: "Innovation-driven",
            description:
                "Leveraging AI and advanced analytics to enhance policymaking.",
        },
        {
            title: "Impact-focused",
            description:
                "Ensuring our research translates into practical, sustainable change.",
        },
        {
            title: "Globally connected",
            description:
                "Engaging with international policymakers, scholars, and institutions.",
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-[#F0EFF4] py-24">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                        alt="Research at SIPR"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-['Montserrat'] font-semibold mb-6">
                        Sankhya Institute for Policy & Research
                    </h1>
                    <p className="text-lg  max-w-3xl">
                        Discover who we are, what we do, and how we bring value
                        to our customers. Learn more about our mission, values,
                        and the passion that drives us forward.
                    </p>
                </div>
            </div>

            {/* Description Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-16">
                            <h2 className="text-4xl font-['Montserrat'] font-semibold mb-6 text-[#8c1616]">
                                More About Us
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                At{" "}
                                <strong>
                                    Sankhya Institute for Policy and Research
                                    (SIPR)
                                </strong>
                                , we believe that data-driven insights and
                                AI-powered research are the keys to solving
                                complex policy challenges in developing
                                countries. As a center for innovation, we are
                                committed to producing high-impact, nonpartisan
                                research that informs decision-making and
                                fosters sustainable development.
                            </p>
                        </div>

                        <div className="mb-16">
                            <h2 className="text-4xl font-['Montserrat'] font-semibold mb-6 text-[#8c1616]">
                                Our Mission
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                To drive data-driven policy research by
                                providing evidence-based insights that address
                                governance, economic, and social challenges in
                                developing countries. By leveraging technology
                                and interdisciplinary research, we aim to shape
                                forward-thinking, ethical, and impactful
                                policies that enhance public well-being and
                                sustainable development.
                            </p>
                        </div>

                        <div className="mb-16">
                            <h2 className="text-4xl font-['Montserrat'] font-semibold mb-6 text-[#8c1616]">
                                Our Vision
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We envision a future where{" "}
                                <strong>data-driven decision-making</strong>{" "}
                                forms the foundation of policy frameworks,
                                leading to equitable, transparent, and
                                innovative governance models that improve lives
                                across societies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-['Montserrat'] font-semibold mb-6 text-[#8c1616]">
                            What We Do
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-12">
                            SIPR bridges the gap between cutting-edge
                            technology, policy research, and real-world
                            applications , working at the intersection of AI,
                            economics, governance, and social progress. Our
                            research spans a wide range of disciplines,
                            including:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {researchAreas.map((area, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6      shadow-sm"
                                >
                                    <h3 className="text-xl font-semibold mb-3 text-[#8c1616]">
                                        {area.title}
                                    </h3>
                                    <p className="text-gray-700">
                                        {area.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Work Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-['Montserrat'] font-semibold mb-6 text-[#8c1616]">
                            How We Work
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-12">
                            At SIPR, we prioritize collaboration, transparency,
                            and innovation in all aspects of our research and
                            policymaking. We work closely with:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {partnerships.map((partner, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <partner.icon className="h-6 w-6 text-[#8c1616]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            <strong>{partner.title}</strong>
                                        </h3>
                                        <p className="text-gray-700">
                                            {partner.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-['Montserrat'] font-semibold mb-6 text-[#8c1616]">
                            Our Approach
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            Our methodology combines quantitative and
                            qualitative research , machine learning, and policy
                            modeling to deliver data-backed, actionable insights
                            We emphasize:
                        </p>

                        <div className="space-y-4 mb-16">
                            <div className="flex items-center">
                                <Check className="h-6 w-6 text-[#8c1616] mr-4" />
                                <p className="text-lg text-gray-700">
                                    <strong>
                                        AI and big data applications
                                    </strong>{" "}
                                    in policy analysis.
                                </p>
                            </div>
                            <div className="flex items-center">
                                <Check className="h-6 w-6 text-[#8c1616] mr-4" />
                                <p className="text-lg text-gray-700">
                                    <strong>Evidence-based solutions</strong> to
                                    address socio-economic challenges.
                                </p>
                            </div>
                            <div className="flex items-center">
                                <Check className="h-6 w-6 text-[#8c1616] mr-4" />
                                <p className="text-lg text-gray-700">
                                    <strong>Global best practices</strong>{" "}
                                    tailored for local and regional contexts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why SIPR Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-['Montserrat'] font-semibold mb-6 text-[#8c1616]">
                            Why SIPR?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {strengths.map((strength, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <Check className="h-6 w-6 text-[#8c1616]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">
                                            We are{" "}
                                            <strong>{strength.title}</strong>
                                        </h3>
                                        <p className="text-gray-700">
                                            {strength.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-lg text-gray-700 leading-relaxed text-center font-normal">
                            Join us in shaping the future of governance,
                            economic development, and social policy through data
                            science.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
