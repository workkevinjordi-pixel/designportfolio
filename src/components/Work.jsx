import React from 'react';

const Work = () => {
    return (
        <section className="py-24 md:py-40 border-t border-[var(--border-subtle)] relative z-10 reveal-on-scroll" id="work">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 mb-20">
                <div className="col-span-12 md:col-span-3">
                    <span className="text-label text-[var(--text-grey)]">02 — Case Study</span>
                </div>
                <div className="col-span-12 md:col-span-8">
                    <h2 className="font-serif-display text-4xl md:text-5xl">Work shaped by user insight and thoughtful design.</h2>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                <div className="group cursor-pointer">
                    <div className="aspect-[4/3] w-full bg-[#111] mb-6 overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center text-[var(--border-subtle)] text-6xl font-serif-display opacity-20 group-hover:scale-105 transition-transform duration-700">Sparta</div>
                    </div>
                    <h3 className="font-serif-display text-2xl mb-2 group-hover:underline decoration-1 underline-offset-4">Sparta</h3>
                    <p className="text-[var(--text-grey)] text-sm leading-relaxed">Structured vulnerability reporting platform for cybersecurity teams.</p>
                </div>
                <div className="group cursor-pointer">
                    <div className="aspect-[4/3] w-full bg-[#111] mb-6 overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center text-[var(--border-subtle)] text-6xl font-serif-display opacity-20 group-hover:scale-105 transition-transform duration-700">Quadra</div>
                    </div>
                    <h3 className="font-serif-display text-2xl mb-2 group-hover:underline decoration-1 underline-offset-4">Quadra Energy</h3>
                    <p className="text-[var(--text-grey)] text-sm leading-relaxed">Token-based renewable energy trading platform.</p>
                </div>
                <div className="group cursor-pointer">
                    <div className="aspect-[4/3] w-full bg-[#111] mb-6 overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center text-[var(--border-subtle)] text-6xl font-serif-display opacity-20 group-hover:scale-105 transition-transform duration-700">Simply</div>
                    </div>
                    <h3 className="font-serif-display text-2xl mb-2 group-hover:underline decoration-1 underline-offset-4">SimplyHop</h3>
                    <p className="text-[var(--text-grey)] text-sm leading-relaxed">Mobility coordination platform for structured ride sharing.</p>
                </div>
            </div>
        </section>
    );
};

export default Work;
