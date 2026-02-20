import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-8 md:px-12 md:py-8 flex justify-between items-center bg-transparent backdrop-blur-[2px]">
            <div className="font-medium text-sm tracking-wide">Kevin Jordi</div>
            <div className="flex gap-8 text-sm text-[var(--text-grey)]">
                <a className="hover:text-white transition-colors nav-link" href="#about">About</a>
                <a className="hover:text-white transition-colors nav-link" href="#work">Work</a>
                <a className="hover:text-white transition-colors nav-link" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </nav>
    );
};

export default Navbar;
