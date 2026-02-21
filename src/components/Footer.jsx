import React from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const Footer = () => {
    const ref = useRevealOnScroll();

    return (
        <footer ref={ref} className="py-12 border-t border-[var(--border-subtle)] text-center relative z-10 reveal-on-scroll">
            <div className="flex flex-col gap-4">
                <p className="font-serif-display text-xl">Portfolio of Kevin Jordi</p>
                <p className="text-[var(--text-grey)] text-xs tracking-widest uppercase opacity-60">Clear. Scalable. Intentional Product Experience.</p>
            </div>
        </footer>
    );
};

export default Footer;
