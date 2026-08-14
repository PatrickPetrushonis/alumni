import { OfficerCard, BoardCard } from '../components/Global';
import type { OfficersPageData } from '../utils/data';

interface OfficersPageLayoutProps {
  data: OfficersPageData;
}

/**
 * Shared content for both officer pages (AA1 and AAII) — differ only in
 * data, so App.tsx renders this same component twice with different
 * data objects rather than duplicating the JSX.
 */
export function OfficersPageLayout({ data }: OfficersPageLayoutProps) {
  return (
    <>
      <h1>{data.title}</h1>
      <hr />

      <h2>Officers of the Board</h2>

      {data.mailto && (
        <div className="card__container">
          <a className="center button" href={`mailto:${data.mailto}`}>
            {data.mailto}
          </a>
        </div>
      )}

      <div className="card__container">
        {data.officers.map((officer) => (
          <OfficerCard key={officer.position} {...officer} />
        ))}
      </div>

      <h2>Board Members</h2>

      <div className="card__container">
        {data.board.map((member) => (
          <BoardCard key={member.name} {...member} />
        ))}
      </div>
    </>
  );
}