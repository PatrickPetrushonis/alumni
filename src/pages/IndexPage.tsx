import { RichText } from '../components/RichText';
import type { IndexPageData } from '../utils/data';

interface IndexPageProps {
  data: IndexPageData;
  currentNewsletter: string;
}

export function IndexPage({ data, currentNewsletter }: IndexPageProps) {
  return (
    <>
      <h1>{data.heading}</h1>
      <hr />

      {data.intro.map((paragraph, i) => (
        <p key={i}>
          <RichText spans={paragraph} currentNewsletter={currentNewsletter} />
        </p>
      ))}

      <p>{data.purposeIntro}</p>
      <ul>
        {data.purposes.map((purpose, i) => (
          <li key={i}>{purpose}</li>
        ))}
      </ul>

      <p>
        <RichText spans={data.meetingParagraph} currentNewsletter={currentNewsletter} />
      </p>

      <p>{data.scholarshipParagraph}</p>

      <p>{data.contactIntro}</p>
      <ul>
        {data.contacts.map((contact, i) => (
          <li key={i}>{contact}</li>
        ))}
      </ul>

      <p>
        <RichText spans={data.closingParagraph} />
      </p>
    </>
  );
}