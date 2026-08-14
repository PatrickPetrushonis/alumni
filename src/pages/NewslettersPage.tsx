import { NewsletterButton } from '../components/Global';
import type { NewslettersPageData } from '../utils/data';

interface NewslettersPageProps {
  data: NewslettersPageData;
}

const newsletterPath = (filename: string | null) =>
  filename ? `/newsletters/${filename}` : null;

export function NewslettersPage({ data }: NewslettersPageProps) {
  return (
    <>
      <h1>{data.heading}</h1>
      <hr />

      <div className="newsletter__container">
        <a
          className="button newsletter__button--main"
          href={`/newsletters/${data.current}.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Latest Newsletter
        </a>

        {data.archive.map(({ year, spring, fall }) => (
          <div key={year}>
            <h2>{year} Newsletters</h2>
            <NewsletterButton path={newsletterPath(spring)} type="Spring" />
            <NewsletterButton path={newsletterPath(fall)} type="Fall" />
          </div>
        ))}
      </div>
    </>
  );
}