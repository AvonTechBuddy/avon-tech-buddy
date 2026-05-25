
import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { scrollToSection } from '@/lib/scrollToSection';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useLayoutEffect(() => {
        if (hash) {
            const id = hash.slice(1);
            if (scrollToSection(id)) return;
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [pathname, hash]);

    return null;
}

export default ScrollToTop;
