import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, GraduationCap } from "lucide-react";

const Programs = () => {
    const focalAreas = [
        {
            title: "Migration",
            description:
                "Research on migration patterns, policies, and their socioeconomic impacts.",
            slug: "migration",
        },
        {
            title: "Agriculture",
            description:
                "Studies on agricultural policies, sustainability, and rural development.",
            slug: "agriculture",
        },
        {
            title: "AI Policy",
            description:
                "Analysis of artificial intelligence governance and regulatory frameworks.",
            slug: "ai-policy",
        },
        {
            title: "Innovation and Technology",
            description:
                "Research on technological advancement and innovation policy.",
            slug: "innovation-and-technology",
        },
        {
            title: "Digital Economy",
            description:
                "Studies on digital transformation and its economic implications.",
            slug: "digital-economy",
        },
        {
            title: "Regulation and Competition",
            description:
                "Analysis of market regulation and competition policies.",
            slug: "regulation-and-competition",
        },
        {
            title: "Taxes and Public Spending",
            description:
                "Research on fiscal policy and public finance management.",
            slug: "taxes-and-public-spending",
        },
        {
            title: "Development",
            description:
                "Studies on economic development and poverty reduction strategies.",
            slug: "development",
        },
        {
            title: "Politics and Media",
            description:
                "Analysis of political communication and media policy.",
            slug: "politics-and-media",
        },
    ];

    const programs = [
        {
            title: "Undergraduate Program",
            description:
                "Engage in research projects and hands-on policy work.",
            slug: "undergraduate",
            details:
                "Our undergraduate program offers students the opportunity to work directly with senior researchers.",
        },
        {
            title: "Graduate Program",
            description:
                "Support for graduate students conducting policy-related research.",
            slug: "graduate",
            details:
                "Graduate fellows receive funding and mentorship to pursue advanced policy research.",
        },
        {
            title: "Visiting Program",
            description:
                "Opportunities for scholars and professionals to contribute to SIPR initiatives.",
            slug: "visiting",
            details:
                "Join our community of visiting scholars and contribute to cutting-edge policy research.",
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-[#F0EFF4] py-24">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
                        alt="Programs"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-['Montserrat'] font-semibold mb-6">
                        Programs
                    </h1>
                    <p className="text-lg max-w-3xl">
                        SIPR offers a broad range of research programs to drive
                        research on critical policy issues and nurture the next
                        generation of policy scholars and leaders.
                    </p>
                </div>
            </div>

            {/* Focal Areas */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-['Montserrat'] font-semibold mb-12">
                        Focal Areas
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {focalAreas.map((area, index) => (
                            <Link
                                to={`/programs/${area.slug}`}
                                key={index}
                                className="flex flex-col p-6 bg-[#F0EFF4]  hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-start space-x-3 mb-4">
                                    <CheckCircle2 className="w-6 h-6 text-[#8c1616] flex-shrink-0" />
                                    <h3 className="font-['Montserrat'] font-semibold text-lg">
                                        {area.title}
                                    </h3>
                                </div>
                                <p className=" text-gray-600 mb-4 ml-9">
                                    {area.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center">
                        <Link
                            to="/research"
                            className="inline-flex items-center px-6 py-3 bg-[#8c1616] text-white  hover:bg-[#7a1313] transition-colors font-['Montserrat']"
                        >
                            Explore Our Research
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Programs */}
            <section className="py-16 bg-[#F0EFF4]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-['Montserrat'] font-semibold mb-12">
                        Programs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {programs.map((program, index) => (
                            <div
                                key={index}
                                className="bg-white p-6  shadow-md hover:shadow-lg transition-shadow flex flex-col"
                            >
                                <div className="flex items-start space-x-3 mb-4">
                                    <GraduationCap className="w-6 h-6 text-[#8c1616] flex-shrink-0" />
                                    <h3 className="text-xl font-['Montserrat'] font-semibold">
                                        {program.title}
                                    </h3>
                                </div>
                                <p className=" text-gray-600 mb-6 ml-9 flex-grow">
                                    {program.description}
                                </p>
                                <div className="mt-auto ml-9">
                                    <Link
                                        to={`/programs/${program.slug}`}
                                        className="inline-flex items-center text-[#8c1616] hover:text-[#7a1313] font-['Montserrat']"
                                    >
                                        Learn More{" "}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Programs;
