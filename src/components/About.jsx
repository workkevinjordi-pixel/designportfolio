import React from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const About = () => {
    const ref = useRevealOnScroll();

    return (
        <section ref={ref} className="py-24 md:py-40 border-t border-[var(--border-subtle)] relative z-10 reveal-on-scroll" id="about">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-8">
                <div className="col-span-12 md:col-span-3">
                    <span className="text-label text-[var(--text-grey)] sticky top-32">01 — About</span>
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-6">
                    <h2 className="font-serif-display text-4xl md:text-5xl mb-12">Clarity, structure, and scalable design.</h2>
                    <div className="space-y-8 text-[var(--text-grey)] text-lg leading-relaxed font-light">
                        <p>
                            Focused on creating modern digital products across startups, agencies, and emerging Web3 platforms.
                        </p>
                        <p>
                            The work emphasizes clarity, structure, and scalable product systems that support multi-role and multi-platform environments. Efforts center on reducing complexity, improving stakeholder alignment, and introducing systems that help teams operate with precision.
                        </p>
                        <p>
                            Projects span Web3, mobility, energy, fintech, and AI — collaborating with distributed teams across Europe and Asia.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
