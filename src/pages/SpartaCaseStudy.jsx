import React from 'react';
import { Link } from 'react-router-dom';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const SpartaCaseStudy = () => {
    const heroRef = useRevealOnScroll();
    const metadataRef = useRevealOnScroll({ threshold: 0.1 });
    const challengeRef = useRevealOnScroll({ threshold: 0.1 });
    const solutionRef = useRevealOnScroll({ threshold: 0.1 });
    const designSystemRef = useRevealOnScroll({ threshold: 0.1 });
    const resultsRef = useRevealOnScroll({ threshold: 0.1 });

    return (
        <div className="bg-background-dark text-slate-100 font-sans selection:bg-primary selection:text-white overflow-x-hidden min-h-screen">
            {/* Sticky Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-white/5 transition-all duration-300">
                <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 text-white group cursor-pointer">
                        <div className="p-1.5 rounded bg-white/10 group-hover:bg-primary transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                        </div>
                        <span className="text-base font-bold tracking-tight">Kevin Jordi</span>
                    </Link>
                    <Link to="/" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/5 transition-all text-sm font-semibold text-white group">
                        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        <span>Back to Work</span>
                    </Link>
                </div>
            </nav>

            {/* Main Content Wrapper */}
            <main className="relative pt-32 pb-20">
                {/* Ambient Background Gradient */}
                <div className="absolute top-0 left-0 w-full h-[800px] editorial-gradient pointer-events-none z-0"></div>

                <div className="max-w-[1024px] mx-auto px-6 relative z-10 flex flex-col gap-24">

                    {/* Hero Section */}
                    <header ref={heroRef} className="flex flex-col gap-12 pt-10 reveal-on-scroll">
                        <div className="flex flex-col gap-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 w-fit">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-teal shadow-[0_0_8px_rgba(45,212,191,0.8)]"></span>
                                <span className="text-xs font-bold uppercase tracking-wider text-accent-teal">Cybersecurity</span>
                            </div>
                            <h1 className="font-serif-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-medium text-white tracking-tight">
                                Sparta — Rearchitecting vulnerability reporting at scale.
                            </h1>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-t border-white/10 pt-8">
                            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-xl">
                                Product Lead / Systems Design
                            </p>
                            <span className="text-slate-500 font-mono text-sm">2023 — Present</span>
                        </div>
                    </header>

                    {/* Metadata Grid */}
                    <section ref={metadataRef} className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden reveal-on-scroll">
                        <div className="bg-background-dark p-8 flex flex-col gap-2 group hover:bg-white/5 transition-colors">
                            <span className="text-slate-500 text-sm font-mono uppercase tracking-widest">Role</span>
                            <span className="text-xl font-semibold text-white">Product Lead</span>
                        </div>
                        <div className="bg-background-dark p-8 flex flex-col gap-2 group hover:bg-white/5 transition-colors">
                            <span className="text-slate-500 text-sm font-mono uppercase tracking-widest">Timeline</span>
                            <span className="text-xl font-semibold text-white">8 Weeks</span>
                        </div>
                        <div className="bg-background-dark p-8 flex flex-col gap-2 group hover:bg-white/5 transition-colors">
                            <span className="text-slate-500 text-sm font-mono uppercase tracking-widest">Impact</span>
                            <span className="text-xl font-semibold text-white">System Architecture</span>
                        </div>
                    </section>

                    {/* The Challenge */}
                    <section ref={challengeRef} className="grid grid-cols-1 md:grid-cols-12 gap-12 py-10 items-start reveal-on-scroll">
                        <div className="md:col-span-4 sticky top-32">
                            <h2 className="font-serif-display text-4xl md:text-5xl text-white mb-4">The<br />Challenge</h2>
                            <div className="h-1 w-12 bg-primary"></div>
                        </div>
                        <div className="md:col-span-8 flex flex-col gap-8 text-lg md:text-xl leading-relaxed text-slate-300 font-light">
                            <p>
                                Vulnerability reporting workflows were fragmented across seven different legacy tools, creating significant friction for security analysts. Analysts were spending more time aggregating data than analyzing threats.
                            </p>
                            <p>
                                The goal was to unify these streams into a single, cohesive dashboard that prioritized critical threats without overwhelming the user. We needed to reduce cognitive load while increasing the density of actionable information.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="p-6 rounded-lg bg-neutral-surface border border-white/5">
                                    <span className="text-red-400 mb-3 text-3xl block">!</span>
                                    <h3 className="text-white font-bold mb-1">High Friction</h3>
                                    <p className="text-sm text-slate-500">7+ tools required to close one ticket.</p>
                                </div>
                                <div className="p-6 rounded-lg bg-neutral-surface border border-white/5">
                                    <span className="text-orange-400 mb-3 text-3xl block">:(</span>
                                    <h3 className="text-white font-bold mb-1">Fatigue</h3>
                                    <p className="text-sm text-slate-500">High cognitive load led to missed alerts.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Solution Section */}
                    <section ref={solutionRef} className="flex flex-col gap-12 py-10 reveal-on-scroll">
                        <div className="flex flex-col gap-4 max-w-2xl">
                            <h2 className="font-serif-display text-4xl text-white">A Modular Approach</h2>
                            <p className="text-lg text-slate-400">
                                We moved away from rigid page templates to a flexible widget-based system. This allowed analysts to customize their views based on specific threat vectors.
                            </p>
                        </div>
                        {/* Main UI Mockup */}
                        <div className="relative group w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-neutral-surface shadow-2xl shadow-primary/5">
                            {/* Fake browser chrome */}
                            <div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-white/10"></div>
                                    <div className="w-3 h-3 rounded-full bg-white/10"></div>
                                    <div className="w-3 h-3 rounded-full bg-white/10"></div>
                                </div>
                            </div>
                            {/* Image Content */}
                            <div className="w-full h-full bg-cover bg-top transition-transform duration-700 group-hover:scale-[1.01]"
                                 style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2sA8qOn1oIYkoPKpjykcBj9CvSs34IDCkruFjcr2LXxIeEmsmQZMKmBeeFR3W7vj8m5XET957Fo6c9_TuilTvu_8KxxSgiRT9kPXU4WCM8iE7qX35ab4U7V2uPHRxoxO8T-Ag085JzJNLbTJ1-4eFJsRFB7vH6T7HwwVFpPlVHGzrXppkq-CeXr87KctsJmSxxbJe9i34nnBfcixtnC6KQ-afeWjS8u_4wmpPSWV0idspR1xs1gfIkwD8fr12tBvB5ipq5qgpq88')" }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-40"></div>
                            </div>
                        </div>
                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
                            <div className="flex flex-col gap-3">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                                </div>
                                <h3 className="text-white text-lg font-bold">Re-architected Hierarchy</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Dashboard hierarchy allows for deeper drill-downs without losing context of the parent threat vector.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                </div>
                                <h3 className="text-white text-lg font-bold">Modular Internal System</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Internal system is now component-based, allowing rapid deployment of new monitoring tools.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                                <h3 className="text-white text-lg font-bold">Reduced Friction</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    User flows streamlined by 40%, removing redundant confirmation steps for senior analysts.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Design System Preview */}
                    <section ref={designSystemRef} className="py-16 border-y border-white/5 reveal-on-scroll">
                        <div className="flex flex-col md:flex-row gap-12">
                            <div className="md:w-1/3 flex flex-col justify-center">
                                <h2 className="font-serif-display text-4xl text-white mb-6">Scalable Design System</h2>
                                <p className="text-slate-400 mb-8">
                                    Built on a rigid 4px grid, the Sparta design system utilizes high-contrast color tokens to ensure legibility in low-light SOC environments.
                                </p>
                                <div className="flex gap-4">
                                    <div className="h-12 w-12 rounded-full bg-background-dark border border-white/20"></div>
                                    <div className="h-12 w-12 rounded-full bg-primary"></div>
                                    <div className="h-12 w-12 rounded-full bg-accent-teal"></div>
                                    <div className="h-12 w-12 rounded-full bg-accent-lime"></div>
                                </div>
                            </div>
                            <div className="md:w-2/3 grid grid-cols-2 gap-4">
                                {/* Type Scale Card */}
                                <div className="bg-neutral-surface rounded-lg p-6 border border-white/5 flex flex-col justify-between h-64">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-4xl font-serif-display text-white">Aa</span>
                                        <span className="text-slate-500 text-xs font-mono">PRIMARY SERIF</span>
                                    </div>
                                    <div className="flex flex-col gap-1 border-t border-white/10 pt-4">
                                        <span className="text-2xl font-bold text-white tracking-tight">Manrope</span>
                                        <span className="text-slate-500 text-xs font-mono">SECONDARY SANS</span>
                                    </div>
                                </div>
                                {/* Components Card */}
                                <div className="bg-neutral-surface rounded-lg p-6 border border-white/5 flex flex-col gap-4 justify-center items-center h-64">
                                    <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded-md transition-colors">
                                        Primary Action
                                    </button>
                                    <button className="w-full bg-transparent border border-white/20 text-white hover:bg-white/5 font-bold py-2 px-4 rounded-md transition-colors">
                                        Secondary Action
                                    </button>
                                    <div className="w-full flex items-center gap-2 bg-background-dark border border-white/10 rounded px-3 py-2">
                                        <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        <span className="text-slate-500 text-sm">Search assets...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Results */}
                    <section ref={resultsRef} className="py-10 reveal-on-scroll">
                        <h2 className="font-serif-display text-4xl text-white mb-12">Impact & Results</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="flex flex-col gap-2 border-l-2 border-accent-lime pl-6">
                                <span className="text-6xl font-bold text-white tracking-tighter">40%</span>
                                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Reduction in reporting time</p>
                            </div>
                            <div className="flex flex-col gap-2 border-l-2 border-accent-teal pl-6">
                                <span className="text-6xl font-bold text-white tracking-tighter">2.5x</span>
                                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Faster incident triage</p>
                            </div>
                            <div className="flex flex-col gap-2 border-l-2 border-primary pl-6">
                                <span className="text-6xl font-bold text-white tracking-tighter">100%</span>
                                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Analyst Adoption Rate</p>
                            </div>
                            <div className="flex flex-col gap-2 border-l-2 border-white/20 pl-6">
                                <span className="text-6xl font-bold text-white tracking-tighter">-3</span>
                                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Tools Deprecated</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer / Next Project */}
            <Link to="/" className="block">
                <footer className="relative group cursor-pointer overflow-hidden border-t border-white/10 bg-neutral-surface">
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>
                    <div className="max-w-[1024px] mx-auto px-6 py-24 flex items-center justify-between relative z-10">
                        <div className="flex flex-col gap-2">
                            <span className="text-slate-500 font-mono text-sm tracking-widest uppercase">Next Project</span>
                            <h2 className="text-4xl md:text-6xl font-serif-display text-white group-hover:translate-x-2 transition-transform duration-300">Quadra Energy</h2>
                        </div>
                        <div className="h-16 w-16 md:h-24 md:w-24 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                            <svg className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </div>
                    </div>
                </footer>
            </Link>
        </div>
    );
};

export default SpartaCaseStudy;
