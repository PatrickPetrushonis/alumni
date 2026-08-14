import { useState, useCallback } from 'react';

/**
 * Replaces menu-toggle.js.
 *
 * Original jQuery version listened for a click on
 * '.header__nav-toggle input' and walked the DOM
 * (.closest('.main__container').find('.nav__container'))
 * to add/remove a 'nav__visible' class.
 *
 * Here the open/closed state lives in the nearest common
 * ancestor (Layout) and is passed down to Header (which
 * renders the toggle input) and Nav (which reads it to
 * decide whether to render the 'nav__visible' class).
 * No DOM traversal needed — React state replaces querying.
 */
export function useNavToggle() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = useCallback(() => {
    setIsNavOpen((prev) => !prev);
  }, []);

  return { isNavOpen, toggleNav };
}