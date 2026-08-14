import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import type { TextSpan } from '../utils/data';

interface RichTextProps {
  spans: TextSpan[];
  /** Resolves the '@currentNewsletter' placeholder href to an actual PDF path. */
  currentNewsletter?: string;
}

export function RichText({ spans, currentNewsletter }: RichTextProps) {
  return (
    <>
      {spans.map((span, i) => {
        if (span.bold) {
          return (
            <span key={i} className="bold">
              {span.text}
            </span>
          );
        }

        if (span.href) {
          const href =
            span.href === '@currentNewsletter' && currentNewsletter
              ? `/newsletters/${currentNewsletter}.pdf`
              : span.href;

          if (span.external === false) {
            return (
              <Link key={i} to={href}>
                {span.text}
              </Link>
            );
          }

          return (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer">
              {span.text}
            </a>
          );
        }

        return <Fragment key={i}>{span.text}</Fragment>;
      })}
    </>
  );
}