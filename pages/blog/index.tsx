import type { NextPage, GetStaticProps } from "next";
import BlogPost from "../../interfaces/blog-post";
import { getAllBlogPosts } from "../../lib/api";

type Props = {
  blogPosts: BlogPost[];
};

const Blog: NextPage<Props> = ({ blogPosts }) => {
  return (
    <>
      <h1>welcome to the blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.slug}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

/// get all posts
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const blogPosts = getAllBlogPosts(true);

  // Pass post data to the page via props
  return { props: { blogPosts } };
};

export default Blog;
