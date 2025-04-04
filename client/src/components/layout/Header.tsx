import React, { useState, useEffect } from "react";
import { Menu, Search, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const navigation = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Research", href: "/research" },
        { name: "Programs", href: "/programs" },
        { name: "News", href: "/news" },
        // { name: "Publications", href: "/publications" },
        { name: "Events", href: "/events" },
        { name: "Giving", href: "/partnerships" },
        { name: "Contact", href: "/contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
    }, [location]);

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            setIsSearchOpen(false);
            setSearchQuery("");
        }
    };

    return (
        <header
            className={`sticky top-0 z-50 bg-white transition-shadow duration-300 py-2 ${
                isScrolled ? "shadow-md" : ""
            }`}
        >
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 overflow-hidden">
                    {/* Logo with Institute Name */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center">
                            <img
                                src="/logo-white-bg.png"
                                className="h-24 w-auto object-contain"
                                alt="SIPR Logo"
                            />
                            <div className=" pl-3 border-l border-gray-300 hidden sm:block">
                                <div className="text-[#8c1616] font-semibold text-lg leading-tight">
                                    Sankhya Institute
                                </div>
                                <div className="text-gray-600 text-base leading-tight">
                                    for Policy and Research
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center">
                        <div className="flex items-center space-x-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`px-3 py-2 text-sm uppercase tracking-wide transition-colors font-semibold ${
                                        isActive(item.href)
                                            ? "text-[#8c1616]"
                                            : "text-gray-600 hover:text-[#8c1616]"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="ml-4 text-gray-600 hover:text-[#8c1616] transition-colors p-2"
                            aria-label="Toggle search"
                        >
                            <Search size={18} />
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 hover:text-[#8c1616] transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Search Overlay */}
                {isSearchOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 border-t">
                        <form
                            onSubmit={handleSearch}
                            className="max-w-2xl mx-auto"
                        >
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                    placeholder="Search..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8c1616] focus:border-transparent rounded"
                                />
                                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            </div>
                        </form>
                    </div>
                )}

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md">
                        <div className="pt-2 pb-4 space-y-0 border-t">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`block px-4 py-3 text-sm border-b border-gray-100 ${
                                        isActive(item.href)
                                            ? "text-[#8c1616] font-medium bg-gray-50"
                                            : "text-gray-700 hover:text-[#8c1616] hover:bg-gray-50"
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <form
                                onSubmit={handleSearch}
                                className="px-4 py-3 border-b border-gray-100"
                            >
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) =>
                                            setSearchQuery(e.target.value)
                                        }
                                        placeholder="Search..."
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8c1616] focus:border-transparent rounded"
                                    />
                                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
