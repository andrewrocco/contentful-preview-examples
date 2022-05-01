import DateComponent from './date';

import Link from 'next/link';

export default function MorePosts({
  title,
  excerpt,
  date,
  slug,
}) {
  return (  
    <>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateComponent dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </>
  );
}