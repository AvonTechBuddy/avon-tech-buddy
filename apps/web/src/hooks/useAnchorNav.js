import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection } from '@/lib/scrollToSection';

export function useAnchorNav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isLanding = pathname === '/';

  const handleAnchor = useCallback(
    (e, id) => {
      e.preventDefault();
      if (isLanding) {
        if (scrollToSection(id)) {
          window.history.pushState(null, '', `#${id}`);
        }
      } else {
        navigate(`/#${id}`);
      }
    },
    [isLanding, navigate],
  );

  const anchorHref = useCallback(
    (id) => (isLanding ? `#${id}` : `/#${id}`),
    [isLanding],
  );

  return { isLanding, handleAnchor, anchorHref };
}
