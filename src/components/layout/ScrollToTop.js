import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const prefersReducedMotion = () => (
    typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches
);

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    useEffect(() => {
        const reduceMotion = prefersReducedMotion();

        if (!hash) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'auto'
            });
            return undefined;
        }

        const targetId = decodeURIComponent(hash.replace('#', ''));
        const timeoutId = window.setTimeout(() => {
            const element = document.getElementById(targetId);

            if (element) {
                element.scrollIntoView({
                    behavior: reduceMotion ? 'auto' : 'smooth',
                    block: 'start'
                });
            }
        }, 120);

        return () => window.clearTimeout(timeoutId);
    }, [pathname, hash]);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: prefersReducedMotion() ? 'auto' : 'smooth'
        });
    };

    return (
        <button
            type="button"
            className="scroll-top"
            onClick={handleScrollToTop}
            aria-label="Volver al inicio"
        >
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    style={{
                        transition: 'stroke-dashoffset 10ms linear 0s',
                        strokeDasharray: '307.919, 307.919',
                        strokeDashoffset: '307.919'
                    }}
                >
                </path>
            </svg>
        </button>
    );
};

export default ScrollToTop;
