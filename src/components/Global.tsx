import { Link } from 'react-router-dom';

/* ── Header (was macro header(rel_path)) ─────────────────────────────── */

interface HeaderProps {
  isNavOpen: boolean;
  onToggle: () => void;
}

export function Header({ isNavOpen, onToggle }: HeaderProps) {
  return (
    <div className="header__container">
      <h2>
        <Link to="/">BHSNAA1</Link>
      </h2>
      <div className="header__nav-toggle">
        <input
          type="checkbox"
          name="nav-toggle"
          checked={isNavOpen}
          onChange={onToggle}
        />
        <span className="nav-icon"></span>
      </div>
    </div>
  );
}

/* ── Nav (was macro nav(rel_path)) ───────────────────────────────────── */
/* rel_path prefix dropped: all links are now root-absolute. Internal
   pages use <Link> for client-side routing; static PDFs and pages not
   yet ported stay as plain <a> tags served from /public. */

interface NavProps {
  isNavOpen: boolean;
}

export function Nav({ isNavOpen }: NavProps) {
  return (
    <div className={`nav__container${isNavOpen ? ' nav__visible' : ''}`}>
      <ul className="nav__items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="/mission_statement.pdf" target="_blank" rel="noopener noreferrer">
            Mission Statement
          </a>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/newsletters">Newsletters</Link>
        </li>
        <li>
          <a href="/application_for_AA1.pdf" target="_blank" rel="noopener noreferrer">
            Application for AA1
          </a>
        </li>
        <li>
          <a href="/scholarship/scholarship_application.pdf" target="_blank" rel="noopener noreferrer">
            Scholarship Application
          </a>
        </li>
        <li>
          <a href="/scholarship/scholarship_guidelines.pdf" target="_blank" rel="noopener noreferrer">
            Scholarship Guidelines
          </a>
        </li>
        <li>
          <a href="/certification/certification_application.pdf" target="_blank" rel="noopener noreferrer">
            Certification Application
          </a>
        </li>
        <li>
          <a href="/certification/certification_guidelines.pdf" target="_blank" rel="noopener noreferrer">
            Certification Guidelines
          </a>
        </li>
        <li>
          <a href="/bill_statement.pdf" target="_blank" rel="noopener noreferrer">
            Bill Statement
          </a>
        </li>
        <li>
          <a href="/bylaws.pdf" target="_blank" rel="noopener noreferrer">
            Bylaws
          </a>
        </li>
        <li>
          <Link to="/officers">Officers</Link>
        </li>
        <hr />
        <li>
          <a href="/aaii/aaii_mission_statement.pdf" target="_blank" rel="noopener noreferrer">
            AAII Mission Statement
          </a>
        </li>
        <li>
          <a href="/aaii/aaii_application.pdf" target="_blank" rel="noopener noreferrer">
            AAII Application
          </a>
        </li>
        <li>
          <Link to="/aaii/officers">AAII Officers</Link>
        </li>
      </ul>
    </div>
  );
}

/* ── Footer (was macro footer()) ─────────────────────────────────────── */

export function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__info"></div>
    </div>
  );
}

/* ── NewsletterButton (was macro newsletter(path, type)) ─────────────── */
/* Original disabled state used href="javascript:void(0)" as a sentinel
   string. Replaced with path: string | null — null means disabled — so
   callers (e.g. the newsletters data table) express "no PDF for this
   period" directly instead of passing a magic string. */

interface NewsletterButtonProps {
  path: string | null;
  type: string;
}

export function NewsletterButton({ path, type }: NewsletterButtonProps) {
  const isDisabled = path === null;
  const typeLower = type.toLowerCase();
  const typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();

  return (
    <a
      className={`button newsletter__button--${typeLower}${isDisabled ? ' disabled' : ''}`}
      href={isDisabled ? undefined : path}
      target="_blank"
      rel="noopener noreferrer"
      aria-disabled={isDisabled}
    >
      {typeCapitalized}
    </a>
  );
}

/* ── OfficerCard (was macro card__officer(position, name, phone, email)) ── */

interface OfficerCardProps {
  position: string;
  name: string;
  phone: string;
  email?: string;
}

export function OfficerCard({ position, name, phone, email }: OfficerCardProps) {
  return (
    <div className="card__officer">
      <span className="card__officer--title">{position}</span>
      <span className="card__officer--name">{name}</span>
      <span className="card__officer--phone">{phone}</span>
      {email && (
        <a className="card__officer--email button" href={`mailto:${email}`}>
          {email}
        </a>
      )}
    </div>
  );
}

/* ── BoardCard (was macro card__board(name, phone, email)) ──────────── */
/* Source data sometimes passes an empty string for phone (not omitted),
   e.g. card__board('Caren Silhavey', '', 'silhavey@att.net'). Made phone
   optional and conditionally rendered, same as email, so an empty value
   doesn't render an empty <span>. */

interface BoardCardProps {
  name: string;
  phone?: string;
  email?: string;
}

export function BoardCard({ name, phone, email }: BoardCardProps) {
  return (
    <div className="card__board">
      <span className="card__board--name">{name}</span>
      {phone && <span className="card__board--phone">{phone}</span>}
      {email && (
        <a className="card__board--email button" href={`mailto:${email}`}>
          {email}
        </a>
      )}
    </div>
  );
}