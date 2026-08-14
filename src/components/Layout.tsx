import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { Header, Nav, Footer } from './Global';
import { useNavToggle } from '../utils/useNavToggle';

interface LayoutProps {
  pagename: string;
  children: ReactNode;
}

export function Layout({ pagename, children }: LayoutProps) {
  const { isNavOpen, toggleNav } = useNavToggle();

  // Was <title>{{ pagename }}</title> inside <head> in layout.nunjucks.
  // A literal <title> JSX element does not set document.title in a client
  // render — it must be done as a side effect.
  useEffect(() => {
    document.title = pagename;
  }, [pagename]);

  return (
    <div id="page-top" className="main__container">
      <Header isNavOpen={isNavOpen} onToggle={toggleNav} />
      <Nav isNavOpen={isNavOpen} />
      <div className="main__content">
        <div className="main__content--centered">{children}</div>
      </div>
      <Footer />
    </div>
  );
}