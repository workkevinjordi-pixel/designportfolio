import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-[var(--border-subtle)] text-center relative z-10">
            <div className="flex flex-col gap-4">
                <p className="font-serif-display text-xl">Portfolio of Kevin Jordi</p>
                <p className="text-[var(--text-grey)] text-xs tracking-widest uppercase opacity-60">Clear. Scalable. Intentional Product Experience.</p>
            </div>
        </footer>
    );
};

export default Footer;
