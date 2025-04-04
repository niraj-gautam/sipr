import { useParams, Link } from "react-router-dom";
import {
    ArrowLeft,
    Calendar,
    Users,
    GraduationCap,
    FileText,
} from "lucide-react";

const ProgramDetails = () => {
    const { slug } = useParams();

    const programs = {
        undergraduate: {
            title: "Undergraduate Fellowship Program",
            description:
                "Launch your policy research career with hands-on experience.",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
            content: `The SIPR Undergraduate Fellowship Program provides talented undergraduate students with the opportunity to engage in meaningful policy research and gain valuable experience in the field.

Program Features:
- Direct mentorship from senior researchers
- Hands-on research experience
- Policy writing workshops
- Networking opportunities
- Stipend and research support

Fellows will work on ongoing research projects and develop their own research initiatives under guidance.`,
            requirements: [
                "Current undergraduate enrollment",
                "Strong academic record",
                "Interest in policy research",
                "Research or writing experience",
            ],
        },
    };

    const programData = programs[slug];

    if (!programData) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-['Montserrat'] font-semibold mb-4">
                        Program Not Found
                    </h2>
                    <Link
                        to="/programs"
                        className="text-[#8c1616] hover:text-[#7a1313]"
                    >
                        Return to Programs
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-96">
                <img
                    src={programData.image}
                    alt={programData.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
                        <Link
                            to="/programs"
                            className="inline-flex items-center text-white hover:text-gray-200 mb-6"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Programs
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-['Montserrat'] font-semibold">
                            {programData.title}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="prose max-w-none">
                            <p className="text-lg text-gray-600 mb-8">
                                {programData.description}
                            </p>
                            <div className=" text-gray-700 whitespace-pre-line mb-8">
                                {programData.content}
                            </div>

                            {programData.requirements && (
                                <>
                                    <h2 className="text-2xl font-['Montserrat'] font-semibold mb-6">
                                        Requirements
                                    </h2>
                                    <ul className="space-y-2">
                                        {programData.requirements.map(
                                            (req, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center"
                                                >
                                                    <GraduationCap className="w-5 h-5 text-[#8c1616] mr-3" />
                                                    <span className="">
                                                        {req}
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </>
                            )}

                            {programData.opportunities && (
                                <>
                                    <h2 className="text-2xl font-['Montserrat'] font-semibold mb-6">
                                        Opportunities
                                    </h2>
                                    <ul className="space-y-2">
                                        {programData.opportunities.map(
                                            (opp, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center"
                                                >
                                                    <Users className="w-5 h-5 text-[#8c1616] mr-3" />
                                                    <span className="font-['Baskerville']">
                                                        {opp}
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-[#F0EFF4] p-6  sticky top-8">
                            <h2 className="text-xl font-['Montserrat'] font-semibold mb-6">
                                Quick Links
                            </h2>
                            <div className="space-y-4">
                                <Link
                                    to="/contact"
                                    className="block px-4 py-2 bg-[#8c1616] text-white  hover:bg-[#7a1313] transition-colors text-center font-['Montserrat']"
                                >
                                    Apply Now
                                </Link>
                                <Link
                                    to="/publications"
                                    className="flex items-center text-gray-700 hover:text-[#8c1616] transition-colors font-['Montserrat']"
                                >
                                    <FileText className="w-5 h-5 mr-3" />
                                    Related Publications
                                </Link>
                                <Link
                                    to="/events"
                                    className="flex items-center text-gray-700 hover:text-[#8c1616] transition-colors font-['Montserrat']"
                                >
                                    <Calendar className="w-5 h-5 mr-3" />
                                    Upcoming Events
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramDetails;
