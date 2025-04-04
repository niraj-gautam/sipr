import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";

import PageTransition from "./components/utils/PageTransition";

// Lazy load page components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Research = lazy(() => import("./pages/Research"));
const Publications = lazy(() => import("./pages/Publications"));
const Events = lazy(() => import("./pages/Events"));
const EventDetails = lazy(() => import("./pages/EventDetails"));
const News = lazy(() => import("./pages/News"));
const Programs = lazy(() => import("./pages/Programs"));
const ProgramDetails = lazy(() => import("./pages/ProgramDetails"));
const People = lazy(() => import("./pages/People"));
const NewsArticle = lazy(() => import("./pages/NewsArticle"));
const Partnerships = lazy(() => import("./pages/Partnerships"));
const Contact = lazy(() => import("./pages/Contact"));
const Search = lazy(() => import("./pages/Search"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <ScrollToTop />
            <Header />
            <main className="flex-grow">
                <AnimatePresence mode="wait">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Suspense fallback={null}>
                                    <PageTransition>
                                        <Home />
                                    </PageTransition>
                                </Suspense>
                            }
                        />
                        <Route
                            path="/about"
                            element={
                                <Suspense fallback={null}>
                                    <PageTransition>
                                        <About />
                                    </PageTransition>
                                </Suspense>
                            }
                        />
                        <Route
                            path="/people"
                            element={
                                <Suspense fallback={null}>
                                    <PageTransition>
                                        <People />
                                    </PageTransition>
                                </Suspense>
                            }
                        />
                        <Route
                            path="/research"
                            element={
                                <Suspense fallback={null}>
                                    <PageTransition>
                                        <Research />
                                    </PageTransition>
                                </Suspense>
                            }
                        />
                        <Route
                            path="/programs"
                            element={
                                <Suspense fallback={null}>
                                    <PageTransition>
                                        <Programs />
                                    </PageTransition>
                                </Suspense>
                            }
                        />
                        <Route
                            path="/programs/:slug"
                            element={
                                <Suspense fallback={null}>
                                    <PageTransition>
                                        <ProgramDetails />
                                    </PageTransition>
                                </Suspense>
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
                                <Suspense fallback={null}>
                                    <PageTransition>
                                        <Events />
                                    </PageTransition>
                                </Suspense>
                            }
                        />
                        <Route
                            path="/events/:id"
                            element={
                                <Suspense fallback={null}>
                                    <PageTransition>
                                        <EventDetails />
                                    </PageTransition>
                                </Suspense>
                            }
                        />
                        <Route
                            path="/news"
                            element={
                                <Suspense fallback={null}>
                                    <PageTransition>
                                        <News />
                                    </PageTransition>
                                </Suspense>
                            }
                        />
                        <Route
                            path="/news/:id"
                            element={
                                <Suspense fallback={null}>
                                    <PageTransition>
                                        <NewsArticle />
                                    </PageTransition>
                                </Suspense>
                            }
                        />
                        <Route
                            path="/partnerships"
                            element={
                                <Suspense fallback={null}>
                                    <PageTransition>
                                        <Partnerships />
                                    </PageTransition>
                                </Suspense>
                            }
                        />
                        <Route
                            path="/contact"
                            element={
                                <Suspense fallback={null}>
                                    <PageTransition>
                                        <Contact />
                                    </PageTransition>
                                </Suspense>
                            }
                        />
                        <Route
                            path="/search"
                            element={
                                <Suspense fallback={null}>
                                    <PageTransition>
                                        <Search />
                                    </PageTransition>
                                </Suspense>
                            }
                        />
                        <Route
                            path="*"
                            element={
                                <Suspense fallback={null}>
                                    <PageTransition>
                                        <NotFound />
                                    </PageTransition>
                                </Suspense>
                            }
                        />
                    </Routes>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
}

export default App;
