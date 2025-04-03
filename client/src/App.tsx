import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";
import LoadingOverlay from "./components/utils/LoadingOverlay";
import PageTransition from "./components/utils/PageTransition";
import Programs from "./pages/Programs";
import ProgramDetails from "./pages/ProgramDetails";

// Lazy load page components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Research = lazy(() => import("./pages/Research"));
const Publications = lazy(() => import("./pages/Publications"));
const Events = lazy(() => import("./pages/Events"));
const EventDetails = lazy(() => import("./pages/EventDetails"));
const News = lazy(() => import("./pages/News"));
const NewsArticle = lazy(() => import("./pages/NewsArticle"));
const Partnerships = lazy(() => import("./pages/Partnerships"));
const Contact = lazy(() => import("./pages/Contact"));
const Search = lazy(() => import("./pages/Search"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
    return (
        <Suspense fallback={<LoadingOverlay />}>
            <div className="min-h-screen flex flex-col">
                <ScrollToTop />
                <Header />
                <main className="flex-grow">
                    <AnimatePresence mode="wait">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <PageTransition>
                                        <Home />
                                    </PageTransition>
                                }
                            />
                            <Route
                                path="/about"
                                element={
                                    <PageTransition>
                                        <About />
                                    </PageTransition>
                                }
                            />
                            <Route
                                path="/research"
                                element={
                                    <PageTransition>
                                        <Research />
                                    </PageTransition>
                                }
                            />
                            <Route
                                path="/programs"
                                element={
                                    <PageTransition>
                                        <Programs />
                                    </PageTransition>
                                }
                            />
                            <Route
                                path="/programs/:slug"
                                element={
                                    <PageTransition>
                                        <ProgramDetails />
                                    </PageTransition>
                                }
                            />

                            {/* <Route
                                path="/publications"
                                element={
                                    <PageTransition>
                                        <Publications />
                                    </PageTransition>
                                }
                            /> */}
                            <Route
                                path="/events"
                                element={
                                    <PageTransition>
                                        <Events />
                                    </PageTransition>
                                }
                            />
                            <Route
                                path="/events/:id"
                                element={
                                    <PageTransition>
                                        <EventDetails />
                                    </PageTransition>
                                }
                            />
                            <Route
                                path="/news"
                                element={
                                    <PageTransition>
                                        <News />
                                    </PageTransition>
                                }
                            />
                            <Route
                                path="/news/:id"
                                element={
                                    <PageTransition>
                                        <NewsArticle />
                                    </PageTransition>
                                }
                            />
                            <Route
                                path="/partnerships"
                                element={
                                    <PageTransition>
                                        <Partnerships />
                                    </PageTransition>
                                }
                            />
                            <Route
                                path="/contact"
                                element={
                                    <PageTransition>
                                        <Contact />
                                    </PageTransition>
                                }
                            />
                            <Route
                                path="/search"
                                element={
                                    <PageTransition>
                                        <Search />
                                    </PageTransition>
                                }
                            />
                            <Route
                                path="*"
                                element={
                                    <PageTransition>
                                        <NotFound />
                                    </PageTransition>
                                }
                            />
                        </Routes>
                    </AnimatePresence>
                </main>
                <Footer />
            </div>
        </Suspense>
    );
}

export default App;
