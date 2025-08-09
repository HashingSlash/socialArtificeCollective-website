import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div>
      <hr className="border-neutral-20 mt-8 mb-4" />
      <h3 className="text-left text-3xl mb-3 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      
      <Avatar name={author.name} picture={author.picture} />
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
  );
}
