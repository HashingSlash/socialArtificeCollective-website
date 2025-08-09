import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section>
      
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="text-left mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <CoverImage title={title} src={coverImage} slug={slug} />
        </div>
        <div>
         <hr className="border-neutral-20 mt-8 mb-4" />
          <div className="mb-4 md:mb-0 text-lg">
          <Avatar name={author.name} picture={author.picture} />
          </div>
          <div className="text-lg mb-4">
          <DateFormatter dateString={date} />
          </div>
          <p className="text-lg leading-relaxed mb-4">
            <Link
              as={`/posts/${slug}`}
              href="posts/[slug]"
              className="hover:underline"
            >
              {excerpt}
            </Link>
          </p>
          
        </div>
      </div>
    </section>
  );
}
