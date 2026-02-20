import React from 'react';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center pt-24 pb-20 relative z-10 reveal-on-scroll">
            <div className="hidden md:block absolute top-[20%] right-[15%] text-label text-[var(--text-grey)]">Product Lead</div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-9 lg:col-start-2">
                    <h1 className="font-serif-display text-[56px] md:text-[80px] lg:text-[100px] leading-[0.95] tracking-tight mb-12 relative">
                        <span className="block ml-0 md:-ml-8">Building modern</span>
                        <span className="block md:pl-24 text-[var(--text-grey)] opacity-80">digital products</span>
                        <span className="block md:pl-8">through structured,</span>
                        <span className="block md:text-right">intentional design.</span>
                    </h1>
                </div>
                <div className="col-span-12 md:col-span-4 md:col-start-2 mt-8 md:mt-16">
                    <p className="text-[var(--text-grey)] text-sm md:text-base leading-relaxed max-w-sm border-l border-[var(--border-subtle)] pl-4">
                        Product Design Lead working across Web3, mobility, energy, fintech, and AI.
                    </p>
                </div>
            </div>
            <div className="absolute bottom-12 left-6 md:left-12 text-[var(--text-grey)] animate-bounce">
                <span className="material-symbols-outlined text-sm">arrow_downward</span>
            </div>
        </section>
    );
};

export default Hero;
