import rawData from '../data/data.json';

export interface TextSpan {
  text: string;
  bold?: boolean;
  href?: string;
  /** false = internal route (<Link>); true/omitted = external file (<a target="_blank">) */
  external?: boolean;
}

export interface IndexPageData {
  pagename: string;
  heading: string;
  intro: TextSpan[][];
  purposeIntro: string;
  purposes: string[];
  meetingParagraph: TextSpan[];
  scholarshipParagraph: string;
  contactIntro: string;
  contacts: string[];
  closingParagraph: TextSpan[];
}

export interface NewsSection {
  heading: string;
  image: { src: string; alt: string };
  paragraphs: string[];
}

export interface NewsPageData {
  pagename: string;
  heading: string;
  sections: NewsSection[];
}

export interface NotFoundPageData {
  pagename: string;
  heading: string;
  message: string;
  buttonText: string;
  buttonHref: string;
}

export interface Officer {
  position: string;
  name: string;
  phone: string;
  email?: string;
}

export interface BoardMember {
  name: string;
  phone?: string;
  email?: string;
}

export interface OfficersPageData {
  pagename: string;
  title: string;
  mailto?: string;
  officers: Officer[];
  board: BoardMember[];
}

export interface NewsletterYear {
  year: number;
  spring: string | null;
  fall: string | null;
}

export interface NewslettersPageData {
  pagename: string;
  heading: string;
  current: string;
  archive: NewsletterYear[];
}

// Empty-string phone entries in the source JSON (e.g. Caren Silhavey) are
// normalized to undefined here, so BoardCard's conditional rendering
// (phone && <span>...) behaves the same regardless of whether the source
// data omitted the field or left it as "".
function normalizeBoard(board: BoardMember[]): BoardMember[] {
  return board.map((member) => ({
    ...member,
    phone: member.phone ? member.phone : undefined,
  }));
}

export const indexData: IndexPageData = rawData.index;
export const newsData: NewsPageData = rawData.news;
export const notFoundData: NotFoundPageData = rawData.notFound;

export const aa1OfficersData: OfficersPageData = {
  ...(rawData.officers.aa1 as OfficersPageData),
  board: normalizeBoard(rawData.officers.aa1.board),
};

export const aaiiOfficersData: OfficersPageData = {
  ...(rawData.officers.aaii as OfficersPageData),
  board: normalizeBoard(rawData.officers.aaii.board),
};

export const newslettersData: NewslettersPageData = rawData.newsletters;