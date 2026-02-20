import React from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const WaysOfWorking = () => {
    const ref = useRevealOnScroll();

    return (
        <section ref={ref} className="py-24 md:py-40 border-t border-[var(--border-subtle)] relative z-10 reveal-on-scroll">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-8">
                <div className="col-span-12 md:col-span-3">
                    <span className="text-label text-[var(--text-grey)] mb-8 block">03 — Ways of Working</span>
                    <h3 className="font-serif-display text-3xl md:text-4xl leading-tight sticky top-32">
                        Guided by clarity,<br/>
                        shaped by insight,<br/>
                        built for scale.
                    </h3>
                </div>
                <div className="col-span-12 md:col-span-8 md:col-start-5 space-y-12">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 border-l border-[var(--border-subtle)] pl-6 md:pl-10 py-2">
                        <span className="font-serif-display text-2xl text-[var(--text-grey)] opacity-50">01</span>
                        <div>
                            <h4 className="text-lg font-medium mb-2 text-white">Understanding before executing</h4>
                            <p className="text-[var(--text-grey)] font-light leading-relaxed max-w-md">
                                Deep diving into the problem space to ensure structural decisions are rooted in actual user needs, not assumptions.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 border-l border-[var(--border-subtle)] pl-6 md:pl-10 py-2">
                        <span className="font-serif-display text-2xl text-[var(--text-grey)] opacity-50">02</span>
                        <div>
                            <h4 className="text-lg font-medium mb-2 text-white">Structure that scales</h4>
                            <p className="text-[var(--text-grey)] font-light leading-relaxed max-w-md">
                                Building design systems and component libraries that grow with the product, reducing debt and increasing velocity.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 border-l border-[var(--border-subtle)] pl-6 md:pl-10 py-2">
                        <span className="font-serif-display text-2xl text-[var(--text-grey)] opacity-50">03</span>
                        <div>
                            <h4 className="text-lg font-medium mb-2 text-white">Decisions based on behavior</h4>
                            <p className="text-[var(--text-grey)] font-light leading-relaxed max-w-md">
                                Utilizing data and behavioral insights to refine interactions and validate the product direction iteratively.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 border-l border-[var(--border-subtle)] pl-6 md:pl-10 py-2">
                        <span className="font-serif-display text-2xl text-[var(--text-grey)] opacity-50">04</span>
                        <div>
                            <h4 className="text-lg font-medium mb-2 text-white">Collaboration without friction</h4>
                            <p className="text-[var(--text-grey)] font-light leading-relaxed max-w-md">
                                Creating shared languages between design and engineering to ensure the final build matches the intended experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WaysOfWorking;
