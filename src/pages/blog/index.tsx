import type { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import BlogPost from "../../types/BlogPost";
import { getAllBlogPosts } from "../../lib/api";

type Props = {
  blogPosts: BlogPost[];
};

const Blog: NextPage<Props> = ({ blogPosts }) => {
  const router = useRouter();

  return (
    <div className="w-4/5 m-auto">
      <h1 className="pb-3">welcome to the blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link
              href={{
                pathname: `${router.route}/[slug]`,
                query: { slug: post.slug },
              }}
            >
              <a>- {post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

/// get all posts
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const blogPosts = getAllBlogPosts(true);

  // Pass post data to the page via props
  return { props: { blogPosts } };
};

export default Blog;
