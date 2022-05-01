import Link from 'next/link';
import DateComponent from './date';

export default function FeaturedPost({
  title,
  excerpt,
  date,
  slug
}) {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/posts/${slug}`}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateComponent dateString={date} />
          </div>
          <p>{excerpt}</p>
        </div>
      </div>
    </section>
  )
}