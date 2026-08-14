import { Link } from 'react-router-dom';
import type { NotFoundPageData } from '../utils/data';

interface NotFoundPageProps {
  data: NotFoundPageData;
}

export function NotFoundPage({ data }: NotFoundPageProps) {
  return (
    <>
      <h1>{data.heading}</h1>
      <hr />

      <div className="center">
        <p>{data.message}</p>
        <Link className="button" to={data.buttonHref}>
          {data.buttonText}
        </Link>
      </div>
    </>
  );
}