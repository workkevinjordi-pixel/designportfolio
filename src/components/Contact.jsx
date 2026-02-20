import React from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const Contact = () => {
    const ref = useRevealOnScroll();

    return (
        <section ref={ref} className="py-24 md:py-40 border-t border-[var(--border-subtle)] mb-20 relative z-10 reveal-on-scroll">
            <div className="max-w-3xl mx-auto text-center">
                <span className="text-label text-[var(--text-grey)] mb-6 block">04 — Contact</span>
                <h2 className="font-serif-display text-5xl md:text-7xl mb-6">Get in touch.</h2>
                <p className="text-[var(--text-grey)] text-lg mb-12 font-light">Reach out, and let's explore what's possible.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a className="inline-flex items-center justify-center px-8 py-3 border border-[rgba(255,255,255,0.2)] hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-wide" href="mailto:hello@kevinjordi.com">
                        Send me an email
                    </a>
                    <a className="inline-flex items-center justify-center px-8 py-3 border border-[rgba(255,255,255,0.2)] hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-wide" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        LinkedIn Profile
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
