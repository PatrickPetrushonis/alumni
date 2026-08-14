import type { NewsPageData } from '../utils/data';

interface NewsPageProps {
  data: NewsPageData;
}

export function NewsPage({ data }: NewsPageProps) {
  return (
    <>
      <h1>{data.heading}</h1>
      <hr />

      {data.sections.map((section, i) => (
        <div key={i}>
          <h2>{section.heading}</h2>

          <div className="responsive one-third">
            <img src={section.image.src} alt={section.image.alt} />
          </div>

          <div className="responsive two-third">
            {section.paragraphs.map((paragraph, j) => (
              <p key={j}>{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}